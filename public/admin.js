
// Your Code Here
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