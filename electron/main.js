const electron = require("electron");
let window;
electron.app.on("ready", createWindow);
electron.app.on("activate", () => {
    if (window === null)
        createWindow();
});
function createWindow() {
    window = new electron.BrowserWindow({ width: 1400, height: 800,autoHideMenuBar: true});

        // window.loadURL(url.format({
        //     pathname: path.join(__dirname, "http://demo-study.lucksoft.com.cn/"), // relative path to the HTML-file
        //     protocol: "file:",
        //     slashes: true
        // }));
        window.loadURL("http://demo-study.lucksoft.com.cn/");
    // window.webContents.openDevTools();
    window.on("closed", () => {
        window = null;
    });
}