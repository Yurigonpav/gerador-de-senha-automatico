function generatePassword() {
    var length = document.getElementById("length").value;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    document.getElementById("password").textContent = password;
  }
  var includeSpecialChars = true;

  function toggleSpecialChars() {
    includeSpecialChars = !includeSpecialChars;
    updateSpecialCharsIndicator();
  }
  
  function updateSpecialCharsIndicator() {
    var indicator = document.getElementById("specialCharsIndicator");
    indicator.textContent = includeSpecialChars ? "Caracteres Especiais Ativados" : "Caracteres Especiais Desativados";
  }
  
  function generatePassword() {
    var length = document.getElementById("length").value;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    if (includeSpecialChars) {
      charset += "!@#$%&*?";
    }
  
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    document.getElementById("password").textContent = password;
  }
  var darkMode = false;

function toggleDarkMode() {
  darkMode = !darkMode;
  updateDarkMode();
}

function updateDarkMode() {
  var body = document.body;
  var footer = document.querySelector('.footer');
  var container = document.querySelector('.container');
  
  if (darkMode) {
    body.style.backgroundColor = '#2d2d2d';
    body.style.color = '#fff';
    footer.style.backgroundColor = '#1C1C1C';
  } else {
    body.style.backgroundColor = '#fff';
    body.style.color = '#000';
    footer.style.backgroundColor = '#f1f1f1';
  }
  updateSpecialCharsIndicator();
}


updateDarkMode();
