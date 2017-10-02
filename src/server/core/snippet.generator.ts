import * as ts from 'typescript';
import { BadRequestError, InformationalError } from './errors';

/**
 * Compiles script data (which might be the "script" tab on the snippet,
 * but might also be the "customFunctions").
 */
export function compileScript(
    data: { language: string, content: string },
    strings: ServerStrings
): string {
    const { language, content } = data;

    switch (language.toLowerCase()) {
        case 'typescript':
            let result = ts.transpileModule(content, {
                reportDiagnostics: true,
                compilerOptions: {
                    target: ts.ScriptTarget.ES5,
                    allowJs: true,
                    lib: ['dom', 'es2015']
                }
            });

            if (result.diagnostics.length) {
                throw new InformationalError(
                    this._strings.getSyntaxErrorsTitle(result.diagnostics.length),
                    result.diagnostics.map(item => {
                        let upThroughError = content.substr(0, item.start);
                        let afterError = content.substr(item.start + 1);
                        let lineNumber = upThroughError.split('\n').length;
                        let startIndexOfThisLine = upThroughError.lastIndexOf('\n');
                        let lineText = content.substring(startIndexOfThisLine, item.start + Math.max(afterError.indexOf('\n'), 0)).trim();
                        return `${this._strings.line} #${lineNumber}:  ${item.messageText}` + '\n    ' + lineText;
                    }).join('\n\n')
                );
            }

            // HACK: Need to manually remove es2015 module generation
            return result.outputText.replace('Object.defineProperty(exports, "__esModule", { value: true });', '');

        case 'javascript':
            return content;

        default:
            throw new BadRequestError(`${this._strings.unrecognizedScriptLanguage} ${language}`);
    }
}
