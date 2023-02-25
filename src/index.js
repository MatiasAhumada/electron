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
let newProductWindow;

app.on("ready", () => {
  //VENTANA PRINCIPAL
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

  // cerrado de todo el programa al cerrar V Principal
  mainWindow.on("close", () => {
    app.quit();
  });
});

//nueva ventana desde menu
function createNewProuctWindow() {
  newProductWindow = new BrowserWindow({
    width: 400,
    height: 330,
    title: "agregar un nuevo producto a la ventana",
  });
  // newProductWindow.setMenu(null),
    newProductWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "views/CrearProducto.html"),
        protocol: "file",
        slashes: true,
      })
    );
  newProductWindow.on("closed", () => {
    newProductWindow = null;
  });
}

function putProuctWindow() {
  newProductWindow = new BrowserWindow({
    width: 400,
    height: 330,
    title: "Editar",
  });
  newProductWindow.setMenu(null),
    newProductWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "views/EditarProducto.html"),
        protocol: "file",
        slashes: true,
      })
    );
  newProductWindow.on("closed", () => {
    newProductWindow = null;
  });
}
function deleteProuctWindow() {
  newProductWindow = new BrowserWindow({
    width: 400,
    height: 330,
    title: "agregar un nuevo producto a la ventana",
  });
  newProductWindow.setMenu(null),
    newProductWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "views/BorrarProducto.html"),
        protocol: "file",
        slashes: true,
      })
    );
  newProductWindow.on("closed", () => {
    newProductWindow = null;
  });
}

//Barra de menu
const templateMenu = [
  {
    label: "Archivo",
    submenu: [
      {
        label: "Cerrar sesion",
        accelerator: "Alt+F4",
        click() {
          app.quit();
        },
      },
    ],
  },
  {
    label: "Productos",
    submenu: [
      {
        label: "Nuevos Productos",
        accelerator: process.platform == "darwin" ? "command+N" : "Ctrl+N", //validacion
        click() {
          createNewProuctWindow();
        },
      },

      {
        label: "Borrar Productos",
        accelerator: process.platform == "darwin" ? "command+B" : "Ctrl+B", //validacion
        click() {
          deleteProuctWindow();
        },
      },
      {
        label: "Editar Productos",
        accelerator: process.platform == "darwin" ? "command+E" : "Ctrl+E", //validacion
        click() {
          putProuctWindow();
        },
      },
    ],
  },
];

if (process.env.NODE_ENV !== "production") {
  templateMenu.push({
    label: "DevTools",
    submenu: [
      {
        label: "Consola",
        accelerator: 'Ctrl+D',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: 'reload'
      }
    ],
  });
}
