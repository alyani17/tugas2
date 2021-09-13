const foods = ["sup","pizza","pasta"];

if (Array.isArray(foods)){
    console.log(`${foods} is array`);
}
for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    console.log(food);

}

foods.forEach(food => console.log(food));

function areArrayEqual(array1,array2){
    if(!Array.isArray(array1) || !Array.isArray(array2)){ 
    return false;
}else if (array1 === array2){ 
return true;
}else if (array1.length !== array2.length){
    return false;
}else{
    for (let i = 0; i < array1.length; i++) {
        if(array1[i] !== array2[i])
        return false;
    }
    }
}
console.log(areArrayEqual(fruitNamesA,fruitNamesB));