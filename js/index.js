let isDarkMode = true;

function toogleMode(){
    if(isDarkMode){
        isDarkMode = false;
        return document.body.classList += " light-mode";
    }
    isDarkMode = true
    document.body.classList.remove("light-mode");
}

function contact(event){
    event.preventDefault();
    document.body.classList += " loading";
    emailjs
        .sendForm(
            'service_xyyu7yb',
            'template_ji2yckv',
            event.target,
            'EGAb_j1LwKVWxP8JP'
        ).then(() => {
            document.body.classList.remove("loading");
            document.body.classList += " succes";
        }).catch(() => {
            document.body.classList.remove("succes");
            alert("Opss, the email service is temporarily unavailable. Please contact me directly on contact@grzegorzszerszen.com");
        })
}

function openMenu(){
    document.body.classList += " open-menu";
}

function closeMenu(){
    document.body.classList.remove("open-menu");
}
