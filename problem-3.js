// create a function named by deleteInvalids(), it takes input as an Array. and it's return an array only with the Numbers of the input array. 
// Only An Array can pass in this function as a parameter.

function deleteInvalids(arr){
  if(!Array.isArray(arr)){
    return "You must give an Array as input"
  }
  let sortedArray = [];
  for(const item of arr){
    if(typeof item === "number" && !isNaN(item)){
      sortedArray.push(item);
    }
  }
  return sortedArray;
}
const sampleArr = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]
console.log(deleteInvalids(sampleArr));