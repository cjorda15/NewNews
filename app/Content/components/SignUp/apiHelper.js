export const apiAddUser = (name,password,retypePassword,createUser,setState) => {
  const d     = new Date()
  const month = d.getMonth()+1
  const day   = d.getDate()
  const year  = d.getFullYear()

  if(!name||!password||!retypePassword){
    setState({error:"please enter all the information that is required "})
    return null
  }

  if(password!==retypePassword){
    setState({error:"passwords must match"})
    return null
  }else{
    fetch(`http://localhost:3000/api/v1/user/`,{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({
          name:name,
          password:password,
          updated_at: month+" "+day+" "+year,
          created_at: month+" "+day+" "+year
        })
      })
      .then(response => response.json())
      .then(response => createUser(response))
      .catch(setState({error:"user name already taken"}))
    }
}
