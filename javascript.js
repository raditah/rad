document.getElementById("peru").addEventListener("click", ocultarpe) 
function ocultarpe() {
  var x = document.getElementById("botonesperu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
document.getElementById("botonescolombia").style.display = "none"
document.getElementById("colombia").addEventListener("click", ocultarco) 
function ocultarco() {
  var x = document.getElementById("botonescolombia");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
document.getElementById("botoneschile").style.display = "none"
document.getElementById("chile").addEventListener("click", ocultarcl) 
function ocultarcl() {
  var x = document.getElementById("botoneschile");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
document.getElementById("botonesmexico").style.display = "none"
document.getElementById("mexico").addEventListener("click", ocultarmx) 
function ocultarmx() {
  var x = document.getElementById("botonesmexico");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
document.getElementById("peride").addEventListener("click", peride) 
function peride() {
   window.open("https://hq-pe.taxibeat.com/ride/edit/"+document.getElementById('texto').value 
   , '_blank');
        win.focus();
      }
document.getElementById("pepass").addEventListener("click", pepass) 
function pepass() {
   window.open("https://hq-pe.taxibeat.com/passenger/edit/"+document.getElementById('texto').value 
   , '_blank');
        win.focus();
      }
document.getElementById("pedriver").addEventListener("click", pedriver) 
      function pedriver() {
    window.open("https://hq-pe.taxibeat.com/driver/edit/"+document.getElementById('texto').value 
         , '_blank');
              win.focus();
            }
document.getElementById("coride").addEventListener("click", coride) 
            function coride() {
               window.open("https://hq-co.taxibeat.com/ride/edit/"+document.getElementById('texto').value 
               , '_blank');
                    win.focus();
                  }
document.getElementById("copass").addEventListener("click", copass) 
            function copass() {
               window.open("https://hq-co.taxibeat.com/passenger/edit/"+document.getElementById('texto').value 
               , '_blank');
                    win.focus();
                  }
document.getElementById("codriver").addEventListener("click", codriver) 
                  function codriver() {
                window.open("https://hq-co.taxibeat.com/driver/edit/"+document.getElementById('texto').value 
                    , '_blank');
                          win.focus();
                        }
document.getElementById("clride").addEventListener("click", clride) 
                        function clride() {
                        window.open("https://hq-cl.taxibeat.com/ride/edit/"+document.getElementById('texto').value 
                           , '_blank');
                                win.focus();
                              }
document.getElementById("clpass").addEventListener("click", clpass) 
                        function clpass() {
                        window.open("https://hq-cl.taxibeat.com/passenger/edit/"+document.getElementById('texto').value 
                           , '_blank');
                                win.focus();
                              }
document.getElementById("cldriver").addEventListener("click", cldriver) 
                              function cldriver() {
                        window.open("https://hq-cl.taxibeat.com/driver/edit/"+document.getElementById('texto').value 
                                 , '_blank');
                                      win.focus();
                                    }
document.getElementById("mxride").addEventListener("click", mxride) 
                                    function mxride() {
                                       window.open("https://hq.mexico.thebeat.co/ride/edit/"+document.getElementById('texto').value 
                                       , '_blank');
                                            win.focus();
                                          }
document.getElementById("mxpass").addEventListener("click", mxpass) 
                                    function mxpass() {
                                       window.open("https://hq.mexico.thebeat.co/passenger/edit/"+document.getElementById('texto').value 
                                       , '_blank');
                                            win.focus();
                                          }
document.getElementById("mxdriver").addEventListener("click", mxdriver) 
                                          function mxdriver() {
                                             window.open("https://hq.mexico.thebeat.co/driver/edit/"+document.getElementById('texto').value 
                                             , '_blank');
                                                  win.focus();
                                                }
document.getElementById("beaty").addEventListener("click", beatyp) 
                      function beatyp() {
                        window.open("https://beatypedia.zendesk.com/hc/es/search?utf8=✓&query="+document.getElementById('texto').value 
                                                   , '_blank');
                                                        win.focus();
                                                      }
                                                      document.getElementById("peride").addEventListener("click", peride) 
      