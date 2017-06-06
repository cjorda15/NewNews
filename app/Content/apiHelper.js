export const apiGetNews = (handleBuildList,handleAddArticles) => {
  const endpoint =
  `https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=f70d7cc4b6fe40b3bd3b8d246eed13f9`

  fetch(`http://localhost:3000/api/v1/news`)
    .then(response => response.json())
    .then(response => handleBuildList(response))
    .catch(error => console.log(error,"error message"))

  fetch(endpoint)
  .then(resp =>resp.json())
  .then(data => {const {articles} = data
    handleAddArticles(articles)
  })
  .catch(error => console.log(error,"error message"))
}
