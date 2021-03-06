export const apiShowFavorites = (user, handleShowFavorites) => {

  fetch(`/api/v1/favorites/favs`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      id: user
    })
  })
   .then( response => response.json())
   .then( res => {
    handleShowFavorites({list:res, id: user})
  })
   .catch( error => console.log(error))
}
