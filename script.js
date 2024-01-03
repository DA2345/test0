document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos/2';
  let contentContiner= document.getElementById("content-contianer")
  
  fetch(apiUrl)
  .then((res)=>{
    if (!res.ok)
      throw new Error("Cannot reach the Api!")
    
    return res.json()
  })
  .then ((data)=>{
    console.log(data)
    contentContiner.textContent=`Data is: ${JSON.stringify(data)}`
  })
  .catch(error=>{
      console.error(error.messege)
  })
}


