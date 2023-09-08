/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19",profession: "admin"},
];
function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  // const developers = arr.filter((item)=>item.profession=="developer");
  // developers.map(developer=>console.log(developer));     // first way of doing this

  arr.map((item)=>{                                      // second way
    if(item.profession=="developer")
    {
      console.log(item); 
    }  
  }); 
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item)=>{
    if(item.profession=="developer")
    {
      console.log(item);
    }
  })
}
// 'map' transform each  element of an array and returns a new array. 'foreach' executes a function on each array element
// without returning a new array
function addData() {
  //Write your code here, just console.log
  const obj = {id:4,name:"shaan",age:23,profession:"intern"};
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const updatedemployee = arr.filter((item)=>item.profession!="admin");
  arr=updatedemployee;
  console.log(updatedemployee);

} 

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [{id:6,name:"Ayush",age:23,profession:"full stack dev"},
  {id:7,name:"Chirag",age:22,profession:"system engineer"},
  {id:8,name:"shaket",age:21,profession:"programer anyalst"},
  {id:9,name:"Nikhil",age:23,profession:"ceo"}];
  const concatenateArray = arr.concat(newArr);
  arr = concatenateArray;
  console.log(arr);  
}
