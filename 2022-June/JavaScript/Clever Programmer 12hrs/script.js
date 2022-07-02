function findMax (array) {
    let big=array[0];
    for (const a of array){
      if(a>big){
        big=a
      }
    }
    return {big}
  }
  console.log(findMax([1,2,3,4,5,6]))


//   Guard Clause
// -7.15.00