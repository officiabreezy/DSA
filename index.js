const studentDetails= ["alice", "bob", "charlie", "david", "eve"];
//function that takes two parameters: Allstudents and studentName

const findStudent= (Allstudents, studentName) => {
for (let i=0; i<Allstudents.length; i++) {
    if (Allstudents[i] === studentName) {
        console.log(`found ${studentName}`) // Return the index if found
    } 
}
}

findStudent(studentDetails, "charlie"); 

const groceryList = ["milk", "bread", "eggs", "butter", "cheese"];
0(n)

const findItem = (itemName) => {
    for (let i = 0; i < groceryList.length; i++) {
        if (groceryList[i] === itemName) {
            console.log(`Found ${itemName}`);
        }
    }
}
findItem("eggs");

for (let j = 0; j < groceryList.length; j++) {
    if (groceryList[j] === "bread") {
        console.log(`Found ${itemName}`);
    }
}
findItem("itemName");

numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//o(1)
const getElement = (arr, index) => arr[index];

console.log(getElement(numberArray, 0)); // Output: 5

function findpair(arr) {
// o(n^2)
    for (let i=0;  i <arr.length; i++) 
    for (let j=i+1; j<arr.length; j++) {
   console.log(arr[i], arr[j]);
    }
}
findpair([1,2,3,4])


//o(n log n)

class MyArray{
    constructor(){
        this.length= 0;
        this.data={};
    }

push (item){
    this.data[this.length]=item;
    this.length++;
    return this.length;
    // console.log("......", this.data[this.length]);
    }

get(index){
    return this.data[index];
}


pop(){ 
    const lastItem=this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
};

shift(){
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
}
delete this.data[this.length - 1];
this.length--;
return firstItem;
}
deletebyindex=(index)=>{
    const item=this.data[index];

    for(let i=index; i<this.length-1; i++){
        this.data[i]=this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
    return item;
}
}
const newArray= new MyArray();
newArray.push("apple");
newArray.push("banana");
newArray.push("cherry");
// newArray.pop();
// newArray.shift();

// console.log(newArray.pop()); 
// console.log(newArray);
// console.log(newArray.shift());
// console.log(newArray);
console.log(newArray.deletebyindex(1));
console.log(newArray);


const items = [1, 2, 3, 4, 5];

items.shift(); // Removes the first element (1)
console.log(items); // Output: [2, 3, 4, 5]


const string = "hello";
const arr = string.split('');
reverse(arr);
function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right){
        //swap
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }        
}
console.log(arr);
console.log(arr.join(''));

//reverse string
const reverseString = (str) => {
 return str.split('').reverse().join('');
}
console.log(reverseString("isaac"));

//palindrome
const palindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(palindrome("racecar"));

//integer reversal
const int = (num) => {
    const reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num);
}
console.log(int(-12345));

//sentence capitalization
const text = (str) => {
    // return str.toUpperCase()
    return str.toLowerCase().split('').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
console.log(text("hello world"));


//fizzBuzz
const fizzbuzz = (num) => {
    for (let i = 1; i <= num; i++) 
     if ((i % 3 === 0) && (i % 5 === 0))
        console.log("fizzbuzz");   
    else if ((i % 3 === 0)){
        console.log("fizz");
    }
    else if ((i % 5 === 0)) {
        console.log("buzz");
    }  
    else {
        console.log(i);
    }  
}   
fizzbuzz(15)

//MaxProfit
const maxProfit = (prices) => {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        
        minPrice = Math.min(minPrice, currentPrice);
        // console.log('minPrice:', minPrice);

        const potentialProfit = currentPrice - minPrice;
        // console.log('potentialProfit:', potentialProfit);

        maxProfit = Math.max(maxProfit, potentialProfit);
        console.log(maxProfit)
    }
    return maxProfit;
}
const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log('maximun profit:', profit);