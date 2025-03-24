function remplis() {
    let name = document.getElementById('obl');
    let age = document.getElementById('age');
    let password = document.getElementById('pass');
    let confirm = document.getElementById('conf');
    let errorElements = {
      name: document.getElementById('errorname'),
      age: document.getElementById('errage'),
      pass: document.getElementById('errpass'),
      conf: document.getElementById('errorconf')
    };
    let hasError = false;
    if (name.value.trim() === "") {
      errorElements.name.innerHTML = "*Nom obligatoire";
    } 
    else {
      errorElements.name.innerHTML = "";
    }
    if (age.value.trim() === "" || isNaN(age.value) || age.value < 0) {
      errorElements.age.innerHTML = "Enter your real age!!";
    } 
    else {
      errorElements.age.innerHTML = "";
    }
    if (password.value.trim() === "") {
      errorElements.pass.innerHTML = "Mot de passe Obligatoire";
      errorElements.conf.innerHTML = "";
    } 
    else if (password.value.length < 6) {
      errorElements.pass.innerHTML = "Too short =p";
      errorElements.conf.innerHTML = "";
    } 
    else {
      errorElements.pass.innerHTML = "";
    }
    if (confirm.value.trim() === "") {
      errorElements.conf.innerHTML = "You forgot to confirm your password";
      hasError = true;
    } 
    else if (confirm.value.trim() !== password.value.trim()) {
      errorElements.conf.innerHTML = "Not matching with given password, did you forget it already?";
    } 
    else {
      errorElements.conf.innerHTML = "";
    }
    Object.values(errorElements).forEach(error => {
      if (error.innerHTML !== "") {
        error.style.color = "red";
        hasError=true;
      } else {
        error.style.color = "";
      }
    });
    return !hasError;
  }