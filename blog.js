var menu = document.getElementById("hamburgerMenu"),
ham1 = document.getElementById("line1"),
ham2 = document.getElementById("line2"),
ham3 = document.getElementById("line3");

var menuStyle = document.getElementById("dropContent");
menuStyle.style.display="none";

var bodySection = document.getElementById("phoneBodySection");

var contentDrop = document.getElementById("dropContent"),
dropMenu = document.getElementById("dropdownMenu");

menu.addEventListener("click", function(){
    if(menuStyle.style.display=="none"){
        menuStyle.style.display = "block";
        document.body.style.backgroundColor="#222";
    }
    else{
        menuStyle.style.display="none";
        document.body.style.backgroundColor="#222";
    }
});


