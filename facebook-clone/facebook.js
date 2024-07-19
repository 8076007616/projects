let Setting_menu=document.querySelector(".settings_menu");
let Dark_button=document.getElementById("dark-btn");
function setting_menu_toggle(){
    Setting_menu.classList.toggle("setting-menu-height");
    
}

Dark_button.addEventListener('click',()=>{
    Dark_button.classList.toggle('dark_button_on');
    document.body.classList.toggle('dark_theme')
    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark")
    }
    else{
        localStorage.setItem("theme","light");
    }
});

if(localStorage.getItem('theme')=='light'){
    Dark_button.classList.remove('dark_button_on');
    document.body.classList.remove('dark_theme')
}
else if(localStorage.getItem('theme')=='dark'){
    Dark_button.classList.add('dark_button_on');
    document.body.classList.add('dark_theme')
}
else{
    localStorage.setItem("theme","light")
}
