// convex/frameworks.ts
import { mutation, query } from "convex";
import { v } from "convex/values";

export const getFrameworkCode = query({
  args: { framework: v.string, userId: v.string },
  handler: async ({ db }, { framework, userId }) => {
    return await db.table("frameworks").filter({ framework, userId }).first();
  },
});

export const saveFrameworkCode = mutation({
  args: { framework: v.string, userId: v.string, files: v.any },
  handler: async ({ db }, { framework, userId, files }) => {
    return await db.table("frameworks").insert({ framework, userId, files });
  },
});
