import * as vscode from 'vscode';
import { Service } from "./Service";

export class HelloWorldService implements Service {

    getDisposable() : vscode.Disposable {
        let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
            vscode.window.showInformationMessage('Hello World!');
        });

        return disposable;
    }

}