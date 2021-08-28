console.log("hello world");
//var , let ,
// data types - strings, numbers, boolean, nulll, undefined, symbol

const name ='john';
const age=7;
let female=false;
const sexuality=undefined;
const dob=null;

console.log(`my name is ${name } and my age is ${age}`);
// to put the value and the text at the same time you have to put the "`" not "'" and then you have to continue the code

const Strings="helllo bros";
console.log(Strings.toUpperCase() , Strings.substring(0,7) , Strings.toLowerCase() );

const Strings2="hello , bro , how , are, you , doing";
console.log(Strings2.split(' ,'));
//you can split any thing by just putting the split fucntion in action and giving the argument in the split fucntion from where you gonna split it

//Arrays
let colors=['red','pink', 'blue', 'green'];
console.log(colors);
colors[4]="black";
console.log(colors[4]);

//push dotfunction is used to add the item in the array at the last 
colors.push('yellow');

//unshift dot function  is used to add the item in the start of the array like in this i created the colors array and then i addede the light pink as the first item
colors.unshift('light red');

console.log(colors);

console.log(colors.indexOf('yellow'));

//in the object if you have to push the document in some integer or some string then you have to use collen not equal to
 
const person = {
    firstName:'gourav',
    LastName :"bhadrecha",
    age:19,
    address:{
        street:"E-20 ,beta I",
        area:"Greater noida",
        state:"U.P."
    },
    favoriteColors :['red','pink','blue','black','green']
    
};
//console.log(`my name is ${person.firstName} ${person.LastName} and my age is ${person.age} and rn i am living at ${person.address.street , person.address.area , person.address.state} . i like the ${person.favoriteColors[2]} color the  most!!`);
//this thing is called destruction.
const{firstName , LastName , address:{area}}=person;


console.log(firstName , area);

//this thing is called construction
person.email='bhadrechagourav@gmail.com';

console.log(person.email);

//array with in object
const ArrayWithObject = [
    {
        text:1,
        id:1,
        iscompleted: true
    },
    {
        text:2,
        id:2,
        isincompleted: true
    },
    {
        text:3,
        id:3,
        iscompleted:false
    }
];

//this is how the data is send to server
const ArrayWithObjectJSON= JSON.stringify(ArrayWithObject);
console.log(ArrayWithObjectJSON);

//For loops
for(let i=0; i<=10; i++){
    console.log(`For loop number ${i}`);
}

//while loop
let i=0;
while(i<=10)
{
    console.log(`While loop number ${i}`);
    i++;
}

//For loop collabration with array that made with object
for(i=0; i<=ArrayWithObject.length;i++)
{
    console.log(`this is the ${i+1} object from the ArrayWithObject and this are the objects \n ${ArrayWithObject[i]}`);
}

//there is some other types of arrays loop 
//Foreach , map ,filter

let email = {
    email1:'bhadrechgourav@gmail.com', email2:'gouravbhadrecha@gmail.com'
};
ArrayWithObject.push(email);

console.log(ArrayWithObject);

const {email}=ArrayWithObject;
































