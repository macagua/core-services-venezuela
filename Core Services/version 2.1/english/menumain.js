var myNavBar1 = new NavBar(0);
var dhtmlMenu;

dhtmlMenu = new NavBarMenu(110, 128);
dhtmlMenu.addItem(new NavBarMenuItem("&nbsp;&nbsp;The Company", "javascript:parent.body.location='bussines.htm';"));
dhtmlMenu.addItem(new NavBarMenuItem("Technology", "javascript:parent.body.location='technology.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Instrumentation", "javascript:parent.body.location='instrumentation.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Information Systems", "javascript:parent.body.location='systems.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Towards 9000:2000", "javascript:parent.body.location='towards90002000.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Integral Protection", "javascript:parent.body.location='integralprotection.htm'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(80, 188);
dhtmlMenu.addItem(new NavBarMenuItem("&nbsp;&nbsp;Services", "javascript:parent.body.location='services.htm#services'"));
dhtmlMenu.addItem(new NavBarMenuItem("Taking channel's samples", "javascript:parent.body.location='analisisandtakeofchannelsamples.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Monitoring and Instrumentation", "javascript:parent.body.location='monitoringofdrillingparameters.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("Mud Logging", "javascript:parent.body.location='mudlogging.htm'"));
dhtmlMenu.addItem(new NavBarMenuItem("The String Vibration", "javascript:parent.body.location='stringvibration.htm'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(105, 205);
dhtmlMenu.addItem(new NavBarMenuItem("&nbsp;&nbsp;Remote Well", "javascript:parent.body.location='services.htm#inwellonline'"));
dhtmlMenu.addItem(new NavBarMenuItem("Remote Transmission of Drill Data", "javascript:parent.body.location='ewellweb.htm'", "target='_self'"));
dhtmlMenu.addItem(new NavBarMenuItem("The String Vibration on line.", "javascript:parent.body.location='stringvibrationonline.htm'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(100, 0);
dhtmlMenu.addItem(new NavBarMenuItem("&nbsp;&nbsp;Well on line", "javascript:parent.body.location='signon.asp'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(77, 100);
dhtmlMenu.addItem(new NavBarMenuItem("&nbsp;&nbsp;Calculus",  "javascript:alert('Under Construction');", "target='_self'"));
dhtmlMenu.addItem(new NavBarMenuItem("Hidraulics",  "javascript:alert('Under Construction');", "target='_self'"));
dhtmlMenu.addItem(new NavBarMenuItem("Swab y Surge",  "javascript:alert('Under Construction');", "target='_self'"));
dhtmlMenu.addItem(new NavBarMenuItem("Presure Control",  "javascript:alert('Under Construction');", "target='_self'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(90, 0);
dhtmlMenu.addItem(new NavBarMenuItem("&nbsp;&nbsp;Contact Us", "javascript:parent.body.location='contactus.htm'"));
myNavBar1.addMenu(dhtmlMenu);

dhtmlMenu = new NavBarMenu(81, 0);
dhtmlMenu.addItem(new NavBarMenuItem("&nbsp;&nbsp;Map Site", "javascript:parent.body.location='sitemap.htm'"));
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
