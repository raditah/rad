var GreeceTime = new Date().toLocaleString("es-ES", {timeZone: "Europe/Moscow"});
GreeceTime = new Date(GreeceTime);
document.write('Greece time: '+GreeceTime.toLocaleString())
document.write("<br></b>")
var PeruTime = new Date().toLocaleString("es-ES", {timeZone: "America/Lima"});
PeruTime = new Date(PeruTime);
document.write('Peru time: '+PeruTime.toLocaleString())
document.write("<br></b>")
