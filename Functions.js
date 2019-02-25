
//Program 1 : Print "Hello world" with function

function helloworld()
{
  console.log("Hello world")
}

helloworld()
helloworld()



//Program 2 : Print a/b is bigger


function printaisbigger()
{
  console.log("a is bigger")
}
function printbisbigger()
{
  console.log("b is bigger")
}

var a = parseInt(prompt("Enter number a",0))
var b = parseInt(prompt("Enter number b",0))

if (a>b)
  {
    printaisbigger()
  }
  
else 
 {
  printbisbigger()
 }

//Program 3 - Make the average of the 3 numbers given

function average(x , y , z)
{
  var sum = x + y + z
  console.log (sum/3)
}

var x = parseInt(prompt("Enter number x",0))
var y = parseInt(prompt("Enter number y",0))  
var z = parseInt(prompt("Enter number z",0))

average (x , y , z)


//Program 4 - Add a number positive or negative and print the opposite using the function


function flip (x)
{
  var mul = x * -1
 
  
  return mul
  
}
console.log(flip(96))
  
