
function login(){
    let email = document.getElementById('email').value;  

console.log(" You Entered the email : " + email);
console.log(" You Entered the password : " + password  );
 
if (email==="vwenziel@gmail.com"){
    console.log(" email is correct");
}else{
    console.log(" email is incorrect.");
     document.getElementById("error-msg").innerText = "Your email is incorrect.";
}   


}