// FIVE TYPE OF LOOPS IN JAVA SACRIPT
// simple for loop
for(let i = 0; i<10; i++){
    console.log(i+1);
}
let obj={
    name:"mughal",
    age:19
}
for (const key in obj) {
        console.log(key);
}
//for of loop
for (const c of "object") {
    console.log(c)
}
//while loop
let j=0;
while (j<10) {
    console.log(j+1)
  j++  
}
// do while loop
let k=9;
do {
    console.log(k+1)
    k++
} while (k<10);