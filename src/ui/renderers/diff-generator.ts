/**
 * Utility for generating side-by-side diff views (IntelliJ-style)
 */
export interface DiffChange {
    type: 'equal' | 'delete' | 'insert' | 'modify';
    oldContent?: string;
    newContent?: string;
    oldLineNum?: number;
    newLineNum?: number;
}

export class DiffGenerator {
    /**
     * Generate side-by-side HTML diff view between original and modified content
     *
     * @param original Original content
     * @param modified Modified content
     * @returns HTML string representing the side-by-side diff
     */
    static generateDiff(original: string, modified: string): string {
        const originalLines = original.split('\n');
        const modifiedLines = modified.split('\n');

        // Compute diff
        const diff = this.computeDiff(originalLines, modifiedLines);

        let html = '<div class="claude-code-diff-side-by-side">';

        // Header
        html += '<div class="diff-header">';
        html += '<div class="diff-column diff-column-left"><span class="diff-header-title">Original</span></div>';
        html += '<div class="diff-column diff-column-right"><span class="diff-header-title">Modified</span></div>';
        html += '</div>';

        // Content
        html += '<div class="diff-content">';

        for (const change of diff) {
            if (change.type === 'equal') {
                // Both sides show the same line
                html += '<div class="diff-row diff-equal">';
                html += `<div class="diff-column diff-column-left">`;
                html += `<span class="diff-line-number">${change.oldLineNum}</span>`;
                html += `<span class="diff-line-content">${this.escapeHtml(change.oldContent || '')}</span>`;
                html += `</div>`;
                html += `<div class="diff-column diff-column-right">`;
                html += `<span class="diff-line-number">${change.newLineNum}</span>`;
                html += `<span class="diff-line-content">${this.escapeHtml(change.newContent || '')}</span>`;
                html += `</div>`;
                html += '</div>';
            } else if (change.type === 'delete') {
                // Left side shows deleted line, right side is empty
                html += '<div class="diff-row diff-delete">';
                html += `<div class="diff-column diff-column-left">`;
                html += `<span class="diff-line-number">${change.oldLineNum}</span>`;
                html += `<span class="diff-line-content">${this.escapeHtml(change.oldContent || '')}</span>`;
                html += `</div>`;
                html += `<div class="diff-column diff-column-right diff-empty">`;
                html += `<span class="diff-line-number"></span>`;
                html += `<span class="diff-line-content"></span>`;
                html += `</div>`;
                html += '</div>';
            } else if (change.type === 'insert') {
                // Right side shows inserted line, left side is empty
                html += '<div class="diff-row diff-insert">';
                html += `<div class="diff-column diff-column-left diff-empty">`;
                html += `<span class="diff-line-number"></span>`;
                html += `<span class="diff-line-content"></span>`;
                html += `</div>`;
                html += `<div class="diff-column diff-column-right">`;
                html += `<span class="diff-line-number">${change.newLineNum}</span>`;
                html += `<span class="diff-line-content">${this.escapeHtml(change.newContent || '')}</span>`;
                html += `</div>`;
                html += '</div>';
            } else if (change.type === 'modify') {
                // Both sides show content (modification)
                html += '<div class="diff-row diff-modify">';
                html += `<div class="diff-column diff-column-left">`;
                html += `<span class="diff-line-number">${change.oldLineNum}</span>`;
                html += `<span class="diff-line-content">${this.escapeHtml(change.oldContent || '')}</span>`;
                html += `</div>`;
                html += `<div class="diff-column diff-column-right">`;
                html += `<span class="diff-line-number">${change.newLineNum}</span>`;
                html += `<span class="diff-line-content">${this.escapeHtml(change.newContent || '')}</span>`;
                html += `</div>`;
                html += '</div>';
            }
        }

        html += '</div>'; // diff-content
        html += '</div>'; // diff-side-by-side
        return html;
    }

    /**
     * Compute diff between two arrays of lines using a simple algorithm
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
                result.push({
                    type: 'insert',
                    newContent: newLines[newIndex],
                    newLineNum: newLineNum
                });
                newIndex++;
                newLineNum++;
            } else if (newIndex >= newLines.length) {
                // Remaining lines are deletions
                result.push({
                    type: 'delete',
                    oldContent: oldLines[oldIndex],
                    oldLineNum: oldLineNum
                });
                oldIndex++;
                oldLineNum++;
            } else if (oldLines[oldIndex] === newLines[newIndex]) {
                // Lines are equal
                result.push({
                    type: 'equal',
                    oldContent: oldLines[oldIndex],
                    newContent: newLines[newIndex],
                    oldLineNum: oldLineNum,
                    newLineNum: newLineNum
                });
                oldIndex++;
                newIndex++;
                oldLineNum++;
                newLineNum++;
            } else {
                // Lines are different - check if it's a modification or delete+insert
                // For now, treat consecutive different lines as modifications
                result.push({
                    type: 'modify',
                    oldContent: oldLines[oldIndex],
                    newContent: newLines[newIndex],
                    oldLineNum: oldLineNum,
                    newLineNum: newLineNum
                });
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
