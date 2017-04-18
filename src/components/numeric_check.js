export default function (inputValue) {
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