
// JavaScript code in order to check string palindrome...
 
let checkPalindrome = (stringg) => {
    return stringg === stringg.split("").reverse().join("");
};
 
console.log("Is Palindrome? : " + checkPalindrome("noon"));
console.log("Is Palindrome?: " + checkPalindrome("apple"));
