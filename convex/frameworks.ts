// convex/frameworks.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getFrameworkCode = query({
  args: { framework: v.string(), userId: v.string() },
  handler: async ({ db }, { framework, userId }) => {
    return await db
  .query("frameworks")
  .withIndex("by_framework_user", (q) =>
    q.eq("framework", framework).eq("userId", userId)
  )
  .first();
  },
});

export const saveFrameworkCode = mutation({
  args: { framework: v.string(), userId: v.string(), files: v.any() },
  handler: async ({ db }, { framework, userId, files }) => {
    return await db.insert("frameworks", { framework, userId, files });
  },
});
