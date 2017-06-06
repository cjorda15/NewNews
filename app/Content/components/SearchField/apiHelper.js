export const apiBuildList = (handleBuildList, addArticles) => {
  fetch(`http://localhost:3000/api/v1/news`)
    .then(response => response.json())
    .then(response => handleBuildList(response))
    .then(response => addArticles())
    .catch(error => console.log(error))
}
