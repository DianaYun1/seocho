const first = 'Uncle';
const last = 'Bob';
if (first) {
    console.log(first);
}
console.log(last);

let fullName = first ? first + ' ': '';
// 'Uncle' + 'Bob'
// '' + 'Bob'
fullName = fullName+last;
console.log('fullName=', fullName);

console.log('===================');
const x = 2;
if(x===1) {
    console.log('one');
}
else if(x===2) {
    console.log('two');
}
else if(X===3) {
    console.log('three');
} else {
    console.log('etc');
}

switch (x) {
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two')
        break;
    case 3:
        console.log('three')
        break;
    default:
        console.log('etc');
}

outStr = x === 1 ? 'one' : x === 2 ? 'two' : x === 3 ? 'three' : 'etc';
console.log('🚀  outStr:', outStr);

console.log('===========')


i = 0;
let sum = 0;
while(i < 100){
    i = i + 1
    sum = sum + i;
}
console.log("🚀 sum:", sum)



for(let j = 0; j < 5; j=j+1){
    console.log('j=',j);
    }

sum=0;
for(let i = 0; i<100; i=i+1){
    sum=sum + i + 1;
}
    console.log("🚀 sum:", sum)


const arr = [10,20,30,40,50];
for(let i=0; i<arr?.length; i++){
    console.log(`🚀 arr[${i}]:`, arr[i]); 
}

for (const t of arr){
    console.log('🚀 t:', t);
}

const dt = new Date();
console.log('🚀 dt:',dt, dt.toLocaleString());




const num = 123.456;
console.log(num.toFixed(2));
console.log(num, Math.trunc(Number(num.toFixed(2))+9));

const three = 0.1 + 0.2;
console.log(three);
console.log(0.1+0.7);
console.log(0.3+0.2);
const ep = Math.abs(three - 0.3)<Number.EPSILON;
console.log('ep:', ep, Number.EPSILON);
console.log(Math.trunc((0.1+0.2)*10)/10);
console.log(2.5%1);
console.log(2.4%1)


const WEEK_NAMES = '일월화수목금토';
for (const w of WEEK_NAMES) {
  console.log('w:', w);
}



user={id:1, addr: {city:'S',road:'X'}};

const zz = user;
console.log("🚀 ~ zz:", zz);


const yy={...user};
console.log("🚀 ~ yy:", yy);


