const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')
const url = require('url')

let win

const createWindow = () => {
  win = new BrowserWindow({
    width: 250,
    height: 130,
    resizable: false,
    autoHideMenuBar: true
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
