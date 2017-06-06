export const apiLogin = (name,password,handleResponse) => {
const d     = new Date()
const month = d.getMonth()+1
const day   = d.getDate()
const year  = d.getFullYear()

fetch(`http://localhost:3000/api/v1/user/users`,{
method:"POST",
headers:{"Content-Type": "application/json"},
body:JSON.stringify({
    name:name,
    password:password,
    updated_at: month+" "+day+" "+year
  })
})
.then(response => response.json())
.then(response => handleResponse(response))
.catch(
  error => console.log(error,"error-message")
)

}
