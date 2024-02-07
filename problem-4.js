function password(obj){
  const userName = obj.name;
  const birthYear = obj.birthYear;
  const siteName = obj.siteName;
  let passwordStructure = siteName + "#" + userName + "@" + birthYear;
  // Validate required Property and Information
  if(obj.name === undefined|| obj.birthYear === undefined || obj.siteName === undefined){
    return "Missing required Property";
  }
  else if(birthYear.toString().length !== 4){
    return "Your Birth year is incorrect";
  }
  return passwordStructure[0].toUpperCase() + passwordStructure.slice(1);

}