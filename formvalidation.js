var validForm = false;
var userData = [];
function validate() {
   
    var f_name = document.getElementById("fname").value;
    var l_name = document.getElementById("lname").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById('dates').value;
    var gender=document.getElementById("male").value;
       var gender=document.getElementById("female").value;
       var state=document.getElementById("states").value;
   
       

    var invalidFName = inavlidLastName = invalidContact  = invalidDate =  invalidEmail =
     invalidGender  =invalidState = "";

    if(f_name === "" || l_name === "" || contact === "" || date === "" || email === ""
    ||gender ==="" ||state ===""|| !validForm){ 
        if(f_name == ""){
            invalidFName =  "First Name is required.";
        }
        if(l_name == ""){
            inavlidLastName =  "Last Name is required.";
        }
        if(contact == ""){
            invalidContact =  "Contact number is required.";
        }else{
            if((contact.length < 10 || contact.length > 10)){
                invalidContact = "Contact number is invalid.";
            }
        }
        if(date === "")
        {
            invalidDate = "Date is required.";
        }
        if (email == ""){
            invalidEmail= "Email is required.";
        }
        if(email !== "" && !validForm){
            invalidEmail = "Email is not valid";
        }

        if(gender !== "" ){
            invalidGender = "Gender is required";
        }
        
        if(document.getElementById('male').checked) {
//Male radio button is checked
}else if(document.getElementById('Female').checked) {
//Female radio button is checked
}

        if(state !== "" ){
            invalidState = "State is required";
        }

        

        



        if(invalidFName !== "" || inavlidLastName !== "" || invalidContact !== "" || invalidDate !== ""
         || invalidEmail !=="" ||invalidGender!==""|| invalidState!=="")
        {
            alert(invalidFName + "   |   " + inavlidLastName + "  |   " + invalidContact + "   |   " + 
            invalidDate + "   |  "  + invalidEmail + "  |"   + invalidGender +"   |  " + invalidState );
        }
    }

    else{
        if(validForm){
            alert("Form is submitted");
        }
    }

}



function restrictAlphabets(e){
var x = e.which || e.keycode;
if((x>=48 && x<=57))
   return true;
else
   return false;
}

function validateEmail(emailField){

var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(reg.test(emailField.value) == false)
{
alert('invalid email address');
validForm = false;

}else{
validForm = true;
}
}



