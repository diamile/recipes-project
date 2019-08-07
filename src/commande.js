import React from 'react';
import {Link} from "react-router-dom";


export default class Commande extends React.Component{
constructor(props){
    super(props)
    

    this.state={
        data: [this.props.location.state.product]
    }

    console.log(this.state.data);

}

removeItem=(index)=>{
    const data = this.state.data;
   
    this.setState({ data:[{}]});
  }
   
    
    render(){
      var  commandes=this.props.location.state.product;
      const deleteProduct=()=>{
        //document.getElementById('product').innerHTML="";
      }
      
   
    
        
        return(<div>
            <div className=" container jumbotron">
            <div id="product">
                <img src={commandes.src} alt={commandes.alt}/>
            </div>
            <button onClick={() => this.removeItem(commandes.id)}>Delete</button>

            </div>
            </div>);
    }
}