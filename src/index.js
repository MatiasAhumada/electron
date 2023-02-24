const { app, BrowserWindow, Menu } = require("electron");
const url = require("url");
const path = require("path");
const { BrowserRouter } = require("react-router-dom");

if (process.env.NODE_ENV !== "production") {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../node_modules", ".bin", "electron"),
  });
}

let mainWindow;
let newProductWindow

app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/Inicio.html"),
      protocol: "file",
      slashes: true,
    })
  );

  const mainMenu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(mainMenu);

});

function createNewProuctWindow(){
 newProductWindow = new BrowserWindow(
    {
      width: 400,
      height: 330,
      title:'agregar un nuevo producto a la ventana'
    }
  )
  newProductWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/CardProducto.html"),
      protocol: "file",
      slashes: true,
    })
  );
}

const templateMenu = [
  {
    label: "Archivo",
    submenu: [
      {
        label: "Nuevo Producto",
        accelerator: "Ctrl+N",
        click() {
          createNewProuctWindow()
        },
      },
    ],
  },
];
