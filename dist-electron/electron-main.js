"use strict";
const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
Menu.setApplicationMenu(null);
function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 800,
    icon: path.join(__dirname, "public/favicon.ico"),
    // 指定图标路径
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  if (process.env.NODE_ENV == "development") {
    win.loadURL("http://localhost:8001");
    win.webContents.on("before-input-event", (event, input) => {
      if (input.key === "F12") {
        win.webContents.toggleDevTools();
      }
    });
  } else {
    win.loadFile(path.join(__dirname, "dist/index.html")).catch((err) => {
      console.error("Failed to load file:", err);
    });
  }
}
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin")
    app.quit();
});
//# sourceMappingURL=electron-main.js.map
