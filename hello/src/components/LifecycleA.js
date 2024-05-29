import React, { Component } from 'react'
import LifecycleBchild from './LifecycleBchild';

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'aditi'
      }
      console.log("LifecycleA constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }
    
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true 
    }
    getSnapshotBeforeUpdate(prevProps,precState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    changeState = ()=>{
        this.setState({
            name:'codevolustion'
        })
    }
  render() {
    console.log(" LifecycleA render")
    return (<div>
      <div>LifecycleA</div>
      <button onClick={this.changeState}>change state</button>
      <LifecycleBchild></LifecycleBchild>
      </div>
    )
  }
}

export default LifecycleA
