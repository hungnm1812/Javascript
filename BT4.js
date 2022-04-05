var a = 50;
var b = 120;

function tra_ve(number){
    if(50<=number && number<=80)
        return 65;
    return 80;
}

console.log("Cho 2 so nguyen: ", a, ",", b);
var sum = a + b;
var result = tra_ve(sum);
console.log("Ket qua tong tra ve: ", result);
