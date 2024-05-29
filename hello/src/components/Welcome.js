import React, { Component}  from 'react'

class Welcome extends Component{
render(){
    const {name,heroname}=this.props
    return <h1>Welcome  Class Component { name} a.k.a {heroname}</h1>
}
}
export default Welcome