import { query, mutation } from "./_generated/server";
import sanitizeHtml from "sanitize-html"; // Prevent XSS attacks

// Fetch the latest user content
export const fetchContent = query(async ({ db }, { userId }: { userId: string }) => {
  const content = await db
    .query("webEditorContent")
    .withIndex("by_user_id", (q) => q.eq("userId", userId))
    .order("desc") // Get the latest entry
    .first();

  return content || { html: "", css: "", js: "", updatedAt: Date.now() };
});

// Validate and sanitize input
const validateAndSanitize = (html: string, css: string, js: string) => {
  const sanitizedHtml = sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["p", "div", "span", "b", "i", "u", "br"]),
    allowedAttributes: { "*": ["style"] },
    allowedSchemes: ["http", "https", "mailto"],
  });

  const sanitizedCss = css.replace(/<|>/g, ""); // Basic sanitization for CSS
  const sanitizedJs = js.replace(/<|>/g, ""); // Basic sanitization for JS

  return { sanitizedHtml, sanitizedCss, sanitizedJs };
};

// Save all changes as new documents (keeps history)
export const saveContent = mutation(
  async (
    { db },
    { userId, html, css, js, updatedAt }: { userId: string; html: string; css: string; js: string; updatedAt: number }
  ) => {
    const { sanitizedHtml, sanitizedCss, sanitizedJs } = validateAndSanitize(html, css, js);

    // Always insert a new document
    await db.insert("webEditorContent", { userId, html: sanitizedHtml, css: sanitizedCss, js: sanitizedJs, updatedAt });

    return { success: true, updatedAt };
  }
);

