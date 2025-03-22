
function remplis(){
    
    
    let name = document.getElementById('obl');
    let age = document.getElementById('age');
    let password = document.getElementById('pass');
    let confirm = document.getElementById('conf');


let errorName = document.getElementById('errorname');
let errorAge = document.getElementById('errage');
let errorPass = document.getElementById('errpass');
let errorConf = document.getElementById('errorconf');
let hasError = false;

    if(name.value.trim()==""){
        errorName.innerHTML= "*Nom obligatoire";
        errorName.style.color = "red";
        hasError = true;
    } else {
        errorName.innerHTML= "";
    }

    
    if( age.value.trim() === "" || isNaN(age.value) || age.value < 0){
        errorAge.innerHTML= "enter your real age!!";
        errorAge.style.color = "red";
        hasError = true;
    } else {
        errorAge.innerHTML = ""; 
    }
    

    if(password.value.trim()===""){
        errorPass.innerHTML="Mot de passe Obligatoire";
         errorConf.innerHTML="";
         errorPass.style.color = "red";
         hasError=true;
    } else if(password.value.length<6){
        errorPass.innerHTML="too short =p";
        errorConf.style.color = "red";
        errorConf.innerHTML="";
        hasError=true;
    }

    if( confirm.value.trim() === "") {
        errorConf.innerHTML="you forgot to confirm your password";
        errorConf.style.color = "red";
        hasError=true;
    }
    if(  confirm.value.trim() != password.value.trim() && !(confirm.value.trim()==="") ){
        errorConf.innerHTML="not matching with given password, did you forget it already?";
       
        hasError=true;
    }
    return !hasError;
}
