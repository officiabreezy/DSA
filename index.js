// const studentDetails= ["alice", "bob", "charlie", "david", "eve"];
// //function that takes two parameters: Allstudents and studentName

// const findStudent= (Allstudents, studentName) => {
// for (let i=0; i<Allstudents.length; i++) {
//     if (Allstudents[i] === studentName) {
//         console.log(`found ${studentName}`) // Return the index if found
//     } 
// }
// }

// findStudent(studentDetails, "charlie"); 

// const groceryList = ["milk", "bread", "eggs", "butter", "cheese"];
//0(n)

// const findItem = (itemName) => {
//     for (let i = 0; i < groceryList.length; i++) {
//         if (groceryList[i] === itemName) {
//             console.log(`Found ${itemName}`);
//         }
//     }
// }
// findItem("eggs");

// for (let j = 0; j < groceryList.length; j++) {
//     if (groceryList[j] === "bread") {
//         console.log(`Found ${itemName}`);
//     }
// }
// findItem("itemName");

// numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //o(1)
// const getElement = (arr, index) => arr[index];

// console.log(getElement(numberArray, 0)); // Output: 5

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


// const items = [1, 2, 3, 4, 5];

// items.shift(); // Removes the first element (1)
// console.log(items); // Output: [2, 3, 4, 5]