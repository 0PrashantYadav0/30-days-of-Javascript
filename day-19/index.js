const text = "JavaScript is a versatile language. javascript can be used for both front-end and back-end development. I love JavaScript!";
const pattern = /javascript/gi;
const matches = text.match(pattern);

if (matches) {
    console.log("Matches found:", matches);
} else {
    console.log("No matches found.");
}


const text2 = "There are 123 apples and 45 bananas. My ZIP code is 98765. Some words are Capitalized.";

const digitsPattern = /\d+/g;
const capitalizedWordsPattern = /\b[A-Z][a-zA-Z]*\b/g;

const digitsMatches = text2.match(digitsPattern);
const capitalizedWordsMatches = text2.match(capitalizedWordsPattern);

console.log("Digits matches:", digitsMatches);
console.log("Capitalized words matches:", capitalizedWordsMatches);


const phoneNumber = "(123) 456-7890";
const phonePattern = /\((\d{3})\) (\d{3})-(\d{4})/;

const phoneMatch = phoneNumber.match(phonePattern);

if (phoneMatch) {
    const [fullMatch, areaCode, centralOfficeCode, lineNumber] = phoneMatch;
    console.log("Full match:", fullMatch);
    console.log("Area Code:", areaCode);
    console.log("Central Office Code:", centralOfficeCode);
    console.log("Line Number:", lineNumber);
} else {
    console.log("No match found.");
}

const email = "username@example.com";
const emailPattern = /(\w+)@(\w+\.\w+)/;

const emailMatch = email.match(emailPattern);

if (emailMatch) {
    const [fullMatch, username, domain] = emailMatch;
    console.log("Full match:", fullMatch);
    console.log("Username:", username);
    console.log("Domain:", domain);
} else {
    console.log("No match found.");
}


const text3 = "Hello world, this is a test.";
const pattern1 = /^\b\w+\b/;

const match = text3.match(pattern1);

if (match) {
    console.log("Match found:", match[0]);
} else {
    console.log("No match found.");
}

const text4 = "This is a test sentence";
const pattern2 = /\b\w+\b$/;

const match1 = text4.match(pattern2);

if (match1) {
    console.log("Match found:", match1[0]);
} else {
    console.log("No match found.");
}

const password = "P@ssw0rd";
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const isValidPassword = passwordPattern.test(password);

if (isValidPassword) {
    console.log("Password is valid.");
} else {
    console.log("Password is invalid.");
}


const url = "https://www.example.com";
const urlPattern = /^(https?:\/\/)?([^\s$.?#].[^\s]*)$/;

const isValidUrl = urlPattern.test(url);

if (isValidUrl) {
    console.log("URL is valid.");
} else {
    console.log("URL is invalid.");
}


