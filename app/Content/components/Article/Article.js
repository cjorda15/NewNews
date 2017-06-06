import React, {Component} from 'react'
import styles from './Article.css'
import knex from 'knex'
import {apiShowFavorites, apiNewsSource, apiUpdateList, apiAddVote, apiAddFavorites,apiDeleteFavorties} from './apiHelpers'

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

  componentWillMount(){
    apiShowFavorites(this.props.user,this.props.handleShowFavorites)
  }

  handleError(){
    setTimeout(() => { this.setState({showInfo:true})}, 2000)
  }

  handleOnClick(type){
    if(this.state.conClicked||this.state.libClicked){
      this.setState({bottomCardMessage:"already voted on",showInfo:false})
      this.handleError()
      return null
    }

    if(this.props.user){
      this.handleVote(type)
    }

   type == "conservative"? this.setState({conClicked:true}) :  this.setState({libClicked:true})

   apiNewsSource(this.props.useSource,this.updateList.bind(this),type)
 }

  updateList(){
    apiUpdateList(this.props.handleBuildList.bind(this))
  }

  handleVote(type){
    const voteType = type === 'conservative' ? "con": "lib"

    apiAddVote(voteType,this.props.user,this.props.article,this.props.handleAddCon.bind(this),this.props.handleAddLib.bind(this),this.setState.bind(this),type)
  }

  handleFavorites(){
    apiAddFavorites(this.props.user,this.props.article,this.props.source,this.handleResponse.bind(this),this.setState.bind(this),this.handleError.bind(this))
  }

  handleResponse(response){
    response.name=='error'?
        (this.setState({showInfo:false,bottomCardMessage:"already saved"}),this.handleError())
        :
        this.setState({showInfo:true})
  }

  handleDeleteFavorite(){
    apiDeleteFavorties(this.props.user,this.props.article,this.refreshList.bind(this))
 }

  refreshList(){
    apiShowFavorites(this.props.user,this.props.handleShowFavorites.bind(this))
 }

  renderButton(){
    return this.props.btnType==="save" ?
            <button
              className="favorite-button"
              onClick={()=>{this.handleFavorites()}}>
               {this.props.btnType}
             </button>
             :
            <button
             onClick={()=>{this.handleDeleteFavorite()}}
             className="favorite-button">
             {this.props.btnType}
            </button>
  }

  bottomMessage(){
    return this.state.showInfo?
              `conservative: ${this.props.useSource.conservative} liberal: ${this.props.useSource.liberal}`
              :
              this.state.bottomCardMessage
  }

  render(){
    const con = this.props.useSource.conservative
    const lib = this.props.useSource.liberal
    const total = con + lib
    const percent= Math.floor(con/total*100)
    const messageStyle = {
      color: '#fff',
      backgroundImage:`-webkit-gradient(linear, left bottom, left top, color-stop(0.${percent}, red), color-stop(0.${percent}, #3a4ed5))`,
      borderRadius: '4px',
      padding: '7px'
    }

  return(
    <article className = "article">
     <div
        className = "top-of-card"
        style={{ backgroundImage: `url(${this.props.article.urlToImage})` }}
      >
      <div className="card-content">
          <span
            className="card-background-container">{this.props.article.title}
          </span>
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
        <div style={messageStyle} className="bottom-message">{this.bottomMessage()}</div>
        <div className="underline-bottom-message"></div>
        <div className="bottom-card-content">{this.props.article.description}</div>
      </div>
    </article>
  )
 }
}

export default Article
