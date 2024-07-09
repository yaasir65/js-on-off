// pr1

// let num1 =Number(prompt ("enter a number1"))
//  let num2 = Number (prompt ("enter a number2"))
//  let num3 = Number (prompt ("enter a number3"))
//  let sum =(num1 + num2 +num3 )
//  document.write(sum)


// part-2

// let num1=Number(prompt("Enter you number1"))
// let num2=Number(prompt("Enter you number2"))
// let num3=Number(prompt("Enter you number3"))
// let num4=Number(prompt("Enter you number4"))


// let maxnumer = Math.max(num1, num2, num3, num4);
// document.write("big number ", maxnumer)


// pr3

// const correctEmail = "yaasir@gmail.com" 
// const correctPassword = "123";

// let email = prompt ("enter you email"); 
// let password = prompt ("enter you password ");



// if ( email === correctEmail && password === correctPassword) {
//     document.write("Welcome maxamed Axmed diiriye !");
// }
// else{
//     document.write("invalid email or passwor");
//  }



 
// let deyName = parseInt(prompt ("inter a nuber"))

// switch (deyName){
//     case 1:
//         document.write("todey is suturday")

//         break

//     case 2: 
//     document.write("todey is sunday")

//     break

//     case 3:
//         document.write("todey is monday")
//         break

//         default:
//             document.write("unkown day")
// }


// while

// let num= 20
// let name = prompt("Enter you name ")

// while(num >=1){
//     document.write(num,  "<br>")
//     num-- 
// }

// do while

// let num1 = 3

// do {
//     num1++
//     document.write(num1,"<br>")

// }

// while (num1 <=5)


// for while

// for( let num = 1 ;  num <=10 ; num++){
//     document.write(num, "<br>")
// }
    


// function myName () {
//     document.write("my name is geedi <br> " )
// }

// function addittion () {
//     document.write( 2+4)
// }

//  myName()

//  addittion()

// function myName () {
//     let num1 = 10
//     let num2 = 20
//     document.write("the is result is ", num1 + num2, "<br>")
// }
// function subtract() {
//     let num1 = 20
//     let num2 = 10
//     let result = num1 -num2
//     document.write("the is result is ", result)
// }


// myName()
// subtract()

// function checksemailandpesswor(){
//     const correctEmail = "yaasir@gmail.com" 
//      const correctPassword = "123";
    
//      let email = prompt ("enter you email"); 
//     let password = prompt ("enter you password ");
    
    
    
//      if ( email === correctEmail && password === correctPassword) {
//          document.write("Welcome!");
//      }
//      else{
//          document.write("invalid email or passwor");
//       }
// } 

// checksemailandpesswor()


// function myName(name,age) {
//  document.write(" Hello ", name, " you are ", age, "<br>")
// }

// myName("Ali ", 20)
// myName("maxamed  ", 30)
// myName("yaasir   ", 30)
// myName("maxamed  ", 30)


// function addittion( num1,num2){

//     document.write( " thes is a resulti ",num1+num2,"<br>")

// }
// addittion( 15,15)
// addittion( 10,10)
// addittion( 25,25)
// addittion( 50,50)

// function myName(age){
//     return age
// }
// document.write(myName (30))

// function addittion(num1,num2){
//     return num1 + num2
// }
// document.write(addittion(10,20))


// let myName = () => {
//     document.write("Hello world")
// }
// myName()


// ,,,



// let friends = ["Ali", "abdi","muna","aadm"]
               

// friends[0] = "maxamed"

// document.write(friends[0])



// let friends =["ibrahi", "ali", "abdi",40]

// let num = 0
 
// while(num < friends.length)[
//     document.write(friends[num],"<br>")
//     num++
// ]


// let friends =["ibrahi", "ali", "abdi",40]


// // join methol 

// let iskudar = friends.join("..")

// document.write(iskudar)


// let friends =["ibrahi", "ali", "abdi",40]

// friends.push ("cali")

// document.write(friends)

// let friends =["ibrahi", "ali", "abdi",40]

// friends.pop()
// document.write(friends)

// let friends =["ibrahi", "ali", "abdi",40]

// friends.shift()

// document.write(friends)


// let friends =["ibrahi", "ali", "abdi",40]

// friends.unshift("yaasir")
// document.write(friends)


// let friends =["ibrahi", "ali", "yaasir", "geedi", "zaynab",40]

// friends.sort()
// document.write(friends)


// let friends =["ibrahi", "ali", "yaasir", "geedi", "zaynab",40]

// friends.reverse()

// document.write(friends)


// let friends =["ibrahi", "ali", "yaasir", "geedi", "zaynab",40]

// friends.splice(1,2,"calasow","ayaan")

// document.write(friends)


// let friends =["ibrahi", "ali", "yaasir", "geedi", "zaynab",40]

// friends.splice(1,2)

// document.write(friends)



// let friends =["ibrahi", "ali", "yaasir", "geedi", "zaynab",40]

// friends.forEach((name)=>{
//     document.write(name, )
// })


// let ages =[5,7,10,13,15,16,17,18,28,30]

// let newage = ages.filter((item) => {
//     return item > 15
// })

// document.write(newage)


// let name = ["ali ","maxamed","geedi"]

// let nowname = name.filter ((intem) => {
//     return intem == "ali"
// })

// document.write(nowname)

// let ages =[5,7,10,13,15,16,17,18,28,30]

// ages




// // dom/ 9 jun /

// let h1Element = document.getElementById("title")

// let buttonElement = document.getElementsByTagName("button")[0]
// let pElemenet = document.getElementsByClassName("sed")[0]
// let form = document.querySelector("form")


// console.log(h1Element)
// console.log(buttonElement)
// console.log(pElemenet)
// console.log(form)


// let title = document.querySelector("#title")
// let  hi = document.querySelector("#hi")

// title.innerHTML = "this is js.."
// title.style.color = "red"
// title.style.backgroundColor = "blue"

// hi.innerHTML =" hi maxamed ahmed "



// let button = document.querySelector("#btn")
// button.addEventListener("click", function(){
//     document.body.style.backgroundColor ="red"
// })



let light = document.querySelector("#light")
let onbtn = document.querySelector("#onbtn")
let offbtn = document.querySelector("#offbtn")

onbtn.addEventListener("click",function(){
    light.style.backgroundColor = "yellow"
    onbtn.style.backgroundColor = "red"
    offbtn.style.backgroundColor = ""
})

offbtn.addEventListener("click",function(){
    light.style.backgroundColor = "white"
       offbtn.style.backgroundColor = "red"
        onbtn.style.backgroundColor = ""
})



    
