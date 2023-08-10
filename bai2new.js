let obtest = {
    carName: 'Audi',
    carPrice: '2 million',
}
let checkEmpty = (obj) => {
    const keys = Object.keys(obj);
    console.log("các đối tượng trong obj", keys);
    console.log(typeof keys, keys.length)
    if(keys.length == 0 ){
        console.log("các đối tượng trong đối tượng là false");
    }
    else{
        console.log("các đối tượng trong đối tượng là true");
    }
}
console.log(checkEmpty(obtest))
;