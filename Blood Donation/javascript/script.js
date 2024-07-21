function isEligible(age, weight){
const minAge = 18;
const minWeight = 50;
if (age >= minAge && weight >= minWeight){
        return true;
}
else{
    return false;
}
}
const Age=parseInt(prompt("Enter Your Age"))
const Weight=parseInt(prompt("Enter Your Weight"))

if (isEligible(Age, Weight)) {
    console.log("You are Eligible to Donate a Blood")
}
else{
    console.log("You are Not Eligible to Donate a Blood")
}