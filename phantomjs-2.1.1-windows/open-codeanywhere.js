var page = require('webpage').create();
var system = require('system');
var args = system.args;
var pass = args[1];
console.log("initial password");
console.log(pass);
console.log("initial viewportSize");
console.log("{ width: "+page.viewportSize.width+", height: "+page.viewportSize.height+"}");
page.viewportSize = {
  width: 480,
  height: 800
};
console.log("changed viewportSize");
console.log("{ width: "+page.viewportSize.width+", height: "+page.viewportSize.height+"}");
page.open('https://codeanywhere.com/login', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    setTimeout(function(){
                 page.evaluate( function(pass){
                   console.log("passed password");
                   console.log(pass);
                   document.getElementById("login-email").value="chantzish1@gmail.com";
                   document.getElementById("login-password").value=pass;
                   document.getElementsByName("login_remember")[0].checked=true;
                   // document.getElementById("signin-form").children[2].children[0].click();
                   document.getElementById("signin-form").submit();
                 }, pass);
    setTimeout(function(){ page.render('result.png'); },20000);
    // phantom.exit();
    },2000);
  }
});