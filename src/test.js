import React from "react";
import datas from './data';
import styles from './style';
import {setState} from 'react'


function Button(props){
  return(<button >more detail</button>);
}

function Form(props){
  return(<form onSubmit={props.handleSubmit} style={{textAlign:'center'}}>
    <input type="text" />
    <button>Shearch</button>
    </form>);
}

const{styleImage,blabla,sideBar}=styles;

function SideBar(props){
  return<div style={sideBar}>
    My restauration
    <Form handleSubmit={props.handleSubmit}  />
    </div>
}




export default class App extends React.Component{

  

  state={
   data:[]
  

  }


  handleSubmit= async (event)=>{
    event.preventDefault();
    const result=await datas;
    this.setState({data:result});
    console.log(this.state.data);
    
    
  }
  
  


  lol=datas.map((pol)=><div className="col-md-4" key={pol.id}>
     
    <div className="card mb-4 shadow-sm">

    <img style={styleImage} src={pol.src} alt={pol.alt}/>
    <div className="card-body">

    <h3>{pol.name}</h3>
    <p>{pol.price}</p>

    <Button/>
    </div>

    </div>
    
    
  </div>);

  render(){
    return(<div>
      <SideBar handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><br/>
      
      <div className="container jumbotron" style={blabla}>
          {this.lol}
      </div>
    </div>)
  }
 
}



