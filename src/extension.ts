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

			let jsonString = document.getText(selection).replace("'", "\\'");
			let quotedString = "'" + jsonString + "'";
			editor.edit(editBuilder => {
				editBuilder.replace(selection, quotedString);
			})
			
			editor.selection = new vscode.Selection(selection.end, selection.end);
		}
	});

	let test = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(test);
}

export function deactivate() {}
