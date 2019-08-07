import React from "react";
import datas from './data';
import styles from "./styles";
import {Link} from "react-router-dom";


  function shearChingFor(term){
    return function(x){
      return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
    
  }

  function NotFound(){
    if(!this.state.term){
      return(<div>Product not found</div>);
    }
  }
  const{styleImage,blabla,sideBar}=styles;

  export default class extends React.Component{
    constructor(props){
     super(props);

     this.state={
       datas,
       term:'',
     }
    }

    handleChange=(e)=>{
    this.setState({term:e.target.value});
    }

    render(){
      return(
         <div>

           <div style={sideBar}>
            <form>
             <input type="text" onChange={this.handleChange}/>
           </form>
           </div>

      <div className='container jumbotron' style={blabla}>
          
        {this.state.datas.filter(shearChingFor(this.state.term)).map((lol)=>{
          return(
            <div className="col-md-4" key={lol.id}> 
             
            <div className="card mb-4 shadow-sm">

            <img style={styleImage} src={lol.src} alt={lol.alt}/>
            
            <div className="card-body">

              <p style={{fontWeight:'bold'}}>{lol.name}</p>
              <p>{lol.description}</p>
              <p style={{fontWeight:'bold',color:'orange'}}>{lol.price}</p>

              <button type="submit" className='btn btn-primary'>

               <Link style={{color:'white'}} to={{pathname:`/recette/${lol.id}`,
               state:{lol}}}>
               details
               </Link>

              </button>
             </div>
              </div>

              </div>
          )
        
        })}
      </div>
      
      </div>)
    }
  }