/**
 * Utility for generating diff views between content versions
 */
export interface DiffChange {
    type: 'equal' | 'delete' | 'insert';
    content: string;
    oldLineNum?: number;
    newLineNum?: number;
}

export class DiffGenerator {
    /**
     * Generate HTML diff view between original and modified content
     *
     * @param original Original content
     * @param modified Modified content
     * @returns HTML string representing the diff
     */
    static generateDiff(original: string, modified: string): string {
        const originalLines = original.split('\n');
        const modifiedLines = modified.split('\n');

        // Simple line-by-line diff
        const diff = this.computeDiff(originalLines, modifiedLines);

        let html = '<div class="claude-code-diff-container">';

        for (const change of diff) {
            if (change.type === 'equal') {
                html += `<div class="diff-line diff-equal"><span class="diff-line-number">${change.oldLineNum}</span><span class="diff-line-number">${change.newLineNum}</span><span class="diff-content">${this.escapeHtml(change.content)}</span></div>`;
            } else if (change.type === 'delete') {
                html += `<div class="diff-line diff-delete"><span class="diff-line-number">${change.oldLineNum}</span><span class="diff-line-number">-</span><span class="diff-content">- ${this.escapeHtml(change.content)}</span></div>`;
            } else if (change.type === 'insert') {
                html += `<div class="diff-line diff-insert"><span class="diff-line-number">-</span><span class="diff-line-number">${change.newLineNum}</span><span class="diff-content">+ ${this.escapeHtml(change.content)}</span></div>`;
            }
        }

        html += '</div>';
        return html;
    }

    /**
     * Compute diff between two arrays of lines
     *
     * @param oldLines Original lines
     * @param newLines Modified lines
     * @returns Array of diff changes
     */
    private static computeDiff(oldLines: string[], newLines: string[]): DiffChange[] {
        const result: DiffChange[] = [];

        let oldIndex = 0;
        let newIndex = 0;
        let oldLineNum = 1;
        let newLineNum = 1;

        while (oldIndex < oldLines.length || newIndex < newLines.length) {
            if (oldIndex >= oldLines.length) {
                // Remaining lines are insertions
                result.push({ type: 'insert', content: newLines[newIndex], newLineNum: newLineNum });
                newIndex++;
                newLineNum++;
            } else if (newIndex >= newLines.length) {
                // Remaining lines are deletions
                result.push({ type: 'delete', content: oldLines[oldIndex], oldLineNum: oldLineNum });
                oldIndex++;
                oldLineNum++;
            } else if (oldLines[oldIndex] === newLines[newIndex]) {
                // Lines are equal
                result.push({ type: 'equal', content: oldLines[oldIndex], oldLineNum: oldLineNum, newLineNum: newLineNum });
                oldIndex++;
                newIndex++;
                oldLineNum++;
                newLineNum++;
            } else {
                // Lines are different - mark as delete + insert
                result.push({ type: 'delete', content: oldLines[oldIndex], oldLineNum: oldLineNum });
                result.push({ type: 'insert', content: newLines[newIndex], newLineNum: newLineNum });
                oldIndex++;
                newIndex++;
                oldLineNum++;
                newLineNum++;
            }
        }

        return result;
    }

    /**
     * Escape HTML entities
     *
     * @param text Text to escape
     * @returns Escaped text safe for HTML insertion
     */
    private static escapeHtml(text: string): string {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}
