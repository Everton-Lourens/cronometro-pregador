<<<<<<< HEAD
const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  // Configurar o aplicativo para iniciar automaticamente ao ligar o PC
  app.setLoginItemSettings({
    openAtLogin: true, // Inicia ao ligar o PC
    path: app.getPath('exe'), // Caminho do executável
  });

  // Criar a janela principal
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: false, // Desativar tela cheia para permitir movimentação
    resizable: true,   // Permitir redimensionar a janela
    movable: true,     // Permitir mover a janela entre telas
    icon: path.join(__dirname, 'assets/icons/sand-clock.ico'), // Caminho do ícone
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');

  // Adicionar suporte a múltiplas telas (opcional, ajusta posição inicial)
  const { screen } = require('electron');
  const displays = screen.getAllDisplays();

  // Definir a posição da janela na tela principal
  const primaryDisplay = displays[0];
  const { x, y } = primaryDisplay.bounds;
  mainWindow.setBounds({
    x: x,
    y: y,
    width: primaryDisplay.bounds.width,
    height: 600
  });
});
=======
const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  // Configurar o aplicativo para iniciar automaticamente ao ligar o PC
  app.setLoginItemSettings({
    openAtLogin: true, // Inicia ao ligar o PC
    path: app.getPath('exe'), // Caminho do executável
  });

  // Criar a janela principal
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: false, // Desativar tela cheia para permitir movimentação
    resizable: true,   // Permitir redimensionar a janela
    movable: true,     // Permitir mover a janela entre telas
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');

  // Adicionar suporte a múltiplas telas (opcional, ajusta posição inicial)
  const { screen } = require('electron');
  const displays = screen.getAllDisplays();

  // Definir a posição da janela na tela principal
  const primaryDisplay = displays[0];
  const { x, y } = primaryDisplay.bounds;
  mainWindow.setBounds({
    x: x + 50,
    y: y + 50,
    width: 800,
    height: 600
  });
});
>>>>>>> c554f831071bd15cc2c0f2cdfe39ca5eb1305d69
