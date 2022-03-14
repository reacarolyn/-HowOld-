
// 11. howOld()
const howOld = (age, year) => {
  let theCurrentYear = 2020;
  let yearDifference = year - theCurrentYear;
  let newAge = age + yearDifference;
  let ageDifference = yearDifference - age;

  if (newAge > age) {  
    return (`You will be ${newAge} in the year ${year}.`);
  }

  else if (newAge < age) {
    return (`The year ${year} was ${ageDifference} years before you were born.`);

  } else return (`'You were ${newAge}  in the year ${year}.`)
    

}
 
howOld (40, 2050)
// Once your function is written, write function calls to test your code!