export const apiShowFavorites = (user,handleShowFavorites) => {

  fetch(`http://localhost:3000/api/v1/favorites/favs`, {
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
}
