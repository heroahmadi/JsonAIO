import * as vscode from 'vscode';
import { Service } from  "./Service";

export class WrapQuoteService implements Service {
    getDisposable(): vscode.Disposable {
        let editor = vscode.window.activeTextEditor;

        let disposable = vscode.commands.registerCommand('extension.quoteWrap', () => {
            if (editor) {
                let document = editor.document;
                let selection = editor.selection;

                if (selection.isEmpty) {
                    selection = new vscode.Selection(document.positionAt(0), document.positionAt(document.getText().length));
                }

                let jsonString = document.getText(selection).replace("'", "\\'");
                let quotedString = "'" + jsonString + "'";
                editor.edit(editBuilder => {
                    editBuilder.replace(selection, quotedString);
                })

                editor.selection = new vscode.Selection(selection.end, selection.end);
            }
        });

        return disposable;
    }

}