import * as vscode from 'vscode';

export interface Service {
    getDisposable(): vscode.Disposable
}