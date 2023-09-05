// #Day 1 : 
// Reverse an Array ✅
// A[] = {0,1,2,3,4,5}
// B[] = {5,4,3,2,1,0}
// Reverse an String ✅
// string s = "abc"
// string new = "cba"
// Check two arrays are equal
// Testcases : 
// A[] = {1,2,5,4,0}
// B[] = {1,2,5,4,0}
// Output: 1





// problem-1 : Reverse an array
let A = [0,1,2,3,4,5];
let B = A.reverse();
console.log("New array B =" , B);

// Problem-2: Reverse an string
let str = "abc";
let newstr = str.split('').reverse().join('');
console.log("Reverse newstring=",newstr);

// check two arrays are equal
let A1 = [1,2,5,4,0]
let B1 = [1,2,5,4,0]
const equality = (a,b)=>{
for(let i = 0; i < a.length; i++){
    if(a[i]==b[i]){
        if(i== a.length -1){
            return "Equal";
        }
    }
    else{
        return "Not equal"
    }
}

}
console.log(equality(A1,B1));


