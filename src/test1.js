import React from "react";
import data from './data';
import styles from './style';
import {setState} from 'react';


export default class App extends React.Component{

 constructor(props){
 
  super(props);

 this.state={
  data:[],

 }

 }

 handleSubmit= async (e)=>{
   
   e.preventDefault();
   const result=await data;
   this.setState({data:result});
   
   
 }

 handleChange=(e)=>{
  var val=e.target.elements.recipeName.value;
  
 }


 
 render(){
   return(<div>
     <form onSubmit={this.handleSubmit}>
     <input type="text" onChange={this.handleChange}/>
     <button>Shearch</button>
     </form>
      
     {this.state.data.map((lol)=>{
        
       return<p key={lol.id}>{lol.name}</p>
       })}
     </div>
     
    )
 }


}



