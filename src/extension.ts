'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let editor = vscode.window.activeTextEditor;

	let disposable = vscode.commands.registerCommand('extension.quoteWrap', () => {
		if(editor){
			let document = editor.document;
			let selection = editor.selection;

			if(selection.isEmpty){
				selection = new vscode.Selection(document.positionAt(0), document.positionAt(document.getText().length));
			}

			let jsonString = document.getText(selection);
			let quotedString = "'" + jsonString + "'";
			editor.edit(editBuilder => {
				editBuilder.replace(selection, quotedString);
			})
			
			editor.selection = new vscode.Selection(selection.end, selection.end);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
