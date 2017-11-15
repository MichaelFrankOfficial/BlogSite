var menu = document.getElementById("hamburgerMenu"),
ham1 = document.getElementById("line1"),
ham2 = document.getElementById("line2"),
ham3 = document.getElementById("line3");

var menuStyle = document.getElementById("dropContent");
menuStyle.style.display="none";

var contentDrop = document.getElementById("dropContent"),
dropMenu = document.getElementById("dropdownMenu");

menu.addEventListener("click", function(){
    if(menuStyle.style.display=="none"){
        menuStyle.style.display = "block";
        document.body.style.backgroundColor="grey";
    }
    else{
        menuStyle.style.display="none";
        document.body.style.backgroundColor="white";
    }
});


