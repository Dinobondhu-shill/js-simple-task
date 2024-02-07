 // create a function is named checkName(), it takes input as string ,it can be capital or small letter .
 function checkName(name) {
   // return invalid its type either than string.
   if (typeof name !== "string") {
     return "invalid";
   }

   const lastLetter = name[name.length - 1].toLowerCase();
   // its checks each given input's last letter , if this letter is "a, y, i, e, o, u, w" one of this, the function will return "Good Name" otherwise it will return "Bad Name"

   if ("ayieouw".includes(lastLetter)) {
     return "Good Name"
   } else {
     return "Bad name"
   }
 }
