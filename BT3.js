var string = 'JavaScript';
var str = string.substring(1, 4);
var char = 'a';

console.log("Cho chuoi: ", string);
if (str.search(char)==-1)
{
    console.log(char, " khong ton tai o vi tri 2-4 trong chuoi.");
}
else
{
    console.log(char, " co ton tai o vi tri 2-4 trong chuoi.");
}
