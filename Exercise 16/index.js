let a = 1
let b = 2
function sumOfNumbers()
{
c = (a + b)
return c
}
/* FAILURE CASES
if a or b is not a number
*/

function testFunction(){
    if(isFinite(sumOfNumbers()))
    {
        return "It works in this case"
    } else 
    {
        return "You have entered a string or undefined instead of a number"
    }
}
console.log(testFunction())


