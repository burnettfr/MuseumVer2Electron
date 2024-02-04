const { app, BrowserWindow, Menu } = require('electron'); //bring in app and browser objects
const path = require('path'); //creates path on server

const createWindow = () => {
    const win = new BrowserWindow({
      title: "Museum Games",
      fullscreen: "true"
    })
  
    win.loadFile(path.join(__dirname, './mainPage.html'));
  }

app.whenReady().then(() => {
    createWindow()

    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })

  //Menu template
  const menu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                click: () => app.quit()  //add event handler
            }
        ]
    }
  ]

  const menu2 = [
    {label: ''}
  ]