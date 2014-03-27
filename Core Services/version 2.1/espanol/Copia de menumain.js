var myNavBar1 = new NavBar(0);
var dhtmlMenu;

dhtmlMenu = new NavBarMenu(90, 120);
dhtmlMenu.addItem(new NavBarMenuItem("&nbsp;La Empresa", "javascript:parent.cuerpo.location='laempresa.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Tecnologia", "javascript:parent.cuerpo.location='tecnologia.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Instrumentación", "javascript:parent.cuerpo.location='instrumentacion.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Sistemas", "javascript:parent.cuerpo.location='sistemas.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("ISO-9000", "javascript:parent.cuerpo.location='hacia90002000.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Seguridad", "javascript:parent.cuerpo.location='proteccionintegral.htm'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(75, 60);
dhtmlMenu.addItem(new NavBarMenuItem("&nbsp;Servicios", "javascript:parent.cuerpo.location='servicios.htm#servicios'"));
dhtmlMenu.addItem(new NavBarMenuItem("En Pozo", "javascript:parent.cuerpo.location='tomayanalisisdemuestrasdecanal.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Remoto", "javascript:parent.cuerpo.location='monitoreodeparametros.htm'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(129, 173);
dhtmlMenu.addItem(new NavBarMenuItem("&nbsp;Servicios en pozo", "javascript:parent.cuerpo.location='servicios.htm#servicios'"));
dhtmlMenu.addItem(new NavBarMenuItem("Toma de muestras", "javascript:parent.cuerpo.location='tomayanalisisdemuestrasdecanal.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Monitoreo e Instrumentación", "javascript:parent.cuerpo.location='monitoreodeparametros.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Mud Logging", "javascript:parent.cuerpo.location='mudlogging.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Vibración de sarta", "javascript:parent.cuerpo.location='vibraciondesarta.htm'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(123, 165);
dhtmlMenu.addItem(new NavBarMenuItem("&nbsp;Servicios Remoto", "javascript:parent.cuerpo.location='servicios.htm#enpozoremoto'"));
dhtmlMenu.addItem(new NavBarMenuItem("Perforación en linea", "javascript:parent.cuerpo.location='ewellweb.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Vibración de sarta en linea", "javascript:parent.cuerpo.location='vibraciondesartaenlinea.htm'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(95, 0);
dhtmlMenu.addItem(new NavBarMenuItem("Pozo en linea", "javascript:parent.cuerpo.location='signon.asp'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(63, 130);             
dhtmlMenu.addItem(new NavBarMenuItem("Calculos", "javascript:alert('Pagina en Construcción');", "target='_self'"));
dhtmlMenu.addItem(new NavBarMenuItem("Hidraulica", "javascript:alert('Pagina en Construcción');", "target='_self'"));
dhtmlMenu.addItem(new NavBarMenuItem("Suaveo y surgencia", "javascript:alert('Pagina en Construcción');", "target='_self'"));
dhtmlMenu.addItem(new NavBarMenuItem("Control de presiones", "javascript:alert('Pagina en Construcción');", "target='_self'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(80, 0);
dhtmlMenu.addItem(new NavBarMenuItem("Contactenos", "javascript:parent.cuerpo.location='contactenos.htm'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(59, 0);
dhtmlMenu.addItem(new NavBarMenuItem("&nbsp;&nbsp;Mapa", "javascript:parent.cuerpo.location='mapadelsitio.htm'"));
myNavBar1.addMenu(dhtmlMenu);

//seteo de colores
myNavBar1.setColors("#cccccc", "yellow", "#000099", "white", "#3366ff", "yellow", "#000099", "white", "#3366ff")

myNavBar1.setSizes(2,3,1)

//Alineacion de los elementos del menu, valores posible: "left", "center", and "right"
myNavBar1.setAlign("center")

var fullWidth;

function init() {

  // Get width of window, need to account for scrollbar width in Netscape.

  fullWidth = getWindowWidth() 
    - (isMinNS4 && getWindowHeight() < getPageHeight() ? 16 : 0);

  myNavBar1.resize(fullWidth);
  myNavBar1.create();
  myNavBar1.setzIndex(2);
  //UNCOMMENT BELOW LINE TO MOVE MENU DOWN 50 pixels
  //myNavBar1.moveTo(0, 50);
}
