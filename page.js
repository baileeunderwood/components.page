function opens() {
    var dropdown = document.getElementById("navbar-vertical");
    if(dropdown.style.display == "none"){
        dropdown.style.display="block";
    }
    else if(dropdown.style.display == "block"){
        dropdown.style.display="none";
    }
}