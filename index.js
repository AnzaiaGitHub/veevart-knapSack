/*
Developed by Julian Pedroza Garcia (April 3th, 2023)
for Veevart test-19
*/
//Test elements
//element = [weight,value];
const testElements = [[2, 3], [3, 4], [4, 5], [5, 6]];
const testElements1 = [[2, 3], [3, 4], [4, 5], [5, 6],[6,7]];
const testCapacity = 10;

//findCombination function look between the permutations the most valuable items combination without overpassing the weight capacity and returns the combination and the tota value of the combination
function findCombination(permutations,capacity){
  let finalCombination=[];
  let maxValue=0;
  permutations.forEach(permutation=>{
    let currWeight=0;
    let currValue=0;
    let currCombination=[];
    for(let item of permutation){
      if((currWeight+item[0])<=capacity){
        currCombination.push(item);
        currWeight+=item[0];
        currValue+=item[1];
      }
    }
    if(currValue>maxValue){
      finalCombination=[...currCombination];
      maxValue=currValue;
    }
  });
  return [finalCombination,maxValue];
}
//Bonus #2 filter the elements nonCarried and returns the items and its total value
function getNonCarriedElements(carried,elements){
  let nonCarried=[...elements];
  carried.forEach(item => {
    const index=nonCarried.indexOf(item);
    if(index!=-1){
      nonCarried.splice(index,1);
    }
  });
  let val=0;
  nonCarried.forEach(nonCar =>{
    val+=nonCar[1];
  });
  return [nonCarried,val];
}

//output must have only once of every choosen element and must have the more valuable items within the given weight capacity of tha bag;
function solution(elements,capacity){
  let permutations=[];
  //try every possible combination without repeating object
  const permute = (elements,acc=[])=>{
    if(elements.length===0){
      permutations.push(acc);
    }else{
      for(let i=0;i<elements.length;i++){
        let currPerm = elements.slice();
        let nextPerm = currPerm.splice(i,1);
        permute(currPerm.slice(),acc.concat(nextPerm));
      }
    }
  };
  
  permute(elements);
  //check which of the given permutations is the most valuable and valid weight items combination
  const [comb,val] = findCombination(permutations,capacity);
  console.log("Carried elements");
  console.log(comb);
  console.log("Carried value");
  console.log(val);
  
  //bonus #2
  const [nonCarriedElements,nonCarVal]=getNonCarriedElements(comb,elements);
  console.log("Non carried elements");
  console.log(nonCarriedElements);
  console.log("Non carried value");
  console.log(nonCarVal);
}

solution(testElements,testCapacity);