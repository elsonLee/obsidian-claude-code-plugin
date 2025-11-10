/**
 * Utility for extracting and processing content from Claude's responses
 */
export class ResponseContentExtractor {
    /**
     * Extract final content from Claude's response
     *
     * Claude's response format:
     * [explanation/analysis]
     * ---FINAL-CONTENT---
     * [actual file content]
     *
     * If separator is present, it's an edit request
     * If no separator, it's a question/analysis (no file changes)
     *
     * @param content The full response content from Claude
     * @returns The extracted final content, or empty string if no changes
     */
    static extractFinalContent(content: string): { content: string; hasChanges: boolean } {
        const separator = '---FINAL-CONTENT---';
        const separatorIndex = content.indexOf(separator);

        if (separatorIndex === -1) {
            // No separator means this was a question/analysis, not an edit request
            return { content: '', hasChanges: false };
        }

        // Extract ONLY content after the separator
        const afterSeparator = content.substring(separatorIndex + separator.length);
        let finalContent = afterSeparator.trim();

        // Remove any leading/trailing horizontal rule separators (---)
        // Claude sometimes adds these, we want clean content
        finalContent = finalContent.replace(/^---+\s*/g, ''); // Remove leading ---
        finalContent = finalContent.replace(/\s*---+$/g, ''); // Remove trailing ---
        finalContent = finalContent.trim(); // Final trim

        return { content: finalContent, hasChanges: true };
    }

    /**
     * Detect if Claude's response is asking for permission to perform an action
     *
     * @param text The text content to analyze
     * @returns True if the text contains a permission request pattern
     */
    static detectPermissionRequest(text: string): boolean {
        // First check for explicit REQUIRED_APPROVAL keyword
        return text.includes('REQUIRED_APPROVAL');
    }
}
