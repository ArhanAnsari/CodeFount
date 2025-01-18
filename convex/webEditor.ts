import { query, mutation } from './_generated/server';
import sanitizeHtml from 'sanitize-html'; // To sanitize HTML and avoid XSS attacks

// Fetch user content
export const fetchContent = query(async ({ db }, { userId }: { userId: string }) => {
  const content = await db
    .query('webEditorContent')
    .withIndex('by_user_id', (q) => q.eq('userId', userId))
    .first();

  return content || { html: '', css: '', js: '', updatedAt: Date.now() };
});

// Validate and sanitize input
const validateAndSanitize = (html: string, css: string, js: string) => {
  const sanitizedHtml = sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['p', 'div', 'span', 'b', 'i', 'u', 'br']),
    allowedAttributes: {
      '*': ['style'], // Allow inline styles
    },
    allowedSchemes: ['http', 'https', 'mailto'], // Allow safe schemes
  });

  const sanitizedCss = css.replace(/<|>/g, ''); // Basic sanitization for CSS
  const sanitizedJs = js.replace(/<|>/g, ''); // Basic sanitization for JS

  return { sanitizedHtml, sanitizedCss, sanitizedJs };
};

// Save or update content
export const saveContent = mutation(
  async ({ db }, { userId, html, css, js }: { userId: string; html: string; css: string; js: string }) => {
    const { sanitizedHtml, sanitizedCss, sanitizedJs } = validateAndSanitize(html, css, js);
    const updatedAt = Date.now();

    const existingContent = await db
      .query('webEditorContent')
      .withIndex('by_user_id', (q) => q.eq('userId', userId))
      .first();

    if (existingContent) {
      // Update existing record
      await db.replace(existingContent._id, { userId, html: sanitizedHtml, css: sanitizedCss, js: sanitizedJs, updatedAt });
    } else {
      // Create new record
      await db.insert('webEditorContent', { userId, html: sanitizedHtml, css: sanitizedCss, js: sanitizedJs, updatedAt });
    }

    return { success: true, updatedAt };
  }
);
