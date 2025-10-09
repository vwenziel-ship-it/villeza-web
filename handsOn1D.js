function CheckRemarks(){
  let CheckRemark = document. getElementById("remarks").value;
 let result = document. getElementById("remarks").value;

 if (CheckRemark >= 0 && CheckRemark <= 74) {
console.log("wenziel villeza your grade is D. status FAILED");
result.innerHTML = "wenziel villeza your grade is D. status FAILED"
result.style.color="red"
} else if (CheckRemark >= 0 && CheckRemark <= 101) {
console.log("Please enter a valid grade betwee 0 and 100");

}


}