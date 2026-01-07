var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ClaudeCodePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian5 = require("obsidian");

// src/ui/view.ts
var import_obsidian3 = require("obsidian");

// src/core/types.ts
var VIEW_TYPE_CLAUDE_CODE = "claude-code-view";

// src/i18n/locales/en.ts
var en = {
  // Header
  "header.title": "Claude Code assistant",
  "header.noNoteSelected": "no note selected",
  // Input Section
  "input.label": "Your instructions:",
  "input.placeholder": 'e.g., "Add more examples to this section" or "Reorganize with better headers" (Enter to send, Ctrl+Enter for new line)',
  "input.conversationalMode": "conversational mode (no file edits)",
  "input.conversationalModeTooltip": "Chat with Claude without modifying any files",
  "input.selectedTextOnly": "Edit selected text only",
  "input.autoAccept": "Auto-accept changes",
  "input.modelLabel": "Model:",
  "input.modelDefault": "Default",
  "input.runButton": "Run Claude Code",
  "input.runningButton": "Running...",
  "input.cancelButton": "Cancel",
  // Result Section
  "result.title": "Result",
  // Output Section
  "output.title": "Output",
  // Preview Section
  "preview.title": "Preview",
  "preview.tabRaw": "Raw",
  "preview.tabDiff": "Diff",
  "preview.tabRendered": "Rendered",
  "preview.originalChars": "Original:",
  "preview.modifiedChars": "Modified:",
  "preview.chars": "chars",
  "preview.applyButton": "apply changes",
  "preview.rejectButton": "reject",
  // History Section
  "history.title": "History",
  "history.clearButton": "Clear",
  // Agent Section
  "agent.planTitle": "plan",
  "agent.activityTitle": "Activity",
  "agent.noPlan": "No plan created yet",
  // Todo Status
  "todo.pending": "pending",
  "todo.inProgress": "in progress",
  "todo.completed": "completed",
  // Interactive Prompt
  "interactive.header": "Claude is asking for confirmation",
  "interactive.yesButton": "yes",
  "interactive.noButton": "no",
  "interactive.customPlaceholder": "Or type a custom response...",
  // Permission Approval
  "permission.header": "permission required",
  "permission.message": "Claude is requesting permission to execute actions.",
  "permission.approveButton": "approve & continue",
  "permission.denyButton": "deny",
  // Status Messages
  "status.processing": "Claude is processing",
  "status.autoApplying": "Auto-applying changes...",
  "status.runningAuthorized": "Running authorized tasks",
  "status.runningInBackground": "Running in background...",
  "status.failed": "Failed - see error below",
  // Notifications
  "notice.alreadyProcessing": "Already processing a request. Please wait.",
  "notice.enterPrompt": "Please enter a prompt",
  "notice.noActiveNote": "No active note found, please open a Markdown note first",
  "notice.noEditor": "No Markdown editor found, please make sure you have a note open",
  "notice.noVaultPath": "Could not determine vault path",
  "notice.completed": "Claude Code completed",
  "notice.completedNoChanges": "Claude Code completed (no file changes)",
  "notice.changesApplied": "changes applied automatically",
  "notice.changesAppliedSuccess": "changes applied successfully",
  "notice.failedApplyChanges": "failed to apply changes",
  "notice.changesRejected": "Changes rejected",
  "notice.cancelled": "Cancelled",
  "notice.permissionRequest": "Claude is requesting permission - please approve or deny",
  "notice.permissionDenied": "Permission denied - Claude will not proceed",
  "notice.noChangesToApply": "no changes to apply",
  "notice.noActiveFile": "no active file",
  "notice.historyRestored": "History item restored",
  "notice.historyRestoredWithChanges": "History item restored with proposed changes",
  "notice.historyCleared": "History cleared",
  // Diff View
  "diff.original": "Original",
  "diff.modified": "Modified",
  // Result Renderer
  "result.directAnswer": "Direct answer",
  "result.additionalContext": "Additional Context",
  "result.tokens": "tokens",
  "result.tokensIn": "in",
  "result.tokensOut": "out",
  // Preview Stats
  "preview.originalLabel": "Original:",
  "preview.modifiedLabel": "Modified:",
  "preview.charsLabel": "chars",
  // Misc
  "misc.noPendingRequest": "No pending request found",
  "misc.languageChanged": "Language changed. Some UI elements will update on reload.",
  "misc.testFailed": "Claude Code test failed",
  // Settings
  "settings.autoDetectPath": "Auto-detect Claude Code path",
  "settings.autoDetectPathDesc": "Automatically detect the Claude Code executable location",
  "settings.executablePath": "Claude Code executable path",
  "settings.executablePathDesc": "Full path to the Claude Code executable (e.g., /usr/local/bin/claude)",
  "settings.testInstallation": "Test Claude Code installation",
  "settings.testInstallationDesc": "Verify that Claude Code is accessible and working",
  "settings.testButton": "Test",
  "settings.testWorking": "working!",
  "settings.testFailed": "failed",
  "settings.customPrompt": "Custom system prompt",
  "settings.customPromptDesc": "Optional custom system prompt to prepend to all requests",
  "settings.customPromptPlaceholder": "You are helping edit markdown notes...",
  "settings.preserveCursor": "Preserve cursor position",
  "settings.preserveCursorDesc": "Try to maintain cursor position after applying changes",
  "settings.autoAcceptChanges": "Auto-accept changes",
  "settings.autoAcceptChangesDesc": "Automatically apply changes without showing preview (use with caution!)",
  "settings.model": "Model",
  "settings.modelDesc": "Select the Claude model to use: Sonnet (balanced), Opus (most capable), or Haiku (fastest). Leave empty to use the default subagent model.",
  "settings.modelDefault": "Default (subagent model)",
  "settings.modelSonnet": "Sonnet (balanced)",
  "settings.modelOpus": "Opus (most capable)",
  "settings.modelHaiku": "Haiku (fastest)",
  "settings.vaultAccess": "Allow vault-wide access",
  "settings.vaultAccessDesc": "Allow Claude to read/search other files in your vault (not just the current note)",
  "settings.permissionlessMode": "Enable permissionless mode",
  "settings.permissionlessModeDesc": "Allow Claude to execute actions without asking for permission each time (use with caution! Claude will have full control)",
  "settings.timeout": "Timeout (seconds)",
  "settings.timeoutDesc": "Maximum time to wait for Claude Code response (0 = no timeout)",
  "settings.customApiConfig": "Custom API configuration",
  "settings.customApiConfigDesc": "Configure custom API endpoints for regions where Claude is not directly available. Leave empty to use default settings.",
  "settings.apiBaseUrl": "API base URL",
  "settings.apiBaseUrlDesc": "Custom API endpoint URL (e.g., https://api.kimi.com/coding/)",
  "settings.apiAuthToken": "API auth token",
  "settings.apiAuthTokenDesc": "Custom authentication token for the API endpoint",
  "settings.apiAuthTokenPlaceholder": "Enter your API token",
  "settings.customModel": "Custom model",
  "settings.customModelDesc": "Custom model name to use (e.g., kimi-for-coding). Overrides the model dropdown above.",
  "settings.customSmallModel": "Custom small/fast model",
  "settings.customSmallModelDesc": "Custom model name for fast operations (e.g., kimi-for-coding)",
  "settings.language": "Language",
  "settings.languageDesc": "Select interface language"
};

// src/i18n/locales/zh.ts
var zh = {
  // Header
  "header.title": "Claude Code \u52A9\u624B",
  "header.noNoteSelected": "\u672A\u9009\u62E9\u7B14\u8BB0",
  // Input Section
  "input.label": "\u8F93\u5165\u6307\u4EE4\uFF1A",
  "input.placeholder": '\u4F8B\u5982\uFF1A"\u4E3A\u8FD9\u4E2A\u90E8\u5206\u6DFB\u52A0\u66F4\u591A\u793A\u4F8B" \u6216 "\u7528\u66F4\u597D\u7684\u6807\u9898\u91CD\u65B0\u7EC4\u7EC7"\uFF08\u56DE\u8F66\u53D1\u9001\uFF0CCtrl+\u56DE\u8F66\u6362\u884C\uFF09',
  "input.conversationalMode": "\u5BF9\u8BDD\u6A21\u5F0F\uFF08\u4E0D\u4FEE\u6539\u6587\u4EF6\uFF09",
  "input.conversationalModeTooltip": "\u4E0E Claude \u5BF9\u8BDD\u4F46\u4E0D\u4FEE\u6539\u4EFB\u4F55\u6587\u4EF6",
  "input.selectedTextOnly": "\u4EC5\u7F16\u8F91\u9009\u4E2D\u6587\u672C",
  "input.autoAccept": "\u81EA\u52A8\u5E94\u7528\u66F4\u6539",
  "input.modelLabel": "\u6A21\u578B\uFF1A",
  "input.modelDefault": "\u9ED8\u8BA4",
  "input.runButton": "\u8FD0\u884C Claude Code",
  "input.runningButton": "\u8FD0\u884C\u4E2D...",
  "input.cancelButton": "\u53D6\u6D88",
  // Result Section
  "result.title": "\u7ED3\u679C",
  // Output Section
  "output.title": "\u8F93\u51FA",
  // Preview Section
  "preview.title": "\u9884\u89C8",
  "preview.tabRaw": "\u539F\u59CB",
  "preview.tabDiff": "\u5DEE\u5F02",
  "preview.tabRendered": "\u6E32\u67D3",
  "preview.originalChars": "\u539F\u59CB\uFF1A",
  "preview.modifiedChars": "\u4FEE\u6539\u540E\uFF1A",
  "preview.chars": "\u5B57\u7B26",
  "preview.applyButton": "\u5E94\u7528\u66F4\u6539",
  "preview.rejectButton": "\u62D2\u7EDD",
  // History Section
  "history.title": "\u5386\u53F2\u8BB0\u5F55",
  "history.clearButton": "\u6E05\u9664",
  // Agent Section
  "agent.planTitle": "\u8BA1\u5212",
  "agent.activityTitle": "\u6D3B\u52A8",
  "agent.noPlan": "\u5C1A\u672A\u521B\u5EFA\u8BA1\u5212",
  // Todo Status
  "todo.pending": "\u5F85\u5904\u7406",
  "todo.inProgress": "\u8FDB\u884C\u4E2D",
  "todo.completed": "\u5DF2\u5B8C\u6210",
  // Interactive Prompt
  "interactive.header": "Claude \u6B63\u5728\u8BF7\u6C42\u786E\u8BA4",
  "interactive.yesButton": "\u662F",
  "interactive.noButton": "\u5426",
  "interactive.customPlaceholder": "\u6216\u8F93\u5165\u81EA\u5B9A\u4E49\u56DE\u590D...",
  // Permission Approval
  "permission.header": "\u9700\u8981\u6743\u9650",
  "permission.message": "Claude \u6B63\u5728\u8BF7\u6C42\u6267\u884C\u64CD\u4F5C\u7684\u6743\u9650\u3002",
  "permission.approveButton": "\u6279\u51C6\u5E76\u7EE7\u7EED",
  "permission.denyButton": "\u62D2\u7EDD",
  // Status Messages
  "status.processing": "Claude \u6B63\u5728\u5904\u7406",
  "status.autoApplying": "\u6B63\u5728\u81EA\u52A8\u5E94\u7528\u66F4\u6539...",
  "status.runningAuthorized": "\u6B63\u5728\u6267\u884C\u6388\u6743\u4EFB\u52A1",
  "status.runningInBackground": "\u540E\u53F0\u8FD0\u884C\u4E2D...",
  "status.failed": "\u5931\u8D25 - \u8BF7\u67E5\u770B\u4E0B\u65B9\u9519\u8BEF\u4FE1\u606F",
  // Notifications
  "notice.alreadyProcessing": "\u6B63\u5728\u5904\u7406\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u5019\u3002",
  "notice.enterPrompt": "\u8BF7\u8F93\u5165\u6307\u4EE4",
  "notice.noActiveNote": "\u672A\u627E\u5230\u6D3B\u52A8\u7B14\u8BB0\uFF0C\u8BF7\u5148\u6253\u5F00\u4E00\u4E2A Markdown \u7B14\u8BB0",
  "notice.noEditor": "\u672A\u627E\u5230 Markdown \u7F16\u8F91\u5668\uFF0C\u8BF7\u786E\u4FDD\u5DF2\u6253\u5F00\u7B14\u8BB0",
  "notice.noVaultPath": "\u65E0\u6CD5\u786E\u5B9A\u4ED3\u5E93\u8DEF\u5F84",
  "notice.completed": "Claude Code \u5DF2\u5B8C\u6210",
  "notice.completedNoChanges": "Claude Code \u5DF2\u5B8C\u6210\uFF08\u65E0\u6587\u4EF6\u66F4\u6539\uFF09",
  "notice.changesApplied": "\u66F4\u6539\u5DF2\u81EA\u52A8\u5E94\u7528",
  "notice.changesAppliedSuccess": "\u66F4\u6539\u5DF2\u6210\u529F\u5E94\u7528",
  "notice.failedApplyChanges": "\u5E94\u7528\u66F4\u6539\u5931\u8D25",
  "notice.changesRejected": "\u66F4\u6539\u5DF2\u62D2\u7EDD",
  "notice.cancelled": "\u5DF2\u53D6\u6D88",
  "notice.permissionRequest": "Claude \u6B63\u5728\u8BF7\u6C42\u6743\u9650 - \u8BF7\u6279\u51C6\u6216\u62D2\u7EDD",
  "notice.permissionDenied": "\u6743\u9650\u88AB\u62D2\u7EDD - Claude \u5C06\u4E0D\u4F1A\u7EE7\u7EED",
  "notice.noChangesToApply": "\u6CA1\u6709\u53EF\u5E94\u7528\u7684\u66F4\u6539",
  "notice.noActiveFile": "\u6CA1\u6709\u6D3B\u52A8\u6587\u4EF6",
  "notice.historyRestored": "\u5386\u53F2\u8BB0\u5F55\u9879\u5DF2\u6062\u590D",
  "notice.historyRestoredWithChanges": "\u5386\u53F2\u8BB0\u5F55\u9879\u5DF2\u6062\u590D\uFF08\u5305\u542B\u5EFA\u8BAE\u7684\u66F4\u6539\uFF09",
  "notice.historyCleared": "\u5386\u53F2\u8BB0\u5F55\u5DF2\u6E05\u9664",
  // Diff View
  "diff.original": "\u539F\u59CB",
  "diff.modified": "\u4FEE\u6539\u540E",
  // Result Renderer
  "result.directAnswer": "\u76F4\u63A5\u56DE\u7B54",
  "result.additionalContext": "\u9644\u52A0\u5185\u5BB9",
  "result.tokens": "\u4EE4\u724C",
  "result.tokensIn": "\u8F93\u5165",
  "result.tokensOut": "\u8F93\u51FA",
  // Preview Stats
  "preview.originalLabel": "\u539F\u59CB\uFF1A",
  "preview.modifiedLabel": "\u4FEE\u6539\u540E\uFF1A",
  "preview.charsLabel": "\u5B57\u7B26",
  // Misc
  "misc.noPendingRequest": "\u672A\u627E\u5230\u5F85\u5904\u7406\u7684\u8BF7\u6C42",
  "misc.languageChanged": "\u8BED\u8A00\u5DF2\u66F4\u6539\u3002\u90E8\u5206\u754C\u9762\u5143\u7D20\u5C06\u5728\u91CD\u65B0\u52A0\u8F7D\u540E\u66F4\u65B0\u3002",
  "misc.testFailed": "Claude Code \u6D4B\u8BD5\u5931\u8D25",
  // Settings
  "settings.autoDetectPath": "\u81EA\u52A8\u68C0\u6D4B Claude Code \u8DEF\u5F84",
  "settings.autoDetectPathDesc": "\u81EA\u52A8\u68C0\u6D4B Claude Code \u53EF\u6267\u884C\u6587\u4EF6\u7684\u4F4D\u7F6E",
  "settings.executablePath": "Claude Code \u53EF\u6267\u884C\u6587\u4EF6\u8DEF\u5F84",
  "settings.executablePathDesc": "Claude Code \u53EF\u6267\u884C\u6587\u4EF6\u7684\u5B8C\u6574\u8DEF\u5F84\uFF08\u4F8B\u5982\uFF1A/usr/local/bin/claude\uFF09",
  "settings.testInstallation": "\u6D4B\u8BD5 Claude Code \u5B89\u88C5",
  "settings.testInstallationDesc": "\u9A8C\u8BC1 Claude Code \u662F\u5426\u53EF\u8BBF\u95EE\u5E76\u6B63\u5E38\u5DE5\u4F5C",
  "settings.testButton": "\u6D4B\u8BD5",
  "settings.testWorking": "\u6B63\u5E38\u5DE5\u4F5C\uFF01",
  "settings.testFailed": "\u5931\u8D25",
  "settings.customPrompt": "\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A",
  "settings.customPromptDesc": "\u53EF\u9009\u7684\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\uFF0C\u5C06\u6DFB\u52A0\u5230\u6240\u6709\u8BF7\u6C42\u524D",
  "settings.customPromptPlaceholder": "\u4F60\u6B63\u5728\u5E2E\u52A9\u7F16\u8F91 Markdown \u7B14\u8BB0...",
  "settings.preserveCursor": "\u4FDD\u6301\u5149\u6807\u4F4D\u7F6E",
  "settings.preserveCursorDesc": "\u5E94\u7528\u66F4\u6539\u540E\u5C1D\u8BD5\u4FDD\u6301\u5149\u6807\u4F4D\u7F6E",
  "settings.autoAcceptChanges": "\u81EA\u52A8\u63A5\u53D7\u66F4\u6539",
  "settings.autoAcceptChangesDesc": "\u81EA\u52A8\u5E94\u7528\u66F4\u6539\u800C\u4E0D\u663E\u793A\u9884\u89C8\uFF08\u8BF7\u8C28\u614E\u4F7F\u7528\uFF01\uFF09",
  "settings.model": "\u6A21\u578B",
  "settings.modelDesc": "\u9009\u62E9\u8981\u4F7F\u7528\u7684 Claude \u6A21\u578B\uFF1ASonnet\uFF08\u5E73\u8861\uFF09\u3001Opus\uFF08\u6700\u5F3A\u5927\uFF09\u6216 Haiku\uFF08\u6700\u5FEB\uFF09\u3002\u7559\u7A7A\u4F7F\u7528\u9ED8\u8BA4\u5B50\u4EE3\u7406\u6A21\u578B\u3002",
  "settings.modelDefault": "\u9ED8\u8BA4\uFF08\u5B50\u4EE3\u7406\u6A21\u578B\uFF09",
  "settings.modelSonnet": "Sonnet\uFF08\u5E73\u8861\uFF09",
  "settings.modelOpus": "Opus\uFF08\u6700\u5F3A\u5927\uFF09",
  "settings.modelHaiku": "Haiku\uFF08\u6700\u5FEB\uFF09",
  "settings.vaultAccess": "\u5141\u8BB8\u4ED3\u5E93\u8303\u56F4\u8BBF\u95EE",
  "settings.vaultAccessDesc": "\u5141\u8BB8 Claude \u8BFB\u53D6/\u641C\u7D22\u4ED3\u5E93\u4E2D\u7684\u5176\u4ED6\u6587\u4EF6\uFF08\u4E0D\u4EC5\u4EC5\u662F\u5F53\u524D\u7B14\u8BB0\uFF09",
  "settings.permissionlessMode": "\u542F\u7528\u65E0\u6743\u9650\u6A21\u5F0F",
  "settings.permissionlessModeDesc": "\u5141\u8BB8 Claude \u6267\u884C\u64CD\u4F5C\u800C\u65E0\u9700\u6BCF\u6B21\u8BF7\u6C42\u6743\u9650\uFF08\u8BF7\u8C28\u614E\u4F7F\u7528\uFF01Claude \u5C06\u62E5\u6709\u5B8C\u5168\u63A7\u5236\u6743\uFF09",
  "settings.timeout": "\u8D85\u65F6\u65F6\u95F4\uFF08\u79D2\uFF09",
  "settings.timeoutDesc": "\u7B49\u5F85 Claude Code \u54CD\u5E94\u7684\u6700\u957F\u65F6\u95F4\uFF080 = \u65E0\u8D85\u65F6\uFF09",
  "settings.customApiConfig": "\u81EA\u5B9A\u4E49 API \u914D\u7F6E",
  "settings.customApiConfigDesc": "\u4E3A Claude \u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u7684\u5730\u533A\u914D\u7F6E\u81EA\u5B9A\u4E49 API \u7AEF\u70B9\u3002\u7559\u7A7A\u4F7F\u7528\u9ED8\u8BA4\u8BBE\u7F6E\u3002",
  "settings.apiBaseUrl": "API \u57FA\u7840 URL",
  "settings.apiBaseUrlDesc": "\u81EA\u5B9A\u4E49 API \u7AEF\u70B9 URL\uFF08\u4F8B\u5982\uFF1Ahttps://api.kimi.com/coding/\uFF09",
  "settings.apiAuthToken": "API \u8BA4\u8BC1\u4EE4\u724C",
  "settings.apiAuthTokenDesc": "API \u7AEF\u70B9\u7684\u81EA\u5B9A\u4E49\u8BA4\u8BC1\u4EE4\u724C",
  "settings.apiAuthTokenPlaceholder": "\u8F93\u5165\u60A8\u7684 API \u4EE4\u724C",
  "settings.customModel": "\u81EA\u5B9A\u4E49\u6A21\u578B",
  "settings.customModelDesc": "\u8981\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0\uFF08\u4F8B\u5982\uFF1Akimi-for-coding\uFF09\u3002\u5C06\u8986\u76D6\u4E0A\u9762\u7684\u6A21\u578B\u4E0B\u62C9\u9009\u9879\u3002",
  "settings.customSmallModel": "\u81EA\u5B9A\u4E49\u5C0F\u578B/\u5FEB\u901F\u6A21\u578B",
  "settings.customSmallModelDesc": "\u7528\u4E8E\u5FEB\u901F\u64CD\u4F5C\u7684\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0\uFF08\u4F8B\u5982\uFF1Akimi-for-coding\uFF09",
  "settings.language": "\u8BED\u8A00",
  "settings.languageDesc": "\u9009\u62E9\u754C\u9762\u8BED\u8A00"
};

// src/i18n/locales/es.ts
var es = {
  // Header
  "header.title": "Asistente Claude Code",
  "header.noNoteSelected": "ninguna nota seleccionada",
  // Input Section
  "input.label": "Tus instrucciones:",
  "input.placeholder": 'ej., "Agregar m\xE1s ejemplos a esta secci\xF3n" o "Reorganizar con mejores encabezados" (Enter para enviar, Ctrl+Enter para nueva l\xEDnea)',
  "input.conversationalMode": "modo conversacional (sin edici\xF3n de archivos)",
  "input.conversationalModeTooltip": "Chatea con Claude sin modificar ning\xFAn archivo",
  "input.selectedTextOnly": "Editar solo texto seleccionado",
  "input.autoAccept": "Aceptar cambios autom\xE1ticamente",
  "input.modelLabel": "Modelo:",
  "input.modelDefault": "Predeterminado",
  "input.runButton": "Ejecutar Claude Code",
  "input.runningButton": "Ejecutando...",
  "input.cancelButton": "Cancelar",
  // Result Section
  "result.title": "Resultado",
  // Output Section
  "output.title": "Salida",
  // Preview Section
  "preview.title": "Vista previa",
  "preview.tabRaw": "Sin formato",
  "preview.tabDiff": "Diferencias",
  "preview.tabRendered": "Renderizado",
  "preview.originalChars": "Original:",
  "preview.modifiedChars": "Modificado:",
  "preview.chars": "caracteres",
  "preview.applyButton": "aplicar cambios",
  "preview.rejectButton": "rechazar",
  // History Section
  "history.title": "Historial",
  "history.clearButton": "Limpiar",
  // Agent Section
  "agent.planTitle": "plan",
  "agent.activityTitle": "Actividad",
  "agent.noPlan": "A\xFAn no se ha creado un plan",
  // Todo Status
  "todo.pending": "pendiente",
  "todo.inProgress": "en progreso",
  "todo.completed": "completado",
  // Interactive Prompt
  "interactive.header": "Claude est\xE1 solicitando confirmaci\xF3n",
  "interactive.yesButton": "s\xED",
  "interactive.noButton": "no",
  "interactive.customPlaceholder": "O escribe una respuesta personalizada...",
  // Permission Approval
  "permission.header": "permiso requerido",
  "permission.message": "Claude est\xE1 solicitando permiso para ejecutar acciones.",
  "permission.approveButton": "aprobar y continuar",
  "permission.denyButton": "denegar",
  // Status Messages
  "status.processing": "Claude est\xE1 procesando",
  "status.autoApplying": "Aplicando cambios autom\xE1ticamente...",
  "status.runningAuthorized": "Ejecutando tareas autorizadas",
  "status.runningInBackground": "Ejecutando en segundo plano...",
  "status.failed": "Fall\xF3 - ver error abajo",
  // Notifications
  "notice.alreadyProcessing": "Ya se est\xE1 procesando una solicitud. Por favor espera.",
  "notice.enterPrompt": "Por favor ingresa una instrucci\xF3n",
  "notice.noActiveNote": "No se encontr\xF3 una nota activa, por favor abre una nota Markdown primero",
  "notice.noEditor": "No se encontr\xF3 un editor Markdown, aseg\xFArate de tener una nota abierta",
  "notice.noVaultPath": "No se pudo determinar la ruta de la b\xF3veda",
  "notice.completed": "Claude Code completado",
  "notice.completedNoChanges": "Claude Code completado (sin cambios en archivos)",
  "notice.changesApplied": "cambios aplicados autom\xE1ticamente",
  "notice.changesAppliedSuccess": "cambios aplicados exitosamente",
  "notice.failedApplyChanges": "fall\xF3 al aplicar cambios",
  "notice.changesRejected": "Cambios rechazados",
  "notice.cancelled": "Cancelado",
  "notice.permissionRequest": "Claude est\xE1 solicitando permiso - por favor aprueba o deniega",
  "notice.permissionDenied": "Permiso denegado - Claude no proceder\xE1",
  "notice.noChangesToApply": "no hay cambios para aplicar",
  "notice.noActiveFile": "no hay archivo activo",
  "notice.historyRestored": "Elemento del historial restaurado",
  "notice.historyRestoredWithChanges": "Elemento del historial restaurado con cambios propuestos",
  "notice.historyCleared": "Historial limpiado",
  // Diff View
  "diff.original": "Original",
  "diff.modified": "Modificado",
  // Result Renderer
  "result.directAnswer": "Respuesta directa",
  "result.additionalContext": "Contexto adicional",
  "result.tokens": "tokens",
  "result.tokensIn": "entrada",
  "result.tokensOut": "salida",
  // Preview Stats
  "preview.originalLabel": "Original:",
  "preview.modifiedLabel": "Modificado:",
  "preview.charsLabel": "caracteres",
  // Misc
  "misc.noPendingRequest": "No se encontr\xF3 solicitud pendiente",
  "misc.languageChanged": "Idioma cambiado. Algunos elementos de la interfaz se actualizar\xE1n al recargar.",
  "misc.testFailed": "Prueba de Claude Code fallida",
  // Settings
  "settings.autoDetectPath": "Auto-detectar ruta de Claude Code",
  "settings.autoDetectPathDesc": "Detectar autom\xE1ticamente la ubicaci\xF3n del ejecutable de Claude Code",
  "settings.executablePath": "Ruta del ejecutable de Claude Code",
  "settings.executablePathDesc": "Ruta completa al ejecutable de Claude Code (ej., /usr/local/bin/claude)",
  "settings.testInstallation": "Probar instalaci\xF3n de Claude Code",
  "settings.testInstallationDesc": "Verificar que Claude Code sea accesible y funcione",
  "settings.testButton": "Probar",
  "settings.testWorking": "\xA1funcionando!",
  "settings.testFailed": "fall\xF3",
  "settings.customPrompt": "Prompt de sistema personalizado",
  "settings.customPromptDesc": "Prompt de sistema personalizado opcional para agregar a todas las solicitudes",
  "settings.customPromptPlaceholder": "Est\xE1s ayudando a editar notas markdown...",
  "settings.preserveCursor": "Preservar posici\xF3n del cursor",
  "settings.preserveCursorDesc": "Intentar mantener la posici\xF3n del cursor despu\xE9s de aplicar cambios",
  "settings.autoAcceptChanges": "Aceptar cambios autom\xE1ticamente",
  "settings.autoAcceptChangesDesc": "Aplicar cambios autom\xE1ticamente sin mostrar vista previa (\xA1usar con precauci\xF3n!)",
  "settings.model": "Modelo",
  "settings.modelDesc": "Selecciona el modelo de Claude a usar: Sonnet (equilibrado), Opus (m\xE1s capaz), o Haiku (m\xE1s r\xE1pido). Dejar vac\xEDo para usar el modelo de subagente predeterminado.",
  "settings.modelDefault": "Predeterminado (modelo subagente)",
  "settings.modelSonnet": "Sonnet (equilibrado)",
  "settings.modelOpus": "Opus (m\xE1s capaz)",
  "settings.modelHaiku": "Haiku (m\xE1s r\xE1pido)",
  "settings.vaultAccess": "Permitir acceso a toda la b\xF3veda",
  "settings.vaultAccessDesc": "Permitir a Claude leer/buscar otros archivos en tu b\xF3veda (no solo la nota actual)",
  "settings.permissionlessMode": "Habilitar modo sin permisos",
  "settings.permissionlessModeDesc": "Permitir a Claude ejecutar acciones sin pedir permiso cada vez (\xA1usar con precauci\xF3n! Claude tendr\xE1 control total)",
  "settings.timeout": "Tiempo de espera (segundos)",
  "settings.timeoutDesc": "Tiempo m\xE1ximo de espera para la respuesta de Claude Code (0 = sin l\xEDmite)",
  "settings.customApiConfig": "Configuraci\xF3n de API personalizada",
  "settings.customApiConfigDesc": "Configurar endpoints de API personalizados para regiones donde Claude no est\xE1 disponible directamente. Dejar vac\xEDo para usar la configuraci\xF3n predeterminada.",
  "settings.apiBaseUrl": "URL base de API",
  "settings.apiBaseUrlDesc": "URL del endpoint de API personalizado (ej., https://api.kimi.com/coding/)",
  "settings.apiAuthToken": "Token de autenticaci\xF3n de API",
  "settings.apiAuthTokenDesc": "Token de autenticaci\xF3n personalizado para el endpoint de API",
  "settings.apiAuthTokenPlaceholder": "Ingresa tu token de API",
  "settings.customModel": "Modelo personalizado",
  "settings.customModelDesc": "Nombre del modelo personalizado a usar (ej., kimi-for-coding). Sobrescribe el selector de modelo anterior.",
  "settings.customSmallModel": "Modelo peque\xF1o/r\xE1pido personalizado",
  "settings.customSmallModelDesc": "Nombre del modelo personalizado para operaciones r\xE1pidas (ej., kimi-for-coding)",
  "settings.language": "Idioma",
  "settings.languageDesc": "Seleccionar idioma de la interfaz"
};

// src/i18n/locales/de.ts
var de = {
  // Header
  "header.title": "Claude Code Assistent",
  "header.noNoteSelected": "keine Notiz ausgew\xE4hlt",
  // Input Section
  "input.label": "Deine Anweisungen:",
  "input.placeholder": 'z.B. "F\xFCge mehr Beispiele zu diesem Abschnitt hinzu" oder "Reorganisiere mit besseren \xDCberschriften" (Enter zum Senden, Strg+Enter f\xFCr neue Zeile)',
  "input.conversationalMode": "Konversationsmodus (keine Datei\xE4nderungen)",
  "input.conversationalModeTooltip": "Mit Claude chatten, ohne Dateien zu \xE4ndern",
  "input.selectedTextOnly": "Nur markierten Text bearbeiten",
  "input.autoAccept": "\xC4nderungen automatisch \xFCbernehmen",
  "input.modelLabel": "Modell:",
  "input.modelDefault": "Standard",
  "input.runButton": "Claude Code ausf\xFChren",
  "input.runningButton": "L\xE4uft...",
  "input.cancelButton": "Abbrechen",
  // Result Section
  "result.title": "Ergebnis",
  // Output Section
  "output.title": "Ausgabe",
  // Preview Section
  "preview.title": "Vorschau",
  "preview.tabRaw": "Roh",
  "preview.tabDiff": "Diff",
  "preview.tabRendered": "Gerendert",
  "preview.originalChars": "Original:",
  "preview.modifiedChars": "Ge\xE4ndert:",
  "preview.chars": "Zeichen",
  "preview.applyButton": "\xC4nderungen \xFCbernehmen",
  "preview.rejectButton": "Ablehnen",
  // History Section
  "history.title": "Verlauf",
  "history.clearButton": "L\xF6schen",
  // Agent Section
  "agent.planTitle": "Plan",
  "agent.activityTitle": "Aktivit\xE4t",
  "agent.noPlan": "Noch kein Plan erstellt",
  // Todo Status
  "todo.pending": "Ausstehend",
  "todo.inProgress": "In Bearbeitung",
  "todo.completed": "Abgeschlossen",
  // Interactive Prompt
  "interactive.header": "Claude bittet um Best\xE4tigung",
  "interactive.yesButton": "Ja",
  "interactive.noButton": "Nein",
  "interactive.customPlaceholder": "Oder eine eigene Antwort eingeben...",
  // Permission Approval
  "permission.header": "Berechtigung erforderlich",
  "permission.message": "Claude bittet um Erlaubnis, Aktionen auszuf\xFChren.",
  "permission.approveButton": "Genehmigen & fortfahren",
  "permission.denyButton": "Ablehnen",
  // Status Messages
  "status.processing": "Claude verarbeitet",
  "status.autoApplying": "\xC4nderungen werden automatisch \xFCbernommen...",
  "status.runningAuthorized": "F\xFChre autorisierte Aufgaben aus",
  "status.runningInBackground": "L\xE4uft im Hintergrund...",
  "status.failed": "Fehlgeschlagen - siehe Fehler unten",
  // Notifications
  "notice.alreadyProcessing": "Eine Anfrage wird bereits verarbeitet. Bitte warten.",
  "notice.enterPrompt": "Bitte gib eine Anweisung ein",
  "notice.noActiveNote": "Keine aktive Notiz gefunden, bitte \xF6ffne zuerst eine Markdown-Notiz",
  "notice.noEditor": "Kein Markdown-Editor gefunden, bitte stelle sicher, dass eine Notiz ge\xF6ffnet ist",
  "notice.noVaultPath": "Vault-Pfad konnte nicht ermittelt werden",
  "notice.completed": "Claude Code abgeschlossen",
  "notice.completedNoChanges": "Claude Code abgeschlossen (keine Datei\xE4nderungen)",
  "notice.changesApplied": "\xC4nderungen automatisch \xFCbernommen",
  "notice.changesAppliedSuccess": "\xC4nderungen erfolgreich \xFCbernommen",
  "notice.failedApplyChanges": "\xC4nderungen konnten nicht \xFCbernommen werden",
  "notice.changesRejected": "\xC4nderungen abgelehnt",
  "notice.cancelled": "Abgebrochen",
  "notice.permissionRequest": "Claude bittet um Berechtigung - bitte genehmigen oder ablehnen",
  "notice.permissionDenied": "Berechtigung verweigert - Claude wird nicht fortfahren",
  "notice.noChangesToApply": "Keine \xC4nderungen zum \xDCbernehmen",
  "notice.noActiveFile": "Keine aktive Datei",
  "notice.historyRestored": "Verlaufseintrag wiederhergestellt",
  "notice.historyRestoredWithChanges": "Verlaufseintrag mit vorgeschlagenen \xC4nderungen wiederhergestellt",
  "notice.historyCleared": "Verlauf gel\xF6scht",
  // Diff View
  "diff.original": "Original",
  "diff.modified": "Ge\xE4ndert",
  // Result Renderer
  "result.directAnswer": "Direkte Antwort",
  "result.additionalContext": "Zus\xE4tzlicher Kontext",
  "result.tokens": "Tokens",
  "result.tokensIn": "Eingabe",
  "result.tokensOut": "Ausgabe",
  // Preview Stats
  "preview.originalLabel": "Original:",
  "preview.modifiedLabel": "Ge\xE4ndert:",
  "preview.charsLabel": "Zeichen",
  // Misc
  "misc.noPendingRequest": "Keine ausstehende Anfrage gefunden",
  "misc.languageChanged": "Sprache ge\xE4ndert. Einige UI-Elemente werden nach dem Neuladen aktualisiert.",
  "misc.testFailed": "Claude Code Test fehlgeschlagen",
  // Settings
  "settings.autoDetectPath": "Claude Code Pfad automatisch erkennen",
  "settings.autoDetectPathDesc": "Den Speicherort der Claude Code Anwendung automatisch erkennen",
  "settings.executablePath": "Claude Code Anwendungspfad",
  "settings.executablePathDesc": "Vollst\xE4ndiger Pfad zur Claude Code Anwendung (z.B. /usr/local/bin/claude)",
  "settings.testInstallation": "Claude Code Installation testen",
  "settings.testInstallationDesc": "\xDCberpr\xFCfen, ob Claude Code erreichbar ist und funktioniert",
  "settings.testButton": "Testen",
  "settings.testWorking": "Funktioniert!",
  "settings.testFailed": "Fehlgeschlagen",
  "settings.customPrompt": "Benutzerdefinierte Systemanweisung",
  "settings.customPromptDesc": "Optionale benutzerdefinierte Systemanweisung, die allen Anfragen vorangestellt wird",
  "settings.customPromptPlaceholder": "Du hilfst beim Bearbeiten von Markdown-Notizen...",
  "settings.preserveCursor": "Cursorposition beibehalten",
  "settings.preserveCursorDesc": "Versuchen, die Cursorposition nach dem \xDCbernehmen von \xC4nderungen beizubehalten",
  "settings.autoAcceptChanges": "\xC4nderungen automatisch \xFCbernehmen",
  "settings.autoAcceptChangesDesc": "\xC4nderungen automatisch \xFCbernehmen, ohne Vorschau anzuzeigen (mit Vorsicht verwenden!)",
  "settings.model": "Modell",
  "settings.modelDesc": "W\xE4hle das Claude-Modell: Sonnet (ausgewogen), Opus (leistungsf\xE4higste), oder Haiku (schnellste). Leer lassen f\xFCr Standard-Subagent-Modell.",
  "settings.modelDefault": "Standard (Subagent-Modell)",
  "settings.modelSonnet": "Sonnet (ausgewogen)",
  "settings.modelOpus": "Opus (leistungsf\xE4higste)",
  "settings.modelHaiku": "Haiku (schnellste)",
  "settings.vaultAccess": "Vault-weiten Zugriff erlauben",
  "settings.vaultAccessDesc": "Claude erlauben, andere Dateien im Vault zu lesen/durchsuchen (nicht nur die aktuelle Notiz)",
  "settings.permissionlessMode": "Berechtigungsfreien Modus aktivieren",
  "settings.permissionlessModeDesc": "Claude erlauben, Aktionen auszuf\xFChren, ohne jedes Mal um Erlaubnis zu fragen (mit Vorsicht verwenden! Claude hat volle Kontrolle)",
  "settings.timeout": "Zeitlimit (Sekunden)",
  "settings.timeoutDesc": "Maximale Wartezeit auf Claude Code Antwort (0 = kein Zeitlimit)",
  "settings.customApiConfig": "Benutzerdefinierte API-Konfiguration",
  "settings.customApiConfigDesc": "Benutzerdefinierte API-Endpunkte f\xFCr Regionen konfigurieren, in denen Claude nicht direkt verf\xFCgbar ist. Leer lassen f\xFCr Standardeinstellungen.",
  "settings.apiBaseUrl": "API Basis-URL",
  "settings.apiBaseUrlDesc": "Benutzerdefinierte API-Endpunkt-URL (z.B. https://api.kimi.com/coding/)",
  "settings.apiAuthToken": "API Auth-Token",
  "settings.apiAuthTokenDesc": "Benutzerdefiniertes Authentifizierungstoken f\xFCr den API-Endpunkt",
  "settings.apiAuthTokenPlaceholder": "Gib dein API-Token ein",
  "settings.customModel": "Benutzerdefiniertes Modell",
  "settings.customModelDesc": "Benutzerdefinierter Modellname (z.B. kimi-for-coding). \xDCberschreibt die Modellauswahl oben.",
  "settings.customSmallModel": "Benutzerdefiniertes kleines/schnelles Modell",
  "settings.customSmallModelDesc": "Benutzerdefinierter Modellname f\xFCr schnelle Operationen (z.B. kimi-for-coding)",
  "settings.language": "Sprache",
  "settings.languageDesc": "Oberfl\xE4chensprache ausw\xE4hlen"
};

// src/i18n/locales/pt.ts
var pt = {
  // Header
  "header.title": "Assistente Claude Code",
  "header.noNoteSelected": "nenhuma nota selecionada",
  // Input Section
  "input.label": "Suas instru\xE7\xF5es:",
  "input.placeholder": 'ex., "Adicione mais exemplos a esta se\xE7\xE3o" ou "Reorganize com melhores t\xEDtulos" (Enter para enviar, Ctrl+Enter para nova linha)',
  "input.conversationalMode": "modo conversacional (sem edi\xE7\xE3o de arquivos)",
  "input.conversationalModeTooltip": "Converse com Claude sem modificar arquivos",
  "input.selectedTextOnly": "Editar apenas texto selecionado",
  "input.autoAccept": "Aceitar altera\xE7\xF5es automaticamente",
  "input.modelLabel": "Modelo:",
  "input.modelDefault": "Padr\xE3o",
  "input.runButton": "Executar Claude Code",
  "input.runningButton": "Executando...",
  "input.cancelButton": "Cancelar",
  // Result Section
  "result.title": "Resultado",
  // Output Section
  "output.title": "Sa\xEDda",
  // Preview Section
  "preview.title": "Visualiza\xE7\xE3o",
  "preview.tabRaw": "Bruto",
  "preview.tabDiff": "Diferen\xE7as",
  "preview.tabRendered": "Renderizado",
  "preview.originalChars": "Original:",
  "preview.modifiedChars": "Modificado:",
  "preview.chars": "caracteres",
  "preview.applyButton": "aplicar altera\xE7\xF5es",
  "preview.rejectButton": "rejeitar",
  // History Section
  "history.title": "Hist\xF3rico",
  "history.clearButton": "Limpar",
  // Agent Section
  "agent.planTitle": "plano",
  "agent.activityTitle": "Atividade",
  "agent.noPlan": "Nenhum plano criado ainda",
  // Todo Status
  "todo.pending": "pendente",
  "todo.inProgress": "em progresso",
  "todo.completed": "conclu\xEDdo",
  // Interactive Prompt
  "interactive.header": "Claude est\xE1 pedindo confirma\xE7\xE3o",
  "interactive.yesButton": "sim",
  "interactive.noButton": "n\xE3o",
  "interactive.customPlaceholder": "Ou digite uma resposta personalizada...",
  // Permission Approval
  "permission.header": "permiss\xE3o necess\xE1ria",
  "permission.message": "Claude est\xE1 solicitando permiss\xE3o para executar a\xE7\xF5es.",
  "permission.approveButton": "aprovar e continuar",
  "permission.denyButton": "negar",
  // Status Messages
  "status.processing": "Claude est\xE1 processando",
  "status.autoApplying": "Aplicando altera\xE7\xF5es automaticamente...",
  "status.runningAuthorized": "Executando tarefas autorizadas",
  "status.runningInBackground": "Executando em segundo plano...",
  "status.failed": "Falhou - veja o erro abaixo",
  // Notifications
  "notice.alreadyProcessing": "J\xE1 est\xE1 processando uma solicita\xE7\xE3o. Por favor, aguarde.",
  "notice.enterPrompt": "Por favor, insira um prompt",
  "notice.noActiveNote": "Nenhuma nota ativa encontrada, por favor abra uma nota Markdown primeiro",
  "notice.noEditor": "Nenhum editor Markdown encontrado, certifique-se de que voc\xEA tem uma nota aberta",
  "notice.noVaultPath": "N\xE3o foi poss\xEDvel determinar o caminho do vault",
  "notice.completed": "Claude Code conclu\xEDdo",
  "notice.completedNoChanges": "Claude Code conclu\xEDdo (sem altera\xE7\xF5es de arquivo)",
  "notice.changesApplied": "altera\xE7\xF5es aplicadas automaticamente",
  "notice.changesAppliedSuccess": "altera\xE7\xF5es aplicadas com sucesso",
  "notice.failedApplyChanges": "falha ao aplicar altera\xE7\xF5es",
  "notice.changesRejected": "Altera\xE7\xF5es rejeitadas",
  "notice.cancelled": "Cancelado",
  "notice.permissionRequest": "Claude est\xE1 solicitando permiss\xE3o - por favor aprove ou negue",
  "notice.permissionDenied": "Permiss\xE3o negada - Claude n\xE3o prosseguir\xE1",
  "notice.noChangesToApply": "nenhuma altera\xE7\xE3o para aplicar",
  "notice.noActiveFile": "nenhum arquivo ativo",
  "notice.historyRestored": "Item do hist\xF3rico restaurado",
  "notice.historyRestoredWithChanges": "Item do hist\xF3rico restaurado com altera\xE7\xF5es propostas",
  "notice.historyCleared": "Hist\xF3rico limpo",
  // Diff View
  "diff.original": "Original",
  "diff.modified": "Modificado",
  // Result Renderer
  "result.directAnswer": "Resposta direta",
  "result.additionalContext": "Contexto adicional",
  "result.tokens": "tokens",
  "result.tokensIn": "entrada",
  "result.tokensOut": "sa\xEDda",
  // Preview Stats
  "preview.originalLabel": "Original:",
  "preview.modifiedLabel": "Modificado:",
  "preview.charsLabel": "caracteres",
  // Misc
  "misc.noPendingRequest": "Nenhuma solicita\xE7\xE3o pendente encontrada",
  "misc.languageChanged": "Idioma alterado. Alguns elementos da interface ser\xE3o atualizados ao recarregar.",
  "misc.testFailed": "Teste do Claude Code falhou",
  // Settings
  "settings.autoDetectPath": "Detectar caminho do Claude Code automaticamente",
  "settings.autoDetectPathDesc": "Detectar automaticamente a localiza\xE7\xE3o do execut\xE1vel do Claude Code",
  "settings.executablePath": "Caminho do execut\xE1vel do Claude Code",
  "settings.executablePathDesc": "Caminho completo para o execut\xE1vel do Claude Code (ex., /usr/local/bin/claude)",
  "settings.testInstallation": "Testar instala\xE7\xE3o do Claude Code",
  "settings.testInstallationDesc": "Verificar se o Claude Code est\xE1 acess\xEDvel e funcionando",
  "settings.testButton": "Testar",
  "settings.testWorking": "funcionando!",
  "settings.testFailed": "falhou",
  "settings.customPrompt": "Prompt de sistema personalizado",
  "settings.customPromptDesc": "Prompt de sistema personalizado opcional para adicionar a todas as solicita\xE7\xF5es",
  "settings.customPromptPlaceholder": "Voc\xEA est\xE1 ajudando a editar notas markdown...",
  "settings.preserveCursor": "Preservar posi\xE7\xE3o do cursor",
  "settings.preserveCursorDesc": "Tentar manter a posi\xE7\xE3o do cursor ap\xF3s aplicar altera\xE7\xF5es",
  "settings.autoAcceptChanges": "Aceitar altera\xE7\xF5es automaticamente",
  "settings.autoAcceptChangesDesc": "Aplicar altera\xE7\xF5es automaticamente sem mostrar visualiza\xE7\xE3o (use com cautela!)",
  "settings.model": "Modelo",
  "settings.modelDesc": "Selecione o modelo Claude a usar: Sonnet (equilibrado), Opus (mais capaz), ou Haiku (mais r\xE1pido). Deixe vazio para usar o modelo subagent padr\xE3o.",
  "settings.modelDefault": "Padr\xE3o (modelo subagent)",
  "settings.modelSonnet": "Sonnet (equilibrado)",
  "settings.modelOpus": "Opus (mais capaz)",
  "settings.modelHaiku": "Haiku (mais r\xE1pido)",
  "settings.vaultAccess": "Permitir acesso ao vault completo",
  "settings.vaultAccessDesc": "Permitir que Claude leia/pesquise outros arquivos no seu vault (n\xE3o apenas a nota atual)",
  "settings.permissionlessMode": "Habilitar modo sem permiss\xF5es",
  "settings.permissionlessModeDesc": "Permitir que Claude execute a\xE7\xF5es sem pedir permiss\xE3o a cada vez (use com cautela! Claude ter\xE1 controle total)",
  "settings.timeout": "Tempo limite (segundos)",
  "settings.timeoutDesc": "Tempo m\xE1ximo para aguardar resposta do Claude Code (0 = sem limite)",
  "settings.customApiConfig": "Configura\xE7\xE3o de API personalizada",
  "settings.customApiConfigDesc": "Configure endpoints de API personalizados para regi\xF5es onde Claude n\xE3o est\xE1 dispon\xEDvel diretamente. Deixe vazio para usar configura\xE7\xF5es padr\xE3o.",
  "settings.apiBaseUrl": "URL base da API",
  "settings.apiBaseUrlDesc": "URL do endpoint de API personalizado (ex., https://api.kimi.com/coding/)",
  "settings.apiAuthToken": "Token de autentica\xE7\xE3o da API",
  "settings.apiAuthTokenDesc": "Token de autentica\xE7\xE3o personalizado para o endpoint da API",
  "settings.apiAuthTokenPlaceholder": "Insira seu token de API",
  "settings.customModel": "Modelo personalizado",
  "settings.customModelDesc": "Nome do modelo personalizado a usar (ex., kimi-for-coding). Substitui a sele\xE7\xE3o de modelo acima.",
  "settings.customSmallModel": "Modelo pequeno/r\xE1pido personalizado",
  "settings.customSmallModelDesc": "Nome do modelo personalizado para opera\xE7\xF5es r\xE1pidas (ex., kimi-for-coding)",
  "settings.language": "Idioma",
  "settings.languageDesc": "Selecione o idioma da interface"
};

// src/i18n/index.ts
var translations = {
  en,
  zh,
  es,
  de,
  pt
};
var currentLocale = "en";
function setLocale(locale) {
  if (translations[locale]) {
    currentLocale = locale;
  } else {
    console.warn(`[i18n] Unknown locale: ${locale}, falling back to 'en'`);
    currentLocale = "en";
  }
}
function getLocale() {
  return currentLocale;
}
function getAvailableLocales() {
  return [
    { code: "en", name: "English" },
    { code: "zh", name: "\u4E2D\u6587 (\u7B80\u4F53)" },
    { code: "es", name: "Espa\xF1ol" },
    { code: "de", name: "Deutsch" },
    { code: "pt", name: "Portugu\xEAs" }
  ];
}
function t(key, params) {
  var _a;
  let text = ((_a = translations[currentLocale]) == null ? void 0 : _a[key]) || translations["en"][key] || key;
  if (params) {
    Object.entries(params).forEach(([paramKey, value]) => {
      text = text.replace(new RegExp(`\\{${paramKey}\\}`, "g"), String(value));
    });
  }
  return text;
}
function initI18n(preferredLocale) {
  var _a;
  if (preferredLocale && translations[preferredLocale]) {
    setLocale(preferredLocale);
    return;
  }
  const systemLocale = ((_a = navigator.language) == null ? void 0 : _a.toLowerCase()) || "";
  if (systemLocale.startsWith("zh")) {
    setLocale("zh");
  } else if (systemLocale.startsWith("es")) {
    setLocale("es");
  } else if (systemLocale.startsWith("de")) {
    setLocale("de");
  } else if (systemLocale.startsWith("pt")) {
    setLocale("pt");
  } else {
    setLocale("en");
  }
}

// src/ui/ui-builder.ts
var UIBuilder = class {
  /**
   * Build the header section
   */
  static buildHeader(container) {
    const header = container.createEl("div", { cls: "claude-code-header" });
    const headerTitle = header.createEl("div", { cls: "claude-code-header-title" });
    headerTitle.createEl("h4", { text: t("header.title") });
    const currentNoteLabel = header.createEl("div", { cls: "claude-code-current-note" });
    return currentNoteLabel;
  }
  /**
   * Build the input section with prompt textarea and options
   */
  static buildInputSection(container, autoAcceptDefault, onRun, onCancel) {
    const inputSection = container.createEl("div", { cls: "claude-code-input-section" });
    inputSection.createEl("label", { text: t("input.label") });
    const promptInput = inputSection.createEl("textarea", {
      cls: "claude-code-prompt-input",
      attr: {
        placeholder: t("input.placeholder")
      }
    });
    promptInput.rows = 4;
    const optionsDiv = inputSection.createEl("div", { cls: "claude-code-options" });
    const conversationalLabel = optionsDiv.createEl("label", { cls: "claude-code-checkbox-label" });
    const conversationalModeCheckbox = conversationalLabel.createEl("input", { type: "checkbox" });
    conversationalLabel.appendText(" " + t("input.conversationalMode"));
    conversationalLabel.title = t("input.conversationalModeTooltip");
    const selectedTextLabel = optionsDiv.createEl("label", { cls: "claude-code-checkbox-label" });
    const selectedTextOnlyCheckbox = selectedTextLabel.createEl("input", { type: "checkbox" });
    selectedTextLabel.appendText(" " + t("input.selectedTextOnly"));
    const autoAcceptLabel = optionsDiv.createEl("label", { cls: "claude-code-checkbox-label" });
    const autoAcceptCheckbox = autoAcceptLabel.createEl("input", { type: "checkbox" });
    autoAcceptCheckbox.checked = autoAcceptDefault;
    autoAcceptLabel.appendText(" " + t("input.autoAccept"));
    const modelSelectContainer = optionsDiv.createEl("div", { cls: "claude-code-model-select" });
    modelSelectContainer.createEl("label", { text: t("input.modelLabel") + " ", cls: "claude-code-model-label" });
    const modelSelect = modelSelectContainer.createEl("select", { cls: "claude-code-model-dropdown" });
    modelSelect.createEl("option", { value: "", text: t("input.modelDefault") });
    modelSelect.createEl("option", { value: "sonnet", text: "Sonnet" });
    modelSelect.createEl("option", { value: "opus", text: "Opus" });
    modelSelect.createEl("option", { value: "haiku", text: "Haiku" });
    const buttonContainer = inputSection.createEl("div", { cls: "claude-code-button-container" });
    const runButton = buttonContainer.createEl("button", {
      cls: "mod-cta",
      text: t("input.runButton")
    });
    runButton.addEventListener("click", onRun);
    const cancelButton = buttonContainer.createEl("button", {
      text: t("input.cancelButton"),
      cls: "claude-code-cancel-button claude-code-hidden"
    });
    cancelButton.addEventListener("click", onCancel);
    return {
      promptInput,
      selectedTextOnlyCheckbox,
      autoAcceptCheckbox,
      conversationalModeCheckbox,
      modelSelect,
      runButton,
      cancelButton
    };
  }
  /**
   * Build the combined agent section (plan + activity in two columns)
   */
  static buildAgentSection(container) {
    const agentContainer = container.createEl("div", {
      cls: "claude-code-agent-container claude-code-hidden"
    });
    agentContainer.id = "claude-code-agent-container";
    const planColumn = agentContainer.createEl("div", { cls: "claude-code-agent-column claude-code-plan-column claude-code-hidden" });
    const planHeader = planColumn.createEl("div", { cls: "claude-code-agent-column-header" });
    planHeader.createEl("span", { text: "\u{1F4CB} " + t("agent.planTitle") });
    planColumn.createEl("div", {
      cls: "claude-code-todo-list claude-code-hidden",
      attr: { id: "claude-code-todo-list" }
    });
    const emptyPlanMessage = planColumn.createEl("div", {
      cls: "claude-code-empty-message claude-code-hidden",
      text: t("agent.noPlan")
    });
    emptyPlanMessage.id = "claude-code-empty-plan";
    const activityColumn = agentContainer.createEl("div", { cls: "claude-code-agent-column claude-code-activity-column claude-code-hidden" });
    const activityHeader = activityColumn.createEl("div", { cls: "claude-code-agent-column-header collapsible-header" });
    const activityTitle = activityHeader.createEl("span", { cls: "collapsible-title" });
    activityTitle.createEl("span", { cls: "collapse-indicator", text: "\u25BC " });
    activityTitle.appendText(t("agent.activityTitle"));
    const activitySteps = activityColumn.createEl("div", {
      cls: "claude-code-agent-steps collapsible-content",
      attr: { id: "claude-code-agent-steps" }
    });
    activityHeader.addEventListener("click", () => {
      const isCollapsed = activitySteps.hasClass("claude-code-hidden");
      activitySteps.toggleClass("claude-code-hidden", !isCollapsed);
      const indicator = activityHeader.querySelector(".collapse-indicator");
      if (indicator) {
        indicator.textContent = isCollapsed ? "\u25BC " : "\u25B6 ";
      }
      agentContainer.toggleClass("collapsed", !isCollapsed);
    });
  }
  /**
   * Build the interactive prompt section (for future use)
   */
  static buildInteractivePromptSection(container, onRespond) {
    const interactivePromptSection = container.createEl("div", {
      cls: "claude-code-interactive-prompt claude-code-hidden"
    });
    interactivePromptSection.id = "claude-code-interactive-prompt";
    interactivePromptSection.createEl("div", {
      cls: "interactive-prompt-header",
      text: "\u2753 " + t("interactive.header")
    });
    interactivePromptSection.createEl("div", {
      cls: "interactive-prompt-question",
      attr: { id: "interactive-prompt-question" }
    });
    const promptButtons = interactivePromptSection.createEl("div", {
      cls: "interactive-prompt-buttons"
    });
    const yesButton = promptButtons.createEl("button", {
      cls: "mod-cta",
      text: "\u2713 " + t("interactive.yesButton")
    });
    yesButton.addEventListener("click", () => onRespond("yes"));
    const noButton = promptButtons.createEl("button", {
      text: "\u2717 " + t("interactive.noButton")
    });
    noButton.addEventListener("click", () => onRespond("no"));
    const customResponseInput = interactivePromptSection.createEl("input", {
      cls: "interactive-prompt-input",
      attr: {
        placeholder: t("interactive.customPlaceholder"),
        id: "interactive-prompt-input"
      }
    });
    customResponseInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        onRespond(customResponseInput.value);
      }
    });
    return interactivePromptSection;
  }
  /**
   * Build the permission approval section
   */
  static buildPermissionApprovalSection(container, onApprove, onDeny) {
    const permissionApprovalSection = container.createEl("div", {
      cls: "claude-code-permission-approval claude-code-hidden"
    });
    permissionApprovalSection.id = "claude-code-permission-approval";
    permissionApprovalSection.createEl("div", {
      cls: "permission-approval-header",
      text: "\u{1F510} " + t("permission.header")
    });
    permissionApprovalSection.createEl("div", {
      cls: "permission-approval-message",
      text: t("permission.message")
    });
    const approvalButtons = permissionApprovalSection.createEl("div", {
      cls: "permission-approval-buttons"
    });
    const approvePermissionButton = approvalButtons.createEl("button", {
      cls: "mod-cta",
      text: "\u2713 " + t("permission.approveButton")
    });
    approvePermissionButton.addEventListener("click", onApprove);
    const denyPermissionButton = approvalButtons.createEl("button", {
      cls: "mod-warning",
      text: "\u2717 " + t("permission.denyButton")
    });
    denyPermissionButton.addEventListener("click", onDeny);
    return { permissionApprovalSection, approvePermissionButton, denyPermissionButton };
  }
  /**
   * Build the result section (for non-edit responses)
   */
  static buildResultSection(container) {
    const resultSection = container.createEl("div", { cls: "claude-code-result-section claude-code-hidden" });
    resultSection.id = "claude-code-result-section";
    const resultHeader = resultSection.createEl("div", { cls: "claude-code-result-header collapsible-header" });
    const headerTitle = resultHeader.createEl("span", { cls: "collapsible-title" });
    headerTitle.createEl("span", { cls: "collapse-indicator", text: "\u25BC " });
    headerTitle.appendText(t("result.title"));
    const contentWrapper = resultSection.createEl("div", { cls: "collapsible-content" });
    const lastPromptArea = contentWrapper.createEl("div", { cls: "claude-code-last-prompt claude-code-hidden" });
    lastPromptArea.id = "claude-code-last-prompt";
    const statusArea = contentWrapper.createEl("div", { cls: "claude-code-status-area claude-code-hidden" });
    const statusTextContainer = statusArea.createEl("div", { cls: "claude-code-status-text" });
    statusTextContainer.createEl("div", { cls: "claude-code-status-spinner" });
    const statusText = statusTextContainer.createEl("span");
    const progressBarContainer = statusArea.createEl("div", { cls: "claude-code-progress-bar-container" });
    progressBarContainer.createEl("div", { cls: "claude-code-progress-bar" });
    const resultArea = contentWrapper.createEl("div", {
      cls: "claude-code-result-area markdown-rendered claude-code-hidden"
    });
    resultHeader.addEventListener("click", () => {
      const isCollapsed = contentWrapper.hasClass("claude-code-hidden");
      contentWrapper.toggleClass("claude-code-hidden", !isCollapsed);
      const indicator = resultHeader.querySelector(".collapse-indicator");
      if (indicator) {
        indicator.textContent = isCollapsed ? "\u25BC " : "\u25B6 ";
      }
      resultSection.toggleClass("collapsed", !isCollapsed);
    });
    return { resultArea, statusArea, statusText, lastPromptArea };
  }
  /**
   * Build the output section
   */
  static buildOutputSection(container) {
    const outputSection = container.createEl("div", { cls: "claude-code-output-section claude-code-hidden" });
    const outputHeader = outputSection.createEl("div", { cls: "claude-code-output-header collapsible-header" });
    const headerTitle = outputHeader.createEl("span", { cls: "collapsible-title" });
    headerTitle.createEl("span", { cls: "collapse-indicator", text: "\u25B6 " });
    headerTitle.appendText(t("output.title"));
    const outputArea = outputSection.createEl("div", {
      cls: "claude-code-output-area collapsible-content claude-code-hidden"
    });
    outputSection.addClass("collapsed");
    outputHeader.addEventListener("click", () => {
      const isCollapsed = outputArea.hasClass("claude-code-hidden");
      outputArea.toggleClass("claude-code-hidden", !isCollapsed);
      const indicator = outputHeader.querySelector(".collapse-indicator");
      if (indicator) {
        indicator.textContent = isCollapsed ? "\u25BC " : "\u25B6 ";
      }
      outputSection.toggleClass("collapsed", !isCollapsed);
    });
    return { outputArea, outputSection };
  }
  /**
   * Build the preview section
   */
  static buildPreviewSection(container, onApply, onReject) {
    const previewSection = container.createEl("div", { cls: "claude-code-preview-section claude-code-hidden" });
    previewSection.id = "claude-code-preview-section";
    const previewHeader = previewSection.createEl("div", { cls: "claude-code-preview-header collapsible-header" });
    const headerTitle = previewHeader.createEl("span", { cls: "collapsible-title" });
    headerTitle.createEl("span", { cls: "collapse-indicator", text: "\u25BC " });
    headerTitle.appendText(t("preview.title"));
    const previewContent = previewSection.createEl("div", { cls: "claude-code-preview-content-wrapper collapsible-content" });
    const previewTabsContainer = previewContent.createEl("div", { cls: "claude-code-preview-tabs" });
    const rawTab = previewTabsContainer.createEl("div", { cls: "preview-tab", text: t("preview.tabRaw") });
    const diffTab = previewTabsContainer.createEl("div", { cls: "preview-tab active", text: t("preview.tabDiff") });
    const renderedTab = previewTabsContainer.createEl("div", { cls: "preview-tab", text: t("preview.tabRendered") });
    const previewContentContainer = previewContent.createEl("div", { cls: "claude-code-preview-content-container" });
    const previewArea = previewContentContainer.createEl("div", { cls: "claude-code-preview-area" });
    const previewButtons = previewContent.createEl("div", { cls: "claude-code-preview-buttons" });
    const applyButton = previewButtons.createEl("button", {
      cls: "mod-cta",
      text: "\u2713 " + t("preview.applyButton")
    });
    applyButton.addEventListener("click", onApply);
    const rejectButton = previewButtons.createEl("button", {
      cls: "mod-warning",
      text: "\u2717 " + t("preview.rejectButton")
    });
    rejectButton.addEventListener("click", onReject);
    rawTab.addEventListener("click", () => {
      rawTab.addClass("active");
      diffTab.removeClass("active");
      renderedTab.removeClass("active");
      previewArea.removeClass("claude-code-hidden");
      const diffArea = previewContentContainer.querySelector(".claude-code-preview-diff");
      const renderedArea = previewContentContainer.querySelector(".claude-code-preview-rendered");
      if (diffArea)
        diffArea.addClass("claude-code-hidden");
      if (renderedArea)
        renderedArea.addClass("claude-code-hidden");
    });
    diffTab.addEventListener("click", () => {
      diffTab.addClass("active");
      rawTab.removeClass("active");
      renderedTab.removeClass("active");
      previewArea.addClass("claude-code-hidden");
      const diffArea = previewContentContainer.querySelector(".claude-code-preview-diff");
      const renderedArea = previewContentContainer.querySelector(".claude-code-preview-rendered");
      if (diffArea)
        diffArea.removeClass("claude-code-hidden");
      if (renderedArea)
        renderedArea.addClass("claude-code-hidden");
    });
    renderedTab.addEventListener("click", () => {
      renderedTab.addClass("active");
      rawTab.removeClass("active");
      diffTab.removeClass("active");
      previewArea.addClass("claude-code-hidden");
      const diffArea = previewContentContainer.querySelector(".claude-code-preview-diff");
      const renderedArea = previewContentContainer.querySelector(".claude-code-preview-rendered");
      if (diffArea)
        diffArea.addClass("claude-code-hidden");
      if (renderedArea)
        renderedArea.removeClass("claude-code-hidden");
    });
    headerTitle.addEventListener("click", () => {
      const isCollapsed = previewContent.hasClass("claude-code-hidden");
      previewContent.toggleClass("claude-code-hidden", !isCollapsed);
      const indicator = previewHeader.querySelector(".collapse-indicator");
      if (indicator) {
        indicator.textContent = isCollapsed ? "\u25BC " : "\u25B6 ";
      }
      previewSection.toggleClass("collapsed", !isCollapsed);
    });
    return { previewArea, previewContentContainer, previewTabsContainer, applyButton, rejectButton };
  }
  /**
   * Build the history section
   */
  static buildHistorySection(container, onClearHistory) {
    const historySection = container.createEl("div", { cls: "claude-code-history-section claude-code-hidden" });
    historySection.id = "claude-code-history-section";
    const historyHeader = historySection.createEl("div", { cls: "claude-code-history-header collapsible-header" });
    const headerTitle = historyHeader.createEl("span", { cls: "collapsible-title" });
    headerTitle.createEl("span", { cls: "collapse-indicator", text: "\u25B6 " });
    headerTitle.appendText(t("history.title"));
    const clearHistoryBtn = historyHeader.createEl("button", {
      text: t("history.clearButton"),
      cls: "claude-code-clear-history"
    });
    clearHistoryBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      onClearHistory();
    });
    const historyList = historySection.createEl("ul", { cls: "claude-code-history-list collapsible-content claude-code-hidden" });
    historySection.addClass("collapsed");
    headerTitle.addEventListener("click", () => {
      const isCollapsed = historyList.hasClass("claude-code-hidden");
      historyList.toggleClass("claude-code-hidden", !isCollapsed);
      const indicator = historyHeader.querySelector(".collapse-indicator");
      if (indicator) {
        indicator.textContent = isCollapsed ? "\u25BC " : "\u25B6 ";
      }
      historySection.toggleClass("collapsed", !isCollapsed);
    });
    return historyList;
  }
  /**
   * Build WebSocket connection status bar
   */
  static buildConnectionStatusBar(container) {
    const statusBar = container.createEl("div", { cls: "claude-code-connection-status" });
    const statusIcon = statusBar.createEl("span", {
      cls: "claude-code-connection-icon disconnected"
    });
    const statusText = statusBar.createEl("span", {
      cls: "claude-code-connection-text",
      text: "Disconnected"
    });
    return { statusBar, statusIcon, statusText };
  }
  /**
   * Update connection status display
   */
  static updateConnectionStatus(statusIcon, statusText, state, connectionMode) {
    statusIcon.removeClass("disconnected", "connecting", "connected", "error");
    switch (state) {
      case "connected":
        statusIcon.addClass("connected");
        statusText.textContent = connectionMode === "websocket" ? "WebSocket Connected" : "Connected (stdio)";
        break;
      case "connecting":
      case "reconnecting":
        statusIcon.addClass("connecting");
        statusText.textContent = "Connecting...";
        break;
      case "error":
        statusIcon.addClass("error");
        statusText.textContent = "Connection Error";
        break;
      case "disconnected":
      default:
        statusIcon.addClass("disconnected");
        statusText.textContent = connectionMode === "websocket" ? "WebSocket Disconnected" : "Disconnected";
        break;
    }
  }
};

// src/ui/output-renderer.ts
var import_obsidian = require("obsidian");

// src/ui/parsers/agent-activity-parser.ts
var AgentActivityParser = class {
  /**
   * Parse and extract agent activity from output text
   *
   * @param text Output text to parse
   * @returns AgentStep object if activity detected, null otherwise
   */
  static parseAgentActivity(text) {
    if (text.includes("Resuming session:") || text.includes("\u2713 Resuming session:")) {
      return this.matchAndCreate(
        text,
        /(?:✓ )?Resuming session: (.+)/,
        "\u{1F504}",
        "Resume",
        "resume",
        (match) => this.truncate(match[1], 8, false) + "..."
      );
    }
    if (text.includes("\u2192 Starting new session")) {
      return this.createStep("\u{1F195}", "New", "session started", "new-session");
    }
    if (text.includes("Vault access enabled:")) {
      return this.matchAndCreate(
        text,
        /Vault access enabled: (.+)/,
        "\u{1F5C2}\uFE0F",
        "Vault",
        "vault",
        (match) => this.extractFilename(match[1])
      );
    }
    if (text.includes("\u{1F527} Session initialized:")) {
      return this.matchAndCreate(
        text,
        /🔧 Session initialized: (.+)/,
        "\u{1F680}",
        "Initialize",
        "init"
      );
    }
    if (text.includes("\u{1F4BE} Session ID:")) {
      return this.matchAndCreate(
        text,
        /💾 Session ID: (.+)/,
        "\u{1F4BE}",
        "Session",
        "session",
        (match) => this.truncate(match[1], 8, false) + "..."
      );
    }
    if (text.includes("\u{1F4E6} Available tools:")) {
      const match = text.match(/📦 Available tools: (.+)/);
      if (match) {
        const tools = match[1].split(", ");
        return this.createStep("\u{1F4E6}", "Tools", `${tools.length} available`, "tools");
      }
    }
    if (text.includes("\u{1F527} Using tool:")) {
      const match = text.match(/🔧 Using tool: (\w+)/);
      if (match) {
        return this.createStep("\u{1F527}", match[1], "starting...", `tool-${match[1]}`);
      }
    }
    if (text.includes("$ ")) {
      return this.matchAndCreate(
        text,
        /\$ (.+)/,
        "\u26A1",
        "Bash",
        "bash",
        (match) => this.truncate(match[1], 60)
      );
    }
    if (text.includes("Query:") && (text.includes("\u{1F50D}") || text.includes("search"))) {
      return this.matchAndCreate(
        text,
        /(?:🔍 )?Query: "(.+?)"/,
        "\u{1F50D}",
        "Search",
        "search",
        (match) => this.truncate(match[1], 50)
      );
    }
    if (text.includes("\u{1F4E5} Tool result")) {
      return this.matchAndCreate(
        text,
        /📥 Tool result \((.+?)\):/,
        "\u{1F4E5}",
        "Result",
        "result",
        (match) => this.truncate(match[1], 20)
      );
    }
    if (text.includes("\u{1F310} URL:")) {
      return this.matchAndCreate(
        text,
        /🌐 URL: (.+)/,
        "\u{1F310}",
        "Fetch",
        "fetch",
        (match) => this.truncate(match[1], 50)
      );
    }
    if (text.includes("\u{1F4D6}") && (text.includes("File:") || text.includes("Reading file:"))) {
      return this.matchAndCreate(
        text,
        /(?:File:|Reading file:)\s+(.+)/,
        "\u{1F4D6}",
        "Read",
        "read",
        (match) => this.extractFilename(match[1])
      );
    }
    if (text.includes("\u270D\uFE0F") && (text.includes("File:") || text.includes("Writing file:"))) {
      return this.matchAndCreate(
        text,
        /(?:File:|Writing file:)\s+(.+)/,
        "\u270D\uFE0F",
        "Write",
        "write",
        (match) => this.extractFilename(match[1])
      );
    }
    if (text.includes("\u270F\uFE0F") && (text.includes("File:") || text.includes("Editing file:"))) {
      return this.matchAndCreate(
        text,
        /(?:File:|Editing file:)\s+(.+)/,
        "\u270F\uFE0F",
        "Edit",
        "edit",
        (match) => this.extractFilename(match[1])
      );
    }
    if (text.includes("Pattern:")) {
      return this.matchAndCreate(
        text,
        /Pattern: (.+)/,
        "\u{1F50E}",
        "Search",
        "pattern",
        (match) => this.truncate(match[1], 40)
      );
    }
    if (text.includes("Agent:") || text.includes("Type:")) {
      return this.matchAndCreate(
        text,
        /(?:Agent:|Type:)\s+(.+)/,
        "\u{1F916}",
        "Agent",
        "agent"
      );
    }
    if (text.includes("\u2705 Complete!")) {
      return this.createStep("\u2705", "Complete", "Success", "complete");
    }
    if (text.includes("\u{1F4B0} Cost:")) {
      return this.matchAndCreate(
        text,
        /💰 Cost: \$(\d+\.\d+)/,
        "\u{1F4B0}",
        "Cost",
        "cost",
        (match) => `$${match[1]}`
      );
    }
    if (text.includes("\u{1F4CA} Tokens:")) {
      const match = text.match(/📊 Tokens: (\d+) in, (\d+) out/);
      if (match) {
        return this.createStep("\u{1F4CA}", "Tokens", `${match[1]} \u2192 ${match[2]}`, "tokens");
      }
    }
    if (text.includes("\u23F1\uFE0F") && text.includes("Duration:")) {
      return this.matchAndCreate(
        text,
        /⏱️\s{2}Duration: (\d+)ms/,
        "\u23F1\uFE0F",
        "Duration",
        "duration",
        (match) => `${(parseInt(match[1]) / 1e3).toFixed(1)}s`
      );
    }
    if (text.includes("\u2713 Claude Code completed")) {
      return this.createStep("\u{1F389}", "Finished", "Successfully", "finished");
    }
    return null;
  }
  /**
   * Helper to create AgentStep from parameters
   */
  static createStep(icon, action, target, keyPrefix) {
    return {
      icon,
      action,
      target,
      key: `${keyPrefix}-${Date.now()}`
    };
  }
  /**
   * Helper to match pattern and create step with optional target transformation
   */
  static matchAndCreate(text, pattern, icon, action, keyPrefix, targetTransform) {
    const match = text.match(pattern);
    if (!match)
      return null;
    const target = targetTransform ? targetTransform(match) : match[1];
    return this.createStep(icon, action, target, keyPrefix);
  }
  /**
   * Helper to extract filename from path
   */
  static extractFilename(path7, maxLength = 40) {
    const filename = path7.split("/").pop() || path7;
    return filename.substring(0, maxLength);
  }
  /**
   * Helper to truncate text
   */
  static truncate(text, maxLength, addEllipsis = true) {
    if (text.length <= maxLength)
      return text;
    return addEllipsis ? text.substring(0, maxLength) + "..." : text.substring(0, maxLength);
  }
};

// src/ui/output-renderer.ts
var OutputRenderer = class {
  constructor(outputArea, component, app, notePath, outputSection) {
    this.outputSection = null;
    this.currentStreamingElement = null;
    this.outputArea = outputArea;
    this.component = component;
    this.app = app;
    this.notePath = notePath;
    this.currentStreamingElement = null;
    this.outputSection = outputSection || null;
  }
  /**
   * Update the note path for markdown rendering
   */
  setNotePath(notePath) {
    this.notePath = notePath;
  }
  /**
   * Append a line of output
   */
  appendLine(text, isMarkdown = false) {
    this.showOutputSection();
    const line = this.outputArea.createEl("div", { cls: "claude-code-output-line" });
    if (isMarkdown) {
      line.classList.add("markdown-rendered");
      try {
        void import_obsidian.MarkdownRenderer.render(this.app, text, line, this.notePath, this.component);
      } catch (error) {
        console.error("[MARKDOWN RENDER ERROR]", error);
        line.textContent = text;
      }
    } else {
      line.textContent = text;
    }
    this.outputArea.scrollTop = this.outputArea.scrollHeight;
  }
  /**
   * Append streaming text (accumulates in the same element)
   */
  appendStreamingText(text) {
    this.showOutputSection();
    if (!this.currentStreamingElement) {
      this.currentStreamingElement = this.outputArea.createEl("div", {
        cls: "claude-code-output-line claude-code-streaming"
      });
    }
    this.currentStreamingElement.createEl("span", {
      cls: "streaming-text-chunk",
      text
    });
    this.outputArea.scrollTop = this.outputArea.scrollHeight;
  }
  /**
   * Finish the current streaming block
   */
  finishStreamingBlock() {
    this.currentStreamingElement = null;
  }
  /**
   * Clear all output
   */
  clear() {
    this.outputArea.empty();
    this.hideOutputSection();
  }
  /**
   * Show the output section
   */
  showOutputSection() {
    if (this.outputSection) {
      this.outputSection.removeClass("claude-code-hidden");
    }
  }
  /**
   * Hide the output section
   */
  hideOutputSection() {
    if (this.outputSection) {
      this.outputSection.addClass("claude-code-hidden");
    }
  }
  /**
   * Parse and extract agent activity from output text
   */
  static parseAgentActivity(text) {
    return AgentActivityParser.parseAgentActivity(text);
  }
};

// src/ui/agent-activity-tracker.ts
var AgentActivityTracker = class {
  constructor() {
    this.agentSteps = /* @__PURE__ */ new Map();
    this.agentStepsContainer = null;
    this.agentActivitySection = null;
    this.agentContainer = null;
    this.stepTimers = /* @__PURE__ */ new Map();
    this.stepStartTimes = /* @__PURE__ */ new Map();
  }
  /**
   * Initialize the tracker with DOM elements
   */
  initialize(agentActivitySection) {
    this.agentActivitySection = agentActivitySection;
    this.agentStepsContainer = agentActivitySection.querySelector("#claude-code-agent-steps");
    this.agentContainer = document.getElementById("claude-code-agent-container");
  }
  /**
   * Add or update an agent step
   */
  addStep(step) {
    if (!this.agentStepsContainer || !this.agentActivitySection)
      return;
    this.agentActivitySection.removeClass("claude-code-hidden");
    if (this.agentContainer) {
      this.agentContainer.removeClass("claude-code-hidden");
    }
    if (this.agentSteps.has(step.key)) {
      const existingEl = this.agentSteps.get(step.key);
      if (step.duration !== void 0) {
        this.stopStepTimer(step.key);
        const oldDuration = existingEl.querySelector(".agent-step-duration");
        if (oldDuration) {
          oldDuration.remove();
        }
        const durationText = this.formatDuration(step.duration);
        existingEl.createEl("span", {
          cls: "agent-step-duration agent-step-duration-complete",
          text: durationText
        });
      }
      return;
    }
    const stepEl = this.agentStepsContainer.createEl("div", {
      cls: "claude-code-agent-step"
    });
    stepEl.createEl("span", {
      cls: "agent-step-icon",
      text: step.icon
    });
    stepEl.createEl("span", {
      cls: "agent-step-action",
      text: step.action
    });
    stepEl.createEl("span", {
      cls: "agent-step-target",
      text: step.target
    });
    if (step.duration !== void 0) {
      const durationText = this.formatDuration(step.duration);
      stepEl.createEl("span", {
        cls: "agent-step-duration agent-step-duration-complete",
        text: durationText
      });
    } else if (step.startTime !== void 0) {
      const durationEl = stepEl.createEl("span", {
        cls: "agent-step-duration agent-step-duration-live",
        text: "0.0s"
      });
      this.startStepTimer(step.key, step.startTime, durationEl);
    }
    this.agentSteps.set(step.key, stepEl);
    this.agentStepsContainer.scrollTop = this.agentStepsContainer.scrollHeight;
  }
  /**
   * Start a live timer for a step
   */
  startStepTimer(key, startTime, durationEl) {
    this.stepStartTimes.set(key, startTime);
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const formatted = this.formatDuration(elapsed);
      durationEl.textContent = formatted;
    }, 100);
    this.stepTimers.set(key, timer);
  }
  /**
   * Stop the live timer for a step
   */
  stopStepTimer(key) {
    const timer = this.stepTimers.get(key);
    if (timer) {
      clearInterval(timer);
      this.stepTimers.delete(key);
    }
    this.stepStartTimes.delete(key);
  }
  /**
   * Clear all agent steps
   */
  clear() {
    for (const timer of this.stepTimers.values()) {
      clearInterval(timer);
    }
    this.stepTimers.clear();
    this.stepStartTimes.clear();
    if (this.agentStepsContainer) {
      this.agentStepsContainer.empty();
    }
    this.agentSteps.clear();
    if (this.agentActivitySection) {
      this.agentActivitySection.addClass("claude-code-hidden");
    }
  }
  /**
   * Restore agent steps from an array
   */
  restore(steps) {
    this.clear();
    for (const step of steps) {
      this.addStep(step);
    }
  }
  /**
   * Get all current steps
   */
  getSteps() {
    return Array.from(this.agentSteps.keys()).map((key) => {
      var _a;
      const [action, target] = key.split("-");
      const stepEl = this.agentSteps.get(key);
      const icon = ((_a = stepEl.querySelector(".agent-step-icon")) == null ? void 0 : _a.textContent) || "\u{1F527}";
      return { icon, action, target, key };
    });
  }
  /**
   * Format duration in a human-readable way
   */
  formatDuration(ms) {
    if (ms < 1e3) {
      return `${ms}ms`;
    } else if (ms < 6e4) {
      return `${(ms / 1e3).toFixed(1)}s`;
    } else {
      const minutes = Math.floor(ms / 6e4);
      const seconds = Math.floor(ms % 6e4 / 1e3);
      return `${minutes}m ${seconds}s`;
    }
  }
};

// src/managers/note-context-manager.ts
var fs4 = __toESM(require("fs"));
var path5 = __toESM(require("path"));
var crypto2 = __toESM(require("crypto"));

// src/core/claude-code-runner.ts
var fs3 = __toESM(require("fs"));
var path4 = __toESM(require("path"));
var import_string_decoder = require("string_decoder");

// src/core/streaming/tool-output-formatter.ts
var ToolOutputFormatter = class {
  /**
   * Format tool usage information from tool_use event or message block
   *
   * @param toolName Name of the tool being used
   * @param toolInput Input parameters for the tool
   * @param format Format style: 'compact' for message blocks, 'verbose' for events
   * @returns Array of formatted output lines
   */
  static formatToolUsage(toolName, toolInput, format = "compact") {
    const lines = [];
    if (format === "verbose") {
      lines.push(...this.formatVerboseHeader(toolName));
    }
    lines.push(...this.formatToolSpecificParams(toolName, toolInput, format));
    return lines;
  }
  /**
   * Format verbose header for tool_use events
   */
  static formatVerboseHeader(toolName) {
    const headers = {
      "Bash": "\n\u{1F527} Bash executing:\n",
      "Glob": "\n\u{1F50D} Glob searching:\n",
      "Grep": "\n\u{1F50E} Grep searching:\n",
      "Read": "\n\u{1F4D6} Reading file:\n",
      "Write": "\n\u270D\uFE0F  Writing file:\n",
      "Edit": "\n\u270F\uFE0F  Editing file:\n",
      "WebFetch": "\n\u{1F310} Fetching webpage:\n",
      "WebSearch": "\n\u{1F50D} Web searching:\n",
      "Task": "\n\u{1F916} Launching agent:\n"
    };
    return [headers[toolName] || `
\u{1F6E0}\uFE0F  ${toolName}:
`];
  }
  /**
   * Format tool-specific parameters
   */
  static formatToolSpecificParams(toolName, toolInput, format) {
    var _a, _b, _c;
    const lines = [];
    if (!toolInput) {
      return lines;
    }
    switch (toolName) {
      case "Bash":
        if (toolInput.command) {
          lines.push(`   $ ${toolInput.command}
`);
          if (toolInput.description) {
            lines.push(`   \u{1F4DD} ${toolInput.description}
`);
          }
        }
        break;
      case "WebSearch":
        if (toolInput.query) {
          const prefix = format === "compact" ? "   \u{1F50D} Query:" : "   Query:";
          lines.push(`${prefix} "${toolInput.query}"
`);
          if ((_a = toolInput.allowed_domains) == null ? void 0 : _a.length) {
            const label = format === "compact" ? "   \u2713 Allowed:" : "   Allowed domains:";
            lines.push(`${label} ${toolInput.allowed_domains.join(", ")}
`);
          }
          if ((_b = toolInput.blocked_domains) == null ? void 0 : _b.length) {
            const label = format === "compact" ? "   \u2717 Blocked:" : "   Blocked domains:";
            lines.push(`${label} ${toolInput.blocked_domains.join(", ")}
`);
          }
        }
        break;
      case "WebFetch":
        if (toolInput.url) {
          const prefix = format === "compact" ? "   \u{1F310} URL:" : "   URL:";
          lines.push(`${prefix} ${toolInput.url}
`);
          if (toolInput.prompt) {
            const label = format === "compact" ? "   \u{1F4CB} Task:" : "   Task:";
            const truncated = toolInput.prompt.substring(0, format === "compact" ? 100 : 150);
            const ellipsis = toolInput.prompt.length > (format === "compact" ? 100 : 150) ? "..." : "";
            lines.push(`${label} ${truncated}${ellipsis}
`);
          }
        }
        break;
      case "Glob":
        if (toolInput.pattern) {
          const prefix = format === "compact" ? "   \u{1F50D} Pattern:" : "   Pattern:";
          lines.push(`${prefix} ${toolInput.pattern}
`);
          if (toolInput.path) {
            const searchPath = format === "verbose" ? toolInput.path : toolInput.path;
            lines.push(`   \u{1F4C1} Path: ${searchPath}
`);
          } else if (format === "verbose") {
            lines.push(`   Path: .
`);
          }
        }
        break;
      case "Grep":
        if (toolInput.pattern) {
          const prefix = format === "compact" ? "   \u{1F50E} Pattern:" : "   Pattern:";
          lines.push(`${prefix} "${toolInput.pattern}"
`);
          if (toolInput.path) {
            const searchPath = format === "verbose" ? toolInput.path : toolInput.path;
            lines.push(`   \u{1F4C1} Path: ${searchPath}
`);
          } else if (format === "verbose") {
            lines.push(`   Path: .
`);
          }
          if (toolInput.output_mode) {
            const label = format === "compact" ? "   \u{1F4CA} Mode:" : "   Mode:";
            lines.push(`${label} ${toolInput.output_mode}
`);
          }
        }
        break;
      case "Read":
        if (toolInput.file_path) {
          const prefix = format === "compact" ? "   \u{1F4D6} File:" : "   ";
          lines.push(`${prefix}${toolInput.file_path}
`);
          if (format === "verbose" && (toolInput.offset || toolInput.limit)) {
            const start = toolInput.offset || 0;
            const end = toolInput.limit ? start + toolInput.limit : "EOF";
            lines.push(`   Lines: ${start} to ${end}
`);
          }
        }
        break;
      case "Write":
        if (toolInput.file_path) {
          const prefix = format === "compact" ? "   \u270D\uFE0F  File:" : "   ";
          lines.push(`${prefix}${toolInput.file_path}
`);
          const contentLength = ((_c = toolInput.content) == null ? void 0 : _c.length) || 0;
          const label = format === "compact" ? "   \u{1F4CF} Size:" : "   Size:";
          lines.push(`${label} ${contentLength} char${contentLength === 1 ? "" : "s"}
`);
        }
        break;
      case "Edit":
        if (toolInput.file_path) {
          const prefix = format === "compact" ? "   \u270F\uFE0F  File:" : "   ";
          lines.push(`${prefix}${toolInput.file_path}
`);
          if (format === "verbose" && toolInput.replace_all) {
            lines.push(`   Mode: Replace all occurrences
`);
          }
        }
        break;
      case "Task":
        if (toolInput.subagent_type) {
          const prefix = format === "compact" ? "   \u{1F916} Agent:" : "   Type:";
          lines.push(`${prefix} ${toolInput.subagent_type}
`);
        }
        if (toolInput.description) {
          lines.push(`   \u{1F4CB} Task: ${toolInput.description}
`);
        }
        if (format === "verbose" && toolInput.prompt) {
          const shortPrompt = toolInput.prompt.substring(0, 150);
          lines.push(`   Prompt: ${shortPrompt}${toolInput.prompt.length > 150 ? "..." : ""}
`);
        }
        break;
      case "TodoWrite": {
        const todoInputStr = JSON.stringify(toolInput, null, 2);
        lines.push(`   ${todoInputStr}
`);
        break;
      }
      default: {
        const inputStr = JSON.stringify(toolInput, null, 2);
        if (format === "compact") {
          const linesArr = inputStr.split("\n");
          if (linesArr.length > 10) {
            lines.push(`   ${linesArr.slice(0, 10).join("\n")}
   ...
`);
          } else {
            lines.push(`   ${inputStr}
`);
          }
        } else {
          if (inputStr.length > 300) {
            lines.push(`   ${inputStr.substring(0, 300)}...
`);
          } else {
            lines.push(`   ${inputStr}
`);
          }
        }
        break;
      }
    }
    return lines;
  }
  /**
   * Format tool result output
   *
   * @param toolName Name of the tool
   * @param result Result object from the tool
   * @returns Array of formatted output lines
   */
  static formatToolResult(toolName, result) {
    const lines = [];
    if (toolName === "Bash" && result && typeof result === "object") {
      const stdout = result.stdout;
      if (typeof stdout === "string") {
        const output = stdout.trim();
        if (output) {
          const outputLines = output.split("\n");
          lines.push(`   \u2713 Output (${outputLines.length} lines):
`);
          const preview = outputLines.slice(0, 3).join("\n");
          lines.push(`   ${preview}${outputLines.length > 3 ? "\n   ..." : ""}
`);
        } else {
          lines.push(`   \u2713 ${toolName} complete
`);
        }
      } else {
        lines.push(`   \u2713 ${toolName} complete
`);
      }
    } else if (result) {
      lines.push(`   \u2713 ${toolName} complete
`);
    }
    return lines;
  }
};

// src/core/streaming/stream-event-processor.ts
var StreamEventProcessor = class {
  /**
   * Process a single stream event and generate output
   *
   * @param event The stream event to process
   * @param sendOutput Callback to send output text
   * @param setSessionId Optional callback to store session ID
   */
  static processEvent(event, sendOutput, setSessionId) {
    switch (event.type) {
      case "system":
        this.handleSystemEvent(event, sendOutput, setSessionId);
        break;
      case "assistant":
        this.handleAssistantEvent(event, sendOutput);
        break;
      case "tool_use":
        this.handleToolUseEvent(event, sendOutput);
        break;
      case "user":
        this.handleUserEvent(event, sendOutput);
        break;
      case "result":
        this.handleResultEvent(event, sendOutput);
        break;
      case "stream_event":
        this.handleStreamEvent(event, sendOutput);
        break;
      default:
        this.handleUnknownEvent(event, sendOutput);
        break;
    }
  }
  /**
   * Handle system initialization events
   */
  static handleSystemEvent(event, sendOutput, setSessionId) {
    var _a;
    if (event.subtype === "init") {
      sendOutput(`
\u{1F527} Session initialized: ${event.model}
`);
      sendOutput(`\u{1F4E6} Available tools: ${((_a = event.tools) == null ? void 0 : _a.join(", ")) || "none"}
`);
      if (event.session_id && setSessionId) {
        setSessionId(event.session_id);
        sendOutput(`\u{1F4BE} Session ID: ${event.session_id}
`);
      }
    }
  }
  /**
   * Handle assistant message events
   */
  static handleAssistantEvent(event, sendOutput) {
    var _a;
    if ((_a = event.message) == null ? void 0 : _a.content) {
      for (const block of event.message.content) {
        if (block.type === "text" && block.text) {
          sendOutput(block.text, true, false, true);
        } else if (block.type === "tool_use" && block.name) {
          const toolName = block.name;
          const toolInput = block.input || {};
          sendOutput(`
\u{1F527} Using tool: ${toolName}
`);
          const formatted = ToolOutputFormatter.formatToolUsage(toolName, toolInput, "compact");
          for (const line of formatted) {
            sendOutput(line);
          }
        }
      }
    }
  }
  /**
   * Handle tool use events
   */
  static handleToolUseEvent(event, sendOutput) {
    const toolName = event.tool_name || "unknown";
    if (event.subtype === "input" && event.input) {
      const formatted = ToolOutputFormatter.formatToolUsage(toolName, event.input, "verbose");
      for (const line of formatted) {
        sendOutput(line);
      }
    } else if (event.subtype === "result") {
      const resultLines = ToolOutputFormatter.formatToolResult(toolName, event.result);
      for (const line of resultLines) {
        sendOutput(line);
      }
      if ((toolName === "Glob" || toolName === "Grep") && event.result) {
        const resultStr = typeof event.result === "string" ? event.result : JSON.stringify(event.result);
        const lines = resultStr.split("\n").filter((l) => l.trim());
        sendOutput(`   \u2713 Found ${lines.length} results
`);
      }
    }
  }
  /**
   * Handle user/tool result events
   */
  static handleUserEvent(event, sendOutput) {
    var _a;
    if ((_a = event.message) == null ? void 0 : _a.content) {
      for (const block of event.message.content) {
        if (block.type === "tool_result") {
          sendOutput(`
\u{1F4E5} Tool result (${block.tool_use_id}):
`);
          const content = typeof block.content === "string" ? block.content : JSON.stringify(block.content);
          const lines = content.split("\n");
          if (lines.length > 10) {
            sendOutput(`   ${lines.slice(0, 10).join("\n")}
`);
            sendOutput(`   ... (${lines.length - 10} more lines)
`);
          } else if (content.length > 500) {
            sendOutput(`   ${content.substring(0, 500)}...
`);
            sendOutput(`   (${content.length - 500} more characters)
`);
          } else {
            sendOutput(`   ${content}
`);
          }
        }
      }
    }
  }
  /**
   * Handle final result events
   */
  static handleResultEvent(event, sendOutput) {
    var _a;
    sendOutput(`
\u2705 Complete!
`);
    sendOutput(`\u23F1\uFE0F  Duration: ${event.duration_ms}ms
`);
    sendOutput(`\u{1F4B0} Cost: $${((_a = event.total_cost_usd) == null ? void 0 : _a.toFixed(4)) || "0.0000"}
`);
    if (event.usage) {
      sendOutput(`\u{1F4CA} Tokens: ${event.usage.input_tokens} in, ${event.usage.output_tokens} out
`);
    }
  }
  /**
   * Handle real-time streaming events
   */
  static handleStreamEvent(event, sendOutput) {
    var _a, _b;
    const streamEvent = event.event;
    if (!streamEvent)
      return;
    if (streamEvent.type === "content_block_delta") {
      if (((_a = streamEvent.delta) == null ? void 0 : _a.type) === "text_delta" && streamEvent.delta.text) {
        console.debug("[Stream Processor] Sending text delta as assistant message");
        sendOutput(streamEvent.delta.text, false, true, true);
      }
    } else if (streamEvent.type === "content_block_start") {
      if (((_b = streamEvent.content_block) == null ? void 0 : _b.type) === "text") {
        sendOutput(`
\u{1F4AC} Claude: `, false, false);
      }
    } else if (streamEvent.type === "content_block_stop") {
      sendOutput(`
`, false, "finish", true);
    }
  }
  /**
   * Handle unknown event types (debugging)
   */
  static handleUnknownEvent(event, sendOutput) {
    sendOutput(`
\u{1F50D} [${event.type}${event.subtype ? " / " + event.subtype : ""}]
`);
    const displayFields = ["session_id", "uuid", "duration_ms", "model", "is_error"];
    for (const field of displayFields) {
      const value = event[field];
      if (value !== void 0) {
        sendOutput(`   ${field}: ${String(value)}
`);
      }
    }
    if (event.message) {
      sendOutput(`   message: ${JSON.stringify(event.message).substring(0, 200)}...
`);
    }
  }
};

// src/core/session-manager.ts
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
var crypto = __toESM(require("crypto"));
var SessionManager = class {
  /**
   * Get or create session directory for a note
   *
   * @param notePath Path to the note file
   * @param vaultPath Path to the vault root
   * @param configDir Config directory name from Vault.configDir
   * @returns Session information
   */
  static getSessionInfo(notePath, vaultPath, configDir) {
    const noteHash = crypto.createHash("md5").update(notePath).digest("hex");
    const sessionDir = path.join(vaultPath, configDir, "claude-code-sessions", noteHash);
    if (!fs.existsSync(sessionDir)) {
      fs.mkdirSync(sessionDir, { recursive: true });
    }
    const sessionIdFile = path.join(sessionDir, "session_id.txt");
    let sessionId = null;
    let isNewSession = true;
    if (fs.existsSync(sessionIdFile)) {
      try {
        sessionId = fs.readFileSync(sessionIdFile, "utf8").trim();
        isNewSession = false;
      } catch (error) {
        console.warn("Error loading session ID:", error);
      }
    }
    return {
      sessionDir,
      sessionId,
      isNewSession
    };
  }
  /**
   * Save session ID to disk
   *
   * @param sessionDir Directory where session data is stored
   * @param sessionId Session ID to save
   */
  static saveSessionId(sessionDir, sessionId) {
    try {
      const sessionIdFile = path.join(sessionDir, "session_id.txt");
      fs.writeFileSync(sessionIdFile, sessionId);
    } catch (error) {
      console.error("Error saving session ID:", error);
      throw error;
    }
  }
  /**
   * Save conversation history
   *
   * @param sessionDir Directory where session data is stored
   * @param userPrompt User's prompt
   * @param assistantResponse Assistant's response
   */
  static saveConversationHistory(sessionDir, userPrompt, assistantResponse) {
    const historyFile = path.join(sessionDir, "conversation_history.json");
    try {
      let history = [];
      if (fs.existsSync(historyFile)) {
        history = JSON.parse(fs.readFileSync(historyFile, "utf8"));
      }
      history.push({
        role: "user",
        content: userPrompt,
        timestamp: new Date().toISOString()
      });
      history.push({
        role: "assistant",
        content: assistantResponse,
        timestamp: new Date().toISOString()
      });
      if (history.length > 20) {
        history = history.slice(-20);
      }
      fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
    } catch (error) {
      console.error("Error saving conversation history:", error);
      throw error;
    }
  }
};

// src/core/prompt-builder.ts
var path2 = __toESM(require("path"));
var PromptBuilder = class {
  /**
   * Build a complete prompt for Claude Code
   *
   * @param request The request containing note content and user prompt
   * @param sessionDir Session directory path
   * @param customSystemPrompt Optional custom system prompt
   * @param allowVaultAccess Whether vault access is enabled
   * @param bypassPermissions Whether to bypass permission requests
   * @returns Complete prompt string
   */
  static buildPrompt(request, sessionDir, customSystemPrompt, allowVaultAccess, bypassPermissions) {
    let prompt = "";
    if (customSystemPrompt) {
      prompt += customSystemPrompt + "\n\n";
    }
    if (request.conversationalMode) {
      prompt += this.buildConversationalModeInstructions();
      prompt += `Current note content (for reference only - DO NOT MODIFY):
---
${request.noteContent}
---

`;
      prompt += `USER QUESTION: ${request.userPrompt}

`;
      return prompt;
    }
    prompt += this.buildPermissionModeInstructions(bypassPermissions);
    prompt += this.buildContextInstructions(request, sessionDir, allowVaultAccess);
    prompt += `EDITING INSTRUCTIONS:
`;
    prompt += `- The note content is in: ${path2.join(sessionDir, "note.md")}
`;
    prompt += `- Use the Edit or Write tool to modify the file
`;
    prompt += `- After you make changes, confirm what you did

`;
    prompt += `USER REQUEST: ${request.userPrompt}

`;
    return prompt;
  }
  /**
   * Build conversational mode instructions
   */
  static buildConversationalModeInstructions() {
    return `\u{1F4AC} CONVERSATIONAL MODE
You are in conversational mode. This means:
- DO NOT use file editing tools (Write, Edit, NotebookEdit)
- DO NOT modify any files
- You can use Read, Grep, Bash, WebSearch, and other read-only tools
- Focus on answering the user's question or providing information
- The note content is provided for context only
- Respond directly in your message - no file modifications needed

`;
  }
  /**
   * Build permission mode instructions
   */
  static buildPermissionModeInstructions(bypassPermissions) {
    if (bypassPermissions) {
      return `\u{1F513} PERMISSION MODE: AUTONOMOUS
You have FULL AUTONOMY to use ALL tools without asking for permission.
- You can read, write, edit, and execute any files or commands
- You can use web search, bash commands, and any other tools freely
- You do NOT need to ask for user approval before taking actions
- Proceed directly with your tasks using whatever tools are necessary

`;
    } else {
      return `\u{1F512} PERMISSION MODE: INTERACTIVE
- When you need permission (according your system prompt and configuration), your response MUST include the text "REQUIRED_APPROVAL"
`;
    }
  }
  /**
   * Build context instructions
   */
  static buildContextInstructions(request, sessionDir, allowVaultAccess) {
    let instructions = `You are an intelligent assistant helping to edit a markdown note in Obsidian vault. Your responses must be on the language of the user prompt

`;
    instructions += `CURRENT NOTE INFORMATION:
`;
    instructions += `- File path: ${request.notePath}
`;
    instructions += `- File name: ${path2.basename(request.notePath)}
`;
    instructions += `- Working directory: ${sessionDir}
`;
    instructions += `- Note file in session: note.md (local copy)
`;
    if (allowVaultAccess && request.vaultPath) {
      instructions += `- Obsidian vault root: ${request.vaultPath}
`;
      instructions += `- You can access ALL vault files using absolute paths: ${request.vaultPath}/filename.md
`;
      instructions += `- To search vault files, use tools with path: ${request.vaultPath}
`;
    }
    instructions += `
`;
    return instructions;
  }
  /**
   * Build agent mode instructions
   */
  static buildAgentInstructions() {
    return `You are a powerful AI assistant with access to tools. USE THEM ACTIVELY.

IMPORTANT - INTERPRET USER INTENT:
1. If the user is asking a QUESTION or requesting ANALYSIS, simply respond conversationally.
2. If the user wants to EDIT/MODIFY the note, use the Edit or Write tool to modify note.md, then explain what you changed.

`;
  }
};

// src/core/cli-args-builder.ts
var CliArgsBuilder = class {
  /**
   * Build CLI arguments array
   *
   * @param config Configuration for CLI arguments
   * @returns Array of CLI arguments
   */
  static buildArgs(config) {
    const args = [];
    args.push("--print");
    args.push("--verbose");
    args.push("--output-format", "stream-json");
    args.push("--input-format", "stream-json");
    args.push("--replay-user-messages");
    args.push("--include-partial-messages");
    if (config.sessionId) {
      args.push("--resume", config.sessionId);
    }
    if (config.settings.enablePermissionlessMode || config.bypassPermissions) {
      args.push("--permission-mode", "bypassPermissions");
    } else {
      args.push("--permission-mode", "acceptEdits");
    }
    if (config.settings.allowVaultAccess && config.vaultPath) {
      args.push("--add-dir", config.vaultPath);
    }
    const modelToUse = config.runtimeModelOverride || config.settings.modelAlias;
    if (modelToUse) {
      args.push("--model", modelToUse);
    }
    return args;
  }
};

// src/core/process-spawner.ts
var import_child_process = require("child_process");
var fs2 = __toESM(require("fs"));
var path3 = __toESM(require("path"));
var os = __toESM(require("os"));
var ProcessSpawner = class {
  /**
   * Check if running on Windows
   */
  static isWindows() {
    return process.platform === "win32";
  }
  /**
   * Get the default shell for the current platform
   */
  static getDefaultShell() {
    if (this.isWindows()) {
      if (process.env.COMSPEC) {
        return process.env.COMSPEC;
      }
      return "cmd.exe";
    }
    return process.env.SHELL || "/bin/sh";
  }
  /**
   * Get the PATH separator for the current platform
   */
  static getPathSeparator() {
    return this.isWindows() ? ";" : ":";
  }
  /**
   * Get the shell name from a shell path (e.g., "/bin/zsh" -> "zsh")
   */
  static getShellName(shellPath) {
    return path3.basename(shellPath);
  }
  /**
   * Get environment variables as if running in a login shell
   * This loads variables from .zshrc, .bash_profile, etc. on Unix
   * On Windows, it uses process.env directly as Windows doesn't have shell profiles
   */
  static getShellEnvironment(onDebugOutput) {
    if (this.isWindows()) {
      if (onDebugOutput) {
        onDebugOutput(`[DEBUG] Windows detected, using process.env directly
`);
      }
      return __spreadValues({}, process.env);
    }
    try {
      const shell = process.env.SHELL || "/bin/sh";
      const shellName = this.getShellName(shell);
      const homeDir = os.homedir();
      if (onDebugOutput) {
        onDebugOutput(`[DEBUG] Loading environment from shell: ${shell} (${shellName})
`);
        onDebugOutput(`[DEBUG] Home directory: ${homeDir}
`);
      }
      const startTime = Date.now();
      let sourceCommand;
      if (shellName === "zsh") {
        if (onDebugOutput) {
          onDebugOutput(`[DEBUG] Will source: ~/.zshenv, ~/.zprofile, ~/.zshrc
`);
        }
        sourceCommand = `${shell} -c 'source ~/.zshenv 2>/dev/null; source ~/.zprofile 2>/dev/null; source ~/.zshrc 2>/dev/null; env'`;
      } else if (shellName === "bash") {
        if (onDebugOutput) {
          onDebugOutput(`[DEBUG] Will source: ~/.profile, ~/.bash_profile, ~/.bashrc
`);
        }
        sourceCommand = `${shell} -c 'source ~/.profile 2>/dev/null; source ~/.bash_profile 2>/dev/null; source ~/.bashrc 2>/dev/null; env'`;
      } else if (shellName === "fish") {
        if (onDebugOutput) {
          onDebugOutput(`[DEBUG] Will source: fish config via login shell
`);
        }
        sourceCommand = `${shell} -l -c 'env'`;
      } else {
        if (onDebugOutput) {
          onDebugOutput(`[DEBUG] Using login shell fallback for: ${shellName}
`);
        }
        sourceCommand = `${shell} -l -c 'env'`;
      }
      const envOutput = (0, import_child_process.execSync)(sourceCommand, {
        encoding: "utf8",
        maxBuffer: 10 * 1024 * 1024,
        // 10MB buffer for large environments
        timeout: 5e3,
        // 5 second timeout
        env: __spreadProps(__spreadValues({}, process.env), { HOME: homeDir })
        // Ensure HOME is set
      });
      const duration = Date.now() - startTime;
      if (onDebugOutput) {
        onDebugOutput(`[DEBUG] Shell environment loaded in ${duration}ms
`);
        onDebugOutput(`[DEBUG] Raw output length: ${envOutput.length} bytes
`);
      }
      const env = {};
      const lines = envOutput.split("\n");
      if (onDebugOutput) {
        onDebugOutput(`[DEBUG] Parsing ${lines.length} lines of environment output
`);
      }
      lines.forEach((line) => {
        const idx = line.indexOf("=");
        if (idx > 0) {
          const key = line.substring(0, idx);
          const value = line.substring(idx + 1);
          env[key] = value;
        }
      });
      if (onDebugOutput) {
        onDebugOutput(`[DEBUG] Parsed ${Object.keys(env).length} environment variables
`);
        const processEnvKeys = Object.keys(process.env);
        const shellEnvKeys = Object.keys(env);
        const onlyInShell = shellEnvKeys.filter((k) => !processEnvKeys.includes(k));
        const onlyInProcess = processEnvKeys.filter((k) => !shellEnvKeys.includes(k));
        if (onlyInShell.length > 0) {
          onDebugOutput(`[DEBUG] Variables only in shell (${onlyInShell.length}): ${onlyInShell.slice(0, 10).join(", ")}${onlyInShell.length > 10 ? "..." : ""}
`);
        }
        if (onlyInProcess.length > 0) {
          onDebugOutput(`[DEBUG] Variables only in process.env (${onlyInProcess.length}): ${onlyInProcess.slice(0, 10).join(", ")}${onlyInProcess.length > 10 ? "..." : ""}
`);
        }
      }
      return env;
    } catch (error) {
      if (onDebugOutput) {
        onDebugOutput(`[DEBUG] \u26A0\uFE0F Failed to load shell environment: ${error}
`);
        onDebugOutput(`[DEBUG] Falling back to process.env
`);
      }
      return __spreadValues({}, process.env);
    }
  }
  /**
   * Spawn Claude Code process with enhanced environment
   *
   * @param config Spawn configuration
   * @returns Child process
   */
  static spawn(config) {
    const shellEnv = this.getShellEnvironment(config.onDebugOutput);
    if (config.customEnvVars) {
      const customVarCount = Object.keys(config.customEnvVars).filter((k) => config.customEnvVars[k]).length;
      if (customVarCount > 0 && config.onDebugOutput) {
        config.onDebugOutput(`[DEBUG] Applying ${customVarCount} custom environment variables:
`);
      }
      for (const [key, value] of Object.entries(config.customEnvVars)) {
        if (value) {
          shellEnv[key] = value;
          if (config.onDebugOutput) {
            const displayValue = key.includes("KEY") || key.includes("TOKEN") || key.includes("SECRET") ? `${value.substring(0, 8)}...` : value;
            config.onDebugOutput(`[DEBUG]   ${key}=${displayValue}
`);
          }
        }
      }
    }
    if (config.onDebugOutput) {
      config.onDebugOutput("[DEBUG] Shell environment variables loaded:\n");
      const sortedKeys = Object.keys(shellEnv).sort();
      const importantVars = ["PATH", "HOME", "SHELL", "USER", "ANTHROPIC_API_KEY", "NODE_ENV"];
      config.onDebugOutput("[DEBUG] Important variables:\n");
      for (const key of importantVars) {
        if (shellEnv[key]) {
          let value = shellEnv[key];
          if (key.includes("KEY") || key.includes("TOKEN") || key.includes("SECRET")) {
            value = value ? `${value.substring(0, 8)}...` : "";
          }
          config.onDebugOutput(`[DEBUG]   ${key}=${value}
`);
        }
      }
      config.onDebugOutput("[DEBUG] All environment variables:\n");
      for (const key of sortedKeys) {
        if (!importantVars.includes(key)) {
          let value = shellEnv[key];
          if (key.includes("KEY") || key.includes("TOKEN") || key.includes("SECRET") || key.includes("PASSWORD")) {
            value = value ? `${value.substring(0, 8)}...` : "";
          }
          config.onDebugOutput(`[DEBUG]   ${key}=${value}
`);
        }
      }
      config.onDebugOutput("\n");
    }
    let resolvedClaudePath = config.claudePath;
    if (resolvedClaudePath.startsWith("~")) {
      const homeDir = shellEnv.HOME || shellEnv.USERPROFILE || os.homedir();
      resolvedClaudePath = resolvedClaudePath.replace("~", homeDir);
    }
    if (!path3.isAbsolute(resolvedClaudePath)) {
      const pathSeparator = this.getPathSeparator();
      const pathDirs = (shellEnv.PATH || "").split(pathSeparator).filter((dir) => dir);
      const extensions = this.isWindows() ? ["", ".exe", ".cmd", ".bat"] : [""];
      for (const dir of pathDirs) {
        for (const ext of extensions) {
          const fullPath = path3.join(dir, resolvedClaudePath + ext);
          if (fs2.existsSync(fullPath)) {
            resolvedClaudePath = fullPath;
            break;
          }
        }
        if (path3.isAbsolute(resolvedClaudePath))
          break;
      }
    }
    if (config.onDebugOutput) {
      config.onDebugOutput(`[DEBUG] Resolved claude path: ${resolvedClaudePath}
`);
      config.onDebugOutput(`[DEBUG] Command: ${resolvedClaudePath} ${config.args.join(" ")}
`);
    }
    const shell = this.getDefaultShell();
    if (config.onDebugOutput) {
      config.onDebugOutput(`[DEBUG] Using shell: ${shell}
`);
      config.onDebugOutput(`[DEBUG] Platform: ${process.platform}
`);
    }
    const envWithUtf8 = __spreadProps(__spreadValues({}, shellEnv), {
      LANG: shellEnv.LANG || "en_US.UTF-8",
      LC_ALL: shellEnv.LC_ALL || "en_US.UTF-8",
      LC_CTYPE: shellEnv.LC_CTYPE || "en_US.UTF-8",
      PYTHONIOENCODING: "utf-8",
      // In case Claude CLI uses Python
      NODE_OPTIONS: shellEnv.NODE_OPTIONS ? `${shellEnv.NODE_OPTIONS} --input-type=module` : ""
    });
    const options = {
      cwd: config.workingDir,
      env: envWithUtf8,
      shell
    };
    const childProcess = (0, import_child_process.spawn)(resolvedClaudePath, config.args, options);
    if (childProcess.stdin) {
      childProcess.stdin.setDefaultEncoding("utf8");
    }
    return childProcess;
  }
  /**
   * Send stdin input to process
   *
   * @param process Child process
   * @param prompt Prompt to send
   */
  static sendInput(process2, prompt) {
    if (process2.stdin) {
      const inputMessage = {
        type: "user",
        message: {
          role: "user",
          content: prompt
        }
      };
      const jsonInput = JSON.stringify(inputMessage) + "\n";
      process2.stdin.write(jsonInput, "utf8");
      process2.stdin.end();
    }
  }
};

// src/core/response-parser.ts
var ResponseParser = class {
  /**
   * Parse JSON output lines from Claude Code
   *
   * @param outputLines Array of JSON output lines
   * @returns Parsed output with assistant text and token usage
   */
  static parseOutput(outputLines) {
    var _a, _b;
    let assistantText = "";
    let tokenUsage = void 0;
    for (const line of outputLines) {
      try {
        const event = JSON.parse(line);
        if (event.type === "stream_event") {
          if (event.event_type === "content_block_delta") {
            if (((_a = event.delta) == null ? void 0 : _a.type) === "text_delta" && event.delta.text) {
              assistantText += event.delta.text;
            }
          }
        }
        if (event.type === "assistant") {
          if ((_b = event.message) == null ? void 0 : _b.content) {
            for (const block of event.message.content) {
              if (block.type === "text") {
                assistantText += block.text + "\n";
              }
            }
          }
        }
        if (event.type === "result") {
          if (event.usage) {
            tokenUsage = {
              inputTokens: event.usage.input_tokens || 0,
              outputTokens: event.usage.output_tokens || 0,
              totalTokens: (event.usage.input_tokens || 0) + (event.usage.output_tokens || 0)
            };
          }
        }
      } catch (e) {
      }
    }
    return {
      assistantText: assistantText.trim(),
      tokenUsage
    };
  }
  /**
   * Build error response
   *
   * @param error Error message
   * @param outputLines Output lines (if any)
   * @returns Error response
   */
  static buildErrorResponse(error, outputLines = []) {
    return {
      success: false,
      error,
      output: outputLines
    };
  }
};

// src/core/streaming/response-content-extractor.ts
var ResponseContentExtractor = class {
  /**
   * Detect if Claude's response is asking for permission to perform an action
   *
   * @param text The text content to analyze
   * @returns True if the text contains a permission request pattern
   */
  static detectPermissionRequest(text) {
    return text.includes("REQUIRED_APPROVAL");
  }
};

// src/core/claude-code-runner.ts
var ClaudeCodeRunner = class {
  // Store session ID from init event
  constructor(settings) {
    this.currentProcess = null;
    this.outputCallback = null;
    this.currentSessionId = null;
    this.settings = settings;
  }
  /**
   * Run Claude Code with the given request
   */
  run(request, onOutput) {
    return __async(this, null, function* () {
      this.outputCallback = onOutput || null;
      let claudePath = this.settings.claudeCodePath || "claude";
      if (claudePath.startsWith("~")) {
        const homeDir = process.env.HOME || process.env.USERPROFILE || "";
        claudePath = claudePath.replace("~", homeDir);
      }
      if (!claudePath) {
        return {
          success: false,
          error: "Claude Code path not configured. Please set it in plugin settings.",
          output: []
        };
      }
      try {
        return yield this.executeClaudeCode(claudePath, request);
      } catch (error) {
        return {
          success: false,
          error: `Failed to execute Claude Code: ${error}`,
          output: []
        };
      }
    });
  }
  /**
   * Execute Claude Code process and capture output
   */
  executeClaudeCode(claudePath, request) {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        var _a, _b;
        const output = [];
        let errorOutput = "";
        const startTime = Date.now();
        const sessionInfo = SessionManager.getSessionInfo(
          request.notePath,
          request.vaultPath || "",
          request.configDir
        );
        this.sendOutput(
          sessionInfo.isNewSession ? `\u2192 Starting new session
` : `\u2713 Resuming session: ${sessionInfo.sessionId}
`
        );
        const noteFilePath = path4.join(sessionInfo.sessionDir, "note.md");
        const contentToEdit = request.selectedText || request.noteContent;
        try {
          fs3.writeFileSync(noteFilePath, contentToEdit, "utf8");
          this.sendOutput(`\u{1F4DD} Created note.md for editing
`);
        } catch (e) {
          this.sendOutput(`\u26A0\uFE0F Error creating note.md: ${e}
`);
        }
        const fullPrompt = PromptBuilder.buildPrompt(
          request,
          sessionInfo.sessionDir,
          this.settings.customSystemPrompt,
          this.settings.allowVaultAccess,
          this.settings.enablePermissionlessMode || request.bypassPermissions
        );
        const args = CliArgsBuilder.buildArgs({
          settings: this.settings,
          sessionId: sessionInfo.sessionId,
          vaultPath: request.vaultPath || null,
          bypassPermissions: request.bypassPermissions || false,
          runtimeModelOverride: request.runtimeModelOverride
        });
        if (this.settings.enablePermissionlessMode || request.bypassPermissions) {
          this.sendOutput(`\u{1F513} Permissionless mode enabled
`);
        } else {
          this.sendOutput(`\u{1F512} Permission mode: interactive (Claude will ask for permission)
`);
        }
        if (this.settings.allowVaultAccess && request.vaultPath) {
          this.sendOutput(`Vault access enabled: ${request.vaultPath}
`);
        }
        const workingDir = request.vaultPath || process.cwd();
        this.sendOutput(`Working dir: ${workingDir}
`);
        this.sendOutput(`Starting Claude Code...
`);
        this.sendOutput(`Session directory: ${sessionInfo.sessionDir}
`);
        this.sendOutput(`[DEBUG] Checking environment...
`);
        this.sendOutput(`[DEBUG] SHELL: ${process.env.SHELL}
`);
        this.sendOutput(`[DEBUG] HOME: ${process.env.HOME}
`);
        this.sendOutput(`[DEBUG] Claude path: ${claudePath}
`);
        const customEnvVars = {};
        if (this.settings.anthropicBaseUrl) {
          customEnvVars["ANTHROPIC_BASE_URL"] = this.settings.anthropicBaseUrl;
        }
        if (this.settings.anthropicAuthToken) {
          customEnvVars["ANTHROPIC_AUTH_TOKEN"] = this.settings.anthropicAuthToken;
        }
        if (this.settings.anthropicModel) {
          customEnvVars["ANTHROPIC_MODEL"] = this.settings.anthropicModel;
        }
        if (this.settings.anthropicSmallFastModel) {
          customEnvVars["ANTHROPIC_SMALL_FAST_MODEL"] = this.settings.anthropicSmallFastModel;
        }
        try {
          this.currentProcess = ProcessSpawner.spawn({
            claudePath,
            args,
            workingDir,
            onDebugOutput: (msg) => this.sendOutput(msg),
            customEnvVars: Object.keys(customEnvVars).length > 0 ? customEnvVars : void 0
          });
          this.sendOutput(`[DEBUG] Process spawned successfully, PID: ${this.currentProcess.pid}
`);
        } catch (spawnError) {
          this.sendOutput(`
\u274C Failed to spawn process: ${spawnError}`);
          throw spawnError;
        }
        ProcessSpawner.sendInput(this.currentProcess, fullPrompt);
        let timeoutId = null;
        if (this.settings.timeoutSeconds > 0) {
          timeoutId = setTimeout(() => {
            if (this.currentProcess) {
              this.sendOutput(`
Timeout after ${this.settings.timeoutSeconds} seconds, terminating...`);
              this.currentProcess.kill();
            }
          }, this.settings.timeoutSeconds * 1e3);
        }
        const stdoutDecoder = new import_string_decoder.StringDecoder("utf8");
        let buffer = "";
        (_a = this.currentProcess.stdout) == null ? void 0 : _a.on("data", (data) => {
          buffer += stdoutDecoder.write(data);
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            if (!line.trim())
              continue;
            try {
              const event = JSON.parse(line);
              output.push(line);
              this.handleStreamEvent(event);
            } catch (e) {
              this.sendOutput(`[raw] ${line}`);
            }
          }
        });
        const stderrDecoder = new import_string_decoder.StringDecoder("utf8");
        (_b = this.currentProcess.stderr) == null ? void 0 : _b.on("data", (data) => {
          const text = stderrDecoder.write(data);
          errorOutput += text;
          this.sendOutput(`[stderr] ${text}`);
        });
        this.sendOutput(`
[DEBUG] Process spawned, PID: ${this.currentProcess.pid}`);
        this.sendOutput(`[DEBUG] Working dir: ${workingDir}`);
        this.sendOutput(`[DEBUG] Session dir: ${sessionInfo.sessionDir}`);
        this.sendOutput(`[DEBUG] Waiting for output...
`);
        this.currentProcess.on("exit", (code, signal) => {
          this.sendOutput(`
[DEBUG] Process exited with code: ${code}, signal: ${signal}`);
        });
        this.currentProcess.on("close", (code) => {
          this.sendOutput(`
[DEBUG] Process closed with code: ${code}`);
          const claudeDir = path4.join(sessionInfo.sessionDir, ".claude");
          const claudeDirCreated = fs3.existsSync(claudeDir);
          this.sendOutput(`
[DEBUG] .claude directory after run: ${claudeDirCreated ? "EXISTS" : "NOT FOUND"}`);
          if (claudeDirCreated) {
            try {
              const contents = fs3.readdirSync(claudeDir);
              this.sendOutput(`
[DEBUG] .claude contents: ${contents.join(", ")}`);
            } catch (e) {
              this.sendOutput(`
[DEBUG] Error reading .claude: ${e}`);
            }
          }
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          this.currentProcess = null;
          if (code === 0) {
            this.sendOutput(`
[DEBUG] Processing ${output.length} output lines`);
            const parsed = ResponseParser.parseOutput(output);
            const isPermissionRequest = ResponseContentExtractor.detectPermissionRequest(parsed.assistantText);
            this.sendOutput(`
[DEBUG] Full response length: ${parsed.assistantText.length} chars`);
            let modifiedContent = void 0;
            try {
              if (fs3.existsSync(noteFilePath)) {
                const noteContent = fs3.readFileSync(noteFilePath, "utf8");
                if (noteContent !== contentToEdit && !request.conversationalMode) {
                  modifiedContent = noteContent;
                  this.sendOutput(`
\u2705 note.md was modified by Claude
`);
                } else {
                  this.sendOutput(`
 \u2139\uFE0F  note.md unchanged (likely a question/analysis)
`);
                }
              } else {
                this.sendOutput(`
\u26A0\uFE0F  note.md not found after execution
`);
              }
            } catch (e) {
              this.sendOutput(`
\u26A0\uFE0F  Error reading note.md: ${e}
`);
            }
            try {
              SessionManager.saveConversationHistory(
                sessionInfo.sessionDir,
                request.userPrompt,
                parsed.assistantText
              );
              this.sendOutput(`
\u{1F4BE} Conversation history saved
`);
              if (this.currentSessionId) {
                SessionManager.saveSessionId(sessionInfo.sessionDir, this.currentSessionId);
                this.sendOutput(`\u{1F4BE} Session ID saved: ${this.currentSessionId}
`);
              }
            } catch (e) {
              this.sendOutput(`
\u26A0 Error saving session data: ${e}
`);
            }
            const totalDuration = Date.now() - startTime;
            const response = {
              success: true,
              modifiedContent,
              assistantMessage: parsed.assistantText,
              output,
              tokenUsage: parsed.tokenUsage,
              isPermissionRequest
            };
            if (response.success) {
              if (modifiedContent) {
                this.sendOutput(`
\u2713 Claude Code completed successfully in ${(totalDuration / 1e3).toFixed(2)}s`);
              } else if (isPermissionRequest) {
                this.sendOutput(`
\u26A0\uFE0F Permission request detected - waiting for user approval`);
              } else {
                this.sendOutput(`
\u2713 Analysis completed (no file modifications) in ${(totalDuration / 1e3).toFixed(2)}s`);
              }
            }
            resolve(response);
          } else {
            this.sendOutput(`
\u2717 Claude Code failed with code ${code}`);
            if (errorOutput) {
              this.sendOutput(`Error output: ${errorOutput}`);
            }
            resolve(ResponseParser.buildErrorResponse(
              `Claude Code exited with code ${code}. ${errorOutput}`,
              output
            ));
          }
        });
        this.currentProcess.on("error", (err) => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          this.currentProcess = null;
          this.sendOutput(`
\u2717 Error: ${err.message}`);
          resolve(ResponseParser.buildErrorResponse(
            `Failed to spawn Claude Code: ${err.message}`,
            output
          ));
        });
      });
    });
  }
  /**
   * Send input to the current Claude Code process stdin
   */
  sendInput(input) {
    if (this.currentProcess && this.currentProcess.stdin) {
      try {
        this.currentProcess.stdin.write(input);
        this.sendOutput(`
[User input sent]: ${input.trim()}`);
        return true;
      } catch (error) {
        console.error("Failed to write to stdin:", error);
        this.sendOutput(`
\u2717 Failed to send input: ${error}`);
        return false;
      }
    }
    console.error("Cannot send input: no active process or stdin not available");
    return false;
  }
  /**
   * Terminate the current Claude Code process if running
   */
  terminate() {
    if (this.currentProcess) {
      this.currentProcess.kill();
      this.currentProcess = null;
      this.sendOutput("\n\u26A0 Process terminated by user");
    }
  }
  /**
   * Check if Claude Code is currently running
   */
  isRunning() {
    return this.currentProcess !== null;
  }
  /**
   * Handle stream-json events
   */
  handleStreamEvent(event) {
    StreamEventProcessor.processEvent(
      event,
      (text, isMarkdown, isStreaming, isAssistantMessage) => this.sendOutput(text, isMarkdown, isStreaming, isAssistantMessage),
      (sessionId) => {
        this.currentSessionId = sessionId;
      }
    );
  }
  /**
   * Send output to callback
   */
  sendOutput(text, isMarkdown = false, isStreaming, isAssistantMessage) {
    if (this.outputCallback) {
      this.outputCallback(text, isMarkdown, isStreaming, isAssistantMessage);
    }
  }
};

// src/managers/note-context-manager.ts
var NoteContextManager = class {
  constructor(settings, dataDir) {
    this.contexts = /* @__PURE__ */ new Map();
    this.settings = settings;
    this.dataDir = dataDir;
  }
  /**
   * Get or create context for a note
   */
  getContext(notePath) {
    if (!this.contexts.has(notePath)) {
      this.contexts.set(notePath, this.createNewContext());
    }
    return this.contexts.get(notePath);
  }
  /**
   * Create a new empty context
   */
  createNewContext() {
    return {
      history: [],
      sessionId: null,
      currentResponse: null,
      currentRequest: null,
      outputLines: [],
      agentSteps: [],
      runner: new ClaudeCodeRunner(this.settings),
      isRunning: false
    };
  }
  /**
   * Load all note contexts from disk
   */
  loadContexts(vaultPath) {
    var _a, _b, _c, _d;
    const contextsDir = path5.join(vaultPath, this.dataDir);
    if (!fs4.existsSync(contextsDir)) {
      return;
    }
    const noteDirs = fs4.readdirSync(contextsDir);
    for (const noteHash of noteDirs) {
      const contextFile = path5.join(contextsDir, noteHash, "context.json");
      if (fs4.existsSync(contextFile)) {
        try {
          const data = JSON.parse(fs4.readFileSync(contextFile, "utf8"));
          const context = {
            history: (_a = data.history) != null ? _a : [],
            sessionId: (_b = data.sessionId) != null ? _b : null,
            currentResponse: null,
            currentRequest: null,
            outputLines: (_c = data.outputLines) != null ? _c : [],
            agentSteps: (_d = data.agentSteps) != null ? _d : [],
            runner: new ClaudeCodeRunner(this.settings),
            isRunning: false,
            pendingPreviewContent: data.pendingPreviewContent,
            originalPreviewContent: data.originalPreviewContent
          };
          if (data.notePath) {
            this.contexts.set(data.notePath, context);
          }
        } catch (e) {
        }
      }
    }
  }
  /**
   * Save a note's context to disk
   */
  saveContext(notePath, vaultPath) {
    const context = this.contexts.get(notePath);
    if (!context)
      return;
    const noteHash = crypto2.createHash("md5").update(notePath).digest("hex");
    const contextDir = path5.join(vaultPath, this.dataDir, noteHash);
    if (!fs4.existsSync(contextDir)) {
      fs4.mkdirSync(contextDir, { recursive: true });
    }
    const contextFile = path5.join(contextDir, "context.json");
    const dataToSave = {
      notePath,
      sessionId: context.sessionId,
      history: context.history,
      outputLines: context.outputLines,
      agentSteps: context.agentSteps,
      pendingPreviewContent: context.pendingPreviewContent,
      originalPreviewContent: context.originalPreviewContent,
      savedAt: new Date().toISOString()
    };
    fs4.writeFileSync(contextFile, JSON.stringify(dataToSave, null, 2));
  }
  /**
   * Save all contexts
   */
  saveAllContexts(vaultPath) {
    for (const notePath of this.contexts.keys()) {
      this.saveContext(notePath, vaultPath);
    }
  }
  /**
   * Clear history for a note
   */
  clearHistory(notePath) {
    const context = this.contexts.get(notePath);
    if (context) {
      context.history = [];
      context.outputLines = [];
      context.agentSteps = [];
    }
  }
  /**
   * Get all contexts
   */
  getAllContexts() {
    return this.contexts;
  }
  /**
   * Check if a note has a context
   */
  hasContext(notePath) {
    return this.contexts.has(notePath);
  }
  /**
   * Get count of running processes
   */
  getRunningCount() {
    let count = 0;
    for (const context of this.contexts.values()) {
      if (context.isRunning) {
        count++;
      }
    }
    return count;
  }
  /**
   * Get list of note paths that are currently running
   */
  getRunningNotePaths() {
    const running = [];
    for (const [notePath, context] of this.contexts.entries()) {
      if (context.isRunning) {
        running.push(notePath);
      }
    }
    return running;
  }
};

// src/ui/parsers/output-status-manager.ts
var OutputStatusManager = class {
  /**
   * Parse an output line and extract status information
   *
   * @param line The output line to parse
   * @returns Status message to display, or null if no status should be shown
   */
  static extractStatus(line) {
    if (line.includes("\u{1F527} Using tool:")) {
      const toolMatch = line.match(/🔧 Using tool: (\w+)/);
      if (toolMatch) {
        return `\u{1F527} Using ${toolMatch[1]} tool...`;
      }
    } else if (line.includes("$ ")) {
      const cmdMatch = line.match(/\$ (.+)/);
      if (cmdMatch) {
        const cmd = cmdMatch[1].substring(0, 50);
        return `\u26A1 Running: ${cmd}${cmdMatch[1].length > 50 ? "..." : ""}`;
      }
    } else if (line.includes("\u{1F50D} Query:") || line.includes("Query:")) {
      const queryMatch = line.match(/Query: "(.+?)"/);
      if (queryMatch) {
        const query = queryMatch[1].substring(0, 40);
        return `\u{1F50D} Searching: ${query}${queryMatch[1].length > 40 ? "..." : ""}`;
      }
    } else if (line.includes("\u{1F310} URL:") || line.includes("URL:")) {
      const urlMatch = line.match(/URL: (.+)/);
      if (urlMatch) {
        const url = urlMatch[1].substring(0, 40);
        return `\u{1F310} Fetching: ${url}${urlMatch[1].length > 40 ? "..." : ""}`;
      }
    } else if (line.includes("\u{1F4D6} Reading file:") || line.includes("\u{1F4D6} File:")) {
      const fileMatch = line.match(/(?:Reading file:|File:)\s+(.+)/);
      if (fileMatch) {
        const file = fileMatch[1].split("/").pop() || fileMatch[1];
        return `\u{1F4D6} Reading: ${file.substring(0, 40)}...`;
      }
    } else if (line.includes("\u270D\uFE0F  Writing file:") || line.includes("\u270D\uFE0F  File:")) {
      const fileMatch = line.match(/(?:Writing file:|File:)\s+(.+)/);
      if (fileMatch) {
        const file = fileMatch[1].split("/").pop() || fileMatch[1];
        return `\u270D\uFE0F Writing: ${file.substring(0, 40)}...`;
      }
    } else if (line.includes("\u270F\uFE0F  Editing file:") || line.includes("\u270F\uFE0F  File:")) {
      const fileMatch = line.match(/(?:Editing file:|File:)\s+(.+)/);
      if (fileMatch) {
        const file = fileMatch[1].split("/").pop() || fileMatch[1];
        return `\u270F\uFE0F Editing: ${file.substring(0, 40)}...`;
      }
    } else if (line.includes("\u{1F50D} Pattern:") || line.includes("Pattern:")) {
      const patternMatch = line.match(/Pattern: (.+)/);
      if (patternMatch) {
        const pattern = patternMatch[1].substring(0, 40);
        return `\u{1F50E} Searching pattern: ${pattern}${patternMatch[1].length > 40 ? "..." : ""}`;
      }
    } else if (line.includes("\u{1F916} Launching agent:") || line.includes("Agent:")) {
      const agentMatch = line.match(/(?:Agent:|Type:)\s+(.+)/);
      if (agentMatch) {
        return `\u{1F916} Launching ${agentMatch[1]} agent...`;
      }
    } else if (line.includes("\u{1F4AC}") && !line.includes("[raw]")) {
      return "\u{1F4AC} Claude is responding...";
    } else if (line.includes("\u2713") && line.includes("complete")) {
      return "\u2705 Processing results...";
    }
    return null;
  }
};

// src/ui/renderers/diff-generator.ts
var DiffGenerator = class {
  /**
   * Generate side-by-side diff view as a DOM element between original and modified content
   *
   * @param original Original content
   * @param modified Modified content
   * @returns HTMLElement representing the side-by-side diff
   */
  static generateDiffElement(original, modified) {
    const originalLines = original.split("\n");
    const modifiedLines = modified.split("\n");
    const diff = this.computeDiff(originalLines, modifiedLines);
    const container = document.createElement("div");
    container.className = "claude-code-diff-side-by-side";
    const header = document.createElement("div");
    header.className = "diff-header";
    const leftHeader = document.createElement("div");
    leftHeader.className = "diff-column diff-column-left";
    const leftTitle = document.createElement("span");
    leftTitle.className = "diff-header-title";
    leftTitle.textContent = t("diff.original");
    leftHeader.appendChild(leftTitle);
    const rightHeader = document.createElement("div");
    rightHeader.className = "diff-column diff-column-right";
    const rightTitle = document.createElement("span");
    rightTitle.className = "diff-header-title";
    rightTitle.textContent = t("diff.modified");
    rightHeader.appendChild(rightTitle);
    header.appendChild(leftHeader);
    header.appendChild(rightHeader);
    container.appendChild(header);
    const content = document.createElement("div");
    content.className = "diff-content";
    for (const change of diff) {
      const row = document.createElement("div");
      row.className = `diff-row diff-${change.type}`;
      if (change.type === "equal") {
        row.appendChild(this.createDiffColumn("left", change.oldLineNum, change.oldContent));
        row.appendChild(this.createDiffColumn("right", change.newLineNum, change.newContent));
      } else if (change.type === "delete") {
        row.appendChild(this.createDiffColumn("left", change.oldLineNum, change.oldContent));
        row.appendChild(this.createDiffColumn("right", void 0, void 0, true));
      } else if (change.type === "insert") {
        row.appendChild(this.createDiffColumn("left", void 0, void 0, true));
        row.appendChild(this.createDiffColumn("right", change.newLineNum, change.newContent));
      } else if (change.type === "modify") {
        row.appendChild(this.createDiffColumn("left", change.oldLineNum, change.oldContent));
        row.appendChild(this.createDiffColumn("right", change.newLineNum, change.newContent));
      }
      content.appendChild(row);
    }
    container.appendChild(content);
    return container;
  }
  /**
   * Create a diff column element
   */
  static createDiffColumn(side, lineNum, content, isEmpty = false) {
    const column = document.createElement("div");
    column.className = `diff-column diff-column-${side}${isEmpty ? " diff-empty" : ""}`;
    const lineNumSpan = document.createElement("span");
    lineNumSpan.className = "diff-line-number";
    lineNumSpan.textContent = lineNum !== void 0 ? String(lineNum) : "";
    const contentSpan = document.createElement("span");
    contentSpan.className = "diff-line-content";
    contentSpan.textContent = content || "";
    column.appendChild(lineNumSpan);
    column.appendChild(contentSpan);
    return column;
  }
  /**
   * Compute diff between two arrays of lines using a simple algorithm
   *
   * @param oldLines Original lines
   * @param newLines Modified lines
   * @returns Array of diff changes
   */
  static computeDiff(oldLines, newLines) {
    const result = [];
    let oldIndex = 0;
    let newIndex = 0;
    let oldLineNum = 1;
    let newLineNum = 1;
    while (oldIndex < oldLines.length || newIndex < newLines.length) {
      if (oldIndex >= oldLines.length) {
        result.push({
          type: "insert",
          newContent: newLines[newIndex],
          newLineNum
        });
        newIndex++;
        newLineNum++;
      } else if (newIndex >= newLines.length) {
        result.push({
          type: "delete",
          oldContent: oldLines[oldIndex],
          oldLineNum
        });
        oldIndex++;
        oldLineNum++;
      } else if (oldLines[oldIndex] === newLines[newIndex]) {
        result.push({
          type: "equal",
          oldContent: oldLines[oldIndex],
          newContent: newLines[newIndex],
          oldLineNum,
          newLineNum
        });
        oldIndex++;
        newIndex++;
        oldLineNum++;
        newLineNum++;
      } else {
        result.push({
          type: "modify",
          oldContent: oldLines[oldIndex],
          newContent: newLines[newIndex],
          oldLineNum,
          newLineNum
        });
        oldIndex++;
        newIndex++;
        oldLineNum++;
        newLineNum++;
      }
    }
    return result;
  }
};

// src/ui/tool-call-tracker.ts
var ToolCallTracker = class {
  constructor() {
    this.calls = /* @__PURE__ */ new Map();
    this.callbacks = /* @__PURE__ */ new Set();
  }
  /**
   * Start tracking a tool call
   */
  startCall(id, toolName, args) {
    const call = {
      id,
      toolName,
      arguments,
      status: "pending",
      startTime: Date.now()
    };
    this.calls.set(id, call);
    this.notifyCallbacks(call);
    return call;
  }
  /**
   * Update tool call status
   */
  updateStatus(id, status, result, error) {
    const call = this.calls.get(id);
    if (!call) {
      console.warn(`Tool call ${id} not found`);
      return;
    }
    call.status = status;
    if (status === "completed" || status === "failed") {
      call.endTime = Date.now();
    }
    if (result !== void 0) {
      call.result = result;
    }
    if (error !== void 0) {
      call.error = error;
    }
    this.notifyCallbacks(call);
  }
  /**
   * Get a tool call by ID
   */
  getCall(id) {
    return this.calls.get(id);
  }
  /**
   * Get all tool calls
   */
  getAllCalls() {
    return Array.from(this.calls.values());
  }
  /**
   * Get active (non-completed) tool calls
   */
  getActiveCalls() {
    return this.getAllCalls().filter(
      (call) => call.status !== "completed" && call.status !== "failed"
    );
  }
  /**
   * Clear completed calls
   */
  clearCompleted() {
    const activeCalls = this.getActiveCalls();
    this.calls.clear();
    for (const call of activeCalls) {
      this.calls.set(call.id, call);
    }
  }
  /**
   * Clear all calls
   */
  clearAll() {
    this.calls.clear();
  }
  /**
   * Subscribe to tool call updates
   */
  onToolCallUpdate(callback) {
    this.callbacks.add(callback);
    return () => this.callbacks.delete(callback);
  }
  /**
   * Notify all callbacks of a tool call update
   */
  notifyCallbacks(call) {
    this.callbacks.forEach((callback) => {
      try {
        callback(call);
      } catch (error) {
        console.error("Error in tool call callback:", error);
      }
    });
  }
  /**
   * Get duration of a tool call in milliseconds
   */
  getDuration(id) {
    const call = this.calls.get(id);
    if (!call) {
      return void 0;
    }
    const endTime = call.endTime || Date.now();
    return endTime - call.startTime;
  }
  /**
   * Get statistics
   */
  getStats() {
    const calls = this.getAllCalls();
    return {
      total: calls.length,
      pending: calls.filter((c) => c.status === "pending").length,
      running: calls.filter((c) => c.status === "running").length,
      completed: calls.filter((c) => c.status === "completed").length,
      failed: calls.filter((c) => c.status === "failed").length
    };
  }
};

// src/ui/components/tool-call-display.ts
var ToolCallDisplay = class {
  constructor(container, tracker) {
    this.toolCallElements = /* @__PURE__ */ new Map();
    this.container = container;
    this.tracker = tracker;
    this.unsubscribe = this.tracker.onToolCallUpdate((call) => {
      this.updateToolCallDisplay(call);
    });
    this.render();
  }
  /**
   * Destroy the component
   */
  destroy() {
    this.unsubscribe();
    this.toolCallElements.clear();
    this.container.empty();
  }
  /**
   * Render initial UI
   */
  render() {
    this.container.empty();
    const header = this.container.createEl("div", {
      cls: "claude-code-tool-call-header"
    });
    header.createEl("h3", {
      text: "Tool Calls",
      cls: "claude-code-tool-call-title"
    });
    const stats = this.container.createEl("div", {
      cls: "claude-code-tool-call-stats"
    });
    this.updateStats(stats);
    const callsContainer = this.container.createEl("div", {
      cls: "claude-code-tool-calls-container"
    });
    const calls = this.tracker.getAllCalls();
    for (const call of calls) {
      this.renderToolCall(call, callsContainer);
    }
    setInterval(() => {
      this.updateStats(stats);
    }, 1e3);
  }
  /**
   * Update statistics display
   */
  updateStats(statsEl) {
    const stats = this.tracker.getStats();
    statsEl.empty();
    statsEl.createEl("span", {
      text: `Total: ${stats.total}`,
      cls: "claude-code-stat-total"
    });
    if (stats.pending > 0) {
      statsEl.createEl("span", {
        text: `Pending: ${stats.pending}`,
        cls: "claude-code-stat-pending"
      });
    }
    if (stats.running > 0) {
      statsEl.createEl("span", {
        text: `Running: ${stats.running}`,
        cls: "claude-code-stat-running"
      });
    }
    if (stats.completed > 0) {
      statsEl.createEl("span", {
        text: `Completed: ${stats.completed}`,
        cls: "claude-code-stat-completed"
      });
    }
    if (stats.failed > 0) {
      statsEl.createEl("span", {
        text: `Failed: ${stats.failed}`,
        cls: "claude-code-stat-failed"
      });
    }
  }
  /**
   * Render a single tool call
   */
  renderToolCall(call, container) {
    const callEl = container.createEl("div", {
      cls: `claude-code-tool-call claude-code-tool-call-${call.status}`
    });
    const header = callEl.createEl("div", {
      cls: "claude-code-tool-call-header-section"
    });
    const statusIcon = header.createEl("span", {
      cls: `claude-code-tool-call-status-icon claude-code-status-${call.status}`
    });
    header.createEl("span", {
      text: call.toolName,
      cls: "claude-code-tool-call-name"
    });
    if (call.status !== "pending") {
      const duration = this.tracker.getDuration(call.id);
      if (duration !== void 0) {
        header.createEl("span", {
          text: this.formatDuration(duration),
          cls: "claude-code-tool-call-duration"
        });
      }
    }
    const details = callEl.createEl("div", {
      cls: "claude-code-tool-call-details"
    });
    if (call.arguments && Object.keys(call.arguments).length > 0) {
      const argsSection = details.createEl("div", {
        cls: "claude-code-tool-call-arguments"
      });
      argsSection.createEl("h4", { text: "Arguments" });
      argsSection.createEl("pre", {
        text: JSON.stringify(call.arguments, null, 2)
      });
    }
    if (call.status === "completed" && call.result !== void 0) {
      const resultSection = details.createEl("div", {
        cls: "claude-code-tool-call-result"
      });
      resultSection.createEl("h4", { text: "Result" });
      resultSection.createEl("pre", {
        text: JSON.stringify(call.result, null, 2)
      });
    }
    if (call.status === "failed" && call.error) {
      const errorSection = details.createEl("div", {
        cls: "claude-code-tool-call-error"
      });
      errorSection.createEl("h4", { text: "Error" });
      errorSection.createEl("pre", { text: call.error });
    }
    header.addClass("clickable");
    header.addEventListener("click", (_event) => {
      details.toggleClass("collapsed");
    });
    this.toolCallElements.set(call.id, callEl);
  }
  /**
   * Update tool call display when state changes
   */
  updateToolCallDisplay(call) {
    const existingEl = this.toolCallElements.get(call.id);
    if (!existingEl) {
      const container = this.container.querySelector(".claude-code-tool-calls-container");
      if (container) {
        this.renderToolCall(call, container);
      }
      return;
    }
    existingEl.className = `claude-code-tool-call claude-code-tool-call-${call.status}`;
    const statusIcon = existingEl.querySelector(".claude-code-tool-call-status-icon");
    if (statusIcon) {
      statusIcon.className = `claude-code-tool-call-status-icon claude-code-status-${call.status}`;
    }
    const durationEl = existingEl.querySelector(".claude-code-tool-call-duration");
    if (durationEl && call.status !== "pending") {
      const duration = this.tracker.getDuration(call.id);
      if (duration !== void 0) {
        durationEl.textContent = this.formatDuration(duration);
      }
    }
    const details = existingEl.querySelector(".claude-code-tool-call-details");
    if (details) {
      const oldResult = details.querySelector(".claude-code-tool-call-result");
      const oldError = details.querySelector(".claude-code-tool-call-error");
      if (oldResult)
        oldResult.remove();
      if (oldError)
        oldError.remove();
      if (call.status === "completed" && call.result !== void 0) {
        const resultSection = details.createEl("div", {
          cls: "claude-code-tool-call-result"
        });
        resultSection.createEl("h4", { text: "Result" });
        resultSection.createEl("pre", {
          text: JSON.stringify(call.result, null, 2)
        });
      }
      if (call.status === "failed" && call.error) {
        const errorSection = details.createEl("div", {
          cls: "claude-code-tool-call-error"
        });
        errorSection.createEl("h4", { text: "Error" });
        errorSection.createEl("pre", { text: call.error });
      }
    }
  }
  /**
   * Format duration in human-readable format
   */
  formatDuration(ms) {
    if (ms < 1e3) {
      return `${ms}ms`;
    } else if (ms < 6e4) {
      return `${(ms / 1e3).toFixed(1)}s`;
    } else {
      const minutes = Math.floor(ms / 6e4);
      const seconds = Math.floor(ms % 6e4 / 1e3);
      return `${minutes}m ${seconds}s`;
    }
  }
  /**
   * Clear completed calls from display
   */
  clearCompleted() {
    const container = this.container.querySelector(".claude-code-tool-calls-container");
    if (!container)
      return;
    const completedCalls = this.tracker.getAllCalls().filter(
      (call) => call.status === "completed" || call.status === "failed"
    );
    for (const call of completedCalls) {
      const el = this.toolCallElements.get(call.id);
      if (el) {
        el.remove();
        this.toolCallElements.delete(call.id);
      }
    }
    this.tracker.clearCompleted();
  }
  /**
   * Clear all calls from display
   */
  clearAll() {
    this.toolCallElements.clear();
    this.tracker.clearAll();
    this.render();
  }
};

// src/ui/streaming-renderer.ts
var import_obsidian2 = require("obsidian");
var StreamingRenderer = class {
  constructor(view, container) {
    this.currentStreamElement = null;
    this.accumulatedContent = "";
    this.isStreaming = false;
    this.view = view;
    this.container = container;
  }
  /**
   * Start a new stream
   */
  startStream() {
    this.isStreaming = true;
    this.accumulatedContent = "";
    this.currentStreamElement = this.container.createEl("div", {
      cls: "claude-code-streaming-response"
    });
    const header = this.currentStreamElement.createEl("div", {
      cls: "claude-code-stream-header"
    });
    header.createEl("span", {
      text: "AI Response",
      cls: "claude-code-stream-title"
    });
    const statusIndicator = header.createEl("span", {
      text: "Streaming...",
      cls: "claude-code-stream-status streaming"
    });
    const contentArea = this.currentStreamElement.createEl("div", {
      cls: "claude-code-stream-content"
    });
    this.currentStreamElement._statusIndicator = statusIndicator;
    this.currentStreamElement._contentArea = contentArea;
    this.scrollToBottom();
  }
  /**
   * Append a chunk of content to the stream
   */
  appendChunk(chunk) {
    return __async(this, null, function* () {
      if (!this.currentStreamElement || !this.isStreaming) {
        console.warn("No active stream to append to");
        return;
      }
      if (chunk.content) {
        this.accumulatedContent += chunk.content;
        const contentArea = this.currentStreamElement._contentArea;
        if (contentArea) {
          contentArea.empty();
          const markdownContainer = contentArea.createEl("div");
          yield import_obsidian2.MarkdownRenderer.renderMarkdown(
            this.accumulatedContent,
            markdownContainer,
            "",
            this.view
          );
        }
        this.scrollToBottom();
      }
      if (chunk.isComplete) {
        this.completeStream(chunk.metadata);
      }
    });
  }
  /**
   * Complete the current stream
   */
  completeStream(metadata) {
    if (!this.currentStreamElement) {
      return;
    }
    this.isStreaming = false;
    const statusIndicator = this.currentStreamElement._statusIndicator;
    if (statusIndicator) {
      statusIndicator.textContent = "Complete";
      statusIndicator.removeClass("streaming");
      statusIndicator.addClass("complete");
    }
    if (metadata) {
      this.addMetadata(metadata);
    }
    this.currentStreamElement.removeClass("claude-code-streaming-response");
    this.currentStreamElement.addClass("claude-code-response");
    this.currentStreamElement = null;
    this.accumulatedContent = "";
  }
  /**
   * Add metadata display (token usage, model, etc.)
   */
  addMetadata(metadata) {
    if (!this.currentStreamElement || !metadata) {
      return;
    }
    const metadataEl = this.currentStreamElement.createEl("div", {
      cls: "claude-code-stream-metadata"
    });
    if (metadata.model) {
      metadataEl.createEl("span", {
        text: `Model: ${metadata.model}`,
        cls: "claude-code-metadata-item"
      });
    }
    if (metadata.usage) {
      const tokensText = `Tokens: ${metadata.usage.promptTokens} + ${metadata.usage.completionTokens} = ${metadata.usage.totalTokens}`;
      metadataEl.createEl("span", {
        text: tokensText,
        cls: "claude-code-metadata-item"
      });
    }
    if (metadata.finishReason) {
      metadataEl.createEl("span", {
        text: `Finished: ${metadata.finishReason}`,
        cls: "claude-code-metadata-item"
      });
    }
  }
  /**
   * Cancel the current stream
   */
  cancelStream() {
    if (!this.currentStreamElement) {
      return;
    }
    this.isStreaming = false;
    const statusIndicator = this.currentStreamElement._statusIndicator;
    if (statusIndicator) {
      statusIndicator.textContent = "Cancelled";
      statusIndicator.removeClass("streaming");
      statusIndicator.addClass("cancelled");
    }
    this.currentStreamElement = null;
    this.accumulatedContent = "";
  }
  /**
   * Check if currently streaming
   */
  isActive() {
    return this.isStreaming && this.currentStreamElement !== null;
  }
  /**
   * Get the current stream element
   */
  getCurrentElement() {
    return this.currentStreamElement;
  }
  /**
   * Scroll the container to the bottom
   */
  scrollToBottom() {
    if (this.container) {
      this.container.scrollTop = this.container.scrollHeight;
    }
  }
  /**
   * Handle incoming stream message
   */
  handleStreamMessage(message) {
    return __async(this, null, function* () {
      if (!this.isActive()) {
        this.startStream();
      }
      yield this.appendChunk(message.chunk);
    });
  }
  /**
   * Clear all streams
   */
  clear() {
    this.isStreaming = false;
    this.currentStreamElement = null;
    this.accumulatedContent = "";
    this.container.empty();
  }
};

// src/ui/view.ts
var ClaudeCodeView = class extends import_obsidian3.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.currentResultStreamingElement = null;
    this.hitFinalContentMarker = false;
    this.userHasScrolled = false;
    this.lastRenderedText = "";
    this.toolCallDisplay = null;
    this.streamingRenderer = null;
    // State
    this.currentNotePath = "";
    // Tool timing tracking
    this.toolStartTimes = /* @__PURE__ */ new Map();
    this.lastToolKey = null;
    // Execution timing tracking (interval is view-level, but start time is per-note in context)
    this.elapsedTimeInterval = null;
    // Event listener cleanup tracking
    this.eventListeners = [];
    this.promptInputKeydownHandler = null;
    this.plugin = plugin;
    this.contextManager = new NoteContextManager(
      this.plugin.settings,
      `${this.app.vault.configDir}/claude-code-sessions`
    );
    this.agentTracker = new AgentActivityTracker();
    this.toolCallTracker = new ToolCallTracker();
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", () => {
        this.onActiveNoteChange();
      })
    );
  }
  getViewType() {
    return VIEW_TYPE_CLAUDE_CODE;
  }
  getDisplayText() {
    return "Claude Code";
  }
  getIcon() {
    return "bot";
  }
  /**
   * Get the tool call tracker instance
   */
  getToolCallTracker() {
    return this.toolCallTracker;
  }
  /**
   * Get the streaming renderer instance
   */
  getStreamingRenderer() {
    return this.streamingRenderer;
  }
  onOpen() {
    return __async(this, null, function* () {
      const container = this.containerEl.children[1];
      container.empty();
      container.addClass("claude-code-view");
      const vaultPath = this.app.vault.adapter.getBasePath();
      if (vaultPath) {
        this.contextManager.loadContexts(vaultPath);
      }
      const activeFile = this.app.workspace.getActiveFile();
      if (activeFile) {
        this.currentNotePath = activeFile.path;
      }
      this.buildUI(container);
      this.outputRenderer = new OutputRenderer(this.outputArea, this, this.app, this.currentNotePath, this.outputSection);
      this.streamingRenderer = new StreamingRenderer(this, this.outputArea);
      if (this.currentNotePath) {
        this.loadNoteContext(this.currentNotePath);
      }
    });
  }
  /**
   * Build the entire UI using modular components
   */
  buildUI(container) {
    this.currentNoteLabel = UIBuilder.buildHeader(container);
    this.updateCurrentNoteLabel();
    const inputElements = UIBuilder.buildInputSection(
      container,
      this.plugin.settings.autoAcceptChanges,
      () => void this.handleRunClaudeCode(),
      () => this.handleCancel()
    );
    this.promptInput = inputElements.promptInput;
    this.selectedTextOnlyCheckbox = inputElements.selectedTextOnlyCheckbox;
    this.autoAcceptCheckbox = inputElements.autoAcceptCheckbox;
    this.conversationalModeCheckbox = inputElements.conversationalModeCheckbox;
    this.modelSelect = inputElements.modelSelect;
    this.runButton = inputElements.runButton;
    this.cancelButton = inputElements.cancelButton;
    this.conversationalModeCheckbox.addEventListener("change", () => {
      const isConversational = this.conversationalModeCheckbox.checked;
      this.selectedTextOnlyCheckbox.disabled = isConversational;
      this.autoAcceptCheckbox.disabled = isConversational;
      if (isConversational) {
        this.selectedTextOnlyCheckbox.checked = false;
        this.autoAcceptCheckbox.checked = false;
      }
    });
    this.modelSelect.addEventListener("change", () => {
      const context = this.getCurrentContext();
      context.selectedModel = this.modelSelect.value;
    });
    this.promptInputKeydownHandler = (e) => {
      var _a, _b;
      if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        void this.handleRunClaudeCode();
      } else if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        const start = (_a = this.promptInput.selectionStart) != null ? _a : 0;
        const end = (_b = this.promptInput.selectionEnd) != null ? _b : 0;
        const value = this.promptInput.value;
        this.promptInput.value = value.substring(0, start) + "\n" + value.substring(end);
        this.promptInput.selectionStart = this.promptInput.selectionEnd = start + 1;
      }
    };
    this.promptInput.addEventListener("keydown", this.promptInputKeydownHandler);
    UIBuilder.buildInteractivePromptSection(
      container,
      (response) => this.respondToPrompt(response)
    );
    const resultElements = UIBuilder.buildResultSection(container);
    this.resultArea = resultElements.resultArea;
    this.statusIndicator = resultElements.statusArea;
    this.statusText = resultElements.statusText;
    this.lastPromptArea = resultElements.lastPromptArea;
    this.setupSmartAutoScroll();
    const permissionElements = UIBuilder.buildPermissionApprovalSection(
      container,
      () => void this.handleApprovePermission(),
      () => this.handleDenyPermission()
    );
    this.permissionApprovalSection = permissionElements.permissionApprovalSection;
    const previewElements = UIBuilder.buildPreviewSection(
      container,
      () => this.handleApplyChanges(),
      () => this.handleRejectChanges()
    );
    this.previewArea = previewElements.previewArea;
    this.previewContentContainer = previewElements.previewContentContainer;
    UIBuilder.buildAgentSection(container);
    const activityColumn = container.querySelector(".claude-code-activity-column");
    if (activityColumn) {
      this.agentTracker.initialize(activityColumn);
    }
    const toolCallSection = container.createEl("div", {
      cls: "claude-code-tool-call-section"
    });
    this.toolCallDisplay = new ToolCallDisplay(toolCallSection, this.toolCallTracker);
    const outputSectionResult = UIBuilder.buildOutputSection(container);
    this.outputArea = outputSectionResult.outputArea;
    this.outputSection = outputSectionResult.outputSection;
    this.historyList = UIBuilder.buildHistorySection(
      container,
      () => this.clearHistory()
    );
  }
  /**
   * Update the current note label
   */
  updateCurrentNoteLabel() {
    if (this.currentNotePath) {
      const fileName = this.currentNotePath.split("/").pop() || "Unknown";
      const context = this.contextManager.getContext(this.currentNotePath);
      const runningIndicator = context.isRunning ? " \u{1F504}" : "";
      this.currentNoteLabel.textContent = `\u{1F4DD} ${fileName}${runningIndicator}`;
    } else {
      this.currentNoteLabel.textContent = "\u{1F4DD} " + t("header.noNoteSelected");
    }
    this.updateRunningIndicator();
  }
  /**
   * Update the indicator showing how many other notes have running processes
   */
  updateRunningIndicator() {
    var _a, _b;
    const runningPaths = this.contextManager.getRunningNotePaths();
    const otherRunning = runningPaths.filter((p) => p !== this.currentNotePath);
    let indicator = (_a = this.currentNoteLabel.parentElement) == null ? void 0 : _a.querySelector(".claude-code-running-indicator");
    if (otherRunning.length > 0) {
      if (!indicator) {
        indicator = document.createElement("span");
        indicator.addClass("claude-code-running-indicator");
        (_b = this.currentNoteLabel.parentElement) == null ? void 0 : _b.appendChild(indicator);
      }
      const noteNames = otherRunning.map((p) => p.split("/").pop() || "Unknown").join(", ");
      indicator.textContent = ` (${otherRunning.length} other running)`;
      indicator.setAttribute("title", `Running: ${noteNames}`);
      indicator.removeClass("claude-code-hidden");
    } else if (indicator) {
      indicator.addClass("claude-code-hidden");
    }
  }
  /**
   * Handle active note change
   */
  onActiveNoteChange() {
    const activeFile = this.app.workspace.getActiveFile();
    if (activeFile && activeFile.path !== this.currentNotePath) {
      this.currentNotePath = activeFile.path;
      this.updateCurrentNoteLabel();
      this.loadNoteContext(this.currentNotePath);
    }
  }
  /**
   * Load context for a specific note
   */
  loadNoteContext(notePath) {
    var _a, _b, _c, _d;
    const context = this.contextManager.getContext(notePath);
    (_a = this.outputRenderer) == null ? void 0 : _a.setNotePath(notePath);
    (_b = this.outputRenderer) == null ? void 0 : _b.clear();
    for (const line of context.outputLines) {
      (_c = this.outputRenderer) == null ? void 0 : _c.appendLine(line);
    }
    this.agentTracker.restore(context.agentSteps);
    console.debug("[Load Note Context] Output lines count:", context.outputLines.length);
    console.debug("[Load Note Context] Agent steps count:", context.agentSteps.length);
    console.debug("[Load Note Context] isRunning:", context.isRunning);
    if (context.outputLines.length > 0) {
      this.parseTodosFromOutput();
    } else {
      console.debug("[Load Note Context] Clearing todo list - no output");
      this.clearTodoList();
    }
    this.updateHistoryDisplay(context.history);
    if (context.selectedModel !== void 0) {
      this.modelSelect.value = context.selectedModel;
    } else {
      this.modelSelect.value = this.plugin.settings.modelAlias;
    }
    if (context.lastPrompt) {
      this.showLastPrompt(context.lastPrompt);
    } else {
      this.hideLastPrompt();
    }
    if (context.isRunning) {
      this.runButton.disabled = true;
      this.runButton.textContent = t("input.runningButton");
      this.cancelButton.removeClass("claude-code-hidden");
      this.cancelButton.addClass("claude-code-inline-visible");
      this.resumeElapsedTimeTracking();
      if (context.currentResultText) {
        this.restoreStreamingResult(context.currentResultText);
      }
    } else {
      this.stopElapsedTimeTracking();
      this.runButton.disabled = false;
      this.runButton.textContent = t("input.runButton");
      this.cancelButton.addClass("claude-code-hidden");
      this.cancelButton.removeClass("claude-code-inline-visible");
      this.hideStatus();
      if (!context.currentResponse || !context.currentResponse.assistantMessage) {
        this.hideResult();
      } else {
        this.showResult(context.currentResponse.assistantMessage);
      }
    }
    if (context.pendingPreviewContent) {
      this.restorePreview(context.pendingPreviewContent, context.originalPreviewContent || "");
    } else {
      this.hidePreviewUI();
    }
    if (((_d = context.currentResponse) == null ? void 0 : _d.isPermissionRequest) && !context.isRunning) {
      this.showPermissionApprovalSection();
    } else {
      this.hidePermissionApprovalSection();
    }
  }
  /**
   * Get current note's context
   */
  getCurrentContext() {
    return this.contextManager.getContext(this.currentNotePath);
  }
  /**
   * Handle Run Claude Code button click
   */
  handleRunClaudeCode() {
    return __async(this, null, function* () {
      const context = this.getCurrentContext();
      if (context.isRunning) {
        new import_obsidian3.Notice(t("notice.alreadyProcessing"));
        return;
      }
      const prompt = this.promptInput.value.trim();
      if (!prompt) {
        new import_obsidian3.Notice(t("notice.enterPrompt"));
        return;
      }
      this.resetScrollState();
      try {
        this.promptInput.value = "";
        const file = this.app.workspace.getActiveFile();
        if (!file) {
          new import_obsidian3.Notice(t("notice.noActiveNote"));
          return;
        }
        const leaves = this.app.workspace.getLeavesOfType("markdown");
        let activeView = null;
        for (const leaf of leaves) {
          const view = leaf.view;
          if (view.file && view.file.path === file.path) {
            activeView = view;
            break;
          }
        }
        if (!activeView && leaves.length > 0) {
          activeView = leaves[0].view;
        }
        if (!activeView || !activeView.editor) {
          new import_obsidian3.Notice(t("notice.noEditor"));
          return;
        }
        const editor = activeView.editor;
        const selectedText = editor.getSelection();
        const useSelectedTextOnly = this.selectedTextOnlyCheckbox.checked && selectedText;
        const noteContent = editor.getValue();
        const vaultPath = this.app.vault.adapter.getBasePath();
        if (!vaultPath) {
          new import_obsidian3.Notice(t("notice.noVaultPath"));
          return;
        }
        context.currentRequest = {
          noteContent,
          userPrompt: prompt,
          notePath: file.path,
          selectedText: useSelectedTextOnly ? selectedText : void 0,
          vaultPath,
          configDir: this.app.vault.configDir,
          runtimeModelOverride: this.modelSelect.value || void 0,
          conversationalMode: this.conversationalModeCheckbox.checked
        };
        this.runButton.disabled = true;
        this.runButton.textContent = t("input.runningButton");
        this.cancelButton.removeClass("claude-code-hidden");
        this.cancelButton.addClass("claude-code-inline-visible");
        context.outputLines = [];
        this.outputRenderer.clear();
        this.agentTracker.clear();
        this.clearTodoList();
        this.hidePreview();
        this.hideResult();
        this.resultArea.empty();
        this.currentResultStreamingElement = null;
        this.hitFinalContentMarker = false;
        context.currentResultText = void 0;
        this.showLastPrompt(prompt);
        this.showStatus("\u{1F914} " + t("status.processing") + "... 0.0s");
        this.startElapsedTimeTracking("\u{1F914} " + t("status.processing"));
        const runNotePath = file.path;
        context.isRunning = true;
        this.updateCurrentNoteLabel();
        const response = yield context.runner.run(
          context.currentRequest,
          (line, isMarkdown, isStreaming, isAssistantMessage) => {
            this.appendOutputToNote(runNotePath, line, isMarkdown, isStreaming, isAssistantMessage);
            if (this.currentNotePath === runNotePath) {
              this.updateStatusFromOutput(line);
            }
          }
        );
        context.isRunning = false;
        context.currentResponse = response;
        context.executionStartTime = void 0;
        context.baseStatusMessage = void 0;
        this.hideStatus();
        this.runButton.disabled = false;
        this.runButton.textContent = t("input.runButton");
        this.cancelButton.addClass("claude-code-hidden");
        this.cancelButton.removeClass("claude-code-inline-visible");
        this.updateCurrentNoteLabel();
        if (response.success) {
          context.history.push({
            prompt,
            timestamp: new Date(),
            success: true,
            notePath: file.path,
            response,
            request: context.currentRequest,
            outputLines: context.outputLines
          });
          this.updateHistoryDisplay(context.history);
          try {
            this.contextManager.saveContext(file.path, vaultPath);
          } catch (error) {
            console.error("Failed to save context:", error);
          }
          if (response.modifiedContent && response.modifiedContent.trim()) {
            if (this.autoAcceptCheckbox.checked) {
              if (this.currentNotePath === runNotePath) {
                this.showStatus("\u2705 " + t("status.autoApplying"));
              }
              this.applyChangesToEditor(response.modifiedContent, editor);
              if (this.currentNotePath === runNotePath) {
                this.hideStatus();
              }
              new import_obsidian3.Notice("\u2713 " + t("notice.changesApplied"));
            } else {
              this.showPreview(response.modifiedContent, runNotePath);
            }
          } else {
            if (response.isPermissionRequest) {
              if (this.currentNotePath === runNotePath) {
                this.showPermissionApprovalSection();
                const resultSection = document.getElementById("claude-code-result-section");
                const hasStreamedContent = resultSection && resultSection.hasClass("claude-code-visible") && this.resultArea.children.length > 0;
                if (!hasStreamedContent && response.assistantMessage && response.assistantMessage.trim()) {
                  this.showResult(response.assistantMessage);
                }
              }
              new import_obsidian3.Notice("\u26A0\uFE0F " + t("notice.permissionRequest"));
            } else {
              if (this.currentNotePath === runNotePath) {
                const resultSection = document.getElementById("claude-code-result-section");
                const hasStreamedContent = resultSection && resultSection.hasClass("claude-code-visible") && this.resultArea.children.length > 0;
                if (!hasStreamedContent && response.assistantMessage && response.assistantMessage.trim()) {
                  this.showResult(response.assistantMessage);
                  new import_obsidian3.Notice("\u2713 " + t("notice.completed"));
                } else if (hasStreamedContent) {
                  new import_obsidian3.Notice("\u2713 " + t("notice.completed"));
                } else {
                  new import_obsidian3.Notice("\u2713 " + t("notice.completedNoChanges"));
                }
              } else {
                new import_obsidian3.Notice("\u2713 " + t("notice.completed"));
              }
            }
          }
        } else {
          if (this.currentNotePath === runNotePath) {
            this.showErrorStatus("\u274C " + t("status.failed"));
          }
          new import_obsidian3.Notice(`\u2717 ${response.error || "Unknown error"}`);
          context.history.push({
            prompt,
            timestamp: new Date(),
            success: false,
            notePath: file.path,
            response,
            request: context.currentRequest
          });
          this.updateHistoryDisplay(context.history);
        }
      } catch (error) {
        context.isRunning = false;
        context.executionStartTime = void 0;
        context.baseStatusMessage = void 0;
        throw error;
      }
    });
  }
  /**
   * Append output to a specific note's context
   */
  appendOutputToNote(notePath, text, isMarkdown = false, isStreaming = false, isAssistantMessage = false) {
    const context = this.contextManager.getContext(notePath);
    context.outputLines.push(text);
    if (isAssistantMessage && isStreaming === true) {
      context.currentResultText = (context.currentResultText || "") + text;
    }
    if (isStreaming !== true) {
      const agentStep = OutputRenderer.parseAgentActivity(text);
      if (agentStep) {
        context.agentSteps.push(agentStep);
      }
    }
    if (notePath === this.currentNotePath) {
      if (isStreaming === true) {
        this.outputRenderer.appendStreamingText(text);
        console.debug("[Append Output] isStreaming=true, isAssistantMessage=", isAssistantMessage);
        if (isAssistantMessage) {
          this.appendToResultUI(text);
        }
        return;
      } else if (isStreaming === "finish") {
        this.outputRenderer.finishStreamingBlock();
        if (isAssistantMessage) {
          this.finishResultStreaming();
        }
      } else if (isAssistantMessage && !isStreaming) {
        const hasStreamingContent = this.currentResultStreamingElement !== null || this.resultArea && this.resultArea.children.length > 0;
        if (!hasStreamingContent) {
          console.debug("[Append Output] Non-streaming assistant message, adding to result");
          this.showResultMarkdown(text);
        } else {
          console.debug("[Append Output] Non-streaming assistant message, but already have streaming content - skipping");
        }
      }
      this.outputRenderer.appendLine(text, isMarkdown);
      const agentStep = OutputRenderer.parseAgentActivity(text);
      if (agentStep) {
        if (this.isToolStart(text)) {
          const now = Date.now();
          this.toolStartTimes.set(agentStep.key, now);
          this.lastToolKey = agentStep.key;
          agentStep.startTime = now;
        } else if (this.isToolComplete(text)) {
          if (this.lastToolKey && this.toolStartTimes.has(this.lastToolKey)) {
            const startTime = this.toolStartTimes.get(this.lastToolKey);
            const duration = Date.now() - startTime;
            this.agentTracker.addStep(__spreadProps(__spreadValues({}, agentStep), {
              key: this.lastToolKey,
              duration
            }));
            this.toolStartTimes.delete(this.lastToolKey);
            this.lastToolKey = null;
            return;
          }
        }
        this.agentTracker.addStep(agentStep);
      }
    }
  }
  /**
   * Check if output line indicates a tool is starting
   */
  isToolStart(text) {
    return text.includes("\u{1F527} Using tool:") || text.includes("$ ") || text.includes("\u{1F50D} Glob searching:") || text.includes("\u{1F50E} Grep searching:") || text.includes("\u{1F4D6} Reading file:") || text.includes("\u270D\uFE0F  Writing file:") || text.includes("\u270F\uFE0F  Editing file:") || text.includes("\u{1F310} Fetching webpage:") || text.includes("\u{1F50D} Web searching:") || text.includes("\u{1F916} Launching agent:");
  }
  /**
   * Check if output line indicates a tool completed
   */
  isToolComplete(text) {
    return text.includes("\u2713 Found") || // Glob/Grep results
    text.includes("\u2713 Output") || // Bash output
    text.includes("complete") || // Generic completion
    text.includes("\u{1F4E5} Tool result");
  }
  /**
   * Update status based on output line
   */
  updateStatusFromOutput(line) {
    const status = OutputStatusManager.extractStatus(line);
    if (status) {
      this.showStatus(status);
    }
    if (line.includes("Using tool: TodoWrite") || line.includes("\u{1F527} Using tool: TodoWrite")) {
      setTimeout(() => this.parseTodosFromOutput(), 100);
    }
  }
  /**
   * Parse todos from the output lines
   */
  parseTodosFromOutput() {
    const context = this.getCurrentContext();
    console.debug("[Parse Todos] Total output lines:", context.outputLines.length);
    const todoWriteIndices = [];
    context.outputLines.forEach((line, index) => {
      if (line.includes("Using tool: TodoWrite")) {
        todoWriteIndices.push(index);
      }
    });
    console.debug("[Parse Todos] Found TodoWrite at indices:", todoWriteIndices);
    if (todoWriteIndices.length === 0) {
      console.debug("[Parse Todos] No TodoWrite found in output lines");
      return;
    }
    const lastTodoWriteIndex = todoWriteIndices[todoWriteIndices.length - 1];
    console.debug("[Parse Todos] Using last TodoWrite at index:", lastTodoWriteIndex);
    if (lastTodoWriteIndex + 1 < context.outputLines.length) {
      const jsonLine = context.outputLines[lastTodoWriteIndex + 1];
      console.debug("[Parse Todos] JSON line length:", jsonLine.length);
      console.debug("[Parse Todos] JSON line preview:", jsonLine.substring(0, 300));
      try {
        const jsonStr = jsonLine.trim();
        console.debug("[Parse Todos] Trimmed JSON length:", jsonStr.length);
        console.debug("[Parse Todos] First char:", jsonStr[0], "Last char:", jsonStr[jsonStr.length - 1]);
        const toolInput = JSON.parse(jsonStr);
        if (toolInput.todos && Array.isArray(toolInput.todos)) {
          console.debug("[Parse Todos] Found todos count:", toolInput.todos.length);
          console.debug("[Parse Todos] Todos:", JSON.stringify(toolInput.todos, null, 2));
          this.updateTodoList(toolInput.todos);
        } else {
          console.debug("[Parse Todos] No todos array found in parsed JSON");
          console.debug("[Parse Todos] Parsed object keys:", Object.keys(toolInput));
        }
      } catch (error) {
        console.error("[Parse Todos] Failed to parse todos JSON:", error);
        console.error("[Parse Todos] Error details:", error instanceof Error ? error.message : error);
        const jsonStr = jsonLine.trim();
        console.error("[Parse Todos] Full JSON string:", jsonStr);
      }
    }
  }
  /**
   * Show status indicator
   */
  showStatus(message) {
    const resultSection = document.getElementById("claude-code-result-section");
    if (resultSection) {
      resultSection.removeClass("claude-code-hidden");
      resultSection.addClass("claude-code-visible");
    }
    this.statusIndicator.removeClass("claude-code-hidden");
    this.statusIndicator.addClass("claude-code-flex-visible");
    this.resultArea.addClass("claude-code-hidden");
    this.resultArea.removeClass("claude-code-visible");
    this.statusText.textContent = message;
  }
  /**
   * Show error status without progress bar animation
   */
  showErrorStatus(message) {
    this.stopElapsedTimeTracking();
    const resultSection = document.getElementById("claude-code-result-section");
    if (resultSection) {
      resultSection.removeClass("claude-code-hidden");
      resultSection.addClass("claude-code-visible");
    }
    this.statusIndicator.removeClass("claude-code-hidden");
    this.statusIndicator.addClass("claude-code-flex-visible");
    this.resultArea.addClass("claude-code-hidden");
    this.resultArea.removeClass("claude-code-visible");
    this.statusText.textContent = message;
  }
  /**
   * Start elapsed time tracking (stores timing in per-note context)
   */
  startElapsedTimeTracking(baseMessage) {
    const context = this.getCurrentContext();
    context.executionStartTime = Date.now();
    context.baseStatusMessage = baseMessage || "\u{1F914} Claude is processing";
    this.stopElapsedTimeTracking();
    this.elapsedTimeInterval = setInterval(() => {
      const ctx = this.getCurrentContext();
      if (ctx.executionStartTime) {
        const elapsed = Date.now() - ctx.executionStartTime;
        const seconds = (elapsed / 1e3).toFixed(1);
        this.statusText.textContent = `${ctx.baseStatusMessage || "\u{1F914} Processing"}... ${seconds}s`;
      }
    }, 100);
  }
  /**
   * Resume elapsed time tracking for current note (used when switching back to a running note)
   */
  resumeElapsedTimeTracking() {
    const context = this.getCurrentContext();
    if (!context.executionStartTime || !context.isRunning) {
      return;
    }
    this.stopElapsedTimeTracking();
    this.elapsedTimeInterval = setInterval(() => {
      const ctx = this.getCurrentContext();
      if (ctx.executionStartTime) {
        const elapsed = Date.now() - ctx.executionStartTime;
        const seconds = (elapsed / 1e3).toFixed(1);
        this.statusText.textContent = `${ctx.baseStatusMessage || "\u{1F914} Processing"}... ${seconds}s`;
      }
    }, 100);
  }
  /**
   * Stop elapsed time tracking
   */
  stopElapsedTimeTracking() {
    if (this.elapsedTimeInterval) {
      clearInterval(this.elapsedTimeInterval);
      this.elapsedTimeInterval = null;
    }
  }
  /**
   * Hide status indicator
   */
  hideStatus() {
    this.stopElapsedTimeTracking();
    this.statusIndicator.addClass("claude-code-hidden");
    this.statusIndicator.removeClass("claude-code-flex-visible");
    if (this.resultArea.children.length > 0) {
      this.resultArea.removeClass("claude-code-hidden");
      this.resultArea.addClass("claude-code-visible");
      const resultSection = document.getElementById("claude-code-result-section");
      if (resultSection) {
        resultSection.removeClass("claude-code-hidden");
        resultSection.addClass("claude-code-visible");
      }
    }
  }
  /**
   * Show the last prompt that was sent
   */
  showLastPrompt(prompt) {
    const context = this.getCurrentContext();
    context.lastPrompt = prompt;
    this.lastPromptArea.empty();
    this.lastPromptArea.removeClass("claude-code-hidden");
    this.lastPromptArea.createEl("span", {
      cls: "claude-code-last-prompt-label",
      text: "\u{1F4AC} "
    });
    const displayPrompt = prompt.length > 200 ? prompt.substring(0, 200) + "..." : prompt;
    this.lastPromptArea.createEl("span", {
      cls: "claude-code-last-prompt-text",
      text: displayPrompt
    });
    if (prompt.length > 200) {
      this.lastPromptArea.setAttribute("title", prompt);
    }
  }
  /**
   * Hide the last prompt display
   */
  hideLastPrompt() {
    this.lastPromptArea.addClass("claude-code-hidden");
    this.lastPromptArea.empty();
  }
  /**
   * Show preview of changes
   * @param modifiedContent The modified content to preview
   * @param forNotePath Optional: the note path this preview belongs to (defaults to current note)
   */
  showPreview(modifiedContent, forNotePath) {
    var _a, _b;
    const targetNotePath = forNotePath || this.currentNotePath;
    const context = this.contextManager.getContext(targetNotePath);
    const originalContent = ((_a = context.currentRequest) == null ? void 0 : _a.selectedText) || ((_b = context.currentRequest) == null ? void 0 : _b.noteContent) || "";
    context.pendingPreviewContent = modifiedContent;
    context.originalPreviewContent = originalContent;
    if (targetNotePath !== this.currentNotePath) {
      return;
    }
    const previewSection = document.getElementById("claude-code-preview-section");
    if (previewSection) {
      previewSection.removeClass("claude-code-hidden");
      previewSection.addClass("claude-code-visible");
    }
    this.previewArea.empty();
    const oldRendered = this.previewContentContainer.querySelector(".claude-code-preview-rendered");
    if (oldRendered)
      oldRendered.remove();
    const oldDiff = this.previewContentContainer.querySelector(".claude-code-preview-diff");
    if (oldDiff)
      oldDiff.remove();
    const statsDiv = this.previewArea.createEl("div", { cls: "claude-code-preview-stats" });
    statsDiv.createEl("span", { text: `${t("preview.originalLabel")} ${originalContent.length} ${t("preview.charsLabel")}` });
    statsDiv.createEl("span", { text: ` \u2192 ${t("preview.modifiedLabel")} ${modifiedContent.length} ${t("preview.charsLabel")}` });
    statsDiv.createEl("span", { text: ` (${modifiedContent.length - originalContent.length >= 0 ? "+" : ""}${modifiedContent.length - originalContent.length})` });
    const previewContent = this.previewArea.createEl("pre", { cls: "claude-code-preview-content" });
    previewContent.createEl("code", { text: modifiedContent });
    this.previewArea.addClass("claude-code-hidden");
    const diffArea = this.previewContentContainer.createEl("div", {
      cls: "claude-code-preview-diff claude-code-visible"
    });
    const diffElement = this.generateDiffElement(originalContent, modifiedContent);
    diffArea.appendChild(diffElement);
    const renderedArea = this.previewContentContainer.createEl("div", {
      cls: "claude-code-preview-rendered claude-code-hidden"
    });
    void import_obsidian3.MarkdownRenderer.render(
      this.app,
      modifiedContent,
      renderedArea,
      this.currentNotePath,
      this
    );
  }
  /**
   * Hide preview and clear context state
   */
  hidePreview() {
    this.hidePreviewUI();
    const context = this.getCurrentContext();
    context.pendingPreviewContent = void 0;
    context.originalPreviewContent = void 0;
  }
  /**
   * Hide preview UI only (without clearing context state)
   * Used when switching notes to preserve each note's preview state
   */
  hidePreviewUI() {
    const previewSection = document.getElementById("claude-code-preview-section");
    if (previewSection) {
      previewSection.addClass("claude-code-hidden");
      previewSection.removeClass("claude-code-visible");
    }
  }
  /**
   * Restore preview from stored context state (used when switching notes)
   */
  restorePreview(modifiedContent, originalContent) {
    const previewSection = document.getElementById("claude-code-preview-section");
    if (previewSection) {
      previewSection.removeClass("claude-code-hidden");
      previewSection.addClass("claude-code-visible");
    }
    this.previewArea.empty();
    const oldRendered = this.previewContentContainer.querySelector(".claude-code-preview-rendered");
    if (oldRendered)
      oldRendered.remove();
    const oldDiff = this.previewContentContainer.querySelector(".claude-code-preview-diff");
    if (oldDiff)
      oldDiff.remove();
    const statsDiv = this.previewArea.createEl("div", { cls: "claude-code-preview-stats" });
    statsDiv.createEl("span", { text: `${t("preview.originalLabel")} ${originalContent.length} ${t("preview.charsLabel")}` });
    statsDiv.createEl("span", { text: ` \u2192 ${t("preview.modifiedLabel")} ${modifiedContent.length} ${t("preview.charsLabel")}` });
    statsDiv.createEl("span", { text: ` (${modifiedContent.length - originalContent.length >= 0 ? "+" : ""}${modifiedContent.length - originalContent.length})` });
    const previewContent = this.previewArea.createEl("pre", { cls: "claude-code-preview-content" });
    previewContent.createEl("code", { text: modifiedContent });
    this.previewArea.addClass("claude-code-hidden");
    const diffArea = this.previewContentContainer.createEl("div", {
      cls: "claude-code-preview-diff claude-code-visible"
    });
    const diffElement = this.generateDiffElement(originalContent, modifiedContent);
    diffArea.appendChild(diffElement);
    const renderedArea = this.previewContentContainer.createEl("div", {
      cls: "claude-code-preview-rendered claude-code-hidden"
    });
    void import_obsidian3.MarkdownRenderer.render(
      this.app,
      modifiedContent,
      renderedArea,
      this.currentNotePath,
      this
    );
  }
  /**
   * Restore streaming result from context (used when switching back to a running note)
   */
  restoreStreamingResult(text) {
    const resultSection = document.getElementById("claude-code-result-section");
    if (resultSection) {
      resultSection.removeClass("claude-code-hidden");
      resultSection.addClass("claude-code-visible");
    }
    this.resultArea.removeClass("claude-code-hidden");
    this.resultArea.addClass("claude-code-visible");
    this.resultArea.empty();
    this.currentResultStreamingElement = this.resultArea.createEl("div", {
      cls: "claude-code-result-streaming markdown-rendered"
    });
    this.currentResultStreamingElement.accumulatedText = text;
    this.lastRenderedText = "";
    this.hitFinalContentMarker = false;
    this.renderStreamingMarkdown(text);
    console.debug("[Restore Streaming Result] Restored text length:", text.length);
  }
  /**
   * Append text to result panel UI only (context update handled by appendOutputToNote)
   * Used for streaming assistant messages when the current note is active
   */
  appendToResultUI(text) {
    console.debug("[Append To Result UI] Called with text:", text.substring(0, 50));
    if (this.hitFinalContentMarker) {
      console.debug("[Append To Result UI] Already hit FINAL-CONTENT marker flag, ignoring chunk");
      return;
    }
    const resultSection = document.getElementById("claude-code-result-section");
    if (resultSection) {
      console.debug("[Append To Result UI] Showing result section");
      resultSection.removeClass("claude-code-hidden");
      resultSection.addClass("claude-code-visible");
    }
    this.resultArea.removeClass("claude-code-hidden");
    this.resultArea.addClass("claude-code-visible");
    if (!this.currentResultStreamingElement) {
      console.debug("[Append To Result UI] Creating streaming element");
      this.currentResultStreamingElement = this.resultArea.createEl("div", {
        cls: "claude-code-result-streaming markdown-rendered"
      });
      this.currentResultStreamingElement.accumulatedText = "";
    }
    const accumulatedText = this.currentResultStreamingElement.accumulatedText || "";
    if (accumulatedText.includes("---FINAL-CONTENT---")) {
      console.debug("[Append To Result UI] Found FINAL-CONTENT in existing text, cleaning up and setting flag");
      this.cleanupFinalContentFromStream();
      this.hitFinalContentMarker = true;
      return;
    }
    const combinedText = accumulatedText + text;
    if (combinedText.includes("---FINAL-CONTENT---")) {
      const finalContentIndex = combinedText.indexOf("---FINAL-CONTENT---");
      const textBeforeMarker = combinedText.substring(0, finalContentIndex);
      this.currentResultStreamingElement.accumulatedText = textBeforeMarker;
      this.renderStreamingMarkdown(textBeforeMarker);
      console.debug("[Append To Result UI] Hit FINAL-CONTENT marker, setting flag");
      this.hitFinalContentMarker = true;
      return;
    }
    this.currentResultStreamingElement.accumulatedText = combinedText;
    this.renderStreamingMarkdown(combinedText);
    console.debug("[Append To Result UI] Appended chunk, accumulated length:", combinedText.length);
    this.autoScrollResult();
  }
  /**
   * Render accumulated markdown text by detecting and rendering complete blocks
   * Appends complete paragraphs/blocks as independent chunks
   */
  renderStreamingMarkdown(text) {
    if (!this.currentResultStreamingElement)
      return;
    const newContent = text.substring(this.lastRenderedText.length);
    if (!newContent)
      return;
    const { completeBlocks, remainingText } = this.extractCompleteBlocks(newContent);
    if (completeBlocks.length > 0) {
      this.removeIncompletePlainText();
      for (const block of completeBlocks) {
        this.appendMarkdownBlock(block);
      }
      this.lastRenderedText = this.lastRenderedText + newContent.substring(0, newContent.length - remainingText.length);
    }
    if (remainingText) {
      this.appendPlainText(remainingText);
    }
  }
  /**
   * Extract complete markdown blocks from the new content
   * Returns blocks that are ready to be rendered and remaining incomplete text
   */
  extractCompleteBlocks(newContent) {
    const blocks = [];
    const paragraphs = newContent.split(/\n\n+/);
    if (paragraphs.length > 1) {
      for (let i = 0; i < paragraphs.length - 1; i++) {
        if (paragraphs[i].trim()) {
          blocks.push(paragraphs[i]);
        }
      }
      return {
        completeBlocks: blocks,
        remainingText: paragraphs[paragraphs.length - 1]
      };
    }
    return {
      completeBlocks: [],
      remainingText: newContent
    };
  }
  /**
   * Remove incomplete plain text from the last render
   * (will be re-added as part of complete block or new plain text)
   */
  removeIncompletePlainText() {
    if (!this.currentResultStreamingElement)
      return;
    const lastChild = this.currentResultStreamingElement.lastChild;
    if (lastChild && lastChild.nodeType === Node.TEXT_NODE) {
      this.currentResultStreamingElement.removeChild(lastChild);
    }
  }
  /**
   * Append a complete markdown block as an independent rendered chunk
   */
  appendMarkdownBlock(blockText) {
    if (!this.currentResultStreamingElement)
      return;
    const blockContainer = document.createElement("div");
    blockContainer.addClass("markdown-block");
    void import_obsidian3.MarkdownRenderer.render(
      this.app,
      blockText,
      blockContainer,
      this.currentNotePath,
      this
    ).catch((e) => {
      console.error("[Append Markdown Block] Error:", e);
      blockContainer.textContent = blockText;
    });
    this.currentResultStreamingElement.appendChild(blockContainer);
  }
  /**
   * Append plain text without any processing
   */
  appendPlainText(text) {
    if (!this.currentResultStreamingElement)
      return;
    const lastChild = this.currentResultStreamingElement.lastChild;
    if (lastChild && lastChild.nodeType === Node.TEXT_NODE) {
      lastChild.textContent = text;
    } else {
      const textNode = document.createTextNode(text);
      this.currentResultStreamingElement.appendChild(textNode);
    }
  }
  /**
   * Clean up FINAL-CONTENT marker and everything after it from the streaming element
   */
  cleanupFinalContentFromStream() {
    if (!this.currentResultStreamingElement)
      return;
    const fullText = this.currentResultStreamingElement.textContent || "";
    const finalContentIndex = fullText.indexOf("---FINAL-CONTENT---");
    if (finalContentIndex === -1)
      return;
    console.debug("[Cleanup FINAL-CONTENT] Removing marker and content after it");
    const textToKeep = fullText.substring(0, finalContentIndex).trim();
    this.currentResultStreamingElement.empty();
    this.currentResultStreamingElement.createEl("span", {
      cls: "streaming-text-chunk",
      text: textToKeep
    });
    console.debug("[Cleanup FINAL-CONTENT] Cleaned up, kept text length:", textToKeep.length);
  }
  /**
   * Show markdown content in result section (for non-streaming assistant messages)
   */
  showResultMarkdown(text) {
    console.debug("[Show Result Markdown] Called with text length:", text.length);
    let filteredText = text;
    const finalContentIndex = text.indexOf("---FINAL-CONTENT---");
    if (finalContentIndex !== -1) {
      filteredText = text.substring(0, finalContentIndex).trim();
      console.debug("[Show Result Markdown] Filtered FINAL-CONTENT, new length:", filteredText.length);
    }
    const resultSection = document.getElementById("claude-code-result-section");
    if (resultSection) {
      resultSection.removeClass("claude-code-hidden");
      resultSection.addClass("claude-code-visible");
    }
    this.resultArea.removeClass("claude-code-hidden");
    this.resultArea.addClass("claude-code-visible");
    const contentDiv = this.resultArea.createEl("div", {
      cls: "markdown-rendered"
    });
    void import_obsidian3.MarkdownRenderer.render(
      this.app,
      filteredText,
      contentDiv,
      this.currentNotePath,
      this
    ).catch((e) => {
      console.error("[Show Result Markdown] Render error:", e);
      contentDiv.textContent = filteredText;
    });
    this.resultArea.scrollTop = this.resultArea.scrollHeight;
  }
  /**
   * Setup smart auto-scroll detection on result area
   */
  setupSmartAutoScroll() {
    this.resultArea.addEventListener("scroll", () => {
      const { scrollTop, scrollHeight, clientHeight } = this.resultArea;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 50;
      if (!isNearBottom) {
        this.userHasScrolled = true;
      } else {
        this.userHasScrolled = false;
      }
    });
  }
  /**
   * Auto-scroll result area to bottom (only if user hasn't manually scrolled up)
   */
  autoScrollResult() {
    if (!this.userHasScrolled) {
      this.resultArea.scrollTop = this.resultArea.scrollHeight;
    }
  }
  /**
   * Reset scroll state (call when starting new request)
   */
  resetScrollState() {
    this.userHasScrolled = false;
    this.lastRenderedText = "";
  }
  /**
   * Finish the streaming result block
   */
  finishResultStreaming() {
    if (this.currentResultStreamingElement) {
      console.debug("[Finish Result Streaming] Cleaning up streaming state");
      const fullAccumulatedText = this.currentResultStreamingElement.fullText || "";
      if (fullAccumulatedText && fullAccumulatedText.length > this.lastRenderedText.length) {
        const unrenderedText = fullAccumulatedText.substring(this.lastRenderedText.length);
        if (unrenderedText.trim()) {
          console.debug("[Finish Result Streaming] Rendering final unrendered text:", unrenderedText.substring(0, 50));
          const lastChild = this.currentResultStreamingElement.lastChild;
          if (lastChild && lastChild.nodeType === Node.TEXT_NODE) {
            this.currentResultStreamingElement.removeChild(lastChild);
          }
          this.appendMarkdownBlock(unrenderedText);
        }
      } else {
        const lastChild = this.currentResultStreamingElement.lastChild;
        if (lastChild && lastChild.nodeType === Node.TEXT_NODE) {
          const remainingText = lastChild.textContent || "";
          if (remainingText.trim()) {
            this.currentResultStreamingElement.removeChild(lastChild);
            this.appendMarkdownBlock(remainingText);
          }
        }
      }
      this.currentResultStreamingElement.removeClass("claude-code-result-streaming");
      this.currentResultStreamingElement.addClass("markdown-rendered");
      this.currentResultStreamingElement = null;
    }
  }
  /**
   * Show result panel with Claude's response
   */
  showResult(message) {
    this.resultArea.empty();
    let filteredMessage = message;
    const finalContentIndex = message.indexOf("---FINAL-CONTENT---");
    if (finalContentIndex !== -1) {
      filteredMessage = message.substring(0, finalContentIndex).trim();
      console.debug("[Show Result] Filtered FINAL-CONTENT, original length:", message.length, "filtered length:", filteredMessage.length);
    }
    void import_obsidian3.MarkdownRenderer.render(
      this.app,
      filteredMessage,
      this.resultArea,
      this.currentNotePath,
      this
    );
    const resultSection = document.getElementById("claude-code-result-section");
    if (resultSection) {
      resultSection.removeClass("claude-code-hidden");
      resultSection.addClass("claude-code-visible");
    }
    this.statusIndicator.addClass("claude-code-hidden");
    this.statusIndicator.removeClass("claude-code-flex-visible");
    this.resultArea.removeClass("claude-code-hidden");
    this.resultArea.addClass("claude-code-visible");
  }
  /**
   * Hide result panel
   */
  hideResult() {
    this.resultArea.addClass("claude-code-hidden");
    this.resultArea.removeClass("claude-code-visible");
    this.resultArea.empty();
    if (this.statusIndicator.hasClass("claude-code-hidden")) {
      const resultSection = document.getElementById("claude-code-result-section");
      if (resultSection) {
        resultSection.addClass("claude-code-hidden");
        resultSection.removeClass("claude-code-visible");
      }
    }
  }
  /**
   * Show permission approval section
   */
  showPermissionApprovalSection() {
    if (this.permissionApprovalSection) {
      this.permissionApprovalSection.removeClass("claude-code-hidden");
      this.permissionApprovalSection.addClass("claude-code-visible");
    }
  }
  /**
   * Hide permission approval section
   */
  hidePermissionApprovalSection() {
    if (this.permissionApprovalSection) {
      this.permissionApprovalSection.addClass("claude-code-hidden");
      this.permissionApprovalSection.removeClass("claude-code-visible");
    }
  }
  /**
   * Handle approve permission button click
   */
  handleApprovePermission() {
    return __async(this, null, function* () {
      const context = this.getCurrentContext();
      if (!context.currentRequest) {
        new import_obsidian3.Notice(t("misc.noPendingRequest"));
        return;
      }
      this.hidePermissionApprovalSection();
      const file = this.app.workspace.getActiveFile();
      if (!file) {
        new import_obsidian3.Notice(t("notice.noActiveNote"));
        return;
      }
      const leaves = this.app.workspace.getLeavesOfType("markdown");
      let activeView = null;
      for (const leaf of leaves) {
        const view = leaf.view;
        if (view.file && view.file.path === file.path) {
          activeView = view;
          break;
        }
      }
      if (!activeView || !activeView.editor) {
        new import_obsidian3.Notice(t("notice.noEditor"));
        return;
      }
      const editor = activeView.editor;
      const approvalPrompt = "Yes, I approve. You have permissionless mode enabled - please proceed with the action you were asking about. Don't hesitate to execute it.";
      const newRequest = __spreadProps(__spreadValues({}, context.currentRequest), {
        userPrompt: approvalPrompt,
        bypassPermissions: true,
        configDir: this.app.vault.configDir
      });
      this.runButton.disabled = true;
      this.runButton.textContent = t("input.runningButton");
      this.cancelButton.removeClass("claude-code-hidden");
      this.cancelButton.addClass("claude-code-inline-visible");
      this.outputRenderer.clear();
      this.hidePreview();
      this.hideResult();
      this.showStatus("\u{1F513} " + t("status.runningAuthorized") + " ... 0.0s");
      this.startElapsedTimeTracking("\u{1F513} " + t("status.runningAuthorized"));
      const runNotePath = file.path;
      context.isRunning = true;
      const response = yield context.runner.run(
        newRequest,
        (line, isMarkdown, isStreaming, isAssistantMessage) => {
          this.appendOutputToNote(runNotePath, line, isMarkdown, isStreaming, isAssistantMessage);
          if (this.currentNotePath === runNotePath) {
            this.updateStatusFromOutput(line);
          }
        }
      );
      context.isRunning = false;
      context.currentResponse = response;
      context.executionStartTime = void 0;
      context.baseStatusMessage = void 0;
      this.hideStatus();
      this.runButton.disabled = false;
      this.runButton.textContent = t("input.runButton");
      this.cancelButton.addClass("claude-code-hidden");
      this.cancelButton.removeClass("claude-code-inline-visible");
      if (response.success) {
        context.history.push({
          prompt: approvalPrompt,
          timestamp: new Date(),
          success: true,
          notePath: file.path,
          response,
          request: newRequest,
          outputLines: context.outputLines
        });
        this.updateHistoryDisplay(context.history);
        const vaultPath = this.app.vault.adapter.getBasePath();
        this.contextManager.saveContext(file.path, vaultPath);
        if (response.modifiedContent && response.modifiedContent.trim()) {
          if (this.autoAcceptCheckbox.checked) {
            if (this.currentNotePath === runNotePath) {
              this.showStatus("\u2705 " + t("status.autoApplying"));
            }
            this.applyChangesToEditor(response.modifiedContent, editor);
            if (this.currentNotePath === runNotePath) {
              this.hideStatus();
            }
            new import_obsidian3.Notice("\u2713 " + t("notice.changesApplied"));
          } else {
            this.showPreview(response.modifiedContent, runNotePath);
          }
        } else {
          if (this.currentNotePath === runNotePath) {
            const resultSection = document.getElementById("claude-code-result-section");
            const hasStreamedContent = resultSection && resultSection.hasClass("claude-code-visible") && this.resultArea.children.length > 0;
            if (!hasStreamedContent && response.assistantMessage && response.assistantMessage.trim()) {
              this.showResult(response.assistantMessage);
              new import_obsidian3.Notice("\u2713 " + t("notice.completed"));
            } else if (hasStreamedContent) {
              new import_obsidian3.Notice("\u2713 " + t("notice.completed"));
            } else {
              new import_obsidian3.Notice("\u2713 " + t("notice.completedNoChanges"));
            }
          } else {
            new import_obsidian3.Notice("\u2713 " + t("notice.completed"));
          }
        }
      } else {
        if (this.currentNotePath === runNotePath) {
          this.showErrorStatus("\u274C " + t("status.failed"));
        }
        new import_obsidian3.Notice(`\u2717 Claude Code failed: ${response.error || "Unknown error"}`);
      }
    });
  }
  /**
   * Handle deny permission button click
   */
  handleDenyPermission() {
    this.hidePermissionApprovalSection();
    new import_obsidian3.Notice(t("notice.permissionDenied"));
  }
  /**
   * Handle apply changes
   */
  handleApplyChanges() {
    var _a;
    const context = this.getCurrentContext();
    const contentToApply = context.pendingPreviewContent || ((_a = context.currentResponse) == null ? void 0 : _a.modifiedContent);
    if (!contentToApply) {
      new import_obsidian3.Notice("\u26A0 " + t("notice.noChangesToApply"));
      console.error("[Apply Changes] No modified content found in context");
      return;
    }
    const file = this.app.workspace.getActiveFile();
    if (!file) {
      new import_obsidian3.Notice("\u26A0 " + t("notice.noActiveFile"));
      console.error("[Apply Changes] No active file found");
      return;
    }
    const leaves = this.app.workspace.getLeavesOfType("markdown");
    let targetView = null;
    for (const leaf of leaves) {
      const view = leaf.view;
      if (view.file && view.file.path === file.path) {
        targetView = view;
        break;
      }
    }
    if (!targetView && leaves.length > 0) {
      targetView = leaves[0].view;
    }
    if (!targetView || !targetView.editor) {
      new import_obsidian3.Notice("\u26A0 " + t("notice.noEditor"));
      console.error("[Apply Changes] No markdown view or editor found");
      return;
    }
    try {
      this.applyChangesToEditor(contentToApply, targetView.editor);
      this.hidePreview();
      new import_obsidian3.Notice("\u2713 " + t("notice.changesAppliedSuccess"));
    } catch (error) {
      new import_obsidian3.Notice("\u2717 " + t("notice.failedApplyChanges"));
      console.error("[Apply Changes] Error:", error);
    }
  }
  /**
   * Apply changes to editor
   */
  applyChangesToEditor(content, editor) {
    var _a;
    const context = this.getCurrentContext();
    const cursorBefore = editor.getCursor();
    if ((_a = context.currentRequest) == null ? void 0 : _a.selectedText) {
      editor.replaceSelection(content);
    } else {
      editor.setValue(content);
    }
    if (this.plugin.settings.preserveCursorPosition) {
      editor.setCursor(cursorBefore);
    }
  }
  /**
   * Handle reject changes
   */
  handleRejectChanges() {
    this.hidePreview();
    new import_obsidian3.Notice(t("notice.changesRejected"));
  }
  /**
   * Handle cancel
   */
  handleCancel() {
    const context = this.getCurrentContext();
    context.runner.terminate();
    context.isRunning = false;
    context.executionStartTime = void 0;
    context.baseStatusMessage = void 0;
    this.runButton.disabled = false;
    this.runButton.textContent = t("input.runButton");
    this.cancelButton.addClass("claude-code-hidden");
    this.cancelButton.removeClass("claude-code-inline-visible");
    this.hideStatus();
    new import_obsidian3.Notice(t("notice.cancelled"));
  }
  /**
   * Respond to interactive prompt (placeholder for future use)
   */
  respondToPrompt(response) {
    console.debug("Interactive response:", response);
  }
  /**
   * Generate diff HTML between original and modified content
   */
  generateDiffElement(original, modified) {
    return DiffGenerator.generateDiffElement(original, modified);
  }
  /**
   * Update history display
   */
  updateHistoryDisplay(history) {
    this.historyList.empty();
    const historySection = document.getElementById("claude-code-history-section");
    if (history.length === 0) {
      if (historySection) {
        historySection.addClass("claude-code-hidden");
        historySection.removeClass("claude-code-visible");
      }
      return;
    }
    if (historySection) {
      historySection.removeClass("claude-code-hidden");
      historySection.addClass("claude-code-visible");
    }
    for (const item of history.slice().reverse()) {
      const li = this.historyList.createEl("li");
      const icon = item.success ? "\u2713" : "\u2717";
      const time = new Date(item.timestamp).toLocaleTimeString();
      li.createEl("span", { text: `${icon} ${time}`, cls: "history-time" });
      const displayPrompt = item.prompt.length > 100 ? item.prompt.substring(0, 100) + "..." : item.prompt;
      li.createEl("span", { text: displayPrompt, cls: "history-prompt" });
      li.addEventListener("click", () => this.restoreFromHistory(item));
      li.addClass("claude-code-cursor-pointer");
    }
  }
  /**
   * Restore state from a history item
   */
  restoreFromHistory(item) {
    var _a;
    const context = this.getCurrentContext();
    this.promptInput.value = item.prompt;
    if (item.outputLines && item.outputLines.length > 0) {
      this.outputRenderer.clear();
      for (const line of item.outputLines) {
        this.outputRenderer.appendLine(line);
      }
    }
    if (item.response) {
      context.currentResponse = item.response;
      if (item.response.assistantMessage && item.response.assistantMessage.trim()) {
        this.showResult(item.response.assistantMessage);
      }
    }
    if (item.request) {
      context.currentRequest = item.request;
    }
    if (item.success && ((_a = item.response) == null ? void 0 : _a.modifiedContent)) {
      this.showPreview(item.response.modifiedContent);
      new import_obsidian3.Notice(t("notice.historyRestoredWithChanges"));
    } else {
      this.hidePreview();
      new import_obsidian3.Notice(t("notice.historyRestored"));
    }
  }
  /**
   * Clear history
   */
  clearHistory() {
    this.contextManager.clearHistory(this.currentNotePath);
    this.updateHistoryDisplay([]);
    const historySection = document.getElementById("claude-code-history-section");
    if (historySection) {
      historySection.addClass("claude-code-hidden");
      historySection.removeClass("claude-code-visible");
    }
    new import_obsidian3.Notice(t("notice.historyCleared"));
  }
  /**
   * Clear the todo list display
   */
  clearTodoList() {
    const planColumn = document.querySelector(".claude-code-plan-column");
    const todoList = document.getElementById("claude-code-todo-list");
    const emptyPlan = document.getElementById("claude-code-empty-plan");
    console.debug("[Clear Todo List] Called");
    if (!todoList || !planColumn) {
      console.debug("[Clear Todo List] Elements not found");
      return;
    }
    todoList.empty();
    if (emptyPlan) {
      emptyPlan.addClass("claude-code-hidden");
    }
    todoList.addClass("claude-code-hidden");
    planColumn.addClass("claude-code-hidden");
    console.debug("[Clear Todo List] Plan column hidden");
  }
  /**
   * Update Claude's todo list display
   */
  updateTodoList(todos) {
    const agentContainer = document.getElementById("claude-code-agent-container");
    const planColumn = document.querySelector(".claude-code-plan-column");
    const todoList = document.getElementById("claude-code-todo-list");
    const emptyPlan = document.getElementById("claude-code-empty-plan");
    if (!agentContainer || !todoList || !planColumn)
      return;
    todoList.empty();
    if (todos.length === 0) {
      planColumn.addClass("claude-code-hidden");
      if (emptyPlan)
        emptyPlan.addClass("claude-code-hidden");
      todoList.addClass("claude-code-hidden");
      const agentStepsContainer = document.getElementById("claude-code-agent-steps");
      if (agentStepsContainer && agentStepsContainer.children.length === 0) {
        agentContainer.removeClass("is-visible");
        agentContainer.addClass("is-hidden");
      }
    } else {
      agentContainer.removeClass("is-hidden");
      agentContainer.addClass("is-visible");
      planColumn.removeClass("claude-code-hidden");
      planColumn.addClass("claude-code-flex-visible");
      if (emptyPlan)
        emptyPlan.addClass("claude-code-hidden");
      todoList.removeClass("claude-code-hidden");
      todoList.addClass("claude-code-flex-visible");
      for (const todo of todos) {
        const todoItem = todoList.createEl("div", { cls: "claude-code-todo-item" });
        let icon = "\u23F3";
        let statusClass = "pending";
        if (todo.status === "in_progress") {
          icon = "\u{1F504}";
          statusClass = "in-progress";
        } else if (todo.status === "completed") {
          icon = "\u2705";
          statusClass = "completed";
        }
        todoItem.createEl("span", {
          cls: `claude-code-todo-icon ${statusClass}`,
          text: icon
        });
        const text = todo.status === "in_progress" ? todo.activeForm : todo.content;
        todoItem.createEl("span", {
          cls: "claude-code-todo-content",
          text
        });
      }
    }
  }
  /**
   * Update settings
   */
  updateSettings() {
    this.autoAcceptCheckbox.checked = this.plugin.settings.autoAcceptChanges;
    this.modelSelect.value = this.plugin.settings.modelAlias;
  }
  onClose() {
    return __async(this, null, function* () {
      if (this.promptInputKeydownHandler) {
        this.promptInput.removeEventListener("keydown", this.promptInputKeydownHandler);
        this.promptInputKeydownHandler = null;
      }
      for (const { element, event, handler } of this.eventListeners) {
        element.removeEventListener(event, handler);
      }
      this.eventListeners = [];
      const vaultPath = this.app.vault.adapter.getBasePath();
      if (vaultPath) {
        try {
          this.contextManager.saveAllContexts(vaultPath);
        } catch (error) {
          console.error("Failed to save contexts on close:", error);
        }
      }
    });
  }
};

// src/core/settings.ts
var import_obsidian4 = require("obsidian");
var import_child_process2 = require("child_process");
var os2 = __toESM(require("os"));
var fs5 = __toESM(require("fs"));
var path6 = __toESM(require("path"));
var DEFAULT_SETTINGS = {
  claudeCodePath: "",
  autoDetectPath: true,
  modelAlias: "",
  customSystemPrompt: "",
  preserveCursorPosition: true,
  timeoutSeconds: 300,
  autoAcceptChanges: false,
  allowVaultAccess: true,
  enablePermissionlessMode: false,
  // Custom API configuration (empty = use default)
  anthropicBaseUrl: "",
  anthropicAuthToken: "",
  anthropicModel: "",
  anthropicSmallFastModel: "",
  // UI settings
  language: "en",
  // Remote WebSocket mode settings
  enableRemoteMode: false,
  remoteServerUrl: "ws://localhost:8080",
  remoteAuthToken: "",
  remoteAutoReconnect: true,
  remoteReconnectInterval: 3e3,
  remoteMaxReconnectAttempts: 10
};
var ClaudeCodeSettingTab = class extends import_obsidian4.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian4.Setting(containerEl).setName(t("settings.language")).setDesc(t("settings.languageDesc")).addDropdown((dropdown) => {
      const locales = getAvailableLocales();
      for (const locale of locales) {
        dropdown.addOption(locale.code, locale.name);
      }
      dropdown.setValue(getLocale()).onChange((value) => __async(this, null, function* () {
        this.plugin.settings.language = value;
        setLocale(value);
        yield this.plugin.saveSettings();
        this.display();
        new import_obsidian4.Notice(t("misc.languageChanged"));
      }));
    });
    new import_obsidian4.Setting(containerEl).setName(t("settings.autoDetectPath")).setDesc(t("settings.autoDetectPathDesc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.autoDetectPath).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.autoDetectPath = value;
      if (value) {
        const detectedPath = this.detectClaudeCodePath();
        if (detectedPath) {
          this.plugin.settings.claudeCodePath = detectedPath;
        }
      }
      yield this.plugin.saveSettings();
      this.display();
    })));
    new import_obsidian4.Setting(containerEl).setName(t("settings.executablePath")).setDesc(t("settings.executablePathDesc")).addText((text) => text.setPlaceholder("/usr/local/bin/claude").setValue(this.plugin.settings.claudeCodePath).setDisabled(this.plugin.settings.autoDetectPath).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.claudeCodePath = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian4.Setting(containerEl).setName(t("settings.testInstallation")).setDesc(t("settings.testInstallationDesc")).addButton((button) => button.setButtonText(t("settings.testButton")).onClick(() => {
      void this.testClaudeCode().then((result) => {
        if (result.success) {
          button.setButtonText("\u2713 " + t("settings.testWorking"));
          setTimeout(() => {
            button.setButtonText(t("settings.testButton"));
          }, 2e3);
        } else {
          button.setButtonText("\u2717 " + t("settings.testFailed"));
          setTimeout(() => {
            button.setButtonText(t("settings.testButton"));
          }, 2e3);
          new import_obsidian4.Notice(`${t("misc.testFailed")}: ${result.error}`);
        }
      });
    }));
    new import_obsidian4.Setting(containerEl).setName(t("settings.customPrompt")).setDesc(t("settings.customPromptDesc")).addTextArea((text) => {
      text.setPlaceholder(t("settings.customPromptPlaceholder")).setValue(this.plugin.settings.customSystemPrompt).onChange((value) => __async(this, null, function* () {
        this.plugin.settings.customSystemPrompt = value;
        yield this.plugin.saveSettings();
      }));
      text.inputEl.rows = 4;
      text.inputEl.cols = 50;
    });
    new import_obsidian4.Setting(containerEl).setName(t("settings.preserveCursor")).setDesc(t("settings.preserveCursorDesc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.preserveCursorPosition).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.preserveCursorPosition = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian4.Setting(containerEl).setName(t("settings.autoAcceptChanges")).setDesc(t("settings.autoAcceptChangesDesc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.autoAcceptChanges).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.autoAcceptChanges = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian4.Setting(containerEl).setName(t("settings.model")).setDesc(t("settings.modelDesc")).addDropdown((dropdown) => dropdown.addOption("", t("settings.modelDefault")).addOption("sonnet", t("settings.modelSonnet")).addOption("opus", t("settings.modelOpus")).addOption("haiku", t("settings.modelHaiku")).setValue(this.plugin.settings.modelAlias).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.modelAlias = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian4.Setting(containerEl).setName(t("settings.vaultAccess")).setDesc(t("settings.vaultAccessDesc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.allowVaultAccess).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.allowVaultAccess = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian4.Setting(containerEl).setName(t("settings.permissionlessMode")).setDesc(t("settings.permissionlessModeDesc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.enablePermissionlessMode).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.enablePermissionlessMode = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian4.Setting(containerEl).setName(t("settings.timeout")).setDesc(t("settings.timeoutDesc")).addText((text) => text.setPlaceholder("300").setValue(String(this.plugin.settings.timeoutSeconds)).onChange((value) => __async(this, null, function* () {
      const num = parseInt(value);
      if (!isNaN(num) && num >= 0) {
        this.plugin.settings.timeoutSeconds = num;
        yield this.plugin.saveSettings();
      }
    })));
    new import_obsidian4.Setting(containerEl).setName(t("settings.customApiConfig")).setDesc(t("settings.customApiConfigDesc")).setHeading();
    new import_obsidian4.Setting(containerEl).setName(t("settings.apiBaseUrl")).setDesc(t("settings.apiBaseUrlDesc")).addText((text) => text.setPlaceholder("https://api.anthropic.com").setValue(this.plugin.settings.anthropicBaseUrl).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.anthropicBaseUrl = value.trim();
      yield this.plugin.saveSettings();
    })));
    new import_obsidian4.Setting(containerEl).setName(t("settings.apiAuthToken")).setDesc(t("settings.apiAuthTokenDesc")).addText((text) => {
      text.setPlaceholder(t("settings.apiAuthTokenPlaceholder")).setValue(this.plugin.settings.anthropicAuthToken).onChange((value) => __async(this, null, function* () {
        this.plugin.settings.anthropicAuthToken = value.trim();
        yield this.plugin.saveSettings();
      }));
      text.inputEl.type = "password";
    });
    new import_obsidian4.Setting(containerEl).setName(t("settings.customModel")).setDesc(t("settings.customModelDesc")).addText((text) => text.setPlaceholder("claude-sonnet-4-20250514").setValue(this.plugin.settings.anthropicModel).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.anthropicModel = value.trim();
      yield this.plugin.saveSettings();
    })));
    new import_obsidian4.Setting(containerEl).setName(t("settings.customSmallModel")).setDesc(t("settings.customSmallModelDesc")).addText((text) => text.setPlaceholder("claude-haiku-3-5-20241022").setValue(this.plugin.settings.anthropicSmallFastModel).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.anthropicSmallFastModel = value.trim();
      yield this.plugin.saveSettings();
    })));
    new import_obsidian4.Setting(containerEl).setName("Remote Mode (WebSocket)").setDesc("Connect to remote Claude relay server instead of running Claude locally").setHeading();
    new import_obsidian4.Setting(containerEl).setName("Enable remote mode").setDesc("Use WebSocket connection to remote Claude server instead of local Claude Code").addToggle((toggle) => toggle.setValue(this.plugin.settings.enableRemoteMode).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.enableRemoteMode = value;
      yield this.plugin.saveSettings();
      new import_obsidian4.Notice("Remote mode " + (value ? "enabled" : "disabled") + ". Reload Obsidian to apply changes.");
    })));
    new import_obsidian4.Setting(containerEl).setName("Server URL").setDesc("WebSocket server URL (e.g., ws://localhost:8080 or wss://your-server.com)").addText((text) => text.setPlaceholder("ws://localhost:8080").setValue(this.plugin.settings.remoteServerUrl).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.remoteServerUrl = value.trim();
      yield this.plugin.saveSettings();
    })));
    new import_obsidian4.Setting(containerEl).setName("Auth token (optional)").setDesc("Optional authentication token for server connection").addText((text) => {
      text.setPlaceholder("your-auth-token").setValue(this.plugin.settings.remoteAuthToken).onChange((value) => __async(this, null, function* () {
        this.plugin.settings.remoteAuthToken = value.trim();
        yield this.plugin.saveSettings();
      }));
      text.inputEl.type = "password";
    });
    new import_obsidian4.Setting(containerEl).setName("Auto-reconnect").setDesc("Automatically reconnect to server if connection is lost").addToggle((toggle) => toggle.setValue(this.plugin.settings.remoteAutoReconnect).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.remoteAutoReconnect = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian4.Setting(containerEl).setName("Reconnect interval (ms)").setDesc("Initial reconnection delay in milliseconds (will increase exponentially)").addText((text) => text.setPlaceholder("3000").setValue(String(this.plugin.settings.remoteReconnectInterval)).onChange((value) => __async(this, null, function* () {
      const num = parseInt(value);
      if (!isNaN(num) && num >= 1e3) {
        this.plugin.settings.remoteReconnectInterval = num;
        yield this.plugin.saveSettings();
      }
    })));
    new import_obsidian4.Setting(containerEl).setName("Max reconnect attempts").setDesc("Maximum number of reconnection attempts before giving up").addText((text) => text.setPlaceholder("10").setValue(String(this.plugin.settings.remoteMaxReconnectAttempts)).onChange((value) => __async(this, null, function* () {
      const num = parseInt(value);
      if (!isNaN(num) && num >= 1) {
        this.plugin.settings.remoteMaxReconnectAttempts = num;
        yield this.plugin.saveSettings();
      }
    })));
  }
  /**
   * Attempt to detect Claude Code installation path (cross-platform)
   */
  detectClaudeCodePath() {
    const isWindows = process.platform === "win32";
    const homeDir = process.env.HOME || process.env.USERPROFILE || os2.homedir();
    let possiblePaths = [];
    if (isWindows) {
      possiblePaths = [
        "claude",
        // If in PATH
        path6.join(homeDir, "AppData", "Local", "Programs", "claude", "claude.exe"),
        path6.join(homeDir, ".bun", "bin", "claude.exe"),
        "C:\\Program Files\\claude\\claude.exe"
      ];
    } else {
      possiblePaths = [
        "claude",
        // If in PATH
        "/usr/local/bin/claude",
        "/usr/bin/claude",
        path6.join(homeDir, ".local", "bin", "claude"),
        path6.join(homeDir, "bin", "claude"),
        path6.join(homeDir, ".bun", "bin", "claude")
      ];
    }
    for (const cmdPath of possiblePaths) {
      try {
        if (!cmdPath.includes("/") && !cmdPath.includes("\\")) {
          const whichCmd = isWindows ? "where" : "which";
          const result = (0, import_child_process2.execSync)(`${whichCmd} ${cmdPath}`, { encoding: "utf8" }).trim();
          if (result) {
            return result.split("\n")[0].trim();
          }
        } else {
          if (fs5.existsSync(cmdPath)) {
            return cmdPath;
          }
        }
      } catch (e) {
      }
    }
    return null;
  }
  /**
   * Test if Claude Code is accessible and working (cross-platform)
   */
  testClaudeCode() {
    return __async(this, null, function* () {
      try {
        const cmdPath = this.plugin.settings.claudeCodePath || "claude";
        const isWindows = process.platform === "win32";
        const homeDir = process.env.HOME || process.env.USERPROFILE || os2.homedir();
        const pathSeparator = isWindows ? ";" : ":";
        const envPath = process.env.PATH || "";
        let pathsToAdd = [];
        if (isWindows) {
          pathsToAdd = [
            path6.join(homeDir, "AppData", "Local", "Programs", "nodejs"),
            path6.join(homeDir, ".bun", "bin"),
            "C:\\Program Files\\nodejs",
            "C:\\Program Files (x86)\\nodejs"
          ];
        } else {
          pathsToAdd = [
            path6.join(homeDir, ".nvm", "versions", "node", "v20.18.2", "bin"),
            path6.join(homeDir, ".bun", "bin"),
            "/usr/local/bin",
            "/usr/bin",
            "/bin"
          ];
        }
        const existingPaths = pathsToAdd.filter((p) => {
          try {
            return fs5.existsSync(p);
          } catch (e) {
            return false;
          }
        });
        const enhancedPath = [.../* @__PURE__ */ new Set([...existingPaths, ...envPath.split(pathSeparator)])].join(pathSeparator);
        return new Promise((resolve) => {
          (0, import_child_process2.exec)(`${cmdPath} --version`, {
            timeout: 5e3,
            env: __spreadProps(__spreadValues({}, process.env), {
              PATH: enhancedPath
            })
          }, (error, stdout, stderr) => {
            if (error) {
              resolve({ success: false, error: error.message });
            } else {
              resolve({ success: true });
            }
          });
        });
      } catch (e) {
        return { success: false, error: String(e) };
      }
    });
  }
};

// src/main.ts
var ClaudeCodePlugin = class extends import_obsidian5.Plugin {
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      initI18n(this.settings.language);
      this.registerView(
        VIEW_TYPE_CLAUDE_CODE,
        (leaf) => new ClaudeCodeView(leaf, this)
      );
      this.addRibbonIcon("bot", "Open Claude Code", () => {
        void this.activateView();
      });
      this.addCommand({
        id: "open-claude-code-view",
        name: "Open Claude Code panel",
        callback: () => {
          void this.activateView();
        }
      });
      this.addCommand({
        id: "run-claude-code-quick",
        name: "Quick run Claude Code (with default prompt)",
        callback: () => __async(this, null, function* () {
          yield this.activateView();
        })
      });
      this.addCommand({
        id: "run-claude-code-selection",
        name: "Run Claude Code on selected text",
        callback: () => __async(this, null, function* () {
          yield this.activateView();
          const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_CLAUDE_CODE);
          if (leaves.length > 0) {
            const view = leaves[0].view;
            const checkbox = view.containerEl.querySelector('.claude-code-options input[type="checkbox"]');
            if (checkbox) {
              checkbox.checked = true;
            }
          }
        })
      });
      this.addSettingTab(new ClaudeCodeSettingTab(this.app, this));
    });
  }
  onunload() {
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
      const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_CLAUDE_CODE);
      leaves.forEach((leaf) => {
        const view = leaf.view;
        view.updateSettings();
      });
    });
  }
  activateView() {
    return __async(this, null, function* () {
      const { workspace } = this.app;
      let leaf = null;
      const leaves = workspace.getLeavesOfType(VIEW_TYPE_CLAUDE_CODE);
      if (leaves.length > 0) {
        leaf = leaves[0];
      } else {
        leaf = workspace.getRightLeaf(false);
        yield leaf == null ? void 0 : leaf.setViewState({ type: VIEW_TYPE_CLAUDE_CODE, active: true });
      }
      if (leaf) {
        void workspace.revealLeaf(leaf);
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL3VpL3ZpZXcudHMiLCAic3JjL2NvcmUvdHlwZXMudHMiLCAic3JjL2kxOG4vbG9jYWxlcy9lbi50cyIsICJzcmMvaTE4bi9sb2NhbGVzL3poLnRzIiwgInNyYy9pMThuL2xvY2FsZXMvZXMudHMiLCAic3JjL2kxOG4vbG9jYWxlcy9kZS50cyIsICJzcmMvaTE4bi9sb2NhbGVzL3B0LnRzIiwgInNyYy9pMThuL2luZGV4LnRzIiwgInNyYy91aS91aS1idWlsZGVyLnRzIiwgInNyYy91aS9vdXRwdXQtcmVuZGVyZXIudHMiLCAic3JjL3VpL3BhcnNlcnMvYWdlbnQtYWN0aXZpdHktcGFyc2VyLnRzIiwgInNyYy91aS9hZ2VudC1hY3Rpdml0eS10cmFja2VyLnRzIiwgInNyYy9tYW5hZ2Vycy9ub3RlLWNvbnRleHQtbWFuYWdlci50cyIsICJzcmMvY29yZS9jbGF1ZGUtY29kZS1ydW5uZXIudHMiLCAic3JjL2NvcmUvc3RyZWFtaW5nL3Rvb2wtb3V0cHV0LWZvcm1hdHRlci50cyIsICJzcmMvY29yZS9zdHJlYW1pbmcvc3RyZWFtLWV2ZW50LXByb2Nlc3Nvci50cyIsICJzcmMvY29yZS9zZXNzaW9uLW1hbmFnZXIudHMiLCAic3JjL2NvcmUvcHJvbXB0LWJ1aWxkZXIudHMiLCAic3JjL2NvcmUvY2xpLWFyZ3MtYnVpbGRlci50cyIsICJzcmMvY29yZS9wcm9jZXNzLXNwYXduZXIudHMiLCAic3JjL2NvcmUvcmVzcG9uc2UtcGFyc2VyLnRzIiwgInNyYy9jb3JlL3N0cmVhbWluZy9yZXNwb25zZS1jb250ZW50LWV4dHJhY3Rvci50cyIsICJzcmMvdWkvcGFyc2Vycy9vdXRwdXQtc3RhdHVzLW1hbmFnZXIudHMiLCAic3JjL3VpL3JlbmRlcmVycy9kaWZmLWdlbmVyYXRvci50cyIsICJzcmMvdWkvdG9vbC1jYWxsLXRyYWNrZXIudHMiLCAic3JjL3VpL2NvbXBvbmVudHMvdG9vbC1jYWxsLWRpc3BsYXkudHMiLCAic3JjL3VpL3N0cmVhbWluZy1yZW5kZXJlci50cyIsICJzcmMvY29yZS9zZXR0aW5ncy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGx1Z2luLCBXb3Jrc3BhY2VMZWFmIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgQ2xhdWRlQ29kZVZpZXcgfSBmcm9tICcuL3VpL3ZpZXcnO1xuaW1wb3J0IHsgVklFV19UWVBFX0NMQVVERV9DT0RFIH0gZnJvbSAnLi9jb3JlL3R5cGVzJztcbmltcG9ydCB7IENsYXVkZUNvZGVTZXR0aW5ncywgREVGQVVMVF9TRVRUSU5HUywgQ2xhdWRlQ29kZVNldHRpbmdUYWIgfSBmcm9tICcuL2NvcmUvc2V0dGluZ3MnO1xuaW1wb3J0IHsgaW5pdEkxOG4gfSBmcm9tICcuL2kxOG4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGF1ZGVDb2RlUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgICBzZXR0aW5nczogQ2xhdWRlQ29kZVNldHRpbmdzO1xuXG4gICAgYXN5bmMgb25sb2FkKCkge1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgaTE4biB3aXRoIHNhdmVkIGxhbmd1YWdlIHByZWZlcmVuY2VcbiAgICAgICAgaW5pdEkxOG4odGhpcy5zZXR0aW5ncy5sYW5ndWFnZSk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgdGhlIENsYXVkZSBDb2RlIHZpZXdcbiAgICAgICAgdGhpcy5yZWdpc3RlclZpZXcoXG4gICAgICAgICAgICBWSUVXX1RZUEVfQ0xBVURFX0NPREUsXG4gICAgICAgICAgICAobGVhZikgPT4gbmV3IENsYXVkZUNvZGVWaWV3KGxlYWYsIHRoaXMpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQWRkIHJpYmJvbiBpY29uXG4gICAgICAgIHRoaXMuYWRkUmliYm9uSWNvbignYm90JywgJ09wZW4gQ2xhdWRlIENvZGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB2b2lkIHRoaXMuYWN0aXZhdGVWaWV3KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBjb21tYW5kIHRvIG9wZW4gQ2xhdWRlIENvZGUgdmlld1xuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6ICdvcGVuLWNsYXVkZS1jb2RlLXZpZXcnLFxuICAgICAgICAgICAgbmFtZTogJ09wZW4gQ2xhdWRlIENvZGUgcGFuZWwnLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB2b2lkIHRoaXMuYWN0aXZhdGVWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBjb21tYW5kIHRvIHJ1biBDbGF1ZGUgQ29kZSBvbiBjdXJyZW50IG5vdGVcbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiAncnVuLWNsYXVkZS1jb2RlLXF1aWNrJyxcbiAgICAgICAgICAgIG5hbWU6ICdRdWljayBydW4gQ2xhdWRlIENvZGUgKHdpdGggZGVmYXVsdCBwcm9tcHQpJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hY3RpdmF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAvLyBUaGUgdmlldyB3aWxsIGJlIHJlYWR5IGZvciB1c2VyIGlucHV0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBjb21tYW5kIHRvIHJ1biBDbGF1ZGUgQ29kZSBvbiBzZWxlY3RlZCB0ZXh0XG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogJ3J1bi1jbGF1ZGUtY29kZS1zZWxlY3Rpb24nLFxuICAgICAgICAgICAgbmFtZTogJ1J1biBDbGF1ZGUgQ29kZSBvbiBzZWxlY3RlZCB0ZXh0JyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hY3RpdmF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWF2ZXMgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9DTEFVREVfQ09ERSk7XG4gICAgICAgICAgICAgICAgaWYgKGxlYXZlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBsZWF2ZXNbMF0udmlldyBhcyBDbGF1ZGVDb2RlVmlldztcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIFwic2VsZWN0ZWQgdGV4dCBvbmx5XCIgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdmlldy5jb250YWluZXJFbC5xdWVyeVNlbGVjdG9yKCcuY2xhdWRlLWNvZGUtb3B0aW9ucyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgc2V0dGluZ3MgdGFiXG4gICAgICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgQ2xhdWRlQ29kZVNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbnVubG9hZCgpIHtcbiAgICAgICAgLy8gVmlld3MgYXJlIGNsZWFuZWQgdXAgYXV0b21hdGljYWxseSB3aGVuIHRoZSBwbHVnaW4gaXMgdW5sb2FkZWRcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkgYXMgQ2xhdWRlQ29kZVNldHRpbmdzIHwgdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHNldHRpbmdzIGluIGFsbCBhY3RpdmUgQ2xhdWRlIENvZGUgdmlld3NcbiAgICAgICAgY29uc3QgbGVhdmVzID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfQ0xBVURFX0NPREUpO1xuICAgICAgICBsZWF2ZXMuZm9yRWFjaChsZWFmID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXcgYXMgQ2xhdWRlQ29kZVZpZXc7XG4gICAgICAgICAgICB2aWV3LnVwZGF0ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGFjdGl2YXRlVmlldygpIHtcbiAgICAgICAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHRoaXMuYXBwO1xuXG4gICAgICAgIGxldCBsZWFmOiBXb3Jrc3BhY2VMZWFmIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGNvbnN0IGxlYXZlcyA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX0NMQVVERV9DT0RFKTtcblxuICAgICAgICBpZiAobGVhdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEEgbGVhZiB3aXRoIG91ciB2aWV3IGFscmVhZHkgZXhpc3RzLCB1c2UgdGhhdFxuICAgICAgICAgICAgbGVhZiA9IGxlYXZlc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBsZWFmIGluIHRoZSByaWdodCBzaWRlYmFyXG4gICAgICAgICAgICBsZWFmID0gd29ya3NwYWNlLmdldFJpZ2h0TGVhZihmYWxzZSk7XG4gICAgICAgICAgICBhd2FpdCBsZWFmPy5zZXRWaWV3U3RhdGUoeyB0eXBlOiBWSUVXX1RZUEVfQ0xBVURFX0NPREUsIGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldmVhbCB0aGUgbGVhZiBpbiBjYXNlIGl0J3MgaW4gYSBjb2xsYXBzZWQgc2lkZWJhclxuICAgICAgICBpZiAobGVhZikge1xuICAgICAgICAgICAgdm9pZCB3b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsICIvKipcbiAqIENsYXVkZSBDb2RlIFZpZXcgLSBSZWZhY3RvcmVkIHRvIHVzZSBtb2R1bGFyIGNvbXBvbmVudHNcbiAqL1xuXG5pbXBvcnQgeyBJdGVtVmlldywgV29ya3NwYWNlTGVhZiwgTWFya2Rvd25WaWV3LCBOb3RpY2UsIE1hcmtkb3duUmVuZGVyZXIsIEVkaXRvciwgRmlsZVN5c3RlbUFkYXB0ZXIgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgQ2xhdWRlQ29kZVBsdWdpbiBmcm9tICcuLi9tYWluJztcbmltcG9ydCB7IENsYXVkZUNvZGVSZXF1ZXN0IH0gZnJvbSAnLi4vY29yZS9jbGF1ZGUtY29kZS1ydW5uZXInO1xuaW1wb3J0IHsgVklFV19UWVBFX0NMQVVERV9DT0RFLCBTZXNzaW9uSGlzdG9yeUl0ZW0sIE5vdGVDb250ZXh0IH0gZnJvbSAnLi4vY29yZS90eXBlcyc7XG5pbXBvcnQgeyBVSUJ1aWxkZXIgfSBmcm9tICcuL3VpLWJ1aWxkZXInO1xuaW1wb3J0IHsgdCB9IGZyb20gJy4uL2kxOG4nO1xuXG4vKiogSW50ZXJmYWNlIGZvciBzdHJlYW1pbmcgZWxlbWVudCB3aXRoIGFjY3VtdWxhdGVkIHRleHQgKi9cbmludGVyZmFjZSBTdHJlYW1pbmdFbGVtZW50RGF0YSB7XG4gICAgYWNjdW11bGF0ZWRUZXh0OiBzdHJpbmc7XG4gICAgZnVsbFRleHQ/OiBzdHJpbmc7XG59XG5cbi8qKiBJbnRlcmZhY2UgZm9yIHBhcnNlZCB0b29sIGlucHV0IHdpdGggdG9kb3MgKi9cbmludGVyZmFjZSBUb2RvVG9vbElucHV0IHtcbiAgICB0b2Rvcz86IEFycmF5PHsgY29udGVudDogc3RyaW5nOyBzdGF0dXM6IHN0cmluZzsgYWN0aXZlRm9ybTogc3RyaW5nIH0+O1xufVxuaW1wb3J0IHsgT3V0cHV0UmVuZGVyZXIgfSBmcm9tICcuL291dHB1dC1yZW5kZXJlcic7XG5pbXBvcnQgeyBBZ2VudEFjdGl2aXR5VHJhY2tlciB9IGZyb20gJy4vYWdlbnQtYWN0aXZpdHktdHJhY2tlcic7XG5pbXBvcnQgeyBOb3RlQ29udGV4dE1hbmFnZXIgfSBmcm9tICcuLi9tYW5hZ2Vycy9ub3RlLWNvbnRleHQtbWFuYWdlcic7XG5pbXBvcnQgeyBPdXRwdXRTdGF0dXNNYW5hZ2VyIH0gZnJvbSAnLi9wYXJzZXJzL291dHB1dC1zdGF0dXMtbWFuYWdlcic7XG5pbXBvcnQgeyBEaWZmR2VuZXJhdG9yIH0gZnJvbSAnLi9yZW5kZXJlcnMvZGlmZi1nZW5lcmF0b3InO1xuaW1wb3J0IHsgVG9vbENhbGxUcmFja2VyIH0gZnJvbSAnLi90b29sLWNhbGwtdHJhY2tlcic7XG5pbXBvcnQgeyBUb29sQ2FsbERpc3BsYXkgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9vbC1jYWxsLWRpc3BsYXknO1xuaW1wb3J0IHsgU3RyZWFtaW5nUmVuZGVyZXIgfSBmcm9tICcuL3N0cmVhbWluZy1yZW5kZXJlcic7XG5cbmV4cG9ydCBjbGFzcyBDbGF1ZGVDb2RlVmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcbiAgICBwbHVnaW46IENsYXVkZUNvZGVQbHVnaW47XG5cbiAgICAvLyBVSSBFbGVtZW50cyAocmVmZXJlbmNlcylcbiAgICBwcml2YXRlIHByb21wdElucHV0OiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIHByaXZhdGUgcnVuQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcml2YXRlIGNhbmNlbEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBvdXRwdXRBcmVhOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIG91dHB1dFNlY3Rpb246IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgcmVzdWx0QXJlYTogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYXN0UHJvbXB0QXJlYTogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIGhpdEZpbmFsQ29udGVudE1hcmtlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgdXNlckhhc1Njcm9sbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBsYXN0UmVuZGVyZWRUZXh0OiBzdHJpbmcgPSAnJzsgLy8gVHJhY2sgd2hhdCB3ZSd2ZSBhbHJlYWR5IHJlbmRlcmVkXG4gICAgcHJpdmF0ZSBwcmV2aWV3QXJlYTogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBwcmV2aWV3Q29udGVudENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZFRleHRPbmx5Q2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBhdXRvQWNjZXB0Q2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb252ZXJzYXRpb25hbE1vZGVDaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIG1vZGVsU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIGN1cnJlbnROb3RlTGFiZWw6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgc3RhdHVzSW5kaWNhdG9yOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHN0YXR1c1RleHQ6IEhUTUxTcGFuRWxlbWVudDtcbiAgICBwcml2YXRlIHBlcm1pc3Npb25BcHByb3ZhbFNlY3Rpb246IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgaGlzdG9yeUxpc3Q6IEhUTUxVTGlzdEVsZW1lbnQ7XG5cbiAgICAvLyBNYW5hZ2VycyBhbmQgUmVuZGVyZXJzXG4gICAgcHJpdmF0ZSBjb250ZXh0TWFuYWdlcjogTm90ZUNvbnRleHRNYW5hZ2VyO1xuICAgIHByaXZhdGUgb3V0cHV0UmVuZGVyZXI6IE91dHB1dFJlbmRlcmVyO1xuICAgIHByaXZhdGUgYWdlbnRUcmFja2VyOiBBZ2VudEFjdGl2aXR5VHJhY2tlcjtcbiAgICBwcml2YXRlIHRvb2xDYWxsVHJhY2tlcjogVG9vbENhbGxUcmFja2VyO1xuICAgIHByaXZhdGUgdG9vbENhbGxEaXNwbGF5OiBUb29sQ2FsbERpc3BsYXkgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIHN0cmVhbWluZ1JlbmRlcmVyOiBTdHJlYW1pbmdSZW5kZXJlciB8IG51bGwgPSBudWxsO1xuXG4gICAgLy8gU3RhdGVcbiAgICBwcml2YXRlIGN1cnJlbnROb3RlUGF0aDogc3RyaW5nID0gJyc7XG5cbiAgICAvLyBUb29sIHRpbWluZyB0cmFja2luZ1xuICAgIHByaXZhdGUgdG9vbFN0YXJ0VGltZXM6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKCk7XG4gICAgcHJpdmF0ZSBsYXN0VG9vbEtleTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgICAvLyBFeGVjdXRpb24gdGltaW5nIHRyYWNraW5nIChpbnRlcnZhbCBpcyB2aWV3LWxldmVsLCBidXQgc3RhcnQgdGltZSBpcyBwZXItbm90ZSBpbiBjb250ZXh0KVxuICAgIHByaXZhdGUgZWxhcHNlZFRpbWVJbnRlcnZhbDogTm9kZUpTLlRpbWVvdXQgfCBudWxsID0gbnVsbDtcblxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGNsZWFudXAgdHJhY2tpbmdcbiAgICBwcml2YXRlIGV2ZW50TGlzdGVuZXJzOiBBcnJheTx7XG4gICAgICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgV2luZG93O1xuICAgICAgICBldmVudDogc3RyaW5nO1xuICAgICAgICBoYW5kbGVyOiBFdmVudExpc3RlbmVyO1xuICAgIH0+ID0gW107XG4gICAgcHJpdmF0ZSBwcm9tcHRJbnB1dEtleWRvd25IYW5kbGVyOiAoKGU6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IENsYXVkZUNvZGVQbHVnaW4pIHtcbiAgICAgICAgc3VwZXIobGVhZik7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgbWFuYWdlcnNcbiAgICAgICAgdGhpcy5jb250ZXh0TWFuYWdlciA9IG5ldyBOb3RlQ29udGV4dE1hbmFnZXIoXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncyxcbiAgICAgICAgICAgIGAke3RoaXMuYXBwLnZhdWx0LmNvbmZpZ0Rpcn0vY2xhdWRlLWNvZGUtc2Vzc2lvbnNgXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYWdlbnRUcmFja2VyID0gbmV3IEFnZW50QWN0aXZpdHlUcmFja2VyKCk7XG4gICAgICAgIHRoaXMudG9vbENhbGxUcmFja2VyID0gbmV3IFRvb2xDYWxsVHJhY2tlcigpO1xuXG4gICAgICAgIC8vIExpc3RlbiBmb3IgYWN0aXZlIGZpbGUgY2hhbmdlc1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2FjdGl2ZS1sZWFmLWNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWN0aXZlTm90ZUNoYW5nZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gVklFV19UWVBFX0NMQVVERV9DT0RFO1xuICAgIH1cblxuICAgIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnQ2xhdWRlIENvZGUnO1xuICAgIH1cblxuICAgIGdldEljb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdib3QnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdG9vbCBjYWxsIHRyYWNrZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBnZXRUb29sQ2FsbFRyYWNrZXIoKTogVG9vbENhbGxUcmFja2VyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9vbENhbGxUcmFja2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc3RyZWFtaW5nIHJlbmRlcmVyIGluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0U3RyZWFtaW5nUmVuZGVyZXIoKTogU3RyZWFtaW5nUmVuZGVyZXIgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtaW5nUmVuZGVyZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgb25PcGVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lckVsLmNoaWxkcmVuWzFdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb250YWluZXIuZW1wdHkoKTtcbiAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKCdjbGF1ZGUtY29kZS12aWV3Jyk7XG5cbiAgICAgICAgLy8gTG9hZCBwZXJzaXN0ZWQgY29udGV4dHMgZnJvbSBkaXNrXG4gICAgICAgIGNvbnN0IHZhdWx0UGF0aCA9ICh0aGlzLmFwcC52YXVsdC5hZGFwdGVyIGFzIEZpbGVTeXN0ZW1BZGFwdGVyKS5nZXRCYXNlUGF0aCgpO1xuICAgICAgICBpZiAodmF1bHRQYXRoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRNYW5hZ2VyLmxvYWRDb250ZXh0cyh2YXVsdFBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGN1cnJlbnQgYWN0aXZlIG5vdGVcbiAgICAgICAgY29uc3QgYWN0aXZlRmlsZSA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCk7XG4gICAgICAgIGlmIChhY3RpdmVGaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb3RlUGF0aCA9IGFjdGl2ZUZpbGUucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJ1aWxkIFVJIHVzaW5nIG1vZHVsYXIgY29tcG9uZW50c1xuICAgICAgICB0aGlzLmJ1aWxkVUkoY29udGFpbmVyKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIG91dHB1dCByZW5kZXJlciBub3cgdGhhdCBvdXRwdXRBcmVhIGV4aXN0c1xuICAgICAgICB0aGlzLm91dHB1dFJlbmRlcmVyID0gbmV3IE91dHB1dFJlbmRlcmVyKHRoaXMub3V0cHV0QXJlYSwgdGhpcywgdGhpcy5hcHAsIHRoaXMuY3VycmVudE5vdGVQYXRoLCB0aGlzLm91dHB1dFNlY3Rpb24pO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgc3RyZWFtaW5nIHJlbmRlcmVyIGZvciBXZWJTb2NrZXQgbW9kZVxuICAgICAgICB0aGlzLnN0cmVhbWluZ1JlbmRlcmVyID0gbmV3IFN0cmVhbWluZ1JlbmRlcmVyKHRoaXMsIHRoaXMub3V0cHV0QXJlYSk7XG5cbiAgICAgICAgLy8gTG9hZCBjb250ZXh0IGZvciBjdXJyZW50IG5vdGVcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE5vdGVQYXRoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWROb3RlQ29udGV4dCh0aGlzLmN1cnJlbnROb3RlUGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgZW50aXJlIFVJIHVzaW5nIG1vZHVsYXIgY29tcG9uZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgYnVpbGRVSShjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIC8vIEhlYWRlclxuICAgICAgICB0aGlzLmN1cnJlbnROb3RlTGFiZWwgPSBVSUJ1aWxkZXIuYnVpbGRIZWFkZXIoY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50Tm90ZUxhYmVsKCk7XG5cbiAgICAgICAgLy8gSW5wdXQgc2VjdGlvblxuICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnRzID0gVUlCdWlsZGVyLmJ1aWxkSW5wdXRTZWN0aW9uKFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b0FjY2VwdENoYW5nZXMsXG4gICAgICAgICAgICAoKSA9PiB2b2lkIHRoaXMuaGFuZGxlUnVuQ2xhdWRlQ29kZSgpLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5oYW5kbGVDYW5jZWwoKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb21wdElucHV0ID0gaW5wdXRFbGVtZW50cy5wcm9tcHRJbnB1dDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRleHRPbmx5Q2hlY2tib3ggPSBpbnB1dEVsZW1lbnRzLnNlbGVjdGVkVGV4dE9ubHlDaGVja2JveDtcbiAgICAgICAgdGhpcy5hdXRvQWNjZXB0Q2hlY2tib3ggPSBpbnB1dEVsZW1lbnRzLmF1dG9BY2NlcHRDaGVja2JveDtcbiAgICAgICAgdGhpcy5jb252ZXJzYXRpb25hbE1vZGVDaGVja2JveCA9IGlucHV0RWxlbWVudHMuY29udmVyc2F0aW9uYWxNb2RlQ2hlY2tib3g7XG4gICAgICAgIHRoaXMubW9kZWxTZWxlY3QgPSBpbnB1dEVsZW1lbnRzLm1vZGVsU2VsZWN0O1xuICAgICAgICB0aGlzLnJ1bkJ1dHRvbiA9IGlucHV0RWxlbWVudHMucnVuQnV0dG9uO1xuICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGlucHV0RWxlbWVudHMuY2FuY2VsQnV0dG9uO1xuXG4gICAgICAgIC8vIFdoZW4gY29udmVyc2F0aW9uYWwgbW9kZSBpcyB0b2dnbGVkLCBkaXNhYmxlIGZpbGUtcmVsYXRlZCBvcHRpb25zXG4gICAgICAgIHRoaXMuY29udmVyc2F0aW9uYWxNb2RlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDb252ZXJzYXRpb25hbCA9IHRoaXMuY29udmVyc2F0aW9uYWxNb2RlQ2hlY2tib3guY2hlY2tlZDtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0T25seUNoZWNrYm94LmRpc2FibGVkID0gaXNDb252ZXJzYXRpb25hbDtcbiAgICAgICAgICAgIHRoaXMuYXV0b0FjY2VwdENoZWNrYm94LmRpc2FibGVkID0gaXNDb252ZXJzYXRpb25hbDtcbiAgICAgICAgICAgIGlmIChpc0NvbnZlcnNhdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHRPbmx5Q2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b0FjY2VwdENoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE5vdGU6IHN0YXR1c0luZGljYXRvciBhbmQgc3RhdHVzVGV4dCBhcmUgbm93IHBhcnQgb2YgUmVzdWx0IHNlY3Rpb24gKHNlZSBiZWxvdylcblxuICAgICAgICAvLyBTYXZlIG1vZGVsIHNlbGVjdGlvbiB3aGVuIGNoYW5nZWRcbiAgICAgICAgdGhpcy5tb2RlbFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDdXJyZW50Q29udGV4dCgpO1xuICAgICAgICAgICAgY29udGV4dC5zZWxlY3RlZE1vZGVsID0gdGhpcy5tb2RlbFNlbGVjdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGtleWJvYXJkIHNob3J0Y3V0IHRvIHByb21wdCBpbnB1dFxuICAgICAgICB0aGlzLnByb21wdElucHV0S2V5ZG93bkhhbmRsZXIgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmICFlLnNoaWZ0S2V5ICYmICFlLmN0cmxLZXkgJiYgIWUubWV0YUtleSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2b2lkIHRoaXMuaGFuZGxlUnVuQ2xhdWRlQ29kZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnByb21wdElucHV0LnNlbGVjdGlvblN0YXJ0ID8/IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gdGhpcy5wcm9tcHRJbnB1dC5zZWxlY3Rpb25FbmQgPz8gMDtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvbXB0SW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRJbnB1dC52YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBzdGFydCkgKyAnXFxuJyArIHZhbHVlLnN1YnN0cmluZyhlbmQpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0SW5wdXQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLnByb21wdElucHV0LnNlbGVjdGlvbkVuZCA9IHN0YXJ0ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wcm9tcHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5wcm9tcHRJbnB1dEtleWRvd25IYW5kbGVyKTtcblxuICAgICAgICAvLyBJbnRlcmFjdGl2ZSBwcm9tcHQgc2VjdGlvblxuICAgICAgICAgVUlCdWlsZGVyLmJ1aWxkSW50ZXJhY3RpdmVQcm9tcHRTZWN0aW9uKFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB0aGlzLnJlc3BvbmRUb1Byb21wdChyZXNwb25zZSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBSZXN1bHQgc2VjdGlvbiAoZmlyc3QpIC0gaW5jbHVkZXMgc3RhdHVzIGluZGljYXRvclxuICAgICAgICBjb25zdCByZXN1bHRFbGVtZW50cyA9IFVJQnVpbGRlci5idWlsZFJlc3VsdFNlY3Rpb24oY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5yZXN1bHRBcmVhID0gcmVzdWx0RWxlbWVudHMucmVzdWx0QXJlYTtcbiAgICAgICAgdGhpcy5zdGF0dXNJbmRpY2F0b3IgPSByZXN1bHRFbGVtZW50cy5zdGF0dXNBcmVhO1xuICAgICAgICB0aGlzLnN0YXR1c1RleHQgPSByZXN1bHRFbGVtZW50cy5zdGF0dXNUZXh0O1xuICAgICAgICB0aGlzLmxhc3RQcm9tcHRBcmVhID0gcmVzdWx0RWxlbWVudHMubGFzdFByb21wdEFyZWE7XG5cbiAgICAgICAgLy8gU2V0dXAgc21hcnQgYXV0by1zY3JvbGwgZGV0ZWN0aW9uXG4gICAgICAgIHRoaXMuc2V0dXBTbWFydEF1dG9TY3JvbGwoKTtcblxuICAgICAgICAvLyBQZXJtaXNzaW9uIGFwcHJvdmFsIHNlY3Rpb24gKGFmdGVyIHJlc3VsdClcbiAgICAgICAgY29uc3QgcGVybWlzc2lvbkVsZW1lbnRzID0gVUlCdWlsZGVyLmJ1aWxkUGVybWlzc2lvbkFwcHJvdmFsU2VjdGlvbihcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgICgpID0+IHZvaWQgdGhpcy5oYW5kbGVBcHByb3ZlUGVybWlzc2lvbigpLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5oYW5kbGVEZW55UGVybWlzc2lvbigpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucGVybWlzc2lvbkFwcHJvdmFsU2VjdGlvbiA9IHBlcm1pc3Npb25FbGVtZW50cy5wZXJtaXNzaW9uQXBwcm92YWxTZWN0aW9uO1xuXG4gICAgICAgIC8vIFByZXZpZXcgc2VjdGlvbiAoc2Vjb25kIC0gYWZ0ZXIgcmVzdWx0KVxuICAgICAgICBjb25zdCBwcmV2aWV3RWxlbWVudHMgPSBVSUJ1aWxkZXIuYnVpbGRQcmV2aWV3U2VjdGlvbihcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgICgpID0+IHRoaXMuaGFuZGxlQXBwbHlDaGFuZ2VzKCksXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmhhbmRsZVJlamVjdENoYW5nZXMoKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByZXZpZXdBcmVhID0gcHJldmlld0VsZW1lbnRzLnByZXZpZXdBcmVhO1xuICAgICAgICB0aGlzLnByZXZpZXdDb250ZW50Q29udGFpbmVyID0gcHJldmlld0VsZW1lbnRzLnByZXZpZXdDb250ZW50Q29udGFpbmVyO1xuXG4gICAgICAgIC8vIENvbWJpbmVkIGFnZW50IHNlY3Rpb24gKHBsYW4gKyBhY3Rpdml0eSkgKHRoaXJkKVxuICAgICAgICBVSUJ1aWxkZXIuYnVpbGRBZ2VudFNlY3Rpb24oY29udGFpbmVyKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIGFnZW50IHRyYWNrZXIgd2l0aCB0aGUgYWN0aXZpdHkgY29sdW1uXG4gICAgICAgIGNvbnN0IGFjdGl2aXR5Q29sdW1uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jbGF1ZGUtY29kZS1hY3Rpdml0eS1jb2x1bW4nKTtcbiAgICAgICAgaWYgKGFjdGl2aXR5Q29sdW1uKSB7XG4gICAgICAgICAgICB0aGlzLmFnZW50VHJhY2tlci5pbml0aWFsaXplKGFjdGl2aXR5Q29sdW1uIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvb2wgQ2FsbCBEaXNwbGF5IHNlY3Rpb24gKGZvdXJ0aClcbiAgICAgICAgY29uc3QgdG9vbENhbGxTZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS10b29sLWNhbGwtc2VjdGlvbidcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG9vbENhbGxEaXNwbGF5ID0gbmV3IFRvb2xDYWxsRGlzcGxheSh0b29sQ2FsbFNlY3Rpb24sIHRoaXMudG9vbENhbGxUcmFja2VyKTtcblxuICAgICAgICAvLyBPdXRwdXQgc2VjdGlvbiAoZmlmdGgpXG4gICAgICAgIGNvbnN0IG91dHB1dFNlY3Rpb25SZXN1bHQgPSBVSUJ1aWxkZXIuYnVpbGRPdXRwdXRTZWN0aW9uKGNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMub3V0cHV0QXJlYSA9IG91dHB1dFNlY3Rpb25SZXN1bHQub3V0cHV0QXJlYTtcbiAgICAgICAgdGhpcy5vdXRwdXRTZWN0aW9uID0gb3V0cHV0U2VjdGlvblJlc3VsdC5vdXRwdXRTZWN0aW9uO1xuXG4gICAgICAgIC8vIEhpc3Rvcnkgc2VjdGlvbiAoc2l4dGgpXG4gICAgICAgIHRoaXMuaGlzdG9yeUxpc3QgPSBVSUJ1aWxkZXIuYnVpbGRIaXN0b3J5U2VjdGlvbihcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgICgpID0+IHRoaXMuY2xlYXJIaXN0b3J5KClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgbm90ZSBsYWJlbFxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlQ3VycmVudE5vdGVMYWJlbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE5vdGVQYXRoKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHRoaXMuY3VycmVudE5vdGVQYXRoLnNwbGl0KCcvJykucG9wKCkgfHwgJ1Vua25vd24nO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dE1hbmFnZXIuZ2V0Q29udGV4dCh0aGlzLmN1cnJlbnROb3RlUGF0aCk7XG4gICAgICAgICAgICBjb25zdCBydW5uaW5nSW5kaWNhdG9yID0gY29udGV4dC5pc1J1bm5pbmcgPyAnIFx1RDgzRFx1REQwNCcgOiAnJztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vdGVMYWJlbC50ZXh0Q29udGVudCA9IGBcdUQ4M0RcdURDREQgJHtmaWxlTmFtZX0ke3J1bm5pbmdJbmRpY2F0b3J9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vdGVMYWJlbC50ZXh0Q29udGVudCA9ICdcdUQ4M0RcdURDREQgJyArIHQoJ2hlYWRlci5ub05vdGVTZWxlY3RlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdyBjb3VudCBvZiBvdGhlciBydW5uaW5nIHByb2Nlc3Nlc1xuICAgICAgICB0aGlzLnVwZGF0ZVJ1bm5pbmdJbmRpY2F0b3IoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGluZGljYXRvciBzaG93aW5nIGhvdyBtYW55IG90aGVyIG5vdGVzIGhhdmUgcnVubmluZyBwcm9jZXNzZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVJ1bm5pbmdJbmRpY2F0b3IoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJ1bm5pbmdQYXRocyA9IHRoaXMuY29udGV4dE1hbmFnZXIuZ2V0UnVubmluZ05vdGVQYXRocygpO1xuICAgICAgICBjb25zdCBvdGhlclJ1bm5pbmcgPSBydW5uaW5nUGF0aHMuZmlsdGVyKHAgPT4gcCAhPT0gdGhpcy5jdXJyZW50Tm90ZVBhdGgpO1xuXG4gICAgICAgIC8vIEZpbmQgb3IgY3JlYXRlIGluZGljYXRvciBlbGVtZW50XG4gICAgICAgIGxldCBpbmRpY2F0b3IgPSB0aGlzLmN1cnJlbnROb3RlTGFiZWwucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcignLmNsYXVkZS1jb2RlLXJ1bm5pbmctaW5kaWNhdG9yJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKG90aGVyUnVubmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIWluZGljYXRvcikge1xuICAgICAgICAgICAgICAgIGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3IuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLXJ1bm5pbmctaW5kaWNhdG9yJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm90ZUxhYmVsLnBhcmVudEVsZW1lbnQ/LmFwcGVuZENoaWxkKGluZGljYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBub3RlTmFtZXMgPSBvdGhlclJ1bm5pbmcubWFwKHAgPT4gcC5zcGxpdCgnLycpLnBvcCgpIHx8ICdVbmtub3duJykuam9pbignLCAnKTtcbiAgICAgICAgICAgIGluZGljYXRvci50ZXh0Q29udGVudCA9IGAgKCR7b3RoZXJSdW5uaW5nLmxlbmd0aH0gb3RoZXIgcnVubmluZylgO1xuICAgICAgICAgICAgaW5kaWNhdG9yLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBgUnVubmluZzogJHtub3RlTmFtZXN9YCk7XG4gICAgICAgICAgICBpbmRpY2F0b3IucmVtb3ZlQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGljYXRvcikge1xuICAgICAgICAgICAgaW5kaWNhdG9yLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhY3RpdmUgbm90ZSBjaGFuZ2VcbiAgICAgKi9cbiAgICBwcml2YXRlIG9uQWN0aXZlTm90ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYWN0aXZlRmlsZSA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCk7XG4gICAgICAgIGlmIChhY3RpdmVGaWxlICYmIGFjdGl2ZUZpbGUucGF0aCAhPT0gdGhpcy5jdXJyZW50Tm90ZVBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vdGVQYXRoID0gYWN0aXZlRmlsZS5wYXRoO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50Tm90ZUxhYmVsKCk7XG4gICAgICAgICAgICB0aGlzLmxvYWROb3RlQ29udGV4dCh0aGlzLmN1cnJlbnROb3RlUGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGNvbnRleHQgZm9yIGEgc3BlY2lmaWMgbm90ZVxuICAgICAqL1xuICAgIHByaXZhdGUgbG9hZE5vdGVDb250ZXh0KG5vdGVQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dE1hbmFnZXIuZ2V0Q29udGV4dChub3RlUGF0aCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIG91dHB1dCByZW5kZXJlciB3aXRoIG5ldyBub3RlIHBhdGhcbiAgICAgICAgdGhpcy5vdXRwdXRSZW5kZXJlcj8uc2V0Tm90ZVBhdGgobm90ZVBhdGgpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgb3V0cHV0XG4gICAgICAgIHRoaXMub3V0cHV0UmVuZGVyZXI/LmNsZWFyKCk7XG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBjb250ZXh0Lm91dHB1dExpbmVzKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dFJlbmRlcmVyPy5hcHBlbmRMaW5lKGxpbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzdG9yZSBhZ2VudCBhY3Rpdml0eVxuICAgICAgICB0aGlzLmFnZW50VHJhY2tlci5yZXN0b3JlKGNvbnRleHQuYWdlbnRTdGVwcyk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB0b2RvcyBmcm9tIG91dHB1dFxuICAgICAgICBjb25zb2xlLmRlYnVnKCdbTG9hZCBOb3RlIENvbnRleHRdIE91dHB1dCBsaW5lcyBjb3VudDonLCBjb250ZXh0Lm91dHB1dExpbmVzLmxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1tMb2FkIE5vdGUgQ29udGV4dF0gQWdlbnQgc3RlcHMgY291bnQ6JywgY29udGV4dC5hZ2VudFN0ZXBzLmxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1tMb2FkIE5vdGUgQ29udGV4dF0gaXNSdW5uaW5nOicsIGNvbnRleHQuaXNSdW5uaW5nKTtcblxuICAgICAgICBpZiAoY29udGV4dC5vdXRwdXRMaW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gcGFyc2UgdG9kb3MgZnJvbSB0aGUgcmVzdG9yZWQgb3V0cHV0XG4gICAgICAgICAgICB0aGlzLnBhcnNlVG9kb3NGcm9tT3V0cHV0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBObyBvdXRwdXQsIGNsZWFyIHRoZSB0b2RvIGxpc3RcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tMb2FkIE5vdGUgQ29udGV4dF0gQ2xlYXJpbmcgdG9kbyBsaXN0IC0gbm8gb3V0cHV0Jyk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyVG9kb0xpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBoaXN0b3J5XG4gICAgICAgIHRoaXMudXBkYXRlSGlzdG9yeURpc3BsYXkoY29udGV4dC5oaXN0b3J5KTtcblxuICAgICAgICAvLyBSZXN0b3JlIG1vZGVsIHNlbGVjdGlvblxuICAgICAgICBpZiAoY29udGV4dC5zZWxlY3RlZE1vZGVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWxTZWxlY3QudmFsdWUgPSBjb250ZXh0LnNlbGVjdGVkTW9kZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsU2VsZWN0LnZhbHVlID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MubW9kZWxBbGlhcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc3RvcmUgbGFzdCBwcm9tcHQgaWYgYXZhaWxhYmxlXG4gICAgICAgIGlmIChjb250ZXh0Lmxhc3RQcm9tcHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xhc3RQcm9tcHQoY29udGV4dC5sYXN0UHJvbXB0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUxhc3RQcm9tcHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBVSSBiYXNlZCBvbiBydW5uaW5nIHN0YXRlXG4gICAgICAgIGlmIChjb250ZXh0LmlzUnVubmluZykge1xuICAgICAgICAgICAgLy8gTm90ZSBpcyBjdXJyZW50bHkgcnVubmluZyAtIHNob3cgcnVubmluZyBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5ydW5CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ydW5CdXR0b24udGV4dENvbnRlbnQgPSB0KCdpbnB1dC5ydW5uaW5nQnV0dG9uJyk7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaW5saW5lLXZpc2libGUnKTtcblxuICAgICAgICAgICAgLy8gUmVzdW1lIGVsYXBzZWQgdGltZSB0cmFja2luZyB3aXRoIHRoZSBub3RlJ3Mgb3duIHN0YXJ0IHRpbWVcbiAgICAgICAgICAgIHRoaXMucmVzdW1lRWxhcHNlZFRpbWVUcmFja2luZygpO1xuXG4gICAgICAgICAgICAvLyBSZXN0b3JlIGFueSBhY2N1bXVsYXRlZCBzdHJlYW1pbmcgcmVzdWx0IHRleHRcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmN1cnJlbnRSZXN1bHRUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlU3RyZWFtaW5nUmVzdWx0KGNvbnRleHQuY3VycmVudFJlc3VsdFRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU3RvcCB0aW1lciB3aGVuIHN3aXRjaGluZyB0byBub24tcnVubmluZyBub3RlXG4gICAgICAgICAgICB0aGlzLnN0b3BFbGFwc2VkVGltZVRyYWNraW5nKCk7XG4gICAgICAgICAgICAvLyBOb3RlIGlzIG5vdCBydW5uaW5nIC0gc2hvdyBpZGxlIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnJ1bkJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ydW5CdXR0b24udGV4dENvbnRlbnQgPSB0KCdpbnB1dC5ydW5CdXR0b24nKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS1pbmxpbmUtdmlzaWJsZScpO1xuXG4gICAgICAgICAgICAvLyBIaWRlIHN0YXR1cyBpbmRpY2F0b3IgZm9yIG5vbi1ydW5uaW5nIG5vdGVzXG4gICAgICAgICAgICB0aGlzLmhpZGVTdGF0dXMoKTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgcmVzdWx0IHNlY3Rpb24gaWYgdGhlcmUncyBubyBjdXJyZW50IHJlc3BvbnNlXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQuY3VycmVudFJlc3BvbnNlIHx8ICFjb250ZXh0LmN1cnJlbnRSZXNwb25zZS5hc3Npc3RhbnRNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlUmVzdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgcmVzdWx0IGlmIGV4aXN0c1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdChjb250ZXh0LmN1cnJlbnRSZXNwb25zZS5hc3Npc3RhbnRNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc3RvcmUgcHJldmlldyBzZWN0aW9uIGlmIHRoZXJlJ3MgcGVuZGluZyBjb250ZW50LCBvdGhlcndpc2UgaGlkZVxuICAgICAgICBpZiAoY29udGV4dC5wZW5kaW5nUHJldmlld0NvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZVByZXZpZXcoY29udGV4dC5wZW5kaW5nUHJldmlld0NvbnRlbnQsIGNvbnRleHQub3JpZ2luYWxQcmV2aWV3Q29udGVudCB8fCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVQcmV2aWV3VUkoKTsgIC8vIEp1c3QgaGlkZSBVSSwgZG9uJ3QgY2xlYXIgY29udGV4dFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzdG9yZSBwZXJtaXNzaW9uIGFwcHJvdmFsIHNlY3Rpb24gaWYgdGhlcmUncyBhIHBlbmRpbmcgcGVybWlzc2lvbiByZXF1ZXN0XG4gICAgICAgIGlmIChjb250ZXh0LmN1cnJlbnRSZXNwb25zZT8uaXNQZXJtaXNzaW9uUmVxdWVzdCAmJiAhY29udGV4dC5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Blcm1pc3Npb25BcHByb3ZhbFNlY3Rpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVBlcm1pc3Npb25BcHByb3ZhbFNlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IG5vdGUncyBjb250ZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Q29udGV4dCgpOiBOb3RlQ29udGV4dCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRNYW5hZ2VyLmdldENvbnRleHQodGhpcy5jdXJyZW50Tm90ZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBSdW4gQ2xhdWRlIENvZGUgYnV0dG9uIGNsaWNrXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVSdW5DbGF1ZGVDb2RlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDdXJyZW50Q29udGV4dCgpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgY29uY3VycmVudCBydW5zIG9uIHRoZSBzYW1lIG5vdGVcbiAgICAgICAgaWYgKGNvbnRleHQuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKHQoJ25vdGljZS5hbHJlYWR5UHJvY2Vzc2luZycpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb21wdCA9IHRoaXMucHJvbXB0SW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgICBpZiAoIXByb21wdCkge1xuICAgICAgICAgICAgbmV3IE5vdGljZSh0KCdub3RpY2UuZW50ZXJQcm9tcHQnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBzY3JvbGwgc3RhdGUgZm9yIG5ldyByZXF1ZXN0XG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxTdGF0ZSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgcHJvbXB0IGlucHV0XG4gICAgICAgICAgICB0aGlzLnByb21wdElucHV0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgICAgIC8vIEdldCBhY3RpdmUgZmlsZVxuICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCk7XG4gICAgICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgICAgICBuZXcgTm90aWNlKHQoJ25vdGljZS5ub0FjdGl2ZU5vdGUnKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBsZWFmIHRoYXQgY29udGFpbnMgdGhpcyBmaWxlXG4gICAgICAgICAgICBjb25zdCBsZWF2ZXMgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKCdtYXJrZG93bicpO1xuICAgICAgICAgICAgbGV0IGFjdGl2ZVZpZXc6IE1hcmtkb3duVmlldyB8IG51bGwgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBUcnkgdG8gZmluZCB0aGUgbGVhZiB3aXRoIHRoZSBhY3RpdmUgZmlsZVxuICAgICAgICAgICAgZm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXcgYXMgTWFya2Rvd25WaWV3O1xuICAgICAgICAgICAgICAgIGlmICh2aWV3LmZpbGUgJiYgdmlldy5maWxlLnBhdGggPT09IGZpbGUucGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVWaWV3ID0gdmlldztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGYWxsYmFjazoganVzdCB1c2UgdGhlIGZpcnN0IG1hcmtkb3duIHZpZXcgaWYgd2UgY291bGRuJ3QgbWF0Y2ggYnkgZmlsZVxuICAgICAgICAgICAgaWYgKCFhY3RpdmVWaWV3ICYmIGxlYXZlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlVmlldyA9IGxlYXZlc1swXS52aWV3IGFzIE1hcmtkb3duVmlldztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFhY3RpdmVWaWV3IHx8ICFhY3RpdmVWaWV3LmVkaXRvcikge1xuICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UodCgnbm90aWNlLm5vRWRpdG9yJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZWRpdG9yID0gYWN0aXZlVmlldy5lZGl0b3I7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRleHQgPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCB1c2VTZWxlY3RlZFRleHRPbmx5ID0gdGhpcy5zZWxlY3RlZFRleHRPbmx5Q2hlY2tib3guY2hlY2tlZCAmJiBzZWxlY3RlZFRleHQ7XG4gICAgICAgICAgICBjb25zdCBub3RlQ29udGVudCA9IGVkaXRvci5nZXRWYWx1ZSgpO1xuXG4gICAgICAgICAgICAvLyBHZXQgdmF1bHQgcGF0aFxuICAgICAgICAgICAgY29uc3QgdmF1bHRQYXRoID0gKHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIgYXMgRmlsZVN5c3RlbUFkYXB0ZXIpLmdldEJhc2VQYXRoKCk7XG4gICAgICAgICAgICBpZiAoIXZhdWx0UGF0aCkge1xuICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UodCgnbm90aWNlLm5vVmF1bHRQYXRoJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUHJlcGFyZSByZXF1ZXN0XG4gICAgICAgICAgICBjb250ZXh0LmN1cnJlbnRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIG5vdGVDb250ZW50LFxuICAgICAgICAgICAgICAgIHVzZXJQcm9tcHQ6IHByb21wdCxcbiAgICAgICAgICAgICAgICBub3RlUGF0aDogZmlsZS5wYXRoLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGV4dDogdXNlU2VsZWN0ZWRUZXh0T25seSA/IHNlbGVjdGVkVGV4dCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB2YXVsdFBhdGg6IHZhdWx0UGF0aCxcbiAgICAgICAgICAgICAgICBjb25maWdEaXI6IHRoaXMuYXBwLnZhdWx0LmNvbmZpZ0RpcixcbiAgICAgICAgICAgICAgICBydW50aW1lTW9kZWxPdmVycmlkZTogdGhpcy5tb2RlbFNlbGVjdC52YWx1ZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgY29udmVyc2F0aW9uYWxNb2RlOiB0aGlzLmNvbnZlcnNhdGlvbmFsTW9kZUNoZWNrYm94LmNoZWNrZWRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBVSVxuICAgICAgICAgICAgdGhpcy5ydW5CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ydW5CdXR0b24udGV4dENvbnRlbnQgPSB0KCdpbnB1dC5ydW5uaW5nQnV0dG9uJyk7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaW5saW5lLXZpc2libGUnKTtcbiAgICAgICAgICAgIGNvbnRleHQub3V0cHV0TGluZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0UmVuZGVyZXIuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuYWdlbnRUcmFja2VyLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyVG9kb0xpc3QoKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZVByZXZpZXcoKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdCgpO1xuXG4gICAgICAgICAgICAvLyBDbGVhciByZXN1bHQgYXJlYSBmb3IgbmV3IHN0cmVhbWluZyBtZXNzYWdlc1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRBcmVhLmVtcHR5KCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRTdHJlYW1pbmdFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaGl0RmluYWxDb250ZW50TWFya2VyID0gZmFsc2U7XG4gICAgICAgICAgICBjb250ZXh0LmN1cnJlbnRSZXN1bHRUZXh0ID0gdW5kZWZpbmVkOyAgLy8gQ2xlYXIgcGVyLW5vdGUgcmVzdWx0IHRleHRcblxuICAgICAgICAgICAgLy8gU2hvdyB0aGUgbGFzdCBwcm9tcHRcbiAgICAgICAgICAgIHRoaXMuc2hvd0xhc3RQcm9tcHQocHJvbXB0KTtcblxuICAgICAgICAgICAgLy8gU2hvdyBpbml0aWFsIHN0YXR1cyB3aXRoIGVsYXBzZWQgdGltZSB0cmFja2luZ1xuICAgICAgICAgICAgdGhpcy5zaG93U3RhdHVzKCdcdUQ4M0VcdUREMTQgJyArIHQoJ3N0YXR1cy5wcm9jZXNzaW5nJykgKyAnLi4uIDAuMHMnKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRFbGFwc2VkVGltZVRyYWNraW5nKCdcdUQ4M0VcdUREMTQgJyArIHQoJ3N0YXR1cy5wcm9jZXNzaW5nJykpO1xuXG4gICAgICAgICAgICAvLyBDYXB0dXJlIHRoZSBub3RlIHBhdGggZm9yIHRoaXMgc3BlY2lmaWMgcnVuXG4gICAgICAgICAgICBjb25zdCBydW5Ob3RlUGF0aCA9IGZpbGUucGF0aDtcblxuICAgICAgICAgICAgLy8gUnVuIENsYXVkZSBDb2RlXG4gICAgICAgICAgICBjb250ZXh0LmlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnROb3RlTGFiZWwoKTsgIC8vIFVwZGF0ZSBoZWFkZXIgdG8gc2hvdyBydW5uaW5nIHN0YXRlXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRleHQucnVubmVyLnJ1bihcbiAgICAgICAgICAgIGNvbnRleHQuY3VycmVudFJlcXVlc3QsXG4gICAgICAgICAgICAobGluZTogc3RyaW5nLCBpc01hcmtkb3duPzogYm9vbGVhbiwgaXNTdHJlYW1pbmc/OiBib29sZWFuIHwgc3RyaW5nLCBpc0Fzc2lzdGFudE1lc3NhZ2U/OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIG91dHB1dCB0byB0aGUgU1BFQ0lGSUMgbm90ZSBjb250ZXh0IHRoYXQgc3RhcnRlZCB0aGlzIHJ1blxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kT3V0cHV0VG9Ob3RlKHJ1bk5vdGVQYXRoLCBsaW5lLCBpc01hcmtkb3duLCBpc1N0cmVhbWluZywgaXNBc3Npc3RhbnRNZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIHN0YXR1cyBpZiB0aGlzIGlzIHN0aWxsIHRoZSBhY3RpdmUgbm90ZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROb3RlUGF0aCA9PT0gcnVuTm90ZVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXNGcm9tT3V0cHV0KGxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb250ZXh0LmN1cnJlbnRSZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgY29udGV4dC5leGVjdXRpb25TdGFydFRpbWUgPSB1bmRlZmluZWQ7ICAvLyBDbGVhciBwZXItbm90ZSB0aW1pbmdcbiAgICAgICAgICAgIGNvbnRleHQuYmFzZVN0YXR1c01lc3NhZ2UgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIC8vIEhpZGUgc3RhdHVzXG4gICAgICAgICAgICB0aGlzLmhpZGVTdGF0dXMoKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIFVJXG4gICAgICAgICAgICB0aGlzLnJ1bkJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ydW5CdXR0b24udGV4dENvbnRlbnQgPSB0KCdpbnB1dC5ydW5CdXR0b24nKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS1pbmxpbmUtdmlzaWJsZScpO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgaGVhZGVyIHRvIHJlZmxlY3QgcnVubmluZyBzdGF0ZSBjaGFuZ2VcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudE5vdGVMYWJlbCgpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgcmVzcG9uc2VcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAvLyBBZGQgdG8gaGlzdG9yeVxuICAgICAgICAgICAgY29udGV4dC5oaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICAgIHByb21wdDogcHJvbXB0LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5vdGVQYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGNvbnRleHQuY3VycmVudFJlcXVlc3QsXG4gICAgICAgICAgICAgICAgb3V0cHV0TGluZXM6IGNvbnRleHQub3V0cHV0TGluZXNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhpc3RvcnlEaXNwbGF5KGNvbnRleHQuaGlzdG9yeSk7XG5cbiAgICAgICAgICAgIC8vIFNhdmUgY29udGV4dCB3aXRoIGVycm9yIGhhbmRsaW5nXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dE1hbmFnZXIuc2F2ZUNvbnRleHQoZmlsZS5wYXRoLCB2YXVsdFBhdGgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2F2ZSBjb250ZXh0OicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2hvdyBwcmV2aWV3IG9yIGF1dG8tYXBwbHlcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5tb2RpZmllZENvbnRlbnQgJiYgcmVzcG9uc2UubW9kaWZpZWRDb250ZW50LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9BY2NlcHRDaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIFVJIGlmIHRoaXMgaXMgc3RpbGwgdGhlIGFjdGl2ZSBub3RlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROb3RlUGF0aCA9PT0gcnVuTm90ZVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N0YXR1cygnXHUyNzA1ICcgKyB0KCdzdGF0dXMuYXV0b0FwcGx5aW5nJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlDaGFuZ2VzVG9FZGl0b3IocmVzcG9uc2UubW9kaWZpZWRDb250ZW50LCBlZGl0b3IpO1xuICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIHN0YXR1cyBhZnRlciBhdXRvLWFwcGx5aW5nXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROb3RlUGF0aCA9PT0gcnVuTm90ZVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoJ1x1MjcxMyAnICsgdCgnbm90aWNlLmNoYW5nZXNBcHBsaWVkJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ByZXZpZXcocmVzcG9uc2UubW9kaWZpZWRDb250ZW50LCBydW5Ob3RlUGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGEgcGVybWlzc2lvbiByZXF1ZXN0XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmlzUGVybWlzc2lvblJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSBzaG93IFVJIGlmIHRoaXMgaXMgc3RpbGwgdGhlIGFjdGl2ZSBub3RlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROb3RlUGF0aCA9PT0gcnVuTm90ZVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgcGVybWlzc2lvbiBhcHByb3ZhbCBVSVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UGVybWlzc2lvbkFwcHJvdmFsU2VjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyB0aGUgcmVxdWVzdCBpbiB0aGUgcmVzdWx0IHBhbmVsIChvbmx5IGlmIG5vdCBhbHJlYWR5IHN0cmVhbWVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGF1ZGUtY29kZS1yZXN1bHQtc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzU3RyZWFtZWRDb250ZW50ID0gcmVzdWx0U2VjdGlvbiAmJiByZXN1bHRTZWN0aW9uLmhhc0NsYXNzKCdjbGF1ZGUtY29kZS12aXNpYmxlJykgJiYgdGhpcy5yZXN1bHRBcmVhLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzU3RyZWFtZWRDb250ZW50ICYmIHJlc3BvbnNlLmFzc2lzdGFudE1lc3NhZ2UgJiYgcmVzcG9uc2UuYXNzaXN0YW50TWVzc2FnZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQocmVzcG9uc2UuYXNzaXN0YW50TWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZSgnXHUyNkEwXHVGRTBGICcgKyB0KCdub3RpY2UucGVybWlzc2lvblJlcXVlc3QnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZmlsZSBjaGFuZ2VzIC0gc2hvdyByZXN1bHQgcGFuZWwgd2l0aCBDbGF1ZGUncyByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSBVSSBpZiB0aGlzIGlzIHN0aWxsIHRoZSBhY3RpdmUgbm90ZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Tm90ZVBhdGggPT09IHJ1bk5vdGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IGNhbGwgc2hvd1Jlc3VsdCBpZiB3ZSBoYXZlbid0IGJlZW4gc3RyZWFtaW5nIChzdHJlYW1pbmcgYWxyZWFkeSByZW5kZXJlZCB0aGUgcmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGF1ZGUtY29kZS1yZXN1bHQtc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzU3RyZWFtZWRDb250ZW50ID0gcmVzdWx0U2VjdGlvbiAmJiByZXN1bHRTZWN0aW9uLmhhc0NsYXNzKCdjbGF1ZGUtY29kZS12aXNpYmxlJykgJiYgdGhpcy5yZXN1bHRBcmVhLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzU3RyZWFtZWRDb250ZW50ICYmIHJlc3BvbnNlLmFzc2lzdGFudE1lc3NhZ2UgJiYgcmVzcG9uc2UuYXNzaXN0YW50TWVzc2FnZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQocmVzcG9uc2UuYXNzaXN0YW50TWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZSgnXHUyNzEzICcgKyB0KCdub3RpY2UuY29tcGxldGVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNTdHJlYW1lZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN1bHQgd2FzIGFscmVhZHkgc3RyZWFtZWQsIGp1c3Qgc2hvdyBub3RpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKCdcdTI3MTMgJyArIHQoJ25vdGljZS5jb21wbGV0ZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoJ1x1MjcxMyAnICsgdCgnbm90aWNlLmNvbXBsZXRlZE5vQ2hhbmdlcycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbGVudGx5IGNvbXBsZXRlIC0gdXNlciBpcyBvbiBhIGRpZmZlcmVudCBub3RlXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKCdcdTI3MTMgJyArIHQoJ25vdGljZS5jb21wbGV0ZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgVUkgaWYgdGhpcyBpcyBzdGlsbCB0aGUgYWN0aXZlIG5vdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROb3RlUGF0aCA9PT0gcnVuTm90ZVBhdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvclN0YXR1cygnXHUyNzRDICcgKyB0KCdzdGF0dXMuZmFpbGVkJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3IE5vdGljZShgXHUyNzE3ICR7cmVzcG9uc2UuZXJyb3IgfHwgJ1Vua25vd24gZXJyb3InfWApO1xuICAgICAgICAgICAgY29udGV4dC5oaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICAgIHByb21wdDogcHJvbXB0LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBub3RlUGF0aDogZmlsZS5wYXRoLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiBjb250ZXh0LmN1cnJlbnRSZXF1ZXN0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGlzdG9yeURpc3BsYXkoY29udGV4dC5oaXN0b3J5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIElmIGFuIGVycm9yIG9jY3VycmVkIGR1cmluZyBleGVjdXRpb24sIG1ha2Ugc3VyZSB0byByZXNldCB0aGUgcnVubmluZyBzdGF0ZVxuICAgICAgICAgICAgY29udGV4dC5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnRleHQuZXhlY3V0aW9uU3RhcnRUaW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29udGV4dC5iYXNlU3RhdHVzTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIG91dHB1dCB0byBhIHNwZWNpZmljIG5vdGUncyBjb250ZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSBhcHBlbmRPdXRwdXRUb05vdGUobm90ZVBhdGg6IHN0cmluZywgdGV4dDogc3RyaW5nLCBpc01hcmtkb3duOiBib29sZWFuID0gZmFsc2UsIGlzU3RyZWFtaW5nOiBib29sZWFuIHwgc3RyaW5nID0gZmFsc2UsIGlzQXNzaXN0YW50TWVzc2FnZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRNYW5hZ2VyLmdldENvbnRleHQobm90ZVBhdGgpO1xuICAgICAgICBjb250ZXh0Lm91dHB1dExpbmVzLnB1c2godGV4dCk7XG5cbiAgICAgICAgLy8gU3RvcmUgc3RyZWFtaW5nIHJlc3VsdCB0ZXh0IGluIHRoZSBDT1JSRUNUIG5vdGUncyBjb250ZXh0IChub3QgY3VycmVudCBub3RlKVxuICAgICAgICBpZiAoaXNBc3Npc3RhbnRNZXNzYWdlICYmIGlzU3RyZWFtaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBBY2N1bXVsYXRlIHJlc3VsdCB0ZXh0IGluIHRoZSB0YXJnZXQgbm90ZSdzIGNvbnRleHRcbiAgICAgICAgICAgIGNvbnRleHQuY3VycmVudFJlc3VsdFRleHQgPSAoY29udGV4dC5jdXJyZW50UmVzdWx0VGV4dCB8fCAnJykgKyB0ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2UgYW5kIHN0b3JlIGFnZW50IGFjdGl2aXR5IGluIHRoZSBub3RlJ3MgY29udGV4dCAocmVnYXJkbGVzcyBvZiBjdXJyZW50IHZpZXcpXG4gICAgICAgIC8vIFNraXAgZm9yIHN0cmVhbWluZyBwYXJ0aWFsIHRleHRcbiAgICAgICAgaWYgKGlzU3RyZWFtaW5nICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBhZ2VudFN0ZXAgPSBPdXRwdXRSZW5kZXJlci5wYXJzZUFnZW50QWN0aXZpdHkodGV4dCk7XG4gICAgICAgICAgICBpZiAoYWdlbnRTdGVwKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5hZ2VudFN0ZXBzLnB1c2goYWdlbnRTdGVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIFVJIGlmIHRoaXMgaXMgdGhlIGN1cnJlbnQgbm90ZSBiZWluZyB2aWV3ZWRcbiAgICAgICAgaWYgKG5vdGVQYXRoID09PSB0aGlzLmN1cnJlbnROb3RlUGF0aCkge1xuICAgICAgICAgICAgLy8gSGFuZGxlIHN0cmVhbWluZyB0ZXh0IGFjY3VtdWxhdGlvblxuICAgICAgICAgICAgaWYgKGlzU3RyZWFtaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRSZW5kZXJlci5hcHBlbmRTdHJlYW1pbmdUZXh0KHRleHQpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWxzbyBhcHBlbmQgdG8gUmVzdWx0IHNlY3Rpb24gaWYgaXQncyBhbiBhc3Npc3RhbnQgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tBcHBlbmQgT3V0cHV0XSBpc1N0cmVhbWluZz10cnVlLCBpc0Fzc2lzdGFudE1lc3NhZ2U9JywgaXNBc3Npc3RhbnRNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNBc3Npc3RhbnRNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kVG9SZXN1bHRVSSh0ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIERvbid0IHByb2Nlc3MgYWdlbnQgYWN0aXZpdHkgZm9yIHBhcnRpYWwgdGV4dFxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1N0cmVhbWluZyA9PT0gJ2ZpbmlzaCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFJlbmRlcmVyLmZpbmlzaFN0cmVhbWluZ0Jsb2NrKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBbHNvIGZpbmlzaCByZXN1bHQgc3RyZWFtaW5nIGlmIHRoZXJlJ3MgYW4gYWN0aXZlIHN0cmVhbVxuICAgICAgICAgICAgICAgIGlmIChpc0Fzc2lzdGFudE1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hSZXN1bHRTdHJlYW1pbmcoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBGYWxsIHRocm91Z2ggdG8gcHJvY2VzcyB0aGUgbmV3bGluZSBub3JtYWxseVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Fzc2lzdGFudE1lc3NhZ2UgJiYgIWlzU3RyZWFtaW5nKSB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIG5vbi1zdHJlYW1pbmcgYXNzaXN0YW50IG1lc3NhZ2VzIChlLmcuLCBmcm9tIGFzc2lzdGFudCBldmVudHMpXG4gICAgICAgICAgICAgICAgLy8gT25seSBhZGQgaWYgd2UgaGF2ZW4ndCBiZWVuIHN0cmVhbWluZyAoYXZvaWQgZHVwbGljYXRlcylcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNTdHJlYW1pbmdDb250ZW50ID0gdGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudCAhPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucmVzdWx0QXJlYSAmJiB0aGlzLnJlc3VsdEFyZWEuY2hpbGRyZW4ubGVuZ3RoID4gMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc1N0cmVhbWluZ0NvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnW0FwcGVuZCBPdXRwdXRdIE5vbi1zdHJlYW1pbmcgYXNzaXN0YW50IG1lc3NhZ2UsIGFkZGluZyB0byByZXN1bHQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0TWFya2Rvd24odGV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnW0FwcGVuZCBPdXRwdXRdIE5vbi1zdHJlYW1pbmcgYXNzaXN0YW50IG1lc3NhZ2UsIGJ1dCBhbHJlYWR5IGhhdmUgc3RyZWFtaW5nIGNvbnRlbnQgLSBza2lwcGluZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBGYWxsIHRocm91Z2ggdG8gYWxzbyBhZGQgdG8gb3V0cHV0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub3V0cHV0UmVuZGVyZXIuYXBwZW5kTGluZSh0ZXh0LCBpc01hcmtkb3duKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIFVJIGFnZW50IGFjdGl2aXR5IHRyYWNrZXIgd2l0aCB0aW1pbmcgKFVJIG9ubHkpXG4gICAgICAgICAgICBjb25zdCBhZ2VudFN0ZXAgPSBPdXRwdXRSZW5kZXJlci5wYXJzZUFnZW50QWN0aXZpdHkodGV4dCk7XG4gICAgICAgICAgICBpZiAoYWdlbnRTdGVwKSB7XG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGlmIHRoaXMgaXMgYSB0b29sIHN0YXJ0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNUb29sU3RhcnQodGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgc3RhcnQgdGltZSBhbmQgcmVtZW1iZXIgdGhpcyB0b29sJ3Mga2V5XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9vbFN0YXJ0VGltZXMuc2V0KGFnZW50U3RlcC5rZXksIG5vdyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFRvb2xLZXkgPSBhZ2VudFN0ZXAua2V5O1xuICAgICAgICAgICAgICAgICAgICBhZ2VudFN0ZXAuc3RhcnRUaW1lID0gbm93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEZXRlY3QgaWYgdGhpcyBpcyBhIHRvb2wgY29tcGxldGlvblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNUb29sQ29tcGxldGUodGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWF0Y2ggdG8gdGhlIGxhc3Qgc3RhcnRlZCB0b29sXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RUb29sS2V5ICYmIHRoaXMudG9vbFN0YXJ0VGltZXMuaGFzKHRoaXMubGFzdFRvb2xLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSB0aGlzLnRvb2xTdGFydFRpbWVzLmdldCh0aGlzLmxhc3RUb29sS2V5KSE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgc3RlcCB3aXRoIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFnZW50VHJhY2tlci5hZGRTdGVwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hZ2VudFN0ZXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLmxhc3RUb29sS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9vbFN0YXJ0VGltZXMuZGVsZXRlKHRoaXMubGFzdFRvb2xLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VG9vbEtleSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFnZW50VHJhY2tlci5hZGRTdGVwKGFnZW50U3RlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBvdXRwdXQgbGluZSBpbmRpY2F0ZXMgYSB0b29sIGlzIHN0YXJ0aW5nXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc1Rvb2xTdGFydCh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRleHQuaW5jbHVkZXMoJ1x1RDgzRFx1REQyNyBVc2luZyB0b29sOicpIHx8XG4gICAgICAgICAgICAgICB0ZXh0LmluY2x1ZGVzKCckICcpIHx8XG4gICAgICAgICAgICAgICB0ZXh0LmluY2x1ZGVzKCdcdUQ4M0RcdUREMEQgR2xvYiBzZWFyY2hpbmc6JykgfHxcbiAgICAgICAgICAgICAgIHRleHQuaW5jbHVkZXMoJ1x1RDgzRFx1REQwRSBHcmVwIHNlYXJjaGluZzonKSB8fFxuICAgICAgICAgICAgICAgdGV4dC5pbmNsdWRlcygnXHVEODNEXHVEQ0Q2IFJlYWRpbmcgZmlsZTonKSB8fFxuICAgICAgICAgICAgICAgdGV4dC5pbmNsdWRlcygnXHUyNzBEXHVGRTBGICBXcml0aW5nIGZpbGU6JykgfHxcbiAgICAgICAgICAgICAgIHRleHQuaW5jbHVkZXMoJ1x1MjcwRlx1RkUwRiAgRWRpdGluZyBmaWxlOicpIHx8XG4gICAgICAgICAgICAgICB0ZXh0LmluY2x1ZGVzKCdcdUQ4M0NcdURGMTAgRmV0Y2hpbmcgd2VicGFnZTonKSB8fFxuICAgICAgICAgICAgICAgdGV4dC5pbmNsdWRlcygnXHVEODNEXHVERDBEIFdlYiBzZWFyY2hpbmc6JykgfHxcbiAgICAgICAgICAgICAgIHRleHQuaW5jbHVkZXMoJ1x1RDgzRVx1REQxNiBMYXVuY2hpbmcgYWdlbnQ6Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgb3V0cHV0IGxpbmUgaW5kaWNhdGVzIGEgdG9vbCBjb21wbGV0ZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGlzVG9vbENvbXBsZXRlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBNYXRjaCBzcGVjaWZpYyB0b29sIGNvbXBsZXRpb24gcGF0dGVybnMgZnJvbSBzdHJlYW0tZXZlbnQtcHJvY2Vzc29yLnRzXG4gICAgICAgIHJldHVybiB0ZXh0LmluY2x1ZGVzKCdcdTI3MTMgRm91bmQnKSB8fCAgICAgICAgICAgLy8gR2xvYi9HcmVwIHJlc3VsdHNcbiAgICAgICAgICAgICAgIHRleHQuaW5jbHVkZXMoJ1x1MjcxMyBPdXRwdXQnKSB8fCAgICAgICAgICAvLyBCYXNoIG91dHB1dFxuICAgICAgICAgICAgICAgdGV4dC5pbmNsdWRlcygnY29tcGxldGUnKSB8fCAgICAgICAgICAvLyBHZW5lcmljIGNvbXBsZXRpb25cbiAgICAgICAgICAgICAgIHRleHQuaW5jbHVkZXMoJ1x1RDgzRFx1RENFNSBUb29sIHJlc3VsdCcpOyAgICAgIC8vIFRvb2wgcmVzdWx0IGV2ZW50XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHN0YXR1cyBiYXNlZCBvbiBvdXRwdXQgbGluZVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlU3RhdHVzRnJvbU91dHB1dChsaW5lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gT3V0cHV0U3RhdHVzTWFuYWdlci5leHRyYWN0U3RhdHVzKGxpbmUpO1xuICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTdGF0dXMoc3RhdHVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERldGVjdCBUb2RvV3JpdGUgdG9vbCB1c2FnZSAod2l0aCBvciB3aXRob3V0IGVtb2ppKVxuICAgICAgICBpZiAobGluZS5pbmNsdWRlcygnVXNpbmcgdG9vbDogVG9kb1dyaXRlJykgfHwgbGluZS5pbmNsdWRlcygnXHVEODNEXHVERDI3IFVzaW5nIHRvb2w6IFRvZG9Xcml0ZScpKSB7XG4gICAgICAgICAgICAvLyBTY2hlZHVsZSBwYXJzaW5nIGFmdGVyIGEgc2hvcnQgZGVsYXkgdG8gZW5zdXJlIGFsbCBvdXRwdXQgaXMgY2FwdHVyZWRcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wYXJzZVRvZG9zRnJvbU91dHB1dCgpLCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgdG9kb3MgZnJvbSB0aGUgb3V0cHV0IGxpbmVzXG4gICAgICovXG4gICAgcHJpdmF0ZSBwYXJzZVRvZG9zRnJvbU91dHB1dCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q3VycmVudENvbnRleHQoKTtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdbUGFyc2UgVG9kb3NdIFRvdGFsIG91dHB1dCBsaW5lczonLCBjb250ZXh0Lm91dHB1dExpbmVzLmxlbmd0aCk7XG5cbiAgICAgICAgLy8gRmluZCBBTEwgVG9kb1dyaXRlIHRvb2wgdXNhZ2UgbGluZXNcbiAgICAgICAgY29uc3QgdG9kb1dyaXRlSW5kaWNlczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgY29udGV4dC5vdXRwdXRMaW5lcy5mb3JFYWNoKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoJ1VzaW5nIHRvb2w6IFRvZG9Xcml0ZScpKSB7XG4gICAgICAgICAgICAgICAgdG9kb1dyaXRlSW5kaWNlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnW1BhcnNlIFRvZG9zXSBGb3VuZCBUb2RvV3JpdGUgYXQgaW5kaWNlczonLCB0b2RvV3JpdGVJbmRpY2VzKTtcblxuICAgICAgICBpZiAodG9kb1dyaXRlSW5kaWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tQYXJzZSBUb2Rvc10gTm8gVG9kb1dyaXRlIGZvdW5kIGluIG91dHB1dCBsaW5lcycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXNlIHRoZSBMQVNUIFRvZG9Xcml0ZSAobW9zdCByZWNlbnQgdXBkYXRlKVxuICAgICAgICBjb25zdCBsYXN0VG9kb1dyaXRlSW5kZXggPSB0b2RvV3JpdGVJbmRpY2VzW3RvZG9Xcml0ZUluZGljZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnW1BhcnNlIFRvZG9zXSBVc2luZyBsYXN0IFRvZG9Xcml0ZSBhdCBpbmRleDonLCBsYXN0VG9kb1dyaXRlSW5kZXgpO1xuXG4gICAgICAgIGlmIChsYXN0VG9kb1dyaXRlSW5kZXggKyAxIDwgY29udGV4dC5vdXRwdXRMaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFRoZSBuZXh0IGxpbmUgYWZ0ZXIgXCJVc2luZyB0b29sOiBUb2RvV3JpdGVcIiBzaG91bGQgY29udGFpbiB0aGUgSlNPTlxuICAgICAgICAgICAgY29uc3QganNvbkxpbmUgPSBjb250ZXh0Lm91dHB1dExpbmVzW2xhc3RUb2RvV3JpdGVJbmRleCArIDFdO1xuXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbUGFyc2UgVG9kb3NdIEpTT04gbGluZSBsZW5ndGg6JywganNvbkxpbmUubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tQYXJzZSBUb2Rvc10gSlNPTiBsaW5lIHByZXZpZXc6JywganNvbkxpbmUuc3Vic3RyaW5nKDAsIDMwMCkpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBKU09OIGlzIHRoZSBlbnRpcmUgbGluZSwganVzdCB0cmltIHdoaXRlc3BhY2VcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uU3RyID0ganNvbkxpbmUudHJpbSgpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnW1BhcnNlIFRvZG9zXSBUcmltbWVkIEpTT04gbGVuZ3RoOicsIGpzb25TdHIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbUGFyc2UgVG9kb3NdIEZpcnN0IGNoYXI6JywganNvblN0clswXSwgJ0xhc3QgY2hhcjonLCBqc29uU3RyW2pzb25TdHIubGVuZ3RoIC0gMV0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbElucHV0ID0gSlNPTi5wYXJzZShqc29uU3RyKSBhcyBUb2RvVG9vbElucHV0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRvb2xJbnB1dC50b2RvcyAmJiBBcnJheS5pc0FycmF5KHRvb2xJbnB1dC50b2RvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnW1BhcnNlIFRvZG9zXSBGb3VuZCB0b2RvcyBjb3VudDonLCB0b29sSW5wdXQudG9kb3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnW1BhcnNlIFRvZG9zXSBUb2RvczonLCBKU09OLnN0cmluZ2lmeSh0b29sSW5wdXQudG9kb3MsIG51bGwsIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb2RvTGlzdCh0b29sSW5wdXQudG9kb3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tQYXJzZSBUb2Rvc10gTm8gdG9kb3MgYXJyYXkgZm91bmQgaW4gcGFyc2VkIEpTT04nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnW1BhcnNlIFRvZG9zXSBQYXJzZWQgb2JqZWN0IGtleXM6JywgT2JqZWN0LmtleXModG9vbElucHV0IGFzIG9iamVjdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1BhcnNlIFRvZG9zXSBGYWlsZWQgdG8gcGFyc2UgdG9kb3MgSlNPTjonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1BhcnNlIFRvZG9zXSBFcnJvciBkZXRhaWxzOicsIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpO1xuICAgICAgICAgICAgICAgIC8vIFRyeSB0byBzaG93IHdoZXJlIHRoZSBKU09OIGlzIGJyZWFraW5nXG4gICAgICAgICAgICAgICAgY29uc3QganNvblN0ciA9IGpzb25MaW5lLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbUGFyc2UgVG9kb3NdIEZ1bGwgSlNPTiBzdHJpbmc6JywganNvblN0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHN0YXR1cyBpbmRpY2F0b3JcbiAgICAgKi9cbiAgICBwcml2YXRlIHNob3dTdGF0dXMobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIC8vIFNob3cgUmVzdWx0IHNlY3Rpb25cbiAgICAgICAgY29uc3QgcmVzdWx0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGF1ZGUtY29kZS1yZXN1bHQtc2VjdGlvbicpO1xuICAgICAgICBpZiAocmVzdWx0U2VjdGlvbikge1xuICAgICAgICAgICAgcmVzdWx0U2VjdGlvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICByZXN1bHRTZWN0aW9uLmFkZENsYXNzKCdjbGF1ZGUtY29kZS12aXNpYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaG93IHN0YXR1cyBhcmVhLCBoaWRlIHJlc3VsdCBhcmVhXG4gICAgICAgIHRoaXMuc3RhdHVzSW5kaWNhdG9yLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5zdGF0dXNJbmRpY2F0b3IuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWZsZXgtdmlzaWJsZScpO1xuICAgICAgICB0aGlzLnJlc3VsdEFyZWEuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnJlc3VsdEFyZWEucmVtb3ZlQ2xhc3MoJ2NsYXVkZS1jb2RlLXZpc2libGUnKTtcbiAgICAgICAgdGhpcy5zdGF0dXNUZXh0LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGVycm9yIHN0YXR1cyB3aXRob3V0IHByb2dyZXNzIGJhciBhbmltYXRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIHNob3dFcnJvclN0YXR1cyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9wRWxhcHNlZFRpbWVUcmFja2luZygpO1xuXG4gICAgICAgIC8vIFNob3cgUmVzdWx0IHNlY3Rpb25cbiAgICAgICAgY29uc3QgcmVzdWx0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGF1ZGUtY29kZS1yZXN1bHQtc2VjdGlvbicpO1xuICAgICAgICBpZiAocmVzdWx0U2VjdGlvbikge1xuICAgICAgICAgICAgcmVzdWx0U2VjdGlvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICByZXN1bHRTZWN0aW9uLmFkZENsYXNzKCdjbGF1ZGUtY29kZS12aXNpYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaG93IHN0YXR1cyBhcmVhLCBoaWRlIHJlc3VsdCBhcmVhXG4gICAgICAgIHRoaXMuc3RhdHVzSW5kaWNhdG9yLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5zdGF0dXNJbmRpY2F0b3IuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWZsZXgtdmlzaWJsZScpO1xuICAgICAgICB0aGlzLnJlc3VsdEFyZWEuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnJlc3VsdEFyZWEucmVtb3ZlQ2xhc3MoJ2NsYXVkZS1jb2RlLXZpc2libGUnKTtcbiAgICAgICAgdGhpcy5zdGF0dXNUZXh0LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBlbGFwc2VkIHRpbWUgdHJhY2tpbmcgKHN0b3JlcyB0aW1pbmcgaW4gcGVyLW5vdGUgY29udGV4dClcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXJ0RWxhcHNlZFRpbWVUcmFja2luZyhiYXNlTWVzc2FnZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDdXJyZW50Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LmV4ZWN1dGlvblN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnRleHQuYmFzZVN0YXR1c01lc3NhZ2UgPSBiYXNlTWVzc2FnZSB8fCAnXHVEODNFXHVERDE0IENsYXVkZSBpcyBwcm9jZXNzaW5nJztcblxuICAgICAgICAvLyBTdG9wIGFueSBleGlzdGluZyBpbnRlcnZhbCBiZWZvcmUgc3RhcnRpbmcgYSBuZXcgb25lXG4gICAgICAgIHRoaXMuc3RvcEVsYXBzZWRUaW1lVHJhY2tpbmcoKTtcblxuICAgICAgICAvLyBVcGRhdGUgc3RhdHVzIGV2ZXJ5IDEwMG1zIHdpdGggZWxhcHNlZCB0aW1lXG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuZ2V0Q3VycmVudENvbnRleHQoKTtcbiAgICAgICAgICAgIGlmIChjdHguZXhlY3V0aW9uU3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IERhdGUubm93KCkgLSBjdHguZXhlY3V0aW9uU3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSAoZWxhcHNlZCAvIDEwMDApLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNUZXh0LnRleHRDb250ZW50ID0gYCR7Y3R4LmJhc2VTdGF0dXNNZXNzYWdlIHx8ICdcdUQ4M0VcdUREMTQgUHJvY2Vzc2luZyd9Li4uICR7c2Vjb25kc31zYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXN1bWUgZWxhcHNlZCB0aW1lIHRyYWNraW5nIGZvciBjdXJyZW50IG5vdGUgKHVzZWQgd2hlbiBzd2l0Y2hpbmcgYmFjayB0byBhIHJ1bm5pbmcgbm90ZSlcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc3VtZUVsYXBzZWRUaW1lVHJhY2tpbmcoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldEN1cnJlbnRDb250ZXh0KCk7XG4gICAgICAgIGlmICghY29udGV4dC5leGVjdXRpb25TdGFydFRpbWUgfHwgIWNvbnRleHQuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9wIGFueSBleGlzdGluZyBpbnRlcnZhbFxuICAgICAgICB0aGlzLnN0b3BFbGFwc2VkVGltZVRyYWNraW5nKCk7XG5cbiAgICAgICAgLy8gU3RhcnQgaW50ZXJ2YWwgdXNpbmcgdGhlIG5vdGUncyBleGlzdGluZyBzdGFydCB0aW1lXG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuZ2V0Q3VycmVudENvbnRleHQoKTtcbiAgICAgICAgICAgIGlmIChjdHguZXhlY3V0aW9uU3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IERhdGUubm93KCkgLSBjdHguZXhlY3V0aW9uU3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSAoZWxhcHNlZCAvIDEwMDApLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNUZXh0LnRleHRDb250ZW50ID0gYCR7Y3R4LmJhc2VTdGF0dXNNZXNzYWdlIHx8ICdcdUQ4M0VcdUREMTQgUHJvY2Vzc2luZyd9Li4uICR7c2Vjb25kc31zYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGVsYXBzZWQgdGltZSB0cmFja2luZ1xuICAgICAqL1xuICAgIHByaXZhdGUgc3RvcEVsYXBzZWRUaW1lVHJhY2tpbmcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmVsYXBzZWRUaW1lSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5lbGFwc2VkVGltZUludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZFRpbWVJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHN0YXR1cyBpbmRpY2F0b3JcbiAgICAgKi9cbiAgICBwcml2YXRlIGhpZGVTdGF0dXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcEVsYXBzZWRUaW1lVHJhY2tpbmcoKTtcbiAgICAgICAgdGhpcy5zdGF0dXNJbmRpY2F0b3IuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnN0YXR1c0luZGljYXRvci5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtZmxleC12aXNpYmxlJyk7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUncyBjb250ZW50IGluIHRoZSByZXN1bHQgYXJlYSwga2VlcCBpdCBhbmQgdGhlIHNlY3Rpb24gdmlzaWJsZVxuICAgICAgICBpZiAodGhpcy5yZXN1bHRBcmVhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0QXJlYS5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdEFyZWEuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLXZpc2libGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhdWRlLWNvZGUtcmVzdWx0LXNlY3Rpb24nKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHRTZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0U2VjdGlvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0U2VjdGlvbi5hZGRDbGFzcygnY2xhdWRlLWNvZGUtdmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgbGFzdCBwcm9tcHQgdGhhdCB3YXMgc2VudFxuICAgICAqL1xuICAgIHByaXZhdGUgc2hvd0xhc3RQcm9tcHQocHJvbXB0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q3VycmVudENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5sYXN0UHJvbXB0ID0gcHJvbXB0O1xuXG4gICAgICAgIHRoaXMubGFzdFByb21wdEFyZWEuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5sYXN0UHJvbXB0QXJlYS5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwcm9tcHQgZGlzcGxheSB3aXRoIGEgbGFiZWxcbiAgICAgICAgdGhpcy5sYXN0UHJvbXB0QXJlYS5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLWxhc3QtcHJvbXB0LWxhYmVsJyxcbiAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURDQUMgJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUcnVuY2F0ZSBsb25nIHByb21wdHMgZm9yIGRpc3BsYXlcbiAgICAgICAgY29uc3QgZGlzcGxheVByb21wdCA9IHByb21wdC5sZW5ndGggPiAyMDBcbiAgICAgICAgICAgID8gcHJvbXB0LnN1YnN0cmluZygwLCAyMDApICsgJy4uLidcbiAgICAgICAgICAgIDogcHJvbXB0O1xuXG4gICAgICAgIHRoaXMubGFzdFByb21wdEFyZWEuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1sYXN0LXByb21wdC10ZXh0JyxcbiAgICAgICAgICAgIHRleHQ6IGRpc3BsYXlQcm9tcHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2hvdyBmdWxsIHByb21wdCBvbiBob3ZlciBpZiB0cnVuY2F0ZWRcbiAgICAgICAgaWYgKHByb21wdC5sZW5ndGggPiAyMDApIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFByb21wdEFyZWEuc2V0QXR0cmlidXRlKCd0aXRsZScsIHByb21wdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBsYXN0IHByb21wdCBkaXNwbGF5XG4gICAgICovXG4gICAgcHJpdmF0ZSBoaWRlTGFzdFByb21wdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sYXN0UHJvbXB0QXJlYS5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMubGFzdFByb21wdEFyZWEuZW1wdHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHByZXZpZXcgb2YgY2hhbmdlc1xuICAgICAqIEBwYXJhbSBtb2RpZmllZENvbnRlbnQgVGhlIG1vZGlmaWVkIGNvbnRlbnQgdG8gcHJldmlld1xuICAgICAqIEBwYXJhbSBmb3JOb3RlUGF0aCBPcHRpb25hbDogdGhlIG5vdGUgcGF0aCB0aGlzIHByZXZpZXcgYmVsb25ncyB0byAoZGVmYXVsdHMgdG8gY3VycmVudCBub3RlKVxuICAgICAqL1xuICAgIHByaXZhdGUgc2hvd1ByZXZpZXcobW9kaWZpZWRDb250ZW50OiBzdHJpbmcsIGZvck5vdGVQYXRoPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIC8vIEdldCB0aGUgY29udGV4dCBmb3IgdGhlIHNwZWNpZmllZCBub3RlIChvciBjdXJyZW50IG5vdGUgaWYgbm90IHNwZWNpZmllZClcbiAgICAgICAgY29uc3QgdGFyZ2V0Tm90ZVBhdGggPSBmb3JOb3RlUGF0aCB8fCB0aGlzLmN1cnJlbnROb3RlUGF0aDtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dE1hbmFnZXIuZ2V0Q29udGV4dCh0YXJnZXROb3RlUGF0aCk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQ29udGVudCA9IGNvbnRleHQuY3VycmVudFJlcXVlc3Q/LnNlbGVjdGVkVGV4dCB8fCBjb250ZXh0LmN1cnJlbnRSZXF1ZXN0Py5ub3RlQ29udGVudCB8fCAnJztcblxuICAgICAgICAvLyBTdG9yZSBwcmV2aWV3IHN0YXRlIGluIHRoZSBUQVJHRVQgbm90ZSdzIGNvbnRleHRcbiAgICAgICAgY29udGV4dC5wZW5kaW5nUHJldmlld0NvbnRlbnQgPSBtb2RpZmllZENvbnRlbnQ7XG4gICAgICAgIGNvbnRleHQub3JpZ2luYWxQcmV2aWV3Q29udGVudCA9IG9yaWdpbmFsQ29udGVudDtcblxuICAgICAgICAvLyBPbmx5IHNob3cgdGhlIFVJIGlmIHRoaXMgaXMgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIG5vdGVcbiAgICAgICAgaWYgKHRhcmdldE5vdGVQYXRoICE9PSB0aGlzLmN1cnJlbnROb3RlUGF0aCkge1xuICAgICAgICAgICAgLy8gUHJldmlldyBzdG9yZWQgaW4gY29udGV4dCwgYnV0IGRvbid0IHNob3cgVUkgc2luY2UgdXNlciBpcyBvbiBhIGRpZmZlcmVudCBub3RlXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2aWV3U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGF1ZGUtY29kZS1wcmV2aWV3LXNlY3Rpb24nKTtcbiAgICAgICAgaWYgKHByZXZpZXdTZWN0aW9uKSB7XG4gICAgICAgICAgICBwcmV2aWV3U2VjdGlvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICBwcmV2aWV3U2VjdGlvbi5hZGRDbGFzcygnY2xhdWRlLWNvZGUtdmlzaWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2aWV3QXJlYS5lbXB0eSgpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBvbGQgcmVuZGVyZWQgYW5kIGRpZmYgdmlld3MgaWYgdGhleSBleGlzdFxuICAgICAgICBjb25zdCBvbGRSZW5kZXJlZCA9IHRoaXMucHJldmlld0NvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNsYXVkZS1jb2RlLXByZXZpZXctcmVuZGVyZWQnKTtcbiAgICAgICAgaWYgKG9sZFJlbmRlcmVkKSBvbGRSZW5kZXJlZC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3Qgb2xkRGlmZiA9IHRoaXMucHJldmlld0NvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNsYXVkZS1jb2RlLXByZXZpZXctZGlmZicpO1xuICAgICAgICBpZiAob2xkRGlmZikgb2xkRGlmZi5yZW1vdmUoKTtcblxuICAgICAgICAvLyBTaG93IGNoYXJhY3RlciBjb3VudCBjb21wYXJpc29uXG4gICAgICAgIGNvbnN0IHN0YXRzRGl2ID0gdGhpcy5wcmV2aWV3QXJlYS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1wcmV2aWV3LXN0YXRzJyB9KTtcbiAgICAgICAgc3RhdHNEaXYuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGAke3QoJ3ByZXZpZXcub3JpZ2luYWxMYWJlbCcpfSAke29yaWdpbmFsQ29udGVudC5sZW5ndGh9ICR7dCgncHJldmlldy5jaGFyc0xhYmVsJyl9YCB9KTtcbiAgICAgICAgc3RhdHNEaXYuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGAgXHUyMTkyICR7dCgncHJldmlldy5tb2RpZmllZExhYmVsJyl9ICR7bW9kaWZpZWRDb250ZW50Lmxlbmd0aH0gJHt0KCdwcmV2aWV3LmNoYXJzTGFiZWwnKX1gIH0pO1xuICAgICAgICBzdGF0c0Rpdi5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogYCAoJHttb2RpZmllZENvbnRlbnQubGVuZ3RoIC0gb3JpZ2luYWxDb250ZW50Lmxlbmd0aCA+PSAwID8gJysnIDogJyd9JHttb2RpZmllZENvbnRlbnQubGVuZ3RoIC0gb3JpZ2luYWxDb250ZW50Lmxlbmd0aH0pYCB9KTtcblxuICAgICAgICAvLyBTaG93IHRoZSBtb2RpZmllZCBjb250ZW50IGluIGEgY29kZSBibG9jayAoUmF3IHRhYilcbiAgICAgICAgY29uc3QgcHJldmlld0NvbnRlbnQgPSB0aGlzLnByZXZpZXdBcmVhLmNyZWF0ZUVsKCdwcmUnLCB7IGNsczogJ2NsYXVkZS1jb2RlLXByZXZpZXctY29udGVudCcgfSk7XG4gICAgICAgIHByZXZpZXdDb250ZW50LmNyZWF0ZUVsKCdjb2RlJywgeyB0ZXh0OiBtb2RpZmllZENvbnRlbnQgfSk7XG4gICAgICAgIHRoaXMucHJldmlld0FyZWEuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpOyAvLyBIaWRkZW4gYnkgZGVmYXVsdCwgRGlmZiB0YWIgaXMgYWN0aXZlXG5cbiAgICAgICAgLy8gQ3JlYXRlIGRpZmYgdmlldyAoc2hvd24gYnkgZGVmYXVsdClcbiAgICAgICAgY29uc3QgZGlmZkFyZWEgPSB0aGlzLnByZXZpZXdDb250ZW50Q29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1wcmV2aWV3LWRpZmYgY2xhdWRlLWNvZGUtdmlzaWJsZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXNlIHNhZmUgRE9NIG1hbmlwdWxhdGlvblxuICAgICAgICBjb25zdCBkaWZmRWxlbWVudCA9IHRoaXMuZ2VuZXJhdGVEaWZmRWxlbWVudChvcmlnaW5hbENvbnRlbnQsIG1vZGlmaWVkQ29udGVudCk7XG4gICAgICAgIGRpZmZBcmVhLmFwcGVuZENoaWxkKGRpZmZFbGVtZW50KTtcblxuICAgICAgICAvLyBDcmVhdGUgcmVuZGVyZWQgbWFya2Rvd24gdmlld1xuICAgICAgICBjb25zdCByZW5kZXJlZEFyZWEgPSB0aGlzLnByZXZpZXdDb250ZW50Q29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1wcmV2aWV3LXJlbmRlcmVkIGNsYXVkZS1jb2RlLWhpZGRlbidcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIHRoZSBtYXJrZG93blxuICAgICAgICB2b2lkIE1hcmtkb3duUmVuZGVyZXIucmVuZGVyKFxuICAgICAgICAgICAgdGhpcy5hcHAsXG4gICAgICAgICAgICBtb2RpZmllZENvbnRlbnQsXG4gICAgICAgICAgICByZW5kZXJlZEFyZWEsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb3RlUGF0aCxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHByZXZpZXcgYW5kIGNsZWFyIGNvbnRleHQgc3RhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGhpZGVQcmV2aWV3KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhpZGVQcmV2aWV3VUkoKTtcblxuICAgICAgICAvLyBDbGVhciBwcmV2aWV3IHN0YXRlIGZyb20gY29udGV4dFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDdXJyZW50Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnBlbmRpbmdQcmV2aWV3Q29udGVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29udGV4dC5vcmlnaW5hbFByZXZpZXdDb250ZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgcHJldmlldyBVSSBvbmx5ICh3aXRob3V0IGNsZWFyaW5nIGNvbnRleHQgc3RhdGUpXG4gICAgICogVXNlZCB3aGVuIHN3aXRjaGluZyBub3RlcyB0byBwcmVzZXJ2ZSBlYWNoIG5vdGUncyBwcmV2aWV3IHN0YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBoaWRlUHJldmlld1VJKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBwcmV2aWV3U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGF1ZGUtY29kZS1wcmV2aWV3LXNlY3Rpb24nKTtcbiAgICAgICAgaWYgKHByZXZpZXdTZWN0aW9uKSB7XG4gICAgICAgICAgICBwcmV2aWV3U2VjdGlvbi5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICBwcmV2aWV3U2VjdGlvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtdmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdG9yZSBwcmV2aWV3IGZyb20gc3RvcmVkIGNvbnRleHQgc3RhdGUgKHVzZWQgd2hlbiBzd2l0Y2hpbmcgbm90ZXMpXG4gICAgICovXG4gICAgcHJpdmF0ZSByZXN0b3JlUHJldmlldyhtb2RpZmllZENvbnRlbnQ6IHN0cmluZywgb3JpZ2luYWxDb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcHJldmlld1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhdWRlLWNvZGUtcHJldmlldy1zZWN0aW9uJyk7XG4gICAgICAgIGlmIChwcmV2aWV3U2VjdGlvbikge1xuICAgICAgICAgICAgcHJldmlld1NlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICAgICAgcHJldmlld1NlY3Rpb24uYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLXZpc2libGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldmlld0FyZWEuZW1wdHkoKTtcblxuICAgICAgICAvLyBSZW1vdmUgb2xkIHJlbmRlcmVkIGFuZCBkaWZmIHZpZXdzIGlmIHRoZXkgZXhpc3RcbiAgICAgICAgY29uc3Qgb2xkUmVuZGVyZWQgPSB0aGlzLnByZXZpZXdDb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jbGF1ZGUtY29kZS1wcmV2aWV3LXJlbmRlcmVkJyk7XG4gICAgICAgIGlmIChvbGRSZW5kZXJlZCkgb2xkUmVuZGVyZWQucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IG9sZERpZmYgPSB0aGlzLnByZXZpZXdDb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jbGF1ZGUtY29kZS1wcmV2aWV3LWRpZmYnKTtcbiAgICAgICAgaWYgKG9sZERpZmYpIG9sZERpZmYucmVtb3ZlKCk7XG5cbiAgICAgICAgLy8gU2hvdyBjaGFyYWN0ZXIgY291bnQgY29tcGFyaXNvblxuICAgICAgICBjb25zdCBzdGF0c0RpdiA9IHRoaXMucHJldmlld0FyZWEuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2xhdWRlLWNvZGUtcHJldmlldy1zdGF0cycgfSk7XG4gICAgICAgIHN0YXRzRGl2LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBgJHt0KCdwcmV2aWV3Lm9yaWdpbmFsTGFiZWwnKX0gJHtvcmlnaW5hbENvbnRlbnQubGVuZ3RofSAke3QoJ3ByZXZpZXcuY2hhcnNMYWJlbCcpfWAgfSk7XG4gICAgICAgIHN0YXRzRGl2LmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBgIFx1MjE5MiAke3QoJ3ByZXZpZXcubW9kaWZpZWRMYWJlbCcpfSAke21vZGlmaWVkQ29udGVudC5sZW5ndGh9ICR7dCgncHJldmlldy5jaGFyc0xhYmVsJyl9YCB9KTtcbiAgICAgICAgc3RhdHNEaXYuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGAgKCR7bW9kaWZpZWRDb250ZW50Lmxlbmd0aCAtIG9yaWdpbmFsQ29udGVudC5sZW5ndGggPj0gMCA/ICcrJyA6ICcnfSR7bW9kaWZpZWRDb250ZW50Lmxlbmd0aCAtIG9yaWdpbmFsQ29udGVudC5sZW5ndGh9KWAgfSk7XG5cbiAgICAgICAgLy8gU2hvdyB0aGUgbW9kaWZpZWQgY29udGVudCBpbiBhIGNvZGUgYmxvY2sgKFJhdyB0YWIpXG4gICAgICAgIGNvbnN0IHByZXZpZXdDb250ZW50ID0gdGhpcy5wcmV2aWV3QXJlYS5jcmVhdGVFbCgncHJlJywgeyBjbHM6ICdjbGF1ZGUtY29kZS1wcmV2aWV3LWNvbnRlbnQnIH0pO1xuICAgICAgICBwcmV2aWV3Q29udGVudC5jcmVhdGVFbCgnY29kZScsIHsgdGV4dDogbW9kaWZpZWRDb250ZW50IH0pO1xuICAgICAgICB0aGlzLnByZXZpZXdBcmVhLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTsgLy8gSGlkZGVuIGJ5IGRlZmF1bHQsIERpZmYgdGFiIGlzIGFjdGl2ZVxuXG4gICAgICAgIC8vIENyZWF0ZSBkaWZmIHZpZXcgKHNob3duIGJ5IGRlZmF1bHQpXG4gICAgICAgIGNvbnN0IGRpZmZBcmVhID0gdGhpcy5wcmV2aWV3Q29udGVudENvbnRhaW5lci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtcHJldmlldy1kaWZmIGNsYXVkZS1jb2RlLXZpc2libGUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVzZSBzYWZlIERPTSBtYW5pcHVsYXRpb25cbiAgICAgICAgY29uc3QgZGlmZkVsZW1lbnQgPSB0aGlzLmdlbmVyYXRlRGlmZkVsZW1lbnQob3JpZ2luYWxDb250ZW50LCBtb2RpZmllZENvbnRlbnQpO1xuICAgICAgICBkaWZmQXJlYS5hcHBlbmRDaGlsZChkaWZmRWxlbWVudCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHJlbmRlcmVkIG1hcmtkb3duIHZpZXdcbiAgICAgICAgY29uc3QgcmVuZGVyZWRBcmVhID0gdGhpcy5wcmV2aWV3Q29udGVudENvbnRhaW5lci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtcHJldmlldy1yZW5kZXJlZCBjbGF1ZGUtY29kZS1oaWRkZW4nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlbmRlciB0aGUgbWFya2Rvd25cbiAgICAgICAgdm9pZCBNYXJrZG93blJlbmRlcmVyLnJlbmRlcihcbiAgICAgICAgICAgIHRoaXMuYXBwLFxuICAgICAgICAgICAgbW9kaWZpZWRDb250ZW50LFxuICAgICAgICAgICAgcmVuZGVyZWRBcmVhLFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm90ZVBhdGgsXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdG9yZSBzdHJlYW1pbmcgcmVzdWx0IGZyb20gY29udGV4dCAodXNlZCB3aGVuIHN3aXRjaGluZyBiYWNrIHRvIGEgcnVubmluZyBub3RlKVxuICAgICAqL1xuICAgIHByaXZhdGUgcmVzdG9yZVN0cmVhbWluZ1Jlc3VsdCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgLy8gU2hvdyB0aGUgcmVzdWx0IHNlY3Rpb25cbiAgICAgICAgY29uc3QgcmVzdWx0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGF1ZGUtY29kZS1yZXN1bHQtc2VjdGlvbicpO1xuICAgICAgICBpZiAocmVzdWx0U2VjdGlvbikge1xuICAgICAgICAgICAgcmVzdWx0U2VjdGlvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICByZXN1bHRTZWN0aW9uLmFkZENsYXNzKCdjbGF1ZGUtY29kZS12aXNpYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaG93IHJlc3VsdCBhcmVhXG4gICAgICAgIHRoaXMucmVzdWx0QXJlYS5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMucmVzdWx0QXJlYS5hZGRDbGFzcygnY2xhdWRlLWNvZGUtdmlzaWJsZScpO1xuXG4gICAgICAgIC8vIENsZWFyIGFuZCByZWNyZWF0ZSBzdHJlYW1pbmcgZWxlbWVudFxuICAgICAgICB0aGlzLnJlc3VsdEFyZWEuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudCA9IHRoaXMucmVzdWx0QXJlYS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtcmVzdWx0LXN0cmVhbWluZyBtYXJrZG93bi1yZW5kZXJlZCdcbiAgICAgICAgfSk7XG4gICAgICAgICh0aGlzLmN1cnJlbnRSZXN1bHRTdHJlYW1pbmdFbGVtZW50IGFzIHVua25vd24gYXMgU3RyZWFtaW5nRWxlbWVudERhdGEpLmFjY3VtdWxhdGVkVGV4dCA9IHRleHQ7XG5cbiAgICAgICAgLy8gUmVzZXQgcmVuZGVyaW5nIHN0YXRlIGFuZCByZW5kZXIgdGhlIGFjY3VtdWxhdGVkIHRleHRcbiAgICAgICAgdGhpcy5sYXN0UmVuZGVyZWRUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuaGl0RmluYWxDb250ZW50TWFya2VyID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVuZGVyU3RyZWFtaW5nTWFya2Rvd24odGV4dCk7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnW1Jlc3RvcmUgU3RyZWFtaW5nIFJlc3VsdF0gUmVzdG9yZWQgdGV4dCBsZW5ndGg6JywgdGV4dC5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCB0ZXh0IHRvIHJlc3VsdCBwYW5lbCBVSSBvbmx5IChjb250ZXh0IHVwZGF0ZSBoYW5kbGVkIGJ5IGFwcGVuZE91dHB1dFRvTm90ZSlcbiAgICAgKiBVc2VkIGZvciBzdHJlYW1pbmcgYXNzaXN0YW50IG1lc3NhZ2VzIHdoZW4gdGhlIGN1cnJlbnQgbm90ZSBpcyBhY3RpdmVcbiAgICAgKi9cbiAgICBwcml2YXRlIGFwcGVuZFRvUmVzdWx0VUkodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1tBcHBlbmQgVG8gUmVzdWx0IFVJXSBDYWxsZWQgd2l0aCB0ZXh0OicsIHRleHQuc3Vic3RyaW5nKDAsIDUwKSk7XG5cbiAgICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBoaXQgdGhlIEZJTkFMLUNPTlRFTlQgbWFya2VyLCBpZ25vcmUgYWxsIHN1YnNlcXVlbnQgY2h1bmtzXG4gICAgICAgIGlmICh0aGlzLmhpdEZpbmFsQ29udGVudE1hcmtlcikge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnW0FwcGVuZCBUbyBSZXN1bHQgVUldIEFscmVhZHkgaGl0IEZJTkFMLUNPTlRFTlQgbWFya2VyIGZsYWcsIGlnbm9yaW5nIGNodW5rJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaG93IHRoZSByZXN1bHQgc2VjdGlvbiBpZiBub3QgYWxyZWFkeSB2aXNpYmxlXG4gICAgICAgIGNvbnN0IHJlc3VsdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhdWRlLWNvZGUtcmVzdWx0LXNlY3Rpb24nKTtcbiAgICAgICAgaWYgKHJlc3VsdFNlY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tBcHBlbmQgVG8gUmVzdWx0IFVJXSBTaG93aW5nIHJlc3VsdCBzZWN0aW9uJyk7XG4gICAgICAgICAgICByZXN1bHRTZWN0aW9uLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIHJlc3VsdFNlY3Rpb24uYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLXZpc2libGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNob3cgcmVzdWx0IGFyZWEgKGJ1dCBrZWVwIHN0YXR1cyB2aXNpYmxlIC0gcHJvY2VzcyBtYXkgc3RpbGwgYmUgcnVubmluZyEpXG4gICAgICAgIC8vIFRoZSBzdGF0dXMgd2lsbCBiZSBoaWRkZW4gd2hlbiB0aGUgcHJvY2VzcyBjb21wbGV0ZXMgdmlhIGhpZGVTdGF0dXMoKVxuICAgICAgICB0aGlzLnJlc3VsdEFyZWEucmVtb3ZlQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnJlc3VsdEFyZWEuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLXZpc2libGUnKTtcblxuICAgICAgICAvLyBDcmVhdGUgc3RyZWFtaW5nIGVsZW1lbnQgaWYgbmVlZGVkICh3aXRoIG1hcmtkb3duLXJlbmRlcmVkIGNsYXNzKVxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFJlc3VsdFN0cmVhbWluZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tBcHBlbmQgVG8gUmVzdWx0IFVJXSBDcmVhdGluZyBzdHJlYW1pbmcgZWxlbWVudCcpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudCA9IHRoaXMucmVzdWx0QXJlYS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLXJlc3VsdC1zdHJlYW1pbmcgbWFya2Rvd24tcmVuZGVyZWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFN0b3JlIGFjY3VtdWxhdGVkIHRleHQgc2VwYXJhdGVseSBmb3IgbWFya2Rvd24gcmVuZGVyaW5nXG4gICAgICAgICAgICAodGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudCBhcyB1bmtub3duIGFzIFN0cmVhbWluZ0VsZW1lbnREYXRhKS5hY2N1bXVsYXRlZFRleHQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldCBhY2N1bXVsYXRlZCB0ZXh0XG4gICAgICAgIGNvbnN0IGFjY3VtdWxhdGVkVGV4dCA9ICh0aGlzLmN1cnJlbnRSZXN1bHRTdHJlYW1pbmdFbGVtZW50IGFzIHVua25vd24gYXMgU3RyZWFtaW5nRWxlbWVudERhdGEpLmFjY3VtdWxhdGVkVGV4dCB8fCAnJztcblxuICAgICAgICAvLyBDaGVjayBpZiB3ZSd2ZSBhbHJlYWR5IGVuY291bnRlcmVkIEZJTkFMLUNPTlRFTlQgbWFya2VyIGluIHRoZSBleGlzdGluZyB0ZXh0XG4gICAgICAgIGlmIChhY2N1bXVsYXRlZFRleHQuaW5jbHVkZXMoJy0tLUZJTkFMLUNPTlRFTlQtLS0nKSkge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnW0FwcGVuZCBUbyBSZXN1bHQgVUldIEZvdW5kIEZJTkFMLUNPTlRFTlQgaW4gZXhpc3RpbmcgdGV4dCwgY2xlYW5pbmcgdXAgYW5kIHNldHRpbmcgZmxhZycpO1xuICAgICAgICAgICAgdGhpcy5jbGVhbnVwRmluYWxDb250ZW50RnJvbVN0cmVhbSgpO1xuICAgICAgICAgICAgdGhpcy5oaXRGaW5hbENvbnRlbnRNYXJrZXIgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBjaHVuayB3b3VsZCBpbnRyb2R1Y2UgdGhlIEZJTkFMLUNPTlRFTlQgbWFya2VyXG4gICAgICAgIGNvbnN0IGNvbWJpbmVkVGV4dCA9IGFjY3VtdWxhdGVkVGV4dCArIHRleHQ7XG4gICAgICAgIGlmIChjb21iaW5lZFRleHQuaW5jbHVkZXMoJy0tLUZJTkFMLUNPTlRFTlQtLS0nKSkge1xuICAgICAgICAgICAgLy8gRmluZCBob3cgbXVjaCBvZiB0aGlzIGNodW5rIHdlIGNhbiBhZGQgYmVmb3JlIHRoZSBtYXJrZXJcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsQ29udGVudEluZGV4ID0gY29tYmluZWRUZXh0LmluZGV4T2YoJy0tLUZJTkFMLUNPTlRFTlQtLS0nKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHRCZWZvcmVNYXJrZXIgPSBjb21iaW5lZFRleHQuc3Vic3RyaW5nKDAsIGZpbmFsQ29udGVudEluZGV4KTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGFjY3VtdWxhdGVkIHRleHQgYW5kIHJlbmRlclxuICAgICAgICAgICAgKHRoaXMuY3VycmVudFJlc3VsdFN0cmVhbWluZ0VsZW1lbnQgYXMgdW5rbm93biBhcyBTdHJlYW1pbmdFbGVtZW50RGF0YSkuYWNjdW11bGF0ZWRUZXh0ID0gdGV4dEJlZm9yZU1hcmtlcjtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU3RyZWFtaW5nTWFya2Rvd24odGV4dEJlZm9yZU1hcmtlcik7XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tBcHBlbmQgVG8gUmVzdWx0IFVJXSBIaXQgRklOQUwtQ09OVEVOVCBtYXJrZXIsIHNldHRpbmcgZmxhZycpO1xuICAgICAgICAgICAgdGhpcy5oaXRGaW5hbENvbnRlbnRNYXJrZXIgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm9ybWFsIGNhc2U6IGFkZCB0aGUgZnVsbCBjaHVuayBhbmQgcmUtcmVuZGVyIG1hcmtkb3duXG4gICAgICAgICh0aGlzLmN1cnJlbnRSZXN1bHRTdHJlYW1pbmdFbGVtZW50IGFzIHVua25vd24gYXMgU3RyZWFtaW5nRWxlbWVudERhdGEpLmFjY3VtdWxhdGVkVGV4dCA9IGNvbWJpbmVkVGV4dDtcbiAgICAgICAgdGhpcy5yZW5kZXJTdHJlYW1pbmdNYXJrZG93bihjb21iaW5lZFRleHQpO1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1tBcHBlbmQgVG8gUmVzdWx0IFVJXSBBcHBlbmRlZCBjaHVuaywgYWNjdW11bGF0ZWQgbGVuZ3RoOicsIGNvbWJpbmVkVGV4dC5sZW5ndGgpO1xuXG4gICAgICAgIC8vIFNtYXJ0IGF1dG8tc2Nyb2xsIChyZXNwZWN0cyB1c2VyIHNjcm9sbCBwb3NpdGlvbilcbiAgICAgICAgdGhpcy5hdXRvU2Nyb2xsUmVzdWx0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGFjY3VtdWxhdGVkIG1hcmtkb3duIHRleHQgYnkgZGV0ZWN0aW5nIGFuZCByZW5kZXJpbmcgY29tcGxldGUgYmxvY2tzXG4gICAgICogQXBwZW5kcyBjb21wbGV0ZSBwYXJhZ3JhcGhzL2Jsb2NrcyBhcyBpbmRlcGVuZGVudCBjaHVua3NcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbmRlclN0cmVhbWluZ01hcmtkb3duKHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFJlc3VsdFN0cmVhbWluZ0VsZW1lbnQpIHJldHVybjtcblxuICAgICAgICAvLyBHZXQgdGhlIG5ldyBjb250ZW50XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSB0ZXh0LnN1YnN0cmluZyh0aGlzLmxhc3RSZW5kZXJlZFRleHQubGVuZ3RoKTtcbiAgICAgICAgaWYgKCFuZXdDb250ZW50KSByZXR1cm47XG5cbiAgICAgICAgLy8gRXh0cmFjdCB3aGF0IHdlIGNhbiByZW5kZXIgbm93XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVCbG9ja3MsIHJlbWFpbmluZ1RleHQgfSA9IHRoaXMuZXh0cmFjdENvbXBsZXRlQmxvY2tzKG5ld0NvbnRlbnQpO1xuXG4gICAgICAgIGlmIChjb21wbGV0ZUJsb2Nrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgYW55IGluY29tcGxldGUgcGxhaW4gdGV4dCBmcm9tIGxhc3QgcmVuZGVyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUluY29tcGxldGVQbGFpblRleHQoKTtcblxuICAgICAgICAgICAgLy8gUmVuZGVyIGVhY2ggY29tcGxldGUgYmxvY2sgYXMgYSBzZXBhcmF0ZSBjaHVua1xuICAgICAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiBjb21wbGV0ZUJsb2Nrcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kTWFya2Rvd25CbG9jayhibG9jayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB3aGF0IHdlJ3ZlIHJlbmRlcmVkXG4gICAgICAgICAgICB0aGlzLmxhc3RSZW5kZXJlZFRleHQgPSB0aGlzLmxhc3RSZW5kZXJlZFRleHQgKyBuZXdDb250ZW50LnN1YnN0cmluZygwLCBuZXdDb250ZW50Lmxlbmd0aCAtIHJlbWFpbmluZ1RleHQubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGVuZCBhbnkgcmVtYWluaW5nIGluY29tcGxldGUgdGV4dCBhcyBwbGFpbiB0ZXh0XG4gICAgICAgIGlmIChyZW1haW5pbmdUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZFBsYWluVGV4dChyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgY29tcGxldGUgbWFya2Rvd24gYmxvY2tzIGZyb20gdGhlIG5ldyBjb250ZW50XG4gICAgICogUmV0dXJucyBibG9ja3MgdGhhdCBhcmUgcmVhZHkgdG8gYmUgcmVuZGVyZWQgYW5kIHJlbWFpbmluZyBpbmNvbXBsZXRlIHRleHRcbiAgICAgKi9cbiAgICBwcml2YXRlIGV4dHJhY3RDb21wbGV0ZUJsb2NrcyhuZXdDb250ZW50OiBzdHJpbmcpOiB7IGNvbXBsZXRlQmxvY2tzOiBzdHJpbmdbXSwgcmVtYWluaW5nVGV4dDogc3RyaW5nIH0ge1xuICAgICAgICBjb25zdCBibG9ja3M6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgLy8gU3BsaXQgYnkgcGFyYWdyYXBoIGJyZWFrcyAoZG91YmxlIG5ld2xpbmUpXG4gICAgICAgIGNvbnN0IHBhcmFncmFwaHMgPSBuZXdDb250ZW50LnNwbGl0KC9cXG5cXG4rLyk7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBtb3JlIHRoYW4gb25lIHBhcmFncmFwaCwgYWxsIGJ1dCB0aGUgbGFzdCBhcmUgY29tcGxldGVcbiAgICAgICAgaWYgKHBhcmFncmFwaHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhZ3JhcGhzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhZ3JhcGhzW2ldLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICBibG9ja3MucHVzaChwYXJhZ3JhcGhzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlQmxvY2tzOiBibG9ja3MsXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nVGV4dDogcGFyYWdyYXBoc1twYXJhZ3JhcGhzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gY29tcGxldGUgYmxvY2tzIHlldCwgZXZlcnl0aGluZyBpcyByZW1haW5pbmdcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbXBsZXRlQmxvY2tzOiBbXSxcbiAgICAgICAgICAgIHJlbWFpbmluZ1RleHQ6IG5ld0NvbnRlbnRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgaW5jb21wbGV0ZSBwbGFpbiB0ZXh0IGZyb20gdGhlIGxhc3QgcmVuZGVyXG4gICAgICogKHdpbGwgYmUgcmUtYWRkZWQgYXMgcGFydCBvZiBjb21wbGV0ZSBibG9jayBvciBuZXcgcGxhaW4gdGV4dClcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZUluY29tcGxldGVQbGFpblRleHQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGxhc3RDaGlsZCA9IHRoaXMuY3VycmVudFJlc3VsdFN0cmVhbWluZ0VsZW1lbnQubGFzdENoaWxkO1xuICAgICAgICAvLyBPbmx5IHJlbW92ZSBpZiBpdCdzIGEgcGxhaW4gdGV4dCBub2RlIChub3QgYSBtYXJrZG93bi1ibG9jaylcbiAgICAgICAgaWYgKGxhc3RDaGlsZCAmJiBsYXN0Q2hpbGQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRTdHJlYW1pbmdFbGVtZW50LnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgYSBjb21wbGV0ZSBtYXJrZG93biBibG9jayBhcyBhbiBpbmRlcGVuZGVudCByZW5kZXJlZCBjaHVua1xuICAgICAqL1xuICAgIHByaXZhdGUgYXBwZW5kTWFya2Rvd25CbG9jayhibG9ja1RleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFJlc3VsdFN0cmVhbWluZ0VsZW1lbnQpIHJldHVybjtcblxuICAgICAgICAvLyBDcmVhdGUgYSBjb250YWluZXIgZm9yIHRoaXMgYmxvY2tcbiAgICAgICAgY29uc3QgYmxvY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmxvY2tDb250YWluZXIuYWRkQ2xhc3MoJ21hcmtkb3duLWJsb2NrJyk7XG5cbiAgICAgICAgdm9pZCBNYXJrZG93blJlbmRlcmVyLnJlbmRlcihcbiAgICAgICAgICAgIHRoaXMuYXBwLFxuICAgICAgICAgICAgYmxvY2tUZXh0LFxuICAgICAgICAgICAgYmxvY2tDb250YWluZXIsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb3RlUGF0aCxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKS5jYXRjaCgoZTogdW5rbm93bikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0FwcGVuZCBNYXJrZG93biBCbG9ja10gRXJyb3I6JywgZSk7XG4gICAgICAgICAgICBibG9ja0NvbnRhaW5lci50ZXh0Q29udGVudCA9IGJsb2NrVGV4dDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBibG9ja1xuICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRTdHJlYW1pbmdFbGVtZW50LmFwcGVuZENoaWxkKGJsb2NrQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgcGxhaW4gdGV4dCB3aXRob3V0IGFueSBwcm9jZXNzaW5nXG4gICAgICovXG4gICAgcHJpdmF0ZSBhcHBlbmRQbGFpblRleHQodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHBsYWluIHRleHQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGxhc3RDaGlsZCA9IHRoaXMuY3VycmVudFJlc3VsdFN0cmVhbWluZ0VsZW1lbnQubGFzdENoaWxkO1xuICAgICAgICBpZiAobGFzdENoaWxkICYmIGxhc3RDaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICAgIC8vIFJFUExBQ0UgZXhpc3RpbmcgdGV4dCBub2RlIChyZW1haW5pbmdUZXh0IGFscmVhZHkgY29udGFpbnMgdGhlIGZ1bGwgdGV4dClcbiAgICAgICAgICAgIGxhc3RDaGlsZC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgbmV3IHRleHQgbm9kZVxuICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJlc3VsdFN0cmVhbWluZ0VsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiB1cCBGSU5BTC1DT05URU5UIG1hcmtlciBhbmQgZXZlcnl0aGluZyBhZnRlciBpdCBmcm9tIHRoZSBzdHJlYW1pbmcgZWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgY2xlYW51cEZpbmFsQ29udGVudEZyb21TdHJlYW0oKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGZ1bGxUZXh0ID0gdGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudC50ZXh0Q29udGVudCB8fCAnJztcbiAgICAgICAgY29uc3QgZmluYWxDb250ZW50SW5kZXggPSBmdWxsVGV4dC5pbmRleE9mKCctLS1GSU5BTC1DT05URU5ULS0tJyk7XG5cbiAgICAgICAgaWYgKGZpbmFsQ29udGVudEluZGV4ID09PSAtMSkgcmV0dXJuOyAvLyBObyBtYXJrZXIgZm91bmRcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdbQ2xlYW51cCBGSU5BTC1DT05URU5UXSBSZW1vdmluZyBtYXJrZXIgYW5kIGNvbnRlbnQgYWZ0ZXIgaXQnKTtcblxuICAgICAgICAvLyBHZXQgdGhlIHRleHQgd2Ugd2FudCB0byBrZWVwIChiZWZvcmUgdGhlIG1hcmtlcilcbiAgICAgICAgY29uc3QgdGV4dFRvS2VlcCA9IGZ1bGxUZXh0LnN1YnN0cmluZygwLCBmaW5hbENvbnRlbnRJbmRleCkudHJpbSgpO1xuXG4gICAgICAgIC8vIENsZWFyIGFsbCBjdXJyZW50IGNvbnRlbnRcbiAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudC5lbXB0eSgpO1xuXG4gICAgICAgIC8vIFJlLWFkZCBvbmx5IHRoZSB0ZXh0IGJlZm9yZSB0aGUgbWFya2VyIGFzIGEgc2luZ2xlIGNodW5rXG4gICAgICAgIHRoaXMuY3VycmVudFJlc3VsdFN0cmVhbWluZ0VsZW1lbnQuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgICAgICBjbHM6ICdzdHJlYW1pbmctdGV4dC1jaHVuaycsXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0VG9LZWVwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1tDbGVhbnVwIEZJTkFMLUNPTlRFTlRdIENsZWFuZWQgdXAsIGtlcHQgdGV4dCBsZW5ndGg6JywgdGV4dFRvS2VlcC5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgbWFya2Rvd24gY29udGVudCBpbiByZXN1bHQgc2VjdGlvbiAoZm9yIG5vbi1zdHJlYW1pbmcgYXNzaXN0YW50IG1lc3NhZ2VzKVxuICAgICAqL1xuICAgIHByaXZhdGUgc2hvd1Jlc3VsdE1hcmtkb3duKHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdbU2hvdyBSZXN1bHQgTWFya2Rvd25dIENhbGxlZCB3aXRoIHRleHQgbGVuZ3RoOicsIHRleHQubGVuZ3RoKTtcblxuICAgICAgICAvLyBGaWx0ZXIgb3V0IEZJTkFMLUNPTlRFTlQgYW5kIGV2ZXJ5dGhpbmcgYWZ0ZXIgaXRcbiAgICAgICAgbGV0IGZpbHRlcmVkVGV4dCA9IHRleHQ7XG4gICAgICAgIGNvbnN0IGZpbmFsQ29udGVudEluZGV4ID0gdGV4dC5pbmRleE9mKCctLS1GSU5BTC1DT05URU5ULS0tJyk7XG4gICAgICAgIGlmIChmaW5hbENvbnRlbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkVGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIGZpbmFsQ29udGVudEluZGV4KS50cmltKCk7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbU2hvdyBSZXN1bHQgTWFya2Rvd25dIEZpbHRlcmVkIEZJTkFMLUNPTlRFTlQsIG5ldyBsZW5ndGg6JywgZmlsdGVyZWRUZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaG93IHRoZSByZXN1bHQgc2VjdGlvblxuICAgICAgICBjb25zdCByZXN1bHRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXVkZS1jb2RlLXJlc3VsdC1zZWN0aW9uJyk7XG4gICAgICAgIGlmIChyZXN1bHRTZWN0aW9uKSB7XG4gICAgICAgICAgICByZXN1bHRTZWN0aW9uLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIHJlc3VsdFNlY3Rpb24uYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLXZpc2libGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNob3cgcmVzdWx0IGFyZWEgKGJ1dCBrZWVwIHN0YXR1cyB2aXNpYmxlIC0gcHJvY2VzcyBtYXkgc3RpbGwgYmUgcnVubmluZyEpXG4gICAgICAgIHRoaXMucmVzdWx0QXJlYS5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMucmVzdWx0QXJlYS5hZGRDbGFzcygnY2xhdWRlLWNvZGUtdmlzaWJsZScpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBkaXYgZm9yIHRoaXMgbWFya2Rvd24gY29udGVudFxuICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gdGhpcy5yZXN1bHRBcmVhLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbHM6ICdtYXJrZG93bi1yZW5kZXJlZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIGFzIG1hcmtkb3duXG4gICAgICAgIHZvaWQgTWFya2Rvd25SZW5kZXJlci5yZW5kZXIoXG4gICAgICAgICAgICB0aGlzLmFwcCxcbiAgICAgICAgICAgIGZpbHRlcmVkVGV4dCxcbiAgICAgICAgICAgIGNvbnRlbnREaXYsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb3RlUGF0aCxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKS5jYXRjaCgoZTogdW5rbm93bikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1Nob3cgUmVzdWx0IE1hcmtkb3duXSBSZW5kZXIgZXJyb3I6JywgZSk7XG4gICAgICAgICAgICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gZmlsdGVyZWRUZXh0O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBdXRvLXNjcm9sbCB0byBib3R0b21cbiAgICAgICAgdGhpcy5yZXN1bHRBcmVhLnNjcm9sbFRvcCA9IHRoaXMucmVzdWx0QXJlYS5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgc21hcnQgYXV0by1zY3JvbGwgZGV0ZWN0aW9uIG9uIHJlc3VsdCBhcmVhXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXR1cFNtYXJ0QXV0b1Njcm9sbCgpOiB2b2lkIHtcbiAgICAgICAgLy8gVHJhY2sgd2hlbiB1c2VyIG1hbnVhbGx5IHNjcm9sbHNcbiAgICAgICAgdGhpcy5yZXN1bHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCB9ID0gdGhpcy5yZXN1bHRBcmVhO1xuICAgICAgICAgICAgY29uc3QgaXNOZWFyQm90dG9tID0gc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsVG9wIC0gY2xpZW50SGVpZ2h0IDwgNTA7IC8vIFdpdGhpbiA1MHB4IG9mIGJvdHRvbVxuXG4gICAgICAgICAgICAvLyBJZiB1c2VyIHNjcm9sbGVkIHVwIChhd2F5IGZyb20gYm90dG9tKSwgbWFyayBhcyBtYW51YWxseSBzY3JvbGxlZFxuICAgICAgICAgICAgaWYgKCFpc05lYXJCb3R0b20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJIYXNTY3JvbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIElmIHVzZXIgc2Nyb2xsZWQgYmFjayB0byBib3R0b20sIHJlc3VtZSBhdXRvLXNjcm9sbFxuICAgICAgICAgICAgICAgIHRoaXMudXNlckhhc1Njcm9sbGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF1dG8tc2Nyb2xsIHJlc3VsdCBhcmVhIHRvIGJvdHRvbSAob25seSBpZiB1c2VyIGhhc24ndCBtYW51YWxseSBzY3JvbGxlZCB1cClcbiAgICAgKi9cbiAgICBwcml2YXRlIGF1dG9TY3JvbGxSZXN1bHQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy51c2VySGFzU2Nyb2xsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0QXJlYS5zY3JvbGxUb3AgPSB0aGlzLnJlc3VsdEFyZWEuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgc2Nyb2xsIHN0YXRlIChjYWxsIHdoZW4gc3RhcnRpbmcgbmV3IHJlcXVlc3QpXG4gICAgICovXG4gICAgcHJpdmF0ZSByZXNldFNjcm9sbFN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVzZXJIYXNTY3JvbGxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RSZW5kZXJlZFRleHQgPSAnJzsgLy8gUmVzZXQgaW5jcmVtZW50YWwgcmVuZGVyaW5nIHN0YXRlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluaXNoIHRoZSBzdHJlYW1pbmcgcmVzdWx0IGJsb2NrXG4gICAgICovXG4gICAgcHJpdmF0ZSBmaW5pc2hSZXN1bHRTdHJlYW1pbmcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRSZXN1bHRTdHJlYW1pbmdFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbRmluaXNoIFJlc3VsdCBTdHJlYW1pbmddIENsZWFuaW5nIHVwIHN0cmVhbWluZyBzdGF0ZScpO1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGZ1bGwgYWNjdW11bGF0ZWQgdGV4dFxuICAgICAgICAgICAgY29uc3QgZnVsbEFjY3VtdWxhdGVkVGV4dCA9ICh0aGlzLmN1cnJlbnRSZXN1bHRTdHJlYW1pbmdFbGVtZW50IGFzIHVua25vd24gYXMgU3RyZWFtaW5nRWxlbWVudERhdGEpLmZ1bGxUZXh0IHx8ICcnO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSdzIGFueSB0ZXh0IHdlIGhhdmVuJ3QgcmVuZGVyZWQgeWV0XG4gICAgICAgICAgICBpZiAoZnVsbEFjY3VtdWxhdGVkVGV4dCAmJiBmdWxsQWNjdW11bGF0ZWRUZXh0Lmxlbmd0aCA+IHRoaXMubGFzdFJlbmRlcmVkVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1bnJlbmRlcmVkVGV4dCA9IGZ1bGxBY2N1bXVsYXRlZFRleHQuc3Vic3RyaW5nKHRoaXMubGFzdFJlbmRlcmVkVGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmICh1bnJlbmRlcmVkVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnW0ZpbmlzaCBSZXN1bHQgU3RyZWFtaW5nXSBSZW5kZXJpbmcgZmluYWwgdW5yZW5kZXJlZCB0ZXh0OicsIHVucmVuZGVyZWRUZXh0LnN1YnN0cmluZygwLCA1MCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW55IHBsYWluIHRleHQgbm9kZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0Q2hpbGQgPSB0aGlzLmN1cnJlbnRSZXN1bHRTdHJlYW1pbmdFbGVtZW50Lmxhc3RDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RDaGlsZCAmJiBsYXN0Q2hpbGQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRTdHJlYW1pbmdFbGVtZW50LnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyIHRoZSB1bnJlbmRlcmVkIHBvcnRpb24gYXMgYSBtYXJrZG93biBibG9ja1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZE1hcmtkb3duQmxvY2sodW5yZW5kZXJlZFRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTm8gdW5yZW5kZXJlZCB0ZXh0LCBqdXN0IGNvbnZlcnQgYW55IHJlbWFpbmluZyBwbGFpbiB0ZXh0IHRvIGEgbWFya2Rvd24gYmxvY2tcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0Q2hpbGQgPSB0aGlzLmN1cnJlbnRSZXN1bHRTdHJlYW1pbmdFbGVtZW50Lmxhc3RDaGlsZDtcbiAgICAgICAgICAgICAgICBpZiAobGFzdENoaWxkICYmIGxhc3RDaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nVGV4dCA9IGxhc3RDaGlsZC50ZXh0Q29udGVudCB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ1RleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHBsYWluIHRleHQgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudC5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyIGl0IGFzIGEgZmluYWwgbWFya2Rvd24gYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kTWFya2Rvd25CbG9jayhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSnVzdCB1cGRhdGUgdGhlIENTUyBjbGFzcyAtIGNvbnRlbnQgaXMgYWxyZWFkeSByZW5kZXJlZCBhcyBtYXJrZG93blxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudC5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtcmVzdWx0LXN0cmVhbWluZycpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudC5hZGRDbGFzcygnbWFya2Rvd24tcmVuZGVyZWQnKTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHN0cmVhbWluZyBlbGVtZW50IHJlZmVyZW5jZVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0U3RyZWFtaW5nRWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHJlc3VsdCBwYW5lbCB3aXRoIENsYXVkZSdzIHJlc3BvbnNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzaG93UmVzdWx0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc3VsdEFyZWEuZW1wdHkoKTtcblxuICAgICAgICAvLyBGaWx0ZXIgb3V0IEZJTkFMLUNPTlRFTlQgYW5kIGV2ZXJ5dGhpbmcgYWZ0ZXIgaXRcbiAgICAgICAgbGV0IGZpbHRlcmVkTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIGNvbnN0IGZpbmFsQ29udGVudEluZGV4ID0gbWVzc2FnZS5pbmRleE9mKCctLS1GSU5BTC1DT05URU5ULS0tJyk7XG4gICAgICAgIGlmIChmaW5hbENvbnRlbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkTWVzc2FnZSA9IG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIGZpbmFsQ29udGVudEluZGV4KS50cmltKCk7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbU2hvdyBSZXN1bHRdIEZpbHRlcmVkIEZJTkFMLUNPTlRFTlQsIG9yaWdpbmFsIGxlbmd0aDonLCBtZXNzYWdlLmxlbmd0aCwgJ2ZpbHRlcmVkIGxlbmd0aDonLCBmaWx0ZXJlZE1lc3NhZ2UubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbmRlciBhcyBtYXJrZG93blxuICAgICAgICB2b2lkIE1hcmtkb3duUmVuZGVyZXIucmVuZGVyKFxuICAgICAgICAgICAgdGhpcy5hcHAsXG4gICAgICAgICAgICBmaWx0ZXJlZE1lc3NhZ2UsXG4gICAgICAgICAgICB0aGlzLnJlc3VsdEFyZWEsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb3RlUGF0aCxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCByZXN1bHRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXVkZS1jb2RlLXJlc3VsdC1zZWN0aW9uJyk7XG4gICAgICAgIGlmIChyZXN1bHRTZWN0aW9uKSB7XG4gICAgICAgICAgICByZXN1bHRTZWN0aW9uLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIHJlc3VsdFNlY3Rpb24uYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLXZpc2libGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhpZGUgc3RhdHVzIGFyZWEsIHNob3cgcmVzdWx0IGFyZWFcbiAgICAgICAgdGhpcy5zdGF0dXNJbmRpY2F0b3IuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnN0YXR1c0luZGljYXRvci5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtZmxleC12aXNpYmxlJyk7XG4gICAgICAgIHRoaXMucmVzdWx0QXJlYS5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMucmVzdWx0QXJlYS5hZGRDbGFzcygnY2xhdWRlLWNvZGUtdmlzaWJsZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgcmVzdWx0IHBhbmVsXG4gICAgICovXG4gICAgcHJpdmF0ZSBoaWRlUmVzdWx0KCk6IHZvaWQge1xuICAgICAgICAvLyBIaWRlIHRoZSByZXN1bHQgYXJlYSBidXQgZG9uJ3QgaGlkZSB0aGUgZW50aXJlIHNlY3Rpb24gaWYgc3RhdHVzIGlzIHNob3dpbmdcbiAgICAgICAgdGhpcy5yZXN1bHRBcmVhLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5yZXN1bHRBcmVhLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS12aXNpYmxlJyk7XG4gICAgICAgIHRoaXMucmVzdWx0QXJlYS5lbXB0eSgpO1xuXG4gICAgICAgIC8vIE9ubHkgaGlkZSB0aGUgZW50aXJlIHNlY3Rpb24gaWYgc3RhdHVzIGlzIGFsc28gbm90IHZpc2libGVcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzSW5kaWNhdG9yLmhhc0NsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGF1ZGUtY29kZS1yZXN1bHQtc2VjdGlvbicpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdFNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXN1bHRTZWN0aW9uLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICByZXN1bHRTZWN0aW9uLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS12aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHBlcm1pc3Npb24gYXBwcm92YWwgc2VjdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgc2hvd1Blcm1pc3Npb25BcHByb3ZhbFNlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBlcm1pc3Npb25BcHByb3ZhbFNlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbkFwcHJvdmFsU2VjdGlvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25BcHByb3ZhbFNlY3Rpb24uYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLXZpc2libGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgcGVybWlzc2lvbiBhcHByb3ZhbCBzZWN0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBoaWRlUGVybWlzc2lvbkFwcHJvdmFsU2VjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucGVybWlzc2lvbkFwcHJvdmFsU2VjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9uQXBwcm92YWxTZWN0aW9uLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbkFwcHJvdmFsU2VjdGlvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtdmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGFwcHJvdmUgcGVybWlzc2lvbiBidXR0b24gY2xpY2tcbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZUFwcHJvdmVQZXJtaXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDdXJyZW50Q29udGV4dCgpO1xuICAgICAgICBpZiAoIWNvbnRleHQuY3VycmVudFJlcXVlc3QpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UodCgnbWlzYy5ub1BlbmRpbmdSZXF1ZXN0JykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGlkZSBwZXJtaXNzaW9uIGFwcHJvdmFsIHNlY3Rpb25cbiAgICAgICAgdGhpcy5oaWRlUGVybWlzc2lvbkFwcHJvdmFsU2VjdGlvbigpO1xuXG4gICAgICAgIC8vIEdldCBhY3RpdmUgZmlsZVxuICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTtcbiAgICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKHQoJ25vdGljZS5ub0FjdGl2ZU5vdGUnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIG1hcmtkb3duIHZpZXdcbiAgICAgICAgY29uc3QgbGVhdmVzID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZSgnbWFya2Rvd24nKTtcbiAgICAgICAgbGV0IGFjdGl2ZVZpZXc6IE1hcmtkb3duVmlldyB8IG51bGwgPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGxlYWYgb2YgbGVhdmVzKSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gbGVhZi52aWV3IGFzIE1hcmtkb3duVmlldztcbiAgICAgICAgICAgIGlmICh2aWV3LmZpbGUgJiYgdmlldy5maWxlLnBhdGggPT09IGZpbGUucGF0aCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVZpZXcgPSB2aWV3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhY3RpdmVWaWV3IHx8ICFhY3RpdmVWaWV3LmVkaXRvcikge1xuICAgICAgICAgICAgbmV3IE5vdGljZSh0KCdub3RpY2Uubm9FZGl0b3InKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlZGl0b3IgPSBhY3RpdmVWaWV3LmVkaXRvcjtcblxuICAgICAgICAvLyBQcmVwYXJlIGEgbmV3IHByb21wdCB0ZWxsaW5nIENsYXVkZSB0byBwcm9jZWVkIHdpdGggYnlwYXNzIHBlcm1pc3Npb25zXG4gICAgICAgIGNvbnN0IGFwcHJvdmFsUHJvbXB0ID0gXCJZZXMsIEkgYXBwcm92ZS4gWW91IGhhdmUgcGVybWlzc2lvbmxlc3MgbW9kZSBlbmFibGVkIC0gcGxlYXNlIHByb2NlZWQgd2l0aCB0aGUgYWN0aW9uIHlvdSB3ZXJlIGFza2luZyBhYm91dC4gRG9uJ3QgaGVzaXRhdGUgdG8gZXhlY3V0ZSBpdC5cIjtcblxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcmVxdWVzdCB3aXRoIGJ5cGFzcyBwZXJtaXNzaW9ucyBlbmFibGVkXG4gICAgICAgIGNvbnN0IG5ld1JlcXVlc3Q6IENsYXVkZUNvZGVSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgLi4uY29udGV4dC5jdXJyZW50UmVxdWVzdCxcbiAgICAgICAgICAgIHVzZXJQcm9tcHQ6IGFwcHJvdmFsUHJvbXB0LFxuICAgICAgICAgICAgYnlwYXNzUGVybWlzc2lvbnM6IHRydWUsXG4gICAgICAgICAgICBjb25maWdEaXI6IHRoaXMuYXBwLnZhdWx0LmNvbmZpZ0RpclxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVSVxuICAgICAgICB0aGlzLnJ1bkJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucnVuQnV0dG9uLnRleHRDb250ZW50ID0gdCgnaW5wdXQucnVubmluZ0J1dHRvbicpO1xuICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1pbmxpbmUtdmlzaWJsZScpO1xuICAgICAgICB0aGlzLm91dHB1dFJlbmRlcmVyLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuaGlkZVByZXZpZXcoKTtcbiAgICAgICAgdGhpcy5oaWRlUmVzdWx0KCk7XG5cbiAgICAgICAgLy8gU2hvdyBzdGF0dXMgd2l0aCBlbGFwc2VkIHRpbWUgdHJhY2tpbmdcbiAgICAgICAgdGhpcy5zaG93U3RhdHVzKCdcdUQ4M0RcdUREMTMgJyArIHQoJ3N0YXR1cy5ydW5uaW5nQXV0aG9yaXplZCcpICsgJyAuLi4gMC4wcycpO1xuICAgICAgICB0aGlzLnN0YXJ0RWxhcHNlZFRpbWVUcmFja2luZygnXHVEODNEXHVERDEzICcgKyB0KCdzdGF0dXMucnVubmluZ0F1dGhvcml6ZWQnKSk7XG5cbiAgICAgICAgLy8gQ2FwdHVyZSB0aGUgbm90ZSBwYXRoIGZvciB0aGlzIHNwZWNpZmljIHJ1blxuICAgICAgICBjb25zdCBydW5Ob3RlUGF0aCA9IGZpbGUucGF0aDtcblxuICAgICAgICAvLyBSdW4gQ2xhdWRlIENvZGUgd2l0aCBieXBhc3MgcGVybWlzc2lvbnNcbiAgICAgICAgY29udGV4dC5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRleHQucnVubmVyLnJ1bihcbiAgICAgICAgICAgIG5ld1JlcXVlc3QsXG4gICAgICAgICAgICAobGluZTogc3RyaW5nLCBpc01hcmtkb3duPzogYm9vbGVhbiwgaXNTdHJlYW1pbmc/OiBib29sZWFuIHwgc3RyaW5nLCBpc0Fzc2lzdGFudE1lc3NhZ2U/OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRPdXRwdXRUb05vdGUocnVuTm90ZVBhdGgsIGxpbmUsIGlzTWFya2Rvd24sIGlzU3RyZWFtaW5nLCBpc0Fzc2lzdGFudE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROb3RlUGF0aCA9PT0gcnVuTm90ZVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXNGcm9tT3V0cHV0KGxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb250ZXh0LmlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICBjb250ZXh0LmN1cnJlbnRSZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICBjb250ZXh0LmV4ZWN1dGlvblN0YXJ0VGltZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29udGV4dC5iYXNlU3RhdHVzTWVzc2FnZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xuICAgICAgICB0aGlzLmhpZGVTdGF0dXMoKTtcblxuICAgICAgICAvLyBVcGRhdGUgVUlcbiAgICAgICAgdGhpcy5ydW5CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ydW5CdXR0b24udGV4dENvbnRlbnQgPSB0KCdpbnB1dC5ydW5CdXR0b24nKTtcblxuICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS1pbmxpbmUtdmlzaWJsZScpO1xuXG4gICAgICAgIC8vIEhhbmRsZSByZXNwb25zZSAoc2FtZSBhcyByZWd1bGFyIHJ1bilcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGNvbnRleHQuaGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICAgICAgICBwcm9tcHQ6IGFwcHJvdmFsUHJvbXB0LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5vdGVQYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IG5ld1JlcXVlc3QsXG4gICAgICAgICAgICAgICAgb3V0cHV0TGluZXM6IGNvbnRleHQub3V0cHV0TGluZXNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhpc3RvcnlEaXNwbGF5KGNvbnRleHQuaGlzdG9yeSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhdWx0UGF0aCA9ICh0aGlzLmFwcC52YXVsdC5hZGFwdGVyIGFzIEZpbGVTeXN0ZW1BZGFwdGVyKS5nZXRCYXNlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0TWFuYWdlci5zYXZlQ29udGV4dChmaWxlLnBhdGgsIHZhdWx0UGF0aCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5tb2RpZmllZENvbnRlbnQgJiYgcmVzcG9uc2UubW9kaWZpZWRDb250ZW50LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9BY2NlcHRDaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROb3RlUGF0aCA9PT0gcnVuTm90ZVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N0YXR1cygnXHUyNzA1ICcgKyB0KCdzdGF0dXMuYXV0b0FwcGx5aW5nJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlDaGFuZ2VzVG9FZGl0b3IocmVzcG9uc2UubW9kaWZpZWRDb250ZW50LCBlZGl0b3IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Tm90ZVBhdGggPT09IHJ1bk5vdGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKCdcdTI3MTMgJyArIHQoJ25vdGljZS5jaGFuZ2VzQXBwbGllZCcpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQcmV2aWV3KHJlc3BvbnNlLm1vZGlmaWVkQ29udGVudCwgcnVuTm90ZVBhdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgVUkgaWYgdGhpcyBpcyBzdGlsbCB0aGUgYWN0aXZlIG5vdGVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Tm90ZVBhdGggPT09IHJ1bk5vdGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgY2FsbCBzaG93UmVzdWx0IGlmIHdlIGhhdmVuJ3QgYmVlbiBzdHJlYW1pbmcgKHN0cmVhbWluZyBhbHJlYWR5IHJlbmRlcmVkIHRoZSByZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhdWRlLWNvZGUtcmVzdWx0LXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzU3RyZWFtZWRDb250ZW50ID0gcmVzdWx0U2VjdGlvbiAmJiByZXN1bHRTZWN0aW9uLmhhc0NsYXNzKCdjbGF1ZGUtY29kZS12aXNpYmxlJykgJiYgdGhpcy5yZXN1bHRBcmVhLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNTdHJlYW1lZENvbnRlbnQgJiYgcmVzcG9uc2UuYXNzaXN0YW50TWVzc2FnZSAmJiByZXNwb25zZS5hc3Npc3RhbnRNZXNzYWdlLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KHJlc3BvbnNlLmFzc2lzdGFudE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZSgnXHUyNzEzICcgKyB0KCdub3RpY2UuY29tcGxldGVkJykpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1N0cmVhbWVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdWx0IHdhcyBhbHJlYWR5IHN0cmVhbWVkLCBqdXN0IHNob3cgbm90aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKCdcdTI3MTMgJyArIHQoJ25vdGljZS5jb21wbGV0ZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKCdcdTI3MTMgJyArIHQoJ25vdGljZS5jb21wbGV0ZWROb0NoYW5nZXMnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKCdcdTI3MTMgJyArIHQoJ25vdGljZS5jb21wbGV0ZWQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE5vdGVQYXRoID09PSBydW5Ob3RlUGF0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yU3RhdHVzKCdcdTI3NEMgJyArIHQoJ3N0YXR1cy5mYWlsZWQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXcgTm90aWNlKGBcdTI3MTcgQ2xhdWRlIENvZGUgZmFpbGVkOiAke3Jlc3BvbnNlLmVycm9yIHx8ICdVbmtub3duIGVycm9yJ31gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBkZW55IHBlcm1pc3Npb24gYnV0dG9uIGNsaWNrXG4gICAgICovXG4gICAgcHJpdmF0ZSBoYW5kbGVEZW55UGVybWlzc2lvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWRlUGVybWlzc2lvbkFwcHJvdmFsU2VjdGlvbigpO1xuICAgICAgICBuZXcgTm90aWNlKHQoJ25vdGljZS5wZXJtaXNzaW9uRGVuaWVkJykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhcHBseSBjaGFuZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSBoYW5kbGVBcHBseUNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldEN1cnJlbnRDb250ZXh0KCk7XG5cbiAgICAgICAgLy8gVXNlIHBlbmRpbmcgcHJldmlldyBjb250ZW50IChwZXItbm90ZSBzdGF0ZSkgb3IgZmFsbCBiYWNrIHRvIHJlc3BvbnNlXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUb0FwcGx5ID0gY29udGV4dC5wZW5kaW5nUHJldmlld0NvbnRlbnQgfHwgY29udGV4dC5jdXJyZW50UmVzcG9uc2U/Lm1vZGlmaWVkQ29udGVudDtcblxuICAgICAgICBpZiAoIWNvbnRlbnRUb0FwcGx5KSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKCdcdTI2QTAgJyArIHQoJ25vdGljZS5ub0NoYW5nZXNUb0FwcGx5JykpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0FwcGx5IENoYW5nZXNdIE5vIG1vZGlmaWVkIGNvbnRlbnQgZm91bmQgaW4gY29udGV4dCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IHRoZSBhY3RpdmUgZmlsZVxuICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTtcbiAgICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKCdcdTI2QTAgJyArIHQoJ25vdGljZS5ub0FjdGl2ZUZpbGUnKSk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbQXBwbHkgQ2hhbmdlc10gTm8gYWN0aXZlIGZpbGUgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmQgdGhlIG1hcmtkb3duIHZpZXcgZm9yIHRoaXMgZmlsZVxuICAgICAgICBjb25zdCBsZWF2ZXMgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKCdtYXJrZG93bicpO1xuICAgICAgICBsZXQgdGFyZ2V0VmlldzogTWFya2Rvd25WaWV3IHwgbnVsbCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldyBhcyBNYXJrZG93blZpZXc7XG4gICAgICAgICAgICBpZiAodmlldy5maWxlICYmIHZpZXcuZmlsZS5wYXRoID09PSBmaWxlLnBhdGgpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRWaWV3ID0gdmlldztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZhbGxiYWNrOiB1c2UgZmlyc3QgbWFya2Rvd24gdmlld1xuICAgICAgICBpZiAoIXRhcmdldFZpZXcgJiYgbGVhdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldFZpZXcgPSBsZWF2ZXNbMF0udmlldyBhcyBNYXJrZG93blZpZXc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRhcmdldFZpZXcgfHwgIXRhcmdldFZpZXcuZWRpdG9yKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKCdcdTI2QTAgJyArIHQoJ25vdGljZS5ub0VkaXRvcicpKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBcHBseSBDaGFuZ2VzXSBObyBtYXJrZG93biB2aWV3IG9yIGVkaXRvciBmb3VuZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlDaGFuZ2VzVG9FZGl0b3IoY29udGVudFRvQXBwbHksIHRhcmdldFZpZXcuZWRpdG9yKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZVByZXZpZXcoKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ1x1MjcxMyAnICsgdCgnbm90aWNlLmNoYW5nZXNBcHBsaWVkU3VjY2VzcycpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ1x1MjcxNyAnICsgdCgnbm90aWNlLmZhaWxlZEFwcGx5Q2hhbmdlcycpKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tBcHBseSBDaGFuZ2VzXSBFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBjaGFuZ2VzIHRvIGVkaXRvclxuICAgICAqL1xuICAgIHByaXZhdGUgYXBwbHlDaGFuZ2VzVG9FZGl0b3IoY29udGVudDogc3RyaW5nLCBlZGl0b3I6IEVkaXRvcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDdXJyZW50Q29udGV4dCgpO1xuICAgICAgICBjb25zdCBjdXJzb3JCZWZvcmUgPSBlZGl0b3IuZ2V0Q3Vyc29yKCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2Ugd2VyZSBlZGl0aW5nIHNlbGVjdGVkIHRleHQgb25seVxuICAgICAgICBpZiAoY29udGV4dC5jdXJyZW50UmVxdWVzdD8uc2VsZWN0ZWRUZXh0KSB7XG4gICAgICAgICAgICAvLyBSZXBsYWNlIHNlbGVjdGVkIHRleHQgb25seVxuICAgICAgICAgICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oY29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXBsYWNlIGVudGlyZSBub3RlXG4gICAgICAgICAgICBlZGl0b3Iuc2V0VmFsdWUoY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MucHJlc2VydmVDdXJzb3JQb3NpdGlvbikge1xuICAgICAgICAgICAgZWRpdG9yLnNldEN1cnNvcihjdXJzb3JCZWZvcmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHJlamVjdCBjaGFuZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSBoYW5kbGVSZWplY3RDaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhpZGVQcmV2aWV3KCk7XG4gICAgICAgIG5ldyBOb3RpY2UodCgnbm90aWNlLmNoYW5nZXNSZWplY3RlZCcpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgY2FuY2VsXG4gICAgICovXG4gICAgcHJpdmF0ZSBoYW5kbGVDYW5jZWwoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldEN1cnJlbnRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQucnVubmVyLnRlcm1pbmF0ZSgpO1xuICAgICAgICBjb250ZXh0LmlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICBjb250ZXh0LmV4ZWN1dGlvblN0YXJ0VGltZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29udGV4dC5iYXNlU3RhdHVzTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ydW5CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ydW5CdXR0b24udGV4dENvbnRlbnQgPSB0KCdpbnB1dC5ydW5CdXR0b24nKTtcbiAgICAgICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaW5saW5lLXZpc2libGUnKTtcbiAgICAgICAgdGhpcy5oaWRlU3RhdHVzKCk7XG4gICAgICAgIG5ldyBOb3RpY2UodCgnbm90aWNlLmNhbmNlbGxlZCcpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNwb25kIHRvIGludGVyYWN0aXZlIHByb21wdCAocGxhY2Vob2xkZXIgZm9yIGZ1dHVyZSB1c2UpXG4gICAgICovXG4gICAgcHJpdmF0ZSByZXNwb25kVG9Qcm9tcHQocmVzcG9uc2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAvLyBGdXR1cmUgaW1wbGVtZW50YXRpb24gZm9yIGludGVyYWN0aXZlIFEmQVxuICAgICAgICBjb25zb2xlLmRlYnVnKCdJbnRlcmFjdGl2ZSByZXNwb25zZTonLCByZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgZGlmZiBIVE1MIGJldHdlZW4gb3JpZ2luYWwgYW5kIG1vZGlmaWVkIGNvbnRlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdlbmVyYXRlRGlmZkVsZW1lbnQob3JpZ2luYWw6IHN0cmluZywgbW9kaWZpZWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIERpZmZHZW5lcmF0b3IuZ2VuZXJhdGVEaWZmRWxlbWVudChvcmlnaW5hbCwgbW9kaWZpZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBoaXN0b3J5IGRpc3BsYXlcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZUhpc3RvcnlEaXNwbGF5KGhpc3Rvcnk6IFNlc3Npb25IaXN0b3J5SXRlbVtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGlzdG9yeUxpc3QuZW1wdHkoKTtcblxuICAgICAgICBjb25zdCBoaXN0b3J5U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGF1ZGUtY29kZS1oaXN0b3J5LXNlY3Rpb24nKTtcblxuICAgICAgICBpZiAoaGlzdG9yeS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIEhpZGUgaGlzdG9yeSBzZWN0aW9uIHdoZW4gZW1wdHlcbiAgICAgICAgICAgIGlmIChoaXN0b3J5U2VjdGlvbikge1xuICAgICAgICAgICAgICAgIGhpc3RvcnlTZWN0aW9uLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBoaXN0b3J5U2VjdGlvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtdmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdyBoaXN0b3J5IHNlY3Rpb24gd2hlbiB0aGVyZSdzIGNvbnRlbnRcbiAgICAgICAgaWYgKGhpc3RvcnlTZWN0aW9uKSB7XG4gICAgICAgICAgICBoaXN0b3J5U2VjdGlvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICBoaXN0b3J5U2VjdGlvbi5hZGRDbGFzcygnY2xhdWRlLWNvZGUtdmlzaWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGhpc3Rvcnkuc2xpY2UoKS5yZXZlcnNlKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gdGhpcy5oaXN0b3J5TGlzdC5jcmVhdGVFbCgnbGknKTtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBpdGVtLnN1Y2Nlc3MgPyAnXHUyNzEzJyA6ICdcdTI3MTcnO1xuICAgICAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKGl0ZW0udGltZXN0YW1wKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgICAgIGxpLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBgJHtpY29ufSAke3RpbWV9YCwgY2xzOiAnaGlzdG9yeS10aW1lJyB9KTtcblxuICAgICAgICAgICAgLy8gVHJpbSBwcm9tcHQgdG8gMTAwIGNoYXJhY3RlcnNcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlQcm9tcHQgPSBpdGVtLnByb21wdC5sZW5ndGggPiAxMDBcbiAgICAgICAgICAgICAgICA/IGl0ZW0ucHJvbXB0LnN1YnN0cmluZygwLCAxMDApICsgJy4uLidcbiAgICAgICAgICAgICAgICA6IGl0ZW0ucHJvbXB0O1xuICAgICAgICAgICAgbGkuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGRpc3BsYXlQcm9tcHQsIGNsczogJ2hpc3RvcnktcHJvbXB0JyB9KTtcblxuICAgICAgICAgICAgLy8gQWRkIGNsaWNrIGhhbmRsZXIgdG8gcmVzdG9yZSBmcm9tIGhpc3RvcnlcbiAgICAgICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZXN0b3JlRnJvbUhpc3RvcnkoaXRlbSkpO1xuICAgICAgICAgICAgbGkuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWN1cnNvci1wb2ludGVyJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXN0b3JlIHN0YXRlIGZyb20gYSBoaXN0b3J5IGl0ZW1cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc3RvcmVGcm9tSGlzdG9yeShpdGVtOiBTZXNzaW9uSGlzdG9yeUl0ZW0pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q3VycmVudENvbnRleHQoKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHByb21wdFxuICAgICAgICB0aGlzLnByb21wdElucHV0LnZhbHVlID0gaXRlbS5wcm9tcHQ7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBvdXRwdXQgaWYgYXZhaWxhYmxlXG4gICAgICAgIGlmIChpdGVtLm91dHB1dExpbmVzICYmIGl0ZW0ub3V0cHV0TGluZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXRSZW5kZXJlci5jbGVhcigpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGl0ZW0ub3V0cHV0TGluZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFJlbmRlcmVyLmFwcGVuZExpbmUobGluZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXN0b3JlIHJlc3BvbnNlIGFuZCByZXF1ZXN0XG4gICAgICAgIGlmIChpdGVtLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb250ZXh0LmN1cnJlbnRSZXNwb25zZSA9IGl0ZW0ucmVzcG9uc2U7XG5cbiAgICAgICAgICAgIC8vIEJVRyBGSVg6IFJlc3RvcmUgdGhlIGFzc2lzdGFudCBtZXNzYWdlIGluIHRoZSBSZXN1bHQgc2VjdGlvblxuICAgICAgICAgICAgaWYgKGl0ZW0ucmVzcG9uc2UuYXNzaXN0YW50TWVzc2FnZSAmJiBpdGVtLnJlc3BvbnNlLmFzc2lzdGFudE1lc3NhZ2UudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KGl0ZW0ucmVzcG9uc2UuYXNzaXN0YW50TWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0ucmVxdWVzdCkge1xuICAgICAgICAgICAgY29udGV4dC5jdXJyZW50UmVxdWVzdCA9IGl0ZW0ucmVxdWVzdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNob3cgcHJldmlldyBpZiB0aGVyZSdzIGEgc3VjY2Vzc2Z1bCByZXNwb25zZSB3aXRoIGNvbnRlbnRcbiAgICAgICAgaWYgKGl0ZW0uc3VjY2VzcyAmJiBpdGVtLnJlc3BvbnNlPy5tb2RpZmllZENvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1ByZXZpZXcoaXRlbS5yZXNwb25zZS5tb2RpZmllZENvbnRlbnQpO1xuICAgICAgICAgICAgbmV3IE5vdGljZSh0KCdub3RpY2UuaGlzdG9yeVJlc3RvcmVkV2l0aENoYW5nZXMnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVQcmV2aWV3KCk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKHQoJ25vdGljZS5oaXN0b3J5UmVzdG9yZWQnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBoaXN0b3J5XG4gICAgICovXG4gICAgcHJpdmF0ZSBjbGVhckhpc3RvcnkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGV4dE1hbmFnZXIuY2xlYXJIaXN0b3J5KHRoaXMuY3VycmVudE5vdGVQYXRoKTtcbiAgICAgICAgdGhpcy51cGRhdGVIaXN0b3J5RGlzcGxheShbXSk7XG4gICAgICAgIGNvbnN0IGhpc3RvcnlTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXVkZS1jb2RlLWhpc3Rvcnktc2VjdGlvbicpO1xuICAgICAgICBpZiAoaGlzdG9yeVNlY3Rpb24pIHtcbiAgICAgICAgICAgIGhpc3RvcnlTZWN0aW9uLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIGhpc3RvcnlTZWN0aW9uLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS12aXNpYmxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3IE5vdGljZSh0KCdub3RpY2UuaGlzdG9yeUNsZWFyZWQnKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgdGhlIHRvZG8gbGlzdCBkaXNwbGF5XG4gICAgICovXG4gICAgcHJpdmF0ZSBjbGVhclRvZG9MaXN0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBwbGFuQ29sdW1uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsYXVkZS1jb2RlLXBsYW4tY29sdW1uJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXVkZS1jb2RlLXRvZG8tbGlzdCcpO1xuICAgICAgICBjb25zdCBlbXB0eVBsYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhdWRlLWNvZGUtZW1wdHktcGxhbicpO1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1tDbGVhciBUb2RvIExpc3RdIENhbGxlZCcpO1xuXG4gICAgICAgIGlmICghdG9kb0xpc3QgfHwgIXBsYW5Db2x1bW4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tDbGVhciBUb2RvIExpc3RdIEVsZW1lbnRzIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2xlYXIgdGhlIGxpc3RcbiAgICAgICAgdG9kb0xpc3QuZW1wdHkoKTtcblxuICAgICAgICAvLyBIaWRlIGVtcHR5IG1lc3NhZ2UgYW5kIGxpc3RcbiAgICAgICAgaWYgKGVtcHR5UGxhbikge1xuICAgICAgICAgICAgZW1wdHlQbGFuLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICB0b2RvTGlzdC5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG5cbiAgICAgICAgLy8gSGlkZSB0aGUgUExBTiBDT0xVTU4gb25seVxuICAgICAgICBwbGFuQ29sdW1uLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdbQ2xlYXIgVG9kbyBMaXN0XSBQbGFuIGNvbHVtbiBoaWRkZW4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgQ2xhdWRlJ3MgdG9kbyBsaXN0IGRpc3BsYXlcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVRvZG9MaXN0KHRvZG9zOiBBcnJheTx7Y29udGVudDogc3RyaW5nLCBzdGF0dXM6IHN0cmluZywgYWN0aXZlRm9ybTogc3RyaW5nfT4pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYWdlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhdWRlLWNvZGUtYWdlbnQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHBsYW5Db2x1bW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xhdWRlLWNvZGUtcGxhbi1jb2x1bW4nKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhdWRlLWNvZGUtdG9kby1saXN0Jyk7XG4gICAgICAgIGNvbnN0IGVtcHR5UGxhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGF1ZGUtY29kZS1lbXB0eS1wbGFuJyk7XG5cbiAgICAgICAgaWYgKCFhZ2VudENvbnRhaW5lciB8fCAhdG9kb0xpc3QgfHwgIXBsYW5Db2x1bW4pIHJldHVybjtcblxuICAgICAgICAvLyBDbGVhciBleGlzdGluZyB0b2Rvc1xuICAgICAgICB0b2RvTGlzdC5lbXB0eSgpO1xuXG4gICAgICAgIGlmICh0b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIEhpZGUgdGhlIHBsYW4gY29sdW1uIC0gbm8gcGxhblxuICAgICAgICAgICAgcGxhbkNvbHVtbi5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICBpZiAoZW1wdHlQbGFuKSBlbXB0eVBsYW4uYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICAgICAgdG9kb0xpc3QuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuXG4gICAgICAgICAgICAvLyBIaWRlIHRoZSBlbnRpcmUgY29udGFpbmVyIG9ubHkgaWYgdGhlcmUgYXJlIG5vIGFnZW50IHN0ZXBzIGVpdGhlclxuICAgICAgICAgICAgY29uc3QgYWdlbnRTdGVwc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGF1ZGUtY29kZS1hZ2VudC1zdGVwcycpO1xuICAgICAgICAgICAgaWYgKGFnZW50U3RlcHNDb250YWluZXIgJiYgYWdlbnRTdGVwc0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZ2VudENvbnRhaW5lci5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIGFnZW50Q29udGFpbmVyLmFkZENsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIGFnZW50IGNvbnRhaW5lciBhbmQgcGxhbiBjb2x1bW5cbiAgICAgICAgICAgIGFnZW50Q29udGFpbmVyLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgIGFnZW50Q29udGFpbmVyLmFkZENsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAgICAgICBwbGFuQ29sdW1uLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIHBsYW5Db2x1bW4uYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWZsZXgtdmlzaWJsZScpO1xuXG4gICAgICAgICAgICAvLyBIaWRlIGVtcHR5IG1lc3NhZ2UgYW5kIHNob3cgdG9kb3NcbiAgICAgICAgICAgIGlmIChlbXB0eVBsYW4pIGVtcHR5UGxhbi5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICB0b2RvTGlzdC5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICB0b2RvTGlzdC5hZGRDbGFzcygnY2xhdWRlLWNvZGUtZmxleC12aXNpYmxlJyk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBlYWNoIHRvZG9cbiAgICAgICAgICAgIGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9JdGVtID0gdG9kb0xpc3QuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2xhdWRlLWNvZGUtdG9kby1pdGVtJyB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFN0YXR1cyBpY29uXG4gICAgICAgICAgICAgICAgbGV0IGljb24gPSAnXHUyM0YzJztcbiAgICAgICAgICAgICAgICBsZXQgc3RhdHVzQ2xhc3MgPSAncGVuZGluZyc7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG8uc3RhdHVzID09PSAnaW5fcHJvZ3Jlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb24gPSAnXHVEODNEXHVERDA0JztcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ2xhc3MgPSAnaW4tcHJvZ3Jlc3MnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9kby5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb24gPSAnXHUyNzA1JztcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ2xhc3MgPSAnY29tcGxldGVkJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0b2RvSXRlbS5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBgY2xhdWRlLWNvZGUtdG9kby1pY29uICR7c3RhdHVzQ2xhc3N9YCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogaWNvblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gQ29udGVudFxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0b2RvLnN0YXR1cyA9PT0gJ2luX3Byb2dyZXNzJyA/IHRvZG8uYWN0aXZlRm9ybSA6IHRvZG8uY29udGVudDtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbS5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtdG9kby1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHNldHRpbmdzXG4gICAgICovXG4gICAgdXBkYXRlU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXV0b0FjY2VwdENoZWNrYm94LmNoZWNrZWQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvQWNjZXB0Q2hhbmdlcztcbiAgICAgICAgdGhpcy5tb2RlbFNlbGVjdC52YWx1ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLm1vZGVsQWxpYXM7XG4gICAgfVxuXG4gICAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLy8gQ2xlYW4gdXAgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIGlmICh0aGlzLnByb21wdElucHV0S2V5ZG93bkhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvbXB0SW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMucHJvbXB0SW5wdXRLZXlkb3duSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLnByb21wdElucHV0S2V5ZG93bkhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCB7IGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyIH0gb2YgdGhpcy5ldmVudExpc3RlbmVycykge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgICAgICAgLy8gU2F2ZSBhbGwgY29udGV4dHNcbiAgICAgICAgY29uc3QgdmF1bHRQYXRoID0gKHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIgYXMgRmlsZVN5c3RlbUFkYXB0ZXIpLmdldEJhc2VQYXRoKCk7XG4gICAgICAgIGlmICh2YXVsdFBhdGgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0TWFuYWdlci5zYXZlQWxsQ29udGV4dHModmF1bHRQYXRoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgY29udGV4dHMgb24gY2xvc2U6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwgImltcG9ydCB7IENsYXVkZUNvZGVSZXF1ZXN0LCBDbGF1ZGVDb2RlUmVzcG9uc2UgfSBmcm9tICcuL2NsYXVkZS1jb2RlLXJ1bm5lcic7XG5pbXBvcnQgeyBDbGF1ZGVDb2RlUnVubmVyIH0gZnJvbSAnLi9jbGF1ZGUtY29kZS1ydW5uZXInO1xuXG5leHBvcnQgY29uc3QgVklFV19UWVBFX0NMQVVERV9DT0RFID0gJ2NsYXVkZS1jb2RlLXZpZXcnO1xuXG4vLyBUb2tlbiB1c2FnZSB0eXBlXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuVXNhZ2Uge1xuICAgIGlucHV0VG9rZW5zPzogbnVtYmVyO1xuICAgIG91dHB1dFRva2Vucz86IG51bWJlcjtcbiAgICB0b3RhbFRva2Vucz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uSGlzdG9yeUl0ZW0ge1xuICAgIHByb21wdDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogRGF0ZTtcbiAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgIG5vdGVQYXRoOiBzdHJpbmc7XG4gICAgcmVzcG9uc2U/OiBDbGF1ZGVDb2RlUmVzcG9uc2U7XG4gICAgcmVxdWVzdD86IENsYXVkZUNvZGVSZXF1ZXN0O1xuICAgIG91dHB1dExpbmVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWdlbnRTdGVwIHtcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgYWN0aW9uOiBzdHJpbmc7XG4gICAgdGFyZ2V0OiBzdHJpbmc7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgc3RhcnRUaW1lPzogbnVtYmVyOyAgLy8gVGltZXN0YW1wIHdoZW4gc3RlcCBzdGFydGVkXG4gICAgZHVyYXRpb24/OiBudW1iZXI7ICAgLy8gRHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90ZUNvbnRleHQge1xuICAgIGhpc3Rvcnk6IFNlc3Npb25IaXN0b3J5SXRlbVtdO1xuICAgIHNlc3Npb25JZDogc3RyaW5nIHwgbnVsbDtcbiAgICBjdXJyZW50UmVzcG9uc2U6IENsYXVkZUNvZGVSZXNwb25zZSB8IG51bGw7XG4gICAgY3VycmVudFJlcXVlc3Q6IENsYXVkZUNvZGVSZXF1ZXN0IHwgbnVsbDtcbiAgICBvdXRwdXRMaW5lczogc3RyaW5nW107XG4gICAgYWdlbnRTdGVwczogQWdlbnRTdGVwW107XG4gICAgcnVubmVyOiBDbGF1ZGVDb2RlUnVubmVyO1xuICAgIGlzUnVubmluZzogYm9vbGVhbjtcbiAgICBydW5CdXR0b24/OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjYW5jZWxCdXR0b24/OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICB3YWl0aW5nRm9yUmVzcG9uc2U/OiBib29sZWFuO1xuICAgIHNlbGVjdGVkTW9kZWw/OiBzdHJpbmc7XG4gICAgbGFzdFByb21wdD86IHN0cmluZztcbiAgICAvLyBQZXItbm90ZSBwcmV2aWV3L2RpZmYgc3RhdGVcbiAgICBwZW5kaW5nUHJldmlld0NvbnRlbnQ/OiBzdHJpbmc7ICAvLyBNb2RpZmllZCBjb250ZW50IHdhaXRpbmcgZm9yIGFwcHJvdmFsXG4gICAgb3JpZ2luYWxQcmV2aWV3Q29udGVudD86IHN0cmluZzsgLy8gT3JpZ2luYWwgY29udGVudCBmb3IgZGlmZiBkaXNwbGF5XG4gICAgLy8gUGVyLW5vdGUgc3RyZWFtaW5nIHJlc3VsdCBzdGF0ZSAoZm9yIHJlc3RvcmluZyB3aGVuIHN3aXRjaGluZyBub3RlcyBtaWQtc3RyZWFtKVxuICAgIGN1cnJlbnRSZXN1bHRUZXh0Pzogc3RyaW5nOyAgICAgIC8vIEFjY3VtdWxhdGVkIHJlc3VsdCB0ZXh0IChzdHJlYW1pbmcgb3IgY29tcGxldGUpXG4gICAgLy8gUGVyLW5vdGUgZXhlY3V0aW9uIHRpbWluZyAoZm9yIGluZGVwZW5kZW50IHRpbWVycyB3aGVuIHN3aXRjaGluZyBub3RlcylcbiAgICBleGVjdXRpb25TdGFydFRpbWU/OiBudW1iZXI7ICAgICAvLyBUaW1lc3RhbXAgd2hlbiBleGVjdXRpb24gc3RhcnRlZFxuICAgIGJhc2VTdGF0dXNNZXNzYWdlPzogc3RyaW5nOyAgICAgIC8vIEJhc2UgbWVzc2FnZSBmb3Igc3RhdHVzIHVwZGF0ZXMgKGUuZy4sIFwiXHVEODNFXHVERDE0IFByb2Nlc3NpbmdcIilcbn1cbiIsICIvKipcbiAqIEVuZ2xpc2ggdHJhbnNsYXRpb25zIChkZWZhdWx0KVxuICovXG5leHBvcnQgY29uc3QgZW4gPSB7XG4gICAgLy8gSGVhZGVyXG4gICAgJ2hlYWRlci50aXRsZSc6ICdDbGF1ZGUgQ29kZSBhc3Npc3RhbnQnLFxuICAgICdoZWFkZXIubm9Ob3RlU2VsZWN0ZWQnOiAnbm8gbm90ZSBzZWxlY3RlZCcsXG5cbiAgICAvLyBJbnB1dCBTZWN0aW9uXG4gICAgJ2lucHV0LmxhYmVsJzogJ1lvdXIgaW5zdHJ1Y3Rpb25zOicsXG4gICAgJ2lucHV0LnBsYWNlaG9sZGVyJzogJ2UuZy4sIFwiQWRkIG1vcmUgZXhhbXBsZXMgdG8gdGhpcyBzZWN0aW9uXCIgb3IgXCJSZW9yZ2FuaXplIHdpdGggYmV0dGVyIGhlYWRlcnNcIiAoRW50ZXIgdG8gc2VuZCwgQ3RybCtFbnRlciBmb3IgbmV3IGxpbmUpJyxcbiAgICAnaW5wdXQuY29udmVyc2F0aW9uYWxNb2RlJzogJ2NvbnZlcnNhdGlvbmFsIG1vZGUgKG5vIGZpbGUgZWRpdHMpJyxcbiAgICAnaW5wdXQuY29udmVyc2F0aW9uYWxNb2RlVG9vbHRpcCc6ICdDaGF0IHdpdGggQ2xhdWRlIHdpdGhvdXQgbW9kaWZ5aW5nIGFueSBmaWxlcycsXG4gICAgJ2lucHV0LnNlbGVjdGVkVGV4dE9ubHknOiAnRWRpdCBzZWxlY3RlZCB0ZXh0IG9ubHknLFxuICAgICdpbnB1dC5hdXRvQWNjZXB0JzogJ0F1dG8tYWNjZXB0IGNoYW5nZXMnLFxuICAgICdpbnB1dC5tb2RlbExhYmVsJzogJ01vZGVsOicsXG4gICAgJ2lucHV0Lm1vZGVsRGVmYXVsdCc6ICdEZWZhdWx0JyxcbiAgICAnaW5wdXQucnVuQnV0dG9uJzogJ1J1biBDbGF1ZGUgQ29kZScsXG4gICAgJ2lucHV0LnJ1bm5pbmdCdXR0b24nOiAnUnVubmluZy4uLicsXG4gICAgJ2lucHV0LmNhbmNlbEJ1dHRvbic6ICdDYW5jZWwnLFxuXG4gICAgLy8gUmVzdWx0IFNlY3Rpb25cbiAgICAncmVzdWx0LnRpdGxlJzogJ1Jlc3VsdCcsXG5cbiAgICAvLyBPdXRwdXQgU2VjdGlvblxuICAgICdvdXRwdXQudGl0bGUnOiAnT3V0cHV0JyxcblxuICAgIC8vIFByZXZpZXcgU2VjdGlvblxuICAgICdwcmV2aWV3LnRpdGxlJzogJ1ByZXZpZXcnLFxuICAgICdwcmV2aWV3LnRhYlJhdyc6ICdSYXcnLFxuICAgICdwcmV2aWV3LnRhYkRpZmYnOiAnRGlmZicsXG4gICAgJ3ByZXZpZXcudGFiUmVuZGVyZWQnOiAnUmVuZGVyZWQnLFxuICAgICdwcmV2aWV3Lm9yaWdpbmFsQ2hhcnMnOiAnT3JpZ2luYWw6JyxcbiAgICAncHJldmlldy5tb2RpZmllZENoYXJzJzogJ01vZGlmaWVkOicsXG4gICAgJ3ByZXZpZXcuY2hhcnMnOiAnY2hhcnMnLFxuICAgICdwcmV2aWV3LmFwcGx5QnV0dG9uJzogJ2FwcGx5IGNoYW5nZXMnLFxuICAgICdwcmV2aWV3LnJlamVjdEJ1dHRvbic6ICdyZWplY3QnLFxuXG4gICAgLy8gSGlzdG9yeSBTZWN0aW9uXG4gICAgJ2hpc3RvcnkudGl0bGUnOiAnSGlzdG9yeScsXG4gICAgJ2hpc3RvcnkuY2xlYXJCdXR0b24nOiAnQ2xlYXInLFxuXG4gICAgLy8gQWdlbnQgU2VjdGlvblxuICAgICdhZ2VudC5wbGFuVGl0bGUnOiAncGxhbicsXG4gICAgJ2FnZW50LmFjdGl2aXR5VGl0bGUnOiAnQWN0aXZpdHknLFxuICAgICdhZ2VudC5ub1BsYW4nOiAnTm8gcGxhbiBjcmVhdGVkIHlldCcsXG5cbiAgICAvLyBUb2RvIFN0YXR1c1xuICAgICd0b2RvLnBlbmRpbmcnOiAncGVuZGluZycsXG4gICAgJ3RvZG8uaW5Qcm9ncmVzcyc6ICdpbiBwcm9ncmVzcycsXG4gICAgJ3RvZG8uY29tcGxldGVkJzogJ2NvbXBsZXRlZCcsXG5cbiAgICAvLyBJbnRlcmFjdGl2ZSBQcm9tcHRcbiAgICAnaW50ZXJhY3RpdmUuaGVhZGVyJzogJ0NsYXVkZSBpcyBhc2tpbmcgZm9yIGNvbmZpcm1hdGlvbicsXG4gICAgJ2ludGVyYWN0aXZlLnllc0J1dHRvbic6ICd5ZXMnLFxuICAgICdpbnRlcmFjdGl2ZS5ub0J1dHRvbic6ICdubycsXG4gICAgJ2ludGVyYWN0aXZlLmN1c3RvbVBsYWNlaG9sZGVyJzogJ09yIHR5cGUgYSBjdXN0b20gcmVzcG9uc2UuLi4nLFxuXG4gICAgLy8gUGVybWlzc2lvbiBBcHByb3ZhbFxuICAgICdwZXJtaXNzaW9uLmhlYWRlcic6ICdwZXJtaXNzaW9uIHJlcXVpcmVkJyxcbiAgICAncGVybWlzc2lvbi5tZXNzYWdlJzogJ0NsYXVkZSBpcyByZXF1ZXN0aW5nIHBlcm1pc3Npb24gdG8gZXhlY3V0ZSBhY3Rpb25zLicsXG4gICAgJ3Blcm1pc3Npb24uYXBwcm92ZUJ1dHRvbic6ICdhcHByb3ZlICYgY29udGludWUnLFxuICAgICdwZXJtaXNzaW9uLmRlbnlCdXR0b24nOiAnZGVueScsXG5cbiAgICAvLyBTdGF0dXMgTWVzc2FnZXNcbiAgICAnc3RhdHVzLnByb2Nlc3NpbmcnOiAnQ2xhdWRlIGlzIHByb2Nlc3NpbmcnLFxuICAgICdzdGF0dXMuYXV0b0FwcGx5aW5nJzogJ0F1dG8tYXBwbHlpbmcgY2hhbmdlcy4uLicsXG4gICAgJ3N0YXR1cy5ydW5uaW5nQXV0aG9yaXplZCc6ICdSdW5uaW5nIGF1dGhvcml6ZWQgdGFza3MnLFxuICAgICdzdGF0dXMucnVubmluZ0luQmFja2dyb3VuZCc6ICdSdW5uaW5nIGluIGJhY2tncm91bmQuLi4nLFxuICAgICdzdGF0dXMuZmFpbGVkJzogJ0ZhaWxlZCAtIHNlZSBlcnJvciBiZWxvdycsXG5cbiAgICAvLyBOb3RpZmljYXRpb25zXG4gICAgJ25vdGljZS5hbHJlYWR5UHJvY2Vzc2luZyc6ICdBbHJlYWR5IHByb2Nlc3NpbmcgYSByZXF1ZXN0LiBQbGVhc2Ugd2FpdC4nLFxuICAgICdub3RpY2UuZW50ZXJQcm9tcHQnOiAnUGxlYXNlIGVudGVyIGEgcHJvbXB0JyxcbiAgICAnbm90aWNlLm5vQWN0aXZlTm90ZSc6ICdObyBhY3RpdmUgbm90ZSBmb3VuZCwgcGxlYXNlIG9wZW4gYSBNYXJrZG93biBub3RlIGZpcnN0JyxcbiAgICAnbm90aWNlLm5vRWRpdG9yJzogJ05vIE1hcmtkb3duIGVkaXRvciBmb3VuZCwgcGxlYXNlIG1ha2Ugc3VyZSB5b3UgaGF2ZSBhIG5vdGUgb3BlbicsXG4gICAgJ25vdGljZS5ub1ZhdWx0UGF0aCc6ICdDb3VsZCBub3QgZGV0ZXJtaW5lIHZhdWx0IHBhdGgnLFxuICAgICdub3RpY2UuY29tcGxldGVkJzogJ0NsYXVkZSBDb2RlIGNvbXBsZXRlZCcsXG4gICAgJ25vdGljZS5jb21wbGV0ZWROb0NoYW5nZXMnOiAnQ2xhdWRlIENvZGUgY29tcGxldGVkIChubyBmaWxlIGNoYW5nZXMpJyxcbiAgICAnbm90aWNlLmNoYW5nZXNBcHBsaWVkJzogJ2NoYW5nZXMgYXBwbGllZCBhdXRvbWF0aWNhbGx5JyxcbiAgICAnbm90aWNlLmNoYW5nZXNBcHBsaWVkU3VjY2Vzcyc6ICdjaGFuZ2VzIGFwcGxpZWQgc3VjY2Vzc2Z1bGx5JyxcbiAgICAnbm90aWNlLmZhaWxlZEFwcGx5Q2hhbmdlcyc6ICdmYWlsZWQgdG8gYXBwbHkgY2hhbmdlcycsXG4gICAgJ25vdGljZS5jaGFuZ2VzUmVqZWN0ZWQnOiAnQ2hhbmdlcyByZWplY3RlZCcsXG4gICAgJ25vdGljZS5jYW5jZWxsZWQnOiAnQ2FuY2VsbGVkJyxcbiAgICAnbm90aWNlLnBlcm1pc3Npb25SZXF1ZXN0JzogJ0NsYXVkZSBpcyByZXF1ZXN0aW5nIHBlcm1pc3Npb24gLSBwbGVhc2UgYXBwcm92ZSBvciBkZW55JyxcbiAgICAnbm90aWNlLnBlcm1pc3Npb25EZW5pZWQnOiAnUGVybWlzc2lvbiBkZW5pZWQgLSBDbGF1ZGUgd2lsbCBub3QgcHJvY2VlZCcsXG4gICAgJ25vdGljZS5ub0NoYW5nZXNUb0FwcGx5JzogJ25vIGNoYW5nZXMgdG8gYXBwbHknLFxuICAgICdub3RpY2Uubm9BY3RpdmVGaWxlJzogJ25vIGFjdGl2ZSBmaWxlJyxcbiAgICAnbm90aWNlLmhpc3RvcnlSZXN0b3JlZCc6ICdIaXN0b3J5IGl0ZW0gcmVzdG9yZWQnLFxuICAgICdub3RpY2UuaGlzdG9yeVJlc3RvcmVkV2l0aENoYW5nZXMnOiAnSGlzdG9yeSBpdGVtIHJlc3RvcmVkIHdpdGggcHJvcG9zZWQgY2hhbmdlcycsXG4gICAgJ25vdGljZS5oaXN0b3J5Q2xlYXJlZCc6ICdIaXN0b3J5IGNsZWFyZWQnLFxuXG4gICAgLy8gRGlmZiBWaWV3XG4gICAgJ2RpZmYub3JpZ2luYWwnOiAnT3JpZ2luYWwnLFxuICAgICdkaWZmLm1vZGlmaWVkJzogJ01vZGlmaWVkJyxcblxuICAgIC8vIFJlc3VsdCBSZW5kZXJlclxuICAgICdyZXN1bHQuZGlyZWN0QW5zd2VyJzogJ0RpcmVjdCBhbnN3ZXInLFxuICAgICdyZXN1bHQuYWRkaXRpb25hbENvbnRleHQnOiAnQWRkaXRpb25hbCBDb250ZXh0JyxcbiAgICAncmVzdWx0LnRva2Vucyc6ICd0b2tlbnMnLFxuICAgICdyZXN1bHQudG9rZW5zSW4nOiAnaW4nLFxuICAgICdyZXN1bHQudG9rZW5zT3V0JzogJ291dCcsXG5cbiAgICAvLyBQcmV2aWV3IFN0YXRzXG4gICAgJ3ByZXZpZXcub3JpZ2luYWxMYWJlbCc6ICdPcmlnaW5hbDonLFxuICAgICdwcmV2aWV3Lm1vZGlmaWVkTGFiZWwnOiAnTW9kaWZpZWQ6JyxcbiAgICAncHJldmlldy5jaGFyc0xhYmVsJzogJ2NoYXJzJyxcblxuICAgIC8vIE1pc2NcbiAgICAnbWlzYy5ub1BlbmRpbmdSZXF1ZXN0JzogJ05vIHBlbmRpbmcgcmVxdWVzdCBmb3VuZCcsXG4gICAgJ21pc2MubGFuZ3VhZ2VDaGFuZ2VkJzogJ0xhbmd1YWdlIGNoYW5nZWQuIFNvbWUgVUkgZWxlbWVudHMgd2lsbCB1cGRhdGUgb24gcmVsb2FkLicsXG4gICAgJ21pc2MudGVzdEZhaWxlZCc6ICdDbGF1ZGUgQ29kZSB0ZXN0IGZhaWxlZCcsXG5cbiAgICAvLyBTZXR0aW5nc1xuICAgICdzZXR0aW5ncy5hdXRvRGV0ZWN0UGF0aCc6ICdBdXRvLWRldGVjdCBDbGF1ZGUgQ29kZSBwYXRoJyxcbiAgICAnc2V0dGluZ3MuYXV0b0RldGVjdFBhdGhEZXNjJzogJ0F1dG9tYXRpY2FsbHkgZGV0ZWN0IHRoZSBDbGF1ZGUgQ29kZSBleGVjdXRhYmxlIGxvY2F0aW9uJyxcbiAgICAnc2V0dGluZ3MuZXhlY3V0YWJsZVBhdGgnOiAnQ2xhdWRlIENvZGUgZXhlY3V0YWJsZSBwYXRoJyxcbiAgICAnc2V0dGluZ3MuZXhlY3V0YWJsZVBhdGhEZXNjJzogJ0Z1bGwgcGF0aCB0byB0aGUgQ2xhdWRlIENvZGUgZXhlY3V0YWJsZSAoZS5nLiwgL3Vzci9sb2NhbC9iaW4vY2xhdWRlKScsXG4gICAgJ3NldHRpbmdzLnRlc3RJbnN0YWxsYXRpb24nOiAnVGVzdCBDbGF1ZGUgQ29kZSBpbnN0YWxsYXRpb24nLFxuICAgICdzZXR0aW5ncy50ZXN0SW5zdGFsbGF0aW9uRGVzYyc6ICdWZXJpZnkgdGhhdCBDbGF1ZGUgQ29kZSBpcyBhY2Nlc3NpYmxlIGFuZCB3b3JraW5nJyxcbiAgICAnc2V0dGluZ3MudGVzdEJ1dHRvbic6ICdUZXN0JyxcbiAgICAnc2V0dGluZ3MudGVzdFdvcmtpbmcnOiAnd29ya2luZyEnLFxuICAgICdzZXR0aW5ncy50ZXN0RmFpbGVkJzogJ2ZhaWxlZCcsXG4gICAgJ3NldHRpbmdzLmN1c3RvbVByb21wdCc6ICdDdXN0b20gc3lzdGVtIHByb21wdCcsXG4gICAgJ3NldHRpbmdzLmN1c3RvbVByb21wdERlc2MnOiAnT3B0aW9uYWwgY3VzdG9tIHN5c3RlbSBwcm9tcHQgdG8gcHJlcGVuZCB0byBhbGwgcmVxdWVzdHMnLFxuICAgICdzZXR0aW5ncy5jdXN0b21Qcm9tcHRQbGFjZWhvbGRlcic6ICdZb3UgYXJlIGhlbHBpbmcgZWRpdCBtYXJrZG93biBub3Rlcy4uLicsXG4gICAgJ3NldHRpbmdzLnByZXNlcnZlQ3Vyc29yJzogJ1ByZXNlcnZlIGN1cnNvciBwb3NpdGlvbicsXG4gICAgJ3NldHRpbmdzLnByZXNlcnZlQ3Vyc29yRGVzYyc6ICdUcnkgdG8gbWFpbnRhaW4gY3Vyc29yIHBvc2l0aW9uIGFmdGVyIGFwcGx5aW5nIGNoYW5nZXMnLFxuICAgICdzZXR0aW5ncy5hdXRvQWNjZXB0Q2hhbmdlcyc6ICdBdXRvLWFjY2VwdCBjaGFuZ2VzJyxcbiAgICAnc2V0dGluZ3MuYXV0b0FjY2VwdENoYW5nZXNEZXNjJzogJ0F1dG9tYXRpY2FsbHkgYXBwbHkgY2hhbmdlcyB3aXRob3V0IHNob3dpbmcgcHJldmlldyAodXNlIHdpdGggY2F1dGlvbiEpJyxcbiAgICAnc2V0dGluZ3MubW9kZWwnOiAnTW9kZWwnLFxuICAgICdzZXR0aW5ncy5tb2RlbERlc2MnOiAnU2VsZWN0IHRoZSBDbGF1ZGUgbW9kZWwgdG8gdXNlOiBTb25uZXQgKGJhbGFuY2VkKSwgT3B1cyAobW9zdCBjYXBhYmxlKSwgb3IgSGFpa3UgKGZhc3Rlc3QpLiBMZWF2ZSBlbXB0eSB0byB1c2UgdGhlIGRlZmF1bHQgc3ViYWdlbnQgbW9kZWwuJyxcbiAgICAnc2V0dGluZ3MubW9kZWxEZWZhdWx0JzogJ0RlZmF1bHQgKHN1YmFnZW50IG1vZGVsKScsXG4gICAgJ3NldHRpbmdzLm1vZGVsU29ubmV0JzogJ1Nvbm5ldCAoYmFsYW5jZWQpJyxcbiAgICAnc2V0dGluZ3MubW9kZWxPcHVzJzogJ09wdXMgKG1vc3QgY2FwYWJsZSknLFxuICAgICdzZXR0aW5ncy5tb2RlbEhhaWt1JzogJ0hhaWt1IChmYXN0ZXN0KScsXG4gICAgJ3NldHRpbmdzLnZhdWx0QWNjZXNzJzogJ0FsbG93IHZhdWx0LXdpZGUgYWNjZXNzJyxcbiAgICAnc2V0dGluZ3MudmF1bHRBY2Nlc3NEZXNjJzogJ0FsbG93IENsYXVkZSB0byByZWFkL3NlYXJjaCBvdGhlciBmaWxlcyBpbiB5b3VyIHZhdWx0IChub3QganVzdCB0aGUgY3VycmVudCBub3RlKScsXG4gICAgJ3NldHRpbmdzLnBlcm1pc3Npb25sZXNzTW9kZSc6ICdFbmFibGUgcGVybWlzc2lvbmxlc3MgbW9kZScsXG4gICAgJ3NldHRpbmdzLnBlcm1pc3Npb25sZXNzTW9kZURlc2MnOiAnQWxsb3cgQ2xhdWRlIHRvIGV4ZWN1dGUgYWN0aW9ucyB3aXRob3V0IGFza2luZyBmb3IgcGVybWlzc2lvbiBlYWNoIHRpbWUgKHVzZSB3aXRoIGNhdXRpb24hIENsYXVkZSB3aWxsIGhhdmUgZnVsbCBjb250cm9sKScsXG4gICAgJ3NldHRpbmdzLnRpbWVvdXQnOiAnVGltZW91dCAoc2Vjb25kcyknLFxuICAgICdzZXR0aW5ncy50aW1lb3V0RGVzYyc6ICdNYXhpbXVtIHRpbWUgdG8gd2FpdCBmb3IgQ2xhdWRlIENvZGUgcmVzcG9uc2UgKDAgPSBubyB0aW1lb3V0KScsXG4gICAgJ3NldHRpbmdzLmN1c3RvbUFwaUNvbmZpZyc6ICdDdXN0b20gQVBJIGNvbmZpZ3VyYXRpb24nLFxuICAgICdzZXR0aW5ncy5jdXN0b21BcGlDb25maWdEZXNjJzogJ0NvbmZpZ3VyZSBjdXN0b20gQVBJIGVuZHBvaW50cyBmb3IgcmVnaW9ucyB3aGVyZSBDbGF1ZGUgaXMgbm90IGRpcmVjdGx5IGF2YWlsYWJsZS4gTGVhdmUgZW1wdHkgdG8gdXNlIGRlZmF1bHQgc2V0dGluZ3MuJyxcbiAgICAnc2V0dGluZ3MuYXBpQmFzZVVybCc6ICdBUEkgYmFzZSBVUkwnLFxuICAgICdzZXR0aW5ncy5hcGlCYXNlVXJsRGVzYyc6ICdDdXN0b20gQVBJIGVuZHBvaW50IFVSTCAoZS5nLiwgaHR0cHM6Ly9hcGkua2ltaS5jb20vY29kaW5nLyknLFxuICAgICdzZXR0aW5ncy5hcGlBdXRoVG9rZW4nOiAnQVBJIGF1dGggdG9rZW4nLFxuICAgICdzZXR0aW5ncy5hcGlBdXRoVG9rZW5EZXNjJzogJ0N1c3RvbSBhdXRoZW50aWNhdGlvbiB0b2tlbiBmb3IgdGhlIEFQSSBlbmRwb2ludCcsXG4gICAgJ3NldHRpbmdzLmFwaUF1dGhUb2tlblBsYWNlaG9sZGVyJzogJ0VudGVyIHlvdXIgQVBJIHRva2VuJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tTW9kZWwnOiAnQ3VzdG9tIG1vZGVsJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tTW9kZWxEZXNjJzogJ0N1c3RvbSBtb2RlbCBuYW1lIHRvIHVzZSAoZS5nLiwga2ltaS1mb3ItY29kaW5nKS4gT3ZlcnJpZGVzIHRoZSBtb2RlbCBkcm9wZG93biBhYm92ZS4nLFxuICAgICdzZXR0aW5ncy5jdXN0b21TbWFsbE1vZGVsJzogJ0N1c3RvbSBzbWFsbC9mYXN0IG1vZGVsJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tU21hbGxNb2RlbERlc2MnOiAnQ3VzdG9tIG1vZGVsIG5hbWUgZm9yIGZhc3Qgb3BlcmF0aW9ucyAoZS5nLiwga2ltaS1mb3ItY29kaW5nKScsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ0xhbmd1YWdlJyxcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2VEZXNjJzogJ1NlbGVjdCBpbnRlcmZhY2UgbGFuZ3VhZ2UnLFxufTtcblxuZXhwb3J0IHR5cGUgVHJhbnNsYXRpb25LZXkgPSBrZXlvZiB0eXBlb2YgZW47XG4iLCAiLyoqXG4gKiBDaGluZXNlIChTaW1wbGlmaWVkKSB0cmFuc2xhdGlvbnNcbiAqL1xuZXhwb3J0IGNvbnN0IHpoID0ge1xuICAgIC8vIEhlYWRlclxuICAgICdoZWFkZXIudGl0bGUnOiAnQ2xhdWRlIENvZGUgXHU1MkE5XHU2MjRCJyxcbiAgICAnaGVhZGVyLm5vTm90ZVNlbGVjdGVkJzogJ1x1NjcyQVx1OTAwOVx1NjJFOVx1N0IxNFx1OEJCMCcsXG5cbiAgICAvLyBJbnB1dCBTZWN0aW9uXG4gICAgJ2lucHV0LmxhYmVsJzogJ1x1OEY5M1x1NTE2NVx1NjMwN1x1NEVFNFx1RkYxQScsXG4gICAgJ2lucHV0LnBsYWNlaG9sZGVyJzogJ1x1NEY4Qlx1NTk4Mlx1RkYxQVwiXHU0RTNBXHU4RkQ5XHU0RTJBXHU5MEU4XHU1MjA2XHU2REZCXHU1MkEwXHU2NkY0XHU1OTFBXHU3OTNBXHU0RjhCXCIgXHU2MjE2IFwiXHU3NTI4XHU2NkY0XHU1OTdEXHU3Njg0XHU2ODA3XHU5ODk4XHU5MUNEXHU2NUIwXHU3RUM0XHU3RUM3XCJcdUZGMDhcdTU2REVcdThGNjZcdTUzRDFcdTkwMDFcdUZGMENDdHJsK1x1NTZERVx1OEY2Nlx1NjM2Mlx1ODg0Q1x1RkYwOScsXG4gICAgJ2lucHV0LmNvbnZlcnNhdGlvbmFsTW9kZSc6ICdcdTVCRjlcdThCRERcdTZBMjFcdTVGMEZcdUZGMDhcdTRFMERcdTRGRUVcdTY1MzlcdTY1ODdcdTRFRjZcdUZGMDknLFxuICAgICdpbnB1dC5jb252ZXJzYXRpb25hbE1vZGVUb29sdGlwJzogJ1x1NEUwRSBDbGF1ZGUgXHU1QkY5XHU4QkREXHU0RjQ2XHU0RTBEXHU0RkVFXHU2NTM5XHU0RUZCXHU0RjU1XHU2NTg3XHU0RUY2JyxcbiAgICAnaW5wdXQuc2VsZWN0ZWRUZXh0T25seSc6ICdcdTRFQzVcdTdGMTZcdThGOTFcdTkwMDlcdTRFMkRcdTY1ODdcdTY3MkMnLFxuICAgICdpbnB1dC5hdXRvQWNjZXB0JzogJ1x1ODFFQVx1NTJBOFx1NUU5NFx1NzUyOFx1NjZGNFx1NjUzOScsXG4gICAgJ2lucHV0Lm1vZGVsTGFiZWwnOiAnXHU2QTIxXHU1NzhCXHVGRjFBJyxcbiAgICAnaW5wdXQubW9kZWxEZWZhdWx0JzogJ1x1OUVEOFx1OEJBNCcsXG4gICAgJ2lucHV0LnJ1bkJ1dHRvbic6ICdcdThGRDBcdTg4NEMgQ2xhdWRlIENvZGUnLFxuICAgICdpbnB1dC5ydW5uaW5nQnV0dG9uJzogJ1x1OEZEMFx1ODg0Q1x1NEUyRC4uLicsXG4gICAgJ2lucHV0LmNhbmNlbEJ1dHRvbic6ICdcdTUzRDZcdTZEODgnLFxuXG4gICAgLy8gUmVzdWx0IFNlY3Rpb25cbiAgICAncmVzdWx0LnRpdGxlJzogJ1x1N0VEM1x1Njc5QycsXG5cbiAgICAvLyBPdXRwdXQgU2VjdGlvblxuICAgICdvdXRwdXQudGl0bGUnOiAnXHU4RjkzXHU1MUZBJyxcblxuICAgIC8vIFByZXZpZXcgU2VjdGlvblxuICAgICdwcmV2aWV3LnRpdGxlJzogJ1x1OTg4NFx1ODlDOCcsXG4gICAgJ3ByZXZpZXcudGFiUmF3JzogJ1x1NTM5Rlx1NTlDQicsXG4gICAgJ3ByZXZpZXcudGFiRGlmZic6ICdcdTVERUVcdTVGMDInLFxuICAgICdwcmV2aWV3LnRhYlJlbmRlcmVkJzogJ1x1NkUzMlx1NjdEMycsXG4gICAgJ3ByZXZpZXcub3JpZ2luYWxDaGFycyc6ICdcdTUzOUZcdTU5Q0JcdUZGMUEnLFxuICAgICdwcmV2aWV3Lm1vZGlmaWVkQ2hhcnMnOiAnXHU0RkVFXHU2NTM5XHU1NDBFXHVGRjFBJyxcbiAgICAncHJldmlldy5jaGFycyc6ICdcdTVCNTdcdTdCMjYnLFxuICAgICdwcmV2aWV3LmFwcGx5QnV0dG9uJzogJ1x1NUU5NFx1NzUyOFx1NjZGNFx1NjUzOScsXG4gICAgJ3ByZXZpZXcucmVqZWN0QnV0dG9uJzogJ1x1NjJEMlx1N0VERCcsXG5cbiAgICAvLyBIaXN0b3J5IFNlY3Rpb25cbiAgICAnaGlzdG9yeS50aXRsZSc6ICdcdTUzODZcdTUzRjJcdThCQjBcdTVGNTUnLFxuICAgICdoaXN0b3J5LmNsZWFyQnV0dG9uJzogJ1x1NkUwNVx1OTY2NCcsXG5cbiAgICAvLyBBZ2VudCBTZWN0aW9uXG4gICAgJ2FnZW50LnBsYW5UaXRsZSc6ICdcdThCQTFcdTUyMTInLFxuICAgICdhZ2VudC5hY3Rpdml0eVRpdGxlJzogJ1x1NkQzQlx1NTJBOCcsXG4gICAgJ2FnZW50Lm5vUGxhbic6ICdcdTVDMUFcdTY3MkFcdTUyMUJcdTVFRkFcdThCQTFcdTUyMTInLFxuXG4gICAgLy8gVG9kbyBTdGF0dXNcbiAgICAndG9kby5wZW5kaW5nJzogJ1x1NUY4NVx1NTkwNFx1NzQwNicsXG4gICAgJ3RvZG8uaW5Qcm9ncmVzcyc6ICdcdThGREJcdTg4NENcdTRFMkQnLFxuICAgICd0b2RvLmNvbXBsZXRlZCc6ICdcdTVERjJcdTVCOENcdTYyMTAnLFxuXG4gICAgLy8gSW50ZXJhY3RpdmUgUHJvbXB0XG4gICAgJ2ludGVyYWN0aXZlLmhlYWRlcic6ICdDbGF1ZGUgXHU2QjYzXHU1NzI4XHU4QkY3XHU2QzQyXHU3ODZFXHU4QkE0JyxcbiAgICAnaW50ZXJhY3RpdmUueWVzQnV0dG9uJzogJ1x1NjYyRicsXG4gICAgJ2ludGVyYWN0aXZlLm5vQnV0dG9uJzogJ1x1NTQyNicsXG4gICAgJ2ludGVyYWN0aXZlLmN1c3RvbVBsYWNlaG9sZGVyJzogJ1x1NjIxNlx1OEY5M1x1NTE2NVx1ODFFQVx1NUI5QVx1NEU0OVx1NTZERVx1NTkwRC4uLicsXG5cbiAgICAvLyBQZXJtaXNzaW9uIEFwcHJvdmFsXG4gICAgJ3Blcm1pc3Npb24uaGVhZGVyJzogJ1x1OTcwMFx1ODk4MVx1Njc0M1x1OTY1MCcsXG4gICAgJ3Blcm1pc3Npb24ubWVzc2FnZSc6ICdDbGF1ZGUgXHU2QjYzXHU1NzI4XHU4QkY3XHU2QzQyXHU2MjY3XHU4ODRDXHU2NENEXHU0RjVDXHU3Njg0XHU2NzQzXHU5NjUwXHUzMDAyJyxcbiAgICAncGVybWlzc2lvbi5hcHByb3ZlQnV0dG9uJzogJ1x1NjI3OVx1NTFDNlx1NUU3Nlx1N0VFN1x1N0VFRCcsXG4gICAgJ3Blcm1pc3Npb24uZGVueUJ1dHRvbic6ICdcdTYyRDJcdTdFREQnLFxuXG4gICAgLy8gU3RhdHVzIE1lc3NhZ2VzXG4gICAgJ3N0YXR1cy5wcm9jZXNzaW5nJzogJ0NsYXVkZSBcdTZCNjNcdTU3MjhcdTU5MDRcdTc0MDYnLFxuICAgICdzdGF0dXMuYXV0b0FwcGx5aW5nJzogJ1x1NkI2M1x1NTcyOFx1ODFFQVx1NTJBOFx1NUU5NFx1NzUyOFx1NjZGNFx1NjUzOS4uLicsXG4gICAgJ3N0YXR1cy5ydW5uaW5nQXV0aG9yaXplZCc6ICdcdTZCNjNcdTU3MjhcdTYyNjdcdTg4NENcdTYzODhcdTY3NDNcdTRFRkJcdTUyQTEnLFxuICAgICdzdGF0dXMucnVubmluZ0luQmFja2dyb3VuZCc6ICdcdTU0MEVcdTUzRjBcdThGRDBcdTg4NENcdTRFMkQuLi4nLFxuICAgICdzdGF0dXMuZmFpbGVkJzogJ1x1NTkzMVx1OEQyNSAtIFx1OEJGN1x1NjdFNVx1NzcwQlx1NEUwQlx1NjVCOVx1OTUxOVx1OEJFRlx1NEZFMVx1NjA2RicsXG5cbiAgICAvLyBOb3RpZmljYXRpb25zXG4gICAgJ25vdGljZS5hbHJlYWR5UHJvY2Vzc2luZyc6ICdcdTZCNjNcdTU3MjhcdTU5MDRcdTc0MDZcdThCRjdcdTZDNDJcdUZGMENcdThCRjdcdTdBMERcdTUwMTlcdTMwMDInLFxuICAgICdub3RpY2UuZW50ZXJQcm9tcHQnOiAnXHU4QkY3XHU4RjkzXHU1MTY1XHU2MzA3XHU0RUU0JyxcbiAgICAnbm90aWNlLm5vQWN0aXZlTm90ZSc6ICdcdTY3MkFcdTYyN0VcdTUyMzBcdTZEM0JcdTUyQThcdTdCMTRcdThCQjBcdUZGMENcdThCRjdcdTUxNDhcdTYyNTNcdTVGMDBcdTRFMDBcdTRFMkEgTWFya2Rvd24gXHU3QjE0XHU4QkIwJyxcbiAgICAnbm90aWNlLm5vRWRpdG9yJzogJ1x1NjcyQVx1NjI3RVx1NTIzMCBNYXJrZG93biBcdTdGMTZcdThGOTFcdTU2NjhcdUZGMENcdThCRjdcdTc4NkVcdTRGRERcdTVERjJcdTYyNTNcdTVGMDBcdTdCMTRcdThCQjAnLFxuICAgICdub3RpY2Uubm9WYXVsdFBhdGgnOiAnXHU2NUUwXHU2Q0Q1XHU3ODZFXHU1QjlBXHU0RUQzXHU1RTkzXHU4REVGXHU1Rjg0JyxcbiAgICAnbm90aWNlLmNvbXBsZXRlZCc6ICdDbGF1ZGUgQ29kZSBcdTVERjJcdTVCOENcdTYyMTAnLFxuICAgICdub3RpY2UuY29tcGxldGVkTm9DaGFuZ2VzJzogJ0NsYXVkZSBDb2RlIFx1NURGMlx1NUI4Q1x1NjIxMFx1RkYwOFx1NjVFMFx1NjU4N1x1NEVGNlx1NjZGNFx1NjUzOVx1RkYwOScsXG4gICAgJ25vdGljZS5jaGFuZ2VzQXBwbGllZCc6ICdcdTY2RjRcdTY1MzlcdTVERjJcdTgxRUFcdTUyQThcdTVFOTRcdTc1MjgnLFxuICAgICdub3RpY2UuY2hhbmdlc0FwcGxpZWRTdWNjZXNzJzogJ1x1NjZGNFx1NjUzOVx1NURGMlx1NjIxMFx1NTI5Rlx1NUU5NFx1NzUyOCcsXG4gICAgJ25vdGljZS5mYWlsZWRBcHBseUNoYW5nZXMnOiAnXHU1RTk0XHU3NTI4XHU2NkY0XHU2NTM5XHU1OTMxXHU4RDI1JyxcbiAgICAnbm90aWNlLmNoYW5nZXNSZWplY3RlZCc6ICdcdTY2RjRcdTY1MzlcdTVERjJcdTYyRDJcdTdFREQnLFxuICAgICdub3RpY2UuY2FuY2VsbGVkJzogJ1x1NURGMlx1NTNENlx1NkQ4OCcsXG4gICAgJ25vdGljZS5wZXJtaXNzaW9uUmVxdWVzdCc6ICdDbGF1ZGUgXHU2QjYzXHU1NzI4XHU4QkY3XHU2QzQyXHU2NzQzXHU5NjUwIC0gXHU4QkY3XHU2Mjc5XHU1MUM2XHU2MjE2XHU2MkQyXHU3RUREJyxcbiAgICAnbm90aWNlLnBlcm1pc3Npb25EZW5pZWQnOiAnXHU2NzQzXHU5NjUwXHU4OEFCXHU2MkQyXHU3RUREIC0gQ2xhdWRlIFx1NUMwNlx1NEUwRFx1NEYxQVx1N0VFN1x1N0VFRCcsXG4gICAgJ25vdGljZS5ub0NoYW5nZXNUb0FwcGx5JzogJ1x1NkNBMVx1NjcwOVx1NTNFRlx1NUU5NFx1NzUyOFx1NzY4NFx1NjZGNFx1NjUzOScsXG4gICAgJ25vdGljZS5ub0FjdGl2ZUZpbGUnOiAnXHU2Q0ExXHU2NzA5XHU2RDNCXHU1MkE4XHU2NTg3XHU0RUY2JyxcbiAgICAnbm90aWNlLmhpc3RvcnlSZXN0b3JlZCc6ICdcdTUzODZcdTUzRjJcdThCQjBcdTVGNTVcdTk4NzlcdTVERjJcdTYwNjJcdTU5MEQnLFxuICAgICdub3RpY2UuaGlzdG9yeVJlc3RvcmVkV2l0aENoYW5nZXMnOiAnXHU1Mzg2XHU1M0YyXHU4QkIwXHU1RjU1XHU5ODc5XHU1REYyXHU2MDYyXHU1OTBEXHVGRjA4XHU1MzA1XHU1NDJCXHU1RUZBXHU4QkFFXHU3Njg0XHU2NkY0XHU2NTM5XHVGRjA5JyxcbiAgICAnbm90aWNlLmhpc3RvcnlDbGVhcmVkJzogJ1x1NTM4Nlx1NTNGMlx1OEJCMFx1NUY1NVx1NURGMlx1NkUwNVx1OTY2NCcsXG5cbiAgICAvLyBEaWZmIFZpZXdcbiAgICAnZGlmZi5vcmlnaW5hbCc6ICdcdTUzOUZcdTU5Q0InLFxuICAgICdkaWZmLm1vZGlmaWVkJzogJ1x1NEZFRVx1NjUzOVx1NTQwRScsXG5cbiAgICAvLyBSZXN1bHQgUmVuZGVyZXJcbiAgICAncmVzdWx0LmRpcmVjdEFuc3dlcic6ICdcdTc2RjRcdTYzQTVcdTU2REVcdTdCNTQnLFxuICAgICdyZXN1bHQuYWRkaXRpb25hbENvbnRleHQnOiAnXHU5NjQ0XHU1MkEwXHU1MTg1XHU1QkI5JyxcbiAgICAncmVzdWx0LnRva2Vucyc6ICdcdTRFRTRcdTcyNEMnLFxuICAgICdyZXN1bHQudG9rZW5zSW4nOiAnXHU4RjkzXHU1MTY1JyxcbiAgICAncmVzdWx0LnRva2Vuc091dCc6ICdcdThGOTNcdTUxRkEnLFxuXG4gICAgLy8gUHJldmlldyBTdGF0c1xuICAgICdwcmV2aWV3Lm9yaWdpbmFsTGFiZWwnOiAnXHU1MzlGXHU1OUNCXHVGRjFBJyxcbiAgICAncHJldmlldy5tb2RpZmllZExhYmVsJzogJ1x1NEZFRVx1NjUzOVx1NTQwRVx1RkYxQScsXG4gICAgJ3ByZXZpZXcuY2hhcnNMYWJlbCc6ICdcdTVCNTdcdTdCMjYnLFxuXG4gICAgLy8gTWlzY1xuICAgICdtaXNjLm5vUGVuZGluZ1JlcXVlc3QnOiAnXHU2NzJBXHU2MjdFXHU1MjMwXHU1Rjg1XHU1OTA0XHU3NDA2XHU3Njg0XHU4QkY3XHU2QzQyJyxcbiAgICAnbWlzYy5sYW5ndWFnZUNoYW5nZWQnOiAnXHU4QkVEXHU4QTAwXHU1REYyXHU2NkY0XHU2NTM5XHUzMDAyXHU5MEU4XHU1MjA2XHU3NTRDXHU5NzYyXHU1MTQzXHU3RDIwXHU1QzA2XHU1NzI4XHU5MUNEXHU2NUIwXHU1MkEwXHU4RjdEXHU1NDBFXHU2NkY0XHU2NUIwXHUzMDAyJyxcbiAgICAnbWlzYy50ZXN0RmFpbGVkJzogJ0NsYXVkZSBDb2RlIFx1NkQ0Qlx1OEJENVx1NTkzMVx1OEQyNScsXG5cbiAgICAvLyBTZXR0aW5nc1xuICAgICdzZXR0aW5ncy5hdXRvRGV0ZWN0UGF0aCc6ICdcdTgxRUFcdTUyQThcdTY4QzBcdTZENEIgQ2xhdWRlIENvZGUgXHU4REVGXHU1Rjg0JyxcbiAgICAnc2V0dGluZ3MuYXV0b0RldGVjdFBhdGhEZXNjJzogJ1x1ODFFQVx1NTJBOFx1NjhDMFx1NkQ0QiBDbGF1ZGUgQ29kZSBcdTUzRUZcdTYyNjdcdTg4NENcdTY1ODdcdTRFRjZcdTc2ODRcdTRGNERcdTdGNkUnLFxuICAgICdzZXR0aW5ncy5leGVjdXRhYmxlUGF0aCc6ICdDbGF1ZGUgQ29kZSBcdTUzRUZcdTYyNjdcdTg4NENcdTY1ODdcdTRFRjZcdThERUZcdTVGODQnLFxuICAgICdzZXR0aW5ncy5leGVjdXRhYmxlUGF0aERlc2MnOiAnQ2xhdWRlIENvZGUgXHU1M0VGXHU2MjY3XHU4ODRDXHU2NTg3XHU0RUY2XHU3Njg0XHU1QjhDXHU2NTc0XHU4REVGXHU1Rjg0XHVGRjA4XHU0RjhCXHU1OTgyXHVGRjFBL3Vzci9sb2NhbC9iaW4vY2xhdWRlXHVGRjA5JyxcbiAgICAnc2V0dGluZ3MudGVzdEluc3RhbGxhdGlvbic6ICdcdTZENEJcdThCRDUgQ2xhdWRlIENvZGUgXHU1Qjg5XHU4OEM1JyxcbiAgICAnc2V0dGluZ3MudGVzdEluc3RhbGxhdGlvbkRlc2MnOiAnXHU5QThDXHU4QkMxIENsYXVkZSBDb2RlIFx1NjYyRlx1NTQyNlx1NTNFRlx1OEJCRlx1OTVFRVx1NUU3Nlx1NkI2M1x1NUUzOFx1NURFNVx1NEY1QycsXG4gICAgJ3NldHRpbmdzLnRlc3RCdXR0b24nOiAnXHU2RDRCXHU4QkQ1JyxcbiAgICAnc2V0dGluZ3MudGVzdFdvcmtpbmcnOiAnXHU2QjYzXHU1RTM4XHU1REU1XHU0RjVDXHVGRjAxJyxcbiAgICAnc2V0dGluZ3MudGVzdEZhaWxlZCc6ICdcdTU5MzFcdThEMjUnLFxuICAgICdzZXR0aW5ncy5jdXN0b21Qcm9tcHQnOiAnXHU4MUVBXHU1QjlBXHU0RTQ5XHU3Q0ZCXHU3RURGXHU2M0QwXHU3OTNBJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tUHJvbXB0RGVzYyc6ICdcdTUzRUZcdTkwMDlcdTc2ODRcdTgxRUFcdTVCOUFcdTRFNDlcdTdDRkJcdTdFREZcdTYzRDBcdTc5M0FcdUZGMENcdTVDMDZcdTZERkJcdTUyQTBcdTUyMzBcdTYyNDBcdTY3MDlcdThCRjdcdTZDNDJcdTUyNEQnLFxuICAgICdzZXR0aW5ncy5jdXN0b21Qcm9tcHRQbGFjZWhvbGRlcic6ICdcdTRGNjBcdTZCNjNcdTU3MjhcdTVFMkVcdTUyQTlcdTdGMTZcdThGOTEgTWFya2Rvd24gXHU3QjE0XHU4QkIwLi4uJyxcbiAgICAnc2V0dGluZ3MucHJlc2VydmVDdXJzb3InOiAnXHU0RkREXHU2MzAxXHU1MTQ5XHU2ODA3XHU0RjREXHU3RjZFJyxcbiAgICAnc2V0dGluZ3MucHJlc2VydmVDdXJzb3JEZXNjJzogJ1x1NUU5NFx1NzUyOFx1NjZGNFx1NjUzOVx1NTQwRVx1NUMxRFx1OEJENVx1NEZERFx1NjMwMVx1NTE0OVx1NjgwN1x1NEY0RFx1N0Y2RScsXG4gICAgJ3NldHRpbmdzLmF1dG9BY2NlcHRDaGFuZ2VzJzogJ1x1ODFFQVx1NTJBOFx1NjNBNVx1NTNEN1x1NjZGNFx1NjUzOScsXG4gICAgJ3NldHRpbmdzLmF1dG9BY2NlcHRDaGFuZ2VzRGVzYyc6ICdcdTgxRUFcdTUyQThcdTVFOTRcdTc1MjhcdTY2RjRcdTY1MzlcdTgwMENcdTRFMERcdTY2M0VcdTc5M0FcdTk4ODRcdTg5QzhcdUZGMDhcdThCRjdcdThDMjhcdTYxNEVcdTRGN0ZcdTc1MjhcdUZGMDFcdUZGMDknLFxuICAgICdzZXR0aW5ncy5tb2RlbCc6ICdcdTZBMjFcdTU3OEInLFxuICAgICdzZXR0aW5ncy5tb2RlbERlc2MnOiAnXHU5MDA5XHU2MkU5XHU4OTgxXHU0RjdGXHU3NTI4XHU3Njg0IENsYXVkZSBcdTZBMjFcdTU3OEJcdUZGMUFTb25uZXRcdUZGMDhcdTVFNzNcdTg4NjFcdUZGMDlcdTMwMDFPcHVzXHVGRjA4XHU2NzAwXHU1RjNBXHU1OTI3XHVGRjA5XHU2MjE2IEhhaWt1XHVGRjA4XHU2NzAwXHU1RkVCXHVGRjA5XHUzMDAyXHU3NTU5XHU3QTdBXHU0RjdGXHU3NTI4XHU5RUQ4XHU4QkE0XHU1QjUwXHU0RUUzXHU3NDA2XHU2QTIxXHU1NzhCXHUzMDAyJyxcbiAgICAnc2V0dGluZ3MubW9kZWxEZWZhdWx0JzogJ1x1OUVEOFx1OEJBNFx1RkYwOFx1NUI1MFx1NEVFM1x1NzQwNlx1NkEyMVx1NTc4Qlx1RkYwOScsXG4gICAgJ3NldHRpbmdzLm1vZGVsU29ubmV0JzogJ1Nvbm5ldFx1RkYwOFx1NUU3M1x1ODg2MVx1RkYwOScsXG4gICAgJ3NldHRpbmdzLm1vZGVsT3B1cyc6ICdPcHVzXHVGRjA4XHU2NzAwXHU1RjNBXHU1OTI3XHVGRjA5JyxcbiAgICAnc2V0dGluZ3MubW9kZWxIYWlrdSc6ICdIYWlrdVx1RkYwOFx1NjcwMFx1NUZFQlx1RkYwOScsXG4gICAgJ3NldHRpbmdzLnZhdWx0QWNjZXNzJzogJ1x1NTE0MVx1OEJCOFx1NEVEM1x1NUU5M1x1ODMwM1x1NTZGNFx1OEJCRlx1OTVFRScsXG4gICAgJ3NldHRpbmdzLnZhdWx0QWNjZXNzRGVzYyc6ICdcdTUxNDFcdThCQjggQ2xhdWRlIFx1OEJGQlx1NTNENi9cdTY0MUNcdTdEMjJcdTRFRDNcdTVFOTNcdTRFMkRcdTc2ODRcdTUxNzZcdTRFRDZcdTY1ODdcdTRFRjZcdUZGMDhcdTRFMERcdTRFQzVcdTRFQzVcdTY2MkZcdTVGNTNcdTUyNERcdTdCMTRcdThCQjBcdUZGMDknLFxuICAgICdzZXR0aW5ncy5wZXJtaXNzaW9ubGVzc01vZGUnOiAnXHU1NDJGXHU3NTI4XHU2NUUwXHU2NzQzXHU5NjUwXHU2QTIxXHU1RjBGJyxcbiAgICAnc2V0dGluZ3MucGVybWlzc2lvbmxlc3NNb2RlRGVzYyc6ICdcdTUxNDFcdThCQjggQ2xhdWRlIFx1NjI2N1x1ODg0Q1x1NjRDRFx1NEY1Q1x1ODAwQ1x1NjVFMFx1OTcwMFx1NkJDRlx1NkIyMVx1OEJGN1x1NkM0Mlx1Njc0M1x1OTY1MFx1RkYwOFx1OEJGN1x1OEMyOFx1NjE0RVx1NEY3Rlx1NzUyOFx1RkYwMUNsYXVkZSBcdTVDMDZcdTYyRTVcdTY3MDlcdTVCOENcdTUxNjhcdTYzQTdcdTUyMzZcdTY3NDNcdUZGMDknLFxuICAgICdzZXR0aW5ncy50aW1lb3V0JzogJ1x1OEQ4NVx1NjVGNlx1NjVGNlx1OTVGNFx1RkYwOFx1NzlEMlx1RkYwOScsXG4gICAgJ3NldHRpbmdzLnRpbWVvdXREZXNjJzogJ1x1N0I0OVx1NUY4NSBDbGF1ZGUgQ29kZSBcdTU0Q0RcdTVFOTRcdTc2ODRcdTY3MDBcdTk1N0ZcdTY1RjZcdTk1RjRcdUZGMDgwID0gXHU2NUUwXHU4RDg1XHU2NUY2XHVGRjA5JyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tQXBpQ29uZmlnJzogJ1x1ODFFQVx1NUI5QVx1NEU0OSBBUEkgXHU5MTREXHU3RjZFJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tQXBpQ29uZmlnRGVzYyc6ICdcdTRFM0EgQ2xhdWRlIFx1NEUwRFx1NTNFRlx1NzZGNFx1NjNBNVx1OEJCRlx1OTVFRVx1NzY4NFx1NTczMFx1NTMzQVx1OTE0RFx1N0Y2RVx1ODFFQVx1NUI5QVx1NEU0OSBBUEkgXHU3QUVGXHU3MEI5XHUzMDAyXHU3NTU5XHU3QTdBXHU0RjdGXHU3NTI4XHU5RUQ4XHU4QkE0XHU4QkJFXHU3RjZFXHUzMDAyJyxcbiAgICAnc2V0dGluZ3MuYXBpQmFzZVVybCc6ICdBUEkgXHU1N0ZBXHU3ODQwIFVSTCcsXG4gICAgJ3NldHRpbmdzLmFwaUJhc2VVcmxEZXNjJzogJ1x1ODFFQVx1NUI5QVx1NEU0OSBBUEkgXHU3QUVGXHU3MEI5IFVSTFx1RkYwOFx1NEY4Qlx1NTk4Mlx1RkYxQWh0dHBzOi8vYXBpLmtpbWkuY29tL2NvZGluZy9cdUZGMDknLFxuICAgICdzZXR0aW5ncy5hcGlBdXRoVG9rZW4nOiAnQVBJIFx1OEJBNFx1OEJDMVx1NEVFNFx1NzI0QycsXG4gICAgJ3NldHRpbmdzLmFwaUF1dGhUb2tlbkRlc2MnOiAnQVBJIFx1N0FFRlx1NzBCOVx1NzY4NFx1ODFFQVx1NUI5QVx1NEU0OVx1OEJBNFx1OEJDMVx1NEVFNFx1NzI0QycsXG4gICAgJ3NldHRpbmdzLmFwaUF1dGhUb2tlblBsYWNlaG9sZGVyJzogJ1x1OEY5M1x1NTE2NVx1NjBBOFx1NzY4NCBBUEkgXHU0RUU0XHU3MjRDJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tTW9kZWwnOiAnXHU4MUVBXHU1QjlBXHU0RTQ5XHU2QTIxXHU1NzhCJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tTW9kZWxEZXNjJzogJ1x1ODk4MVx1NEY3Rlx1NzUyOFx1NzY4NFx1ODFFQVx1NUI5QVx1NEU0OVx1NkEyMVx1NTc4Qlx1NTQwRFx1NzlGMFx1RkYwOFx1NEY4Qlx1NTk4Mlx1RkYxQWtpbWktZm9yLWNvZGluZ1x1RkYwOVx1MzAwMlx1NUMwNlx1ODk4Nlx1NzZENlx1NEUwQVx1OTc2Mlx1NzY4NFx1NkEyMVx1NTc4Qlx1NEUwQlx1NjJDOVx1OTAwOVx1OTg3OVx1MzAwMicsXG4gICAgJ3NldHRpbmdzLmN1c3RvbVNtYWxsTW9kZWwnOiAnXHU4MUVBXHU1QjlBXHU0RTQ5XHU1QzBGXHU1NzhCL1x1NUZFQlx1OTAxRlx1NkEyMVx1NTc4QicsXG4gICAgJ3NldHRpbmdzLmN1c3RvbVNtYWxsTW9kZWxEZXNjJzogJ1x1NzUyOFx1NEU4RVx1NUZFQlx1OTAxRlx1NjRDRFx1NEY1Q1x1NzY4NFx1ODFFQVx1NUI5QVx1NEU0OVx1NkEyMVx1NTc4Qlx1NTQwRFx1NzlGMFx1RkYwOFx1NEY4Qlx1NTk4Mlx1RkYxQWtpbWktZm9yLWNvZGluZ1x1RkYwOScsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ1x1OEJFRFx1OEEwMCcsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlRGVzYyc6ICdcdTkwMDlcdTYyRTlcdTc1NENcdTk3NjJcdThCRURcdThBMDAnLFxufTtcbiIsICIvKipcbiAqIFNwYW5pc2ggdHJhbnNsYXRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCBlcyA9IHtcbiAgICAvLyBIZWFkZXJcbiAgICAnaGVhZGVyLnRpdGxlJzogJ0FzaXN0ZW50ZSBDbGF1ZGUgQ29kZScsXG4gICAgJ2hlYWRlci5ub05vdGVTZWxlY3RlZCc6ICduaW5ndW5hIG5vdGEgc2VsZWNjaW9uYWRhJyxcblxuICAgIC8vIElucHV0IFNlY3Rpb25cbiAgICAnaW5wdXQubGFiZWwnOiAnVHVzIGluc3RydWNjaW9uZXM6JyxcbiAgICAnaW5wdXQucGxhY2Vob2xkZXInOiAnZWouLCBcIkFncmVnYXIgbVx1MDBFMXMgZWplbXBsb3MgYSBlc3RhIHNlY2NpXHUwMEYzblwiIG8gXCJSZW9yZ2FuaXphciBjb24gbWVqb3JlcyBlbmNhYmV6YWRvc1wiIChFbnRlciBwYXJhIGVudmlhciwgQ3RybCtFbnRlciBwYXJhIG51ZXZhIGxcdTAwRURuZWEpJyxcbiAgICAnaW5wdXQuY29udmVyc2F0aW9uYWxNb2RlJzogJ21vZG8gY29udmVyc2FjaW9uYWwgKHNpbiBlZGljaVx1MDBGM24gZGUgYXJjaGl2b3MpJyxcbiAgICAnaW5wdXQuY29udmVyc2F0aW9uYWxNb2RlVG9vbHRpcCc6ICdDaGF0ZWEgY29uIENsYXVkZSBzaW4gbW9kaWZpY2FyIG5pbmdcdTAwRkFuIGFyY2hpdm8nLFxuICAgICdpbnB1dC5zZWxlY3RlZFRleHRPbmx5JzogJ0VkaXRhciBzb2xvIHRleHRvIHNlbGVjY2lvbmFkbycsXG4gICAgJ2lucHV0LmF1dG9BY2NlcHQnOiAnQWNlcHRhciBjYW1iaW9zIGF1dG9tXHUwMEUxdGljYW1lbnRlJyxcbiAgICAnaW5wdXQubW9kZWxMYWJlbCc6ICdNb2RlbG86JyxcbiAgICAnaW5wdXQubW9kZWxEZWZhdWx0JzogJ1ByZWRldGVybWluYWRvJyxcbiAgICAnaW5wdXQucnVuQnV0dG9uJzogJ0VqZWN1dGFyIENsYXVkZSBDb2RlJyxcbiAgICAnaW5wdXQucnVubmluZ0J1dHRvbic6ICdFamVjdXRhbmRvLi4uJyxcbiAgICAnaW5wdXQuY2FuY2VsQnV0dG9uJzogJ0NhbmNlbGFyJyxcblxuICAgIC8vIFJlc3VsdCBTZWN0aW9uXG4gICAgJ3Jlc3VsdC50aXRsZSc6ICdSZXN1bHRhZG8nLFxuXG4gICAgLy8gT3V0cHV0IFNlY3Rpb25cbiAgICAnb3V0cHV0LnRpdGxlJzogJ1NhbGlkYScsXG5cbiAgICAvLyBQcmV2aWV3IFNlY3Rpb25cbiAgICAncHJldmlldy50aXRsZSc6ICdWaXN0YSBwcmV2aWEnLFxuICAgICdwcmV2aWV3LnRhYlJhdyc6ICdTaW4gZm9ybWF0bycsXG4gICAgJ3ByZXZpZXcudGFiRGlmZic6ICdEaWZlcmVuY2lhcycsXG4gICAgJ3ByZXZpZXcudGFiUmVuZGVyZWQnOiAnUmVuZGVyaXphZG8nLFxuICAgICdwcmV2aWV3Lm9yaWdpbmFsQ2hhcnMnOiAnT3JpZ2luYWw6JyxcbiAgICAncHJldmlldy5tb2RpZmllZENoYXJzJzogJ01vZGlmaWNhZG86JyxcbiAgICAncHJldmlldy5jaGFycyc6ICdjYXJhY3RlcmVzJyxcbiAgICAncHJldmlldy5hcHBseUJ1dHRvbic6ICdhcGxpY2FyIGNhbWJpb3MnLFxuICAgICdwcmV2aWV3LnJlamVjdEJ1dHRvbic6ICdyZWNoYXphcicsXG5cbiAgICAvLyBIaXN0b3J5IFNlY3Rpb25cbiAgICAnaGlzdG9yeS50aXRsZSc6ICdIaXN0b3JpYWwnLFxuICAgICdoaXN0b3J5LmNsZWFyQnV0dG9uJzogJ0xpbXBpYXInLFxuXG4gICAgLy8gQWdlbnQgU2VjdGlvblxuICAgICdhZ2VudC5wbGFuVGl0bGUnOiAncGxhbicsXG4gICAgJ2FnZW50LmFjdGl2aXR5VGl0bGUnOiAnQWN0aXZpZGFkJyxcbiAgICAnYWdlbnQubm9QbGFuJzogJ0FcdTAwRkFuIG5vIHNlIGhhIGNyZWFkbyB1biBwbGFuJyxcblxuICAgIC8vIFRvZG8gU3RhdHVzXG4gICAgJ3RvZG8ucGVuZGluZyc6ICdwZW5kaWVudGUnLFxuICAgICd0b2RvLmluUHJvZ3Jlc3MnOiAnZW4gcHJvZ3Jlc28nLFxuICAgICd0b2RvLmNvbXBsZXRlZCc6ICdjb21wbGV0YWRvJyxcblxuICAgIC8vIEludGVyYWN0aXZlIFByb21wdFxuICAgICdpbnRlcmFjdGl2ZS5oZWFkZXInOiAnQ2xhdWRlIGVzdFx1MDBFMSBzb2xpY2l0YW5kbyBjb25maXJtYWNpXHUwMEYzbicsXG4gICAgJ2ludGVyYWN0aXZlLnllc0J1dHRvbic6ICdzXHUwMEVEJyxcbiAgICAnaW50ZXJhY3RpdmUubm9CdXR0b24nOiAnbm8nLFxuICAgICdpbnRlcmFjdGl2ZS5jdXN0b21QbGFjZWhvbGRlcic6ICdPIGVzY3JpYmUgdW5hIHJlc3B1ZXN0YSBwZXJzb25hbGl6YWRhLi4uJyxcblxuICAgIC8vIFBlcm1pc3Npb24gQXBwcm92YWxcbiAgICAncGVybWlzc2lvbi5oZWFkZXInOiAncGVybWlzbyByZXF1ZXJpZG8nLFxuICAgICdwZXJtaXNzaW9uLm1lc3NhZ2UnOiAnQ2xhdWRlIGVzdFx1MDBFMSBzb2xpY2l0YW5kbyBwZXJtaXNvIHBhcmEgZWplY3V0YXIgYWNjaW9uZXMuJyxcbiAgICAncGVybWlzc2lvbi5hcHByb3ZlQnV0dG9uJzogJ2Fwcm9iYXIgeSBjb250aW51YXInLFxuICAgICdwZXJtaXNzaW9uLmRlbnlCdXR0b24nOiAnZGVuZWdhcicsXG5cbiAgICAvLyBTdGF0dXMgTWVzc2FnZXNcbiAgICAnc3RhdHVzLnByb2Nlc3NpbmcnOiAnQ2xhdWRlIGVzdFx1MDBFMSBwcm9jZXNhbmRvJyxcbiAgICAnc3RhdHVzLmF1dG9BcHBseWluZyc6ICdBcGxpY2FuZG8gY2FtYmlvcyBhdXRvbVx1MDBFMXRpY2FtZW50ZS4uLicsXG4gICAgJ3N0YXR1cy5ydW5uaW5nQXV0aG9yaXplZCc6ICdFamVjdXRhbmRvIHRhcmVhcyBhdXRvcml6YWRhcycsXG4gICAgJ3N0YXR1cy5ydW5uaW5nSW5CYWNrZ3JvdW5kJzogJ0VqZWN1dGFuZG8gZW4gc2VndW5kbyBwbGFuby4uLicsXG4gICAgJ3N0YXR1cy5mYWlsZWQnOiAnRmFsbFx1MDBGMyAtIHZlciBlcnJvciBhYmFqbycsXG5cbiAgICAvLyBOb3RpZmljYXRpb25zXG4gICAgJ25vdGljZS5hbHJlYWR5UHJvY2Vzc2luZyc6ICdZYSBzZSBlc3RcdTAwRTEgcHJvY2VzYW5kbyB1bmEgc29saWNpdHVkLiBQb3IgZmF2b3IgZXNwZXJhLicsXG4gICAgJ25vdGljZS5lbnRlclByb21wdCc6ICdQb3IgZmF2b3IgaW5ncmVzYSB1bmEgaW5zdHJ1Y2NpXHUwMEYzbicsXG4gICAgJ25vdGljZS5ub0FjdGl2ZU5vdGUnOiAnTm8gc2UgZW5jb250clx1MDBGMyB1bmEgbm90YSBhY3RpdmEsIHBvciBmYXZvciBhYnJlIHVuYSBub3RhIE1hcmtkb3duIHByaW1lcm8nLFxuICAgICdub3RpY2Uubm9FZGl0b3InOiAnTm8gc2UgZW5jb250clx1MDBGMyB1biBlZGl0b3IgTWFya2Rvd24sIGFzZWdcdTAwRkFyYXRlIGRlIHRlbmVyIHVuYSBub3RhIGFiaWVydGEnLFxuICAgICdub3RpY2Uubm9WYXVsdFBhdGgnOiAnTm8gc2UgcHVkbyBkZXRlcm1pbmFyIGxhIHJ1dGEgZGUgbGEgYlx1MDBGM3ZlZGEnLFxuICAgICdub3RpY2UuY29tcGxldGVkJzogJ0NsYXVkZSBDb2RlIGNvbXBsZXRhZG8nLFxuICAgICdub3RpY2UuY29tcGxldGVkTm9DaGFuZ2VzJzogJ0NsYXVkZSBDb2RlIGNvbXBsZXRhZG8gKHNpbiBjYW1iaW9zIGVuIGFyY2hpdm9zKScsXG4gICAgJ25vdGljZS5jaGFuZ2VzQXBwbGllZCc6ICdjYW1iaW9zIGFwbGljYWRvcyBhdXRvbVx1MDBFMXRpY2FtZW50ZScsXG4gICAgJ25vdGljZS5jaGFuZ2VzQXBwbGllZFN1Y2Nlc3MnOiAnY2FtYmlvcyBhcGxpY2Fkb3MgZXhpdG9zYW1lbnRlJyxcbiAgICAnbm90aWNlLmZhaWxlZEFwcGx5Q2hhbmdlcyc6ICdmYWxsXHUwMEYzIGFsIGFwbGljYXIgY2FtYmlvcycsXG4gICAgJ25vdGljZS5jaGFuZ2VzUmVqZWN0ZWQnOiAnQ2FtYmlvcyByZWNoYXphZG9zJyxcbiAgICAnbm90aWNlLmNhbmNlbGxlZCc6ICdDYW5jZWxhZG8nLFxuICAgICdub3RpY2UucGVybWlzc2lvblJlcXVlc3QnOiAnQ2xhdWRlIGVzdFx1MDBFMSBzb2xpY2l0YW5kbyBwZXJtaXNvIC0gcG9yIGZhdm9yIGFwcnVlYmEgbyBkZW5pZWdhJyxcbiAgICAnbm90aWNlLnBlcm1pc3Npb25EZW5pZWQnOiAnUGVybWlzbyBkZW5lZ2FkbyAtIENsYXVkZSBubyBwcm9jZWRlclx1MDBFMScsXG4gICAgJ25vdGljZS5ub0NoYW5nZXNUb0FwcGx5JzogJ25vIGhheSBjYW1iaW9zIHBhcmEgYXBsaWNhcicsXG4gICAgJ25vdGljZS5ub0FjdGl2ZUZpbGUnOiAnbm8gaGF5IGFyY2hpdm8gYWN0aXZvJyxcbiAgICAnbm90aWNlLmhpc3RvcnlSZXN0b3JlZCc6ICdFbGVtZW50byBkZWwgaGlzdG9yaWFsIHJlc3RhdXJhZG8nLFxuICAgICdub3RpY2UuaGlzdG9yeVJlc3RvcmVkV2l0aENoYW5nZXMnOiAnRWxlbWVudG8gZGVsIGhpc3RvcmlhbCByZXN0YXVyYWRvIGNvbiBjYW1iaW9zIHByb3B1ZXN0b3MnLFxuICAgICdub3RpY2UuaGlzdG9yeUNsZWFyZWQnOiAnSGlzdG9yaWFsIGxpbXBpYWRvJyxcblxuICAgIC8vIERpZmYgVmlld1xuICAgICdkaWZmLm9yaWdpbmFsJzogJ09yaWdpbmFsJyxcbiAgICAnZGlmZi5tb2RpZmllZCc6ICdNb2RpZmljYWRvJyxcblxuICAgIC8vIFJlc3VsdCBSZW5kZXJlclxuICAgICdyZXN1bHQuZGlyZWN0QW5zd2VyJzogJ1Jlc3B1ZXN0YSBkaXJlY3RhJyxcbiAgICAncmVzdWx0LmFkZGl0aW9uYWxDb250ZXh0JzogJ0NvbnRleHRvIGFkaWNpb25hbCcsXG4gICAgJ3Jlc3VsdC50b2tlbnMnOiAndG9rZW5zJyxcbiAgICAncmVzdWx0LnRva2Vuc0luJzogJ2VudHJhZGEnLFxuICAgICdyZXN1bHQudG9rZW5zT3V0JzogJ3NhbGlkYScsXG5cbiAgICAvLyBQcmV2aWV3IFN0YXRzXG4gICAgJ3ByZXZpZXcub3JpZ2luYWxMYWJlbCc6ICdPcmlnaW5hbDonLFxuICAgICdwcmV2aWV3Lm1vZGlmaWVkTGFiZWwnOiAnTW9kaWZpY2FkbzonLFxuICAgICdwcmV2aWV3LmNoYXJzTGFiZWwnOiAnY2FyYWN0ZXJlcycsXG5cbiAgICAvLyBNaXNjXG4gICAgJ21pc2Mubm9QZW5kaW5nUmVxdWVzdCc6ICdObyBzZSBlbmNvbnRyXHUwMEYzIHNvbGljaXR1ZCBwZW5kaWVudGUnLFxuICAgICdtaXNjLmxhbmd1YWdlQ2hhbmdlZCc6ICdJZGlvbWEgY2FtYmlhZG8uIEFsZ3Vub3MgZWxlbWVudG9zIGRlIGxhIGludGVyZmF6IHNlIGFjdHVhbGl6YXJcdTAwRTFuIGFsIHJlY2FyZ2FyLicsXG4gICAgJ21pc2MudGVzdEZhaWxlZCc6ICdQcnVlYmEgZGUgQ2xhdWRlIENvZGUgZmFsbGlkYScsXG5cbiAgICAvLyBTZXR0aW5nc1xuICAgICdzZXR0aW5ncy5hdXRvRGV0ZWN0UGF0aCc6ICdBdXRvLWRldGVjdGFyIHJ1dGEgZGUgQ2xhdWRlIENvZGUnLFxuICAgICdzZXR0aW5ncy5hdXRvRGV0ZWN0UGF0aERlc2MnOiAnRGV0ZWN0YXIgYXV0b21cdTAwRTF0aWNhbWVudGUgbGEgdWJpY2FjaVx1MDBGM24gZGVsIGVqZWN1dGFibGUgZGUgQ2xhdWRlIENvZGUnLFxuICAgICdzZXR0aW5ncy5leGVjdXRhYmxlUGF0aCc6ICdSdXRhIGRlbCBlamVjdXRhYmxlIGRlIENsYXVkZSBDb2RlJyxcbiAgICAnc2V0dGluZ3MuZXhlY3V0YWJsZVBhdGhEZXNjJzogJ1J1dGEgY29tcGxldGEgYWwgZWplY3V0YWJsZSBkZSBDbGF1ZGUgQ29kZSAoZWouLCAvdXNyL2xvY2FsL2Jpbi9jbGF1ZGUpJyxcbiAgICAnc2V0dGluZ3MudGVzdEluc3RhbGxhdGlvbic6ICdQcm9iYXIgaW5zdGFsYWNpXHUwMEYzbiBkZSBDbGF1ZGUgQ29kZScsXG4gICAgJ3NldHRpbmdzLnRlc3RJbnN0YWxsYXRpb25EZXNjJzogJ1ZlcmlmaWNhciBxdWUgQ2xhdWRlIENvZGUgc2VhIGFjY2VzaWJsZSB5IGZ1bmNpb25lJyxcbiAgICAnc2V0dGluZ3MudGVzdEJ1dHRvbic6ICdQcm9iYXInLFxuICAgICdzZXR0aW5ncy50ZXN0V29ya2luZyc6ICdcdTAwQTFmdW5jaW9uYW5kbyEnLFxuICAgICdzZXR0aW5ncy50ZXN0RmFpbGVkJzogJ2ZhbGxcdTAwRjMnLFxuICAgICdzZXR0aW5ncy5jdXN0b21Qcm9tcHQnOiAnUHJvbXB0IGRlIHNpc3RlbWEgcGVyc29uYWxpemFkbycsXG4gICAgJ3NldHRpbmdzLmN1c3RvbVByb21wdERlc2MnOiAnUHJvbXB0IGRlIHNpc3RlbWEgcGVyc29uYWxpemFkbyBvcGNpb25hbCBwYXJhIGFncmVnYXIgYSB0b2RhcyBsYXMgc29saWNpdHVkZXMnLFxuICAgICdzZXR0aW5ncy5jdXN0b21Qcm9tcHRQbGFjZWhvbGRlcic6ICdFc3RcdTAwRTFzIGF5dWRhbmRvIGEgZWRpdGFyIG5vdGFzIG1hcmtkb3duLi4uJyxcbiAgICAnc2V0dGluZ3MucHJlc2VydmVDdXJzb3InOiAnUHJlc2VydmFyIHBvc2ljaVx1MDBGM24gZGVsIGN1cnNvcicsXG4gICAgJ3NldHRpbmdzLnByZXNlcnZlQ3Vyc29yRGVzYyc6ICdJbnRlbnRhciBtYW50ZW5lciBsYSBwb3NpY2lcdTAwRjNuIGRlbCBjdXJzb3IgZGVzcHVcdTAwRTlzIGRlIGFwbGljYXIgY2FtYmlvcycsXG4gICAgJ3NldHRpbmdzLmF1dG9BY2NlcHRDaGFuZ2VzJzogJ0FjZXB0YXIgY2FtYmlvcyBhdXRvbVx1MDBFMXRpY2FtZW50ZScsXG4gICAgJ3NldHRpbmdzLmF1dG9BY2NlcHRDaGFuZ2VzRGVzYyc6ICdBcGxpY2FyIGNhbWJpb3MgYXV0b21cdTAwRTF0aWNhbWVudGUgc2luIG1vc3RyYXIgdmlzdGEgcHJldmlhIChcdTAwQTF1c2FyIGNvbiBwcmVjYXVjaVx1MDBGM24hKScsXG4gICAgJ3NldHRpbmdzLm1vZGVsJzogJ01vZGVsbycsXG4gICAgJ3NldHRpbmdzLm1vZGVsRGVzYyc6ICdTZWxlY2Npb25hIGVsIG1vZGVsbyBkZSBDbGF1ZGUgYSB1c2FyOiBTb25uZXQgKGVxdWlsaWJyYWRvKSwgT3B1cyAobVx1MDBFMXMgY2FwYXopLCBvIEhhaWt1IChtXHUwMEUxcyByXHUwMEUxcGlkbykuIERlamFyIHZhY1x1MDBFRG8gcGFyYSB1c2FyIGVsIG1vZGVsbyBkZSBzdWJhZ2VudGUgcHJlZGV0ZXJtaW5hZG8uJyxcbiAgICAnc2V0dGluZ3MubW9kZWxEZWZhdWx0JzogJ1ByZWRldGVybWluYWRvIChtb2RlbG8gc3ViYWdlbnRlKScsXG4gICAgJ3NldHRpbmdzLm1vZGVsU29ubmV0JzogJ1Nvbm5ldCAoZXF1aWxpYnJhZG8pJyxcbiAgICAnc2V0dGluZ3MubW9kZWxPcHVzJzogJ09wdXMgKG1cdTAwRTFzIGNhcGF6KScsXG4gICAgJ3NldHRpbmdzLm1vZGVsSGFpa3UnOiAnSGFpa3UgKG1cdTAwRTFzIHJcdTAwRTFwaWRvKScsXG4gICAgJ3NldHRpbmdzLnZhdWx0QWNjZXNzJzogJ1Blcm1pdGlyIGFjY2VzbyBhIHRvZGEgbGEgYlx1MDBGM3ZlZGEnLFxuICAgICdzZXR0aW5ncy52YXVsdEFjY2Vzc0Rlc2MnOiAnUGVybWl0aXIgYSBDbGF1ZGUgbGVlci9idXNjYXIgb3Ryb3MgYXJjaGl2b3MgZW4gdHUgYlx1MDBGM3ZlZGEgKG5vIHNvbG8gbGEgbm90YSBhY3R1YWwpJyxcbiAgICAnc2V0dGluZ3MucGVybWlzc2lvbmxlc3NNb2RlJzogJ0hhYmlsaXRhciBtb2RvIHNpbiBwZXJtaXNvcycsXG4gICAgJ3NldHRpbmdzLnBlcm1pc3Npb25sZXNzTW9kZURlc2MnOiAnUGVybWl0aXIgYSBDbGF1ZGUgZWplY3V0YXIgYWNjaW9uZXMgc2luIHBlZGlyIHBlcm1pc28gY2FkYSB2ZXogKFx1MDBBMXVzYXIgY29uIHByZWNhdWNpXHUwMEYzbiEgQ2xhdWRlIHRlbmRyXHUwMEUxIGNvbnRyb2wgdG90YWwpJyxcbiAgICAnc2V0dGluZ3MudGltZW91dCc6ICdUaWVtcG8gZGUgZXNwZXJhIChzZWd1bmRvcyknLFxuICAgICdzZXR0aW5ncy50aW1lb3V0RGVzYyc6ICdUaWVtcG8gbVx1MDBFMXhpbW8gZGUgZXNwZXJhIHBhcmEgbGEgcmVzcHVlc3RhIGRlIENsYXVkZSBDb2RlICgwID0gc2luIGxcdTAwRURtaXRlKScsXG4gICAgJ3NldHRpbmdzLmN1c3RvbUFwaUNvbmZpZyc6ICdDb25maWd1cmFjaVx1MDBGM24gZGUgQVBJIHBlcnNvbmFsaXphZGEnLFxuICAgICdzZXR0aW5ncy5jdXN0b21BcGlDb25maWdEZXNjJzogJ0NvbmZpZ3VyYXIgZW5kcG9pbnRzIGRlIEFQSSBwZXJzb25hbGl6YWRvcyBwYXJhIHJlZ2lvbmVzIGRvbmRlIENsYXVkZSBubyBlc3RcdTAwRTEgZGlzcG9uaWJsZSBkaXJlY3RhbWVudGUuIERlamFyIHZhY1x1MDBFRG8gcGFyYSB1c2FyIGxhIGNvbmZpZ3VyYWNpXHUwMEYzbiBwcmVkZXRlcm1pbmFkYS4nLFxuICAgICdzZXR0aW5ncy5hcGlCYXNlVXJsJzogJ1VSTCBiYXNlIGRlIEFQSScsXG4gICAgJ3NldHRpbmdzLmFwaUJhc2VVcmxEZXNjJzogJ1VSTCBkZWwgZW5kcG9pbnQgZGUgQVBJIHBlcnNvbmFsaXphZG8gKGVqLiwgaHR0cHM6Ly9hcGkua2ltaS5jb20vY29kaW5nLyknLFxuICAgICdzZXR0aW5ncy5hcGlBdXRoVG9rZW4nOiAnVG9rZW4gZGUgYXV0ZW50aWNhY2lcdTAwRjNuIGRlIEFQSScsXG4gICAgJ3NldHRpbmdzLmFwaUF1dGhUb2tlbkRlc2MnOiAnVG9rZW4gZGUgYXV0ZW50aWNhY2lcdTAwRjNuIHBlcnNvbmFsaXphZG8gcGFyYSBlbCBlbmRwb2ludCBkZSBBUEknLFxuICAgICdzZXR0aW5ncy5hcGlBdXRoVG9rZW5QbGFjZWhvbGRlcic6ICdJbmdyZXNhIHR1IHRva2VuIGRlIEFQSScsXG4gICAgJ3NldHRpbmdzLmN1c3RvbU1vZGVsJzogJ01vZGVsbyBwZXJzb25hbGl6YWRvJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tTW9kZWxEZXNjJzogJ05vbWJyZSBkZWwgbW9kZWxvIHBlcnNvbmFsaXphZG8gYSB1c2FyIChlai4sIGtpbWktZm9yLWNvZGluZykuIFNvYnJlc2NyaWJlIGVsIHNlbGVjdG9yIGRlIG1vZGVsbyBhbnRlcmlvci4nLFxuICAgICdzZXR0aW5ncy5jdXN0b21TbWFsbE1vZGVsJzogJ01vZGVsbyBwZXF1ZVx1MDBGMW8vclx1MDBFMXBpZG8gcGVyc29uYWxpemFkbycsXG4gICAgJ3NldHRpbmdzLmN1c3RvbVNtYWxsTW9kZWxEZXNjJzogJ05vbWJyZSBkZWwgbW9kZWxvIHBlcnNvbmFsaXphZG8gcGFyYSBvcGVyYWNpb25lcyByXHUwMEUxcGlkYXMgKGVqLiwga2ltaS1mb3ItY29kaW5nKScsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ0lkaW9tYScsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlRGVzYyc6ICdTZWxlY2Npb25hciBpZGlvbWEgZGUgbGEgaW50ZXJmYXonLFxufTsiLCAiLyoqXG4gKiBHZXJtYW4gdHJhbnNsYXRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCBkZSA9IHtcbiAgICAvLyBIZWFkZXJcbiAgICAnaGVhZGVyLnRpdGxlJzogJ0NsYXVkZSBDb2RlIEFzc2lzdGVudCcsXG4gICAgJ2hlYWRlci5ub05vdGVTZWxlY3RlZCc6ICdrZWluZSBOb3RpeiBhdXNnZXdcdTAwRTRobHQnLFxuXG4gICAgLy8gSW5wdXQgU2VjdGlvblxuICAgICdpbnB1dC5sYWJlbCc6ICdEZWluZSBBbndlaXN1bmdlbjonLFxuICAgICdpbnB1dC5wbGFjZWhvbGRlcic6ICd6LkIuIFwiRlx1MDBGQ2dlIG1laHIgQmVpc3BpZWxlIHp1IGRpZXNlbSBBYnNjaG5pdHQgaGluenVcIiBvZGVyIFwiUmVvcmdhbmlzaWVyZSBtaXQgYmVzc2VyZW4gXHUwMERDYmVyc2NocmlmdGVuXCIgKEVudGVyIHp1bSBTZW5kZW4sIFN0cmcrRW50ZXIgZlx1MDBGQ3IgbmV1ZSBaZWlsZSknLFxuICAgICdpbnB1dC5jb252ZXJzYXRpb25hbE1vZGUnOiAnS29udmVyc2F0aW9uc21vZHVzIChrZWluZSBEYXRlaVx1MDBFNG5kZXJ1bmdlbiknLFxuICAgICdpbnB1dC5jb252ZXJzYXRpb25hbE1vZGVUb29sdGlwJzogJ01pdCBDbGF1ZGUgY2hhdHRlbiwgb2huZSBEYXRlaWVuIHp1IFx1MDBFNG5kZXJuJyxcbiAgICAnaW5wdXQuc2VsZWN0ZWRUZXh0T25seSc6ICdOdXIgbWFya2llcnRlbiBUZXh0IGJlYXJiZWl0ZW4nLFxuICAgICdpbnB1dC5hdXRvQWNjZXB0JzogJ1x1MDBDNG5kZXJ1bmdlbiBhdXRvbWF0aXNjaCBcdTAwRkNiZXJuZWhtZW4nLFxuICAgICdpbnB1dC5tb2RlbExhYmVsJzogJ01vZGVsbDonLFxuICAgICdpbnB1dC5tb2RlbERlZmF1bHQnOiAnU3RhbmRhcmQnLFxuICAgICdpbnB1dC5ydW5CdXR0b24nOiAnQ2xhdWRlIENvZGUgYXVzZlx1MDBGQ2hyZW4nLFxuICAgICdpbnB1dC5ydW5uaW5nQnV0dG9uJzogJ0xcdTAwRTR1ZnQuLi4nLFxuICAgICdpbnB1dC5jYW5jZWxCdXR0b24nOiAnQWJicmVjaGVuJyxcblxuICAgIC8vIFJlc3VsdCBTZWN0aW9uXG4gICAgJ3Jlc3VsdC50aXRsZSc6ICdFcmdlYm5pcycsXG5cbiAgICAvLyBPdXRwdXQgU2VjdGlvblxuICAgICdvdXRwdXQudGl0bGUnOiAnQXVzZ2FiZScsXG5cbiAgICAvLyBQcmV2aWV3IFNlY3Rpb25cbiAgICAncHJldmlldy50aXRsZSc6ICdWb3JzY2hhdScsXG4gICAgJ3ByZXZpZXcudGFiUmF3JzogJ1JvaCcsXG4gICAgJ3ByZXZpZXcudGFiRGlmZic6ICdEaWZmJyxcbiAgICAncHJldmlldy50YWJSZW5kZXJlZCc6ICdHZXJlbmRlcnQnLFxuICAgICdwcmV2aWV3Lm9yaWdpbmFsQ2hhcnMnOiAnT3JpZ2luYWw6JyxcbiAgICAncHJldmlldy5tb2RpZmllZENoYXJzJzogJ0dlXHUwMEU0bmRlcnQ6JyxcbiAgICAncHJldmlldy5jaGFycyc6ICdaZWljaGVuJyxcbiAgICAncHJldmlldy5hcHBseUJ1dHRvbic6ICdcdTAwQzRuZGVydW5nZW4gXHUwMEZDYmVybmVobWVuJyxcbiAgICAncHJldmlldy5yZWplY3RCdXR0b24nOiAnQWJsZWhuZW4nLFxuXG4gICAgLy8gSGlzdG9yeSBTZWN0aW9uXG4gICAgJ2hpc3RvcnkudGl0bGUnOiAnVmVybGF1ZicsXG4gICAgJ2hpc3RvcnkuY2xlYXJCdXR0b24nOiAnTFx1MDBGNnNjaGVuJyxcblxuICAgIC8vIEFnZW50IFNlY3Rpb25cbiAgICAnYWdlbnQucGxhblRpdGxlJzogJ1BsYW4nLFxuICAgICdhZ2VudC5hY3Rpdml0eVRpdGxlJzogJ0FrdGl2aXRcdTAwRTR0JyxcbiAgICAnYWdlbnQubm9QbGFuJzogJ05vY2gga2VpbiBQbGFuIGVyc3RlbGx0JyxcblxuICAgIC8vIFRvZG8gU3RhdHVzXG4gICAgJ3RvZG8ucGVuZGluZyc6ICdBdXNzdGVoZW5kJyxcbiAgICAndG9kby5pblByb2dyZXNzJzogJ0luIEJlYXJiZWl0dW5nJyxcbiAgICAndG9kby5jb21wbGV0ZWQnOiAnQWJnZXNjaGxvc3NlbicsXG5cbiAgICAvLyBJbnRlcmFjdGl2ZSBQcm9tcHRcbiAgICAnaW50ZXJhY3RpdmUuaGVhZGVyJzogJ0NsYXVkZSBiaXR0ZXQgdW0gQmVzdFx1MDBFNHRpZ3VuZycsXG4gICAgJ2ludGVyYWN0aXZlLnllc0J1dHRvbic6ICdKYScsXG4gICAgJ2ludGVyYWN0aXZlLm5vQnV0dG9uJzogJ05laW4nLFxuICAgICdpbnRlcmFjdGl2ZS5jdXN0b21QbGFjZWhvbGRlcic6ICdPZGVyIGVpbmUgZWlnZW5lIEFudHdvcnQgZWluZ2ViZW4uLi4nLFxuXG4gICAgLy8gUGVybWlzc2lvbiBBcHByb3ZhbFxuICAgICdwZXJtaXNzaW9uLmhlYWRlcic6ICdCZXJlY2h0aWd1bmcgZXJmb3JkZXJsaWNoJyxcbiAgICAncGVybWlzc2lvbi5tZXNzYWdlJzogJ0NsYXVkZSBiaXR0ZXQgdW0gRXJsYXVibmlzLCBBa3Rpb25lbiBhdXN6dWZcdTAwRkNocmVuLicsXG4gICAgJ3Blcm1pc3Npb24uYXBwcm92ZUJ1dHRvbic6ICdHZW5laG1pZ2VuICYgZm9ydGZhaHJlbicsXG4gICAgJ3Blcm1pc3Npb24uZGVueUJ1dHRvbic6ICdBYmxlaG5lbicsXG5cbiAgICAvLyBTdGF0dXMgTWVzc2FnZXNcbiAgICAnc3RhdHVzLnByb2Nlc3NpbmcnOiAnQ2xhdWRlIHZlcmFyYmVpdGV0JyxcbiAgICAnc3RhdHVzLmF1dG9BcHBseWluZyc6ICdcdTAwQzRuZGVydW5nZW4gd2VyZGVuIGF1dG9tYXRpc2NoIFx1MDBGQ2Jlcm5vbW1lbi4uLicsXG4gICAgJ3N0YXR1cy5ydW5uaW5nQXV0aG9yaXplZCc6ICdGXHUwMEZDaHJlIGF1dG9yaXNpZXJ0ZSBBdWZnYWJlbiBhdXMnLFxuICAgICdzdGF0dXMucnVubmluZ0luQmFja2dyb3VuZCc6ICdMXHUwMEU0dWZ0IGltIEhpbnRlcmdydW5kLi4uJyxcbiAgICAnc3RhdHVzLmZhaWxlZCc6ICdGZWhsZ2VzY2hsYWdlbiAtIHNpZWhlIEZlaGxlciB1bnRlbicsXG5cbiAgICAvLyBOb3RpZmljYXRpb25zXG4gICAgJ25vdGljZS5hbHJlYWR5UHJvY2Vzc2luZyc6ICdFaW5lIEFuZnJhZ2Ugd2lyZCBiZXJlaXRzIHZlcmFyYmVpdGV0LiBCaXR0ZSB3YXJ0ZW4uJyxcbiAgICAnbm90aWNlLmVudGVyUHJvbXB0JzogJ0JpdHRlIGdpYiBlaW5lIEFud2Vpc3VuZyBlaW4nLFxuICAgICdub3RpY2Uubm9BY3RpdmVOb3RlJzogJ0tlaW5lIGFrdGl2ZSBOb3RpeiBnZWZ1bmRlbiwgYml0dGUgXHUwMEY2ZmZuZSB6dWVyc3QgZWluZSBNYXJrZG93bi1Ob3RpeicsXG4gICAgJ25vdGljZS5ub0VkaXRvcic6ICdLZWluIE1hcmtkb3duLUVkaXRvciBnZWZ1bmRlbiwgYml0dGUgc3RlbGxlIHNpY2hlciwgZGFzcyBlaW5lIE5vdGl6IGdlXHUwMEY2ZmZuZXQgaXN0JyxcbiAgICAnbm90aWNlLm5vVmF1bHRQYXRoJzogJ1ZhdWx0LVBmYWQga29ubnRlIG5pY2h0IGVybWl0dGVsdCB3ZXJkZW4nLFxuICAgICdub3RpY2UuY29tcGxldGVkJzogJ0NsYXVkZSBDb2RlIGFiZ2VzY2hsb3NzZW4nLFxuICAgICdub3RpY2UuY29tcGxldGVkTm9DaGFuZ2VzJzogJ0NsYXVkZSBDb2RlIGFiZ2VzY2hsb3NzZW4gKGtlaW5lIERhdGVpXHUwMEU0bmRlcnVuZ2VuKScsXG4gICAgJ25vdGljZS5jaGFuZ2VzQXBwbGllZCc6ICdcdTAwQzRuZGVydW5nZW4gYXV0b21hdGlzY2ggXHUwMEZDYmVybm9tbWVuJyxcbiAgICAnbm90aWNlLmNoYW5nZXNBcHBsaWVkU3VjY2Vzcyc6ICdcdTAwQzRuZGVydW5nZW4gZXJmb2xncmVpY2ggXHUwMEZDYmVybm9tbWVuJyxcbiAgICAnbm90aWNlLmZhaWxlZEFwcGx5Q2hhbmdlcyc6ICdcdTAwQzRuZGVydW5nZW4ga29ubnRlbiBuaWNodCBcdTAwRkNiZXJub21tZW4gd2VyZGVuJyxcbiAgICAnbm90aWNlLmNoYW5nZXNSZWplY3RlZCc6ICdcdTAwQzRuZGVydW5nZW4gYWJnZWxlaG50JyxcbiAgICAnbm90aWNlLmNhbmNlbGxlZCc6ICdBYmdlYnJvY2hlbicsXG4gICAgJ25vdGljZS5wZXJtaXNzaW9uUmVxdWVzdCc6ICdDbGF1ZGUgYml0dGV0IHVtIEJlcmVjaHRpZ3VuZyAtIGJpdHRlIGdlbmVobWlnZW4gb2RlciBhYmxlaG5lbicsXG4gICAgJ25vdGljZS5wZXJtaXNzaW9uRGVuaWVkJzogJ0JlcmVjaHRpZ3VuZyB2ZXJ3ZWlnZXJ0IC0gQ2xhdWRlIHdpcmQgbmljaHQgZm9ydGZhaHJlbicsXG4gICAgJ25vdGljZS5ub0NoYW5nZXNUb0FwcGx5JzogJ0tlaW5lIFx1MDBDNG5kZXJ1bmdlbiB6dW0gXHUwMERDYmVybmVobWVuJyxcbiAgICAnbm90aWNlLm5vQWN0aXZlRmlsZSc6ICdLZWluZSBha3RpdmUgRGF0ZWknLFxuICAgICdub3RpY2UuaGlzdG9yeVJlc3RvcmVkJzogJ1ZlcmxhdWZzZWludHJhZyB3aWVkZXJoZXJnZXN0ZWxsdCcsXG4gICAgJ25vdGljZS5oaXN0b3J5UmVzdG9yZWRXaXRoQ2hhbmdlcyc6ICdWZXJsYXVmc2VpbnRyYWcgbWl0IHZvcmdlc2NobGFnZW5lbiBcdTAwQzRuZGVydW5nZW4gd2llZGVyaGVyZ2VzdGVsbHQnLFxuICAgICdub3RpY2UuaGlzdG9yeUNsZWFyZWQnOiAnVmVybGF1ZiBnZWxcdTAwRjZzY2h0JyxcblxuICAgIC8vIERpZmYgVmlld1xuICAgICdkaWZmLm9yaWdpbmFsJzogJ09yaWdpbmFsJyxcbiAgICAnZGlmZi5tb2RpZmllZCc6ICdHZVx1MDBFNG5kZXJ0JyxcblxuICAgIC8vIFJlc3VsdCBSZW5kZXJlclxuICAgICdyZXN1bHQuZGlyZWN0QW5zd2VyJzogJ0RpcmVrdGUgQW50d29ydCcsXG4gICAgJ3Jlc3VsdC5hZGRpdGlvbmFsQ29udGV4dCc6ICdadXNcdTAwRTR0emxpY2hlciBLb250ZXh0JyxcbiAgICAncmVzdWx0LnRva2Vucyc6ICdUb2tlbnMnLFxuICAgICdyZXN1bHQudG9rZW5zSW4nOiAnRWluZ2FiZScsXG4gICAgJ3Jlc3VsdC50b2tlbnNPdXQnOiAnQXVzZ2FiZScsXG5cbiAgICAvLyBQcmV2aWV3IFN0YXRzXG4gICAgJ3ByZXZpZXcub3JpZ2luYWxMYWJlbCc6ICdPcmlnaW5hbDonLFxuICAgICdwcmV2aWV3Lm1vZGlmaWVkTGFiZWwnOiAnR2VcdTAwRTRuZGVydDonLFxuICAgICdwcmV2aWV3LmNoYXJzTGFiZWwnOiAnWmVpY2hlbicsXG5cbiAgICAvLyBNaXNjXG4gICAgJ21pc2Mubm9QZW5kaW5nUmVxdWVzdCc6ICdLZWluZSBhdXNzdGVoZW5kZSBBbmZyYWdlIGdlZnVuZGVuJyxcbiAgICAnbWlzYy5sYW5ndWFnZUNoYW5nZWQnOiAnU3ByYWNoZSBnZVx1MDBFNG5kZXJ0LiBFaW5pZ2UgVUktRWxlbWVudGUgd2VyZGVuIG5hY2ggZGVtIE5ldWxhZGVuIGFrdHVhbGlzaWVydC4nLFxuICAgICdtaXNjLnRlc3RGYWlsZWQnOiAnQ2xhdWRlIENvZGUgVGVzdCBmZWhsZ2VzY2hsYWdlbicsXG5cbiAgICAvLyBTZXR0aW5nc1xuICAgICdzZXR0aW5ncy5hdXRvRGV0ZWN0UGF0aCc6ICdDbGF1ZGUgQ29kZSBQZmFkIGF1dG9tYXRpc2NoIGVya2VubmVuJyxcbiAgICAnc2V0dGluZ3MuYXV0b0RldGVjdFBhdGhEZXNjJzogJ0RlbiBTcGVpY2hlcm9ydCBkZXIgQ2xhdWRlIENvZGUgQW53ZW5kdW5nIGF1dG9tYXRpc2NoIGVya2VubmVuJyxcbiAgICAnc2V0dGluZ3MuZXhlY3V0YWJsZVBhdGgnOiAnQ2xhdWRlIENvZGUgQW53ZW5kdW5nc3BmYWQnLFxuICAgICdzZXR0aW5ncy5leGVjdXRhYmxlUGF0aERlc2MnOiAnVm9sbHN0XHUwMEU0bmRpZ2VyIFBmYWQgenVyIENsYXVkZSBDb2RlIEFud2VuZHVuZyAoei5CLiAvdXNyL2xvY2FsL2Jpbi9jbGF1ZGUpJyxcbiAgICAnc2V0dGluZ3MudGVzdEluc3RhbGxhdGlvbic6ICdDbGF1ZGUgQ29kZSBJbnN0YWxsYXRpb24gdGVzdGVuJyxcbiAgICAnc2V0dGluZ3MudGVzdEluc3RhbGxhdGlvbkRlc2MnOiAnXHUwMERDYmVycHJcdTAwRkNmZW4sIG9iIENsYXVkZSBDb2RlIGVycmVpY2hiYXIgaXN0IHVuZCBmdW5rdGlvbmllcnQnLFxuICAgICdzZXR0aW5ncy50ZXN0QnV0dG9uJzogJ1Rlc3RlbicsXG4gICAgJ3NldHRpbmdzLnRlc3RXb3JraW5nJzogJ0Z1bmt0aW9uaWVydCEnLFxuICAgICdzZXR0aW5ncy50ZXN0RmFpbGVkJzogJ0ZlaGxnZXNjaGxhZ2VuJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tUHJvbXB0JzogJ0JlbnV0emVyZGVmaW5pZXJ0ZSBTeXN0ZW1hbndlaXN1bmcnLFxuICAgICdzZXR0aW5ncy5jdXN0b21Qcm9tcHREZXNjJzogJ09wdGlvbmFsZSBiZW51dHplcmRlZmluaWVydGUgU3lzdGVtYW53ZWlzdW5nLCBkaWUgYWxsZW4gQW5mcmFnZW4gdm9yYW5nZXN0ZWxsdCB3aXJkJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tUHJvbXB0UGxhY2Vob2xkZXInOiAnRHUgaGlsZnN0IGJlaW0gQmVhcmJlaXRlbiB2b24gTWFya2Rvd24tTm90aXplbi4uLicsXG4gICAgJ3NldHRpbmdzLnByZXNlcnZlQ3Vyc29yJzogJ0N1cnNvcnBvc2l0aW9uIGJlaWJlaGFsdGVuJyxcbiAgICAnc2V0dGluZ3MucHJlc2VydmVDdXJzb3JEZXNjJzogJ1ZlcnN1Y2hlbiwgZGllIEN1cnNvcnBvc2l0aW9uIG5hY2ggZGVtIFx1MDBEQ2Jlcm5laG1lbiB2b24gXHUwMEM0bmRlcnVuZ2VuIGJlaXp1YmVoYWx0ZW4nLFxuICAgICdzZXR0aW5ncy5hdXRvQWNjZXB0Q2hhbmdlcyc6ICdcdTAwQzRuZGVydW5nZW4gYXV0b21hdGlzY2ggXHUwMEZDYmVybmVobWVuJyxcbiAgICAnc2V0dGluZ3MuYXV0b0FjY2VwdENoYW5nZXNEZXNjJzogJ1x1MDBDNG5kZXJ1bmdlbiBhdXRvbWF0aXNjaCBcdTAwRkNiZXJuZWhtZW4sIG9obmUgVm9yc2NoYXUgYW56dXplaWdlbiAobWl0IFZvcnNpY2h0IHZlcndlbmRlbiEpJyxcbiAgICAnc2V0dGluZ3MubW9kZWwnOiAnTW9kZWxsJyxcbiAgICAnc2V0dGluZ3MubW9kZWxEZXNjJzogJ1dcdTAwRTRobGUgZGFzIENsYXVkZS1Nb2RlbGw6IFNvbm5ldCAoYXVzZ2V3b2dlbiksIE9wdXMgKGxlaXN0dW5nc2ZcdTAwRTRoaWdzdGUpLCBvZGVyIEhhaWt1IChzY2huZWxsc3RlKS4gTGVlciBsYXNzZW4gZlx1MDBGQ3IgU3RhbmRhcmQtU3ViYWdlbnQtTW9kZWxsLicsXG4gICAgJ3NldHRpbmdzLm1vZGVsRGVmYXVsdCc6ICdTdGFuZGFyZCAoU3ViYWdlbnQtTW9kZWxsKScsXG4gICAgJ3NldHRpbmdzLm1vZGVsU29ubmV0JzogJ1Nvbm5ldCAoYXVzZ2V3b2dlbiknLFxuICAgICdzZXR0aW5ncy5tb2RlbE9wdXMnOiAnT3B1cyAobGVpc3R1bmdzZlx1MDBFNGhpZ3N0ZSknLFxuICAgICdzZXR0aW5ncy5tb2RlbEhhaWt1JzogJ0hhaWt1IChzY2huZWxsc3RlKScsXG4gICAgJ3NldHRpbmdzLnZhdWx0QWNjZXNzJzogJ1ZhdWx0LXdlaXRlbiBadWdyaWZmIGVybGF1YmVuJyxcbiAgICAnc2V0dGluZ3MudmF1bHRBY2Nlc3NEZXNjJzogJ0NsYXVkZSBlcmxhdWJlbiwgYW5kZXJlIERhdGVpZW4gaW0gVmF1bHQgenUgbGVzZW4vZHVyY2hzdWNoZW4gKG5pY2h0IG51ciBkaWUgYWt0dWVsbGUgTm90aXopJyxcbiAgICAnc2V0dGluZ3MucGVybWlzc2lvbmxlc3NNb2RlJzogJ0JlcmVjaHRpZ3VuZ3NmcmVpZW4gTW9kdXMgYWt0aXZpZXJlbicsXG4gICAgJ3NldHRpbmdzLnBlcm1pc3Npb25sZXNzTW9kZURlc2MnOiAnQ2xhdWRlIGVybGF1YmVuLCBBa3Rpb25lbiBhdXN6dWZcdTAwRkNocmVuLCBvaG5lIGplZGVzIE1hbCB1bSBFcmxhdWJuaXMgenUgZnJhZ2VuIChtaXQgVm9yc2ljaHQgdmVyd2VuZGVuISBDbGF1ZGUgaGF0IHZvbGxlIEtvbnRyb2xsZSknLFxuICAgICdzZXR0aW5ncy50aW1lb3V0JzogJ1plaXRsaW1pdCAoU2VrdW5kZW4pJyxcbiAgICAnc2V0dGluZ3MudGltZW91dERlc2MnOiAnTWF4aW1hbGUgV2FydGV6ZWl0IGF1ZiBDbGF1ZGUgQ29kZSBBbnR3b3J0ICgwID0ga2VpbiBaZWl0bGltaXQpJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tQXBpQ29uZmlnJzogJ0JlbnV0emVyZGVmaW5pZXJ0ZSBBUEktS29uZmlndXJhdGlvbicsXG4gICAgJ3NldHRpbmdzLmN1c3RvbUFwaUNvbmZpZ0Rlc2MnOiAnQmVudXR6ZXJkZWZpbmllcnRlIEFQSS1FbmRwdW5rdGUgZlx1MDBGQ3IgUmVnaW9uZW4ga29uZmlndXJpZXJlbiwgaW4gZGVuZW4gQ2xhdWRlIG5pY2h0IGRpcmVrdCB2ZXJmXHUwMEZDZ2JhciBpc3QuIExlZXIgbGFzc2VuIGZcdTAwRkNyIFN0YW5kYXJkZWluc3RlbGx1bmdlbi4nLFxuICAgICdzZXR0aW5ncy5hcGlCYXNlVXJsJzogJ0FQSSBCYXNpcy1VUkwnLFxuICAgICdzZXR0aW5ncy5hcGlCYXNlVXJsRGVzYyc6ICdCZW51dHplcmRlZmluaWVydGUgQVBJLUVuZHB1bmt0LVVSTCAoei5CLiBodHRwczovL2FwaS5raW1pLmNvbS9jb2RpbmcvKScsXG4gICAgJ3NldHRpbmdzLmFwaUF1dGhUb2tlbic6ICdBUEkgQXV0aC1Ub2tlbicsXG4gICAgJ3NldHRpbmdzLmFwaUF1dGhUb2tlbkRlc2MnOiAnQmVudXR6ZXJkZWZpbmllcnRlcyBBdXRoZW50aWZpemllcnVuZ3N0b2tlbiBmXHUwMEZDciBkZW4gQVBJLUVuZHB1bmt0JyxcbiAgICAnc2V0dGluZ3MuYXBpQXV0aFRva2VuUGxhY2Vob2xkZXInOiAnR2liIGRlaW4gQVBJLVRva2VuIGVpbicsXG4gICAgJ3NldHRpbmdzLmN1c3RvbU1vZGVsJzogJ0JlbnV0emVyZGVmaW5pZXJ0ZXMgTW9kZWxsJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tTW9kZWxEZXNjJzogJ0JlbnV0emVyZGVmaW5pZXJ0ZXIgTW9kZWxsbmFtZSAoei5CLiBraW1pLWZvci1jb2RpbmcpLiBcdTAwRENiZXJzY2hyZWlidCBkaWUgTW9kZWxsYXVzd2FobCBvYmVuLicsXG4gICAgJ3NldHRpbmdzLmN1c3RvbVNtYWxsTW9kZWwnOiAnQmVudXR6ZXJkZWZpbmllcnRlcyBrbGVpbmVzL3NjaG5lbGxlcyBNb2RlbGwnLFxuICAgICdzZXR0aW5ncy5jdXN0b21TbWFsbE1vZGVsRGVzYyc6ICdCZW51dHplcmRlZmluaWVydGVyIE1vZGVsbG5hbWUgZlx1MDBGQ3Igc2NobmVsbGUgT3BlcmF0aW9uZW4gKHouQi4ga2ltaS1mb3ItY29kaW5nKScsXG4gICAgJ3NldHRpbmdzLmxhbmd1YWdlJzogJ1NwcmFjaGUnLFxuICAgICdzZXR0aW5ncy5sYW5ndWFnZURlc2MnOiAnT2JlcmZsXHUwMEU0Y2hlbnNwcmFjaGUgYXVzd1x1MDBFNGhsZW4nLFxufTsiLCAiLyoqXG4gKiBQb3J0dWd1ZXNlIHRyYW5zbGF0aW9uc1xuICovXG5leHBvcnQgY29uc3QgcHQgPSB7XG4gICAgLy8gSGVhZGVyXG4gICAgJ2hlYWRlci50aXRsZSc6ICdBc3Npc3RlbnRlIENsYXVkZSBDb2RlJyxcbiAgICAnaGVhZGVyLm5vTm90ZVNlbGVjdGVkJzogJ25lbmh1bWEgbm90YSBzZWxlY2lvbmFkYScsXG5cbiAgICAvLyBJbnB1dCBTZWN0aW9uXG4gICAgJ2lucHV0LmxhYmVsJzogJ1N1YXMgaW5zdHJ1XHUwMEU3XHUwMEY1ZXM6JyxcbiAgICAnaW5wdXQucGxhY2Vob2xkZXInOiAnZXguLCBcIkFkaWNpb25lIG1haXMgZXhlbXBsb3MgYSBlc3RhIHNlXHUwMEU3XHUwMEUzb1wiIG91IFwiUmVvcmdhbml6ZSBjb20gbWVsaG9yZXMgdFx1MDBFRHR1bG9zXCIgKEVudGVyIHBhcmEgZW52aWFyLCBDdHJsK0VudGVyIHBhcmEgbm92YSBsaW5oYSknLFxuICAgICdpbnB1dC5jb252ZXJzYXRpb25hbE1vZGUnOiAnbW9kbyBjb252ZXJzYWNpb25hbCAoc2VtIGVkaVx1MDBFN1x1MDBFM28gZGUgYXJxdWl2b3MpJyxcbiAgICAnaW5wdXQuY29udmVyc2F0aW9uYWxNb2RlVG9vbHRpcCc6ICdDb252ZXJzZSBjb20gQ2xhdWRlIHNlbSBtb2RpZmljYXIgYXJxdWl2b3MnLFxuICAgICdpbnB1dC5zZWxlY3RlZFRleHRPbmx5JzogJ0VkaXRhciBhcGVuYXMgdGV4dG8gc2VsZWNpb25hZG8nLFxuICAgICdpbnB1dC5hdXRvQWNjZXB0JzogJ0FjZWl0YXIgYWx0ZXJhXHUwMEU3XHUwMEY1ZXMgYXV0b21hdGljYW1lbnRlJyxcbiAgICAnaW5wdXQubW9kZWxMYWJlbCc6ICdNb2RlbG86JyxcbiAgICAnaW5wdXQubW9kZWxEZWZhdWx0JzogJ1BhZHJcdTAwRTNvJyxcbiAgICAnaW5wdXQucnVuQnV0dG9uJzogJ0V4ZWN1dGFyIENsYXVkZSBDb2RlJyxcbiAgICAnaW5wdXQucnVubmluZ0J1dHRvbic6ICdFeGVjdXRhbmRvLi4uJyxcbiAgICAnaW5wdXQuY2FuY2VsQnV0dG9uJzogJ0NhbmNlbGFyJyxcblxuICAgIC8vIFJlc3VsdCBTZWN0aW9uXG4gICAgJ3Jlc3VsdC50aXRsZSc6ICdSZXN1bHRhZG8nLFxuXG4gICAgLy8gT3V0cHV0IFNlY3Rpb25cbiAgICAnb3V0cHV0LnRpdGxlJzogJ1NhXHUwMEVEZGEnLFxuXG4gICAgLy8gUHJldmlldyBTZWN0aW9uXG4gICAgJ3ByZXZpZXcudGl0bGUnOiAnVmlzdWFsaXphXHUwMEU3XHUwMEUzbycsXG4gICAgJ3ByZXZpZXcudGFiUmF3JzogJ0JydXRvJyxcbiAgICAncHJldmlldy50YWJEaWZmJzogJ0RpZmVyZW5cdTAwRTdhcycsXG4gICAgJ3ByZXZpZXcudGFiUmVuZGVyZWQnOiAnUmVuZGVyaXphZG8nLFxuICAgICdwcmV2aWV3Lm9yaWdpbmFsQ2hhcnMnOiAnT3JpZ2luYWw6JyxcbiAgICAncHJldmlldy5tb2RpZmllZENoYXJzJzogJ01vZGlmaWNhZG86JyxcbiAgICAncHJldmlldy5jaGFycyc6ICdjYXJhY3RlcmVzJyxcbiAgICAncHJldmlldy5hcHBseUJ1dHRvbic6ICdhcGxpY2FyIGFsdGVyYVx1MDBFN1x1MDBGNWVzJyxcbiAgICAncHJldmlldy5yZWplY3RCdXR0b24nOiAncmVqZWl0YXInLFxuXG4gICAgLy8gSGlzdG9yeSBTZWN0aW9uXG4gICAgJ2hpc3RvcnkudGl0bGUnOiAnSGlzdFx1MDBGM3JpY28nLFxuICAgICdoaXN0b3J5LmNsZWFyQnV0dG9uJzogJ0xpbXBhcicsXG5cbiAgICAvLyBBZ2VudCBTZWN0aW9uXG4gICAgJ2FnZW50LnBsYW5UaXRsZSc6ICdwbGFubycsXG4gICAgJ2FnZW50LmFjdGl2aXR5VGl0bGUnOiAnQXRpdmlkYWRlJyxcbiAgICAnYWdlbnQubm9QbGFuJzogJ05lbmh1bSBwbGFubyBjcmlhZG8gYWluZGEnLFxuXG4gICAgLy8gVG9kbyBTdGF0dXNcbiAgICAndG9kby5wZW5kaW5nJzogJ3BlbmRlbnRlJyxcbiAgICAndG9kby5pblByb2dyZXNzJzogJ2VtIHByb2dyZXNzbycsXG4gICAgJ3RvZG8uY29tcGxldGVkJzogJ2NvbmNsdVx1MDBFRGRvJyxcblxuICAgIC8vIEludGVyYWN0aXZlIFByb21wdFxuICAgICdpbnRlcmFjdGl2ZS5oZWFkZXInOiAnQ2xhdWRlIGVzdFx1MDBFMSBwZWRpbmRvIGNvbmZpcm1hXHUwMEU3XHUwMEUzbycsXG4gICAgJ2ludGVyYWN0aXZlLnllc0J1dHRvbic6ICdzaW0nLFxuICAgICdpbnRlcmFjdGl2ZS5ub0J1dHRvbic6ICduXHUwMEUzbycsXG4gICAgJ2ludGVyYWN0aXZlLmN1c3RvbVBsYWNlaG9sZGVyJzogJ091IGRpZ2l0ZSB1bWEgcmVzcG9zdGEgcGVyc29uYWxpemFkYS4uLicsXG5cbiAgICAvLyBQZXJtaXNzaW9uIEFwcHJvdmFsXG4gICAgJ3Blcm1pc3Npb24uaGVhZGVyJzogJ3Blcm1pc3NcdTAwRTNvIG5lY2Vzc1x1MDBFMXJpYScsXG4gICAgJ3Blcm1pc3Npb24ubWVzc2FnZSc6ICdDbGF1ZGUgZXN0XHUwMEUxIHNvbGljaXRhbmRvIHBlcm1pc3NcdTAwRTNvIHBhcmEgZXhlY3V0YXIgYVx1MDBFN1x1MDBGNWVzLicsXG4gICAgJ3Blcm1pc3Npb24uYXBwcm92ZUJ1dHRvbic6ICdhcHJvdmFyIGUgY29udGludWFyJyxcbiAgICAncGVybWlzc2lvbi5kZW55QnV0dG9uJzogJ25lZ2FyJyxcblxuICAgIC8vIFN0YXR1cyBNZXNzYWdlc1xuICAgICdzdGF0dXMucHJvY2Vzc2luZyc6ICdDbGF1ZGUgZXN0XHUwMEUxIHByb2Nlc3NhbmRvJyxcbiAgICAnc3RhdHVzLmF1dG9BcHBseWluZyc6ICdBcGxpY2FuZG8gYWx0ZXJhXHUwMEU3XHUwMEY1ZXMgYXV0b21hdGljYW1lbnRlLi4uJyxcbiAgICAnc3RhdHVzLnJ1bm5pbmdBdXRob3JpemVkJzogJ0V4ZWN1dGFuZG8gdGFyZWZhcyBhdXRvcml6YWRhcycsXG4gICAgJ3N0YXR1cy5ydW5uaW5nSW5CYWNrZ3JvdW5kJzogJ0V4ZWN1dGFuZG8gZW0gc2VndW5kbyBwbGFuby4uLicsXG4gICAgJ3N0YXR1cy5mYWlsZWQnOiAnRmFsaG91IC0gdmVqYSBvIGVycm8gYWJhaXhvJyxcblxuICAgIC8vIE5vdGlmaWNhdGlvbnNcbiAgICAnbm90aWNlLmFscmVhZHlQcm9jZXNzaW5nJzogJ0pcdTAwRTEgZXN0XHUwMEUxIHByb2Nlc3NhbmRvIHVtYSBzb2xpY2l0YVx1MDBFN1x1MDBFM28uIFBvciBmYXZvciwgYWd1YXJkZS4nLFxuICAgICdub3RpY2UuZW50ZXJQcm9tcHQnOiAnUG9yIGZhdm9yLCBpbnNpcmEgdW0gcHJvbXB0JyxcbiAgICAnbm90aWNlLm5vQWN0aXZlTm90ZSc6ICdOZW5odW1hIG5vdGEgYXRpdmEgZW5jb250cmFkYSwgcG9yIGZhdm9yIGFicmEgdW1hIG5vdGEgTWFya2Rvd24gcHJpbWVpcm8nLFxuICAgICdub3RpY2Uubm9FZGl0b3InOiAnTmVuaHVtIGVkaXRvciBNYXJrZG93biBlbmNvbnRyYWRvLCBjZXJ0aWZpcXVlLXNlIGRlIHF1ZSB2b2NcdTAwRUEgdGVtIHVtYSBub3RhIGFiZXJ0YScsXG4gICAgJ25vdGljZS5ub1ZhdWx0UGF0aCc6ICdOXHUwMEUzbyBmb2kgcG9zc1x1MDBFRHZlbCBkZXRlcm1pbmFyIG8gY2FtaW5obyBkbyB2YXVsdCcsXG4gICAgJ25vdGljZS5jb21wbGV0ZWQnOiAnQ2xhdWRlIENvZGUgY29uY2x1XHUwMEVEZG8nLFxuICAgICdub3RpY2UuY29tcGxldGVkTm9DaGFuZ2VzJzogJ0NsYXVkZSBDb2RlIGNvbmNsdVx1MDBFRGRvIChzZW0gYWx0ZXJhXHUwMEU3XHUwMEY1ZXMgZGUgYXJxdWl2byknLFxuICAgICdub3RpY2UuY2hhbmdlc0FwcGxpZWQnOiAnYWx0ZXJhXHUwMEU3XHUwMEY1ZXMgYXBsaWNhZGFzIGF1dG9tYXRpY2FtZW50ZScsXG4gICAgJ25vdGljZS5jaGFuZ2VzQXBwbGllZFN1Y2Nlc3MnOiAnYWx0ZXJhXHUwMEU3XHUwMEY1ZXMgYXBsaWNhZGFzIGNvbSBzdWNlc3NvJyxcbiAgICAnbm90aWNlLmZhaWxlZEFwcGx5Q2hhbmdlcyc6ICdmYWxoYSBhbyBhcGxpY2FyIGFsdGVyYVx1MDBFN1x1MDBGNWVzJyxcbiAgICAnbm90aWNlLmNoYW5nZXNSZWplY3RlZCc6ICdBbHRlcmFcdTAwRTdcdTAwRjVlcyByZWplaXRhZGFzJyxcbiAgICAnbm90aWNlLmNhbmNlbGxlZCc6ICdDYW5jZWxhZG8nLFxuICAgICdub3RpY2UucGVybWlzc2lvblJlcXVlc3QnOiAnQ2xhdWRlIGVzdFx1MDBFMSBzb2xpY2l0YW5kbyBwZXJtaXNzXHUwMEUzbyAtIHBvciBmYXZvciBhcHJvdmUgb3UgbmVndWUnLFxuICAgICdub3RpY2UucGVybWlzc2lvbkRlbmllZCc6ICdQZXJtaXNzXHUwMEUzbyBuZWdhZGEgLSBDbGF1ZGUgblx1MDBFM28gcHJvc3NlZ3Vpclx1MDBFMScsXG4gICAgJ25vdGljZS5ub0NoYW5nZXNUb0FwcGx5JzogJ25lbmh1bWEgYWx0ZXJhXHUwMEU3XHUwMEUzbyBwYXJhIGFwbGljYXInLFxuICAgICdub3RpY2Uubm9BY3RpdmVGaWxlJzogJ25lbmh1bSBhcnF1aXZvIGF0aXZvJyxcbiAgICAnbm90aWNlLmhpc3RvcnlSZXN0b3JlZCc6ICdJdGVtIGRvIGhpc3RcdTAwRjNyaWNvIHJlc3RhdXJhZG8nLFxuICAgICdub3RpY2UuaGlzdG9yeVJlc3RvcmVkV2l0aENoYW5nZXMnOiAnSXRlbSBkbyBoaXN0XHUwMEYzcmljbyByZXN0YXVyYWRvIGNvbSBhbHRlcmFcdTAwRTdcdTAwRjVlcyBwcm9wb3N0YXMnLFxuICAgICdub3RpY2UuaGlzdG9yeUNsZWFyZWQnOiAnSGlzdFx1MDBGM3JpY28gbGltcG8nLFxuXG4gICAgLy8gRGlmZiBWaWV3XG4gICAgJ2RpZmYub3JpZ2luYWwnOiAnT3JpZ2luYWwnLFxuICAgICdkaWZmLm1vZGlmaWVkJzogJ01vZGlmaWNhZG8nLFxuXG4gICAgLy8gUmVzdWx0IFJlbmRlcmVyXG4gICAgJ3Jlc3VsdC5kaXJlY3RBbnN3ZXInOiAnUmVzcG9zdGEgZGlyZXRhJyxcbiAgICAncmVzdWx0LmFkZGl0aW9uYWxDb250ZXh0JzogJ0NvbnRleHRvIGFkaWNpb25hbCcsXG4gICAgJ3Jlc3VsdC50b2tlbnMnOiAndG9rZW5zJyxcbiAgICAncmVzdWx0LnRva2Vuc0luJzogJ2VudHJhZGEnLFxuICAgICdyZXN1bHQudG9rZW5zT3V0JzogJ3NhXHUwMEVEZGEnLFxuXG4gICAgLy8gUHJldmlldyBTdGF0c1xuICAgICdwcmV2aWV3Lm9yaWdpbmFsTGFiZWwnOiAnT3JpZ2luYWw6JyxcbiAgICAncHJldmlldy5tb2RpZmllZExhYmVsJzogJ01vZGlmaWNhZG86JyxcbiAgICAncHJldmlldy5jaGFyc0xhYmVsJzogJ2NhcmFjdGVyZXMnLFxuXG4gICAgLy8gTWlzY1xuICAgICdtaXNjLm5vUGVuZGluZ1JlcXVlc3QnOiAnTmVuaHVtYSBzb2xpY2l0YVx1MDBFN1x1MDBFM28gcGVuZGVudGUgZW5jb250cmFkYScsXG4gICAgJ21pc2MubGFuZ3VhZ2VDaGFuZ2VkJzogJ0lkaW9tYSBhbHRlcmFkby4gQWxndW5zIGVsZW1lbnRvcyBkYSBpbnRlcmZhY2Ugc2VyXHUwMEUzbyBhdHVhbGl6YWRvcyBhbyByZWNhcnJlZ2FyLicsXG4gICAgJ21pc2MudGVzdEZhaWxlZCc6ICdUZXN0ZSBkbyBDbGF1ZGUgQ29kZSBmYWxob3UnLFxuXG4gICAgLy8gU2V0dGluZ3NcbiAgICAnc2V0dGluZ3MuYXV0b0RldGVjdFBhdGgnOiAnRGV0ZWN0YXIgY2FtaW5obyBkbyBDbGF1ZGUgQ29kZSBhdXRvbWF0aWNhbWVudGUnLFxuICAgICdzZXR0aW5ncy5hdXRvRGV0ZWN0UGF0aERlc2MnOiAnRGV0ZWN0YXIgYXV0b21hdGljYW1lbnRlIGEgbG9jYWxpemFcdTAwRTdcdTAwRTNvIGRvIGV4ZWN1dFx1MDBFMXZlbCBkbyBDbGF1ZGUgQ29kZScsXG4gICAgJ3NldHRpbmdzLmV4ZWN1dGFibGVQYXRoJzogJ0NhbWluaG8gZG8gZXhlY3V0XHUwMEUxdmVsIGRvIENsYXVkZSBDb2RlJyxcbiAgICAnc2V0dGluZ3MuZXhlY3V0YWJsZVBhdGhEZXNjJzogJ0NhbWluaG8gY29tcGxldG8gcGFyYSBvIGV4ZWN1dFx1MDBFMXZlbCBkbyBDbGF1ZGUgQ29kZSAoZXguLCAvdXNyL2xvY2FsL2Jpbi9jbGF1ZGUpJyxcbiAgICAnc2V0dGluZ3MudGVzdEluc3RhbGxhdGlvbic6ICdUZXN0YXIgaW5zdGFsYVx1MDBFN1x1MDBFM28gZG8gQ2xhdWRlIENvZGUnLFxuICAgICdzZXR0aW5ncy50ZXN0SW5zdGFsbGF0aW9uRGVzYyc6ICdWZXJpZmljYXIgc2UgbyBDbGF1ZGUgQ29kZSBlc3RcdTAwRTEgYWNlc3NcdTAwRUR2ZWwgZSBmdW5jaW9uYW5kbycsXG4gICAgJ3NldHRpbmdzLnRlc3RCdXR0b24nOiAnVGVzdGFyJyxcbiAgICAnc2V0dGluZ3MudGVzdFdvcmtpbmcnOiAnZnVuY2lvbmFuZG8hJyxcbiAgICAnc2V0dGluZ3MudGVzdEZhaWxlZCc6ICdmYWxob3UnLFxuICAgICdzZXR0aW5ncy5jdXN0b21Qcm9tcHQnOiAnUHJvbXB0IGRlIHNpc3RlbWEgcGVyc29uYWxpemFkbycsXG4gICAgJ3NldHRpbmdzLmN1c3RvbVByb21wdERlc2MnOiAnUHJvbXB0IGRlIHNpc3RlbWEgcGVyc29uYWxpemFkbyBvcGNpb25hbCBwYXJhIGFkaWNpb25hciBhIHRvZGFzIGFzIHNvbGljaXRhXHUwMEU3XHUwMEY1ZXMnLFxuICAgICdzZXR0aW5ncy5jdXN0b21Qcm9tcHRQbGFjZWhvbGRlcic6ICdWb2NcdTAwRUEgZXN0XHUwMEUxIGFqdWRhbmRvIGEgZWRpdGFyIG5vdGFzIG1hcmtkb3duLi4uJyxcbiAgICAnc2V0dGluZ3MucHJlc2VydmVDdXJzb3InOiAnUHJlc2VydmFyIHBvc2lcdTAwRTdcdTAwRTNvIGRvIGN1cnNvcicsXG4gICAgJ3NldHRpbmdzLnByZXNlcnZlQ3Vyc29yRGVzYyc6ICdUZW50YXIgbWFudGVyIGEgcG9zaVx1MDBFN1x1MDBFM28gZG8gY3Vyc29yIGFwXHUwMEYzcyBhcGxpY2FyIGFsdGVyYVx1MDBFN1x1MDBGNWVzJyxcbiAgICAnc2V0dGluZ3MuYXV0b0FjY2VwdENoYW5nZXMnOiAnQWNlaXRhciBhbHRlcmFcdTAwRTdcdTAwRjVlcyBhdXRvbWF0aWNhbWVudGUnLFxuICAgICdzZXR0aW5ncy5hdXRvQWNjZXB0Q2hhbmdlc0Rlc2MnOiAnQXBsaWNhciBhbHRlcmFcdTAwRTdcdTAwRjVlcyBhdXRvbWF0aWNhbWVudGUgc2VtIG1vc3RyYXIgdmlzdWFsaXphXHUwMEU3XHUwMEUzbyAodXNlIGNvbSBjYXV0ZWxhISknLFxuICAgICdzZXR0aW5ncy5tb2RlbCc6ICdNb2RlbG8nLFxuICAgICdzZXR0aW5ncy5tb2RlbERlc2MnOiAnU2VsZWNpb25lIG8gbW9kZWxvIENsYXVkZSBhIHVzYXI6IFNvbm5ldCAoZXF1aWxpYnJhZG8pLCBPcHVzIChtYWlzIGNhcGF6KSwgb3UgSGFpa3UgKG1haXMgclx1MDBFMXBpZG8pLiBEZWl4ZSB2YXppbyBwYXJhIHVzYXIgbyBtb2RlbG8gc3ViYWdlbnQgcGFkclx1MDBFM28uJyxcbiAgICAnc2V0dGluZ3MubW9kZWxEZWZhdWx0JzogJ1BhZHJcdTAwRTNvIChtb2RlbG8gc3ViYWdlbnQpJyxcbiAgICAnc2V0dGluZ3MubW9kZWxTb25uZXQnOiAnU29ubmV0IChlcXVpbGlicmFkbyknLFxuICAgICdzZXR0aW5ncy5tb2RlbE9wdXMnOiAnT3B1cyAobWFpcyBjYXBheiknLFxuICAgICdzZXR0aW5ncy5tb2RlbEhhaWt1JzogJ0hhaWt1IChtYWlzIHJcdTAwRTFwaWRvKScsXG4gICAgJ3NldHRpbmdzLnZhdWx0QWNjZXNzJzogJ1Blcm1pdGlyIGFjZXNzbyBhbyB2YXVsdCBjb21wbGV0bycsXG4gICAgJ3NldHRpbmdzLnZhdWx0QWNjZXNzRGVzYyc6ICdQZXJtaXRpciBxdWUgQ2xhdWRlIGxlaWEvcGVzcXVpc2Ugb3V0cm9zIGFycXVpdm9zIG5vIHNldSB2YXVsdCAoblx1MDBFM28gYXBlbmFzIGEgbm90YSBhdHVhbCknLFxuICAgICdzZXR0aW5ncy5wZXJtaXNzaW9ubGVzc01vZGUnOiAnSGFiaWxpdGFyIG1vZG8gc2VtIHBlcm1pc3NcdTAwRjVlcycsXG4gICAgJ3NldHRpbmdzLnBlcm1pc3Npb25sZXNzTW9kZURlc2MnOiAnUGVybWl0aXIgcXVlIENsYXVkZSBleGVjdXRlIGFcdTAwRTdcdTAwRjVlcyBzZW0gcGVkaXIgcGVybWlzc1x1MDBFM28gYSBjYWRhIHZleiAodXNlIGNvbSBjYXV0ZWxhISBDbGF1ZGUgdGVyXHUwMEUxIGNvbnRyb2xlIHRvdGFsKScsXG4gICAgJ3NldHRpbmdzLnRpbWVvdXQnOiAnVGVtcG8gbGltaXRlIChzZWd1bmRvcyknLFxuICAgICdzZXR0aW5ncy50aW1lb3V0RGVzYyc6ICdUZW1wbyBtXHUwMEUxeGltbyBwYXJhIGFndWFyZGFyIHJlc3Bvc3RhIGRvIENsYXVkZSBDb2RlICgwID0gc2VtIGxpbWl0ZSknLFxuICAgICdzZXR0aW5ncy5jdXN0b21BcGlDb25maWcnOiAnQ29uZmlndXJhXHUwMEU3XHUwMEUzbyBkZSBBUEkgcGVyc29uYWxpemFkYScsXG4gICAgJ3NldHRpbmdzLmN1c3RvbUFwaUNvbmZpZ0Rlc2MnOiAnQ29uZmlndXJlIGVuZHBvaW50cyBkZSBBUEkgcGVyc29uYWxpemFkb3MgcGFyYSByZWdpXHUwMEY1ZXMgb25kZSBDbGF1ZGUgblx1MDBFM28gZXN0XHUwMEUxIGRpc3Bvblx1MDBFRHZlbCBkaXJldGFtZW50ZS4gRGVpeGUgdmF6aW8gcGFyYSB1c2FyIGNvbmZpZ3VyYVx1MDBFN1x1MDBGNWVzIHBhZHJcdTAwRTNvLicsXG4gICAgJ3NldHRpbmdzLmFwaUJhc2VVcmwnOiAnVVJMIGJhc2UgZGEgQVBJJyxcbiAgICAnc2V0dGluZ3MuYXBpQmFzZVVybERlc2MnOiAnVVJMIGRvIGVuZHBvaW50IGRlIEFQSSBwZXJzb25hbGl6YWRvIChleC4sIGh0dHBzOi8vYXBpLmtpbWkuY29tL2NvZGluZy8pJyxcbiAgICAnc2V0dGluZ3MuYXBpQXV0aFRva2VuJzogJ1Rva2VuIGRlIGF1dGVudGljYVx1MDBFN1x1MDBFM28gZGEgQVBJJyxcbiAgICAnc2V0dGluZ3MuYXBpQXV0aFRva2VuRGVzYyc6ICdUb2tlbiBkZSBhdXRlbnRpY2FcdTAwRTdcdTAwRTNvIHBlcnNvbmFsaXphZG8gcGFyYSBvIGVuZHBvaW50IGRhIEFQSScsXG4gICAgJ3NldHRpbmdzLmFwaUF1dGhUb2tlblBsYWNlaG9sZGVyJzogJ0luc2lyYSBzZXUgdG9rZW4gZGUgQVBJJyxcbiAgICAnc2V0dGluZ3MuY3VzdG9tTW9kZWwnOiAnTW9kZWxvIHBlcnNvbmFsaXphZG8nLFxuICAgICdzZXR0aW5ncy5jdXN0b21Nb2RlbERlc2MnOiAnTm9tZSBkbyBtb2RlbG8gcGVyc29uYWxpemFkbyBhIHVzYXIgKGV4Liwga2ltaS1mb3ItY29kaW5nKS4gU3Vic3RpdHVpIGEgc2VsZVx1MDBFN1x1MDBFM28gZGUgbW9kZWxvIGFjaW1hLicsXG4gICAgJ3NldHRpbmdzLmN1c3RvbVNtYWxsTW9kZWwnOiAnTW9kZWxvIHBlcXVlbm8vclx1MDBFMXBpZG8gcGVyc29uYWxpemFkbycsXG4gICAgJ3NldHRpbmdzLmN1c3RvbVNtYWxsTW9kZWxEZXNjJzogJ05vbWUgZG8gbW9kZWxvIHBlcnNvbmFsaXphZG8gcGFyYSBvcGVyYVx1MDBFN1x1MDBGNWVzIHJcdTAwRTFwaWRhcyAoZXguLCBraW1pLWZvci1jb2RpbmcpJyxcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2UnOiAnSWRpb21hJyxcbiAgICAnc2V0dGluZ3MubGFuZ3VhZ2VEZXNjJzogJ1NlbGVjaW9uZSBvIGlkaW9tYSBkYSBpbnRlcmZhY2UnLFxufTsiLCAiLyoqXG4gKiBJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgbW9kdWxlIGZvciBDbGF1ZGUgQ29kZSBwbHVnaW5cbiAqL1xuXG5pbXBvcnQgeyBlbiwgVHJhbnNsYXRpb25LZXkgfSBmcm9tICcuL2xvY2FsZXMvZW4nO1xuaW1wb3J0IHsgemggfSBmcm9tICcuL2xvY2FsZXMvemgnO1xuaW1wb3J0IHsgZXMgfSBmcm9tICcuL2xvY2FsZXMvZXMnO1xuaW1wb3J0IHsgZGUgfSBmcm9tICcuL2xvY2FsZXMvZGUnO1xuaW1wb3J0IHsgcHQgfSBmcm9tICcuL2xvY2FsZXMvcHQnO1xuXG5leHBvcnQgdHlwZSBMb2NhbGUgPSAnZW4nIHwgJ3poJyB8ICdlcycgfCAnZGUnIHwgJ3B0JztcblxudHlwZSBUcmFuc2xhdGlvbk1hcCA9IFJlY29yZDxUcmFuc2xhdGlvbktleSwgc3RyaW5nPjtcblxuY29uc3QgdHJhbnNsYXRpb25zOiBSZWNvcmQ8TG9jYWxlLCBUcmFuc2xhdGlvbk1hcD4gPSB7XG4gICAgZW46IGVuIGFzIFRyYW5zbGF0aW9uTWFwLFxuICAgIHpoOiB6aCBhcyBUcmFuc2xhdGlvbk1hcCxcbiAgICBlczogZXMgYXMgVHJhbnNsYXRpb25NYXAsXG4gICAgZGU6IGRlIGFzIFRyYW5zbGF0aW9uTWFwLFxuICAgIHB0OiBwdCBhcyBUcmFuc2xhdGlvbk1hcCxcbn07XG5cbmxldCBjdXJyZW50TG9jYWxlOiBMb2NhbGUgPSAnZW4nO1xuXG4vKipcbiAqIFNldCB0aGUgY3VycmVudCBsb2NhbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsZShsb2NhbGU6IExvY2FsZSk6IHZvaWQge1xuICAgIGlmICh0cmFuc2xhdGlvbnNbbG9jYWxlXSkge1xuICAgICAgICBjdXJyZW50TG9jYWxlID0gbG9jYWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgW2kxOG5dIFVua25vd24gbG9jYWxlOiAke2xvY2FsZX0sIGZhbGxpbmcgYmFjayB0byAnZW4nYCk7XG4gICAgICAgIGN1cnJlbnRMb2NhbGUgPSAnZW4nO1xuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGN1cnJlbnQgbG9jYWxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGUoKTogTG9jYWxlIHtcbiAgICByZXR1cm4gY3VycmVudExvY2FsZTtcbn1cblxuLyoqXG4gKiBHZXQgYXZhaWxhYmxlIGxvY2FsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF2YWlsYWJsZUxvY2FsZXMoKTogeyBjb2RlOiBMb2NhbGU7IG5hbWU6IHN0cmluZyB9W10ge1xuICAgIHJldHVybiBbXG4gICAgICAgIHsgY29kZTogJ2VuJywgbmFtZTogJ0VuZ2xpc2gnIH0sXG4gICAgICAgIHsgY29kZTogJ3poJywgbmFtZTogJ1x1NEUyRFx1NjU4NyAoXHU3QjgwXHU0RjUzKScgfSxcbiAgICAgICAgeyBjb2RlOiAnZXMnLCBuYW1lOiAnRXNwYVx1MDBGMW9sJyB9LFxuICAgICAgICB7IGNvZGU6ICdkZScsIG5hbWU6ICdEZXV0c2NoJyB9LFxuICAgICAgICB7IGNvZGU6ICdwdCcsIG5hbWU6ICdQb3J0dWd1XHUwMEVBcycgfSxcbiAgICBdO1xufVxuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIGtleSB0byB0aGUgY3VycmVudCBsb2NhbGVcbiAqIEBwYXJhbSBrZXkgVGhlIHRyYW5zbGF0aW9uIGtleVxuICogQHBhcmFtIHBhcmFtcyBPcHRpb25hbCBwYXJhbWV0ZXJzIGZvciBzdHJpbmcgaW50ZXJwb2xhdGlvblxuICogQHJldHVybnMgVGhlIHRyYW5zbGF0ZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0KGtleTogVHJhbnNsYXRpb25LZXksIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4pOiBzdHJpbmcge1xuICAgIGxldCB0ZXh0ID0gdHJhbnNsYXRpb25zW2N1cnJlbnRMb2NhbGVdPy5ba2V5XSB8fCB0cmFuc2xhdGlvbnNbJ2VuJ11ba2V5XSB8fCBrZXk7XG5cbiAgICAvLyBIYW5kbGUgcGFyYW1ldGVyIHN1YnN0aXR1dGlvblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMocGFyYW1zKS5mb3JFYWNoKChbcGFyYW1LZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxceyR7cGFyYW1LZXl9XFxcXH1gLCAnZycpLCBTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBpMThuIHdpdGggc3lzdGVtL09ic2lkaWFuIGxvY2FsZSBkZXRlY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRJMThuKHByZWZlcnJlZExvY2FsZT86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChwcmVmZXJyZWRMb2NhbGUgJiYgdHJhbnNsYXRpb25zW3ByZWZlcnJlZExvY2FsZSBhcyBMb2NhbGVdKSB7XG4gICAgICAgIHNldExvY2FsZShwcmVmZXJyZWRMb2NhbGUgYXMgTG9jYWxlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRyeSB0byBkZXRlY3QgZnJvbSBPYnNpZGlhbidzIGxvY2FsZSBvciBzeXN0ZW1cbiAgICBjb25zdCBzeXN0ZW1Mb2NhbGUgPSBuYXZpZ2F0b3IubGFuZ3VhZ2U/LnRvTG93ZXJDYXNlKCkgfHwgJyc7XG5cbiAgICBpZiAoc3lzdGVtTG9jYWxlLnN0YXJ0c1dpdGgoJ3poJykpIHtcbiAgICAgICAgc2V0TG9jYWxlKCd6aCcpO1xuICAgIH0gZWxzZSBpZiAoc3lzdGVtTG9jYWxlLnN0YXJ0c1dpdGgoJ2VzJykpIHtcbiAgICAgICAgc2V0TG9jYWxlKCdlcycpO1xuICAgIH0gZWxzZSBpZiAoc3lzdGVtTG9jYWxlLnN0YXJ0c1dpdGgoJ2RlJykpIHtcbiAgICAgICAgc2V0TG9jYWxlKCdkZScpO1xuICAgIH0gZWxzZSBpZiAoc3lzdGVtTG9jYWxlLnN0YXJ0c1dpdGgoJ3B0JykpIHtcbiAgICAgICAgc2V0TG9jYWxlKCdwdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldExvY2FsZSgnZW4nKTtcbiAgICB9XG59XG5cbi8vIFJlLWV4cG9ydCB0eXBlc1xuZXhwb3J0IHR5cGUgeyBUcmFuc2xhdGlvbktleSB9OyIsICIvKipcbiAqIFVJIEJ1aWxkZXIgLSBIYW5kbGVzIGNyZWF0aW9uIG9mIFVJIGVsZW1lbnRzIGZvciB0aGUgQ2xhdWRlIENvZGUgdmlld1xuICovXG5cbmltcG9ydCB7IHQgfSBmcm9tICcuLi9pMThuJztcblxuZXhwb3J0IGludGVyZmFjZSBVSUVsZW1lbnRzIHtcbiAgICBwcm9tcHRJbnB1dDogSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBydW5CdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNhbmNlbEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgb3V0cHV0QXJlYTogSFRNTERpdkVsZW1lbnQ7XG4gICAgcmVzdWx0QXJlYTogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJldmlld0FyZWE6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByZXZpZXdDb250ZW50Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcmV2aWV3VGFic0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgYXBwbHlCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHJlamVjdEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgc2VsZWN0ZWRUZXh0T25seUNoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGF1dG9BY2NlcHRDaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcbiAgICBjb252ZXJzYXRpb25hbE1vZGVDaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcbiAgICBzdGF0dXNJbmRpY2F0b3I6IEhUTUxEaXZFbGVtZW50O1xuICAgIHN0YXR1c1RleHQ6IEhUTUxTcGFuRWxlbWVudDtcbiAgICBpbnRlcmFjdGl2ZVByb21wdFNlY3Rpb246IEhUTUxEaXZFbGVtZW50O1xuICAgIHBlcm1pc3Npb25BcHByb3ZhbFNlY3Rpb246IEhUTUxEaXZFbGVtZW50O1xuICAgIGFwcHJvdmVQZXJtaXNzaW9uQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBkZW55UGVybWlzc2lvbkJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY3VycmVudE5vdGVMYWJlbDogSFRNTERpdkVsZW1lbnQ7XG4gICAgaGlzdG9yeUxpc3Q6IEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgY29ubmVjdGlvblN0YXR1c0Jhcj86IEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbm5lY3Rpb25TdGF0dXNJY29uPzogSFRNTFNwYW5FbGVtZW50O1xuICAgIGNvbm5lY3Rpb25TdGF0dXNUZXh0PzogSFRNTFNwYW5FbGVtZW50O1xufVxuXG5leHBvcnQgY2xhc3MgVUlCdWlsZGVyIHtcbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgaGVhZGVyIHNlY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGRIZWFkZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NsYXVkZS1jb2RlLWhlYWRlcicgfSk7XG4gICAgICAgIGNvbnN0IGhlYWRlclRpdGxlID0gaGVhZGVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NsYXVkZS1jb2RlLWhlYWRlci10aXRsZScgfSk7XG4gICAgICAgIGhlYWRlclRpdGxlLmNyZWF0ZUVsKCdoNCcsIHsgdGV4dDogdCgnaGVhZGVyLnRpdGxlJykgfSk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudE5vdGVMYWJlbCA9IGhlYWRlci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1jdXJyZW50LW5vdGUnIH0pO1xuICAgICAgICByZXR1cm4gY3VycmVudE5vdGVMYWJlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgaW5wdXQgc2VjdGlvbiB3aXRoIHByb21wdCB0ZXh0YXJlYSBhbmQgb3B0aW9uc1xuICAgICAqL1xuICAgIHN0YXRpYyBidWlsZElucHV0U2VjdGlvbihcbiAgICAgICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICAgICAgYXV0b0FjY2VwdERlZmF1bHQ6IGJvb2xlYW4sXG4gICAgICAgIG9uUnVuOiAoKSA9PiB2b2lkLFxuICAgICAgICBvbkNhbmNlbDogKCkgPT4gdm9pZFxuICAgICk6IHtcbiAgICAgICAgcHJvbXB0SW5wdXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgICAgIHNlbGVjdGVkVGV4dE9ubHlDaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgYXV0b0FjY2VwdENoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb252ZXJzYXRpb25hbE1vZGVDaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgbW9kZWxTZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgICAgICBydW5CdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICBjYW5jZWxCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIH0ge1xuICAgICAgICBjb25zdCBpbnB1dFNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2xhdWRlLWNvZGUtaW5wdXQtc2VjdGlvbicgfSk7XG5cbiAgICAgICAgLy8gUHJvbXB0IHRleHRhcmVhXG4gICAgICAgIGlucHV0U2VjdGlvbi5jcmVhdGVFbCgnbGFiZWwnLCB7IHRleHQ6IHQoJ2lucHV0LmxhYmVsJykgfSk7XG4gICAgICAgIGNvbnN0IHByb21wdElucHV0ID0gaW5wdXRTZWN0aW9uLmNyZWF0ZUVsKCd0ZXh0YXJlYScsIHtcbiAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLXByb21wdC1pbnB1dCcsXG4gICAgICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHQoJ2lucHV0LnBsYWNlaG9sZGVyJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHByb21wdElucHV0LnJvd3MgPSA0O1xuXG4gICAgICAgIC8vIE9wdGlvbnNcbiAgICAgICAgY29uc3Qgb3B0aW9uc0RpdiA9IGlucHV0U2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1vcHRpb25zJyB9KTtcblxuICAgICAgICAvLyBDb252ZXJzYXRpb25hbCBtb2RlIGNoZWNrYm94XG4gICAgICAgIGNvbnN0IGNvbnZlcnNhdGlvbmFsTGFiZWwgPSBvcHRpb25zRGl2LmNyZWF0ZUVsKCdsYWJlbCcsIHsgY2xzOiAnY2xhdWRlLWNvZGUtY2hlY2tib3gtbGFiZWwnIH0pO1xuICAgICAgICBjb25zdCBjb252ZXJzYXRpb25hbE1vZGVDaGVja2JveCA9IGNvbnZlcnNhdGlvbmFsTGFiZWwuY3JlYXRlRWwoJ2lucHV0JywgeyB0eXBlOiAnY2hlY2tib3gnIH0pO1xuICAgICAgICBjb252ZXJzYXRpb25hbExhYmVsLmFwcGVuZFRleHQoJyAnICsgdCgnaW5wdXQuY29udmVyc2F0aW9uYWxNb2RlJykpO1xuICAgICAgICBjb252ZXJzYXRpb25hbExhYmVsLnRpdGxlID0gdCgnaW5wdXQuY29udmVyc2F0aW9uYWxNb2RlVG9vbHRpcCcpO1xuXG4gICAgICAgIC8vIFNlbGVjdGVkIHRleHQgb25seSBjaGVja2JveFxuICAgICAgICBjb25zdCBzZWxlY3RlZFRleHRMYWJlbCA9IG9wdGlvbnNEaXYuY3JlYXRlRWwoJ2xhYmVsJywgeyBjbHM6ICdjbGF1ZGUtY29kZS1jaGVja2JveC1sYWJlbCcgfSk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dE9ubHlDaGVja2JveCA9IHNlbGVjdGVkVGV4dExhYmVsLmNyZWF0ZUVsKCdpbnB1dCcsIHsgdHlwZTogJ2NoZWNrYm94JyB9KTtcbiAgICAgICAgc2VsZWN0ZWRUZXh0TGFiZWwuYXBwZW5kVGV4dCgnICcgKyB0KCdpbnB1dC5zZWxlY3RlZFRleHRPbmx5JykpO1xuXG4gICAgICAgIC8vIEF1dG8tYWNjZXB0IGNoYW5nZXMgY2hlY2tib3hcbiAgICAgICAgY29uc3QgYXV0b0FjY2VwdExhYmVsID0gb3B0aW9uc0Rpdi5jcmVhdGVFbCgnbGFiZWwnLCB7IGNsczogJ2NsYXVkZS1jb2RlLWNoZWNrYm94LWxhYmVsJyB9KTtcbiAgICAgICAgY29uc3QgYXV0b0FjY2VwdENoZWNrYm94ID0gYXV0b0FjY2VwdExhYmVsLmNyZWF0ZUVsKCdpbnB1dCcsIHsgdHlwZTogJ2NoZWNrYm94JyB9KTtcbiAgICAgICAgYXV0b0FjY2VwdENoZWNrYm94LmNoZWNrZWQgPSBhdXRvQWNjZXB0RGVmYXVsdDtcbiAgICAgICAgYXV0b0FjY2VwdExhYmVsLmFwcGVuZFRleHQoJyAnICsgdCgnaW5wdXQuYXV0b0FjY2VwdCcpKTtcblxuICAgICAgICAvLyBNb2RlbCBzZWxlY3RvclxuICAgICAgICBjb25zdCBtb2RlbFNlbGVjdENvbnRhaW5lciA9IG9wdGlvbnNEaXYuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2xhdWRlLWNvZGUtbW9kZWwtc2VsZWN0JyB9KTtcbiAgICAgICAgbW9kZWxTZWxlY3RDb250YWluZXIuY3JlYXRlRWwoJ2xhYmVsJywgeyB0ZXh0OiB0KCdpbnB1dC5tb2RlbExhYmVsJykgKyAnICcsIGNsczogJ2NsYXVkZS1jb2RlLW1vZGVsLWxhYmVsJyB9KTtcbiAgICAgICAgY29uc3QgbW9kZWxTZWxlY3QgPSBtb2RlbFNlbGVjdENvbnRhaW5lci5jcmVhdGVFbCgnc2VsZWN0JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1tb2RlbC1kcm9wZG93bicgfSk7XG4gICAgICAgIG1vZGVsU2VsZWN0LmNyZWF0ZUVsKCdvcHRpb24nLCB7IHZhbHVlOiAnJywgdGV4dDogdCgnaW5wdXQubW9kZWxEZWZhdWx0JykgfSk7XG4gICAgICAgIG1vZGVsU2VsZWN0LmNyZWF0ZUVsKCdvcHRpb24nLCB7IHZhbHVlOiAnc29ubmV0JywgdGV4dDogJ1Nvbm5ldCcgfSk7XG4gICAgICAgIG1vZGVsU2VsZWN0LmNyZWF0ZUVsKCdvcHRpb24nLCB7IHZhbHVlOiAnb3B1cycsIHRleHQ6ICdPcHVzJyB9KTtcbiAgICAgICAgbW9kZWxTZWxlY3QuY3JlYXRlRWwoJ29wdGlvbicsIHsgdmFsdWU6ICdoYWlrdScsIHRleHQ6ICdIYWlrdScgfSk7XG5cbiAgICAgICAgLy8gQnV0dG9uIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBpbnB1dFNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2xhdWRlLWNvZGUtYnV0dG9uLWNvbnRhaW5lcicgfSk7XG5cbiAgICAgICAgY29uc3QgcnVuQnV0dG9uID0gYnV0dG9uQ29udGFpbmVyLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgICAgICBjbHM6ICdtb2QtY3RhJyxcbiAgICAgICAgICAgIHRleHQ6IHQoJ2lucHV0LnJ1bkJ1dHRvbicpXG4gICAgICAgIH0pO1xuICAgICAgICBydW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblJ1bik7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gYnV0dG9uQ29udGFpbmVyLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgICAgICB0ZXh0OiB0KCdpbnB1dC5jYW5jZWxCdXR0b24nKSxcbiAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLWNhbmNlbC1idXR0b24gY2xhdWRlLWNvZGUtaGlkZGVuJ1xuICAgICAgICB9KTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DYW5jZWwpO1xuXG4gICAgICAgIC8vIE5vdGU6IFN0YXR1cyBpbmRpY2F0b3IgaGFzIGJlZW4gbW92ZWQgaW50byBSZXN1bHQgc2VjdGlvbiAoYnVpbGRSZXN1bHRTZWN0aW9uKVxuICAgICAgICAvLyBObyBsb25nZXIgY3JlYXRpbmcgYSBzZXBhcmF0ZSBzdGF0dXMgaW5kaWNhdG9yIGhlcmVcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvbXB0SW5wdXQsXG4gICAgICAgICAgICBzZWxlY3RlZFRleHRPbmx5Q2hlY2tib3gsXG4gICAgICAgICAgICBhdXRvQWNjZXB0Q2hlY2tib3gsXG4gICAgICAgICAgICBjb252ZXJzYXRpb25hbE1vZGVDaGVja2JveCxcbiAgICAgICAgICAgIG1vZGVsU2VsZWN0LFxuICAgICAgICAgICAgcnVuQnV0dG9uLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIGNvbWJpbmVkIGFnZW50IHNlY3Rpb24gKHBsYW4gKyBhY3Rpdml0eSBpbiB0d28gY29sdW1ucylcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGRBZ2VudFNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICAvLyBNYWluIGNvbnRhaW5lciBmb3IgdGhlIGVudGlyZSBhZ2VudCBzZWN0aW9uXG4gICAgICAgIGNvbnN0IGFnZW50Q29udGFpbmVyID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1hZ2VudC1jb250YWluZXIgY2xhdWRlLWNvZGUtaGlkZGVuJ1xuICAgICAgICB9KTtcbiAgICAgICAgYWdlbnRDb250YWluZXIuaWQgPSAnY2xhdWRlLWNvZGUtYWdlbnQtY29udGFpbmVyJztcblxuICAgICAgICAvLyBMZWZ0IGNvbHVtbjogQ2xhdWRlJ3MgUGxhbiAodG9kb3MpXG4gICAgICAgIGNvbnN0IHBsYW5Db2x1bW4gPSBhZ2VudENvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1hZ2VudC1jb2x1bW4gY2xhdWRlLWNvZGUtcGxhbi1jb2x1bW4gY2xhdWRlLWNvZGUtaGlkZGVuJyB9KTtcbiAgICAgICAgLy8gSGlkZGVuIGJ5IGRlZmF1bHQgLSBvbmx5IHNob3duIHdoZW4gdGhlcmUncyBhIHBsYW5cblxuICAgICAgICBjb25zdCBwbGFuSGVhZGVyID0gcGxhbkNvbHVtbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1hZ2VudC1jb2x1bW4taGVhZGVyJyB9KTtcbiAgICAgICAgcGxhbkhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ1x1RDgzRFx1RENDQiAnICsgdCgnYWdlbnQucGxhblRpdGxlJykgfSk7XG5cbiAgICAgICAgcGxhbkNvbHVtbi5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtdG9kby1saXN0IGNsYXVkZS1jb2RlLWhpZGRlbicsXG4gICAgICAgICAgICBhdHRyOiB7IGlkOiAnY2xhdWRlLWNvZGUtdG9kby1saXN0JyB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBIaWRkZW4gYnkgZGVmYXVsdFxuXG4gICAgICAgIGNvbnN0IGVtcHR5UGxhbk1lc3NhZ2UgPSBwbGFuQ29sdW1uLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1lbXB0eS1tZXNzYWdlIGNsYXVkZS1jb2RlLWhpZGRlbicsXG4gICAgICAgICAgICB0ZXh0OiB0KCdhZ2VudC5ub1BsYW4nKVxuICAgICAgICB9KTtcbiAgICAgICAgZW1wdHlQbGFuTWVzc2FnZS5pZCA9ICdjbGF1ZGUtY29kZS1lbXB0eS1wbGFuJztcbiAgICAgICAgLy8gSGlkZGVuIGJ5IGRlZmF1bHRcblxuICAgICAgICAvLyBSaWdodCBjb2x1bW46IEFnZW50IEFjdGl2aXR5ICh0b29sIGV4ZWN1dGlvbnMpXG4gICAgICAgIGNvbnN0IGFjdGl2aXR5Q29sdW1uID0gYWdlbnRDb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2xhdWRlLWNvZGUtYWdlbnQtY29sdW1uIGNsYXVkZS1jb2RlLWFjdGl2aXR5LWNvbHVtbiBjbGF1ZGUtY29kZS1oaWRkZW4nIH0pO1xuICAgICAgICAvLyBIaWRkZW4gYnkgZGVmYXVsdCB1bnRpbCBzdGVwcyBhcmUgYWRkZWRcblxuICAgICAgICBjb25zdCBhY3Rpdml0eUhlYWRlciA9IGFjdGl2aXR5Q29sdW1uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NsYXVkZS1jb2RlLWFnZW50LWNvbHVtbi1oZWFkZXIgY29sbGFwc2libGUtaGVhZGVyJyB9KTtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlUaXRsZSA9IGFjdGl2aXR5SGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjb2xsYXBzaWJsZS10aXRsZScgfSk7XG4gICAgICAgIGFjdGl2aXR5VGl0bGUuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NvbGxhcHNlLWluZGljYXRvcicsIHRleHQ6ICdcdTI1QkMgJyB9KTtcbiAgICAgICAgYWN0aXZpdHlUaXRsZS5hcHBlbmRUZXh0KHQoJ2FnZW50LmFjdGl2aXR5VGl0bGUnKSk7XG5cbiAgICAgICAgY29uc3QgYWN0aXZpdHlTdGVwcyA9IGFjdGl2aXR5Q29sdW1uLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1hZ2VudC1zdGVwcyBjb2xsYXBzaWJsZS1jb250ZW50JyxcbiAgICAgICAgICAgIGF0dHI6IHsgaWQ6ICdjbGF1ZGUtY29kZS1hZ2VudC1zdGVwcycgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgY2xpY2sgaGFuZGxlciB0byB0b2dnbGUgY29sbGFwc2VcbiAgICAgICAgYWN0aXZpdHlIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NvbGxhcHNlZCA9IGFjdGl2aXR5U3RlcHMuaGFzQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICAgICAgYWN0aXZpdHlTdGVwcy50b2dnbGVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJywgIWlzQ29sbGFwc2VkKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvciA9IGFjdGl2aXR5SGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5jb2xsYXBzZS1pbmRpY2F0b3InKTtcbiAgICAgICAgICAgIGlmIChpbmRpY2F0b3IpIHtcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3IudGV4dENvbnRlbnQgPSBpc0NvbGxhcHNlZCA/ICdcdTI1QkMgJyA6ICdcdTI1QjYgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRvZ2dsZSBjb2xsYXBzZWQgY2xhc3Mgb24gY29udGFpbmVyXG4gICAgICAgICAgICBhZ2VudENvbnRhaW5lci50b2dnbGVDbGFzcygnY29sbGFwc2VkJywgIWlzQ29sbGFwc2VkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIGludGVyYWN0aXZlIHByb21wdCBzZWN0aW9uIChmb3IgZnV0dXJlIHVzZSlcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGRJbnRlcmFjdGl2ZVByb21wdFNlY3Rpb24oXG4gICAgICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgICAgIG9uUmVzcG9uZDogKHJlc3BvbnNlOiBzdHJpbmcpID0+IHZvaWRcbiAgICApOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGludGVyYWN0aXZlUHJvbXB0U2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtaW50ZXJhY3RpdmUtcHJvbXB0IGNsYXVkZS1jb2RlLWhpZGRlbidcbiAgICAgICAgfSk7XG4gICAgICAgIGludGVyYWN0aXZlUHJvbXB0U2VjdGlvbi5pZCA9ICdjbGF1ZGUtY29kZS1pbnRlcmFjdGl2ZS1wcm9tcHQnO1xuXG4gICAgICAgIGludGVyYWN0aXZlUHJvbXB0U2VjdGlvbi5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAnaW50ZXJhY3RpdmUtcHJvbXB0LWhlYWRlcicsXG4gICAgICAgICAgICB0ZXh0OiAnXHUyNzUzICcgKyB0KCdpbnRlcmFjdGl2ZS5oZWFkZXInKVxuICAgICAgICB9KTtcblxuICAgICAgICBpbnRlcmFjdGl2ZVByb21wdFNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsczogJ2ludGVyYWN0aXZlLXByb21wdC1xdWVzdGlvbicsXG4gICAgICAgICAgICBhdHRyOiB7IGlkOiAnaW50ZXJhY3RpdmUtcHJvbXB0LXF1ZXN0aW9uJyB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHByb21wdEJ1dHRvbnMgPSBpbnRlcmFjdGl2ZVByb21wdFNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsczogJ2ludGVyYWN0aXZlLXByb21wdC1idXR0b25zJ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB5ZXNCdXR0b24gPSBwcm9tcHRCdXR0b25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgICAgICBjbHM6ICdtb2QtY3RhJyxcbiAgICAgICAgICAgIHRleHQ6ICdcdTI3MTMgJyArIHQoJ2ludGVyYWN0aXZlLnllc0J1dHRvbicpXG4gICAgICAgIH0pO1xuICAgICAgICB5ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvblJlc3BvbmQoJ3llcycpKTtcblxuICAgICAgICBjb25zdCBub0J1dHRvbiA9IHByb21wdEJ1dHRvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTI3MTcgJyArIHQoJ2ludGVyYWN0aXZlLm5vQnV0dG9uJylcbiAgICAgICAgfSk7XG4gICAgICAgIG5vQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb25SZXNwb25kKCdubycpKTtcblxuICAgICAgICBjb25zdCBjdXN0b21SZXNwb25zZUlucHV0ID0gaW50ZXJhY3RpdmVQcm9tcHRTZWN0aW9uLmNyZWF0ZUVsKCdpbnB1dCcsIHtcbiAgICAgICAgICAgIGNsczogJ2ludGVyYWN0aXZlLXByb21wdC1pbnB1dCcsXG4gICAgICAgICAgICBhdHRyOiB7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHQoJ2ludGVyYWN0aXZlLmN1c3RvbVBsYWNlaG9sZGVyJyksXG4gICAgICAgICAgICAgICAgaWQ6ICdpbnRlcmFjdGl2ZS1wcm9tcHQtaW5wdXQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjdXN0b21SZXNwb25zZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgb25SZXNwb25kKGN1c3RvbVJlc3BvbnNlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaW50ZXJhY3RpdmVQcm9tcHRTZWN0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBwZXJtaXNzaW9uIGFwcHJvdmFsIHNlY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGRQZXJtaXNzaW9uQXBwcm92YWxTZWN0aW9uKFxuICAgICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgICAgICBvbkFwcHJvdmU6ICgpID0+IHZvaWQsXG4gICAgICAgIG9uRGVueTogKCkgPT4gdm9pZFxuICAgICk6IHtcbiAgICAgICAgcGVybWlzc2lvbkFwcHJvdmFsU2VjdGlvbjogSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGFwcHJvdmVQZXJtaXNzaW9uQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgZGVueVBlcm1pc3Npb25CdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIH0ge1xuICAgICAgICBjb25zdCBwZXJtaXNzaW9uQXBwcm92YWxTZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1wZXJtaXNzaW9uLWFwcHJvdmFsIGNsYXVkZS1jb2RlLWhpZGRlbidcbiAgICAgICAgfSk7XG4gICAgICAgIHBlcm1pc3Npb25BcHByb3ZhbFNlY3Rpb24uaWQgPSAnY2xhdWRlLWNvZGUtcGVybWlzc2lvbi1hcHByb3ZhbCc7XG5cbiAgICAgICAgcGVybWlzc2lvbkFwcHJvdmFsU2VjdGlvbi5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAncGVybWlzc2lvbi1hcHByb3ZhbC1oZWFkZXInLFxuICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REQxMCAnICsgdCgncGVybWlzc2lvbi5oZWFkZXInKVxuICAgICAgICB9KTtcblxuICAgICAgICBwZXJtaXNzaW9uQXBwcm92YWxTZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbHM6ICdwZXJtaXNzaW9uLWFwcHJvdmFsLW1lc3NhZ2UnLFxuICAgICAgICAgICAgdGV4dDogdCgncGVybWlzc2lvbi5tZXNzYWdlJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYXBwcm92YWxCdXR0b25zID0gcGVybWlzc2lvbkFwcHJvdmFsU2VjdGlvbi5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAncGVybWlzc2lvbi1hcHByb3ZhbC1idXR0b25zJ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhcHByb3ZlUGVybWlzc2lvbkJ1dHRvbiA9IGFwcHJvdmFsQnV0dG9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgICAgICAgY2xzOiAnbW9kLWN0YScsXG4gICAgICAgICAgICB0ZXh0OiAnXHUyNzEzICcgKyB0KCdwZXJtaXNzaW9uLmFwcHJvdmVCdXR0b24nKVxuICAgICAgICB9KTtcbiAgICAgICAgYXBwcm92ZVBlcm1pc3Npb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkFwcHJvdmUpO1xuXG4gICAgICAgIGNvbnN0IGRlbnlQZXJtaXNzaW9uQnV0dG9uID0gYXBwcm92YWxCdXR0b25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgICAgICBjbHM6ICdtb2Qtd2FybmluZycsXG4gICAgICAgICAgICB0ZXh0OiAnXHUyNzE3ICcgKyB0KCdwZXJtaXNzaW9uLmRlbnlCdXR0b24nKVxuICAgICAgICB9KTtcbiAgICAgICAgZGVueVBlcm1pc3Npb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkRlbnkpO1xuXG4gICAgICAgIHJldHVybiB7IHBlcm1pc3Npb25BcHByb3ZhbFNlY3Rpb24sIGFwcHJvdmVQZXJtaXNzaW9uQnV0dG9uLCBkZW55UGVybWlzc2lvbkJ1dHRvbiB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSByZXN1bHQgc2VjdGlvbiAoZm9yIG5vbi1lZGl0IHJlc3BvbnNlcylcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGRSZXN1bHRTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB7IHJlc3VsdEFyZWE6IEhUTUxEaXZFbGVtZW50OyBzdGF0dXNBcmVhOiBIVE1MRGl2RWxlbWVudDsgc3RhdHVzVGV4dDogSFRNTFNwYW5FbGVtZW50OyBsYXN0UHJvbXB0QXJlYTogSFRNTERpdkVsZW1lbnQgfSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdFNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2xhdWRlLWNvZGUtcmVzdWx0LXNlY3Rpb24gY2xhdWRlLWNvZGUtaGlkZGVuJyB9KTtcbiAgICAgICAgcmVzdWx0U2VjdGlvbi5pZCA9ICdjbGF1ZGUtY29kZS1yZXN1bHQtc2VjdGlvbic7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0SGVhZGVyID0gcmVzdWx0U2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1yZXN1bHQtaGVhZGVyIGNvbGxhcHNpYmxlLWhlYWRlcicgfSk7XG4gICAgICAgIGNvbnN0IGhlYWRlclRpdGxlID0gcmVzdWx0SGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjb2xsYXBzaWJsZS10aXRsZScgfSk7XG4gICAgICAgIGhlYWRlclRpdGxlLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjb2xsYXBzZS1pbmRpY2F0b3InLCB0ZXh0OiAnXHUyNUJDICcgfSk7XG4gICAgICAgIGhlYWRlclRpdGxlLmFwcGVuZFRleHQodCgncmVzdWx0LnRpdGxlJykpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gcmVzdWx0U2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjb2xsYXBzaWJsZS1jb250ZW50JyB9KTtcblxuICAgICAgICAvLyBMYXN0IHByb21wdCBhcmVhIChzaG93cyB3aGF0IHRoZSB1c2VyIGFza2VkKVxuICAgICAgICBjb25zdCBsYXN0UHJvbXB0QXJlYSA9IGNvbnRlbnRXcmFwcGVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NsYXVkZS1jb2RlLWxhc3QtcHJvbXB0IGNsYXVkZS1jb2RlLWhpZGRlbicgfSk7XG4gICAgICAgIGxhc3RQcm9tcHRBcmVhLmlkID0gJ2NsYXVkZS1jb2RlLWxhc3QtcHJvbXB0JztcblxuICAgICAgICAvLyBTdGF0dXMgYXJlYSAoc2hvd24gZHVyaW5nIHByb2Nlc3NpbmcpXG4gICAgICAgIGNvbnN0IHN0YXR1c0FyZWEgPSBjb250ZW50V3JhcHBlci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1zdGF0dXMtYXJlYSBjbGF1ZGUtY29kZS1oaWRkZW4nIH0pO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c1RleHRDb250YWluZXIgPSBzdGF0dXNBcmVhLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NsYXVkZS1jb2RlLXN0YXR1cy10ZXh0JyB9KTtcbiAgICAgICAgc3RhdHVzVGV4dENvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1zdGF0dXMtc3Bpbm5lcicgfSk7XG4gICAgICAgIGNvbnN0IHN0YXR1c1RleHQgPSBzdGF0dXNUZXh0Q29udGFpbmVyLmNyZWF0ZUVsKCdzcGFuJyk7XG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSBzdGF0dXNBcmVhLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NsYXVkZS1jb2RlLXByb2dyZXNzLWJhci1jb250YWluZXInIH0pO1xuICAgICAgICBwcm9ncmVzc0JhckNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1wcm9ncmVzcy1iYXInIH0pO1xuXG4gICAgICAgIC8vIFJlc3VsdCBhcmVhIChzaG93biB3aGVuIHRoZXJlJ3MgYSByZXN1bHQpXG4gICAgICAgIGNvbnN0IHJlc3VsdEFyZWEgPSBjb250ZW50V3JhcHBlci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtcmVzdWx0LWFyZWEgbWFya2Rvd24tcmVuZGVyZWQgY2xhdWRlLWNvZGUtaGlkZGVuJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgY2xpY2sgaGFuZGxlciB0byB0b2dnbGUgY29sbGFwc2VcbiAgICAgICAgcmVzdWx0SGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDb2xsYXBzZWQgPSBjb250ZW50V3JhcHBlci5oYXNDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICBjb250ZW50V3JhcHBlci50b2dnbGVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJywgIWlzQ29sbGFwc2VkKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvciA9IHJlc3VsdEhlYWRlci5xdWVyeVNlbGVjdG9yKCcuY29sbGFwc2UtaW5kaWNhdG9yJyk7XG4gICAgICAgICAgICBpZiAoaW5kaWNhdG9yKSB7XG4gICAgICAgICAgICAgICAgaW5kaWNhdG9yLnRleHRDb250ZW50ID0gaXNDb2xsYXBzZWQgPyAnXHUyNUJDICcgOiAnXHUyNUI2ICc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUb2dnbGUgY29sbGFwc2VkIGNsYXNzIG9uIHNlY3Rpb25cbiAgICAgICAgICAgIHJlc3VsdFNlY3Rpb24udG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlZCcsICFpc0NvbGxhcHNlZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7IHJlc3VsdEFyZWEsIHN0YXR1c0FyZWEsIHN0YXR1c1RleHQsIGxhc3RQcm9tcHRBcmVhIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIG91dHB1dCBzZWN0aW9uXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkT3V0cHV0U2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogeyBvdXRwdXRBcmVhOiBIVE1MRGl2RWxlbWVudDsgb3V0cHV0U2VjdGlvbjogSFRNTERpdkVsZW1lbnQgfSB7XG4gICAgICAgIGNvbnN0IG91dHB1dFNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2xhdWRlLWNvZGUtb3V0cHV0LXNlY3Rpb24gY2xhdWRlLWNvZGUtaGlkZGVuJyB9KTtcbiAgICAgICAgY29uc3Qgb3V0cHV0SGVhZGVyID0gb3V0cHV0U2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1vdXRwdXQtaGVhZGVyIGNvbGxhcHNpYmxlLWhlYWRlcicgfSk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyVGl0bGUgPSBvdXRwdXRIZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NvbGxhcHNpYmxlLXRpdGxlJyB9KTtcbiAgICAgICAgLy8gU3RhcnQgY29sbGFwc2VkIGJ5IGRlZmF1bHRcbiAgICAgICAgaGVhZGVyVGl0bGUuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NvbGxhcHNlLWluZGljYXRvcicsIHRleHQ6ICdcdTI1QjYgJyB9KTtcbiAgICAgICAgaGVhZGVyVGl0bGUuYXBwZW5kVGV4dCh0KCdvdXRwdXQudGl0bGUnKSk7XG5cbiAgICAgICAgLy8gU3RhcnQgY29sbGFwc2VkIGJ5IGRlZmF1bHRcbiAgICAgICAgY29uc3Qgb3V0cHV0QXJlYSA9IG91dHB1dFNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLW91dHB1dC1hcmVhIGNvbGxhcHNpYmxlLWNvbnRlbnQgY2xhdWRlLWNvZGUtaGlkZGVuJ1xuICAgICAgICB9KTtcbiAgICAgICAgb3V0cHV0U2VjdGlvbi5hZGRDbGFzcygnY29sbGFwc2VkJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIG91dHB1dCB2aXNpYmlsaXR5IHdoZW4gY2xpY2tpbmcgaGVhZGVyXG4gICAgICAgIG91dHB1dEhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ29sbGFwc2VkID0gb3V0cHV0QXJlYS5oYXNDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICBvdXRwdXRBcmVhLnRvZ2dsZUNsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nLCAhaXNDb2xsYXBzZWQpO1xuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gb3V0cHV0SGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5jb2xsYXBzZS1pbmRpY2F0b3InKTtcbiAgICAgICAgICAgIGlmIChpbmRpY2F0b3IpIHtcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3IudGV4dENvbnRlbnQgPSBpc0NvbGxhcHNlZCA/ICdcdTI1QkMgJyA6ICdcdTI1QjYgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRvZ2dsZSBjb2xsYXBzZWQgY2xhc3Mgb24gc2VjdGlvblxuICAgICAgICAgICAgb3V0cHV0U2VjdGlvbi50b2dnbGVDbGFzcygnY29sbGFwc2VkJywgIWlzQ29sbGFwc2VkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHsgb3V0cHV0QXJlYSwgb3V0cHV0U2VjdGlvbiB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBwcmV2aWV3IHNlY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGRQcmV2aWV3U2VjdGlvbihcbiAgICAgICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICAgICAgb25BcHBseTogKCkgPT4gdm9pZCxcbiAgICAgICAgb25SZWplY3Q6ICgpID0+IHZvaWRcbiAgICApOiB7XG4gICAgICAgIHByZXZpZXdBcmVhOiBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgcHJldmlld0NvbnRlbnRDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgICAgICBwcmV2aWV3VGFic0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGFwcGx5QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgcmVqZWN0QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICB9IHtcbiAgICAgICAgY29uc3QgcHJldmlld1NlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2xhdWRlLWNvZGUtcHJldmlldy1zZWN0aW9uIGNsYXVkZS1jb2RlLWhpZGRlbicgfSk7XG4gICAgICAgIHByZXZpZXdTZWN0aW9uLmlkID0gJ2NsYXVkZS1jb2RlLXByZXZpZXctc2VjdGlvbic7XG5cbiAgICAgICAgY29uc3QgcHJldmlld0hlYWRlciA9IHByZXZpZXdTZWN0aW9uLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NsYXVkZS1jb2RlLXByZXZpZXctaGVhZGVyIGNvbGxhcHNpYmxlLWhlYWRlcicgfSk7XG4gICAgICAgIGNvbnN0IGhlYWRlclRpdGxlID0gcHJldmlld0hlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY29sbGFwc2libGUtdGl0bGUnIH0pO1xuICAgICAgICBoZWFkZXJUaXRsZS5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY29sbGFwc2UtaW5kaWNhdG9yJywgdGV4dDogJ1x1MjVCQyAnIH0pO1xuICAgICAgICBoZWFkZXJUaXRsZS5hcHBlbmRUZXh0KHQoJ3ByZXZpZXcudGl0bGUnKSk7XG5cbiAgICAgICAgY29uc3QgcHJldmlld0NvbnRlbnQgPSBwcmV2aWV3U2VjdGlvbi5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1wcmV2aWV3LWNvbnRlbnQtd3JhcHBlciBjb2xsYXBzaWJsZS1jb250ZW50JyB9KTtcblxuICAgICAgICAvLyBUYWJzIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBwcmV2aWV3VGFic0NvbnRhaW5lciA9IHByZXZpZXdDb250ZW50LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NsYXVkZS1jb2RlLXByZXZpZXctdGFicycgfSk7XG5cbiAgICAgICAgY29uc3QgcmF3VGFiID0gcHJldmlld1RhYnNDb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAncHJldmlldy10YWInLCB0ZXh0OiB0KCdwcmV2aWV3LnRhYlJhdycpIH0pO1xuICAgICAgICBjb25zdCBkaWZmVGFiID0gcHJldmlld1RhYnNDb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAncHJldmlldy10YWIgYWN0aXZlJywgdGV4dDogdCgncHJldmlldy50YWJEaWZmJykgfSk7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkVGFiID0gcHJldmlld1RhYnNDb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAncHJldmlldy10YWInLCB0ZXh0OiB0KCdwcmV2aWV3LnRhYlJlbmRlcmVkJykgfSk7XG5cbiAgICAgICAgLy8gQ29udGVudCBjb250YWluZXIgdGhhdCBob2xkcyBhbGwgdmlld3NcbiAgICAgICAgY29uc3QgcHJldmlld0NvbnRlbnRDb250YWluZXIgPSBwcmV2aWV3Q29udGVudC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1wcmV2aWV3LWNvbnRlbnQtY29udGFpbmVyJyB9KTtcblxuICAgICAgICAvLyBSYXcgcHJldmlldyBhcmVhIChzaG93biBieSBkZWZhdWx0KVxuICAgICAgICBjb25zdCBwcmV2aWV3QXJlYSA9IHByZXZpZXdDb250ZW50Q29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NsYXVkZS1jb2RlLXByZXZpZXctYXJlYScgfSk7XG5cbiAgICAgICAgY29uc3QgcHJldmlld0J1dHRvbnMgPSBwcmV2aWV3Q29udGVudC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1wcmV2aWV3LWJ1dHRvbnMnIH0pO1xuXG4gICAgICAgIGNvbnN0IGFwcGx5QnV0dG9uID0gcHJldmlld0J1dHRvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgIGNsczogJ21vZC1jdGEnLFxuICAgICAgICAgICAgdGV4dDogJ1x1MjcxMyAnICsgdCgncHJldmlldy5hcHBseUJ1dHRvbicpXG4gICAgICAgIH0pO1xuICAgICAgICBhcHBseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQXBwbHkpO1xuXG4gICAgICAgIGNvbnN0IHJlamVjdEJ1dHRvbiA9IHByZXZpZXdCdXR0b25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgICAgICBjbHM6ICdtb2Qtd2FybmluZycsXG4gICAgICAgICAgICB0ZXh0OiAnXHUyNzE3ICcgKyB0KCdwcmV2aWV3LnJlamVjdEJ1dHRvbicpXG4gICAgICAgIH0pO1xuICAgICAgICByZWplY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblJlamVjdCk7XG5cbiAgICAgICAgLy8gVGFiIHN3aXRjaGluZyBsb2dpY1xuICAgICAgICByYXdUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByYXdUYWIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZGlmZlRhYi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICByZW5kZXJlZFRhYi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBwcmV2aWV3QXJlYS5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICBjb25zdCBkaWZmQXJlYSA9IHByZXZpZXdDb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jbGF1ZGUtY29kZS1wcmV2aWV3LWRpZmYnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkQXJlYSA9IHByZXZpZXdDb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jbGF1ZGUtY29kZS1wcmV2aWV3LXJlbmRlcmVkJyk7XG4gICAgICAgICAgICBpZiAoZGlmZkFyZWEpIGRpZmZBcmVhLmFkZENsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZEFyZWEpIHJlbmRlcmVkQXJlYS5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpZmZUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkaWZmVGFiLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHJhd1RhYi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICByZW5kZXJlZFRhYi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBwcmV2aWV3QXJlYS5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICBjb25zdCBkaWZmQXJlYSA9IHByZXZpZXdDb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jbGF1ZGUtY29kZS1wcmV2aWV3LWRpZmYnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkQXJlYSA9IHByZXZpZXdDb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jbGF1ZGUtY29kZS1wcmV2aWV3LXJlbmRlcmVkJyk7XG4gICAgICAgICAgICBpZiAoZGlmZkFyZWEpIGRpZmZBcmVhLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZEFyZWEpIHJlbmRlcmVkQXJlYS5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlbmRlcmVkVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyZWRUYWIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgcmF3VGFiLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRpZmZUYWIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgcHJldmlld0FyZWEuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICAgICAgY29uc3QgZGlmZkFyZWEgPSBwcmV2aWV3Q29udGVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2xhdWRlLWNvZGUtcHJldmlldy1kaWZmJyk7XG4gICAgICAgICAgICBjb25zdCByZW5kZXJlZEFyZWEgPSBwcmV2aWV3Q29udGVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2xhdWRlLWNvZGUtcHJldmlldy1yZW5kZXJlZCcpO1xuICAgICAgICAgICAgaWYgKGRpZmZBcmVhKSBkaWZmQXJlYS5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRBcmVhKSByZW5kZXJlZEFyZWEucmVtb3ZlQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgY2xpY2sgaGFuZGxlciB0byB0b2dnbGUgY29sbGFwc2VcbiAgICAgICAgaGVhZGVyVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NvbGxhcHNlZCA9IHByZXZpZXdDb250ZW50Lmhhc0NsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIHByZXZpZXdDb250ZW50LnRvZ2dsZUNsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nLCAhaXNDb2xsYXBzZWQpO1xuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gcHJldmlld0hlYWRlci5xdWVyeVNlbGVjdG9yKCcuY29sbGFwc2UtaW5kaWNhdG9yJyk7XG4gICAgICAgICAgICBpZiAoaW5kaWNhdG9yKSB7XG4gICAgICAgICAgICAgICAgaW5kaWNhdG9yLnRleHRDb250ZW50ID0gaXNDb2xsYXBzZWQgPyAnXHUyNUJDICcgOiAnXHUyNUI2ICc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUb2dnbGUgY29sbGFwc2VkIGNsYXNzIG9uIHNlY3Rpb25cbiAgICAgICAgICAgIHByZXZpZXdTZWN0aW9uLnRvZ2dsZUNsYXNzKCdjb2xsYXBzZWQnLCAhaXNDb2xsYXBzZWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4geyBwcmV2aWV3QXJlYSwgcHJldmlld0NvbnRlbnRDb250YWluZXIsIHByZXZpZXdUYWJzQ29udGFpbmVyLCBhcHBseUJ1dHRvbiwgcmVqZWN0QnV0dG9uIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIGhpc3Rvcnkgc2VjdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBidWlsZEhpc3RvcnlTZWN0aW9uKFxuICAgICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgICAgICBvbkNsZWFySGlzdG9yeTogKCkgPT4gdm9pZFxuICAgICk6IEhUTUxVTGlzdEVsZW1lbnQge1xuICAgICAgICBjb25zdCBoaXN0b3J5U2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1oaXN0b3J5LXNlY3Rpb24gY2xhdWRlLWNvZGUtaGlkZGVuJyB9KTtcbiAgICAgICAgaGlzdG9yeVNlY3Rpb24uaWQgPSAnY2xhdWRlLWNvZGUtaGlzdG9yeS1zZWN0aW9uJztcblxuICAgICAgICBjb25zdCBoaXN0b3J5SGVhZGVyID0gaGlzdG9yeVNlY3Rpb24uY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2xhdWRlLWNvZGUtaGlzdG9yeS1oZWFkZXIgY29sbGFwc2libGUtaGVhZGVyJyB9KTtcbiAgICAgICAgY29uc3QgaGVhZGVyVGl0bGUgPSBoaXN0b3J5SGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjb2xsYXBzaWJsZS10aXRsZScgfSk7XG4gICAgICAgIC8vIFN0YXJ0IGNvbGxhcHNlZCBieSBkZWZhdWx0XG4gICAgICAgIGhlYWRlclRpdGxlLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjb2xsYXBzZS1pbmRpY2F0b3InLCB0ZXh0OiAnXHUyNUI2ICcgfSk7XG4gICAgICAgIGhlYWRlclRpdGxlLmFwcGVuZFRleHQodCgnaGlzdG9yeS50aXRsZScpKTtcblxuICAgICAgICBjb25zdCBjbGVhckhpc3RvcnlCdG4gPSBoaXN0b3J5SGVhZGVyLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgICAgICB0ZXh0OiB0KCdoaXN0b3J5LmNsZWFyQnV0dG9uJyksXG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1jbGVhci1oaXN0b3J5J1xuICAgICAgICB9KTtcbiAgICAgICAgY2xlYXJIaXN0b3J5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbnQgaGVhZGVyIGNsaWNrXG4gICAgICAgICAgICBvbkNsZWFySGlzdG9yeSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdGFydCBjb2xsYXBzZWQgYnkgZGVmYXVsdFxuICAgICAgICBjb25zdCBoaXN0b3J5TGlzdCA9IGhpc3RvcnlTZWN0aW9uLmNyZWF0ZUVsKCd1bCcsIHsgY2xzOiAnY2xhdWRlLWNvZGUtaGlzdG9yeS1saXN0IGNvbGxhcHNpYmxlLWNvbnRlbnQgY2xhdWRlLWNvZGUtaGlkZGVuJyB9KTtcbiAgICAgICAgaGlzdG9yeVNlY3Rpb24uYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXG4gICAgICAgIC8vIEFkZCBjbGljayBoYW5kbGVyIHRvIHRvZ2dsZSBjb2xsYXBzZVxuICAgICAgICBoZWFkZXJUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ29sbGFwc2VkID0gaGlzdG9yeUxpc3QuaGFzQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICAgICAgaGlzdG9yeUxpc3QudG9nZ2xlQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicsICFpc0NvbGxhcHNlZCk7XG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBoaXN0b3J5SGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5jb2xsYXBzZS1pbmRpY2F0b3InKTtcbiAgICAgICAgICAgIGlmIChpbmRpY2F0b3IpIHtcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3IudGV4dENvbnRlbnQgPSBpc0NvbGxhcHNlZCA/ICdcdTI1QkMgJyA6ICdcdTI1QjYgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRvZ2dsZSBjb2xsYXBzZWQgY2xhc3Mgb24gc2VjdGlvblxuICAgICAgICAgICAgaGlzdG9yeVNlY3Rpb24udG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlZCcsICFpc0NvbGxhcHNlZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBoaXN0b3J5TGlzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBXZWJTb2NrZXQgY29ubmVjdGlvbiBzdGF0dXMgYmFyXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkQ29ubmVjdGlvblN0YXR1c0Jhcihjb250YWluZXI6IEhUTUxFbGVtZW50KToge1xuICAgICAgICBzdGF0dXNCYXI6IEhUTUxEaXZFbGVtZW50O1xuICAgICAgICBzdGF0dXNJY29uOiBIVE1MU3BhbkVsZW1lbnQ7XG4gICAgICAgIHN0YXR1c1RleHQ6IEhUTUxTcGFuRWxlbWVudDtcbiAgICB9IHtcbiAgICAgICAgY29uc3Qgc3RhdHVzQmFyID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NsYXVkZS1jb2RlLWNvbm5lY3Rpb24tc3RhdHVzJyB9KTtcblxuICAgICAgICAvLyBTdGF0dXMgaWNvbiAoY29sb3JlZCBkb3QpXG4gICAgICAgIGNvbnN0IHN0YXR1c0ljb24gPSBzdGF0dXNCYXIuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1jb25uZWN0aW9uLWljb24gZGlzY29ubmVjdGVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdGF0dXMgdGV4dFxuICAgICAgICBjb25zdCBzdGF0dXNUZXh0ID0gc3RhdHVzQmFyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtY29ubmVjdGlvbi10ZXh0JyxcbiAgICAgICAgICAgIHRleHQ6ICdEaXNjb25uZWN0ZWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7IHN0YXR1c0Jhciwgc3RhdHVzSWNvbiwgc3RhdHVzVGV4dCB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjb25uZWN0aW9uIHN0YXR1cyBkaXNwbGF5XG4gICAgICovXG4gICAgc3RhdGljIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMoXG4gICAgICAgIHN0YXR1c0ljb246IEhUTUxTcGFuRWxlbWVudCxcbiAgICAgICAgc3RhdHVzVGV4dDogSFRNTFNwYW5FbGVtZW50LFxuICAgICAgICBzdGF0ZTogc3RyaW5nLFxuICAgICAgICBjb25uZWN0aW9uTW9kZT86ICdzdGRpbycgfCAnd2Vic29ja2V0J1xuICAgICk6IHZvaWQge1xuICAgICAgICAvLyBSZW1vdmUgYWxsIHN0YXRlIGNsYXNzZXNcbiAgICAgICAgc3RhdHVzSWNvbi5yZW1vdmVDbGFzcygnZGlzY29ubmVjdGVkJywgJ2Nvbm5lY3RpbmcnLCAnY29ubmVjdGVkJywgJ2Vycm9yJyk7XG5cbiAgICAgICAgLy8gQWRkIGFwcHJvcHJpYXRlIGNsYXNzIGFuZCB0ZXh0XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Nvbm5lY3RlZCc6XG4gICAgICAgICAgICAgICAgc3RhdHVzSWNvbi5hZGRDbGFzcygnY29ubmVjdGVkJyk7XG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dC50ZXh0Q29udGVudCA9IGNvbm5lY3Rpb25Nb2RlID09PSAnd2Vic29ja2V0J1xuICAgICAgICAgICAgICAgICAgICA/ICdXZWJTb2NrZXQgQ29ubmVjdGVkJ1xuICAgICAgICAgICAgICAgICAgICA6ICdDb25uZWN0ZWQgKHN0ZGlvKSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb25uZWN0aW5nJzpcbiAgICAgICAgICAgIGNhc2UgJ3JlY29ubmVjdGluZyc6XG4gICAgICAgICAgICAgICAgc3RhdHVzSWNvbi5hZGRDbGFzcygnY29ubmVjdGluZycpO1xuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQudGV4dENvbnRlbnQgPSAnQ29ubmVjdGluZy4uLic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgc3RhdHVzSWNvbi5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0LnRleHRDb250ZW50ID0gJ0Nvbm5lY3Rpb24gRXJyb3InO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGlzY29ubmVjdGVkJzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3RhdHVzSWNvbi5hZGRDbGFzcygnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dC50ZXh0Q29udGVudCA9IGNvbm5lY3Rpb25Nb2RlID09PSAnd2Vic29ja2V0J1xuICAgICAgICAgICAgICAgICAgICA/ICdXZWJTb2NrZXQgRGlzY29ubmVjdGVkJ1xuICAgICAgICAgICAgICAgICAgICA6ICdEaXNjb25uZWN0ZWQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwgIi8qKlxuICogT3V0cHV0IFJlbmRlcmVyIC0gSGFuZGxlcyByZW5kZXJpbmcgb2Ygb3V0cHV0IGFuZCBtYXJrZG93biBjb250ZW50XG4gKi9cblxuaW1wb3J0IHsgTWFya2Rvd25SZW5kZXJlciwgQ29tcG9uZW50LCBBcHAgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgeyBBZ2VudFN0ZXAgfSBmcm9tICcuLi9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEFnZW50QWN0aXZpdHlQYXJzZXIgfSBmcm9tICcuL3BhcnNlcnMvYWdlbnQtYWN0aXZpdHktcGFyc2VyJztcblxuZXhwb3J0IGNsYXNzIE91dHB1dFJlbmRlcmVyIHtcbiAgICBwcml2YXRlIG91dHB1dEFyZWE6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgb3V0cHV0U2VjdGlvbjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIGNvbXBvbmVudDogQ29tcG9uZW50O1xuICAgIHByaXZhdGUgYXBwOiBBcHA7XG4gICAgcHJpdmF0ZSBub3RlUGF0aDogc3RyaW5nO1xuICAgIHByaXZhdGUgY3VycmVudFN0cmVhbWluZ0VsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihvdXRwdXRBcmVhOiBIVE1MRGl2RWxlbWVudCwgY29tcG9uZW50OiBDb21wb25lbnQsIGFwcDogQXBwLCBub3RlUGF0aDogc3RyaW5nLCBvdXRwdXRTZWN0aW9uPzogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5vdXRwdXRBcmVhID0gb3V0cHV0QXJlYTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xuICAgICAgICB0aGlzLm5vdGVQYXRoID0gbm90ZVBhdGg7XG4gICAgICAgIHRoaXMuY3VycmVudFN0cmVhbWluZ0VsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm91dHB1dFNlY3Rpb24gPSBvdXRwdXRTZWN0aW9uIHx8IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBub3RlIHBhdGggZm9yIG1hcmtkb3duIHJlbmRlcmluZ1xuICAgICAqL1xuICAgIHNldE5vdGVQYXRoKG5vdGVQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub3RlUGF0aCA9IG5vdGVQYXRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBhIGxpbmUgb2Ygb3V0cHV0XG4gICAgICovXG4gICAgYXBwZW5kTGluZSh0ZXh0OiBzdHJpbmcsIGlzTWFya2Rvd246IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICAvLyBTaG93IHRoZSBvdXRwdXQgc2VjdGlvbiB3aGVuIHRoZXJlJ3MgY29udGVudFxuICAgICAgICB0aGlzLnNob3dPdXRwdXRTZWN0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbGluZSA9IHRoaXMub3V0cHV0QXJlYS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjbGF1ZGUtY29kZS1vdXRwdXQtbGluZScgfSk7XG5cbiAgICAgICAgaWYgKGlzTWFya2Rvd24pIHtcbiAgICAgICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbWFya2Rvd24tcmVuZGVyZWQnKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdm9pZCBNYXJrZG93blJlbmRlcmVyLnJlbmRlcih0aGlzLmFwcCwgdGV4dCwgbGluZSwgdGhpcy5ub3RlUGF0aCwgdGhpcy5jb21wb25lbnQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbTUFSS0RPV04gUkVOREVSIEVSUk9SXScsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBsaW5lLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXV0by1zY3JvbGwgdG8gYm90dG9tXG4gICAgICAgIHRoaXMub3V0cHV0QXJlYS5zY3JvbGxUb3AgPSB0aGlzLm91dHB1dEFyZWEuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBzdHJlYW1pbmcgdGV4dCAoYWNjdW11bGF0ZXMgaW4gdGhlIHNhbWUgZWxlbWVudClcbiAgICAgKi9cbiAgICBhcHBlbmRTdHJlYW1pbmdUZXh0KHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAvLyBTaG93IHRoZSBvdXRwdXQgc2VjdGlvbiB3aGVuIHRoZXJlJ3MgY29udGVudFxuICAgICAgICB0aGlzLnNob3dPdXRwdXRTZWN0aW9uKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBzdHJlYW1pbmcgZWxlbWVudCBpZiBuZWVkZWRcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRTdHJlYW1pbmdFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdHJlYW1pbmdFbGVtZW50ID0gdGhpcy5vdXRwdXRBcmVhLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtb3V0cHV0LWxpbmUgY2xhdWRlLWNvZGUtc3RyZWFtaW5nJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXcmFwIGVhY2ggY2h1bmsgaW4gYSBzcGFuIHdpdGggZmFkZS1pbiBhbmltYXRpb25cbiAgICAgICAgdGhpcy5jdXJyZW50U3RyZWFtaW5nRWxlbWVudC5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgICAgIGNsczogJ3N0cmVhbWluZy10ZXh0LWNodW5rJyxcbiAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXV0by1zY3JvbGwgdG8gYm90dG9tXG4gICAgICAgIHRoaXMub3V0cHV0QXJlYS5zY3JvbGxUb3AgPSB0aGlzLm91dHB1dEFyZWEuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmlzaCB0aGUgY3VycmVudCBzdHJlYW1pbmcgYmxvY2tcbiAgICAgKi9cbiAgICBmaW5pc2hTdHJlYW1pbmdCbG9jaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RyZWFtaW5nRWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgYWxsIG91dHB1dFxuICAgICAqL1xuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm91dHB1dEFyZWEuZW1wdHkoKTtcbiAgICAgICAgLy8gSGlkZSB0aGUgb3V0cHV0IHNlY3Rpb24gd2hlbiBjbGVhcmVkXG4gICAgICAgIHRoaXMuaGlkZU91dHB1dFNlY3Rpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHRoZSBvdXRwdXQgc2VjdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgc2hvd091dHB1dFNlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm91dHB1dFNlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0U2VjdGlvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBvdXRwdXQgc2VjdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgaGlkZU91dHB1dFNlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm91dHB1dFNlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0U2VjdGlvbi5hZGRDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBhbmQgZXh0cmFjdCBhZ2VudCBhY3Rpdml0eSBmcm9tIG91dHB1dCB0ZXh0XG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlQWdlbnRBY3Rpdml0eSh0ZXh0OiBzdHJpbmcpOiBBZ2VudFN0ZXAgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIEFnZW50QWN0aXZpdHlQYXJzZXIucGFyc2VBZ2VudEFjdGl2aXR5KHRleHQpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBBZ2VudFN0ZXAgfSBmcm9tICcuLi8uLi9jb3JlL3R5cGVzJztcblxuLyoqXG4gKiBVdGlsaXR5IGZvciBwYXJzaW5nIGFnZW50IGFjdGl2aXR5IGZyb20gb3V0cHV0IHRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIEFnZW50QWN0aXZpdHlQYXJzZXIge1xuICAgIC8qKlxuICAgICAqIFBhcnNlIGFuZCBleHRyYWN0IGFnZW50IGFjdGl2aXR5IGZyb20gb3V0cHV0IHRleHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0ZXh0IE91dHB1dCB0ZXh0IHRvIHBhcnNlXG4gICAgICogQHJldHVybnMgQWdlbnRTdGVwIG9iamVjdCBpZiBhY3Rpdml0eSBkZXRlY3RlZCwgbnVsbCBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VBZ2VudEFjdGl2aXR5KHRleHQ6IHN0cmluZyk6IEFnZW50U3RlcCB8IG51bGwge1xuICAgICAgICAvLyBTeXN0ZW0gZXZlbnRzXG4gICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCdSZXN1bWluZyBzZXNzaW9uOicpIHx8IHRleHQuaW5jbHVkZXMoJ1x1MjcxMyBSZXN1bWluZyBzZXNzaW9uOicpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaEFuZENyZWF0ZShcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgIC8oPzpcdTI3MTMgKT9SZXN1bWluZyBzZXNzaW9uOiAoLispLyxcbiAgICAgICAgICAgICAgICAnXHVEODNEXHVERDA0JyxcbiAgICAgICAgICAgICAgICAnUmVzdW1lJyxcbiAgICAgICAgICAgICAgICAncmVzdW1lJyxcbiAgICAgICAgICAgICAgICAobWF0Y2gpID0+IHRoaXMudHJ1bmNhdGUobWF0Y2hbMV0sIDgsIGZhbHNlKSArICcuLi4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRleHQuaW5jbHVkZXMoJ1x1MjE5MiBTdGFydGluZyBuZXcgc2Vzc2lvbicpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTdGVwKCdcdUQ4M0NcdUREOTUnLCAnTmV3JywgJ3Nlc3Npb24gc3RhcnRlZCcsICduZXctc2Vzc2lvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRleHQuaW5jbHVkZXMoJ1ZhdWx0IGFjY2VzcyBlbmFibGVkOicpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaEFuZENyZWF0ZShcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgIC9WYXVsdCBhY2Nlc3MgZW5hYmxlZDogKC4rKS8sXG4gICAgICAgICAgICAgICAgJ1x1RDgzRFx1RERDMlx1RkUwRicsXG4gICAgICAgICAgICAgICAgJ1ZhdWx0JyxcbiAgICAgICAgICAgICAgICAndmF1bHQnLFxuICAgICAgICAgICAgICAgIChtYXRjaCkgPT4gdGhpcy5leHRyYWN0RmlsZW5hbWUobWF0Y2hbMV0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRleHQuaW5jbHVkZXMoJ1x1RDgzRFx1REQyNyBTZXNzaW9uIGluaXRpYWxpemVkOicpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaEFuZENyZWF0ZShcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgIC9cdUQ4M0RcdUREMjcgU2Vzc2lvbiBpbml0aWFsaXplZDogKC4rKS8sXG4gICAgICAgICAgICAgICAgJ1x1RDgzRFx1REU4MCcsXG4gICAgICAgICAgICAgICAgJ0luaXRpYWxpemUnLFxuICAgICAgICAgICAgICAgICdpbml0J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCdcdUQ4M0RcdURDQkUgU2Vzc2lvbiBJRDonKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hBbmRDcmVhdGUoXG4gICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICAvXHVEODNEXHVEQ0JFIFNlc3Npb24gSUQ6ICguKykvLFxuICAgICAgICAgICAgICAgICdcdUQ4M0RcdURDQkUnLFxuICAgICAgICAgICAgICAgICdTZXNzaW9uJyxcbiAgICAgICAgICAgICAgICAnc2Vzc2lvbicsXG4gICAgICAgICAgICAgICAgKG1hdGNoKSA9PiB0aGlzLnRydW5jYXRlKG1hdGNoWzFdLCA4LCBmYWxzZSkgKyAnLi4uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCdcdUQ4M0RcdURDRTYgQXZhaWxhYmxlIHRvb2xzOicpKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHRleHQubWF0Y2goL1x1RDgzRFx1RENFNiBBdmFpbGFibGUgdG9vbHM6ICguKykvKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb2xzID0gbWF0Y2hbMV0uc3BsaXQoJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU3RlcCgnXHVEODNEXHVEQ0U2JywgJ1Rvb2xzJywgYCR7dG9vbHMubGVuZ3RofSBhdmFpbGFibGVgLCAndG9vbHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvb2wgdXNhZ2UgKHNwZWNpYWwgY2FzZTogYWN0aW9uIGNvbWVzIGZyb20gbWF0Y2gpXG4gICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCdcdUQ4M0RcdUREMjcgVXNpbmcgdG9vbDonKSkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9cdUQ4M0RcdUREMjcgVXNpbmcgdG9vbDogKFxcdyspLyk7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTdGVwKCdcdUQ4M0RcdUREMjcnLCBtYXRjaFsxXSwgJ3N0YXJ0aW5nLi4uJywgYHRvb2wtJHttYXRjaFsxXX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhc2ggY29tbWFuZHNcbiAgICAgICAgaWYgKHRleHQuaW5jbHVkZXMoJyQgJykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoQW5kQ3JlYXRlKFxuICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgL1xcJCAoLispLyxcbiAgICAgICAgICAgICAgICAnXHUyNkExJyxcbiAgICAgICAgICAgICAgICAnQmFzaCcsXG4gICAgICAgICAgICAgICAgJ2Jhc2gnLFxuICAgICAgICAgICAgICAgIChtYXRjaCkgPT4gdGhpcy50cnVuY2F0ZShtYXRjaFsxXSwgNjApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2ViIHNlYXJjaCB3aXRoIHF1ZXJ5XG4gICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCdRdWVyeTonKSAmJiAodGV4dC5pbmNsdWRlcygnXHVEODNEXHVERDBEJykgfHwgdGV4dC5pbmNsdWRlcygnc2VhcmNoJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaEFuZENyZWF0ZShcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgIC8oPzpcdUQ4M0RcdUREMEQgKT9RdWVyeTogXCIoLis/KVwiLyxcbiAgICAgICAgICAgICAgICAnXHVEODNEXHVERDBEJyxcbiAgICAgICAgICAgICAgICAnU2VhcmNoJyxcbiAgICAgICAgICAgICAgICAnc2VhcmNoJyxcbiAgICAgICAgICAgICAgICAobWF0Y2gpID0+IHRoaXMudHJ1bmNhdGUobWF0Y2hbMV0sIDUwKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvb2wgcmVzdWx0c1xuICAgICAgICBpZiAodGV4dC5pbmNsdWRlcygnXHVEODNEXHVEQ0U1IFRvb2wgcmVzdWx0JykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoQW5kQ3JlYXRlKFxuICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgL1x1RDgzRFx1RENFNSBUb29sIHJlc3VsdCBcXCgoLis/KVxcKTovLFxuICAgICAgICAgICAgICAgICdcdUQ4M0RcdURDRTUnLFxuICAgICAgICAgICAgICAgICdSZXN1bHQnLFxuICAgICAgICAgICAgICAgICdyZXN1bHQnLFxuICAgICAgICAgICAgICAgIChtYXRjaCkgPT4gdGhpcy50cnVuY2F0ZShtYXRjaFsxXSwgMjApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2ViIGZldGNoIHdpdGggVVJMXG4gICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCdcdUQ4M0NcdURGMTAgVVJMOicpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaEFuZENyZWF0ZShcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgIC9cdUQ4M0NcdURGMTAgVVJMOiAoLispLyxcbiAgICAgICAgICAgICAgICAnXHVEODNDXHVERjEwJyxcbiAgICAgICAgICAgICAgICAnRmV0Y2gnLFxuICAgICAgICAgICAgICAgICdmZXRjaCcsXG4gICAgICAgICAgICAgICAgKG1hdGNoKSA9PiB0aGlzLnRydW5jYXRlKG1hdGNoWzFdLCA1MClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaWxlIG9wZXJhdGlvbnMgd2l0aCBhY3R1YWwgZmlsZW5hbWVzXG4gICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCdcdUQ4M0RcdURDRDYnKSAmJiAodGV4dC5pbmNsdWRlcygnRmlsZTonKSB8fCB0ZXh0LmluY2x1ZGVzKCdSZWFkaW5nIGZpbGU6JykpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaEFuZENyZWF0ZShcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgIC8oPzpGaWxlOnxSZWFkaW5nIGZpbGU6KVxccysoLispLyxcbiAgICAgICAgICAgICAgICAnXHVEODNEXHVEQ0Q2JyxcbiAgICAgICAgICAgICAgICAnUmVhZCcsXG4gICAgICAgICAgICAgICAgJ3JlYWQnLFxuICAgICAgICAgICAgICAgIChtYXRjaCkgPT4gdGhpcy5leHRyYWN0RmlsZW5hbWUobWF0Y2hbMV0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRleHQuaW5jbHVkZXMoJ1x1MjcwRFx1RkUwRicpICYmICh0ZXh0LmluY2x1ZGVzKCdGaWxlOicpIHx8IHRleHQuaW5jbHVkZXMoJ1dyaXRpbmcgZmlsZTonKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoQW5kQ3JlYXRlKFxuICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgLyg/OkZpbGU6fFdyaXRpbmcgZmlsZTopXFxzKyguKykvLFxuICAgICAgICAgICAgICAgICdcdTI3MERcdUZFMEYnLFxuICAgICAgICAgICAgICAgICdXcml0ZScsXG4gICAgICAgICAgICAgICAgJ3dyaXRlJyxcbiAgICAgICAgICAgICAgICAobWF0Y2gpID0+IHRoaXMuZXh0cmFjdEZpbGVuYW1lKG1hdGNoWzFdKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCdcdTI3MEZcdUZFMEYnKSAmJiAodGV4dC5pbmNsdWRlcygnRmlsZTonKSB8fCB0ZXh0LmluY2x1ZGVzKCdFZGl0aW5nIGZpbGU6JykpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaEFuZENyZWF0ZShcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgIC8oPzpGaWxlOnxFZGl0aW5nIGZpbGU6KVxccysoLispLyxcbiAgICAgICAgICAgICAgICAnXHUyNzBGXHVGRTBGJyxcbiAgICAgICAgICAgICAgICAnRWRpdCcsXG4gICAgICAgICAgICAgICAgJ2VkaXQnLFxuICAgICAgICAgICAgICAgIChtYXRjaCkgPT4gdGhpcy5leHRyYWN0RmlsZW5hbWUobWF0Y2hbMV0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGF0dGVybiBzZWFyY2hlc1xuICAgICAgICBpZiAodGV4dC5pbmNsdWRlcygnUGF0dGVybjonKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hBbmRDcmVhdGUoXG4gICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICAvUGF0dGVybjogKC4rKS8sXG4gICAgICAgICAgICAgICAgJ1x1RDgzRFx1REQwRScsXG4gICAgICAgICAgICAgICAgJ1NlYXJjaCcsXG4gICAgICAgICAgICAgICAgJ3BhdHRlcm4nLFxuICAgICAgICAgICAgICAgIChtYXRjaCkgPT4gdGhpcy50cnVuY2F0ZShtYXRjaFsxXSwgNDApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWdlbnQgbGF1bmNoZXNcbiAgICAgICAgaWYgKHRleHQuaW5jbHVkZXMoJ0FnZW50OicpIHx8IHRleHQuaW5jbHVkZXMoJ1R5cGU6JykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoQW5kQ3JlYXRlKFxuICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgLyg/OkFnZW50OnxUeXBlOilcXHMrKC4rKS8sXG4gICAgICAgICAgICAgICAgJ1x1RDgzRVx1REQxNicsXG4gICAgICAgICAgICAgICAgJ0FnZW50JyxcbiAgICAgICAgICAgICAgICAnYWdlbnQnXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29tcGxldGlvbiByZXN1bHRzXG4gICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCdcdTI3MDUgQ29tcGxldGUhJykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVN0ZXAoJ1x1MjcwNScsICdDb21wbGV0ZScsICdTdWNjZXNzJywgJ2NvbXBsZXRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGV4dC5pbmNsdWRlcygnXHVEODNEXHVEQ0IwIENvc3Q6JykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoQW5kQ3JlYXRlKFxuICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgL1x1RDgzRFx1RENCMCBDb3N0OiBcXCQoXFxkK1xcLlxcZCspLyxcbiAgICAgICAgICAgICAgICAnXHVEODNEXHVEQ0IwJyxcbiAgICAgICAgICAgICAgICAnQ29zdCcsXG4gICAgICAgICAgICAgICAgJ2Nvc3QnLFxuICAgICAgICAgICAgICAgIChtYXRjaCkgPT4gYCQke21hdGNoWzFdfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGV4dC5pbmNsdWRlcygnXHVEODNEXHVEQ0NBIFRva2VuczonKSkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9cdUQ4M0RcdURDQ0EgVG9rZW5zOiAoXFxkKykgaW4sIChcXGQrKSBvdXQvKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVN0ZXAoJ1x1RDgzRFx1RENDQScsICdUb2tlbnMnLCBgJHttYXRjaFsxXX0gXHUyMTkyICR7bWF0Y2hbMl19YCwgJ3Rva2VucycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRleHQuaW5jbHVkZXMoJ1x1MjNGMVx1RkUwRicpICYmIHRleHQuaW5jbHVkZXMoJ0R1cmF0aW9uOicpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaEFuZENyZWF0ZShcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgIC9cdTIzRjFcdUZFMEZcXHN7Mn1EdXJhdGlvbjogKFxcZCspbXMvLFxuICAgICAgICAgICAgICAgICdcdTIzRjFcdUZFMEYnLFxuICAgICAgICAgICAgICAgICdEdXJhdGlvbicsXG4gICAgICAgICAgICAgICAgJ2R1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICAobWF0Y2gpID0+IGAkeyhwYXJzZUludChtYXRjaFsxXSkgLyAxMDAwKS50b0ZpeGVkKDEpfXNgXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluYWwgcmVzcG9uc2UgaW5kaWNhdG9yXG4gICAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKCdcdTI3MTMgQ2xhdWRlIENvZGUgY29tcGxldGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVN0ZXAoJ1x1RDgzQ1x1REY4OScsICdGaW5pc2hlZCcsICdTdWNjZXNzZnVsbHknLCAnZmluaXNoZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciB0byBjcmVhdGUgQWdlbnRTdGVwIGZyb20gcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVN0ZXAoXG4gICAgICAgIGljb246IHN0cmluZyxcbiAgICAgICAgYWN0aW9uOiBzdHJpbmcsXG4gICAgICAgIHRhcmdldDogc3RyaW5nLFxuICAgICAgICBrZXlQcmVmaXg6IHN0cmluZ1xuICAgICk6IEFnZW50U3RlcCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAga2V5OiBgJHtrZXlQcmVmaXh9LSR7RGF0ZS5ub3coKX1gXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIHRvIG1hdGNoIHBhdHRlcm4gYW5kIGNyZWF0ZSBzdGVwIHdpdGggb3B0aW9uYWwgdGFyZ2V0IHRyYW5zZm9ybWF0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgbWF0Y2hBbmRDcmVhdGUoXG4gICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgcGF0dGVybjogUmVnRXhwLFxuICAgICAgICBpY29uOiBzdHJpbmcsXG4gICAgICAgIGFjdGlvbjogc3RyaW5nLFxuICAgICAgICBrZXlQcmVmaXg6IHN0cmluZyxcbiAgICAgICAgdGFyZ2V0VHJhbnNmb3JtPzogKG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSA9PiBzdHJpbmdcbiAgICApOiBBZ2VudFN0ZXAgfCBudWxsIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKHBhdHRlcm4pO1xuICAgICAgICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRUcmFuc2Zvcm0gPyB0YXJnZXRUcmFuc2Zvcm0obWF0Y2gpIDogbWF0Y2hbMV07XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVN0ZXAoaWNvbiwgYWN0aW9uLCB0YXJnZXQsIGtleVByZWZpeCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIHRvIGV4dHJhY3QgZmlsZW5hbWUgZnJvbSBwYXRoXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgZXh0cmFjdEZpbGVuYW1lKHBhdGg6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIgPSA0MCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gcGF0aC5zcGxpdCgnLycpLnBvcCgpIHx8IHBhdGg7XG4gICAgICAgIHJldHVybiBmaWxlbmFtZS5zdWJzdHJpbmcoMCwgbWF4TGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgdG8gdHJ1bmNhdGUgdGV4dFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHRydW5jYXRlKHRleHQ6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIsIGFkZEVsbGlwc2lzOiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA8PSBtYXhMZW5ndGgpIHJldHVybiB0ZXh0O1xuICAgICAgICByZXR1cm4gYWRkRWxsaXBzaXMgPyB0ZXh0LnN1YnN0cmluZygwLCBtYXhMZW5ndGgpICsgJy4uLicgOiB0ZXh0LnN1YnN0cmluZygwLCBtYXhMZW5ndGgpO1xuICAgIH1cbn1cbiIsICIvKipcbiAqIEFnZW50IEFjdGl2aXR5IFRyYWNrZXIgLSBNYW5hZ2VzIGFnZW50IGFjdGl2aXR5IGRpc3BsYXlcbiAqL1xuXG5pbXBvcnQgeyBBZ2VudFN0ZXAgfSBmcm9tICcuLi9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIEFnZW50QWN0aXZpdHlUcmFja2VyIHtcbiAgICBwcml2YXRlIGFnZW50U3RlcHM6IE1hcDxzdHJpbmcsIEhUTUxFbGVtZW50PiA9IG5ldyBNYXAoKTtcbiAgICBwcml2YXRlIGFnZW50U3RlcHNDb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBhZ2VudEFjdGl2aXR5U2VjdGlvbjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIGFnZW50Q29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgc3RlcFRpbWVyczogTWFwPHN0cmluZywgTm9kZUpTLlRpbWVvdXQ+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgc3RlcFN0YXJ0VGltZXM6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKCk7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoZSB0cmFja2VyIHdpdGggRE9NIGVsZW1lbnRzXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZShhZ2VudEFjdGl2aXR5U2VjdGlvbjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZ2VudEFjdGl2aXR5U2VjdGlvbiA9IGFnZW50QWN0aXZpdHlTZWN0aW9uO1xuICAgICAgICB0aGlzLmFnZW50U3RlcHNDb250YWluZXIgPSBhZ2VudEFjdGl2aXR5U2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcjY2xhdWRlLWNvZGUtYWdlbnQtc3RlcHMnKTtcbiAgICAgICAgLy8gR2V0IHJlZmVyZW5jZSB0byB0aGUgbWFpbiBjb250YWluZXJcbiAgICAgICAgdGhpcy5hZ2VudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGF1ZGUtY29kZS1hZ2VudC1jb250YWluZXInKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgb3IgdXBkYXRlIGFuIGFnZW50IHN0ZXBcbiAgICAgKi9cbiAgICBhZGRTdGVwKHN0ZXA6IEFnZW50U3RlcCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuYWdlbnRTdGVwc0NvbnRhaW5lciB8fCAhdGhpcy5hZ2VudEFjdGl2aXR5U2VjdGlvbikgcmV0dXJuO1xuXG4gICAgICAgIC8vIFNob3cgdGhlIGFjdGl2aXR5IHNlY3Rpb24gd2hlbiBhZGRpbmcgc3RlcHNcbiAgICAgICAgdGhpcy5hZ2VudEFjdGl2aXR5U2VjdGlvbi5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtaGlkZGVuJyk7XG5cbiAgICAgICAgLy8gU2hvdyB0aGUgYWdlbnQgY29udGFpbmVyXG4gICAgICAgIGlmICh0aGlzLmFnZW50Q29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmFnZW50Q29udGFpbmVyLnJlbW92ZUNsYXNzKCdjbGF1ZGUtY29kZS1oaWRkZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSB0aGlzIHN0ZXAgLSB1cGRhdGUgaXQgaWYgc29cbiAgICAgICAgaWYgKHRoaXMuYWdlbnRTdGVwcy5oYXMoc3RlcC5rZXkpKSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ0VsID0gdGhpcy5hZ2VudFN0ZXBzLmdldChzdGVwLmtleSkhO1xuXG4gICAgICAgICAgICAvLyBJZiBkdXJhdGlvbiBpcyBwcm92aWRlZCwgdGhpcyBzdGVwIGlzIGNvbXBsZXRlXG4gICAgICAgICAgICBpZiAoc3RlcC5kdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RvcCB0aGUgbGl2ZSB0aW1lciBmb3IgdGhpcyBzdGVwXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wU3RlcFRpbWVyKHN0ZXAua2V5KTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBvbGQgZHVyYXRpb24gaWYgZXhpc3RzXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkRHVyYXRpb24gPSBleGlzdGluZ0VsLnF1ZXJ5U2VsZWN0b3IoJy5hZ2VudC1zdGVwLWR1cmF0aW9uJyk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZER1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZER1cmF0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFkZCBmaW5hbCBkdXJhdGlvbiBiYWRnZVxuICAgICAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uVGV4dCA9IHRoaXMuZm9ybWF0RHVyYXRpb24oc3RlcC5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdFbC5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzOiAnYWdlbnQtc3RlcC1kdXJhdGlvbiBhZ2VudC1zdGVwLWR1cmF0aW9uLWNvbXBsZXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZHVyYXRpb25UZXh0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHN0ZXAgZWxlbWVudFxuICAgICAgICBjb25zdCBzdGVwRWwgPSB0aGlzLmFnZW50U3RlcHNDb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLWFnZW50LXN0ZXAnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0ZXBFbC5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgICAgIGNsczogJ2FnZW50LXN0ZXAtaWNvbicsXG4gICAgICAgICAgICB0ZXh0OiBzdGVwLmljb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RlcEVsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICAgICAgY2xzOiAnYWdlbnQtc3RlcC1hY3Rpb24nLFxuICAgICAgICAgICAgdGV4dDogc3RlcC5hY3Rpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RlcEVsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICAgICAgY2xzOiAnYWdlbnQtc3RlcC10YXJnZXQnLFxuICAgICAgICAgICAgdGV4dDogc3RlcC50YXJnZXRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHRpbWluZyBpbmZvcm1hdGlvblxuICAgICAgICBpZiAoc3RlcC5kdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTdGVwIGlzIGFscmVhZHkgY29tcGxldGVcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uVGV4dCA9IHRoaXMuZm9ybWF0RHVyYXRpb24oc3RlcC5kdXJhdGlvbik7XG4gICAgICAgICAgICBzdGVwRWwuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgICAgY2xzOiAnYWdlbnQtc3RlcC1kdXJhdGlvbiBhZ2VudC1zdGVwLWR1cmF0aW9uLWNvbXBsZXRlJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiBkdXJhdGlvblRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHN0ZXAuc3RhcnRUaW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFN0ZXAgaXMgaW4gcHJvZ3Jlc3MgLSBzaG93IGxpdmUgZWxhcHNlZCB0aW1lXG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbkVsID0gc3RlcEVsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICAgICAgICAgIGNsczogJ2FnZW50LXN0ZXAtZHVyYXRpb24gYWdlbnQtc3RlcC1kdXJhdGlvbi1saXZlJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnMC4wcydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBTdGFydCBsaXZlIHRpbWVyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U3RlcFRpbWVyKHN0ZXAua2V5LCBzdGVwLnN0YXJ0VGltZSwgZHVyYXRpb25FbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9yZSB0aGUgZWxlbWVudFxuICAgICAgICB0aGlzLmFnZW50U3RlcHMuc2V0KHN0ZXAua2V5LCBzdGVwRWwpO1xuXG4gICAgICAgIC8vIEF1dG8tc2Nyb2xsIHRvIHRoZSBib3R0b20gdG8gc2hvdyB0aGUgbGF0ZXN0IHN0ZXBcbiAgICAgICAgdGhpcy5hZ2VudFN0ZXBzQ29udGFpbmVyLnNjcm9sbFRvcCA9IHRoaXMuYWdlbnRTdGVwc0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgYSBsaXZlIHRpbWVyIGZvciBhIHN0ZXBcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXJ0U3RlcFRpbWVyKGtleTogc3RyaW5nLCBzdGFydFRpbWU6IG51bWJlciwgZHVyYXRpb25FbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgLy8gU3RvcmUgc3RhcnQgdGltZVxuICAgICAgICB0aGlzLnN0ZXBTdGFydFRpbWVzLnNldChrZXksIHN0YXJ0VGltZSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGV2ZXJ5IDEwMG1zXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSB0aGlzLmZvcm1hdER1cmF0aW9uKGVsYXBzZWQpO1xuICAgICAgICAgICAgZHVyYXRpb25FbC50ZXh0Q29udGVudCA9IGZvcm1hdHRlZDtcbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICB0aGlzLnN0ZXBUaW1lcnMuc2V0KGtleSwgdGltZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3AgdGhlIGxpdmUgdGltZXIgZm9yIGEgc3RlcFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RvcFN0ZXBUaW1lcihrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aW1lciA9IHRoaXMuc3RlcFRpbWVycy5nZXQoa2V5KTtcbiAgICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuc3RlcFRpbWVycy5kZWxldGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0ZXBTdGFydFRpbWVzLmRlbGV0ZShrZXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBhZ2VudCBzdGVwc1xuICAgICAqL1xuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICAvLyBTdG9wIGFsbCB0aW1lcnNcbiAgICAgICAgZm9yIChjb25zdCB0aW1lciBvZiB0aGlzLnN0ZXBUaW1lcnMudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RlcFRpbWVycy5jbGVhcigpO1xuICAgICAgICB0aGlzLnN0ZXBTdGFydFRpbWVzLmNsZWFyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWdlbnRTdGVwc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5hZ2VudFN0ZXBzQ29udGFpbmVyLmVtcHR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZ2VudFN0ZXBzLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gSGlkZSB0aGUgYWN0aXZpdHkgY29sdW1uIHdoZW4gZW1wdHlcbiAgICAgICAgaWYgKHRoaXMuYWdlbnRBY3Rpdml0eVNlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYWdlbnRBY3Rpdml0eVNlY3Rpb24uYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLWhpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm90ZTogV2UgZG9uJ3QgaGlkZSB0aGUgbWFpbiBjb250YWluZXIgaGVyZSBiZWNhdXNlIHRoZSB0b2RvIGxpc3QgbWlnaHQgc3RpbGwgYmUgdmlzaWJsZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc3RvcmUgYWdlbnQgc3RlcHMgZnJvbSBhbiBhcnJheVxuICAgICAqL1xuICAgIHJlc3RvcmUoc3RlcHM6IEFnZW50U3RlcFtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgZm9yIChjb25zdCBzdGVwIG9mIHN0ZXBzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFN0ZXAoc3RlcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGN1cnJlbnQgc3RlcHNcbiAgICAgKi9cbiAgICBnZXRTdGVwcygpOiBBZ2VudFN0ZXBbXSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuYWdlbnRTdGVwcy5rZXlzKCkpLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2FjdGlvbiwgdGFyZ2V0XSA9IGtleS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgY29uc3Qgc3RlcEVsID0gdGhpcy5hZ2VudFN0ZXBzLmdldChrZXkpITtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBzdGVwRWwucXVlcnlTZWxlY3RvcignLmFnZW50LXN0ZXAtaWNvbicpPy50ZXh0Q29udGVudCB8fCAnXHVEODNEXHVERDI3JztcbiAgICAgICAgICAgIHJldHVybiB7IGljb24sIGFjdGlvbiwgdGFyZ2V0LCBrZXkgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IGR1cmF0aW9uIGluIGEgaHVtYW4tcmVhZGFibGUgd2F5XG4gICAgICovXG4gICAgcHJpdmF0ZSBmb3JtYXREdXJhdGlvbihtczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG1zIDwgMTAwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGAke21zfW1zYDtcbiAgICAgICAgfSBlbHNlIGlmIChtcyA8IDYwMDAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7KG1zIC8gMTAwMCkudG9GaXhlZCgxKX1zYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKG1zIC8gNjAwMDApO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG1zICUgNjAwMDApIC8gMTAwMCk7XG4gICAgICAgICAgICByZXR1cm4gYCR7bWludXRlc31tICR7c2Vjb25kc31zYDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsICIvKipcbiAqIE5vdGUgQ29udGV4dCBNYW5hZ2VyIC0gTWFuYWdlcyBwZXItbm90ZSBjb252ZXJzYXRpb24gY29udGV4dHNcbiAqL1xuXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyBOb3RlQ29udGV4dCB9IGZyb20gJy4uL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQ2xhdWRlQ29kZVJ1bm5lciB9IGZyb20gJy4uL2NvcmUvY2xhdWRlLWNvZGUtcnVubmVyJztcbmltcG9ydCB7IENsYXVkZUNvZGVTZXR0aW5ncyB9IGZyb20gJy4uL2NvcmUvc2V0dGluZ3MnO1xuXG5pbnRlcmZhY2UgU2Vzc2lvbkRhdGEge1xuICAgIGhpc3Rvcnk/OiB1bmtub3duW107XG4gICAgc2Vzc2lvbklkPzogc3RyaW5nO1xuICAgIG91dHB1dExpbmVzPzogc3RyaW5nW107XG4gICAgYWdlbnRTdGVwcz86IHVua25vd25bXTtcbiAgICBub3RlUGF0aD86IHN0cmluZztcbiAgICBwZW5kaW5nUHJldmlld0NvbnRlbnQ/OiBzdHJpbmc7XG4gICAgb3JpZ2luYWxQcmV2aWV3Q29udGVudD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIE5vdGVDb250ZXh0TWFuYWdlciB7XG4gICAgcHJpdmF0ZSBjb250ZXh0czogTWFwPHN0cmluZywgTm90ZUNvbnRleHQ+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgc2V0dGluZ3M6IENsYXVkZUNvZGVTZXR0aW5ncztcbiAgICBwcml2YXRlIGRhdGFEaXI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBDbGF1ZGVDb2RlU2V0dGluZ3MsIGRhdGFEaXI6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuZGF0YURpciA9IGRhdGFEaXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG9yIGNyZWF0ZSBjb250ZXh0IGZvciBhIG5vdGVcbiAgICAgKi9cbiAgICBnZXRDb250ZXh0KG5vdGVQYXRoOiBzdHJpbmcpOiBOb3RlQ29udGV4dCB7XG4gICAgICAgIGlmICghdGhpcy5jb250ZXh0cy5oYXMobm90ZVBhdGgpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzLnNldChub3RlUGF0aCwgdGhpcy5jcmVhdGVOZXdDb250ZXh0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzLmdldChub3RlUGF0aCkhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBlbXB0eSBjb250ZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVOZXdDb250ZXh0KCk6IE5vdGVDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgc2Vzc2lvbklkOiBudWxsLFxuICAgICAgICAgICAgY3VycmVudFJlc3BvbnNlOiBudWxsLFxuICAgICAgICAgICAgY3VycmVudFJlcXVlc3Q6IG51bGwsXG4gICAgICAgICAgICBvdXRwdXRMaW5lczogW10sXG4gICAgICAgICAgICBhZ2VudFN0ZXBzOiBbXSxcbiAgICAgICAgICAgIHJ1bm5lcjogbmV3IENsYXVkZUNvZGVSdW5uZXIodGhpcy5zZXR0aW5ncyksXG4gICAgICAgICAgICBpc1J1bm5pbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhbGwgbm90ZSBjb250ZXh0cyBmcm9tIGRpc2tcbiAgICAgKi9cbiAgICBsb2FkQ29udGV4dHModmF1bHRQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dHNEaXIgPSBwYXRoLmpvaW4odmF1bHRQYXRoLCB0aGlzLmRhdGFEaXIpO1xuXG4gICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhjb250ZXh0c0RpcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlYWQgYWxsIG5vdGUgY29udGV4dCBkaXJlY3Rvcmllc1xuICAgICAgICBjb25zdCBub3RlRGlycyA9IGZzLnJlYWRkaXJTeW5jKGNvbnRleHRzRGlyKTtcblxuICAgICAgICBmb3IgKGNvbnN0IG5vdGVIYXNoIG9mIG5vdGVEaXJzKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0RmlsZSA9IHBhdGguam9pbihjb250ZXh0c0Rpciwgbm90ZUhhc2gsICdjb250ZXh0Lmpzb24nKTtcblxuICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoY29udGV4dEZpbGUpKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNvbnRleHRGaWxlLCAndXRmOCcpKSBhcyBTZXNzaW9uRGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZWNvbnN0cnVjdCB0aGUgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0OiBOb3RlQ29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk6IChkYXRhLmhpc3RvcnkgPz8gW10pIGFzIE5vdGVDb250ZXh0WydoaXN0b3J5J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uSWQ6IGRhdGEuc2Vzc2lvbklkID8/IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVzcG9uc2U6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVxdWVzdDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dExpbmVzOiBkYXRhLm91dHB1dExpbmVzID8/IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWdlbnRTdGVwczogKGRhdGEuYWdlbnRTdGVwcyA/PyBbXSkgYXMgTm90ZUNvbnRleHRbJ2FnZW50U3RlcHMnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5lcjogbmV3IENsYXVkZUNvZGVSdW5uZXIodGhpcy5zZXR0aW5ncyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1J1bm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1ByZXZpZXdDb250ZW50OiBkYXRhLnBlbmRpbmdQcmV2aWV3Q29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsUHJldmlld0NvbnRlbnQ6IGRhdGEub3JpZ2luYWxQcmV2aWV3Q29udGVudFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIHVzaW5nIHRoZSBub3RlIHBhdGggZnJvbSB0aGUgZGF0YVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RlUGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5zZXQoZGF0YS5ub3RlUGF0aCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCBjb250ZXh0cyB0aGF0IGZhaWwgdG8gbG9hZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgYSBub3RlJ3MgY29udGV4dCB0byBkaXNrXG4gICAgICovXG4gICAgc2F2ZUNvbnRleHQobm90ZVBhdGg6IHN0cmluZywgdmF1bHRQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dHMuZ2V0KG5vdGVQYXRoKTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgbm90ZUhhc2ggPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKG5vdGVQYXRoKS5kaWdlc3QoJ2hleCcpO1xuICAgICAgICBjb25zdCBjb250ZXh0RGlyID0gcGF0aC5qb2luKHZhdWx0UGF0aCwgdGhpcy5kYXRhRGlyLCBub3RlSGFzaCk7XG5cbiAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKGNvbnRleHREaXIpKSB7XG4gICAgICAgICAgICBmcy5ta2RpclN5bmMoY29udGV4dERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250ZXh0RmlsZSA9IHBhdGguam9pbihjb250ZXh0RGlyLCAnY29udGV4dC5qc29uJyk7XG5cbiAgICAgICAgY29uc3QgZGF0YVRvU2F2ZSA9IHtcbiAgICAgICAgICAgIG5vdGVQYXRoOiBub3RlUGF0aCxcbiAgICAgICAgICAgIHNlc3Npb25JZDogY29udGV4dC5zZXNzaW9uSWQsXG4gICAgICAgICAgICBoaXN0b3J5OiBjb250ZXh0Lmhpc3RvcnksXG4gICAgICAgICAgICBvdXRwdXRMaW5lczogY29udGV4dC5vdXRwdXRMaW5lcyxcbiAgICAgICAgICAgIGFnZW50U3RlcHM6IGNvbnRleHQuYWdlbnRTdGVwcyxcbiAgICAgICAgICAgIHBlbmRpbmdQcmV2aWV3Q29udGVudDogY29udGV4dC5wZW5kaW5nUHJldmlld0NvbnRlbnQsXG4gICAgICAgICAgICBvcmlnaW5hbFByZXZpZXdDb250ZW50OiBjb250ZXh0Lm9yaWdpbmFsUHJldmlld0NvbnRlbnQsXG4gICAgICAgICAgICBzYXZlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgfTtcblxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGNvbnRleHRGaWxlLCBKU09OLnN0cmluZ2lmeShkYXRhVG9TYXZlLCBudWxsLCAyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSBhbGwgY29udGV4dHNcbiAgICAgKi9cbiAgICBzYXZlQWxsQ29udGV4dHModmF1bHRQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgZm9yIChjb25zdCBub3RlUGF0aCBvZiB0aGlzLmNvbnRleHRzLmtleXMoKSkge1xuICAgICAgICAgICAgdGhpcy5zYXZlQ29udGV4dChub3RlUGF0aCwgdmF1bHRQYXRoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIGhpc3RvcnkgZm9yIGEgbm90ZVxuICAgICAqL1xuICAgIGNsZWFySGlzdG9yeShub3RlUGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzLmdldChub3RlUGF0aCk7XG4gICAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0Lmhpc3RvcnkgPSBbXTtcbiAgICAgICAgICAgIGNvbnRleHQub3V0cHV0TGluZXMgPSBbXTtcbiAgICAgICAgICAgIGNvbnRleHQuYWdlbnRTdGVwcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBjb250ZXh0c1xuICAgICAqL1xuICAgIGdldEFsbENvbnRleHRzKCk6IE1hcDxzdHJpbmcsIE5vdGVDb250ZXh0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgbm90ZSBoYXMgYSBjb250ZXh0XG4gICAgICovXG4gICAgaGFzQ29udGV4dChub3RlUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzLmhhcyhub3RlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvdW50IG9mIHJ1bm5pbmcgcHJvY2Vzc2VzXG4gICAgICovXG4gICAgZ2V0UnVubmluZ0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgY29udGV4dCBvZiB0aGlzLmNvbnRleHRzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbGlzdCBvZiBub3RlIHBhdGhzIHRoYXQgYXJlIGN1cnJlbnRseSBydW5uaW5nXG4gICAgICovXG4gICAgZ2V0UnVubmluZ05vdGVQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IHJ1bm5pbmc6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZvciAoY29uc3QgW25vdGVQYXRoLCBjb250ZXh0XSBvZiB0aGlzLmNvbnRleHRzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgcnVubmluZy5wdXNoKG5vdGVQYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgU3RyaW5nRGVjb2RlciB9IGZyb20gJ3N0cmluZ19kZWNvZGVyJztcbmltcG9ydCB7IENsYXVkZUNvZGVTZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgU3RyZWFtRXZlbnRQcm9jZXNzb3IgfSBmcm9tICcuL3N0cmVhbWluZy9zdHJlYW0tZXZlbnQtcHJvY2Vzc29yJztcbmltcG9ydCB7IFNlc3Npb25NYW5hZ2VyIH0gZnJvbSAnLi9zZXNzaW9uLW1hbmFnZXInO1xuaW1wb3J0IHsgUHJvbXB0QnVpbGRlciB9IGZyb20gJy4vcHJvbXB0LWJ1aWxkZXInO1xuaW1wb3J0IHsgQ2xpQXJnc0J1aWxkZXIgfSBmcm9tICcuL2NsaS1hcmdzLWJ1aWxkZXInO1xuaW1wb3J0IHsgUHJvY2Vzc1NwYXduZXIgfSBmcm9tICcuL3Byb2Nlc3Mtc3Bhd25lcic7XG5pbXBvcnQgeyBSZXNwb25zZVBhcnNlciB9IGZyb20gJy4vcmVzcG9uc2UtcGFyc2VyJztcbmltcG9ydCB7IFJlc3BvbnNlQ29udGVudEV4dHJhY3RvciB9IGZyb20gJy4vc3RyZWFtaW5nL3Jlc3BvbnNlLWNvbnRlbnQtZXh0cmFjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBDbGF1ZGVDb2RlUmVxdWVzdCB7XG4gICAgbm90ZUNvbnRlbnQ6IHN0cmluZztcbiAgICB1c2VyUHJvbXB0OiBzdHJpbmc7XG4gICAgbm90ZVBhdGg6IHN0cmluZztcbiAgICBzZWxlY3RlZFRleHQ/OiBzdHJpbmc7XG4gICAgdmF1bHRQYXRoPzogc3RyaW5nO1xuICAgIGNvbmZpZ0Rpcjogc3RyaW5nOyAgLy8gT2JzaWRpYW4gY29uZmlnIGRpcmVjdG9yeSBmcm9tIFZhdWx0LmNvbmZpZ0RpclxuICAgIGJ5cGFzc1Blcm1pc3Npb25zPzogYm9vbGVhbjtcbiAgICBydW50aW1lTW9kZWxPdmVycmlkZT86IHN0cmluZztcbiAgICBjb252ZXJzYXRpb25hbE1vZGU/OiBib29sZWFuOyAgLy8gV2hlbiB0cnVlLCBubyBmaWxlIG1vZGlmaWNhdGlvbnMgYXJlIGFsbG93ZWRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGF1ZGVDb2RlUmVzcG9uc2Uge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgbW9kaWZpZWRDb250ZW50Pzogc3RyaW5nO1xuICAgIGFzc2lzdGFudE1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgZXJyb3I/OiBzdHJpbmc7XG4gICAgb3V0cHV0OiBzdHJpbmdbXTtcbiAgICB0b2tlblVzYWdlPzoge1xuICAgICAgICBpbnB1dFRva2Vucz86IG51bWJlcjtcbiAgICAgICAgb3V0cHV0VG9rZW5zPzogbnVtYmVyO1xuICAgICAgICB0b3RhbFRva2Vucz86IG51bWJlcjtcbiAgICB9O1xuICAgIGlzUGVybWlzc2lvblJlcXVlc3Q/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xhdWRlQ29kZVJ1bm5lciB7XG4gICAgcHJpdmF0ZSBzZXR0aW5nczogQ2xhdWRlQ29kZVNldHRpbmdzO1xuICAgIHByaXZhdGUgY3VycmVudFByb2Nlc3M6IENoaWxkUHJvY2VzcyB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgb3V0cHV0Q2FsbGJhY2s6ICgobGluZTogc3RyaW5nLCBpc01hcmtkb3duPzogYm9vbGVhbiwgaXNTdHJlYW1pbmc/OiBib29sZWFuIHwgc3RyaW5nLCBpc0Fzc2lzdGFudE1lc3NhZ2U/OiBib29sZWFuKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudFNlc3Npb25JZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7ICAvLyBTdG9yZSBzZXNzaW9uIElEIGZyb20gaW5pdCBldmVudFxuXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3M6IENsYXVkZUNvZGVTZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIENsYXVkZSBDb2RlIHdpdGggdGhlIGdpdmVuIHJlcXVlc3RcbiAgICAgKi9cbiAgICBhc3luYyBydW4ocmVxdWVzdDogQ2xhdWRlQ29kZVJlcXVlc3QsIG9uT3V0cHV0PzogKGxpbmU6IHN0cmluZywgaXNNYXJrZG93bj86IGJvb2xlYW4sIGlzU3RyZWFtaW5nPzogYm9vbGVhbiB8IHN0cmluZykgPT4gdm9pZCk6IFByb21pc2U8Q2xhdWRlQ29kZVJlc3BvbnNlPiB7XG4gICAgICAgIHRoaXMub3V0cHV0Q2FsbGJhY2sgPSBvbk91dHB1dCB8fCBudWxsO1xuXG4gICAgICAgIGxldCBjbGF1ZGVQYXRoID0gdGhpcy5zZXR0aW5ncy5jbGF1ZGVDb2RlUGF0aCB8fCAnY2xhdWRlJztcblxuICAgICAgICAvLyBFeHBhbmQgfiB0byBob21lIGRpcmVjdG9yeSAodXNlIFVTRVJQUk9GSUxFIG9uIFdpbmRvd3MsIEhPTUUgb24gVW5peClcbiAgICAgICAgaWYgKGNsYXVkZVBhdGguc3RhcnRzV2l0aCgnficpKSB7XG4gICAgICAgICAgICBjb25zdCBob21lRGlyID0gcHJvY2Vzcy5lbnYuSE9NRSB8fCBwcm9jZXNzLmVudi5VU0VSUFJPRklMRSB8fCAnJztcbiAgICAgICAgICAgIGNsYXVkZVBhdGggPSBjbGF1ZGVQYXRoLnJlcGxhY2UoJ34nLCBob21lRGlyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFZhbGlkYXRlIHRoYXQgQ2xhdWRlIENvZGUgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmICghY2xhdWRlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ0NsYXVkZSBDb2RlIHBhdGggbm90IGNvbmZpZ3VyZWQuIFBsZWFzZSBzZXQgaXQgaW4gcGx1Z2luIHNldHRpbmdzLicsXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5leGVjdXRlQ2xhdWRlQ29kZShjbGF1ZGVQYXRoLCByZXF1ZXN0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGBGYWlsZWQgdG8gZXhlY3V0ZSBDbGF1ZGUgQ29kZTogJHtlcnJvcn1gLFxuICAgICAgICAgICAgICAgIG91dHB1dDogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlIENsYXVkZSBDb2RlIHByb2Nlc3MgYW5kIGNhcHR1cmUgb3V0cHV0XG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBleGVjdXRlQ2xhdWRlQ29kZShcbiAgICAgICAgY2xhdWRlUGF0aDogc3RyaW5nLFxuICAgICAgICByZXF1ZXN0OiBDbGF1ZGVDb2RlUmVxdWVzdFxuICAgICk6IFByb21pc2U8Q2xhdWRlQ29kZVJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0OiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAgICAgbGV0IGVycm9yT3V0cHV0ID0gJyc7XG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpOyAgLy8gVHJhY2sgb3ZlcmFsbCBleGVjdXRpb24gdGltZVxuXG4gICAgICAgICAgICAvLyAxLiBTZXR1cCBzZXNzaW9uXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uSW5mbyA9IFNlc3Npb25NYW5hZ2VyLmdldFNlc3Npb25JbmZvKFxuICAgICAgICAgICAgICAgIHJlcXVlc3Qubm90ZVBhdGgsXG4gICAgICAgICAgICAgICAgcmVxdWVzdC52YXVsdFBhdGggfHwgJycsXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5jb25maWdEaXJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuc2VuZE91dHB1dChzZXNzaW9uSW5mby5pc05ld1Nlc3Npb25cbiAgICAgICAgICAgICAgICA/IGBcdTIxOTIgU3RhcnRpbmcgbmV3IHNlc3Npb25cXG5gXG4gICAgICAgICAgICAgICAgOiBgXHUyNzEzIFJlc3VtaW5nIHNlc3Npb246ICR7c2Vzc2lvbkluZm8uc2Vzc2lvbklkfVxcbmBcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIDFhLiBDcmVhdGUgbm90ZS5tZCBmaWxlIGluIHNlc3Npb24gZGlyZWN0b3J5IGZvciBDbGF1ZGUgdG8gZWRpdFxuICAgICAgICAgICAgY29uc3Qgbm90ZUZpbGVQYXRoID0gcGF0aC5qb2luKHNlc3Npb25JbmZvLnNlc3Npb25EaXIsICdub3RlLm1kJyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50VG9FZGl0ID0gcmVxdWVzdC5zZWxlY3RlZFRleHQgfHwgcmVxdWVzdC5ub3RlQ29udGVudDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhub3RlRmlsZVBhdGgsIGNvbnRlbnRUb0VkaXQsICd1dGY4Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcdUQ4M0RcdURDREQgQ3JlYXRlZCBub3RlLm1kIGZvciBlZGl0aW5nXFxuYCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcdTI2QTBcdUZFMEYgRXJyb3IgY3JlYXRpbmcgbm90ZS5tZDogJHtlfVxcbmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAyLiBCdWlsZCBwcm9tcHRcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxQcm9tcHQgPSBQcm9tcHRCdWlsZGVyLmJ1aWxkUHJvbXB0KFxuICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkluZm8uc2Vzc2lvbkRpcixcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmN1c3RvbVN5c3RlbVByb21wdCxcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmFsbG93VmF1bHRBY2Nlc3MsXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGVQZXJtaXNzaW9ubGVzc01vZGUgfHwgcmVxdWVzdC5ieXBhc3NQZXJtaXNzaW9uc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gMy4gQnVpbGQgQ0xJIGFyZ3VtZW50c1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IENsaUFyZ3NCdWlsZGVyLmJ1aWxkQXJncyh7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHRoaXMuc2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uSW5mby5zZXNzaW9uSWQsXG4gICAgICAgICAgICAgICAgdmF1bHRQYXRoOiByZXF1ZXN0LnZhdWx0UGF0aCB8fCBudWxsLFxuICAgICAgICAgICAgICAgIGJ5cGFzc1Blcm1pc3Npb25zOiByZXF1ZXN0LmJ5cGFzc1Blcm1pc3Npb25zIHx8IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJ1bnRpbWVNb2RlbE92ZXJyaWRlOiByZXF1ZXN0LnJ1bnRpbWVNb2RlbE92ZXJyaWRlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gT3V0cHV0IGNvbmZpZ3VyYXRpb24gaW5mb1xuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlUGVybWlzc2lvbmxlc3NNb2RlIHx8IHJlcXVlc3QuYnlwYXNzUGVybWlzc2lvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFx1RDgzRFx1REQxMyBQZXJtaXNzaW9ubGVzcyBtb2RlIGVuYWJsZWRcXG5gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcdUQ4M0RcdUREMTIgUGVybWlzc2lvbiBtb2RlOiBpbnRlcmFjdGl2ZSAoQ2xhdWRlIHdpbGwgYXNrIGZvciBwZXJtaXNzaW9uKVxcbmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hbGxvd1ZhdWx0QWNjZXNzICYmIHJlcXVlc3QudmF1bHRQYXRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBWYXVsdCBhY2Nlc3MgZW5hYmxlZDogJHtyZXF1ZXN0LnZhdWx0UGF0aH1cXG5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gNC4gU3Bhd24gcHJvY2Vzc1xuICAgICAgICAgICAgY29uc3Qgd29ya2luZ0RpciA9IHJlcXVlc3QudmF1bHRQYXRoIHx8IHByb2Nlc3MuY3dkKCk7XG4gICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFdvcmtpbmcgZGlyOiAke3dvcmtpbmdEaXJ9XFxuYCk7XG4gICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFN0YXJ0aW5nIENsYXVkZSBDb2RlLi4uXFxuYCk7XG4gICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFNlc3Npb24gZGlyZWN0b3J5OiAke3Nlc3Npb25JbmZvLnNlc3Npb25EaXJ9XFxuYCk7XG5cbiAgICAgICAgICAgIC8vIERlYnVnIGVudmlyb25tZW50IGJlZm9yZSBzcGF3bmluZ1xuICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBbREVCVUddIENoZWNraW5nIGVudmlyb25tZW50Li4uXFxuYCk7XG4gICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFtERUJVR10gU0hFTEw6ICR7cHJvY2Vzcy5lbnYuU0hFTEx9XFxuYCk7XG4gICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFtERUJVR10gSE9NRTogJHtwcm9jZXNzLmVudi5IT01FfVxcbmApO1xuICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBbREVCVUddIENsYXVkZSBwYXRoOiAke2NsYXVkZVBhdGh9XFxuYCk7XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIGN1c3RvbSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZnJvbSBzZXR0aW5nc1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tRW52VmFyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYW50aHJvcGljQmFzZVVybCkge1xuICAgICAgICAgICAgICAgIGN1c3RvbUVudlZhcnNbJ0FOVEhST1BJQ19CQVNFX1VSTCddID0gdGhpcy5zZXR0aW5ncy5hbnRocm9waWNCYXNlVXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYW50aHJvcGljQXV0aFRva2VuKSB7XG4gICAgICAgICAgICAgICAgY3VzdG9tRW52VmFyc1snQU5USFJPUElDX0FVVEhfVE9LRU4nXSA9IHRoaXMuc2V0dGluZ3MuYW50aHJvcGljQXV0aFRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYW50aHJvcGljTW9kZWwpIHtcbiAgICAgICAgICAgICAgICBjdXN0b21FbnZWYXJzWydBTlRIUk9QSUNfTU9ERUwnXSA9IHRoaXMuc2V0dGluZ3MuYW50aHJvcGljTW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hbnRocm9waWNTbWFsbEZhc3RNb2RlbCkge1xuICAgICAgICAgICAgICAgIGN1c3RvbUVudlZhcnNbJ0FOVEhST1BJQ19TTUFMTF9GQVNUX01PREVMJ10gPSB0aGlzLnNldHRpbmdzLmFudGhyb3BpY1NtYWxsRmFzdE1vZGVsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFByb2Nlc3MgPSBQcm9jZXNzU3Bhd25lci5zcGF3bih7XG4gICAgICAgICAgICAgICAgICAgIGNsYXVkZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIHdvcmtpbmdEaXIsXG4gICAgICAgICAgICAgICAgICAgIG9uRGVidWdPdXRwdXQ6IChtc2cpID0+IHRoaXMuc2VuZE91dHB1dChtc2cpLFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21FbnZWYXJzOiBPYmplY3Qua2V5cyhjdXN0b21FbnZWYXJzKS5sZW5ndGggPiAwID8gY3VzdG9tRW52VmFycyA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE91dHB1dChgW0RFQlVHXSBQcm9jZXNzIHNwYXduZWQgc3VjY2Vzc2Z1bGx5LCBQSUQ6ICR7dGhpcy5jdXJyZW50UHJvY2Vzcy5waWR9XFxuYCk7XG4gICAgICAgICAgICB9IGNhdGNoIChzcGF3bkVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcXG5cdTI3NEMgRmFpbGVkIHRvIHNwYXduIHByb2Nlc3M6ICR7c3Bhd25FcnJvcn1gKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBzcGF3bkVycm9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyA1LiBTZW5kIHByb21wdCB2aWEgc3RkaW5cbiAgICAgICAgICAgIFByb2Nlc3NTcGF3bmVyLnNlbmRJbnB1dCh0aGlzLmN1cnJlbnRQcm9jZXNzLCBmdWxsUHJvbXB0KTtcblxuICAgICAgICAgICAgLy8gU2V0IHRpbWVvdXQgaWYgY29uZmlndXJlZFxuICAgICAgICAgICAgbGV0IHRpbWVvdXRJZDogTm9kZUpTLlRpbWVvdXQgfCBudWxsID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnRpbWVvdXRTZWNvbmRzID4gMCkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UHJvY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcXG5UaW1lb3V0IGFmdGVyICR7dGhpcy5zZXR0aW5ncy50aW1lb3V0U2Vjb25kc30gc2Vjb25kcywgdGVybWluYXRpbmcuLi5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFByb2Nlc3Mua2lsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5zZXR0aW5ncy50aW1lb3V0U2Vjb25kcyAqIDEwMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXB0dXJlIHN0ZG91dCAoc3RyZWFtLWpzb24gZm9ybWF0IC0gb25lIEpTT04gb2JqZWN0IHBlciBsaW5lKVxuICAgICAgICAgICAgLy8gVXNlIFN0cmluZ0RlY29kZXIgdG8gcHJvcGVybHkgaGFuZGxlIG11bHRpLWJ5dGUgVVRGLTggY2hhcmFjdGVyc1xuICAgICAgICAgICAgLy8gdGhhdCBtYXkgYmUgc3BsaXQgYWNyb3NzIGNodW5rIGJvdW5kYXJpZXMgKGUuZy4sIFx1MDBCRCwgXHUwMEJDLCBcdTAwQkUsIGV0Yy4pXG4gICAgICAgICAgICBjb25zdCBzdGRvdXREZWNvZGVyID0gbmV3IFN0cmluZ0RlY29kZXIoJ3V0ZjgnKTtcbiAgICAgICAgICAgIGxldCBidWZmZXIgPSAnJztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFByb2Nlc3Muc3Rkb3V0Py5vbignZGF0YScsIChkYXRhOiBCdWZmZXIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBVc2UgU3RyaW5nRGVjb2RlciB0byBwcm9wZXJseSBkZWNvZGUgVVRGLTgsIGhhbmRsaW5nIHNwbGl0IG11bHRpLWJ5dGUgY2hhcnNcbiAgICAgICAgICAgICAgICBidWZmZXIgKz0gc3Rkb3V0RGVjb2Rlci53cml0ZShkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lcyA9IGJ1ZmZlci5zcGxpdCgnXFxuJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBLZWVwIHRoZSBsYXN0IGluY29tcGxldGUgbGluZSBpbiB0aGUgYnVmZmVyXG4gICAgICAgICAgICAgICAgYnVmZmVyID0gbGluZXMucG9wKCkgfHwgJyc7XG5cbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIGNvbXBsZXRlIGxpbmVzXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbGluZS50cmltKCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IEpTT04ucGFyc2UobGluZSkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gobGluZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIGV2ZW50ICh3aWxsIGhhbmRsZSBzdHJlYW1pbmcgb3V0cHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdHJlYW1FdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBbcmF3XSAke2xpbmV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ2FwdHVyZSBzdGRlcnIgKGFsc28gdXNlIFN0cmluZ0RlY29kZXIgZm9yIHByb3BlciBVVEYtOCBoYW5kbGluZylcbiAgICAgICAgICAgIGNvbnN0IHN0ZGVyckRlY29kZXIgPSBuZXcgU3RyaW5nRGVjb2RlcigndXRmOCcpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvY2Vzcy5zdGRlcnI/Lm9uKCdkYXRhJywgKGRhdGE6IEJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBzdGRlcnJEZWNvZGVyLndyaXRlKGRhdGEpO1xuICAgICAgICAgICAgICAgIGVycm9yT3V0cHV0ICs9IHRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBbc3RkZXJyXSAke3RleHR9YCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQWRkIGRlYnVnIGxvZ2dpbmdcbiAgICAgICAgICAgIHRoaXMuc2VuZE91dHB1dChgXFxuW0RFQlVHXSBQcm9jZXNzIHNwYXduZWQsIFBJRDogJHt0aGlzLmN1cnJlbnRQcm9jZXNzLnBpZH1gKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZE91dHB1dChgW0RFQlVHXSBXb3JraW5nIGRpcjogJHt3b3JraW5nRGlyfWApO1xuICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBbREVCVUddIFNlc3Npb24gZGlyOiAke3Nlc3Npb25JbmZvLnNlc3Npb25EaXJ9YCk7XG4gICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFtERUJVR10gV2FpdGluZyBmb3Igb3V0cHV0Li4uXFxuYCk7XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBwcm9jZXNzIGV4aXQgKGhhcHBlbnMgYmVmb3JlIGNsb3NlKVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvY2Vzcy5vbignZXhpdCcsIChjb2RlOiBudW1iZXIsIHNpZ25hbDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcXG5bREVCVUddIFByb2Nlc3MgZXhpdGVkIHdpdGggY29kZTogJHtjb2RlfSwgc2lnbmFsOiAke3NpZ25hbH1gKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgcHJvY2VzcyBjb21wbGV0aW9uXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9jZXNzLm9uKCdjbG9zZScsIChjb2RlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFxcbltERUJVR10gUHJvY2VzcyBjbG9zZWQgd2l0aCBjb2RlOiAke2NvZGV9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiAuY2xhdWRlIGRpcmVjdG9yeSB3YXMgY3JlYXRlZCAoZGVidWcgb25seSlcbiAgICAgICAgICAgICAgICBjb25zdCBjbGF1ZGVEaXIgPSBwYXRoLmpvaW4oc2Vzc2lvbkluZm8uc2Vzc2lvbkRpciwgJy5jbGF1ZGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGF1ZGVEaXJDcmVhdGVkID0gZnMuZXhpc3RzU3luYyhjbGF1ZGVEaXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE91dHB1dChgXFxuW0RFQlVHXSAuY2xhdWRlIGRpcmVjdG9yeSBhZnRlciBydW46ICR7Y2xhdWRlRGlyQ3JlYXRlZCA/ICdFWElTVFMnIDogJ05PVCBGT1VORCd9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXVkZURpckNyZWF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGlzdCBjb250ZW50c1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudHMgPSBmcy5yZWFkZGlyU3luYyhjbGF1ZGVEaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcXG5bREVCVUddIC5jbGF1ZGUgY29udGVudHM6ICR7Y29udGVudHMuam9pbignLCAnKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcXG5bREVCVUddIEVycm9yIHJlYWRpbmcgLmNsYXVkZTogJHtlfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9jZXNzID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE91dHB1dChgXFxuW0RFQlVHXSBQcm9jZXNzaW5nICR7b3V0cHV0Lmxlbmd0aH0gb3V0cHV0IGxpbmVzYCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gNi4gUGFyc2Ugb3V0cHV0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IFJlc3BvbnNlUGFyc2VyLnBhcnNlT3V0cHV0KG91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzUGVybWlzc2lvblJlcXVlc3QgPSBSZXNwb25zZUNvbnRlbnRFeHRyYWN0b3IuZGV0ZWN0UGVybWlzc2lvblJlcXVlc3QocGFyc2VkLmFzc2lzdGFudFRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE91dHB1dChgXFxuW0RFQlVHXSBGdWxsIHJlc3BvbnNlIGxlbmd0aDogJHtwYXJzZWQuYXNzaXN0YW50VGV4dC5sZW5ndGh9IGNoYXJzYCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gNy4gUmVhZCB0aGUgbW9kaWZpZWQgbm90ZS5tZCBmaWxlIChpZiBpdCB3YXMgbW9kaWZpZWQpXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RpZmllZENvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcy5leGlzdHNTeW5jKG5vdGVGaWxlUGF0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3RlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhub3RlRmlsZVBhdGgsICd1dGY4Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBjb250ZW50IGFjdHVhbGx5IGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm90ZUNvbnRlbnQgIT09IGNvbnRlbnRUb0VkaXQgJiYgIXJlcXVlc3QuY29udmVyc2F0aW9uYWxNb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQ29udGVudCA9IG5vdGVDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFxcblx1MjcwNSBub3RlLm1kIHdhcyBtb2RpZmllZCBieSBDbGF1ZGVcXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFxcbiBcdTIxMzlcdUZFMEYgIG5vdGUubWQgdW5jaGFuZ2VkIChsaWtlbHkgYSBxdWVzdGlvbi9hbmFseXNpcylcXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE91dHB1dChgXFxuXHUyNkEwXHVGRTBGICBub3RlLm1kIG5vdCBmb3VuZCBhZnRlciBleGVjdXRpb25cXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcXG5cdTI2QTBcdUZFMEYgIEVycm9yIHJlYWRpbmcgbm90ZS5tZDogJHtlfVxcbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gOC4gU2F2ZSBzZXNzaW9uIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlc3Npb25NYW5hZ2VyLnNhdmVDb252ZXJzYXRpb25IaXN0b3J5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25JbmZvLnNlc3Npb25EaXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC51c2VyUHJvbXB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZC5hc3Npc3RhbnRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcXG5cdUQ4M0RcdURDQkUgQ29udmVyc2F0aW9uIGhpc3Rvcnkgc2F2ZWRcXG5gKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNlc3Npb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlc3Npb25NYW5hZ2VyLnNhdmVTZXNzaW9uSWQoc2Vzc2lvbkluZm8uc2Vzc2lvbkRpciwgdGhpcy5jdXJyZW50U2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFx1RDgzRFx1RENCRSBTZXNzaW9uIElEIHNhdmVkOiAke3RoaXMuY3VycmVudFNlc3Npb25JZH1cXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcXG5cdTI2QTAgRXJyb3Igc2F2aW5nIHNlc3Npb24gZGF0YTogJHtlfVxcbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gOS4gQnVpbGQgYW5kIHJldHVybiByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbER1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2U6IENsYXVkZUNvZGVSZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZENvbnRlbnQ6IG1vZGlmaWVkQ29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lzdGFudE1lc3NhZ2U6IHBhcnNlZC5hc3Npc3RhbnRUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBvdXRwdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlblVzYWdlOiBwYXJzZWQudG9rZW5Vc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUGVybWlzc2lvblJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE91dHB1dChgXFxuXHUyNzEzIENsYXVkZSBDb2RlIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkgaW4gJHsodG90YWxEdXJhdGlvbiAvIDEwMDApLnRvRml4ZWQoMil9c2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1Blcm1pc3Npb25SZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcXG5cdTI2QTBcdUZFMEYgUGVybWlzc2lvbiByZXF1ZXN0IGRldGVjdGVkIC0gd2FpdGluZyBmb3IgdXNlciBhcHByb3ZhbGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFxcblx1MjcxMyBBbmFseXNpcyBjb21wbGV0ZWQgKG5vIGZpbGUgbW9kaWZpY2F0aW9ucykgaW4gJHsodG90YWxEdXJhdGlvbiAvIDEwMDApLnRvRml4ZWQoMil9c2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcXG5cdTI3MTcgQ2xhdWRlIENvZGUgZmFpbGVkIHdpdGggY29kZSAke2NvZGV9YCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvck91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBFcnJvciBvdXRwdXQ6ICR7ZXJyb3JPdXRwdXR9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFJlc3BvbnNlUGFyc2VyLmJ1aWxkRXJyb3JSZXNwb25zZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGBDbGF1ZGUgQ29kZSBleGl0ZWQgd2l0aCBjb2RlICR7Y29kZX0uICR7ZXJyb3JPdXRwdXR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIHByb2Nlc3MgZXJyb3JzXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9jZXNzLm9uKCdlcnJvcicsIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9jZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRPdXRwdXQoYFxcblx1MjcxNyBFcnJvcjogJHtlcnIubWVzc2FnZX1gKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoUmVzcG9uc2VQYXJzZXIuYnVpbGRFcnJvclJlc3BvbnNlKFxuICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIHNwYXduIENsYXVkZSBDb2RlOiAke2Vyci5tZXNzYWdlfWAsXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmQgaW5wdXQgdG8gdGhlIGN1cnJlbnQgQ2xhdWRlIENvZGUgcHJvY2VzcyBzdGRpblxuICAgICAqL1xuICAgIHNlbmRJbnB1dChpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQcm9jZXNzICYmIHRoaXMuY3VycmVudFByb2Nlc3Muc3RkaW4pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvY2Vzcy5zdGRpbi53cml0ZShpbnB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcXG5bVXNlciBpbnB1dCBzZW50XTogJHtpbnB1dC50cmltKCl9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB3cml0ZSB0byBzdGRpbjonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kT3V0cHV0KGBcXG5cdTI3MTcgRmFpbGVkIHRvIHNlbmQgaW5wdXQ6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCBzZW5kIGlucHV0OiBubyBhY3RpdmUgcHJvY2VzcyBvciBzdGRpbiBub3QgYXZhaWxhYmxlJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXJtaW5hdGUgdGhlIGN1cnJlbnQgQ2xhdWRlIENvZGUgcHJvY2VzcyBpZiBydW5uaW5nXG4gICAgICovXG4gICAgdGVybWluYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UHJvY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvY2Vzcy5raWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9jZXNzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc2VuZE91dHB1dCgnXFxuXHUyNkEwIFByb2Nlc3MgdGVybWluYXRlZCBieSB1c2VyJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBDbGF1ZGUgQ29kZSBpcyBjdXJyZW50bHkgcnVubmluZ1xuICAgICAqL1xuICAgIGlzUnVubmluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFByb2Nlc3MgIT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHN0cmVhbS1qc29uIGV2ZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlU3RyZWFtRXZlbnQoZXZlbnQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogdm9pZCB7XG4gICAgICAgIC8vIEV2ZW50IGNvbWVzIGZyb20gSlNPTi5wYXJzZSBvZiBDTEkgb3V0cHV0IC0gaGFzIGluZGV4IHNpZ25hdHVyZSBjb21wYXRpYmxlIHdpdGggU3RyZWFtRXZlbnREYXRhXG4gICAgICAgIFN0cmVhbUV2ZW50UHJvY2Vzc29yLnByb2Nlc3NFdmVudChcbiAgICAgICAgICAgIGV2ZW50IGFzIFBhcmFtZXRlcnM8dHlwZW9mIFN0cmVhbUV2ZW50UHJvY2Vzc29yLnByb2Nlc3NFdmVudD5bMF0sXG4gICAgICAgICAgICAodGV4dDogc3RyaW5nLCBpc01hcmtkb3duPzogYm9vbGVhbiwgaXNTdHJlYW1pbmc/OiBib29sZWFuIHwgJ2ZpbmlzaCcsIGlzQXNzaXN0YW50TWVzc2FnZT86IGJvb2xlYW4pID0+IHRoaXMuc2VuZE91dHB1dCh0ZXh0LCBpc01hcmtkb3duLCBpc1N0cmVhbWluZywgaXNBc3Npc3RhbnRNZXNzYWdlKSxcbiAgICAgICAgICAgIChzZXNzaW9uSWQ6IHN0cmluZykgPT4geyB0aGlzLmN1cnJlbnRTZXNzaW9uSWQgPSBzZXNzaW9uSWQ7IH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kIG91dHB1dCB0byBjYWxsYmFja1xuICAgICAqL1xuICAgIHByaXZhdGUgc2VuZE91dHB1dCh0ZXh0OiBzdHJpbmcsIGlzTWFya2Rvd246IGJvb2xlYW4gPSBmYWxzZSwgaXNTdHJlYW1pbmc/OiBib29sZWFuIHwgc3RyaW5nLCBpc0Fzc2lzdGFudE1lc3NhZ2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm91dHB1dENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dENhbGxiYWNrKHRleHQsIGlzTWFya2Rvd24sIGlzU3RyZWFtaW5nLCBpc0Fzc2lzdGFudE1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCAiLyoqXG4gKiBUb29sIGlucHV0IHR5cGUgLSBmbGV4aWJsZSByZWNvcmQgZm9yIHZhcmlvdXMgdG9vbCBpbnB1dHNcbiAqL1xuaW50ZXJmYWNlIFRvb2xJbnB1dCB7XG4gICAgY29tbWFuZD86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBxdWVyeT86IHN0cmluZztcbiAgICBhbGxvd2VkX2RvbWFpbnM/OiBzdHJpbmdbXTtcbiAgICBibG9ja2VkX2RvbWFpbnM/OiBzdHJpbmdbXTtcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgcHJvbXB0Pzogc3RyaW5nO1xuICAgIHBhdHRlcm4/OiBzdHJpbmc7XG4gICAgcGF0aD86IHN0cmluZztcbiAgICBvdXRwdXRfbW9kZT86IHN0cmluZztcbiAgICBmaWxlX3BhdGg/OiBzdHJpbmc7XG4gICAgb2Zmc2V0PzogbnVtYmVyO1xuICAgIGxpbWl0PzogbnVtYmVyO1xuICAgIGNvbnRlbnQ/OiBzdHJpbmc7XG4gICAgcmVwbGFjZV9hbGw/OiBib29sZWFuO1xuICAgIHN1YmFnZW50X3R5cGU/OiBzdHJpbmc7XG4gICAgdG9kb3M/OiB1bmtub3duO1xuICAgIFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbi8qKlxuICogVG9vbCByZXN1bHQgdHlwZSAtIGNhbiBiZSB2YXJpb3VzIHNoYXBlcyBkZXBlbmRpbmcgb24gdGhlIHRvb2xcbiAqL1xudHlwZSBUb29sUmVzdWx0ID0geyBzdGRvdXQ/OiBzdHJpbmc7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbi8qKlxuICogVXRpbGl0eSBmb3IgZm9ybWF0dGluZyB0b29sIHVzYWdlIGluZm9ybWF0aW9uIGluIGEgY29uc2lzdGVudCB3YXlcbiAqL1xuZXhwb3J0IGNsYXNzIFRvb2xPdXRwdXRGb3JtYXR0ZXIge1xuICAgIC8qKlxuICAgICAqIEZvcm1hdCB0b29sIHVzYWdlIGluZm9ybWF0aW9uIGZyb20gdG9vbF91c2UgZXZlbnQgb3IgbWVzc2FnZSBibG9ja1xuICAgICAqXG4gICAgICogQHBhcmFtIHRvb2xOYW1lIE5hbWUgb2YgdGhlIHRvb2wgYmVpbmcgdXNlZFxuICAgICAqIEBwYXJhbSB0b29sSW5wdXQgSW5wdXQgcGFyYW1ldGVycyBmb3IgdGhlIHRvb2xcbiAgICAgKiBAcGFyYW0gZm9ybWF0IEZvcm1hdCBzdHlsZTogJ2NvbXBhY3QnIGZvciBtZXNzYWdlIGJsb2NrcywgJ3ZlcmJvc2UnIGZvciBldmVudHNcbiAgICAgKiBAcmV0dXJucyBBcnJheSBvZiBmb3JtYXR0ZWQgb3V0cHV0IGxpbmVzXG4gICAgICovXG4gICAgc3RhdGljIGZvcm1hdFRvb2xVc2FnZSh0b29sTmFtZTogc3RyaW5nLCB0b29sSW5wdXQ6IFRvb2xJbnB1dCwgZm9ybWF0OiAnY29tcGFjdCcgfCAndmVyYm9zZScgPSAnY29tcGFjdCcpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGxpbmVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGlmIChmb3JtYXQgPT09ICd2ZXJib3NlJykge1xuICAgICAgICAgICAgLy8gVXNlZCBmb3IgdG9vbF91c2UgZXZlbnRzIC0gbW9yZSB2ZXJib3NlIGhlYWRlcnNcbiAgICAgICAgICAgIGxpbmVzLnB1c2goLi4udGhpcy5mb3JtYXRWZXJib3NlSGVhZGVyKHRvb2xOYW1lKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGb3JtYXQgdG9vbC1zcGVjaWZpYyBwYXJhbWV0ZXJzXG4gICAgICAgIGxpbmVzLnB1c2goLi4udGhpcy5mb3JtYXRUb29sU3BlY2lmaWNQYXJhbXModG9vbE5hbWUsIHRvb2xJbnB1dCwgZm9ybWF0KSk7XG5cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCB2ZXJib3NlIGhlYWRlciBmb3IgdG9vbF91c2UgZXZlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgZm9ybWF0VmVyYm9zZUhlYWRlcih0b29sTmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBoZWFkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgICAgICAgICAgJ0Jhc2gnOiAnXFxuXHVEODNEXHVERDI3IEJhc2ggZXhlY3V0aW5nOlxcbicsXG4gICAgICAgICAgICAnR2xvYic6ICdcXG5cdUQ4M0RcdUREMEQgR2xvYiBzZWFyY2hpbmc6XFxuJyxcbiAgICAgICAgICAgICdHcmVwJzogJ1xcblx1RDgzRFx1REQwRSBHcmVwIHNlYXJjaGluZzpcXG4nLFxuICAgICAgICAgICAgJ1JlYWQnOiAnXFxuXHVEODNEXHVEQ0Q2IFJlYWRpbmcgZmlsZTpcXG4nLFxuICAgICAgICAgICAgJ1dyaXRlJzogJ1xcblx1MjcwRFx1RkUwRiAgV3JpdGluZyBmaWxlOlxcbicsXG4gICAgICAgICAgICAnRWRpdCc6ICdcXG5cdTI3MEZcdUZFMEYgIEVkaXRpbmcgZmlsZTpcXG4nLFxuICAgICAgICAgICAgJ1dlYkZldGNoJzogJ1xcblx1RDgzQ1x1REYxMCBGZXRjaGluZyB3ZWJwYWdlOlxcbicsXG4gICAgICAgICAgICAnV2ViU2VhcmNoJzogJ1xcblx1RDgzRFx1REQwRCBXZWIgc2VhcmNoaW5nOlxcbicsXG4gICAgICAgICAgICAnVGFzayc6ICdcXG5cdUQ4M0VcdUREMTYgTGF1bmNoaW5nIGFnZW50OlxcbidcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gW2hlYWRlcnNbdG9vbE5hbWVdIHx8IGBcXG5cdUQ4M0RcdURFRTBcdUZFMEYgICR7dG9vbE5hbWV9OlxcbmBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCB0b29sLXNwZWNpZmljIHBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBmb3JtYXRUb29sU3BlY2lmaWNQYXJhbXModG9vbE5hbWU6IHN0cmluZywgdG9vbElucHV0OiBUb29sSW5wdXQsIGZvcm1hdDogJ2NvbXBhY3QnIHwgJ3ZlcmJvc2UnKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBsaW5lczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICBpZiAoIXRvb2xJbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0b29sTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnQmFzaCc6XG4gICAgICAgICAgICAgICAgaWYgKHRvb2xJbnB1dC5jb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goYCAgICQgJHt0b29sSW5wdXQuY29tbWFuZH1cXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2xJbnB1dC5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgICAgXHVEODNEXHVEQ0REICR7dG9vbElucHV0LmRlc2NyaXB0aW9ufVxcbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdXZWJTZWFyY2gnOlxuICAgICAgICAgICAgICAgIGlmICh0b29sSW5wdXQucXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gZm9ybWF0ID09PSAnY29tcGFjdCcgPyAnICAgXHVEODNEXHVERDBEIFF1ZXJ5OicgOiAnICAgUXVlcnk6JztcbiAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgJHtwcmVmaXh9IFwiJHt0b29sSW5wdXQucXVlcnl9XCJcXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2xJbnB1dC5hbGxvd2VkX2RvbWFpbnM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBmb3JtYXQgPT09ICdjb21wYWN0JyA/ICcgICBcdTI3MTMgQWxsb3dlZDonIDogJyAgIEFsbG93ZWQgZG9tYWluczonO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgJHtsYWJlbH0gJHt0b29sSW5wdXQuYWxsb3dlZF9kb21haW5zLmpvaW4oJywgJyl9XFxuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2xJbnB1dC5ibG9ja2VkX2RvbWFpbnM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBmb3JtYXQgPT09ICdjb21wYWN0JyA/ICcgICBcdTI3MTcgQmxvY2tlZDonIDogJyAgIEJsb2NrZWQgZG9tYWluczonO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgJHtsYWJlbH0gJHt0b29sSW5wdXQuYmxvY2tlZF9kb21haW5zLmpvaW4oJywgJyl9XFxuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1dlYkZldGNoJzpcbiAgICAgICAgICAgICAgICBpZiAodG9vbElucHV0LnVybCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmaXggPSBmb3JtYXQgPT09ICdjb21wYWN0JyA/ICcgICBcdUQ4M0NcdURGMTAgVVJMOicgOiAnICAgVVJMOic7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goYCR7cHJlZml4fSAke3Rvb2xJbnB1dC51cmx9XFxuYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29sSW5wdXQucHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGZvcm1hdCA9PT0gJ2NvbXBhY3QnID8gJyAgIFx1RDgzRFx1RENDQiBUYXNrOicgOiAnICAgVGFzazonO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJ1bmNhdGVkID0gdG9vbElucHV0LnByb21wdC5zdWJzdHJpbmcoMCwgZm9ybWF0ID09PSAnY29tcGFjdCcgPyAxMDAgOiAxNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxsaXBzaXMgPSB0b29sSW5wdXQucHJvbXB0Lmxlbmd0aCA+IChmb3JtYXQgPT09ICdjb21wYWN0JyA/IDEwMCA6IDE1MCkgPyAnLi4uJyA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgJHtsYWJlbH0gJHt0cnVuY2F0ZWR9JHtlbGxpcHNpc31cXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnR2xvYic6XG4gICAgICAgICAgICAgICAgaWYgKHRvb2xJbnB1dC5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZWZpeCA9IGZvcm1hdCA9PT0gJ2NvbXBhY3QnID8gJyAgIFx1RDgzRFx1REQwRCBQYXR0ZXJuOicgOiAnICAgUGF0dGVybjonO1xuICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGAke3ByZWZpeH0gJHt0b29sSW5wdXQucGF0dGVybn1cXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2xJbnB1dC5wYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hQYXRoID0gZm9ybWF0ID09PSAndmVyYm9zZScgPyB0b29sSW5wdXQucGF0aCA6IHRvb2xJbnB1dC5wYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgICAgXHVEODNEXHVEQ0MxIFBhdGg6ICR7c2VhcmNoUGF0aH1cXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICd2ZXJib3NlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgICAgUGF0aDogLlxcbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdHcmVwJzpcbiAgICAgICAgICAgICAgICBpZiAodG9vbElucHV0LnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gZm9ybWF0ID09PSAnY29tcGFjdCcgPyAnICAgXHVEODNEXHVERDBFIFBhdHRlcm46JyA6ICcgICBQYXR0ZXJuOic7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goYCR7cHJlZml4fSBcIiR7dG9vbElucHV0LnBhdHRlcm59XCJcXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2xJbnB1dC5wYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hQYXRoID0gZm9ybWF0ID09PSAndmVyYm9zZScgPyB0b29sSW5wdXQucGF0aCA6IHRvb2xJbnB1dC5wYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgICAgXHVEODNEXHVEQ0MxIFBhdGg6ICR7c2VhcmNoUGF0aH1cXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICd2ZXJib3NlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgICAgUGF0aDogLlxcbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29sSW5wdXQub3V0cHV0X21vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZm9ybWF0ID09PSAnY29tcGFjdCcgPyAnICAgXHVEODNEXHVEQ0NBIE1vZGU6JyA6ICcgICBNb2RlOic7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGAke2xhYmVsfSAke3Rvb2xJbnB1dC5vdXRwdXRfbW9kZX1cXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnUmVhZCc6XG4gICAgICAgICAgICAgICAgaWYgKHRvb2xJbnB1dC5maWxlX3BhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gZm9ybWF0ID09PSAnY29tcGFjdCcgPyAnICAgXHVEODNEXHVEQ0Q2IEZpbGU6JyA6ICcgICAnO1xuICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGAke3ByZWZpeH0ke3Rvb2xJbnB1dC5maWxlX3BhdGh9XFxuYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICd2ZXJib3NlJyAmJiAodG9vbElucHV0Lm9mZnNldCB8fCB0b29sSW5wdXQubGltaXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IHRvb2xJbnB1dC5vZmZzZXQgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IHRvb2xJbnB1dC5saW1pdCA/IHN0YXJ0ICsgdG9vbElucHV0LmxpbWl0IDogJ0VPRic7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGAgICBMaW5lczogJHtzdGFydH0gdG8gJHtlbmR9XFxuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1dyaXRlJzpcbiAgICAgICAgICAgICAgICBpZiAodG9vbElucHV0LmZpbGVfcGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmaXggPSBmb3JtYXQgPT09ICdjb21wYWN0JyA/ICcgICBcdTI3MERcdUZFMEYgIEZpbGU6JyA6ICcgICAnO1xuICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGAke3ByZWZpeH0ke3Rvb2xJbnB1dC5maWxlX3BhdGh9XFxuYCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSB0b29sSW5wdXQuY29udGVudD8ubGVuZ3RoIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZm9ybWF0ID09PSAnY29tcGFjdCcgPyAnICAgXHVEODNEXHVEQ0NGIFNpemU6JyA6ICcgICBTaXplOic7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goYCR7bGFiZWx9ICR7Y29udGVudExlbmd0aH0gY2hhciR7Y29udGVudExlbmd0aCA9PT0gMSA/ICcnIDogJ3MnfVxcbmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRWRpdCc6XG4gICAgICAgICAgICAgICAgaWYgKHRvb2xJbnB1dC5maWxlX3BhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gZm9ybWF0ID09PSAnY29tcGFjdCcgPyAnICAgXHUyNzBGXHVGRTBGICBGaWxlOicgOiAnICAgJztcbiAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgJHtwcmVmaXh9JHt0b29sSW5wdXQuZmlsZV9wYXRofVxcbmApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0ID09PSAndmVyYm9zZScgJiYgdG9vbElucHV0LnJlcGxhY2VfYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGAgICBNb2RlOiBSZXBsYWNlIGFsbCBvY2N1cnJlbmNlc1xcbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdUYXNrJzpcbiAgICAgICAgICAgICAgICBpZiAodG9vbElucHV0LnN1YmFnZW50X3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gZm9ybWF0ID09PSAnY29tcGFjdCcgPyAnICAgXHVEODNFXHVERDE2IEFnZW50OicgOiAnICAgVHlwZTonO1xuICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGAke3ByZWZpeH0gJHt0b29sSW5wdXQuc3ViYWdlbnRfdHlwZX1cXG5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRvb2xJbnB1dC5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGAgICBcdUQ4M0RcdURDQ0IgVGFzazogJHt0b29sSW5wdXQuZGVzY3JpcHRpb259XFxuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICd2ZXJib3NlJyAmJiB0b29sSW5wdXQucHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3J0UHJvbXB0ID0gdG9vbElucHV0LnByb21wdC5zdWJzdHJpbmcoMCwgMTUwKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgICAgUHJvbXB0OiAke3Nob3J0UHJvbXB0fSR7dG9vbElucHV0LnByb21wdC5sZW5ndGggPiAxNTAgPyAnLi4uJyA6ICcnfVxcbmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnVG9kb1dyaXRlJzoge1xuICAgICAgICAgICAgICAgIC8vIFRvZG9Xcml0ZSBuZWVkcyB0aGUgZnVsbCBKU09OIGZvciBwYXJzaW5nLCBzbyBkb24ndCB0cnVuY2F0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9JbnB1dFN0ciA9IEpTT04uc3RyaW5naWZ5KHRvb2xJbnB1dCwgbnVsbCwgMik7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaChgICAgJHt0b2RvSW5wdXRTdHJ9XFxuYCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAvLyBHZW5lcmljIGRpc3BsYXkgZm9yIG90aGVyIHRvb2xzXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRTdHIgPSBKU09OLnN0cmluZ2lmeSh0b29sSW5wdXQsIG51bGwsIDIpO1xuICAgICAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdjb21wYWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lc0FyciA9IGlucHV0U3RyLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmVzQXJyLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGAgICAke2xpbmVzQXJyLnNsaWNlKDAsIDEwKS5qb2luKCdcXG4nKX1cXG4gICAuLi5cXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goYCAgICR7aW5wdXRTdHJ9XFxuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRTdHIubGVuZ3RoID4gMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGAgICAke2lucHV0U3RyLnN1YnN0cmluZygwLCAzMDApfS4uLlxcbmApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgICAgJHtpbnB1dFN0cn1cXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgdG9vbCByZXN1bHQgb3V0cHV0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9vbE5hbWUgTmFtZSBvZiB0aGUgdG9vbFxuICAgICAqIEBwYXJhbSByZXN1bHQgUmVzdWx0IG9iamVjdCBmcm9tIHRoZSB0b29sXG4gICAgICogQHJldHVybnMgQXJyYXkgb2YgZm9ybWF0dGVkIG91dHB1dCBsaW5lc1xuICAgICAqL1xuICAgIHN0YXRpYyBmb3JtYXRUb29sUmVzdWx0KHRvb2xOYW1lOiBzdHJpbmcsIHJlc3VsdDogVG9vbFJlc3VsdCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgbGluZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgaWYgKHRvb2xOYW1lID09PSAnQmFzaCcgJiYgcmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBzdGRvdXQgPSByZXN1bHQuc3Rkb3V0O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGRvdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gc3Rkb3V0LnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dExpbmVzID0gb3V0cHV0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgICAgXHUyNzEzIE91dHB1dCAoJHtvdXRwdXRMaW5lcy5sZW5ndGh9IGxpbmVzKTpcXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBmaXJzdCBmZXcgbGluZXMgb2Ygb3V0cHV0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpZXcgPSBvdXRwdXRMaW5lcy5zbGljZSgwLCAzKS5qb2luKCdcXG4nKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgICAgJHtwcmV2aWV3fSR7b3V0cHV0TGluZXMubGVuZ3RoID4gMyA/ICdcXG4gICAuLi4nIDogJyd9XFxuYCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChgICAgXHUyNzEzICR7dG9vbE5hbWV9IGNvbXBsZXRlXFxuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGAgICBcdTI3MTMgJHt0b29sTmFtZX0gY29tcGxldGVcXG5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCAgIFx1MjcxMyAke3Rvb2xOYW1lfSBjb21wbGV0ZVxcbmApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBUb29sT3V0cHV0Rm9ybWF0dGVyIH0gZnJvbSAnLi90b29sLW91dHB1dC1mb3JtYXR0ZXInO1xuXG4vKipcbiAqIE91dHB1dCBjYWxsYmFjayB0eXBlIGZvciBzdHJlYW0gZXZlbnQgcHJvY2Vzc2luZ1xuICovXG5leHBvcnQgdHlwZSBPdXRwdXRDYWxsYmFjayA9ICh0ZXh0OiBzdHJpbmcsIGlzTWFya2Rvd24/OiBib29sZWFuLCBpc1N0cmVhbWluZz86IGJvb2xlYW4gfCAnZmluaXNoJywgaXNBc3Npc3RhbnRNZXNzYWdlPzogYm9vbGVhbikgPT4gdm9pZDtcblxuLyoqXG4gKiBTZXNzaW9uIElEIGNhbGxiYWNrIHR5cGUgZm9yIHN0b3Jpbmcgc2Vzc2lvbiBpbmZvcm1hdGlvblxuICovXG5leHBvcnQgdHlwZSBTZXNzaW9uSWRDYWxsYmFjayA9IChzZXNzaW9uSWQ6IHN0cmluZykgPT4gdm9pZDtcblxuLyoqXG4gKiBTdHJlYW0gZXZlbnQgZnJvbSBDbGF1ZGUgQ29kZSBDTEkgLSB1c2VzIGluZGV4IHNpZ25hdHVyZSB0byBhdm9pZCAnYW55J1xuICovXG5pbnRlcmZhY2UgU3RyZWFtRXZlbnREYXRhIHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgc3VidHlwZT86IHN0cmluZztcbiAgICBtb2RlbD86IHN0cmluZztcbiAgICB0b29scz86IHN0cmluZ1tdO1xuICAgIHNlc3Npb25faWQ/OiBzdHJpbmc7XG4gICAgbWVzc2FnZT86IHtcbiAgICAgICAgY29udGVudD86IEFycmF5PHtcbiAgICAgICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgICAgICAgICBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgaW5wdXQ/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgICAgIHRvb2xfdXNlX2lkPzogc3RyaW5nO1xuICAgICAgICAgICAgY29udGVudD86IHVua25vd247XG4gICAgICAgIH0+O1xuICAgIH07XG4gICAgdG9vbF9uYW1lPzogc3RyaW5nO1xuICAgIGlucHV0PzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgcmVzdWx0Pzogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgZHVyYXRpb25fbXM/OiBudW1iZXI7XG4gICAgdG90YWxfY29zdF91c2Q/OiBudW1iZXI7XG4gICAgdXNhZ2U/OiB7XG4gICAgICAgIGlucHV0X3Rva2VuczogbnVtYmVyO1xuICAgICAgICBvdXRwdXRfdG9rZW5zOiBudW1iZXI7XG4gICAgfTtcbiAgICBldmVudD86IHtcbiAgICAgICAgdHlwZTogc3RyaW5nO1xuICAgICAgICBkZWx0YT86IHtcbiAgICAgICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnRlbnRfYmxvY2s/OiB7XG4gICAgICAgICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG4vKipcbiAqIFV0aWxpdHkgZm9yIHByb2Nlc3Npbmcgc3RyZWFtIGV2ZW50cyBmcm9tIENsYXVkZSBDb2RlIENMSVxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtRXZlbnRQcm9jZXNzb3Ige1xuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgYSBzaW5nbGUgc3RyZWFtIGV2ZW50IGFuZCBnZW5lcmF0ZSBvdXRwdXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCBUaGUgc3RyZWFtIGV2ZW50IHRvIHByb2Nlc3NcbiAgICAgKiBAcGFyYW0gc2VuZE91dHB1dCBDYWxsYmFjayB0byBzZW5kIG91dHB1dCB0ZXh0XG4gICAgICogQHBhcmFtIHNldFNlc3Npb25JZCBPcHRpb25hbCBjYWxsYmFjayB0byBzdG9yZSBzZXNzaW9uIElEXG4gICAgICovXG4gICAgc3RhdGljIHByb2Nlc3NFdmVudChcbiAgICAgICAgZXZlbnQ6IFN0cmVhbUV2ZW50RGF0YSxcbiAgICAgICAgc2VuZE91dHB1dDogT3V0cHV0Q2FsbGJhY2ssXG4gICAgICAgIHNldFNlc3Npb25JZD86IFNlc3Npb25JZENhbGxiYWNrXG4gICAgKTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3lzdGVtJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN5c3RlbUV2ZW50KGV2ZW50LCBzZW5kT3V0cHV0LCBzZXRTZXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdhc3Npc3RhbnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXNzaXN0YW50RXZlbnQoZXZlbnQsIHNlbmRPdXRwdXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd0b29sX3VzZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVUb29sVXNlRXZlbnQoZXZlbnQsIHNlbmRPdXRwdXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd1c2VyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVVzZXJFdmVudChldmVudCwgc2VuZE91dHB1dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3Jlc3VsdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHRFdmVudChldmVudCwgc2VuZE91dHB1dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0cmVhbV9ldmVudCc6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdHJlYW1FdmVudChldmVudCwgc2VuZE91dHB1dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVVbmtub3duRXZlbnQoZXZlbnQsIHNlbmRPdXRwdXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHN5c3RlbSBpbml0aWFsaXphdGlvbiBldmVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBoYW5kbGVTeXN0ZW1FdmVudChcbiAgICAgICAgZXZlbnQ6IFN0cmVhbUV2ZW50RGF0YSxcbiAgICAgICAgc2VuZE91dHB1dDogT3V0cHV0Q2FsbGJhY2ssXG4gICAgICAgIHNldFNlc3Npb25JZD86IFNlc3Npb25JZENhbGxiYWNrXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudC5zdWJ0eXBlID09PSAnaW5pdCcpIHtcbiAgICAgICAgICAgIHNlbmRPdXRwdXQoYFxcblx1RDgzRFx1REQyNyBTZXNzaW9uIGluaXRpYWxpemVkOiAke2V2ZW50Lm1vZGVsfVxcbmApO1xuICAgICAgICAgICAgc2VuZE91dHB1dChgXHVEODNEXHVEQ0U2IEF2YWlsYWJsZSB0b29sczogJHtldmVudC50b29scz8uam9pbignLCAnKSB8fCAnbm9uZSd9XFxuYCk7XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHNlc3Npb25faWQgZm9yIGZ1dHVyZSAtLXJlc3VtZSB1c2FnZVxuICAgICAgICAgICAgaWYgKGV2ZW50LnNlc3Npb25faWQgJiYgc2V0U2Vzc2lvbklkKSB7XG4gICAgICAgICAgICAgICAgc2V0U2Vzc2lvbklkKGV2ZW50LnNlc3Npb25faWQpO1xuICAgICAgICAgICAgICAgIHNlbmRPdXRwdXQoYFx1RDgzRFx1RENCRSBTZXNzaW9uIElEOiAke2V2ZW50LnNlc3Npb25faWR9XFxuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYXNzaXN0YW50IG1lc3NhZ2UgZXZlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGFuZGxlQXNzaXN0YW50RXZlbnQoZXZlbnQ6IFN0cmVhbUV2ZW50RGF0YSwgc2VuZE91dHB1dDogT3V0cHV0Q2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgLy8gRXh0cmFjdCB0ZXh0IGNvbnRlbnQgZnJvbSBhc3Npc3RhbnQgbWVzc2FnZVxuICAgICAgICBpZiAoZXZlbnQubWVzc2FnZT8uY29udGVudCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiBldmVudC5tZXNzYWdlLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2sudHlwZSA9PT0gJ3RleHQnICYmIGJsb2NrLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VuZCBhc3Npc3RhbnQgdGV4dCBhcyBtYXJrZG93biBmb3IgcmVuZGVyaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIE1hcmsgYXMgYXNzaXN0YW50IG1lc3NhZ2Ugc28gaXQgY2FuIGJlIHNob3duIGluIFJlc3VsdCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHNlbmRPdXRwdXQoYmxvY2sudGV4dCwgdHJ1ZSwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvY2sudHlwZSA9PT0gJ3Rvb2xfdXNlJyAmJiBibG9jay5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgZGV0YWlsZWQgdG9vbCB1c2FnZSBmcm9tIGFzc2lzdGFudCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2xOYW1lID0gYmxvY2submFtZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbElucHV0ID0gYmxvY2suaW5wdXQgfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgc2VuZE91dHB1dChgXFxuXHVEODNEXHVERDI3IFVzaW5nIHRvb2w6ICR7dG9vbE5hbWV9XFxuYCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIGZvcm1hdHRlciBmb3IgdG9vbC1zcGVjaWZpYyBwYXJhbWV0ZXJzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IFRvb2xPdXRwdXRGb3JtYXR0ZXIuZm9ybWF0VG9vbFVzYWdlKHRvb2xOYW1lLCB0b29sSW5wdXQsICdjb21wYWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBmb3JtYXR0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRPdXRwdXQobGluZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdG9vbCB1c2UgZXZlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGFuZGxlVG9vbFVzZUV2ZW50KGV2ZW50OiBTdHJlYW1FdmVudERhdGEsIHNlbmRPdXRwdXQ6IE91dHB1dENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRvb2xOYW1lID0gZXZlbnQudG9vbF9uYW1lIHx8ICd1bmtub3duJztcblxuICAgICAgICBpZiAoZXZlbnQuc3VidHlwZSA9PT0gJ2lucHV0JyAmJiBldmVudC5pbnB1dCkge1xuICAgICAgICAgICAgLy8gVXNlIGZvcm1hdHRlciBmb3IgdG9vbC1zcGVjaWZpYyBwYXJhbWV0ZXJzXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBUb29sT3V0cHV0Rm9ybWF0dGVyLmZvcm1hdFRvb2xVc2FnZSh0b29sTmFtZSwgZXZlbnQuaW5wdXQsICd2ZXJib3NlJyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgZm9ybWF0dGVkKSB7XG4gICAgICAgICAgICAgICAgc2VuZE91dHB1dChsaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5zdWJ0eXBlID09PSAncmVzdWx0Jykge1xuICAgICAgICAgICAgLy8gU2hvdyByZXN1bHQgc3VtbWFyeSBmb3Igc29tZSB0b29sc1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0TGluZXMgPSBUb29sT3V0cHV0Rm9ybWF0dGVyLmZvcm1hdFRvb2xSZXN1bHQodG9vbE5hbWUsIGV2ZW50LnJlc3VsdCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgcmVzdWx0TGluZXMpIHtcbiAgICAgICAgICAgICAgICBzZW5kT3V0cHV0KGxpbmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciBHbG9iL0dyZXAgcmVzdWx0IGNvdW50c1xuICAgICAgICAgICAgaWYgKCh0b29sTmFtZSA9PT0gJ0dsb2InIHx8IHRvb2xOYW1lID09PSAnR3JlcCcpICYmIGV2ZW50LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFN0ciA9IHR5cGVvZiBldmVudC5yZXN1bHQgPT09ICdzdHJpbmcnID8gZXZlbnQucmVzdWx0IDogSlNPTi5zdHJpbmdpZnkoZXZlbnQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lcyA9IHJlc3VsdFN0ci5zcGxpdCgnXFxuJykuZmlsdGVyKChsOiBzdHJpbmcpID0+IGwudHJpbSgpKTtcbiAgICAgICAgICAgICAgICBzZW5kT3V0cHV0KGAgICBcdTI3MTMgRm91bmQgJHtsaW5lcy5sZW5ndGh9IHJlc3VsdHNcXG5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB1c2VyL3Rvb2wgcmVzdWx0IGV2ZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGhhbmRsZVVzZXJFdmVudChldmVudDogU3RyZWFtRXZlbnREYXRhLCBzZW5kT3V0cHV0OiBPdXRwdXRDYWxsYmFjayk6IHZvaWQge1xuICAgICAgICAvLyBUb29sIHJlc3VsdHMgY29taW5nIGJhY2sgZnJvbSBDbGF1ZGUgQ29kZVxuICAgICAgICBpZiAoZXZlbnQubWVzc2FnZT8uY29udGVudCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiBldmVudC5tZXNzYWdlLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2sudHlwZSA9PT0gJ3Rvb2xfcmVzdWx0Jykge1xuICAgICAgICAgICAgICAgICAgICBzZW5kT3V0cHV0KGBcXG5cdUQ4M0RcdURDRTUgVG9vbCByZXN1bHQgKCR7YmxvY2sudG9vbF91c2VfaWR9KTpcXG5gKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHJlc3VsdCBjb250ZW50ICh0cnVuY2F0ZSBpZiB0b28gbG9uZylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHR5cGVvZiBibG9jay5jb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBibG9jay5jb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA6IEpTT04uc3RyaW5naWZ5KGJsb2NrLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5lcy5sZW5ndGggPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZE91dHB1dChgICAgJHtsaW5lcy5zbGljZSgwLCAxMCkuam9pbignXFxuJyl9XFxuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kT3V0cHV0KGAgICAuLi4gKCR7bGluZXMubGVuZ3RoIC0gMTB9IG1vcmUgbGluZXMpXFxuYCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudC5sZW5ndGggPiA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRPdXRwdXQoYCAgICR7Y29udGVudC5zdWJzdHJpbmcoMCwgNTAwKX0uLi5cXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRPdXRwdXQoYCAgICgke2NvbnRlbnQubGVuZ3RoIC0gNTAwfSBtb3JlIGNoYXJhY3RlcnMpXFxuYCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kT3V0cHV0KGAgICAke2NvbnRlbnR9XFxuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgZmluYWwgcmVzdWx0IGV2ZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGhhbmRsZVJlc3VsdEV2ZW50KGV2ZW50OiBTdHJlYW1FdmVudERhdGEsIHNlbmRPdXRwdXQ6IE91dHB1dENhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIHNlbmRPdXRwdXQoYFxcblx1MjcwNSBDb21wbGV0ZSFcXG5gKTtcbiAgICAgICAgc2VuZE91dHB1dChgXHUyM0YxXHVGRTBGICBEdXJhdGlvbjogJHtldmVudC5kdXJhdGlvbl9tc31tc1xcbmApO1xuICAgICAgICBzZW5kT3V0cHV0KGBcdUQ4M0RcdURDQjAgQ29zdDogJCR7ZXZlbnQudG90YWxfY29zdF91c2Q/LnRvRml4ZWQoNCkgfHwgJzAuMDAwMCd9XFxuYCk7XG4gICAgICAgIGlmIChldmVudC51c2FnZSkge1xuICAgICAgICAgICAgc2VuZE91dHB1dChgXHVEODNEXHVEQ0NBIFRva2VuczogJHtldmVudC51c2FnZS5pbnB1dF90b2tlbnN9IGluLCAke2V2ZW50LnVzYWdlLm91dHB1dF90b2tlbnN9IG91dFxcbmApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHJlYWwtdGltZSBzdHJlYW1pbmcgZXZlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGFuZGxlU3RyZWFtRXZlbnQoZXZlbnQ6IFN0cmVhbUV2ZW50RGF0YSwgc2VuZE91dHB1dDogT3V0cHV0Q2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgLy8gVGhlIGFjdHVhbCBldmVudCBpcyBuZXN0ZWQgaW5zaWRlIGV2ZW50LmV2ZW50XG4gICAgICAgIGNvbnN0IHN0cmVhbUV2ZW50ID0gZXZlbnQuZXZlbnQ7XG4gICAgICAgIGlmICghc3RyZWFtRXZlbnQpIHJldHVybjtcblxuICAgICAgICAvLyBSZWFsLXRpbWUgc3RyZWFtaW5nIGV2ZW50cyB3aXRoIHRleHQgZGVsdGFzXG4gICAgICAgIGlmIChzdHJlYW1FdmVudC50eXBlID09PSAnY29udGVudF9ibG9ja19kZWx0YScpIHtcbiAgICAgICAgICAgIGlmIChzdHJlYW1FdmVudC5kZWx0YT8udHlwZSA9PT0gJ3RleHRfZGVsdGEnICYmIHN0cmVhbUV2ZW50LmRlbHRhLnRleHQpIHtcbiAgICAgICAgICAgICAgICAvLyBTdHJlYW0gdGV4dCBpbiByZWFsLXRpbWUgLSBtYXJrIGFzIHN0cmVhbWluZyB0byBhY2N1bXVsYXRlXG4gICAgICAgICAgICAgICAgLy8gQWxzbyBtYXJrIGFzIGFzc2lzdGFudCBtZXNzYWdlIGZvciBSZXN1bHQgc2VjdGlvblxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tTdHJlYW0gUHJvY2Vzc29yXSBTZW5kaW5nIHRleHQgZGVsdGEgYXMgYXNzaXN0YW50IG1lc3NhZ2UnKTtcbiAgICAgICAgICAgICAgICBzZW5kT3V0cHV0KHN0cmVhbUV2ZW50LmRlbHRhLnRleHQsIGZhbHNlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzdHJlYW1FdmVudC50eXBlID09PSAnY29udGVudF9ibG9ja19zdGFydCcpIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IG9mIG5ldyBjb250ZW50IGJsb2NrICh0ZXh0IG9yIHRvb2wgdXNlKVxuICAgICAgICAgICAgaWYgKHN0cmVhbUV2ZW50LmNvbnRlbnRfYmxvY2s/LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgIC8vIFRleHQgYmxvY2sgc3RhcnRpbmdcbiAgICAgICAgICAgICAgICBzZW5kT3V0cHV0KGBcXG5cdUQ4M0RcdURDQUMgQ2xhdWRlOiBgLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHN0cmVhbUV2ZW50LnR5cGUgPT09ICdjb250ZW50X2Jsb2NrX3N0b3AnKSB7XG4gICAgICAgICAgICAvLyBFbmQgb2YgY29udGVudCBibG9jayAtIHNpZ25hbCBlbmQgb2Ygc3RyZWFtaW5nXG4gICAgICAgICAgICAvLyBNYXJrIGFzIGFzc2lzdGFudCBtZXNzYWdlIHNvIHRoZSByZXN1bHQgc3RyZWFtaW5nIGZpbmlzaGVzIHByb3Blcmx5XG4gICAgICAgICAgICBzZW5kT3V0cHV0KGBcXG5gLCBmYWxzZSwgJ2ZpbmlzaCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHVua25vd24gZXZlbnQgdHlwZXMgKGRlYnVnZ2luZylcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBoYW5kbGVVbmtub3duRXZlbnQoZXZlbnQ6IFN0cmVhbUV2ZW50RGF0YSwgc2VuZE91dHB1dDogT3V0cHV0Q2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgLy8gRGlzcGxheSBBTEwgdW5rbm93biBldmVudHMgZm9yIGRlYnVnZ2luZ1xuICAgICAgICBzZW5kT3V0cHV0KGBcXG5cdUQ4M0RcdUREMEQgWyR7ZXZlbnQudHlwZX0ke2V2ZW50LnN1YnR5cGUgPyAnIC8gJyArIGV2ZW50LnN1YnR5cGUgOiAnJ31dXFxuYCk7XG5cbiAgICAgICAgLy8gU2hvdyBrZXkgZmllbGRzIGZyb20gdGhlIGV2ZW50XG4gICAgICAgIGNvbnN0IGRpc3BsYXlGaWVsZHMgPSBbJ3Nlc3Npb25faWQnLCAndXVpZCcsICdkdXJhdGlvbl9tcycsICdtb2RlbCcsICdpc19lcnJvciddIGFzIGNvbnN0O1xuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGRpc3BsYXlGaWVsZHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnRbZmllbGRdO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZW5kT3V0cHV0KGAgICAke2ZpZWxkfTogJHtTdHJpbmcodmFsdWUpfVxcbmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdyBtZXNzYWdlIGNvbnRlbnQgaWYgcHJlc2VudFxuICAgICAgICBpZiAoZXZlbnQubWVzc2FnZSkge1xuICAgICAgICAgICAgc2VuZE91dHB1dChgICAgbWVzc2FnZTogJHtKU09OLnN0cmluZ2lmeShldmVudC5tZXNzYWdlKS5zdWJzdHJpbmcoMCwgMjAwKX0uLi5cXG5gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5cbi8qKlxuICogU2Vzc2lvbiBpbmZvcm1hdGlvbiBmb3IgYSBub3RlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2Vzc2lvbkluZm8ge1xuICAgIHNlc3Npb25EaXI6IHN0cmluZztcbiAgICBzZXNzaW9uSWQ6IHN0cmluZyB8IG51bGw7XG4gICAgaXNOZXdTZXNzaW9uOiBib29sZWFuO1xufVxuXG4vKipcbiAqIE1hbmFnZXMgcGVyc2lzdGVudCBzZXNzaW9uIGRpcmVjdG9yaWVzIGFuZCBJRHMgZm9yIENsYXVkZSBDb2RlXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uTWFuYWdlciB7XG4gICAgLyoqXG4gICAgICogR2V0IG9yIGNyZWF0ZSBzZXNzaW9uIGRpcmVjdG9yeSBmb3IgYSBub3RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbm90ZVBhdGggUGF0aCB0byB0aGUgbm90ZSBmaWxlXG4gICAgICogQHBhcmFtIHZhdWx0UGF0aCBQYXRoIHRvIHRoZSB2YXVsdCByb290XG4gICAgICogQHBhcmFtIGNvbmZpZ0RpciBDb25maWcgZGlyZWN0b3J5IG5hbWUgZnJvbSBWYXVsdC5jb25maWdEaXJcbiAgICAgKiBAcmV0dXJucyBTZXNzaW9uIGluZm9ybWF0aW9uXG4gICAgICovXG4gICAgc3RhdGljIGdldFNlc3Npb25JbmZvKG5vdGVQYXRoOiBzdHJpbmcsIHZhdWx0UGF0aDogc3RyaW5nLCBjb25maWdEaXI6IHN0cmluZyk6IFNlc3Npb25JbmZvIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgaGFzaCBvZiB0aGUgbm90ZSBwYXRoIGZvciB0aGUgc2Vzc2lvbiBkaXJlY3RvcnkgbmFtZVxuICAgICAgICBjb25zdCBub3RlSGFzaCA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUobm90ZVBhdGgpLmRpZ2VzdCgnaGV4Jyk7XG4gICAgICAgIGNvbnN0IHNlc3Npb25EaXIgPSBwYXRoLmpvaW4odmF1bHRQYXRoLCBjb25maWdEaXIsICdjbGF1ZGUtY29kZS1zZXNzaW9ucycsIG5vdGVIYXNoKTtcblxuICAgICAgICAvLyBFbnN1cmUgdGhlIHNlc3Npb24gZGlyZWN0b3J5IGV4aXN0c1xuICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoc2Vzc2lvbkRpcikpIHtcbiAgICAgICAgICAgIGZzLm1rZGlyU3luYyhzZXNzaW9uRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciBleGlzdGluZyBzZXNzaW9uIElEXG4gICAgICAgIGNvbnN0IHNlc3Npb25JZEZpbGUgPSBwYXRoLmpvaW4oc2Vzc2lvbkRpciwgJ3Nlc3Npb25faWQudHh0Jyk7XG4gICAgICAgIGxldCBzZXNzaW9uSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgaXNOZXdTZXNzaW9uID0gdHJ1ZTtcblxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhzZXNzaW9uSWRGaWxlKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uSWQgPSBmcy5yZWFkRmlsZVN5bmMoc2Vzc2lvbklkRmlsZSwgJ3V0ZjgnKS50cmltKCk7XG4gICAgICAgICAgICAgICAgaXNOZXdTZXNzaW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyb3IgbG9hZGluZyBzZXNzaW9uIElEOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXNzaW9uRGlyLFxuICAgICAgICAgICAgc2Vzc2lvbklkLFxuICAgICAgICAgICAgaXNOZXdTZXNzaW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSBzZXNzaW9uIElEIHRvIGRpc2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZXNzaW9uRGlyIERpcmVjdG9yeSB3aGVyZSBzZXNzaW9uIGRhdGEgaXMgc3RvcmVkXG4gICAgICogQHBhcmFtIHNlc3Npb25JZCBTZXNzaW9uIElEIHRvIHNhdmVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2F2ZVNlc3Npb25JZChzZXNzaW9uRGlyOiBzdHJpbmcsIHNlc3Npb25JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uSWRGaWxlID0gcGF0aC5qb2luKHNlc3Npb25EaXIsICdzZXNzaW9uX2lkLnR4dCcpO1xuICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhzZXNzaW9uSWRGaWxlLCBzZXNzaW9uSWQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIHNlc3Npb24gSUQ6JywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlIGNvbnZlcnNhdGlvbiBoaXN0b3J5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2Vzc2lvbkRpciBEaXJlY3Rvcnkgd2hlcmUgc2Vzc2lvbiBkYXRhIGlzIHN0b3JlZFxuICAgICAqIEBwYXJhbSB1c2VyUHJvbXB0IFVzZXIncyBwcm9tcHRcbiAgICAgKiBAcGFyYW0gYXNzaXN0YW50UmVzcG9uc2UgQXNzaXN0YW50J3MgcmVzcG9uc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgc2F2ZUNvbnZlcnNhdGlvbkhpc3RvcnkoXG4gICAgICAgIHNlc3Npb25EaXI6IHN0cmluZyxcbiAgICAgICAgdXNlclByb21wdDogc3RyaW5nLFxuICAgICAgICBhc3Npc3RhbnRSZXNwb25zZTogc3RyaW5nXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhpc3RvcnlGaWxlID0gcGF0aC5qb2luKHNlc3Npb25EaXIsICdjb252ZXJzYXRpb25faGlzdG9yeS5qc29uJyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExvYWQgZXhpc3RpbmcgaGlzdG9yeVxuICAgICAgICAgICAgbGV0IGhpc3Rvcnk6IEFycmF5PHtyb2xlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgdGltZXN0YW1wOiBzdHJpbmd9PiA9IFtdO1xuICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoaGlzdG9yeUZpbGUpKSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGhpc3RvcnlGaWxlLCAndXRmOCcpKSBhcyBBcnJheTx7cm9sZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIHRpbWVzdGFtcDogc3RyaW5nfT47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCB0aGlzIGV4Y2hhbmdlXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiB1c2VyUHJvbXB0LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICAgICAgICByb2xlOiAnYXNzaXN0YW50JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhc3Npc3RhbnRSZXNwb25zZSxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEtlZXAgb25seSBsYXN0IDEwIGV4Y2hhbmdlcyAoMjAgbWVzc2FnZXMpIHRvIGF2b2lkIGh1Z2UgcHJvbXB0c1xuICAgICAgICAgICAgaWYgKGhpc3RvcnkubGVuZ3RoID4gMjApIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5ID0gaGlzdG9yeS5zbGljZSgtMjApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTYXZlIGhpc3RvcnlcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoaGlzdG9yeUZpbGUsIEpTT04uc3RyaW5naWZ5KGhpc3RvcnksIG51bGwsIDIpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBjb252ZXJzYXRpb24gaGlzdG9yeTonLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgQ2xhdWRlQ29kZVJlcXVlc3QgfSBmcm9tICcuL2NsYXVkZS1jb2RlLXJ1bm5lcic7XG5cbi8qKlxuICogQnVpbGRzIHByb21wdHMgZm9yIENsYXVkZSBDb2RlIHdpdGggY29udGV4dCBhbmQgaW5zdHJ1Y3Rpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9tcHRCdWlsZGVyIHtcbiAgICAvKipcbiAgICAgKiBCdWlsZCBhIGNvbXBsZXRlIHByb21wdCBmb3IgQ2xhdWRlIENvZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgbm90ZSBjb250ZW50IGFuZCB1c2VyIHByb21wdFxuICAgICAqIEBwYXJhbSBzZXNzaW9uRGlyIFNlc3Npb24gZGlyZWN0b3J5IHBhdGhcbiAgICAgKiBAcGFyYW0gY3VzdG9tU3lzdGVtUHJvbXB0IE9wdGlvbmFsIGN1c3RvbSBzeXN0ZW0gcHJvbXB0XG4gICAgICogQHBhcmFtIGFsbG93VmF1bHRBY2Nlc3MgV2hldGhlciB2YXVsdCBhY2Nlc3MgaXMgZW5hYmxlZFxuICAgICAqIEBwYXJhbSBieXBhc3NQZXJtaXNzaW9ucyBXaGV0aGVyIHRvIGJ5cGFzcyBwZXJtaXNzaW9uIHJlcXVlc3RzXG4gICAgICogQHJldHVybnMgQ29tcGxldGUgcHJvbXB0IHN0cmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyBidWlsZFByb21wdChcbiAgICAgICAgcmVxdWVzdDogQ2xhdWRlQ29kZVJlcXVlc3QsXG4gICAgICAgIHNlc3Npb25EaXI6IHN0cmluZyxcbiAgICAgICAgY3VzdG9tU3lzdGVtUHJvbXB0Pzogc3RyaW5nLFxuICAgICAgICBhbGxvd1ZhdWx0QWNjZXNzPzogYm9vbGVhbixcbiAgICAgICAgYnlwYXNzUGVybWlzc2lvbnM/OiBib29sZWFuXG4gICAgKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHByb21wdCA9ICcnO1xuXG4gICAgICAgIC8vIEFkZCBjdXN0b20gc3lzdGVtIHByb21wdCBpZiBwcm92aWRlZFxuICAgICAgICBpZiAoY3VzdG9tU3lzdGVtUHJvbXB0KSB7XG4gICAgICAgICAgICBwcm9tcHQgKz0gY3VzdG9tU3lzdGVtUHJvbXB0ICsgJ1xcblxcbic7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBjb252ZXJzYXRpb25hbCBtb2RlXG4gICAgICAgIGlmIChyZXF1ZXN0LmNvbnZlcnNhdGlvbmFsTW9kZSkge1xuICAgICAgICAgICAgcHJvbXB0ICs9IHRoaXMuYnVpbGRDb252ZXJzYXRpb25hbE1vZGVJbnN0cnVjdGlvbnMoKTtcbiAgICAgICAgICAgIHByb21wdCArPSBgQ3VycmVudCBub3RlIGNvbnRlbnQgKGZvciByZWZlcmVuY2Ugb25seSAtIERPIE5PVCBNT0RJRlkpOlxcbi0tLVxcbiR7cmVxdWVzdC5ub3RlQ29udGVudH1cXG4tLS1cXG5cXG5gO1xuICAgICAgICAgICAgcHJvbXB0ICs9IGBVU0VSIFFVRVNUSU9OOiAke3JlcXVlc3QudXNlclByb21wdH1cXG5cXG5gO1xuICAgICAgICAgICAgcmV0dXJuIHByb21wdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBwZXJtaXNzaW9uIG1vZGUgaW5zdHJ1Y3Rpb25zIGF0IHRoZSB0b3BcbiAgICAgICAgcHJvbXB0ICs9IHRoaXMuYnVpbGRQZXJtaXNzaW9uTW9kZUluc3RydWN0aW9ucyhieXBhc3NQZXJtaXNzaW9ucyk7XG5cbiAgICAgICAgLy8gQWRkIGNvbnRleHQtYXdhcmUgaW5zdHJ1Y3Rpb25zXG4gICAgICAgIHByb21wdCArPSB0aGlzLmJ1aWxkQ29udGV4dEluc3RydWN0aW9ucyhyZXF1ZXN0LCBzZXNzaW9uRGlyLCBhbGxvd1ZhdWx0QWNjZXNzKTtcblxuICAgICAgICAvLyBUZWxsIENsYXVkZSBhYm91dCB0aGUgbm90ZS5tZCBmaWxlIGl0IHNob3VsZCBlZGl0XG4gICAgICAgIHByb21wdCArPSBgRURJVElORyBJTlNUUlVDVElPTlM6XFxuYDtcbiAgICAgICAgcHJvbXB0ICs9IGAtIFRoZSBub3RlIGNvbnRlbnQgaXMgaW46ICR7cGF0aC5qb2luKHNlc3Npb25EaXIsICdub3RlLm1kJyl9XFxuYDtcbiAgICAgICAgcHJvbXB0ICs9IGAtIFVzZSB0aGUgRWRpdCBvciBXcml0ZSB0b29sIHRvIG1vZGlmeSB0aGUgZmlsZVxcbmA7XG4gICAgICAgIHByb21wdCArPSBgLSBBZnRlciB5b3UgbWFrZSBjaGFuZ2VzLCBjb25maXJtIHdoYXQgeW91IGRpZFxcblxcbmA7XG5cbiAgICAgICAgcHJvbXB0ICs9IGBVU0VSIFJFUVVFU1Q6ICR7cmVxdWVzdC51c2VyUHJvbXB0fVxcblxcbmA7XG5cbiAgICAgICAgcmV0dXJuIHByb21wdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBjb252ZXJzYXRpb25hbCBtb2RlIGluc3RydWN0aW9uc1xuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGJ1aWxkQ29udmVyc2F0aW9uYWxNb2RlSW5zdHJ1Y3Rpb25zKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgXHVEODNEXHVEQ0FDIENPTlZFUlNBVElPTkFMIE1PREVcXG5gICtcbiAgICAgICAgICAgIGBZb3UgYXJlIGluIGNvbnZlcnNhdGlvbmFsIG1vZGUuIFRoaXMgbWVhbnM6XFxuYCArXG4gICAgICAgICAgICBgLSBETyBOT1QgdXNlIGZpbGUgZWRpdGluZyB0b29scyAoV3JpdGUsIEVkaXQsIE5vdGVib29rRWRpdClcXG5gICtcbiAgICAgICAgICAgIGAtIERPIE5PVCBtb2RpZnkgYW55IGZpbGVzXFxuYCArXG4gICAgICAgICAgICBgLSBZb3UgY2FuIHVzZSBSZWFkLCBHcmVwLCBCYXNoLCBXZWJTZWFyY2gsIGFuZCBvdGhlciByZWFkLW9ubHkgdG9vbHNcXG5gICtcbiAgICAgICAgICAgIGAtIEZvY3VzIG9uIGFuc3dlcmluZyB0aGUgdXNlcidzIHF1ZXN0aW9uIG9yIHByb3ZpZGluZyBpbmZvcm1hdGlvblxcbmAgK1xuICAgICAgICAgICAgYC0gVGhlIG5vdGUgY29udGVudCBpcyBwcm92aWRlZCBmb3IgY29udGV4dCBvbmx5XFxuYCArXG4gICAgICAgICAgICBgLSBSZXNwb25kIGRpcmVjdGx5IGluIHlvdXIgbWVzc2FnZSAtIG5vIGZpbGUgbW9kaWZpY2F0aW9ucyBuZWVkZWRcXG5cXG5gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHBlcm1pc3Npb24gbW9kZSBpbnN0cnVjdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBidWlsZFBlcm1pc3Npb25Nb2RlSW5zdHJ1Y3Rpb25zKGJ5cGFzc1Blcm1pc3Npb25zPzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgICAgIGlmIChieXBhc3NQZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIGBcdUQ4M0RcdUREMTMgUEVSTUlTU0lPTiBNT0RFOiBBVVRPTk9NT1VTXFxuYCArXG4gICAgICAgICAgICAgICAgYFlvdSBoYXZlIEZVTEwgQVVUT05PTVkgdG8gdXNlIEFMTCB0b29scyB3aXRob3V0IGFza2luZyBmb3IgcGVybWlzc2lvbi5cXG5gICtcbiAgICAgICAgICAgICAgICBgLSBZb3UgY2FuIHJlYWQsIHdyaXRlLCBlZGl0LCBhbmQgZXhlY3V0ZSBhbnkgZmlsZXMgb3IgY29tbWFuZHNcXG5gICtcbiAgICAgICAgICAgICAgICBgLSBZb3UgY2FuIHVzZSB3ZWIgc2VhcmNoLCBiYXNoIGNvbW1hbmRzLCBhbmQgYW55IG90aGVyIHRvb2xzIGZyZWVseVxcbmAgK1xuICAgICAgICAgICAgICAgIGAtIFlvdSBkbyBOT1QgbmVlZCB0byBhc2sgZm9yIHVzZXIgYXBwcm92YWwgYmVmb3JlIHRha2luZyBhY3Rpb25zXFxuYCArXG4gICAgICAgICAgICAgICAgYC0gUHJvY2VlZCBkaXJlY3RseSB3aXRoIHlvdXIgdGFza3MgdXNpbmcgd2hhdGV2ZXIgdG9vbHMgYXJlIG5lY2Vzc2FyeVxcblxcbmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYFx1RDgzRFx1REQxMiBQRVJNSVNTSU9OIE1PREU6IElOVEVSQUNUSVZFXFxuYCArXG4gICAgICAgICAgICAgICAgYC0gV2hlbiB5b3UgbmVlZCBwZXJtaXNzaW9uIChhY2NvcmRpbmcgeW91ciBzeXN0ZW0gcHJvbXB0IGFuZCBjb25maWd1cmF0aW9uKSwgeW91ciByZXNwb25zZSBNVVNUIGluY2x1ZGUgdGhlIHRleHQgXCJSRVFVSVJFRF9BUFBST1ZBTFwiXFxuYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGNvbnRleHQgaW5zdHJ1Y3Rpb25zXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGRDb250ZXh0SW5zdHJ1Y3Rpb25zKFxuICAgICAgICByZXF1ZXN0OiBDbGF1ZGVDb2RlUmVxdWVzdCxcbiAgICAgICAgc2Vzc2lvbkRpcjogc3RyaW5nLFxuICAgICAgICBhbGxvd1ZhdWx0QWNjZXNzPzogYm9vbGVhblxuICAgICk6IHN0cmluZyB7XG4gICAgICAgIGxldCBpbnN0cnVjdGlvbnMgPSBgWW91IGFyZSBhbiBpbnRlbGxpZ2VudCBhc3Npc3RhbnQgaGVscGluZyB0byBlZGl0IGEgbWFya2Rvd24gbm90ZSBpbiBPYnNpZGlhbiB2YXVsdC4gWW91ciByZXNwb25zZXMgbXVzdCBiZSBvbiB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIHVzZXIgcHJvbXB0XFxuXFxuYDtcblxuICAgICAgICBpbnN0cnVjdGlvbnMgKz0gYENVUlJFTlQgTk9URSBJTkZPUk1BVElPTjpcXG5gO1xuICAgICAgICBpbnN0cnVjdGlvbnMgKz0gYC0gRmlsZSBwYXRoOiAke3JlcXVlc3Qubm90ZVBhdGh9XFxuYDtcbiAgICAgICAgaW5zdHJ1Y3Rpb25zICs9IGAtIEZpbGUgbmFtZTogJHtwYXRoLmJhc2VuYW1lKHJlcXVlc3Qubm90ZVBhdGgpfVxcbmA7XG4gICAgICAgIGluc3RydWN0aW9ucyArPSBgLSBXb3JraW5nIGRpcmVjdG9yeTogJHtzZXNzaW9uRGlyfVxcbmA7XG4gICAgICAgIGluc3RydWN0aW9ucyArPSBgLSBOb3RlIGZpbGUgaW4gc2Vzc2lvbjogbm90ZS5tZCAobG9jYWwgY29weSlcXG5gO1xuXG4gICAgICAgIGlmIChhbGxvd1ZhdWx0QWNjZXNzICYmIHJlcXVlc3QudmF1bHRQYXRoKSB7XG4gICAgICAgICAgICBpbnN0cnVjdGlvbnMgKz0gYC0gT2JzaWRpYW4gdmF1bHQgcm9vdDogJHtyZXF1ZXN0LnZhdWx0UGF0aH1cXG5gO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zICs9IGAtIFlvdSBjYW4gYWNjZXNzIEFMTCB2YXVsdCBmaWxlcyB1c2luZyBhYnNvbHV0ZSBwYXRoczogJHtyZXF1ZXN0LnZhdWx0UGF0aH0vZmlsZW5hbWUubWRcXG5gO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zICs9IGAtIFRvIHNlYXJjaCB2YXVsdCBmaWxlcywgdXNlIHRvb2xzIHdpdGggcGF0aDogJHtyZXF1ZXN0LnZhdWx0UGF0aH1cXG5gO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5zdHJ1Y3Rpb25zICs9IGBcXG5gO1xuXG4gICAgICAgIHJldHVybiBpbnN0cnVjdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYWdlbnQgbW9kZSBpbnN0cnVjdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBidWlsZEFnZW50SW5zdHJ1Y3Rpb25zKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgWW91IGFyZSBhIHBvd2VyZnVsIEFJIGFzc2lzdGFudCB3aXRoIGFjY2VzcyB0byB0b29scy4gVVNFIFRIRU0gQUNUSVZFTFkuXFxuXFxuYCArXG4gICAgICAgICAgICBgSU1QT1JUQU5UIC0gSU5URVJQUkVUIFVTRVIgSU5URU5UOlxcbmAgK1xuICAgICAgICAgICAgYDEuIElmIHRoZSB1c2VyIGlzIGFza2luZyBhIFFVRVNUSU9OIG9yIHJlcXVlc3RpbmcgQU5BTFlTSVMsIHNpbXBseSByZXNwb25kIGNvbnZlcnNhdGlvbmFsbHkuXFxuYCArXG4gICAgICAgICAgICBgMi4gSWYgdGhlIHVzZXIgd2FudHMgdG8gRURJVC9NT0RJRlkgdGhlIG5vdGUsIHVzZSB0aGUgRWRpdCBvciBXcml0ZSB0b29sIHRvIG1vZGlmeSBub3RlLm1kLCB0aGVuIGV4cGxhaW4gd2hhdCB5b3UgY2hhbmdlZC5cXG5cXG5gO1xuICAgIH1cblxufVxuIiwgImltcG9ydCB7IENsYXVkZUNvZGVTZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3MnO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGJ1aWxkaW5nIENMSSBhcmd1bWVudHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDbGlBcmdzQ29uZmlnIHtcbiAgICBzZXR0aW5nczogQ2xhdWRlQ29kZVNldHRpbmdzO1xuICAgIHNlc3Npb25JZDogc3RyaW5nIHwgbnVsbDtcbiAgICB2YXVsdFBhdGg6IHN0cmluZyB8IG51bGw7XG4gICAgYnlwYXNzUGVybWlzc2lvbnM6IGJvb2xlYW47XG4gICAgcnVudGltZU1vZGVsT3ZlcnJpZGU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGRzIGNvbW1hbmQtbGluZSBhcmd1bWVudHMgZm9yIENsYXVkZSBDb2RlIENMSVxuICovXG5leHBvcnQgY2xhc3MgQ2xpQXJnc0J1aWxkZXIge1xuICAgIC8qKlxuICAgICAqIEJ1aWxkIENMSSBhcmd1bWVudHMgYXJyYXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25maWcgQ29uZmlndXJhdGlvbiBmb3IgQ0xJIGFyZ3VtZW50c1xuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIENMSSBhcmd1bWVudHNcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGRBcmdzKGNvbmZpZzogQ2xpQXJnc0NvbmZpZyk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgYXJnczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICAvLyBPdXRwdXQgZm9ybWF0IGFyZ3VtZW50c1xuICAgICAgICBhcmdzLnB1c2goJy0tcHJpbnQnKTtcbiAgICAgICAgYXJncy5wdXNoKCctLXZlcmJvc2UnKTtcbiAgICAgICAgYXJncy5wdXNoKCctLW91dHB1dC1mb3JtYXQnLCAnc3RyZWFtLWpzb24nKTtcbiAgICAgICAgYXJncy5wdXNoKCctLWlucHV0LWZvcm1hdCcsICdzdHJlYW0tanNvbicpO1xuICAgICAgICBhcmdzLnB1c2goJy0tcmVwbGF5LXVzZXItbWVzc2FnZXMnKTtcbiAgICAgICAgYXJncy5wdXNoKCctLWluY2x1ZGUtcGFydGlhbC1tZXNzYWdlcycpO1xuXG4gICAgICAgIC8vIFJlc3VtZSBleGlzdGluZyBzZXNzaW9uIGlmIGF2YWlsYWJsZVxuICAgICAgICBpZiAoY29uZmlnLnNlc3Npb25JZCkge1xuICAgICAgICAgICAgYXJncy5wdXNoKCctLXJlc3VtZScsIGNvbmZpZy5zZXNzaW9uSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGVybWlzc2lvbiBtb2RlXG4gICAgICAgIGlmIChjb25maWcuc2V0dGluZ3MuZW5hYmxlUGVybWlzc2lvbmxlc3NNb2RlIHx8IGNvbmZpZy5ieXBhc3NQZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgYXJncy5wdXNoKCctLXBlcm1pc3Npb24tbW9kZScsICdieXBhc3NQZXJtaXNzaW9ucycpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgYXJncy5wdXNoKCctLXBlcm1pc3Npb24tbW9kZScsICdhY2NlcHRFZGl0cycpO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBWYXVsdCBhY2Nlc3NcbiAgICAgICAgaWYgKGNvbmZpZy5zZXR0aW5ncy5hbGxvd1ZhdWx0QWNjZXNzICYmIGNvbmZpZy52YXVsdFBhdGgpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaCgnLS1hZGQtZGlyJywgY29uZmlnLnZhdWx0UGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNb2RlbCBzZWxlY3Rpb24gLSBydW50aW1lIG92ZXJyaWRlIHRha2VzIHByaW9yaXR5XG4gICAgICAgIGNvbnN0IG1vZGVsVG9Vc2UgPSBjb25maWcucnVudGltZU1vZGVsT3ZlcnJpZGUgfHwgY29uZmlnLnNldHRpbmdzLm1vZGVsQWxpYXM7XG4gICAgICAgIGlmIChtb2RlbFRvVXNlKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goJy0tbW9kZWwnLCBtb2RlbFRvVXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBzcGF3biwgQ2hpbGRQcm9jZXNzLCBleGVjU3luYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIG9zIGZyb20gJ29zJztcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciBzcGF3bmluZyBDbGF1ZGUgQ29kZSBwcm9jZXNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3Bhd25Db25maWcge1xuICAgIGNsYXVkZVBhdGg6IHN0cmluZztcbiAgICBhcmdzOiBzdHJpbmdbXTtcbiAgICB3b3JraW5nRGlyOiBzdHJpbmc7XG4gICAgb25EZWJ1Z091dHB1dD86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgY3VzdG9tRW52VmFycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG59XG5cbi8qKlxuICogSGFuZGxlcyBzcGF3bmluZyBhbmQgbWFuYWdpbmcgQ2xhdWRlIENvZGUgcHJvY2Vzc1xuICovXG5leHBvcnQgY2xhc3MgUHJvY2Vzc1NwYXduZXIge1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHJ1bm5pbmcgb24gV2luZG93c1xuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGlzV2luZG93cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IHNoZWxsIGZvciB0aGUgY3VycmVudCBwbGF0Zm9ybVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGdldERlZmF1bHRTaGVsbCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5pc1dpbmRvd3MoKSkge1xuICAgICAgICAgICAgLy8gT24gV2luZG93cywgcHJlZmVyIFBvd2VyU2hlbGwgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgY21kLmV4ZVxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHB3c2ggKFBvd2VyU2hlbGwgQ29yZSkgZmlyc3QsIHRoZW4gcG93ZXJzaGVsbCwgdGhlbiBjbWRcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5DT01TUEVDKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52LkNPTVNQRUM7IC8vIFVzdWFsbHkgQzpcXFdpbmRvd3NcXFN5c3RlbTMyXFxjbWQuZXhlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ2NtZC5leGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIE9uIFVuaXgtbGlrZSBzeXN0ZW1zLCB1c2UgU0hFTEwgZW52IHZhciBvciBkZWZhdWx0IHRvIC9iaW4vc2hcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52LlNIRUxMIHx8ICcvYmluL3NoJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIFBBVEggc2VwYXJhdG9yIGZvciB0aGUgY3VycmVudCBwbGF0Zm9ybVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGdldFBhdGhTZXBhcmF0b3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNXaW5kb3dzKCkgPyAnOycgOiAnOic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzaGVsbCBuYW1lIGZyb20gYSBzaGVsbCBwYXRoIChlLmcuLCBcIi9iaW4venNoXCIgLT4gXCJ6c2hcIilcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRTaGVsbE5hbWUoc2hlbGxQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gcGF0aC5iYXNlbmFtZShzaGVsbFBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXMgaWYgcnVubmluZyBpbiBhIGxvZ2luIHNoZWxsXG4gICAgICogVGhpcyBsb2FkcyB2YXJpYWJsZXMgZnJvbSAuenNocmMsIC5iYXNoX3Byb2ZpbGUsIGV0Yy4gb24gVW5peFxuICAgICAqIE9uIFdpbmRvd3MsIGl0IHVzZXMgcHJvY2Vzcy5lbnYgZGlyZWN0bHkgYXMgV2luZG93cyBkb2Vzbid0IGhhdmUgc2hlbGwgcHJvZmlsZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRTaGVsbEVudmlyb25tZW50KG9uRGVidWdPdXRwdXQ/OiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgICAgIC8vIE9uIFdpbmRvd3MsIGp1c3QgcmV0dXJuIHByb2Nlc3MuZW52IC0gV2luZG93cyBkb2Vzbid0IGhhdmUgc2hlbGwgcHJvZmlsZSBmaWxlcyBsaWtlIFVuaXhcbiAgICAgICAgaWYgKHRoaXMuaXNXaW5kb3dzKCkpIHtcbiAgICAgICAgICAgIGlmIChvbkRlYnVnT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgb25EZWJ1Z091dHB1dChgW0RFQlVHXSBXaW5kb3dzIGRldGVjdGVkLCB1c2luZyBwcm9jZXNzLmVudiBkaXJlY3RseVxcbmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJvY2Vzcy5lbnYgfSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIERldGVybWluZSB3aGljaCBzaGVsbCB0byB1c2UgKFVuaXggb25seSlcbiAgICAgICAgICAgIGNvbnN0IHNoZWxsID0gcHJvY2Vzcy5lbnYuU0hFTEwgfHwgJy9iaW4vc2gnO1xuICAgICAgICAgICAgY29uc3Qgc2hlbGxOYW1lID0gdGhpcy5nZXRTaGVsbE5hbWUoc2hlbGwpO1xuICAgICAgICAgICAgY29uc3QgaG9tZURpciA9IG9zLmhvbWVkaXIoKTtcblxuICAgICAgICAgICAgaWYgKG9uRGVidWdPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBvbkRlYnVnT3V0cHV0KGBbREVCVUddIExvYWRpbmcgZW52aXJvbm1lbnQgZnJvbSBzaGVsbDogJHtzaGVsbH0gKCR7c2hlbGxOYW1lfSlcXG5gKTtcbiAgICAgICAgICAgICAgICBvbkRlYnVnT3V0cHV0KGBbREVCVUddIEhvbWUgZGlyZWN0b3J5OiAke2hvbWVEaXJ9XFxuYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJ1biB0aGUgc2hlbGwgYW5kIGV4cGxpY2l0bHkgc291cmNlIGFsbCBjb25maWcgZmlsZXNcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gZXhwbGljaXRseSBzb3VyY2UgdGhlIGZpbGVzIGJlY2F1c2UgLWwgLWkgbWlnaHQgbm90IHdvcmsgaW4gbm9uLWludGVyYWN0aXZlIGNvbnRleHRzXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgd2hpY2ggY29uZmlnIGZpbGVzIHRvIHNvdXJjZSBiYXNlZCBvbiB0aGUgc2hlbGxcbiAgICAgICAgICAgIGxldCBzb3VyY2VDb21tYW5kOiBzdHJpbmc7XG5cbiAgICAgICAgICAgIGlmIChzaGVsbE5hbWUgPT09ICd6c2gnKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIHpzaDogc291cmNlIHpzaGVudiAoYWx3YXlzIGxvYWRlZCksIHpwcm9maWxlIChsb2dpbiksIGFuZCB6c2hyYyAoaW50ZXJhY3RpdmUpXG4gICAgICAgICAgICAgICAgaWYgKG9uRGVidWdPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgb25EZWJ1Z091dHB1dChgW0RFQlVHXSBXaWxsIHNvdXJjZTogfi8uenNoZW52LCB+Ly56cHJvZmlsZSwgfi8uenNocmNcXG5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc291cmNlQ29tbWFuZCA9IGAke3NoZWxsfSAtYyAnc291cmNlIH4vLnpzaGVudiAyPi9kZXYvbnVsbDsgc291cmNlIH4vLnpwcm9maWxlIDI+L2Rldi9udWxsOyBzb3VyY2Ugfi8uenNocmMgMj4vZGV2L251bGw7IGVudidgO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGVsbE5hbWUgPT09ICdiYXNoJykge1xuICAgICAgICAgICAgICAgIC8vIEZvciBiYXNoOiBzb3VyY2UgcHJvZmlsZSAoRGViaWFuL1VidW50dSksIGJhc2hfcHJvZmlsZSAobWFjT1MvRmVkb3JhKSwgYW5kIGJhc2hyY1xuICAgICAgICAgICAgICAgIGlmIChvbkRlYnVnT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRGVidWdPdXRwdXQoYFtERUJVR10gV2lsbCBzb3VyY2U6IH4vLnByb2ZpbGUsIH4vLmJhc2hfcHJvZmlsZSwgfi8uYmFzaHJjXFxuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNvdXJjZUNvbW1hbmQgPSBgJHtzaGVsbH0gLWMgJ3NvdXJjZSB+Ly5wcm9maWxlIDI+L2Rldi9udWxsOyBzb3VyY2Ugfi8uYmFzaF9wcm9maWxlIDI+L2Rldi9udWxsOyBzb3VyY2Ugfi8uYmFzaHJjIDI+L2Rldi9udWxsOyBlbnYnYDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hlbGxOYW1lID09PSAnZmlzaCcpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgZmlzaDogdXNlIGZpc2gtc3BlY2lmaWMgY29uZmlnIGxvYWRpbmdcbiAgICAgICAgICAgICAgICBpZiAob25EZWJ1Z091dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICBvbkRlYnVnT3V0cHV0KGBbREVCVUddIFdpbGwgc291cmNlOiBmaXNoIGNvbmZpZyB2aWEgbG9naW4gc2hlbGxcXG5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc291cmNlQ29tbWFuZCA9IGAke3NoZWxsfSAtbCAtYyAnZW52J2A7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrOiB1c2UgbG9naW4gc2hlbGwgZmxhZyAobm8gLWkgdG8gYXZvaWQgVFRZIGlzc3VlcylcbiAgICAgICAgICAgICAgICBpZiAob25EZWJ1Z091dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICBvbkRlYnVnT3V0cHV0KGBbREVCVUddIFVzaW5nIGxvZ2luIHNoZWxsIGZhbGxiYWNrIGZvcjogJHtzaGVsbE5hbWV9XFxuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNvdXJjZUNvbW1hbmQgPSBgJHtzaGVsbH0gLWwgLWMgJ2VudidgO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBlbnZPdXRwdXQgPSBleGVjU3luYyhzb3VyY2VDb21tYW5kLCB7XG4gICAgICAgICAgICAgICAgZW5jb2Rpbmc6ICd1dGY4JyxcbiAgICAgICAgICAgICAgICBtYXhCdWZmZXI6IDEwICogMTAyNCAqIDEwMjQsIC8vIDEwTUIgYnVmZmVyIGZvciBsYXJnZSBlbnZpcm9ubWVudHNcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAwLCAvLyA1IHNlY29uZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgZW52OiB7IC4uLnByb2Nlc3MuZW52LCBIT01FOiBob21lRGlyIH0gLy8gRW5zdXJlIEhPTUUgaXMgc2V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcblxuICAgICAgICAgICAgaWYgKG9uRGVidWdPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBvbkRlYnVnT3V0cHV0KGBbREVCVUddIFNoZWxsIGVudmlyb25tZW50IGxvYWRlZCBpbiAke2R1cmF0aW9ufW1zXFxuYCk7XG4gICAgICAgICAgICAgICAgb25EZWJ1Z091dHB1dChgW0RFQlVHXSBSYXcgb3V0cHV0IGxlbmd0aDogJHtlbnZPdXRwdXQubGVuZ3RofSBieXRlc1xcbmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQYXJzZSB0aGUgZW52aXJvbm1lbnQgb3V0cHV0IGludG8gYSBrZXktdmFsdWUgb2JqZWN0XG4gICAgICAgICAgICBjb25zdCBlbnY6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gZW52T3V0cHV0LnNwbGl0KCdcXG4nKTtcblxuICAgICAgICAgICAgaWYgKG9uRGVidWdPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBvbkRlYnVnT3V0cHV0KGBbREVCVUddIFBhcnNpbmcgJHtsaW5lcy5sZW5ndGh9IGxpbmVzIG9mIGVudmlyb25tZW50IG91dHB1dFxcbmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaW5lcy5mb3JFYWNoKChsaW5lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBsaW5lLmluZGV4T2YoJz0nKTtcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpZHgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxpbmUuc3Vic3RyaW5nKGlkeCArIDEpO1xuICAgICAgICAgICAgICAgICAgICBlbnZba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAob25EZWJ1Z091dHB1dCkge1xuICAgICAgICAgICAgICAgIG9uRGVidWdPdXRwdXQoYFtERUJVR10gUGFyc2VkICR7T2JqZWN0LmtleXMoZW52KS5sZW5ndGh9IGVudmlyb25tZW50IHZhcmlhYmxlc1xcbmApO1xuXG4gICAgICAgICAgICAgICAgLy8gU2hvdyBjb21wYXJpc29uIHdpdGggcHJvY2Vzcy5lbnZcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9jZXNzRW52S2V5cyA9IE9iamVjdC5rZXlzKHByb2Nlc3MuZW52KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGVsbEVudktleXMgPSBPYmplY3Qua2V5cyhlbnYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ubHlJblNoZWxsID0gc2hlbGxFbnZLZXlzLmZpbHRlcihrID0+ICFwcm9jZXNzRW52S2V5cy5pbmNsdWRlcyhrKSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb25seUluUHJvY2VzcyA9IHByb2Nlc3NFbnZLZXlzLmZpbHRlcihrID0+ICFzaGVsbEVudktleXMuaW5jbHVkZXMoaykpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9ubHlJblNoZWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb25EZWJ1Z091dHB1dChgW0RFQlVHXSBWYXJpYWJsZXMgb25seSBpbiBzaGVsbCAoJHtvbmx5SW5TaGVsbC5sZW5ndGh9KTogJHtvbmx5SW5TaGVsbC5zbGljZSgwLCAxMCkuam9pbignLCAnKX0ke29ubHlJblNoZWxsLmxlbmd0aCA+IDEwID8gJy4uLicgOiAnJ31cXG5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9ubHlJblByb2Nlc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBvbkRlYnVnT3V0cHV0KGBbREVCVUddIFZhcmlhYmxlcyBvbmx5IGluIHByb2Nlc3MuZW52ICgke29ubHlJblByb2Nlc3MubGVuZ3RofSk6ICR7b25seUluUHJvY2Vzcy5zbGljZSgwLCAxMCkuam9pbignLCAnKX0ke29ubHlJblByb2Nlc3MubGVuZ3RoID4gMTAgPyAnLi4uJyA6ICcnfVxcbmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVudjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIHByb2Nlc3MuZW52IGlmIHNoZWxsIGVudmlyb25tZW50IGxvYWRpbmcgZmFpbHNcbiAgICAgICAgICAgIGlmIChvbkRlYnVnT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgb25EZWJ1Z091dHB1dChgW0RFQlVHXSBcdTI2QTBcdUZFMEYgRmFpbGVkIHRvIGxvYWQgc2hlbGwgZW52aXJvbm1lbnQ6ICR7ZXJyb3J9XFxuYCk7XG4gICAgICAgICAgICAgICAgb25EZWJ1Z091dHB1dChgW0RFQlVHXSBGYWxsaW5nIGJhY2sgdG8gcHJvY2Vzcy5lbnZcXG5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByb2Nlc3MuZW52IH0gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwYXduIENsYXVkZSBDb2RlIHByb2Nlc3Mgd2l0aCBlbmhhbmNlZCBlbnZpcm9ubWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZyBTcGF3biBjb25maWd1cmF0aW9uXG4gICAgICogQHJldHVybnMgQ2hpbGQgcHJvY2Vzc1xuICAgICAqL1xuICAgIHN0YXRpYyBzcGF3bihjb25maWc6IFNwYXduQ29uZmlnKTogQ2hpbGRQcm9jZXNzIHtcbiAgICAgICAgLy8gR2V0IGZ1bGwgc2hlbGwgZW52aXJvbm1lbnQgKGluY2x1ZGVzIGFsbCB5b3VyIHRlcm1pbmFsIGVudiB2YXJzKVxuICAgICAgICBjb25zdCBzaGVsbEVudiA9IHRoaXMuZ2V0U2hlbGxFbnZpcm9ubWVudChjb25maWcub25EZWJ1Z091dHB1dCk7XG5cbiAgICAgICAgLy8gTWVyZ2UgY3VzdG9tIGVudmlyb25tZW50IHZhcmlhYmxlcyAodGhlc2Ugb3ZlcnJpZGUgc2hlbGwgZW52IHZhcnMpXG4gICAgICAgIGlmIChjb25maWcuY3VzdG9tRW52VmFycykge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tVmFyQ291bnQgPSBPYmplY3Qua2V5cyhjb25maWcuY3VzdG9tRW52VmFycykuZmlsdGVyKGsgPT4gY29uZmlnLmN1c3RvbUVudlZhcnMhW2tdKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY3VzdG9tVmFyQ291bnQgPiAwICYmIGNvbmZpZy5vbkRlYnVnT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm9uRGVidWdPdXRwdXQoYFtERUJVR10gQXBwbHlpbmcgJHtjdXN0b21WYXJDb3VudH0gY3VzdG9tIGVudmlyb25tZW50IHZhcmlhYmxlczpcXG5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZy5jdXN0b21FbnZWYXJzKSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkgeyAgLy8gT25seSBzZXQgbm9uLWVtcHR5IHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICBzaGVsbEVudltrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcub25EZWJ1Z091dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFzayBzZW5zaXRpdmUgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSAoa2V5LmluY2x1ZGVzKCdLRVknKSB8fCBrZXkuaW5jbHVkZXMoJ1RPS0VOJykgfHwga2V5LmluY2x1ZGVzKCdTRUNSRVQnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3ZhbHVlLnN1YnN0cmluZygwLCA4KX0uLi5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5vbkRlYnVnT3V0cHV0KGBbREVCVUddICAgJHtrZXl9PSR7ZGlzcGxheVZhbHVlfVxcbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVidWcgb3V0cHV0OiBzaG93IGxvYWRlZCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgICAgICAgaWYgKGNvbmZpZy5vbkRlYnVnT3V0cHV0KSB7XG4gICAgICAgICAgICBjb25maWcub25EZWJ1Z091dHB1dCgnW0RFQlVHXSBTaGVsbCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgbG9hZGVkOlxcbicpO1xuXG4gICAgICAgICAgICAvLyBTb3J0IGVudiB2YXJzIGZvciBlYXNpZXIgcmVhZGluZ1xuICAgICAgICAgICAgY29uc3Qgc29ydGVkS2V5cyA9IE9iamVjdC5rZXlzKHNoZWxsRW52KS5zb3J0KCk7XG5cbiAgICAgICAgICAgIC8vIFNob3cgaW1wb3J0YW50IGVudiB2YXJzIGZpcnN0XG4gICAgICAgICAgICBjb25zdCBpbXBvcnRhbnRWYXJzID0gWydQQVRIJywgJ0hPTUUnLCAnU0hFTEwnLCAnVVNFUicsICdBTlRIUk9QSUNfQVBJX0tFWScsICdOT0RFX0VOViddO1xuICAgICAgICAgICAgY29uZmlnLm9uRGVidWdPdXRwdXQoJ1tERUJVR10gSW1wb3J0YW50IHZhcmlhYmxlczpcXG4nKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGltcG9ydGFudFZhcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hlbGxFbnZba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXNrIHNlbnNpdGl2ZSB2YWx1ZXMgbGlrZSBBUEkga2V5c1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBzaGVsbEVudltrZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluY2x1ZGVzKCdLRVknKSB8fCBrZXkuaW5jbHVkZXMoJ1RPS0VOJykgfHwga2V5LmluY2x1ZGVzKCdTRUNSRVQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IGAke3ZhbHVlLnN1YnN0cmluZygwLCA4KX0uLi5gIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLm9uRGVidWdPdXRwdXQoYFtERUJVR10gICAke2tleX09JHt2YWx1ZX1cXG5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNob3cgYWxsIG90aGVyIHZhcmlhYmxlc1xuICAgICAgICAgICAgY29uZmlnLm9uRGVidWdPdXRwdXQoJ1tERUJVR10gQWxsIGVudmlyb25tZW50IHZhcmlhYmxlczpcXG4nKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHNvcnRlZEtleXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWltcG9ydGFudFZhcnMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBzaGVsbEVudltrZXldO1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXNrIHNlbnNpdGl2ZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5pbmNsdWRlcygnS0VZJykgfHwga2V5LmluY2x1ZGVzKCdUT0tFTicpIHx8IGtleS5pbmNsdWRlcygnU0VDUkVUJykgfHwga2V5LmluY2x1ZGVzKCdQQVNTV09SRCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gYCR7dmFsdWUuc3Vic3RyaW5nKDAsIDgpfS4uLmAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25maWcub25EZWJ1Z091dHB1dChgW0RFQlVHXSAgICR7a2V5fT0ke3ZhbHVlfVxcbmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5vbkRlYnVnT3V0cHV0KCdcXG4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc29sdmUgY2xhdWRlUGF0aCB0byBhYnNvbHV0ZSBwYXRoXG4gICAgICAgIC8vIElmIGl0IHN0YXJ0cyB3aXRoIH4sIGV4cGFuZCB0byBob21lIGRpcmVjdG9yeVxuICAgICAgICAvLyBQcmlvcml0eTogZW52IHZhcnMgLT4gb3MuaG9tZWRpcigpIChtb3N0IHJlbGlhYmxlIGNyb3NzLXBsYXRmb3JtKVxuICAgICAgICBsZXQgcmVzb2x2ZWRDbGF1ZGVQYXRoID0gY29uZmlnLmNsYXVkZVBhdGg7XG4gICAgICAgIGlmIChyZXNvbHZlZENsYXVkZVBhdGguc3RhcnRzV2l0aCgnficpKSB7XG4gICAgICAgICAgICBjb25zdCBob21lRGlyID0gc2hlbGxFbnYuSE9NRSB8fCBzaGVsbEVudi5VU0VSUFJPRklMRSB8fCBvcy5ob21lZGlyKCk7XG4gICAgICAgICAgICByZXNvbHZlZENsYXVkZVBhdGggPSByZXNvbHZlZENsYXVkZVBhdGgucmVwbGFjZSgnficsIGhvbWVEaXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQncyBub3QgYW4gYWJzb2x1dGUgcGF0aCwgdHJ5IHRvIGZpbmQgaXQgaW4gUEFUSFxuICAgICAgICBpZiAoIXBhdGguaXNBYnNvbHV0ZShyZXNvbHZlZENsYXVkZVBhdGgpKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGEgY29tbWFuZCBuYW1lIChsaWtlIFwiY2xhdWRlXCIpXG4gICAgICAgICAgICAvLyBUcnkgdG8gZmluZCBpdCBpbiBQQVRIIGZyb20gc2hlbGwgZW52aXJvbm1lbnRcbiAgICAgICAgICAgIGNvbnN0IHBhdGhTZXBhcmF0b3IgPSB0aGlzLmdldFBhdGhTZXBhcmF0b3IoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhEaXJzID0gKHNoZWxsRW52LlBBVEggfHwgJycpLnNwbGl0KHBhdGhTZXBhcmF0b3IpLmZpbHRlcihkaXIgPT4gZGlyKTtcblxuICAgICAgICAgICAgLy8gT24gV2luZG93cywgYWxzbyBjaGVjayBmb3IgLmV4ZSwgLmNtZCwgLmJhdCBleHRlbnNpb25zXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb25zID0gdGhpcy5pc1dpbmRvd3MoKSA/IFsnJywgJy5leGUnLCAnLmNtZCcsICcuYmF0J10gOiBbJyddO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRpciBvZiBwYXRoRGlycykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZXh0IG9mIGV4dGVuc2lvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oZGlyLCByZXNvbHZlZENsYXVkZVBhdGggKyBleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmdWxsUGF0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2xhdWRlUGF0aCA9IGZ1bGxQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhdGguaXNBYnNvbHV0ZShyZXNvbHZlZENsYXVkZVBhdGgpKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub25EZWJ1Z091dHB1dCkge1xuICAgICAgICAgICAgY29uZmlnLm9uRGVidWdPdXRwdXQoYFtERUJVR10gUmVzb2x2ZWQgY2xhdWRlIHBhdGg6ICR7cmVzb2x2ZWRDbGF1ZGVQYXRofVxcbmApO1xuICAgICAgICAgICAgY29uZmlnLm9uRGVidWdPdXRwdXQoYFtERUJVR10gQ29tbWFuZDogJHtyZXNvbHZlZENsYXVkZVBhdGh9ICR7Y29uZmlnLmFyZ3Muam9pbignICcpfVxcbmApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXNlIHRoZSBzaGVsbCB0byBleGVjdXRlIHRoZSBjb21tYW5kLCB3aGljaCBoYW5kbGVzIHNoZWJhbmdzIGFuZCBQQVRIIHJlc29sdXRpb25cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgc2FtZSBhcyBydW5uaW5nIGl0IGZyb20geW91ciB0ZXJtaW5hbFxuICAgICAgICBjb25zdCBzaGVsbCA9IHRoaXMuZ2V0RGVmYXVsdFNoZWxsKCk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vbkRlYnVnT3V0cHV0KSB7XG4gICAgICAgICAgICBjb25maWcub25EZWJ1Z091dHB1dChgW0RFQlVHXSBVc2luZyBzaGVsbDogJHtzaGVsbH1cXG5gKTtcbiAgICAgICAgICAgIGNvbmZpZy5vbkRlYnVnT3V0cHV0KGBbREVCVUddIFBsYXRmb3JtOiAke3Byb2Nlc3MucGxhdGZvcm19XFxuYCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbnN1cmUgVVRGLTggbG9jYWxlIGlzIHNldCBmb3IgcHJvcGVyIGhhbmRsaW5nIG9mIHNwZWNpYWwgY2hhcmFjdGVycyAoXHUwMEYxLCBcdTAwRTEsIFx1MDBCRCwgZXRjLilcbiAgICAgICAgLy8gVGhpcyBpcyBjcml0aWNhbCBmb3Igbm9uLUFTQ0lJIGNoYXJhY3RlcnMgdG8gd29yayBjb3JyZWN0bHlcbiAgICAgICAgY29uc3QgZW52V2l0aFV0ZjggPSB7XG4gICAgICAgICAgICAuLi5zaGVsbEVudixcbiAgICAgICAgICAgIExBTkc6IHNoZWxsRW52LkxBTkcgfHwgJ2VuX1VTLlVURi04JyxcbiAgICAgICAgICAgIExDX0FMTDogc2hlbGxFbnYuTENfQUxMIHx8ICdlbl9VUy5VVEYtOCcsXG4gICAgICAgICAgICBMQ19DVFlQRTogc2hlbGxFbnYuTENfQ1RZUEUgfHwgJ2VuX1VTLlVURi04JyxcbiAgICAgICAgICAgIFBZVEhPTklPRU5DT0RJTkc6ICd1dGYtOCcsICAvLyBJbiBjYXNlIENsYXVkZSBDTEkgdXNlcyBQeXRob25cbiAgICAgICAgICAgIE5PREVfT1BUSU9OUzogc2hlbGxFbnYuTk9ERV9PUFRJT05TID8gYCR7c2hlbGxFbnYuTk9ERV9PUFRJT05TfSAtLWlucHV0LXR5cGU9bW9kdWxlYCA6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGN3ZDogY29uZmlnLndvcmtpbmdEaXIsXG4gICAgICAgICAgICBlbnY6IGVudldpdGhVdGY4LFxuICAgICAgICAgICAgc2hlbGw6IHNoZWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2hpbGRQcm9jZXNzID0gc3Bhd24ocmVzb2x2ZWRDbGF1ZGVQYXRoLCBjb25maWcuYXJncywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gU2V0IGVuY29kaW5nIGZvciBzdGRpbiB0byBVVEYtOCBmb3IgcHJvcGVyIGhhbmRsaW5nIG9mIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgICAgICBpZiAoY2hpbGRQcm9jZXNzLnN0ZGluKSB7XG4gICAgICAgICAgICBjaGlsZFByb2Nlc3Muc3RkaW4uc2V0RGVmYXVsdEVuY29kaW5nKCd1dGY4Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGRQcm9jZXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmQgc3RkaW4gaW5wdXQgdG8gcHJvY2Vzc1xuICAgICAqXG4gICAgICogQHBhcmFtIHByb2Nlc3MgQ2hpbGQgcHJvY2Vzc1xuICAgICAqIEBwYXJhbSBwcm9tcHQgUHJvbXB0IHRvIHNlbmRcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VuZElucHV0KHByb2Nlc3M6IENoaWxkUHJvY2VzcywgcHJvbXB0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHByb2Nlc3Muc3RkaW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0TWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndXNlcicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICByb2xlOiAndXNlcicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHByb21wdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGpzb25JbnB1dCA9IEpTT04uc3RyaW5naWZ5KGlucHV0TWVzc2FnZSkgKyAnXFxuJztcbiAgICAgICAgICAgIC8vIEV4cGxpY2l0bHkgdXNlIFVURi04IGVuY29kaW5nIHRvIGhhbmRsZSBzcGVjaWFsIGNoYXJhY3RlcnMgKFx1MDBCRCwgXHUwMEJDLCBcdTAwRjEsIGV0Yy4pXG4gICAgICAgICAgICBwcm9jZXNzLnN0ZGluLndyaXRlKGpzb25JbnB1dCwgJ3V0ZjgnKTtcbiAgICAgICAgICAgIHByb2Nlc3Muc3RkaW4uZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgQ2xhdWRlQ29kZVJlc3BvbnNlIH0gZnJvbSAnLi9jbGF1ZGUtY29kZS1ydW5uZXInO1xuaW1wb3J0IHsgVG9rZW5Vc2FnZSB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIFN0cmVhbSBldmVudCBzdHJ1Y3R1cmUgZnJvbSBDbGF1ZGUgQ29kZSBDTElcbiAqL1xuaW50ZXJmYWNlIFN0cmVhbUV2ZW50IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgZXZlbnRfdHlwZT86IHN0cmluZztcbiAgICBkZWx0YT86IHtcbiAgICAgICAgdHlwZT86IHN0cmluZztcbiAgICAgICAgdGV4dD86IHN0cmluZztcbiAgICB9O1xuICAgIG1lc3NhZ2U/OiB7XG4gICAgICAgIGNvbnRlbnQ/OiBBcnJheTx7XG4gICAgICAgICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICAgICAgICB0ZXh0Pzogc3RyaW5nO1xuICAgICAgICB9PjtcbiAgICB9O1xuICAgIHVzYWdlPzoge1xuICAgICAgICBpbnB1dF90b2tlbnM/OiBudW1iZXI7XG4gICAgICAgIG91dHB1dF90b2tlbnM/OiBudW1iZXI7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBQYXJzZWQgc3RyZWFtIG91dHB1dCBmcm9tIENsYXVkZSBDb2RlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkT3V0cHV0IHtcbiAgICBhc3Npc3RhbnRUZXh0OiBzdHJpbmc7XG4gICAgdG9rZW5Vc2FnZT86IFRva2VuVXNhZ2U7XG59XG5cbi8qKlxuICogUGFyc2VzIENsYXVkZSBDb2RlIG91dHB1dCBhbmQgYnVpbGRzIHJlc3BvbnNlc1xuICovXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VQYXJzZXIge1xuICAgIC8qKlxuICAgICAqIFBhcnNlIEpTT04gb3V0cHV0IGxpbmVzIGZyb20gQ2xhdWRlIENvZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvdXRwdXRMaW5lcyBBcnJheSBvZiBKU09OIG91dHB1dCBsaW5lc1xuICAgICAqIEByZXR1cm5zIFBhcnNlZCBvdXRwdXQgd2l0aCBhc3Npc3RhbnQgdGV4dCBhbmQgdG9rZW4gdXNhZ2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VPdXRwdXQob3V0cHV0TGluZXM6IHN0cmluZ1tdKTogUGFyc2VkT3V0cHV0IHtcbiAgICAgICAgbGV0IGFzc2lzdGFudFRleHQgPSAnJztcbiAgICAgICAgbGV0IHRva2VuVXNhZ2U6IFRva2VuVXNhZ2UgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIG91dHB1dExpbmVzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gSlNPTi5wYXJzZShsaW5lKSBhcyBTdHJlYW1FdmVudDtcblxuICAgICAgICAgICAgICAgIC8vIENvbGxlY3QgdGV4dCBmcm9tIHN0cmVhbWluZyBldmVudHMgKHJlYWwtdGltZSBkZWx0YXMpXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdzdHJlYW1fZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5ldmVudF90eXBlID09PSAnY29udGVudF9ibG9ja19kZWx0YScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kZWx0YT8udHlwZSA9PT0gJ3RleHRfZGVsdGEnICYmIGV2ZW50LmRlbHRhLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3Npc3RhbnRUZXh0ICs9IGV2ZW50LmRlbHRhLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBbHNvIGNvbGxlY3QgZnJvbSBjb21wbGV0ZSBhc3Npc3RhbnQgbWVzc2FnZXMgKGZhbGxiYWNrKVxuICAgICAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSAnYXNzaXN0YW50Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQubWVzc2FnZT8uY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiBldmVudC5tZXNzYWdlLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2sudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lzdGFudFRleHQgKz0gYmxvY2sudGV4dCArICdcXG4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEdldCB0b2tlbiB1c2FnZSBmcm9tIHJlc3VsdCBldmVudFxuICAgICAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSAncmVzdWx0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXNhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuVXNhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUb2tlbnM6IGV2ZW50LnVzYWdlLmlucHV0X3Rva2VucyB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFRva2VuczogZXZlbnQudXNhZ2Uub3V0cHV0X3Rva2VucyB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsVG9rZW5zOiAoZXZlbnQudXNhZ2UuaW5wdXRfdG9rZW5zIHx8IDApICsgKGV2ZW50LnVzYWdlLm91dHB1dF90b2tlbnMgfHwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIGludmFsaWQgSlNPTiBsaW5lc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFzc2lzdGFudFRleHQ6IGFzc2lzdGFudFRleHQudHJpbSgpLFxuICAgICAgICAgICAgdG9rZW5Vc2FnZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGVycm9yIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyb3IgRXJyb3IgbWVzc2FnZVxuICAgICAqIEBwYXJhbSBvdXRwdXRMaW5lcyBPdXRwdXQgbGluZXMgKGlmIGFueSlcbiAgICAgKiBAcmV0dXJucyBFcnJvciByZXNwb25zZVxuICAgICAqL1xuICAgIHN0YXRpYyBidWlsZEVycm9yUmVzcG9uc2UoZXJyb3I6IHN0cmluZywgb3V0cHV0TGluZXM6IHN0cmluZ1tdID0gW10pOiBDbGF1ZGVDb2RlUmVzcG9uc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgIG91dHB1dDogb3V0cHV0TGluZXNcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCAiLyoqXG4gKiBVdGlsaXR5IGZvciBkZXRlY3RpbmcgcGVybWlzc2lvbiByZXF1ZXN0cyBpbiBDbGF1ZGUncyByZXNwb25zZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFJlc3BvbnNlQ29udGVudEV4dHJhY3RvciB7XG4gICAgLyoqXG4gICAgICogRGV0ZWN0IGlmIENsYXVkZSdzIHJlc3BvbnNlIGlzIGFza2luZyBmb3IgcGVybWlzc2lvbiB0byBwZXJmb3JtIGFuIGFjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHRleHQgVGhlIHRleHQgY29udGVudCB0byBhbmFseXplXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdGV4dCBjb250YWlucyBhIHBlcm1pc3Npb24gcmVxdWVzdCBwYXR0ZXJuXG4gICAgICovXG4gICAgc3RhdGljIGRldGVjdFBlcm1pc3Npb25SZXF1ZXN0KHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBDaGVjayBmb3IgZXhwbGljaXQgUkVRVUlSRURfQVBQUk9WQUwga2V5d29yZFxuICAgICAgICByZXR1cm4gdGV4dC5pbmNsdWRlcygnUkVRVUlSRURfQVBQUk9WQUwnKTtcbiAgICB9XG59XG4iLCAiLyoqXG4gKiBVdGlsaXR5IGZvciBwYXJzaW5nIG91dHB1dCBsaW5lcyBhbmQgZXh0cmFjdGluZyBzdGF0dXMgaW5mb3JtYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE91dHB1dFN0YXR1c01hbmFnZXIge1xuICAgIC8qKlxuICAgICAqIFBhcnNlIGFuIG91dHB1dCBsaW5lIGFuZCBleHRyYWN0IHN0YXR1cyBpbmZvcm1hdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIGxpbmUgVGhlIG91dHB1dCBsaW5lIHRvIHBhcnNlXG4gICAgICogQHJldHVybnMgU3RhdHVzIG1lc3NhZ2UgdG8gZGlzcGxheSwgb3IgbnVsbCBpZiBubyBzdGF0dXMgc2hvdWxkIGJlIHNob3duXG4gICAgICovXG4gICAgc3RhdGljIGV4dHJhY3RTdGF0dXMobGluZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICAgIC8vIENoZWNrIGlmIGxpbmUgY29udGFpbnMgdG9vbCB1c2FnZSBpbmZvcm1hdGlvblxuICAgICAgICBpZiAobGluZS5pbmNsdWRlcygnXHVEODNEXHVERDI3IFVzaW5nIHRvb2w6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvb2xNYXRjaCA9IGxpbmUubWF0Y2goL1x1RDgzRFx1REQyNyBVc2luZyB0b29sOiAoXFx3KykvKTtcbiAgICAgICAgICAgIGlmICh0b29sTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFx1RDgzRFx1REQyNyBVc2luZyAke3Rvb2xNYXRjaFsxXX0gdG9vbC4uLmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmNsdWRlcygnJCAnKSkge1xuICAgICAgICAgICAgLy8gQmFzaCBjb21tYW5kIGV4ZWN1dGlvblxuICAgICAgICAgICAgY29uc3QgY21kTWF0Y2ggPSBsaW5lLm1hdGNoKC9cXCQgKC4rKS8pO1xuICAgICAgICAgICAgaWYgKGNtZE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY21kID0gY21kTWF0Y2hbMV0uc3Vic3RyaW5nKDAsIDUwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFx1MjZBMSBSdW5uaW5nOiAke2NtZH0ke2NtZE1hdGNoWzFdLmxlbmd0aCA+IDUwID8gJy4uLicgOiAnJ31gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxpbmUuaW5jbHVkZXMoJ1x1RDgzRFx1REQwRCBRdWVyeTonKSB8fCBsaW5lLmluY2x1ZGVzKCdRdWVyeTonKSkge1xuICAgICAgICAgICAgLy8gV2ViIHNlYXJjaFxuICAgICAgICAgICAgY29uc3QgcXVlcnlNYXRjaCA9IGxpbmUubWF0Y2goL1F1ZXJ5OiBcIiguKz8pXCIvKTtcbiAgICAgICAgICAgIGlmIChxdWVyeU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBxdWVyeU1hdGNoWzFdLnN1YnN0cmluZygwLCA0MCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcdUQ4M0RcdUREMEQgU2VhcmNoaW5nOiAke3F1ZXJ5fSR7cXVlcnlNYXRjaFsxXS5sZW5ndGggPiA0MCA/ICcuLi4nIDogJyd9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsaW5lLmluY2x1ZGVzKCdcdUQ4M0NcdURGMTAgVVJMOicpIHx8IGxpbmUuaW5jbHVkZXMoJ1VSTDonKSkge1xuICAgICAgICAgICAgLy8gV2ViIGZldGNoXG4gICAgICAgICAgICBjb25zdCB1cmxNYXRjaCA9IGxpbmUubWF0Y2goL1VSTDogKC4rKS8pO1xuICAgICAgICAgICAgaWYgKHVybE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsTWF0Y2hbMV0uc3Vic3RyaW5nKDAsIDQwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFx1RDgzQ1x1REYxMCBGZXRjaGluZzogJHt1cmx9JHt1cmxNYXRjaFsxXS5sZW5ndGggPiA0MCA/ICcuLi4nIDogJyd9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsaW5lLmluY2x1ZGVzKCdcdUQ4M0RcdURDRDYgUmVhZGluZyBmaWxlOicpIHx8IGxpbmUuaW5jbHVkZXMoJ1x1RDgzRFx1RENENiBGaWxlOicpKSB7XG4gICAgICAgICAgICAvLyBGaWxlIHJlYWRpbmdcbiAgICAgICAgICAgIGNvbnN0IGZpbGVNYXRjaCA9IGxpbmUubWF0Y2goLyg/OlJlYWRpbmcgZmlsZTp8RmlsZTopXFxzKyguKykvKTtcbiAgICAgICAgICAgIGlmIChmaWxlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZU1hdGNoWzFdLnNwbGl0KCcvJykucG9wKCkgfHwgZmlsZU1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIHJldHVybiBgXHVEODNEXHVEQ0Q2IFJlYWRpbmc6ICR7ZmlsZS5zdWJzdHJpbmcoMCwgNDApfS4uLmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmNsdWRlcygnXHUyNzBEXHVGRTBGICBXcml0aW5nIGZpbGU6JykgfHwgbGluZS5pbmNsdWRlcygnXHUyNzBEXHVGRTBGICBGaWxlOicpKSB7XG4gICAgICAgICAgICAvLyBGaWxlIHdyaXRpbmdcbiAgICAgICAgICAgIGNvbnN0IGZpbGVNYXRjaCA9IGxpbmUubWF0Y2goLyg/OldyaXRpbmcgZmlsZTp8RmlsZTopXFxzKyguKykvKTtcbiAgICAgICAgICAgIGlmIChmaWxlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZU1hdGNoWzFdLnNwbGl0KCcvJykucG9wKCkgfHwgZmlsZU1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIHJldHVybiBgXHUyNzBEXHVGRTBGIFdyaXRpbmc6ICR7ZmlsZS5zdWJzdHJpbmcoMCwgNDApfS4uLmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmNsdWRlcygnXHUyNzBGXHVGRTBGICBFZGl0aW5nIGZpbGU6JykgfHwgbGluZS5pbmNsdWRlcygnXHUyNzBGXHVGRTBGICBGaWxlOicpKSB7XG4gICAgICAgICAgICAvLyBGaWxlIGVkaXRpbmdcbiAgICAgICAgICAgIGNvbnN0IGZpbGVNYXRjaCA9IGxpbmUubWF0Y2goLyg/OkVkaXRpbmcgZmlsZTp8RmlsZTopXFxzKyguKykvKTtcbiAgICAgICAgICAgIGlmIChmaWxlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZU1hdGNoWzFdLnNwbGl0KCcvJykucG9wKCkgfHwgZmlsZU1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIHJldHVybiBgXHUyNzBGXHVGRTBGIEVkaXRpbmc6ICR7ZmlsZS5zdWJzdHJpbmcoMCwgNDApfS4uLmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmNsdWRlcygnXHVEODNEXHVERDBEIFBhdHRlcm46JykgfHwgbGluZS5pbmNsdWRlcygnUGF0dGVybjonKSkge1xuICAgICAgICAgICAgLy8gR3JlcC9HbG9iIHNlYXJjaFxuICAgICAgICAgICAgY29uc3QgcGF0dGVybk1hdGNoID0gbGluZS5tYXRjaCgvUGF0dGVybjogKC4rKS8pO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm5NYXRjaCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBwYXR0ZXJuTWF0Y2hbMV0uc3Vic3RyaW5nKDAsIDQwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFx1RDgzRFx1REQwRSBTZWFyY2hpbmcgcGF0dGVybjogJHtwYXR0ZXJufSR7cGF0dGVybk1hdGNoWzFdLmxlbmd0aCA+IDQwID8gJy4uLicgOiAnJ31gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxpbmUuaW5jbHVkZXMoJ1x1RDgzRVx1REQxNiBMYXVuY2hpbmcgYWdlbnQ6JykgfHwgbGluZS5pbmNsdWRlcygnQWdlbnQ6JykpIHtcbiAgICAgICAgICAgIC8vIEFnZW50L1Rhc2sgdG9vbFxuICAgICAgICAgICAgY29uc3QgYWdlbnRNYXRjaCA9IGxpbmUubWF0Y2goLyg/OkFnZW50OnxUeXBlOilcXHMrKC4rKS8pO1xuICAgICAgICAgICAgaWYgKGFnZW50TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFx1RDgzRVx1REQxNiBMYXVuY2hpbmcgJHthZ2VudE1hdGNoWzFdfSBhZ2VudC4uLmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmNsdWRlcygnXHVEODNEXHVEQ0FDJykgJiYgIWxpbmUuaW5jbHVkZXMoJ1tyYXddJykpIHtcbiAgICAgICAgICAgIC8vIENsYXVkZSBpcyByZXNwb25kaW5nXG4gICAgICAgICAgICByZXR1cm4gJ1x1RDgzRFx1RENBQyBDbGF1ZGUgaXMgcmVzcG9uZGluZy4uLic7XG4gICAgICAgIH0gZWxzZSBpZiAobGluZS5pbmNsdWRlcygnXHUyNzEzJykgJiYgbGluZS5pbmNsdWRlcygnY29tcGxldGUnKSkge1xuICAgICAgICAgICAgLy8gVG9vbCBjb21wbGV0ZWRcbiAgICAgICAgICAgIHJldHVybiAnXHUyNzA1IFByb2Nlc3NpbmcgcmVzdWx0cy4uLic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgdCB9IGZyb20gJy4uLy4uL2kxOG4nO1xuXG4vKipcbiAqIFV0aWxpdHkgZm9yIGdlbmVyYXRpbmcgc2lkZS1ieS1zaWRlIGRpZmYgdmlld3MgKEludGVsbGlKLXN0eWxlKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpZmZDaGFuZ2Uge1xuICAgIHR5cGU6ICdlcXVhbCcgfCAnZGVsZXRlJyB8ICdpbnNlcnQnIHwgJ21vZGlmeSc7XG4gICAgb2xkQ29udGVudD86IHN0cmluZztcbiAgICBuZXdDb250ZW50Pzogc3RyaW5nO1xuICAgIG9sZExpbmVOdW0/OiBudW1iZXI7XG4gICAgbmV3TGluZU51bT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIERpZmZHZW5lcmF0b3Ige1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHNpZGUtYnktc2lkZSBkaWZmIHZpZXcgYXMgYSBET00gZWxlbWVudCBiZXR3ZWVuIG9yaWdpbmFsIGFuZCBtb2RpZmllZCBjb250ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3JpZ2luYWwgT3JpZ2luYWwgY29udGVudFxuICAgICAqIEBwYXJhbSBtb2RpZmllZCBNb2RpZmllZCBjb250ZW50XG4gICAgICogQHJldHVybnMgSFRNTEVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBzaWRlLWJ5LXNpZGUgZGlmZlxuICAgICAqL1xuICAgIHN0YXRpYyBnZW5lcmF0ZURpZmZFbGVtZW50KG9yaWdpbmFsOiBzdHJpbmcsIG1vZGlmaWVkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsTGluZXMgPSBvcmlnaW5hbC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVkTGluZXMgPSBtb2RpZmllZC5zcGxpdCgnXFxuJyk7XG5cbiAgICAgICAgLy8gQ29tcHV0ZSBkaWZmXG4gICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLmNvbXB1dGVEaWZmKG9yaWdpbmFsTGluZXMsIG1vZGlmaWVkTGluZXMpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NsYXVkZS1jb2RlLWRpZmYtc2lkZS1ieS1zaWRlJztcblxuICAgICAgICAvLyBIZWFkZXJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc05hbWUgPSAnZGlmZi1oZWFkZXInO1xuXG4gICAgICAgIGNvbnN0IGxlZnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdEhlYWRlci5jbGFzc05hbWUgPSAnZGlmZi1jb2x1bW4gZGlmZi1jb2x1bW4tbGVmdCc7XG4gICAgICAgIGNvbnN0IGxlZnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbGVmdFRpdGxlLmNsYXNzTmFtZSA9ICdkaWZmLWhlYWRlci10aXRsZSc7XG4gICAgICAgIGxlZnRUaXRsZS50ZXh0Q29udGVudCA9IHQoJ2RpZmYub3JpZ2luYWwnKTtcbiAgICAgICAgbGVmdEhlYWRlci5hcHBlbmRDaGlsZChsZWZ0VGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJpZ2h0SGVhZGVyLmNsYXNzTmFtZSA9ICdkaWZmLWNvbHVtbiBkaWZmLWNvbHVtbi1yaWdodCc7XG4gICAgICAgIGNvbnN0IHJpZ2h0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHJpZ2h0VGl0bGUuY2xhc3NOYW1lID0gJ2RpZmYtaGVhZGVyLXRpdGxlJztcbiAgICAgICAgcmlnaHRUaXRsZS50ZXh0Q29udGVudCA9IHQoJ2RpZmYubW9kaWZpZWQnKTtcbiAgICAgICAgcmlnaHRIZWFkZXIuYXBwZW5kQ2hpbGQocmlnaHRUaXRsZSk7XG5cbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxlZnRIZWFkZXIpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmlnaHRIZWFkZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICAvLyBDb250ZW50XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudC5jbGFzc05hbWUgPSAnZGlmZi1jb250ZW50JztcblxuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZSBvZiBkaWZmKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc05hbWUgPSBgZGlmZi1yb3cgZGlmZi0ke2NoYW5nZS50eXBlfWA7XG5cbiAgICAgICAgICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gJ2VxdWFsJykge1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURpZmZDb2x1bW4oJ2xlZnQnLCBjaGFuZ2Uub2xkTGluZU51bSwgY2hhbmdlLm9sZENvbnRlbnQpKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEaWZmQ29sdW1uKCdyaWdodCcsIGNoYW5nZS5uZXdMaW5lTnVtLCBjaGFuZ2UubmV3Q29udGVudCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2UudHlwZSA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEaWZmQ29sdW1uKCdsZWZ0JywgY2hhbmdlLm9sZExpbmVOdW0sIGNoYW5nZS5vbGRDb250ZW50KSk7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRGlmZkNvbHVtbigncmlnaHQnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2UudHlwZSA9PT0gJ2luc2VydCcpIHtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEaWZmQ29sdW1uKCdsZWZ0JywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEaWZmQ29sdW1uKCdyaWdodCcsIGNoYW5nZS5uZXdMaW5lTnVtLCBjaGFuZ2UubmV3Q29udGVudCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2UudHlwZSA9PT0gJ21vZGlmeScpIHtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEaWZmQ29sdW1uKCdsZWZ0JywgY2hhbmdlLm9sZExpbmVOdW0sIGNoYW5nZS5vbGRDb250ZW50KSk7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRGlmZkNvbHVtbigncmlnaHQnLCBjaGFuZ2UubmV3TGluZU51bSwgY2hhbmdlLm5ld0NvbnRlbnQpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGRpZmYgY29sdW1uIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVEaWZmQ29sdW1uKHNpZGU6ICdsZWZ0JyB8ICdyaWdodCcsIGxpbmVOdW0/OiBudW1iZXIsIGNvbnRlbnQ/OiBzdHJpbmcsIGlzRW1wdHk6IGJvb2xlYW4gPSBmYWxzZSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUgPSBgZGlmZi1jb2x1bW4gZGlmZi1jb2x1bW4tJHtzaWRlfSR7aXNFbXB0eSA/ICcgZGlmZi1lbXB0eScgOiAnJ31gO1xuXG4gICAgICAgIGNvbnN0IGxpbmVOdW1TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBsaW5lTnVtU3Bhbi5jbGFzc05hbWUgPSAnZGlmZi1saW5lLW51bWJlcic7XG4gICAgICAgIGxpbmVOdW1TcGFuLnRleHRDb250ZW50ID0gbGluZU51bSAhPT0gdW5kZWZpbmVkID8gU3RyaW5nKGxpbmVOdW0pIDogJyc7XG5cbiAgICAgICAgY29uc3QgY29udGVudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnRlbnRTcGFuLmNsYXNzTmFtZSA9ICdkaWZmLWxpbmUtY29udGVudCc7XG4gICAgICAgIGNvbnRlbnRTcGFuLnRleHRDb250ZW50ID0gY29udGVudCB8fCAnJztcblxuICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQobGluZU51bVNwYW4pO1xuICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoY29udGVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSBkaWZmIGJldHdlZW4gdHdvIGFycmF5cyBvZiBsaW5lcyB1c2luZyBhIHNpbXBsZSBhbGdvcml0aG1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvbGRMaW5lcyBPcmlnaW5hbCBsaW5lc1xuICAgICAqIEBwYXJhbSBuZXdMaW5lcyBNb2RpZmllZCBsaW5lc1xuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIGRpZmYgY2hhbmdlc1xuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGNvbXB1dGVEaWZmKG9sZExpbmVzOiBzdHJpbmdbXSwgbmV3TGluZXM6IHN0cmluZ1tdKTogRGlmZkNoYW5nZVtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBEaWZmQ2hhbmdlW10gPSBbXTtcblxuICAgICAgICBsZXQgb2xkSW5kZXggPSAwO1xuICAgICAgICBsZXQgbmV3SW5kZXggPSAwO1xuICAgICAgICBsZXQgb2xkTGluZU51bSA9IDE7XG4gICAgICAgIGxldCBuZXdMaW5lTnVtID0gMTtcblxuICAgICAgICB3aGlsZSAob2xkSW5kZXggPCBvbGRMaW5lcy5sZW5ndGggfHwgbmV3SW5kZXggPCBuZXdMaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChvbGRJbmRleCA+PSBvbGRMaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1haW5pbmcgbGluZXMgYXJlIGluc2VydGlvbnNcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbnNlcnQnLFxuICAgICAgICAgICAgICAgICAgICBuZXdDb250ZW50OiBuZXdMaW5lc1tuZXdJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIG5ld0xpbmVOdW06IG5ld0xpbmVOdW1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBuZXdJbmRleCsrO1xuICAgICAgICAgICAgICAgIG5ld0xpbmVOdW0rKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPj0gbmV3TGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtYWluaW5nIGxpbmVzIGFyZSBkZWxldGlvbnNcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZWxldGUnLFxuICAgICAgICAgICAgICAgICAgICBvbGRDb250ZW50OiBvbGRMaW5lc1tvbGRJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIG9sZExpbmVOdW06IG9sZExpbmVOdW1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBvbGRJbmRleCsrO1xuICAgICAgICAgICAgICAgIG9sZExpbmVOdW0rKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkTGluZXNbb2xkSW5kZXhdID09PSBuZXdMaW5lc1tuZXdJbmRleF0pIHtcbiAgICAgICAgICAgICAgICAvLyBMaW5lcyBhcmUgZXF1YWxcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcXVhbCcsXG4gICAgICAgICAgICAgICAgICAgIG9sZENvbnRlbnQ6IG9sZExpbmVzW29sZEluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29udGVudDogbmV3TGluZXNbbmV3SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICBvbGRMaW5lTnVtOiBvbGRMaW5lTnVtLFxuICAgICAgICAgICAgICAgICAgICBuZXdMaW5lTnVtOiBuZXdMaW5lTnVtXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb2xkSW5kZXgrKztcbiAgICAgICAgICAgICAgICBuZXdJbmRleCsrO1xuICAgICAgICAgICAgICAgIG9sZExpbmVOdW0rKztcbiAgICAgICAgICAgICAgICBuZXdMaW5lTnVtKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIExpbmVzIGFyZSBkaWZmZXJlbnQgLSBjaGVjayBpZiBpdCdzIGEgbW9kaWZpY2F0aW9uIG9yIGRlbGV0ZStpbnNlcnRcbiAgICAgICAgICAgICAgICAvLyBGb3Igbm93LCB0cmVhdCBjb25zZWN1dGl2ZSBkaWZmZXJlbnQgbGluZXMgYXMgbW9kaWZpY2F0aW9uc1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vZGlmeScsXG4gICAgICAgICAgICAgICAgICAgIG9sZENvbnRlbnQ6IG9sZExpbmVzW29sZEluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29udGVudDogbmV3TGluZXNbbmV3SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICBvbGRMaW5lTnVtOiBvbGRMaW5lTnVtLFxuICAgICAgICAgICAgICAgICAgICBuZXdMaW5lTnVtOiBuZXdMaW5lTnVtXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb2xkSW5kZXgrKztcbiAgICAgICAgICAgICAgICBuZXdJbmRleCsrO1xuICAgICAgICAgICAgICAgIG9sZExpbmVOdW0rKztcbiAgICAgICAgICAgICAgICBuZXdMaW5lTnVtKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsICIvKipcbiAqIFRvb2wgQ2FsbCBUcmFja2VyXG4gKiBUcmFja3MgYW5kIG1hbmFnZXMgTUNQIHRvb2wgY2FsbHMgZm9yIHZpc3VhbGl6YXRpb25cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvb2xDYWxsIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRvb2xOYW1lOiBzdHJpbmc7XG4gICAgYXJndW1lbnRzOiBhbnk7XG4gICAgc3RhdHVzOiAncGVuZGluZycgfCAncnVubmluZycgfCAnY29tcGxldGVkJyB8ICdmYWlsZWQnO1xuICAgIHN0YXJ0VGltZTogbnVtYmVyO1xuICAgIGVuZFRpbWU/OiBudW1iZXI7XG4gICAgcmVzdWx0PzogYW55O1xuICAgIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBUb29sQ2FsbENhbGxiYWNrID0gKGNhbGw6IFRvb2xDYWxsKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRvb2wgQ2FsbCBUcmFja2VyXG4gKiBNYW5hZ2VzIHRyYWNraW5nIG9mIE1DUCB0b29sIGNhbGxzIHdpdGggc3RhdGUgdXBkYXRlc1xuICovXG5leHBvcnQgY2xhc3MgVG9vbENhbGxUcmFja2VyIHtcbiAgICBwcml2YXRlIGNhbGxzOiBNYXA8c3RyaW5nLCBUb29sQ2FsbD4gPSBuZXcgTWFwKCk7XG4gICAgcHJpdmF0ZSBjYWxsYmFja3M6IFNldDxUb29sQ2FsbENhbGxiYWNrPiA9IG5ldyBTZXQoKTtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRyYWNraW5nIGEgdG9vbCBjYWxsXG4gICAgICovXG4gICAgc3RhcnRDYWxsKGlkOiBzdHJpbmcsIHRvb2xOYW1lOiBzdHJpbmcsIGFyZ3M6IGFueSk6IFRvb2xDYWxsIHtcbiAgICAgICAgY29uc3QgY2FsbDogVG9vbENhbGwgPSB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHRvb2xOYW1lLFxuICAgICAgICAgICAgYXJndW1lbnRzLFxuICAgICAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgICAgICAgICBzdGFydFRpbWU6IERhdGUubm93KClcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNhbGxzLnNldChpZCwgY2FsbCk7XG4gICAgICAgIHRoaXMubm90aWZ5Q2FsbGJhY2tzKGNhbGwpO1xuXG4gICAgICAgIHJldHVybiBjYWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0b29sIGNhbGwgc3RhdHVzXG4gICAgICovXG4gICAgdXBkYXRlU3RhdHVzKFxuICAgICAgICBpZDogc3RyaW5nLFxuICAgICAgICBzdGF0dXM6IFRvb2xDYWxsWydzdGF0dXMnXSxcbiAgICAgICAgcmVzdWx0PzogYW55LFxuICAgICAgICBlcnJvcj86IHN0cmluZ1xuICAgICk6IHZvaWQge1xuICAgICAgICBjb25zdCBjYWxsID0gdGhpcy5jYWxscy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNhbGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVG9vbCBjYWxsICR7aWR9IG5vdCBmb3VuZGApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbC5zdGF0dXMgPSBzdGF0dXM7XG5cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgfHwgc3RhdHVzID09PSAnZmFpbGVkJykge1xuICAgICAgICAgICAgY2FsbC5lbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2FsbC5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2FsbC5lcnJvciA9IGVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3RpZnlDYWxsYmFja3MoY2FsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgdG9vbCBjYWxsIGJ5IElEXG4gICAgICovXG4gICAgZ2V0Q2FsbChpZDogc3RyaW5nKTogVG9vbENhbGwgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxscy5nZXQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgdG9vbCBjYWxsc1xuICAgICAqL1xuICAgIGdldEFsbENhbGxzKCk6IFRvb2xDYWxsW10ge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNhbGxzLnZhbHVlcygpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWN0aXZlIChub24tY29tcGxldGVkKSB0b29sIGNhbGxzXG4gICAgICovXG4gICAgZ2V0QWN0aXZlQ2FsbHMoKTogVG9vbENhbGxbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbENhbGxzKCkuZmlsdGVyKFxuICAgICAgICAgICAgY2FsbCA9PiBjYWxsLnN0YXR1cyAhPT0gJ2NvbXBsZXRlZCcgJiYgY2FsbC5zdGF0dXMgIT09ICdmYWlsZWQnXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgY29tcGxldGVkIGNhbGxzXG4gICAgICovXG4gICAgY2xlYXJDb21wbGV0ZWQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUNhbGxzID0gdGhpcy5nZXRBY3RpdmVDYWxscygpO1xuICAgICAgICB0aGlzLmNhbGxzLmNsZWFyKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBjYWxsIG9mIGFjdGl2ZUNhbGxzKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxzLnNldChjYWxsLmlkLCBjYWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBjYWxsc1xuICAgICAqL1xuICAgIGNsZWFyQWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhbGxzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIHRvIHRvb2wgY2FsbCB1cGRhdGVzXG4gICAgICovXG4gICAgb25Ub29sQ2FsbFVwZGF0ZShjYWxsYmFjazogVG9vbENhbGxDYWxsYmFjayk6ICgpID0+IHZvaWQge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5jYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZnkgYWxsIGNhbGxiYWNrcyBvZiBhIHRvb2wgY2FsbCB1cGRhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIG5vdGlmeUNhbGxiYWNrcyhjYWxsOiBUb29sQ2FsbCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY2FsbCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHRvb2wgY2FsbCBjYWxsYmFjazonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBkdXJhdGlvbiBvZiBhIHRvb2wgY2FsbCBpbiBtaWxsaXNlY29uZHNcbiAgICAgKi9cbiAgICBnZXREdXJhdGlvbihpZDogc3RyaW5nKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgY29uc3QgY2FsbCA9IHRoaXMuY2FsbHMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjYWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW5kVGltZSA9IGNhbGwuZW5kVGltZSB8fCBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm4gZW5kVGltZSAtIGNhbGwuc3RhcnRUaW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzdGF0aXN0aWNzXG4gICAgICovXG4gICAgZ2V0U3RhdHMoKToge1xuICAgICAgICB0b3RhbDogbnVtYmVyO1xuICAgICAgICBwZW5kaW5nOiBudW1iZXI7XG4gICAgICAgIHJ1bm5pbmc6IG51bWJlcjtcbiAgICAgICAgY29tcGxldGVkOiBudW1iZXI7XG4gICAgICAgIGZhaWxlZDogbnVtYmVyO1xuICAgIH0ge1xuICAgICAgICBjb25zdCBjYWxscyA9IHRoaXMuZ2V0QWxsQ2FsbHMoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG90YWw6IGNhbGxzLmxlbmd0aCxcbiAgICAgICAgICAgIHBlbmRpbmc6IGNhbGxzLmZpbHRlcihjID0+IGMuc3RhdHVzID09PSAncGVuZGluZycpLmxlbmd0aCxcbiAgICAgICAgICAgIHJ1bm5pbmc6IGNhbGxzLmZpbHRlcihjID0+IGMuc3RhdHVzID09PSAncnVubmluZycpLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogY2FsbHMuZmlsdGVyKGMgPT4gYy5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKS5sZW5ndGgsXG4gICAgICAgICAgICBmYWlsZWQ6IGNhbGxzLmZpbHRlcihjID0+IGMuc3RhdHVzID09PSAnZmFpbGVkJykubGVuZ3RoXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwgIi8qKlxuICogVG9vbCBDYWxsIERpc3BsYXkgQ29tcG9uZW50XG4gKiBWaXN1YWxpemVzIE1DUCB0b29sIGNhbGxzIHdpdGggc3RhdHVzIGluZGljYXRvcnNcbiAqL1xuXG5pbXBvcnQgeyBUb29sQ2FsbCwgVG9vbENhbGxUcmFja2VyIH0gZnJvbSAnLi4vdG9vbC1jYWxsLXRyYWNrZXInO1xuXG4vKipcbiAqIFRvb2wgQ2FsbCBEaXNwbGF5IENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgVG9vbENhbGxEaXNwbGF5IHtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB0cmFja2VyOiBUb29sQ2FsbFRyYWNrZXI7XG4gICAgcHJpdmF0ZSB0b29sQ2FsbEVsZW1lbnRzOiBNYXA8c3RyaW5nLCBIVE1MRWxlbWVudD4gPSBuZXcgTWFwKCk7XG4gICAgcHJpdmF0ZSB1bnN1YnNjcmliZTogKCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRyYWNrZXI6IFRvb2xDYWxsVHJhY2tlcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy50cmFja2VyID0gdHJhY2tlcjtcblxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdG9vbCBjYWxsIHVwZGF0ZXNcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHRoaXMudHJhY2tlci5vblRvb2xDYWxsVXBkYXRlKChjYWxsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2xDYWxsRGlzcGxheShjYWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbCByZW5kZXJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBjb21wb25lbnRcbiAgICAgKi9cbiAgICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMudG9vbENhbGxFbGVtZW50cy5jbGVhcigpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5lbXB0eSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBpbml0aWFsIFVJXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmVtcHR5KCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGhlYWRlclxuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtdG9vbC1jYWxsLWhlYWRlcidcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaGVhZGVyLmNyZWF0ZUVsKCdoMycsIHtcbiAgICAgICAgICAgIHRleHQ6ICdUb29sIENhbGxzJyxcbiAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLXRvb2wtY2FsbC10aXRsZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHN0YXRzIGRpc3BsYXlcbiAgICAgICAgY29uc3Qgc3RhdHMgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtdG9vbC1jYWxsLXN0YXRzJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0cyhzdGF0cyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRvb2wgY2FsbHMgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGNhbGxzQ29udGFpbmVyID0gdGhpcy5jb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLXRvb2wtY2FsbHMtY29udGFpbmVyJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZW5kZXIgZXhpc3RpbmcgY2FsbHNcbiAgICAgICAgY29uc3QgY2FsbHMgPSB0aGlzLnRyYWNrZXIuZ2V0QWxsQ2FsbHMoKTtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsIG9mIGNhbGxzKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRvb2xDYWxsKGNhbGwsIGNhbGxzQ29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBzdGF0cyBwZXJpb2RpY2FsbHlcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0cyhzdGF0cyk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBzdGF0aXN0aWNzIGRpc3BsYXlcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVN0YXRzKHN0YXRzRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0YXRzID0gdGhpcy50cmFja2VyLmdldFN0YXRzKCk7XG5cbiAgICAgICAgc3RhdHNFbC5lbXB0eSgpO1xuICAgICAgICBzdGF0c0VsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICAgICAgdGV4dDogYFRvdGFsOiAke3N0YXRzLnRvdGFsfWAsXG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1zdGF0LXRvdGFsJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3RhdHMucGVuZGluZyA+IDApIHtcbiAgICAgICAgICAgIHN0YXRzRWwuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogYFBlbmRpbmc6ICR7c3RhdHMucGVuZGluZ31gLFxuICAgICAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLXN0YXQtcGVuZGluZydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRzLnJ1bm5pbmcgPiAwKSB7XG4gICAgICAgICAgICBzdGF0c0VsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICAgICAgICAgIHRleHQ6IGBSdW5uaW5nOiAke3N0YXRzLnJ1bm5pbmd9YCxcbiAgICAgICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1zdGF0LXJ1bm5pbmcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0cy5jb21wbGV0ZWQgPiAwKSB7XG4gICAgICAgICAgICBzdGF0c0VsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICAgICAgICAgIHRleHQ6IGBDb21wbGV0ZWQ6ICR7c3RhdHMuY29tcGxldGVkfWAsXG4gICAgICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtc3RhdC1jb21wbGV0ZWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0cy5mYWlsZWQgPiAwKSB7XG4gICAgICAgICAgICBzdGF0c0VsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICAgICAgICAgIHRleHQ6IGBGYWlsZWQ6ICR7c3RhdHMuZmFpbGVkfWAsXG4gICAgICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtc3RhdC1mYWlsZWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhIHNpbmdsZSB0b29sIGNhbGxcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbmRlclRvb2xDYWxsKGNhbGw6IFRvb2xDYWxsLCBjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNhbGxFbCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiBgY2xhdWRlLWNvZGUtdG9vbC1jYWxsIGNsYXVkZS1jb2RlLXRvb2wtY2FsbC0ke2NhbGwuc3RhdHVzfWBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGhlYWRlciBzZWN0aW9uIChhbHdheXMgdmlzaWJsZSlcbiAgICAgICAgY29uc3QgaGVhZGVyID0gY2FsbEVsLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS10b29sLWNhbGwtaGVhZGVyLXNlY3Rpb24nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN0YXR1cyBpY29uXG4gICAgICAgIGNvbnN0IHN0YXR1c0ljb24gPSBoZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgICAgICBjbHM6IGBjbGF1ZGUtY29kZS10b29sLWNhbGwtc3RhdHVzLWljb24gY2xhdWRlLWNvZGUtc3RhdHVzLSR7Y2FsbC5zdGF0dXN9YFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUb29sIG5hbWVcbiAgICAgICAgaGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICAgICAgdGV4dDogY2FsbC50b29sTmFtZSxcbiAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLXRvb2wtY2FsbC1uYW1lJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBEdXJhdGlvbiAoZm9yIGFjdGl2ZSBvciBjb21wbGV0ZWQgY2FsbHMpXG4gICAgICAgIGlmIChjYWxsLnN0YXR1cyAhPT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMudHJhY2tlci5nZXREdXJhdGlvbihjYWxsLmlkKTtcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmZvcm1hdER1cmF0aW9uKGR1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtdG9vbC1jYWxsLWR1cmF0aW9uJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGRldGFpbHMgc2VjdGlvbiAoY29sbGFwc2libGUpXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBjYWxsRWwuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLXRvb2wtY2FsbC1kZXRhaWxzJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBcmd1bWVudHNcbiAgICAgICAgaWYgKGNhbGwuYXJndW1lbnRzICYmIE9iamVjdC5rZXlzKGNhbGwuYXJndW1lbnRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBhcmdzU2VjdGlvbiA9IGRldGFpbHMuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS10b29sLWNhbGwtYXJndW1lbnRzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhcmdzU2VjdGlvbi5jcmVhdGVFbCgnaDQnLCB7IHRleHQ6ICdBcmd1bWVudHMnIH0pO1xuICAgICAgICAgICAgYXJnc1NlY3Rpb24uY3JlYXRlRWwoJ3ByZScsIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBKU09OLnN0cmluZ2lmeShjYWxsLmFyZ3VtZW50cywgbnVsbCwgMilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzdWx0IChmb3IgY29tcGxldGVkIGNhbGxzKVxuICAgICAgICBpZiAoY2FsbC5zdGF0dXMgPT09ICdjb21wbGV0ZWQnICYmIGNhbGwucmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFNlY3Rpb24gPSBkZXRhaWxzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtdG9vbC1jYWxsLXJlc3VsdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzdWx0U2VjdGlvbi5jcmVhdGVFbCgnaDQnLCB7IHRleHQ6ICdSZXN1bHQnIH0pO1xuICAgICAgICAgICAgcmVzdWx0U2VjdGlvbi5jcmVhdGVFbCgncHJlJywge1xuICAgICAgICAgICAgICAgIHRleHQ6IEpTT04uc3RyaW5naWZ5KGNhbGwucmVzdWx0LCBudWxsLCAyKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFcnJvciAoZm9yIGZhaWxlZCBjYWxscylcbiAgICAgICAgaWYgKGNhbGwuc3RhdHVzID09PSAnZmFpbGVkJyAmJiBjYWxsLmVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvclNlY3Rpb24gPSBkZXRhaWxzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtdG9vbC1jYWxsLWVycm9yJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlcnJvclNlY3Rpb24uY3JlYXRlRWwoJ2g0JywgeyB0ZXh0OiAnRXJyb3InIH0pO1xuICAgICAgICAgICAgZXJyb3JTZWN0aW9uLmNyZWF0ZUVsKCdwcmUnLCB7IHRleHQ6IGNhbGwuZXJyb3IgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWtlIGRldGFpbHMgY29sbGFwc2libGVcbiAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdjbGlja2FibGUnKTtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKF9ldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZGV0YWlscy50b2dnbGVDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN0b3JlIGVsZW1lbnQgcmVmZXJlbmNlXG4gICAgICAgIHRoaXMudG9vbENhbGxFbGVtZW50cy5zZXQoY2FsbC5pZCwgY2FsbEVsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdG9vbCBjYWxsIGRpc3BsYXkgd2hlbiBzdGF0ZSBjaGFuZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVUb29sQ2FsbERpc3BsYXkoY2FsbDogVG9vbENhbGwpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdFbCA9IHRoaXMudG9vbENhbGxFbGVtZW50cy5nZXQoY2FsbC5pZCk7XG5cbiAgICAgICAgaWYgKCFleGlzdGluZ0VsKSB7XG4gICAgICAgICAgICAvLyBOZXcgY2FsbCwgcmVuZGVyIGl0XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2xhdWRlLWNvZGUtdG9vbC1jYWxscy1jb250YWluZXInKTtcbiAgICAgICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRvb2xDYWxsKGNhbGwsIGNvbnRhaW5lciBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgZWxlbWVudFxuICAgICAgICBleGlzdGluZ0VsLmNsYXNzTmFtZSA9IGBjbGF1ZGUtY29kZS10b29sLWNhbGwgY2xhdWRlLWNvZGUtdG9vbC1jYWxsLSR7Y2FsbC5zdGF0dXN9YDtcblxuICAgICAgICAvLyBVcGRhdGUgc3RhdHVzIGljb25cbiAgICAgICAgY29uc3Qgc3RhdHVzSWNvbiA9IGV4aXN0aW5nRWwucXVlcnlTZWxlY3RvcignLmNsYXVkZS1jb2RlLXRvb2wtY2FsbC1zdGF0dXMtaWNvbicpO1xuICAgICAgICBpZiAoc3RhdHVzSWNvbikge1xuICAgICAgICAgICAgc3RhdHVzSWNvbi5jbGFzc05hbWUgPSBgY2xhdWRlLWNvZGUtdG9vbC1jYWxsLXN0YXR1cy1pY29uIGNsYXVkZS1jb2RlLXN0YXR1cy0ke2NhbGwuc3RhdHVzfWA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZHVyYXRpb25cbiAgICAgICAgY29uc3QgZHVyYXRpb25FbCA9IGV4aXN0aW5nRWwucXVlcnlTZWxlY3RvcignLmNsYXVkZS1jb2RlLXRvb2wtY2FsbC1kdXJhdGlvbicpO1xuICAgICAgICBpZiAoZHVyYXRpb25FbCAmJiBjYWxsLnN0YXR1cyAhPT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMudHJhY2tlci5nZXREdXJhdGlvbihjYWxsLmlkKTtcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgKGR1cmF0aW9uRWwgYXMgSFRNTEVsZW1lbnQpLnRleHRDb250ZW50ID0gdGhpcy5mb3JtYXREdXJhdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZGV0YWlscyBzZWN0aW9uXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBleGlzdGluZ0VsLnF1ZXJ5U2VsZWN0b3IoJy5jbGF1ZGUtY29kZS10b29sLWNhbGwtZGV0YWlscycpO1xuICAgICAgICBpZiAoZGV0YWlscykge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIG9sZCByZXN1bHQvZXJyb3Igc2VjdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IG9sZFJlc3VsdCA9IGRldGFpbHMucXVlcnlTZWxlY3RvcignLmNsYXVkZS1jb2RlLXRvb2wtY2FsbC1yZXN1bHQnKTtcbiAgICAgICAgICAgIGNvbnN0IG9sZEVycm9yID0gZGV0YWlscy5xdWVyeVNlbGVjdG9yKCcuY2xhdWRlLWNvZGUtdG9vbC1jYWxsLWVycm9yJyk7XG4gICAgICAgICAgICBpZiAob2xkUmVzdWx0KSBvbGRSZXN1bHQucmVtb3ZlKCk7XG4gICAgICAgICAgICBpZiAob2xkRXJyb3IpIG9sZEVycm9yLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAvLyBBZGQgbmV3IHJlc3VsdC9lcnJvciBpZiBhcHBsaWNhYmxlXG4gICAgICAgICAgICBpZiAoY2FsbC5zdGF0dXMgPT09ICdjb21wbGV0ZWQnICYmIGNhbGwucmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRTZWN0aW9uID0gZGV0YWlscy5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS10b29sLWNhbGwtcmVzdWx0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlc3VsdFNlY3Rpb24uY3JlYXRlRWwoJ2g0JywgeyB0ZXh0OiAnUmVzdWx0JyB9KTtcbiAgICAgICAgICAgICAgICByZXN1bHRTZWN0aW9uLmNyZWF0ZUVsKCdwcmUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IEpTT04uc3RyaW5naWZ5KGNhbGwucmVzdWx0LCBudWxsLCAyKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FsbC5zdGF0dXMgPT09ICdmYWlsZWQnICYmIGNhbGwuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvclNlY3Rpb24gPSBkZXRhaWxzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLXRvb2wtY2FsbC1lcnJvcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlcnJvclNlY3Rpb24uY3JlYXRlRWwoJ2g0JywgeyB0ZXh0OiAnRXJyb3InIH0pO1xuICAgICAgICAgICAgICAgIGVycm9yU2VjdGlvbi5jcmVhdGVFbCgncHJlJywgeyB0ZXh0OiBjYWxsLmVycm9yIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IGR1cmF0aW9uIGluIGh1bWFuLXJlYWRhYmxlIGZvcm1hdFxuICAgICAqL1xuICAgIHByaXZhdGUgZm9ybWF0RHVyYXRpb24obXM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGlmIChtcyA8IDEwMDApIHtcbiAgICAgICAgICAgIHJldHVybiBgJHttc31tc2A7XG4gICAgICAgIH0gZWxzZSBpZiAobXMgPCA2MDAwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGAkeyhtcyAvIDEwMDApLnRvRml4ZWQoMSl9c2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihtcyAvIDYwMDAwKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChtcyAlIDYwMDAwKSAvIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuIGAke21pbnV0ZXN9bSAke3NlY29uZHN9c2A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBjb21wbGV0ZWQgY2FsbHMgZnJvbSBkaXNwbGF5XG4gICAgICovXG4gICAgY2xlYXJDb21wbGV0ZWQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jbGF1ZGUtY29kZS10b29sLWNhbGxzLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZENhbGxzID0gdGhpcy50cmFja2VyLmdldEFsbENhbGxzKCkuZmlsdGVyKFxuICAgICAgICAgICAgY2FsbCA9PiBjYWxsLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgfHwgY2FsbC5zdGF0dXMgPT09ICdmYWlsZWQnXG4gICAgICAgICk7XG5cbiAgICAgICAgZm9yIChjb25zdCBjYWxsIG9mIGNvbXBsZXRlZENhbGxzKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMudG9vbENhbGxFbGVtZW50cy5nZXQoY2FsbC5pZCk7XG4gICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2xDYWxsRWxlbWVudHMuZGVsZXRlKGNhbGwuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFja2VyLmNsZWFyQ29tcGxldGVkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgYWxsIGNhbGxzIGZyb20gZGlzcGxheVxuICAgICAqL1xuICAgIGNsZWFyQWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvb2xDYWxsRWxlbWVudHMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy50cmFja2VyLmNsZWFyQWxsKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxufVxuIiwgIi8qKlxuICogU3RyZWFtaW5nIFJlbmRlcmVyXG4gKiBIYW5kbGVzIHJlYWwtdGltZSByZW5kZXJpbmcgb2YgQUkgcmVzcG9uc2Ugc3RyZWFtc1xuICovXG5cbmltcG9ydCB7IE1hcmtkb3duUmVuZGVyZXIgYXMgT2JzaWRpYW5NYXJrZG93blJlbmRlcmVyIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgQ2xhdWRlQ29kZVZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbUNodW5rIHtcbiAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgaXNDb21wbGV0ZTogYm9vbGVhbjtcbiAgICBtZXRhZGF0YT86IHtcbiAgICAgICAgbW9kZWw/OiBzdHJpbmc7XG4gICAgICAgIGZpbmlzaFJlYXNvbj86IHN0cmluZztcbiAgICAgICAgdXNhZ2U/OiB7XG4gICAgICAgICAgICBwcm9tcHRUb2tlbnM6IG51bWJlcjtcbiAgICAgICAgICAgIGNvbXBsZXRpb25Ub2tlbnM6IG51bWJlcjtcbiAgICAgICAgICAgIHRvdGFsVG9rZW5zOiBudW1iZXI7XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlYW1NZXNzYWdlIHtcbiAgICB0eXBlOiAnYWlfc3RyZWFtJztcbiAgICBjb252ZXJzYXRpb25JZDogc3RyaW5nO1xuICAgIGNodW5rOiBTdHJlYW1DaHVuaztcbn1cblxuLyoqXG4gKiBTdHJlYW1pbmcgUmVuZGVyZXJcbiAqIE1hbmFnZXMgcmVhbC10aW1lIGRpc3BsYXkgb2YgQUkgcmVzcG9uc2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1pbmdSZW5kZXJlciB7XG4gICAgcHJpdmF0ZSB2aWV3OiBDbGF1ZGVDb2RlVmlldztcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjdXJyZW50U3RyZWFtRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIGFjY3VtdWxhdGVkQ29udGVudDogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBpc1N0cmVhbWluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IodmlldzogQ2xhdWRlQ29kZVZpZXcsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgYSBuZXcgc3RyZWFtXG4gICAgICovXG4gICAgc3RhcnRTdHJlYW0oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNTdHJlYW1pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjY3VtdWxhdGVkQ29udGVudCA9ICcnO1xuXG4gICAgICAgIC8vIENyZWF0ZSBzdHJlYW0gZWxlbWVudFxuICAgICAgICB0aGlzLmN1cnJlbnRTdHJlYW1FbGVtZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLXN0cmVhbWluZy1yZXNwb25zZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGhlYWRlclxuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmN1cnJlbnRTdHJlYW1FbGVtZW50LmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1zdHJlYW0taGVhZGVyJ1xuICAgICAgICB9KTtcblxuICAgICAgICBoZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgICAgICB0ZXh0OiAnQUkgUmVzcG9uc2UnLFxuICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtc3RyZWFtLXRpdGxlJ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzdGF0dXNJbmRpY2F0b3IgPSBoZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgICAgICB0ZXh0OiAnU3RyZWFtaW5nLi4uJyxcbiAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLXN0cmVhbS1zdGF0dXMgc3RyZWFtaW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgY29udGVudCBhcmVhXG4gICAgICAgIGNvbnN0IGNvbnRlbnRBcmVhID0gdGhpcy5jdXJyZW50U3RyZWFtRWxlbWVudC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtc3RyZWFtLWNvbnRlbnQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN0b3JlIHJlZmVyZW5jZSBmb3IgdXBkYXRlc1xuICAgICAgICAodGhpcy5jdXJyZW50U3RyZWFtRWxlbWVudCBhcyBhbnkpLl9zdGF0dXNJbmRpY2F0b3IgPSBzdGF0dXNJbmRpY2F0b3I7XG4gICAgICAgICh0aGlzLmN1cnJlbnRTdHJlYW1FbGVtZW50IGFzIGFueSkuX2NvbnRlbnRBcmVhID0gY29udGVudEFyZWE7XG5cbiAgICAgICAgLy8gU2Nyb2xsIHRvIGJvdHRvbVxuICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIGEgY2h1bmsgb2YgY29udGVudCB0byB0aGUgc3RyZWFtXG4gICAgICovXG4gICAgYXN5bmMgYXBwZW5kQ2h1bmsoY2h1bms6IFN0cmVhbUNodW5rKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50U3RyZWFtRWxlbWVudCB8fCAhdGhpcy5pc1N0cmVhbWluZykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdObyBhY3RpdmUgc3RyZWFtIHRvIGFwcGVuZCB0bycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwZW5kIGNvbnRlbnRcbiAgICAgICAgaWYgKGNodW5rLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWNjdW11bGF0ZWRDb250ZW50ICs9IGNodW5rLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjb250ZW50IGFyZWEgd2l0aCByZW5kZXJlZCBtYXJrZG93blxuICAgICAgICAgICAgY29uc3QgY29udGVudEFyZWEgPSAodGhpcy5jdXJyZW50U3RyZWFtRWxlbWVudCBhcyBhbnkpLl9jb250ZW50QXJlYTtcbiAgICAgICAgICAgIGlmIChjb250ZW50QXJlYSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRBcmVhLmVtcHR5KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGVtcG9yYXJ5IGNvbnRhaW5lciBmb3IgbWFya2Rvd24gcmVuZGVyaW5nXG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2Rvd25Db250YWluZXIgPSBjb250ZW50QXJlYS5jcmVhdGVFbCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYXdhaXQgT2JzaWRpYW5NYXJrZG93blJlbmRlcmVyLnJlbmRlck1hcmtkb3duKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY3VtdWxhdGVkQ29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25Db250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTY3JvbGwgdG8gYm90dG9tXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBzdHJlYW0gaXMgY29tcGxldGVcbiAgICAgICAgaWYgKGNodW5rLmlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVTdHJlYW0oY2h1bmsubWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcGxldGUgdGhlIGN1cnJlbnQgc3RyZWFtXG4gICAgICovXG4gICAgY29tcGxldGVTdHJlYW0obWV0YWRhdGE/OiBTdHJlYW1DaHVua1snbWV0YWRhdGEnXSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFN0cmVhbUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNTdHJlYW1pbmcgPSBmYWxzZTtcblxuICAgICAgICAvLyBVcGRhdGUgc3RhdHVzIGluZGljYXRvclxuICAgICAgICBjb25zdCBzdGF0dXNJbmRpY2F0b3IgPSAodGhpcy5jdXJyZW50U3RyZWFtRWxlbWVudCBhcyBhbnkpLl9zdGF0dXNJbmRpY2F0b3I7XG4gICAgICAgIGlmIChzdGF0dXNJbmRpY2F0b3IpIHtcbiAgICAgICAgICAgIHN0YXR1c0luZGljYXRvci50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XG4gICAgICAgICAgICBzdGF0dXNJbmRpY2F0b3IucmVtb3ZlQ2xhc3MoJ3N0cmVhbWluZycpO1xuICAgICAgICAgICAgc3RhdHVzSW5kaWNhdG9yLmFkZENsYXNzKCdjb21wbGV0ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIG1ldGFkYXRhIGlmIGF2YWlsYWJsZVxuICAgICAgICBpZiAobWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTWV0YWRhdGEobWV0YWRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29udmVydCB0byByZWd1bGFyIHJlc3BvbnNlIGVsZW1lbnRcbiAgICAgICAgdGhpcy5jdXJyZW50U3RyZWFtRWxlbWVudC5yZW1vdmVDbGFzcygnY2xhdWRlLWNvZGUtc3RyZWFtaW5nLXJlc3BvbnNlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFN0cmVhbUVsZW1lbnQuYWRkQ2xhc3MoJ2NsYXVkZS1jb2RlLXJlc3BvbnNlJyk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U3RyZWFtRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuYWNjdW11bGF0ZWRDb250ZW50ID0gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG1ldGFkYXRhIGRpc3BsYXkgKHRva2VuIHVzYWdlLCBtb2RlbCwgZXRjLilcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZE1ldGFkYXRhKG1ldGFkYXRhOiBTdHJlYW1DaHVua1snbWV0YWRhdGEnXSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFN0cmVhbUVsZW1lbnQgfHwgIW1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXRhZGF0YUVsID0gdGhpcy5jdXJyZW50U3RyZWFtRWxlbWVudC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtc3RyZWFtLW1ldGFkYXRhJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNb2RlbFxuICAgICAgICBpZiAobWV0YWRhdGEubW9kZWwpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhRWwuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogYE1vZGVsOiAke21ldGFkYXRhLm1vZGVsfWAsXG4gICAgICAgICAgICAgICAgY2xzOiAnY2xhdWRlLWNvZGUtbWV0YWRhdGEtaXRlbSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG9rZW4gdXNhZ2VcbiAgICAgICAgaWYgKG1ldGFkYXRhLnVzYWdlKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbnNUZXh0ID0gYFRva2VuczogJHttZXRhZGF0YS51c2FnZS5wcm9tcHRUb2tlbnN9ICsgJHttZXRhZGF0YS51c2FnZS5jb21wbGV0aW9uVG9rZW5zfSA9ICR7bWV0YWRhdGEudXNhZ2UudG90YWxUb2tlbnN9YDtcbiAgICAgICAgICAgIG1ldGFkYXRhRWwuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogdG9rZW5zVGV4dCxcbiAgICAgICAgICAgICAgICBjbHM6ICdjbGF1ZGUtY29kZS1tZXRhZGF0YS1pdGVtJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5pc2ggcmVhc29uXG4gICAgICAgIGlmIChtZXRhZGF0YS5maW5pc2hSZWFzb24pIHtcbiAgICAgICAgICAgIG1ldGFkYXRhRWwuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogYEZpbmlzaGVkOiAke21ldGFkYXRhLmZpbmlzaFJlYXNvbn1gLFxuICAgICAgICAgICAgICAgIGNsczogJ2NsYXVkZS1jb2RlLW1ldGFkYXRhLWl0ZW0nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbmNlbCB0aGUgY3VycmVudCBzdHJlYW1cbiAgICAgKi9cbiAgICBjYW5jZWxTdHJlYW0oKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50U3RyZWFtRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1N0cmVhbWluZyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c0luZGljYXRvciA9ICh0aGlzLmN1cnJlbnRTdHJlYW1FbGVtZW50IGFzIGFueSkuX3N0YXR1c0luZGljYXRvcjtcbiAgICAgICAgaWYgKHN0YXR1c0luZGljYXRvcikge1xuICAgICAgICAgICAgc3RhdHVzSW5kaWNhdG9yLnRleHRDb250ZW50ID0gJ0NhbmNlbGxlZCc7XG4gICAgICAgICAgICBzdGF0dXNJbmRpY2F0b3IucmVtb3ZlQ2xhc3MoJ3N0cmVhbWluZycpO1xuICAgICAgICAgICAgc3RhdHVzSW5kaWNhdG9yLmFkZENsYXNzKCdjYW5jZWxsZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFN0cmVhbUVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmFjY3VtdWxhdGVkQ29udGVudCA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGN1cnJlbnRseSBzdHJlYW1pbmdcbiAgICAgKi9cbiAgICBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTdHJlYW1pbmcgJiYgdGhpcy5jdXJyZW50U3RyZWFtRWxlbWVudCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgc3RyZWFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBnZXRDdXJyZW50RWxlbWVudCgpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RyZWFtRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdGhlIGNvbnRhaW5lciB0byB0aGUgYm90dG9tXG4gICAgICovXG4gICAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUb3AgPSB0aGlzLmNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgaW5jb21pbmcgc3RyZWFtIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBhc3luYyBoYW5kbGVTdHJlYW1NZXNzYWdlKG1lc3NhZ2U6IFN0cmVhbU1lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IG5ldyBzdHJlYW0gaWYgbm90IGFjdGl2ZVxuICAgICAgICAgICAgdGhpcy5zdGFydFN0cmVhbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5hcHBlbmRDaHVuayhtZXNzYWdlLmNodW5rKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgc3RyZWFtc1xuICAgICAqL1xuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzU3RyZWFtaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudFN0cmVhbUVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmFjY3VtdWxhdGVkQ29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5lbXB0eSgpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIE5vdGljZSB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCBDbGF1ZGVDb2RlUGx1Z2luIGZyb20gJy4uL21haW4nO1xuaW1wb3J0IHsgZXhlY1N5bmMsIGV4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCAqIGFzIG9zIGZyb20gJ29zJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyB0LCBzZXRMb2NhbGUsIGdldExvY2FsZSwgZ2V0QXZhaWxhYmxlTG9jYWxlcywgTG9jYWxlIH0gZnJvbSAnLi4vaTE4bic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhdWRlQ29kZVNldHRpbmdzIHtcbiAgICBjbGF1ZGVDb2RlUGF0aDogc3RyaW5nO1xuICAgIGF1dG9EZXRlY3RQYXRoOiBib29sZWFuO1xuICAgIG1vZGVsQWxpYXM6ICdzb25uZXQnIHwgJ29wdXMnIHwgJ2hhaWt1JyB8ICcnO1xuICAgIGN1c3RvbVN5c3RlbVByb21wdDogc3RyaW5nO1xuICAgIHByZXNlcnZlQ3Vyc29yUG9zaXRpb246IGJvb2xlYW47XG4gICAgdGltZW91dFNlY29uZHM6IG51bWJlcjtcbiAgICBhdXRvQWNjZXB0Q2hhbmdlczogYm9vbGVhbjtcbiAgICBhbGxvd1ZhdWx0QWNjZXNzOiBib29sZWFuO1xuICAgIGVuYWJsZVBlcm1pc3Npb25sZXNzTW9kZTogYm9vbGVhbjtcbiAgICAvLyBDdXN0b20gQVBJIGNvbmZpZ3VyYXRpb24gKGZvciBhbHRlcm5hdGl2ZSBlbmRwb2ludHMvcHJveGllcylcbiAgICBhbnRocm9waWNCYXNlVXJsOiBzdHJpbmc7XG4gICAgYW50aHJvcGljQXV0aFRva2VuOiBzdHJpbmc7XG4gICAgYW50aHJvcGljTW9kZWw6IHN0cmluZztcbiAgICBhbnRocm9waWNTbWFsbEZhc3RNb2RlbDogc3RyaW5nO1xuICAgIC8vIFVJIHNldHRpbmdzXG4gICAgbGFuZ3VhZ2U6IExvY2FsZTtcbiAgICAvLyBSZW1vdGUgV2ViU29ja2V0IG1vZGUgc2V0dGluZ3NcbiAgICBlbmFibGVSZW1vdGVNb2RlOiBib29sZWFuO1xuICAgIHJlbW90ZVNlcnZlclVybDogc3RyaW5nO1xuICAgIHJlbW90ZUF1dGhUb2tlbjogc3RyaW5nO1xuICAgIHJlbW90ZUF1dG9SZWNvbm5lY3Q6IGJvb2xlYW47XG4gICAgcmVtb3RlUmVjb25uZWN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgICByZW1vdGVNYXhSZWNvbm5lY3RBdHRlbXB0czogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9TRVRUSU5HUzogQ2xhdWRlQ29kZVNldHRpbmdzID0ge1xuICAgIGNsYXVkZUNvZGVQYXRoOiAnJyxcbiAgICBhdXRvRGV0ZWN0UGF0aDogdHJ1ZSxcbiAgICBtb2RlbEFsaWFzOiAnJyxcbiAgICBjdXN0b21TeXN0ZW1Qcm9tcHQ6ICcnLFxuICAgIHByZXNlcnZlQ3Vyc29yUG9zaXRpb246IHRydWUsXG4gICAgdGltZW91dFNlY29uZHM6IDMwMCxcbiAgICBhdXRvQWNjZXB0Q2hhbmdlczogZmFsc2UsXG4gICAgYWxsb3dWYXVsdEFjY2VzczogdHJ1ZSxcbiAgICBlbmFibGVQZXJtaXNzaW9ubGVzc01vZGU6IGZhbHNlLFxuICAgIC8vIEN1c3RvbSBBUEkgY29uZmlndXJhdGlvbiAoZW1wdHkgPSB1c2UgZGVmYXVsdClcbiAgICBhbnRocm9waWNCYXNlVXJsOiAnJyxcbiAgICBhbnRocm9waWNBdXRoVG9rZW46ICcnLFxuICAgIGFudGhyb3BpY01vZGVsOiAnJyxcbiAgICBhbnRocm9waWNTbWFsbEZhc3RNb2RlbDogJycsXG4gICAgLy8gVUkgc2V0dGluZ3NcbiAgICBsYW5ndWFnZTogJ2VuJyxcbiAgICAvLyBSZW1vdGUgV2ViU29ja2V0IG1vZGUgc2V0dGluZ3NcbiAgICBlbmFibGVSZW1vdGVNb2RlOiBmYWxzZSxcbiAgICByZW1vdGVTZXJ2ZXJVcmw6ICd3czovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICByZW1vdGVBdXRoVG9rZW46ICcnLFxuICAgIHJlbW90ZUF1dG9SZWNvbm5lY3Q6IHRydWUsXG4gICAgcmVtb3RlUmVjb25uZWN0SW50ZXJ2YWw6IDMwMDAsXG4gICAgcmVtb3RlTWF4UmVjb25uZWN0QXR0ZW1wdHM6IDEwXG59O1xuXG5leHBvcnQgY2xhc3MgQ2xhdWRlQ29kZVNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgICBwbHVnaW46IENsYXVkZUNvZGVQbHVnaW47XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBDbGF1ZGVDb2RlUGx1Z2luKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgfVxuXG4gICAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcblxuICAgICAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgICAgIC8vIExhbmd1YWdlIHNldHRpbmcgYXQgdGhlIHRvcFxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKHQoJ3NldHRpbmdzLmxhbmd1YWdlJykpXG4gICAgICAgICAgICAuc2V0RGVzYyh0KCdzZXR0aW5ncy5sYW5ndWFnZURlc2MnKSlcbiAgICAgICAgICAgIC5hZGREcm9wZG93bihkcm9wZG93biA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlcyA9IGdldEF2YWlsYWJsZUxvY2FsZXMoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxvY2FsZSBvZiBsb2NhbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbihsb2NhbGUuY29kZSwgbG9jYWxlLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkcm9wZG93bi5zZXRWYWx1ZShnZXRMb2NhbGUoKSlcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubGFuZ3VhZ2UgPSB2YWx1ZSBhcyBMb2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2NhbGUodmFsdWUgYXMgTG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVmcmVzaCBzZXR0aW5ncyBkaXNwbGF5IHdpdGggbmV3IGxhbmd1YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSB1c2VyIHRvIHJlbG9hZCBmb3IgZnVsbCBlZmZlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UodCgnbWlzYy5sYW5ndWFnZUNoYW5nZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXV0by1kZXRlY3QgQ2xhdWRlIENvZGUgcGF0aFxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKHQoJ3NldHRpbmdzLmF1dG9EZXRlY3RQYXRoJykpXG4gICAgICAgICAgICAuc2V0RGVzYyh0KCdzZXR0aW5ncy5hdXRvRGV0ZWN0UGF0aERlc2MnKSlcbiAgICAgICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZVxuICAgICAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvRGV0ZWN0UGF0aClcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9EZXRlY3RQYXRoID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWRQYXRoID0gdGhpcy5kZXRlY3RDbGF1ZGVDb2RlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRldGVjdGVkUGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNsYXVkZUNvZGVQYXRoID0gZGV0ZWN0ZWRQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTsgLy8gUmVmcmVzaCB0byBzaG93IGRldGVjdGVkIHBhdGhcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gQ2xhdWRlIENvZGUgZXhlY3V0YWJsZSBwYXRoXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUodCgnc2V0dGluZ3MuZXhlY3V0YWJsZVBhdGgnKSlcbiAgICAgICAgICAgIC5zZXREZXNjKHQoJ3NldHRpbmdzLmV4ZWN1dGFibGVQYXRoRGVzYycpKVxuICAgICAgICAgICAgLmFkZFRleHQodGV4dCA9PiB0ZXh0XG4gICAgICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCcvdXNyL2xvY2FsL2Jpbi9jbGF1ZGUnKVxuICAgICAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jbGF1ZGVDb2RlUGF0aClcbiAgICAgICAgICAgICAgICAuc2V0RGlzYWJsZWQodGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b0RldGVjdFBhdGgpXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jbGF1ZGVDb2RlUGF0aCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gVGVzdCBDbGF1ZGUgQ29kZSBidXR0b25cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSh0KCdzZXR0aW5ncy50ZXN0SW5zdGFsbGF0aW9uJykpXG4gICAgICAgICAgICAuc2V0RGVzYyh0KCdzZXR0aW5ncy50ZXN0SW5zdGFsbGF0aW9uRGVzYycpKVxuICAgICAgICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgICAgICAgICAgLnNldEJ1dHRvblRleHQodCgnc2V0dGluZ3MudGVzdEJ1dHRvbicpKVxuICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCB0aGlzLnRlc3RDbGF1ZGVDb2RlKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnNldEJ1dHRvblRleHQoJ1x1MjcxMyAnICsgdCgnc2V0dGluZ3MudGVzdFdvcmtpbmcnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGJ1dHRvbi5zZXRCdXR0b25UZXh0KHQoJ3NldHRpbmdzLnRlc3RCdXR0b24nKSk7IH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uc2V0QnV0dG9uVGV4dCgnXHUyNzE3ICcgKyB0KCdzZXR0aW5ncy50ZXN0RmFpbGVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBidXR0b24uc2V0QnV0dG9uVGV4dCh0KCdzZXR0aW5ncy50ZXN0QnV0dG9uJykpOyB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKGAke3QoJ21pc2MudGVzdEZhaWxlZCcpfTogJHtyZXN1bHQuZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAvLyBDdXN0b20gc3lzdGVtIHByb21wdFxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKHQoJ3NldHRpbmdzLmN1c3RvbVByb21wdCcpKVxuICAgICAgICAgICAgLnNldERlc2ModCgnc2V0dGluZ3MuY3VzdG9tUHJvbXB0RGVzYycpKVxuICAgICAgICAgICAgLmFkZFRleHRBcmVhKHRleHQgPT4ge1xuICAgICAgICAgICAgICAgIHRleHQuc2V0UGxhY2Vob2xkZXIodCgnc2V0dGluZ3MuY3VzdG9tUHJvbXB0UGxhY2Vob2xkZXInKSlcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmN1c3RvbVN5c3RlbVByb21wdClcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY3VzdG9tU3lzdGVtUHJvbXB0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGV4dC5pbnB1dEVsLnJvd3MgPSA0O1xuICAgICAgICAgICAgICAgIHRleHQuaW5wdXRFbC5jb2xzID0gNTA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBQcmVzZXJ2ZSBjdXJzb3IgcG9zaXRpb25cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSh0KCdzZXR0aW5ncy5wcmVzZXJ2ZUN1cnNvcicpKVxuICAgICAgICAgICAgLnNldERlc2ModCgnc2V0dGluZ3MucHJlc2VydmVDdXJzb3JEZXNjJykpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGVcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MucHJlc2VydmVDdXJzb3JQb3NpdGlvbilcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnByZXNlcnZlQ3Vyc29yUG9zaXRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIEF1dG8tYWNjZXB0IGNoYW5nZXNcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSh0KCdzZXR0aW5ncy5hdXRvQWNjZXB0Q2hhbmdlcycpKVxuICAgICAgICAgICAgLnNldERlc2ModCgnc2V0dGluZ3MuYXV0b0FjY2VwdENoYW5nZXNEZXNjJykpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGVcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b0FjY2VwdENoYW5nZXMpXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvQWNjZXB0Q2hhbmdlcyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gTW9kZWwgQWxpYXNcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSh0KCdzZXR0aW5ncy5tb2RlbCcpKVxuICAgICAgICAgICAgLnNldERlc2ModCgnc2V0dGluZ3MubW9kZWxEZXNjJykpXG4gICAgICAgICAgICAuYWRkRHJvcGRvd24oZHJvcGRvd24gPT4gZHJvcGRvd25cbiAgICAgICAgICAgICAgICAuYWRkT3B0aW9uKCcnLCB0KCdzZXR0aW5ncy5tb2RlbERlZmF1bHQnKSlcbiAgICAgICAgICAgICAgICAuYWRkT3B0aW9uKCdzb25uZXQnLCB0KCdzZXR0aW5ncy5tb2RlbFNvbm5ldCcpKVxuICAgICAgICAgICAgICAgIC5hZGRPcHRpb24oJ29wdXMnLCB0KCdzZXR0aW5ncy5tb2RlbE9wdXMnKSlcbiAgICAgICAgICAgICAgICAuYWRkT3B0aW9uKCdoYWlrdScsIHQoJ3NldHRpbmdzLm1vZGVsSGFpa3UnKSlcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubW9kZWxBbGlhcylcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1vZGVsQWxpYXMgPSB2YWx1ZSBhcyAnc29ubmV0JyB8ICdvcHVzJyB8ICdoYWlrdScgfCAnJztcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIEFsbG93IFZhdWx0IEFjY2Vzc1xuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKHQoJ3NldHRpbmdzLnZhdWx0QWNjZXNzJykpXG4gICAgICAgICAgICAuc2V0RGVzYyh0KCdzZXR0aW5ncy52YXVsdEFjY2Vzc0Rlc2MnKSlcbiAgICAgICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZVxuICAgICAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hbGxvd1ZhdWx0QWNjZXNzKVxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWxsb3dWYXVsdEFjY2VzcyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gRW5hYmxlIFBlcm1pc3Npb25sZXNzIE1vZGVcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSh0KCdzZXR0aW5ncy5wZXJtaXNzaW9ubGVzc01vZGUnKSlcbiAgICAgICAgICAgIC5zZXREZXNjKHQoJ3NldHRpbmdzLnBlcm1pc3Npb25sZXNzTW9kZURlc2MnKSlcbiAgICAgICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZVxuICAgICAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5lbmFibGVQZXJtaXNzaW9ubGVzc01vZGUpXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5lbmFibGVQZXJtaXNzaW9ubGVzc01vZGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIFRpbWVvdXRcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSh0KCdzZXR0aW5ncy50aW1lb3V0JykpXG4gICAgICAgICAgICAuc2V0RGVzYyh0KCdzZXR0aW5ncy50aW1lb3V0RGVzYycpKVxuICAgICAgICAgICAgLmFkZFRleHQodGV4dCA9PiB0ZXh0XG4gICAgICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCczMDAnKVxuICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MudGltZW91dFNlY29uZHMpKVxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG51bSkgJiYgbnVtID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRpbWVvdXRTZWNvbmRzID0gbnVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gQ3VzdG9tIEFQSSBDb25maWd1cmF0aW9uIFNlY3Rpb25cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSh0KCdzZXR0aW5ncy5jdXN0b21BcGlDb25maWcnKSlcbiAgICAgICAgICAgIC5zZXREZXNjKHQoJ3NldHRpbmdzLmN1c3RvbUFwaUNvbmZpZ0Rlc2MnKSlcbiAgICAgICAgICAgIC5zZXRIZWFkaW5nKCk7XG5cbiAgICAgICAgLy8gQW50aHJvcGljIEJhc2UgVVJMXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUodCgnc2V0dGluZ3MuYXBpQmFzZVVybCcpKVxuICAgICAgICAgICAgLnNldERlc2ModCgnc2V0dGluZ3MuYXBpQmFzZVVybERlc2MnKSlcbiAgICAgICAgICAgIC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignaHR0cHM6Ly9hcGkuYW50aHJvcGljLmNvbScpXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFudGhyb3BpY0Jhc2VVcmwpXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hbnRocm9waWNCYXNlVXJsID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gQW50aHJvcGljIEF1dGggVG9rZW5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSh0KCdzZXR0aW5ncy5hcGlBdXRoVG9rZW4nKSlcbiAgICAgICAgICAgIC5zZXREZXNjKHQoJ3NldHRpbmdzLmFwaUF1dGhUb2tlbkRlc2MnKSlcbiAgICAgICAgICAgIC5hZGRUZXh0KHRleHQgPT4ge1xuICAgICAgICAgICAgICAgIHRleHQuc2V0UGxhY2Vob2xkZXIodCgnc2V0dGluZ3MuYXBpQXV0aFRva2VuUGxhY2Vob2xkZXInKSlcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFudGhyb3BpY0F1dGhUb2tlbilcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYW50aHJvcGljQXV0aFRva2VuID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRleHQuaW5wdXRFbC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFudGhyb3BpYyBNb2RlbFxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKHQoJ3NldHRpbmdzLmN1c3RvbU1vZGVsJykpXG4gICAgICAgICAgICAuc2V0RGVzYyh0KCdzZXR0aW5ncy5jdXN0b21Nb2RlbERlc2MnKSlcbiAgICAgICAgICAgIC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignY2xhdWRlLXNvbm5ldC00LTIwMjUwNTE0JylcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYW50aHJvcGljTW9kZWwpXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hbnRocm9waWNNb2RlbCA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIEFudGhyb3BpYyBTbWFsbC9GYXN0IE1vZGVsXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUodCgnc2V0dGluZ3MuY3VzdG9tU21hbGxNb2RlbCcpKVxuICAgICAgICAgICAgLnNldERlc2ModCgnc2V0dGluZ3MuY3VzdG9tU21hbGxNb2RlbERlc2MnKSlcbiAgICAgICAgICAgIC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignY2xhdWRlLWhhaWt1LTMtNS0yMDI0MTAyMicpXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFudGhyb3BpY1NtYWxsRmFzdE1vZGVsKVxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYW50aHJvcGljU21hbGxGYXN0TW9kZWwgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAvLyBSZW1vdGUgV2ViU29ja2V0IE1vZGUgU2VjdGlvblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKCdSZW1vdGUgTW9kZSAoV2ViU29ja2V0KScpXG4gICAgICAgICAgICAuc2V0RGVzYygnQ29ubmVjdCB0byByZW1vdGUgQ2xhdWRlIHJlbGF5IHNlcnZlciBpbnN0ZWFkIG9mIHJ1bm5pbmcgQ2xhdWRlIGxvY2FsbHknKVxuICAgICAgICAgICAgLnNldEhlYWRpbmcoKTtcblxuICAgICAgICAvLyBFbmFibGUgUmVtb3RlIE1vZGVcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSgnRW5hYmxlIHJlbW90ZSBtb2RlJylcbiAgICAgICAgICAgIC5zZXREZXNjKCdVc2UgV2ViU29ja2V0IGNvbm5lY3Rpb24gdG8gcmVtb3RlIENsYXVkZSBzZXJ2ZXIgaW5zdGVhZCBvZiBsb2NhbCBDbGF1ZGUgQ29kZScpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGVcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlUmVtb3RlTW9kZSlcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZVJlbW90ZU1vZGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSB1c2VyIHRvIHJlbG9hZFxuICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKCdSZW1vdGUgbW9kZSAnICsgKHZhbHVlID8gJ2VuYWJsZWQnIDogJ2Rpc2FibGVkJykgKyAnLiBSZWxvYWQgT2JzaWRpYW4gdG8gYXBwbHkgY2hhbmdlcy4nKTtcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gU2VydmVyIFVSTFxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKCdTZXJ2ZXIgVVJMJylcbiAgICAgICAgICAgIC5zZXREZXNjKCdXZWJTb2NrZXQgc2VydmVyIFVSTCAoZS5nLiwgd3M6Ly9sb2NhbGhvc3Q6ODA4MCBvciB3c3M6Ly95b3VyLXNlcnZlci5jb20pJylcbiAgICAgICAgICAgIC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignd3M6Ly9sb2NhbGhvc3Q6ODA4MCcpXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnJlbW90ZVNlcnZlclVybClcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnJlbW90ZVNlcnZlclVybCA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIEF1dGggVG9rZW4gKG9wdGlvbmFsKVxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKCdBdXRoIHRva2VuIChvcHRpb25hbCknKVxuICAgICAgICAgICAgLnNldERlc2MoJ09wdGlvbmFsIGF1dGhlbnRpY2F0aW9uIHRva2VuIGZvciBzZXJ2ZXIgY29ubmVjdGlvbicpXG4gICAgICAgICAgICAuYWRkVGV4dCh0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgICB0ZXh0LnNldFBsYWNlaG9sZGVyKCd5b3VyLWF1dGgtdG9rZW4nKVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MucmVtb3RlQXV0aFRva2VuKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5yZW1vdGVBdXRoVG9rZW4gPSB2YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGV4dC5pbnB1dEVsLnR5cGUgPSAncGFzc3dvcmQnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXV0by1yZWNvbm5lY3RcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSgnQXV0by1yZWNvbm5lY3QnKVxuICAgICAgICAgICAgLnNldERlc2MoJ0F1dG9tYXRpY2FsbHkgcmVjb25uZWN0IHRvIHNlcnZlciBpZiBjb25uZWN0aW9uIGlzIGxvc3QnKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnJlbW90ZUF1dG9SZWNvbm5lY3QpXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5yZW1vdGVBdXRvUmVjb25uZWN0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAvLyBSZWNvbm5lY3QgSW50ZXJ2YWxcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSgnUmVjb25uZWN0IGludGVydmFsIChtcyknKVxuICAgICAgICAgICAgLnNldERlc2MoJ0luaXRpYWwgcmVjb25uZWN0aW9uIGRlbGF5IGluIG1pbGxpc2Vjb25kcyAod2lsbCBpbmNyZWFzZSBleHBvbmVudGlhbGx5KScpXG4gICAgICAgICAgICAuYWRkVGV4dCh0ZXh0ID0+IHRleHRcbiAgICAgICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJzMwMDAnKVxuICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MucmVtb3RlUmVjb25uZWN0SW50ZXJ2YWwpKVxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG51bSkgJiYgbnVtID49IDEwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnJlbW90ZVJlY29ubmVjdEludGVydmFsID0gbnVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gTWF4IFJlY29ubmVjdCBBdHRlbXB0c1xuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKCdNYXggcmVjb25uZWN0IGF0dGVtcHRzJylcbiAgICAgICAgICAgIC5zZXREZXNjKCdNYXhpbXVtIG51bWJlciBvZiByZWNvbm5lY3Rpb24gYXR0ZW1wdHMgYmVmb3JlIGdpdmluZyB1cCcpXG4gICAgICAgICAgICAuYWRkVGV4dCh0ZXh0ID0+IHRleHRcbiAgICAgICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJzEwJylcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUoU3RyaW5nKHRoaXMucGx1Z2luLnNldHRpbmdzLnJlbW90ZU1heFJlY29ubmVjdEF0dGVtcHRzKSlcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihudW0pICYmIG51bSA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5yZW1vdGVNYXhSZWNvbm5lY3RBdHRlbXB0cyA9IG51bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGVtcHQgdG8gZGV0ZWN0IENsYXVkZSBDb2RlIGluc3RhbGxhdGlvbiBwYXRoIChjcm9zcy1wbGF0Zm9ybSlcbiAgICAgKi9cbiAgICBwcml2YXRlIGRldGVjdENsYXVkZUNvZGVQYXRoKCk6IHN0cmluZyB8IG51bGwge1xuICAgICAgICBjb25zdCBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xuICAgICAgICBjb25zdCBob21lRGlyID0gcHJvY2Vzcy5lbnYuSE9NRSB8fCBwcm9jZXNzLmVudi5VU0VSUFJPRklMRSB8fCBvcy5ob21lZGlyKCk7XG5cbiAgICAgICAgbGV0IHBvc3NpYmxlUGF0aHM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgaWYgKGlzV2luZG93cykge1xuICAgICAgICAgICAgLy8gV2luZG93cy1zcGVjaWZpYyBwYXRoc1xuICAgICAgICAgICAgcG9zc2libGVQYXRocyA9IFtcbiAgICAgICAgICAgICAgICAnY2xhdWRlJywgLy8gSWYgaW4gUEFUSFxuICAgICAgICAgICAgICAgIHBhdGguam9pbihob21lRGlyLCAnQXBwRGF0YScsICdMb2NhbCcsICdQcm9ncmFtcycsICdjbGF1ZGUnLCAnY2xhdWRlLmV4ZScpLFxuICAgICAgICAgICAgICAgIHBhdGguam9pbihob21lRGlyLCAnLmJ1bicsICdiaW4nLCAnY2xhdWRlLmV4ZScpLFxuICAgICAgICAgICAgICAgICdDOlxcXFxQcm9ncmFtIEZpbGVzXFxcXGNsYXVkZVxcXFxjbGF1ZGUuZXhlJyxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBVbml4LWxpa2Ugc3lzdGVtc1xuICAgICAgICAgICAgcG9zc2libGVQYXRocyA9IFtcbiAgICAgICAgICAgICAgICAnY2xhdWRlJywgLy8gSWYgaW4gUEFUSFxuICAgICAgICAgICAgICAgICcvdXNyL2xvY2FsL2Jpbi9jbGF1ZGUnLFxuICAgICAgICAgICAgICAgICcvdXNyL2Jpbi9jbGF1ZGUnLFxuICAgICAgICAgICAgICAgIHBhdGguam9pbihob21lRGlyLCAnLmxvY2FsJywgJ2JpbicsICdjbGF1ZGUnKSxcbiAgICAgICAgICAgICAgICBwYXRoLmpvaW4oaG9tZURpciwgJ2JpbicsICdjbGF1ZGUnKSxcbiAgICAgICAgICAgICAgICBwYXRoLmpvaW4oaG9tZURpciwgJy5idW4nLCAnYmluJywgJ2NsYXVkZScpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY21kUGF0aCBvZiBwb3NzaWJsZVBhdGhzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIFRyeSB0byBleGVjdXRlICd3aGljaCcgb3IgJ3doZXJlJyBjb21tYW5kIGZvciBzaW1wbGUgcGF0aCBuYW1lc1xuICAgICAgICAgICAgICAgIGlmICghY21kUGF0aC5pbmNsdWRlcygnLycpICYmICFjbWRQYXRoLmluY2x1ZGVzKCdcXFxcJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2hpY2hDbWQgPSBpc1dpbmRvd3MgPyAnd2hlcmUnIDogJ3doaWNoJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZXhlY1N5bmMoYCR7d2hpY2hDbWR9ICR7Y21kUGF0aH1gLCB7IGVuY29kaW5nOiAndXRmOCcgfSkudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbiBXaW5kb3dzLCAnd2hlcmUnIGNhbiByZXR1cm4gbXVsdGlwbGUgcGF0aHMsIHRha2UgdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNwbGl0KCdcXG4nKVswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBmaWxlIGV4aXN0cyBmb3IgYWJzb2x1dGUgcGF0aHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoY21kUGF0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjbWRQYXRoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgLy8gQ29udGludWUgdG8gbmV4dCBwYXRoXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIENsYXVkZSBDb2RlIGlzIGFjY2Vzc2libGUgYW5kIHdvcmtpbmcgKGNyb3NzLXBsYXRmb3JtKVxuICAgICAqL1xuICAgIHByaXZhdGUgYXN5bmMgdGVzdENsYXVkZUNvZGUoKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNtZFBhdGggPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jbGF1ZGVDb2RlUGF0aCB8fCAnY2xhdWRlJztcblxuICAgICAgICAgICAgY29uc3QgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcbiAgICAgICAgICAgIGNvbnN0IGhvbWVEaXIgPSBwcm9jZXNzLmVudi5IT01FIHx8IHByb2Nlc3MuZW52LlVTRVJQUk9GSUxFIHx8IG9zLmhvbWVkaXIoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhTZXBhcmF0b3IgPSBpc1dpbmRvd3MgPyAnOycgOiAnOic7XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIGVuaGFuY2VkIFBBVEggLSBpbmNsdWRlIGNvbW1vbiB0b29sIGxvY2F0aW9ucyAoY3Jvc3MtcGxhdGZvcm0pXG4gICAgICAgICAgICBjb25zdCBlbnZQYXRoID0gcHJvY2Vzcy5lbnYuUEFUSCB8fCAnJztcbiAgICAgICAgICAgIGxldCBwYXRoc1RvQWRkOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoaXNXaW5kb3dzKSB7XG4gICAgICAgICAgICAgICAgcGF0aHNUb0FkZCA9IFtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5qb2luKGhvbWVEaXIsICdBcHBEYXRhJywgJ0xvY2FsJywgJ1Byb2dyYW1zJywgJ25vZGVqcycpLFxuICAgICAgICAgICAgICAgICAgICBwYXRoLmpvaW4oaG9tZURpciwgJy5idW4nLCAnYmluJyksXG4gICAgICAgICAgICAgICAgICAgICdDOlxcXFxQcm9ncmFtIEZpbGVzXFxcXG5vZGVqcycsXG4gICAgICAgICAgICAgICAgICAgICdDOlxcXFxQcm9ncmFtIEZpbGVzICh4ODYpXFxcXG5vZGVqcycsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0aHNUb0FkZCA9IFtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5qb2luKGhvbWVEaXIsICcubnZtJywgJ3ZlcnNpb25zJywgJ25vZGUnLCAndjIwLjE4LjInLCAnYmluJyksXG4gICAgICAgICAgICAgICAgICAgIHBhdGguam9pbihob21lRGlyLCAnLmJ1bicsICdiaW4nKSxcbiAgICAgICAgICAgICAgICAgICAgJy91c3IvbG9jYWwvYmluJyxcbiAgICAgICAgICAgICAgICAgICAgJy91c3IvYmluJyxcbiAgICAgICAgICAgICAgICAgICAgJy9iaW4nLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUGF0aHMgPSBwYXRoc1RvQWRkLmZpbHRlcihwID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnMuZXhpc3RzU3luYyhwKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBlbmhhbmNlZFBhdGggPSBbLi4ubmV3IFNldChbLi4uZXhpc3RpbmdQYXRocywgLi4uZW52UGF0aC5zcGxpdChwYXRoU2VwYXJhdG9yKV0pXS5qb2luKHBhdGhTZXBhcmF0b3IpO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICBleGVjKGAke2NtZFBhdGh9IC0tdmVyc2lvbmAsIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgZW52OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9jZXNzLmVudixcbiAgICAgICAgICAgICAgICAgICAgICAgIFBBVEg6IGVuaGFuY2VkUGF0aFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgKGVycm9yOiBFcnJvciB8IG51bGwsIHN0ZG91dDogc3RyaW5nLCBzdGRlcnI6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogU3RyaW5nKGUpIH07XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBQUEsbUJBQXNDOzs7QUNJdEMsSUFBQUMsbUJBQTJHOzs7QUNEcEcsSUFBTSx3QkFBd0I7OztBQ0E5QixJQUFNLEtBQUs7QUFBQTtBQUFBLEVBRWQsZ0JBQWdCO0FBQUEsRUFDaEIseUJBQXlCO0FBQUE7QUFBQSxFQUd6QixlQUFlO0FBQUEsRUFDZixxQkFBcUI7QUFBQSxFQUNyQiw0QkFBNEI7QUFBQSxFQUM1QixtQ0FBbUM7QUFBQSxFQUNuQywwQkFBMEI7QUFBQSxFQUMxQixvQkFBb0I7QUFBQSxFQUNwQixvQkFBb0I7QUFBQSxFQUNwQixzQkFBc0I7QUFBQSxFQUN0QixtQkFBbUI7QUFBQSxFQUNuQix1QkFBdUI7QUFBQSxFQUN2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QUFDO0FBR0QsV0FBSyxXQUFXO0FBQUEsUUFDWixJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixVQUFVLE1BQVk7QUFDbEIsZ0JBQU0sS0FBSyxhQUFhO0FBQ3hCLGdCQUFNLFNBQVMsS0FBSyxJQUFJLFVBQVUsZ0JBQWdCLHFCQUFxQjtBQUN2RSxjQUFJLE9BQU8sU0FBUyxHQUFHO0FBQ25CLGtCQUFNLE9BQU8sT0FBTyxDQUFDLEVBQUU7QUFFdkIsa0JBQU0sV0FBVyxLQUFLLFlBQVksY0FBYyw2Q0FBNkM7QUFDN0YsZ0JBQUksVUFBVTtBQUNWLHVCQUFTLFVBQVU7QUFBQSxZQUN2QjtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQUEsTUFDSixDQUFDO0FBR0QsV0FBSyxjQUFjLElBQUkscUJBQXFCLEtBQUssS0FBSyxJQUFJLENBQUM7QUFBQSxJQUMvRDtBQUFBO0FBQUEsRUFFQSxXQUFXO0FBQUEsRUFFWDtBQUFBLEVBRU0sZUFBZTtBQUFBO0FBQ2pCLFdBQUssV0FBVyxPQUFPLE9BQU8sQ0FBQyxHQUFHLGtCQUFrQixNQUFNLEtBQUssU0FBUyxDQUFtQztBQUFBLElBQy9HO0FBQUE7QUFBQSxFQUVNLGVBQWU7QUFBQTtBQUNqQixZQUFNLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFHakMsWUFBTSxTQUFTLEtBQUssSUFBSSxVQUFVLGdCQUFnQixxQkFBcUI7QUFDdkUsYUFBTyxRQUFRLFVBQVE7QUFDbkIsY0FBTSxPQUFPLEtBQUs7QUFDbEIsYUFBSyxlQUFlO0FBQUEsTUFDeEIsQ0FBQztBQUFBLElBQ0w7QUFBQTtBQUFBLEVBRU0sZUFBZTtBQUFBO0FBQ2pCLFlBQU0sRUFBRSxVQUFVLElBQUksS0FBSztBQUUzQixVQUFJLE9BQTZCO0FBQ2pDLFlBQU0sU0FBUyxVQUFVLGdCQUFnQixxQkFBcUI7QUFFOUQsVUFBSSxPQUFPLFNBQVMsR0FBRztBQUVuQixlQUFPLE9BQU8sQ0FBQztBQUFBLE1BQ25CLE9BQU87QUFFSCxlQUFPLFVBQVUsYUFBYSxLQUFLO0FBQ25DLGNBQU0sNkJBQU0sYUFBYSxFQUFFLE1BQU0sdUJBQXVCLFFBQVEsS0FBSztBQUFBLE1BQ3pFO0FBR0EsVUFBSSxNQUFNO0FBQ04sYUFBSyxVQUFVLFdBQVcsSUFBSTtBQUFBLE1BQ2xDO0FBQUEsSUFDSjtBQUFBO0FBQ0o7IiwKICAibmFtZXMiOiBbImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAicGF0aCIsICJmcyIsICJwYXRoIiwgImNyeXB0byIsICJmcyIsICJwYXRoIiwgInBhdGgiLCAiZnMiLCAicGF0aCIsICJwcm9jZXNzIiwgImltcG9ydF9vYnNpZGlhbiIsICJPYnNpZGlhbk1hcmtkb3duUmVuZGVyZXIiLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9jaGlsZF9wcm9jZXNzIiwgIm9zIiwgImZzIiwgInBhdGgiXQp9Cg==
