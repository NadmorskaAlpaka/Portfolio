let isDarkMode = true;

function toogleMode(){
    if(isDarkMode){
        isDarkMode = false;
        return document.body.classList += "light-mode";
    }
    isDarkMode = true
    document.body.classList.remove("light-mode");
}