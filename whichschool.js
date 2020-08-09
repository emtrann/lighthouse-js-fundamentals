const whichSchool  = function (age) { // declring function whichSchool
  if (age < 13) { // if age is under 13, go to elementary school
    return "Elementary School"; 
  } else if (age >= 13 && age <= 18) { // if age is 13-18, go to secondary school
    return "Secondary School";
  } else { // if any other age, go to lighthouse labs
    return "Lighthouse Labs";
  }
}

console.log(whichSchool(25));
console.log(whichSchool(13));
console.log(whichSchool(18));
console.log(whichSchool(10));