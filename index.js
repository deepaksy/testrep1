let themeColor="#212121";
let n=1;
let color='';
let theme = '<img src="./images/lightmode.svg">';
let cardcolor = '';
let backimage = '';
const cardcolors = {headerColor:'#323232',
    footerColor:'#44444',
    bodyColor:'#212121'};

 function themeautoset(){
    var date = new Date();
    var hour =  date.getHours();
    if(hour>18){
        n=1;
        themeToggle();
    }
    else{
        n=0;
        themeToggle();
    }
}
setTimeout(themeautoset,0.01);
function themeToggle() {
    if(n==0){
        themeColor='white';
        color='black';
        theme='url("./images/darkmode.svg")';
        n=1;
        backimage = 'url("./images/Zig-Zag.svg")';
        cardcolors.bodyColor='white';
    }
    else{
        themeColor='black';
        color='white';
        backimage='url("./images/Wavey-Fingerprint.svg")';
        theme='url("./images/lightmode.svg")';
        n--;
        cardcolors.bodyColor='#212121';
    }
    //document.body.style.backgroundColor=themeColor;
    document.getElementById('main').style.backgroundColor=themeColor;
    document.getElementById('main').style.backgroundImage=backimage;
    document.getElementById('main').style.color=color;
    document.getElementById('theme').style.backgroundImage=theme;
    cardcolorToggle();
    
}
showoff = () => document.getElementById('alert').style.display="none";//Alert trigger function.
setTimeout(showoff, 5000);
function cardcolorToggle(){
    document.getElementById('card').style.backgroundColor=cardcolors.bodyColor;
}