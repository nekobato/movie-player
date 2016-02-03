"use strict"

const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;

module.exports = class {

  constructor() {

    var electronScreen = electron.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;

    this.win = new BrowserWindow({
      x: 0,
      y: 0,
      width: size.width,
      height: size.height - 24, // Macの上のトレイ分短く
      show: false,
      resizable: false,
      frame: true,
      transparent: true,
      alwaysOnTop: false,
      'skip-taskbar': true
    });

    this.win.center();
    this.win.setIgnoreMouseEvents(true);
    this.win.setVisibleOnAllWorkspaces(false);

    this.win.loadURL('file://' + __dirname + '/index.html');
  }

  show() {
    this.win.show();
  }
}
