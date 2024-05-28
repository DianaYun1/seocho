const arr = [100, 200, 300, 400, 500, 600, 700];
for(const k in arr){
    console.log(k);
};

for (const k in arr){
    console.log(arr[k]);
}

const obj = {name:'lim', addr:'yongsan', level:1, role:9, receive:false};
for(const k in obj){
    console.log(obj[k]);
}

for(const k of Object.values(obj)){
    console.log(k);
}

Object.defineProperty(obj, 'level',{enumerable:false});

//113

function makeObjectFromArray(arr) {}

const objarr1 = makeObjectFromArray([]

)

console.log(objarr1);


