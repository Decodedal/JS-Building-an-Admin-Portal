
// Your Code Here
let dog= document.querySelector("#dog")

 async function updateBook(){ 
let response = await fetch('http://localhost:3001/updateBook',{
    method:"PATCH",
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'id':3,
        'title':'Legends of Arathae'
    })
})

let updateBook = await response.json();
console.log(updateBook)
 }

 updateBook()

 dog.addEventListener('click',()=>{
    console.log("Dallas rules")
 })
let buttons = document.querySelectorAll('.booksSave') 
for (let i =1; i<= buttons.length; i++){
   console.log(buttons[i])
    buttons[i].addEventListener('click',(i,input)=>{
        updateCount(i,input)
    })
}
console.log('hi')
//function to update book count 
async function updateCount(){ 
    let response = await fetch('http://localhost:3001/updateBook',{
        method:"PATCH",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'id':i,
            "quantity": input.value
        })
    })
    
    let updateBook = await response.json();
    console.log(updateBook)
     }

     let shinobi = document.querySelector('#shin')