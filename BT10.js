var a = 10;
var b = 20;
var c = 30;

function check(a, b, c)
{
    if(a + b == c)
        return true;
    else if(a - b == c)
        return true;
    else if(a * b == c)
        return true;
    else if(a / b == c)
        return true;
    else
        return false;
}
console.log(check(a, b, c));
