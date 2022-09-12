import { AbstractControl, ValidationErrors } from "@angular/forms"

export const PasswordStrengthValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';

  if (!value) {
    return null
  }
var passwordPattern: string = "";
  let upperCaseCharacters = /[A-Z]+/g
  if (upperCaseCharacters.test(value) === false) {
    passwordPattern += `one upper case, ` ;
  }

  let lowerCaseCharacters = /[a-z]+/g
  if (lowerCaseCharacters.test(value) === false) {
    passwordPattern += `one lower case, ` ;           
  }


  let numberCharacters = /[0-9]+/g
  if (numberCharacters.test(value) === false) {
    passwordPattern += `one number, ` ;     
  }

  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  if (specialCharacters.test(value) === false) {
    passwordPattern += `one special character` ;     
  }

  if(passwordPattern != "" )
  {

   let passwordStrength =  passwordPattern.replace(/,\s*$/, "");
    
    return {passwordStrength} 
  }
  
  return null;
}