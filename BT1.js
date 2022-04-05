function distance (kc)
{
    if (kc <= 100)
        return 100 - kc;
    return kc - 100;
}

var a = 50;
var b = 120;

console.log("Cho 2 so nguyen khac nhau: ", a, ",", b);
var kc1 = distance(a);
var kc2 = distance(b);
if (kc1 < kc2)
{
    console.log("So ", a," gan nhat voi 100.");
}
else
{
    console.log("So ", b," gan nhat voi 100.");
}
