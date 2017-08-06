export const apiShowFavorites = (user,handleFunction) => {
 if(user){
    fetch(`/api/v1/favorites/favs`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        id: user.id
      })
    })
    .then( response => response.json())
    .then( res => { handleFunction({list:res, id: user.id})})
    .catch(error => console.log(error,"error message"))
 }
}

export const apiNewsSource = (useSource,updateList,type) => {
  const date =  Date.now()

  fetch(`api/v1/news`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      id: useSource.id,
      type: type,
      updated_at:date
     })
   })
    .then(response => response.json())
    .then(response => updateList())
    .catch(error => console.log(error,"error message"))
}

export const apiUpdateList = (handleBuildList) => {
  fetch(`api/v1/news`)
    .then(response => response.json())
    .then(response => handleBuildList(response))
    .catch(error => console.log(error,"error"))
}

export const apiAddVote = (user,article,handleError,setState) => {
  fetch(`api/v1/addvote`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      user_id:user.id,
      extra_key:user.id+article.title
    })
  })
   .then(res => res.json())
   .then(res => {
     if(res.name=="error"){
      setState({
        bottomCardMessage:"already voted on",showInfo:false
      })
    handleError()
   }
  })
  .catch(err => console.log(err,"error in api helper addvote"))
}

export const apiAddFavorites = (user,article,source,handleResponse,setState,handleError) => {

  const key   = user.id+article.title
  const d     = new Date()
  const month = d.getMonth()+1
  const day   = d.getDate()
  const year  = d.getFullYear()

  user?
   fetch(`/api/v1/favorites`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      title:article.title,
      description: article.description,
      author:article.author,
      source:source,
      extra_key:key,
      beenSaved:false,
      url: article.url,
      img_url:article.urlToImage,
      user_id: user.id,
      created_at:month+" "+day+" "+year,
      updated_at:month+" "+day+" "+year
    })
  })
    .then(response => response.json())
    .then(response => handleResponse(response))
    .catch(error => console.log(error,"error message"))
   :
  (setState({bottomCardMessage:"Please log in to save a article",showInfo:false}),
  handleError())
}

export const apiDeleteFavorties = (user,article,refreshList) => {
  fetch('/api/v1/favorites/delete', {
    method:'DELETE',
    headers: {'Content-Type':'application/json'},
    body:JSON.stringify({
      key: user.id+article.title
    })
  })
  .then(response => refreshList())
  .catch(error => console.log(error,"error in delete"))
}
