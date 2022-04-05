function check (so)
{
    if (40<=so && so<=60)
    {
        console.log(so, " nam trong pham vi 40..60.");
    }
    else if (70<=so && so<=100)
    {
        console.log(so, " nam trong pham vi 70..100.");
    }
    else
    {
        console.log(so, " khong nam trong pham vi 40..60 hay 70..100.")
    }
}

var a = 50;
var b = 120;

check(a);
check(b);
