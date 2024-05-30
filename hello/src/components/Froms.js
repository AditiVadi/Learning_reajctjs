import React, { Component } from 'react'

 class Froms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         Comments:'',
         topic:'recat'
      }
    }
    handleUsernameChange =(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentsChange = event =>{
        this.setState({
            comments:event.target.value
        })
    }
    handletopicChange = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = evevt=>{
        alert(`${this.state.username} ${this.state.Component} ${this.state.topic}`)
        evevt.preventDefault()//to prevent to go to default values
    }
  render() {
    const { username,comments,topic}= this.state//have this.state remove karvu hoy to thai
    return (
      <form  onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' 
            value={this.state.username} 
            onChange={this.handleUsernameChange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea 
            value={this.state.comments}
            onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <lable>Topic:</lable>
            <select value={this.state.topic} onChange={this.handletopicChange}>
            <option value="react">React</option>
            <option value='angular'>Anglar</option>
            <option value='vue'>Vue</option>
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Froms
