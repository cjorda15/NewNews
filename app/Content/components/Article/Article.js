import React, {Component} from 'react'
import styles from './Article.css'
import knex from 'knex'

class Article extends Component {
  constructor(props){
    super(props)
    this.state = {
      bottomCardMessage:"",
      showInfo:true,
      conClicked:false,
      libClicked:false
    }
  }

  //
  // componentWillMount(){
  //   if(this.props.user){
  //       fetch(`http://localhost:3000/api/v1/favorites/favs`, {
  //         method: "POST",
  //         headers: {"Content-Type": "application/json"},
  //         body: JSON.stringify({
  //           id: this.props.user.id
  //         })
  //       })
  //       .then( response => response.json())
  //       .then( res => { this.props.handleShowFavorites({list:res, id: this.props.user.id})
  //       })
  //       .catch(error => console.log(error,"error message"))
  //   }
  // }


  handleOnClick(type){
    if(this.props.user){
      this.handleVote(type)
    }

    if(type =='conservative'&& this.state.conClicked==true){
      this.setState({bottomCardMessage:"already voted on news source",showInfo:false})
      return null
    }

     type == "conservative"? this.setState({conClicked:true}) :  this.setState({libClicked:true})


   const date =  Date.now()
   const useSource = this.props.list.find(article => {
      if(article.source == this.props.source){
        return article
      }
  })

  fetch(`http://localhost:3000/api/v1/news`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      id: useSource.id,
      type: type,
      updated_at:date
    })
  })
    .then(response => response.json())
    .then(response => this.updateList())
    .catch(error => console.log(error,"error message"))
 }

  updateList(){

    fetch(`http://localhost:3000/api/v1/news`)
      .then(response => response.json()).then(response => this.props.handleBuildList(response)).
      then(response => console.log('response bah ', response))
  }

  handleVote(type){
    let voteType = type == 'conservative' ? "con": "lib"
    fetch(`http://localhost:3000/api/v1/add${voteType}`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        user_id:this.props.user.id,
        extra_key:this.props.user.id+this.props.article.title
      })
    }).then(res => res.json())
      .then(res => {type=="conservative" ?
        this.props.handleAddCon(res) : this.props.handleAddLib(res)
      })
      .catch(err => console.log(err))
  }

  handleFavorites(){
    const key   = this.props.user.id+this.props.article.title
    const d     = new Date()
    const month = d.getMonth()+1
    const day   = d.getDate()
    const year  = d.getFullYear()
    this.props.user?

    (this.setState({bottomCardMessage:""}),
     fetch(`http://localhost:3000/api/v1/favorites`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title:this.props.article.title,
        description: this.props.article.description,
        author:this.props.article.author,
        source:this.props.source,
        extra_key:key,
        beenSaved:false,
        url: this.props.article.url,
        img_url:this.props.article.urlToImage,
        user_id: this.props.user.id,
        created_at:month+" "+day+" "+year,
        updated_at:month+" "+day+" "+year
      })
    }).then(response => response.json())
      .then(response => this.handleResponse(response))
      .catch(error => console.log(error,"error message")))
    :
    this.setState({bottomCardMessage:"Please log in to save a article",showInfo:false})
  }

  handleResponse(response){
        response.name=='error'?
            this.setState({showInfo:false,bottomCardMessage:"already selected"})
            :
            this.setState({showInfo:true})
  }

  handleDeleteFavorite(){

    fetch('http://localhost:3000/api/v1/favorites/delete', {
      method:'DELETE',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
        key: this.props.user.id+this.props.article.title
      })
    })
      .then(response => this.refreshList())
      .catch(error => console.log(error,"error in delete"))
}


  refreshList(){
    fetch(`http://localhost:3000/api/v1/favorites/favs`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
       id: this.props.user.id
      })
    })
    .then( response => response.json())
    .then( res => { this.props.handleShowFavorites({list:res, id: this.props.user.id})})
    .catch( err => console.log(err,"error in favs update in article"))
 }



  renderButton(){
  return  this.props.btnType==="save"?
        <button className="favorite-button"
         onClick={()=>{this.handleFavorites()}}>{this.props.btnType}</button>
        :
        <button
         onClick={()=>{this.handleDeleteFavorite()}}
         className="favorite-button">{this.props.btnType}</button>
  }

  bottomMessage(){
    const useSource = this.props.list.find(article => {
       if(article.source == this.props.source){
         return article
       }
     })

    return this.state.showInfo?
              `conservative: ${useSource.conservative} liberal: ${useSource.liberal}`
              :
              this.state.bottomCardMessage
  }

  render(){
  return(
    <article className = "article">
     <div
        className = "top-of-card"
        style={{ backgroundImage: `url(${this.props.article.urlToImage})` }}
      >
      <div className="card-content">
        <span className="card-background-container">{this.props.article.title}</span>
      </div>
      </div>
      <div className = "middle-of-card">
        <a className = "middle-of-card-link" href={this.props.article.url}>link to article</a>
        <div className = "middle-of-card-button-container">
        {this.renderButton()}
          <img
            onClick={() => this.handleOnClick('conservative')}
            className= "middle-of-card-img con-img"
            src={'https://d30y9cdsu7xlg0.cloudfront.net/png/29046-200.png'}
          />
          <img
            onClick={() => this.handleOnClick('liberal')}
            className= "middle-of-card-img lib-img"
            src={`https://d30y9cdsu7xlg0.cloudfront.net/png/66721-200.png`}/>
        </div>
      </div>
      <div className = "bottom-card">
        <div className="bottom-message">{this.bottomMessage()}</div>
        <div className="bottom-card-content">{this.props.article.description}
        </div>
      </div>
    </article>
  )
 }
}
export default Article
