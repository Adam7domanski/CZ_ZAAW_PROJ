
var miniUserNameLength = 5;
var minPassLength = 8;

//password strength validator
password.addEventListener('input', function()
{

      var password = document.getElementById('password');
      var meter = document.getElementById('password-strength-meter');
      var text = document.getElementById('password-strength-text');
      var passwordVal = password.value;
      var result = 0;
      var strength = {
            0: "Worst",
            1: "Bad",
            2: "Weak",
            3: "Good",
            4: "Strong",
            5: "Very Strong"
      }

      //if cintains lowercase
      if(/[a-z]/.test(passwordVal)){
        result+=1;
      }
      //if contains uppercase
      if(/[A-Z]/.test(passwordVal)){
        result+=1;
      }
      //if conteins special characters

      if(/[.!@#$%^&*()_+-]/.test(passwordVal)){
        result+=1;
      }
      //if contains number
      if(/[\d]/.test(passwordVal)){
        result+=1;
      }
      //if is longer than 8 characters
      if(passwordVal.length >=8){
        result+=1;
      }

      if(result>5){
        result=5;
      }

      // Update the password strength meter
      meter.value = result;

      // Update the text indicator
      if (passwordVal !== "") {
        text.innerHTML = "Password Strength: " + strength[result];
      } else {
        text.innerHTML = "";
      }
    });
//password match validator
function ValidatePassMatch(field_id,password,password2)
{

    var passVal = document.getElementById(password).value.trim();
    var pass2Val = document.getElementById(password2).value.trim();
    var field_div = document.getElementById(field_id).parentNode.id;

    if(passVal !== pass2Val)
    {
        removeWarning(field_id,field_div);
        displayWarning(field_id,field_div,"Passwords does not match")
    }else{
        removeWarning(field_id,field_div);
    }
}
//basic field values validator
function Validate(field_id,field_nr)
{
    var field_div = document.getElementById(field_id).parentNode.id;
    var field_value = document.getElementById(field_id).value.trim();

        switch(field_nr){

            case 1 :
            {
                if(field_value ==""|| field_value == null)
                {
                    removeWarning(field_id,field_div);
                    displayWarning(field_id,field_div,"You can not leave this field empty")

                }
                else if(field_value.length < miniUserNameLength)
                {
                    removeWarning(field_id,field_div);
                    displayWarning(field_id,field_div,("User name should be longer than "+ miniUserNameLength + " characters"));
                }
                else
                {
                    removeWarning(field_id,field_div);
                    document.getElementById(field_id).className += " success_brd";
                }
            }
            break;

            case 2 :
            {
                if(field_value ==""|| field_value == null)
                {
                    removeWarning(field_id,field_div);
                    displayWarning(field_id,field_div,"You can not leave this field empty");
                }
                else if(field_value.length < minPassLength)
                {
                    removeWarning(field_id,field_div);
                    displayWarning(field_id,field_div,("Password has to be longer than "+ minPassLength + " characters"));
                }
                else
                    removeWarning(field_id,field_div);
                    document.getElementById(field_id).className += " success_brd";
             }
            break;

            case 3 :
                if(field_value ==""|| field_value == null)
                {
                    removeWarning(field_id,field_div);
                    displayWarning(field_id,field_div,"You can not leave this field empty");
                }
                else
                {
                    removeWarning(field_id,field_div);
                    document.getElementById(field_id).className += " success_brd";
                }
            break;

        }
}
//function creates warning
function displayWarning(field_id, parent_div, message)
{
    var error_element_count = document.getElementById(parent_div)
    .querySelectorAll(".warning_msg").length;
    if( error_element_count == 0)
    {
        var para = document.createElement("p");
        para.setAttribute("class", "warning_msg");
        var error_msg = document.createTextNode(message);
        para.appendChild(error_msg);
        document.getElementById(parent_div).appendChild(para);
        document.getElementById(field_id).className += " warning_brd";
    }
}
//function removes warning
function removeWarning(field_id, parent_div)
{
    var error_element_count = document.getElementById(parent_div).querySelectorAll(".warning_msg");

    if(error_element_count.length>0)
    {
        error_element_count[0].parentNode.removeChild(error_element_count[0]);
        document.getElementById(field_id).classList.remove("warning_msg");
    }

}