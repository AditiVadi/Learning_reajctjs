import React, { Component } from 'react'

 class LifecycleBchild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'aditi'
      }
      console.log("LifecycleBchild constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleBchild getDerivedStateFromProps');
        return null;
    }
    
    componentDidMount(){
        console.log('LifecycleBchild componentDidMount')
    }
    //Updating lifecycle method
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true 
    }
    getSnapshotBeforeUpdate(prevProps,precState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }
  render() {
    console.log(" LifecycleBchild render")
    return (
      <div>
        LifecycleBchild
      </div>
    )
  }
}

export default LifecycleBchild
