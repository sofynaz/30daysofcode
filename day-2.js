
// #Day 2: 
// Maximum in array ✅
let A = [0,1,2,3,4,5];
let B = [5,4,3,2,1,0] ;
// maximum value in array



const maximun= (a)=>{
    let max= 0;
    for(let i=0; i <=a.length -1; i++){
        if(a[i]>=max){
            max = a[i];

        }
    }
return max;
}
console.log(maximun(A));
console.log(maximun(B));

//minimum value in array
let C = [0,1,2,3,4,5];
let D = [5,4,3,2,1,0] ;

const minimum = (a)=>{
    let min = 0;
    for(let i=0; i <=a.length -1; i++){
   if(a[i]<=min){
    min = a[i]
   }
    }
    return min;
}
console.log(minimum(C));
console.log(minimum(D));

// Find key in array
Testcases:
k = 4
let E = [1,2,5,4,0]
k = 33
let F = [11,22,33,44]

const testcase = (a,k)=>{
    if(A.includes(k)){
        console.log(`${k} is present in [${a}]`);
    }
    else{
        console.log(`${k} is not present in [${a}]`);
    }
}

testcase(E,4);
testcase(F,33);