'use strict';

import * as vscode from 'vscode';
import { WrapQuoteService } from "./services/WrapQuoteService";
import { HelloWorldService } from './services/HelloWorldService';

export function activate(context: vscode.ExtensionContext) {
	let wrapQuoteService = new WrapQuoteService();
	let helloWorldService = new HelloWorldService();
	context.subscriptions.push(wrapQuoteService.getDisposable());
	context.subscriptions.push(helloWorldService.getDisposable());
}

export function deactivate() {}
