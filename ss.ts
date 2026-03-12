console.long("== function perameter and return type ==");
function add(a,b){
    return a+b;

}console.log("Addition:",add(10,20));
function getFullName(firstname,lastname){
    return firstname+" "+lastname;
}console.log("Full Name:",getFullName("Anji","Duda"));
function isEligilible(age){
    return age>=18;
}console.log("Is Eligilible:",isEligilible(20));
function display Message(message){
    console.log("Message:",message);
}console.log("== Function Parameter and Return Type ==");

function add(a, b) {
    return a + b;
}
console.log("Addition:", add(10, 20));

function getFullName(firstname, lastname) {
    return firstname + " " + lastname;
}
console.log("Full Name:", getFullName("Anji", "Duda"));

function isEligible(age) {
    return age >= 18;
}
console.log("Is Eligible:", isEligible(20));

function displayMessage(message) {
    console.log("Message:", message);
}
displayMessage("Welcome to TypeScript!");

function greetUser(name) {
    return name ? "Hello, " + name + "!" : "Hello, Guest!";
}
console.log(greetUser("student"));
console.log(greetUser());

displayMessage("Welcome to TypeScript!");
function greetUser(name){
    return name ? "Hello, "+name+"!" : "Hello, Guest!";
}console.log(greetUser("student"));
console.log(greetUser());
