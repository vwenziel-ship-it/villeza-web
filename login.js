// villeza wenziel A 1-D
function signIn(){
    let email = document.getElementById('email').value;  
let password = document.getElementById('password').value; 

console.log(" You Entered the email : " + email);
console.log(" You Entered the password : " + password  );
 
if (email==="vwenziel@gmail.com"){
    console.log(" Your email is correct");

    console.log(" Your email is correct");


if (password==="wenzie123"){
    console.log(" Your password is correct");

}else{
    console.log(" Your password is incorrect.");     
}
}function signIn (){
    //Email:vwenziel@gmail.com// Error Message: Your email is incorrect
    //password:wenzie123//
    let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;
       //let erroEmail = document.getElementId("email errror");
       //let erropassword=document.getElementById("password-error");
 

console.log("You Enter: "+ " " + email);
console.log("You Enter: "+ " " + password);

if(email==="vwenziel@gmaill.com"){
    console.log("Your email is incorrect")
}else{
    console.log("Your email is incorrect!")
    //erroEmail.innerHTML="Your email is incorrect.";

}
if (password==="wenzie123"){
    console.log("Your password is correct "+password)
}else{
console.log("Your password is incorrect!")
//erropassword.innerHTML=" Your password is incorrect!"
 }
 if (login){
    console.log("Your email and password is correct1");
 }else{
    console.log("Your email and password is incorrect")
 }
 }



//1.if email and password is both correct- display a message "Your email and password is correct"
//2.if email is correct but password is incorrect- display a message "Your password is in correct"
//3.if email is incorrect and passwoed is correct- display a message "Your email is incorrect"
//4.and if both email and password is incorrect - display a message "Your email and password is incorrect"
}   