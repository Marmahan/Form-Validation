var fname=document.getElementById("name");
var myemail=document.getElementById("myemail");

fname.addEventListener("focus", namefocus, true);
fname.addEventListener("blur", nameblur, true);
fname.addEventListener("keyup", namecheck, true);

myemail.addEventListener("focus", emailfocus, true);
myemail.addEventListener("blur", emailblur, true);
myemail.addEventListener("keyup", emailcheck, true);

function namefocus() {
    document.querySelector(".hints").style.display = "inline";
}

function nameblur() {
    document.querySelector(".hints").style.display = "none";  
}
//name check
function namecheck() {
    console.log(this.length);
    if(this.value.length>2){
        document.querySelector(".hints").style.color = "#1F8708";
    }
    else{
        document.querySelector(".hints").style.color = "#CC1616";
    }

}


function emailfocus() {
    document.querySelector(".emailhints").style.display = "inline";
}

function emailblur() {
    document.querySelector(".emailhints").style.display = "none";  
}

//check for email
function emailcheck(){
    var x = this.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        document.querySelector(".emailhints").style.color =  "#CC1616";
    }
    else{
        document.querySelector(".emailhints").style.color = "#1F8708";
    }
}

