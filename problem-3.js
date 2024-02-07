// create a function named by deleteInvalids(), it takes input as an Array. and it's return an array only with the Numbers of the input array. 
// Only An Array can pass in this function as a parameter.

function deleteInvalids(array){
  if(!Array.isArray(array)){
    return "You must give an Array as input"
  }
  let sortedArray = [];
  for(const item of array){
    if(typeof item === "number" && !isNaN(item)){
      sortedArray.push(item);
    }
  }
  return sortedArray;
}