// Task 1: Create a Full Address
var houseNo = prompt("Enter Your House No")
var street = prompt ("Enter Your Street Name & Number")
var city = prompt ("Enter Your City") 
var country = prompt ("Enter Your Country")
console.log("Your Full Address: " + houseNo + ", " + street + ", " + city + ", " + country);
 
// Task 2: Make a Custom Username
var userName = prompt("Enter Your Name")
var FavoriteNo = prompt("Enter Your Favorite Number ")
console.log("Your New User ID: " + userName + FavoriteNo);

// Task 3: Email Generator
var FirstName = prompt("Enter Your First Name")
var LastName = prompt("Enter Your Last Name")
console.log("Your New email Address: " + FirstName + "." + LastName + "@gmail.com")

// Task 4: Combine Favorite Things
var color = prompt("Enter Your Favorite Color")
var animal = prompt("Enter Your Favorite Animal")
var food = prompt("Enter Your Favourite Food")
console.log("Your Favorite Things are: " + color + ", " + animal + " and " + food);

// Task 5: Quote with Author
let quote = prompt("Enter a quote:");
let author = prompt("Enter the author's name:");
alert(`"${quote}" - ${author}`);
console.log(`"${quote}" - ${author}`);
