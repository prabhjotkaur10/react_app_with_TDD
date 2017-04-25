export function checkIfNumeric(inputValue) {
  if(inputValue && inputValue.length == 10){
    const regExp = new RegExp("^[0-9]");
    if(regExp.test(inputValue) == true){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

export function checkIfAlphaNumeric(inputValue) {
  if(inputValue && inputValue.length == 5){
    const regExp = new RegExp("^[a-zA-Z0-9]*$");
    if(regExp.test(inputValue) == true){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

export function maskPhoneNumber(inputValue) {
  let maskedNumber;
  if(inputValue && inputValue.length == 10){
    maskedNumber = inputValue.toString().split('');
    maskedNumber.splice(2,6,"******");
    maskedNumber = maskedNumber.join('');
    return(maskedNumber);
  }else{
    return false;
  }
}

export function matchPasswords (password, confirm_password) {
  if(password && confirm_password){
    if(password === confirm_password){
      return true;
    }
  }else{
    return false;
  }
}