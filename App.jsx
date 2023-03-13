import React,{Component} from "react";
class App extends Component{
  state={
    subject:"ReactJs",
    skills:["HTML","CSS","JS"]
  }
  render(){
    return(
      <>
      <h1>{this.state.subject}</h1>
      <ul>
        {this.state.skills.map((x)=>{
          return <li>{x}</li>
        })}
      </ul>
      </>
    )
  }
}
export default App;