/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as codeExecutions from "../codeExecutions.js";
import type * as frameworks from "../frameworks.js";
import type * as gemini from "../gemini.js";
import type * as http from "../http.js";
import type * as lemonSqueezy from "../lemonSqueezy.js";
import type * as snippets from "../snippets.js";
import type * as users from "../users.js";
import type * as webEditor from "../webEditor.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  codeExecutions: typeof codeExecutions;
  frameworks: typeof frameworks;
  gemini: typeof gemini;
  http: typeof http;
  lemonSqueezy: typeof lemonSqueezy;
  snippets: typeof snippets;
  users: typeof users;
  webEditor: typeof webEditor;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
