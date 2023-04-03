//Test elements
//element = [weight,value];
const testElements = [[2, 3], [3, 4], [4, 5], [5, 6]];
const testCapacity = 10;

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

//output must have only once of every choosen element and must have the more valuable items within the given weight capacity of tha bag;
function solution(elements,capacity){
  let permutations=[];
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
  const [comb,val] = findCombination(permutations,capacity);
  console.log(comb);
  console.log(val);
}

solution(testElements,testCapacity);