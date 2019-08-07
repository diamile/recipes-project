import React from 'react';
import datas from './data';
import styles from './styles';
import {Link} from "react-router-dom";


export default class Describe extends React.Component{
    
        // state={
        //  data:[]
        // }
       
        // componentDidMount= async ()=>{
        //  const mydata= await datas;
        //  this.setState({data:mydata[0]});
        //  console.log(this.state.data);

        // }
      
    
    render(){
        const{styleImage,blabla,sideBar}=styles;
       
        //console.log(this.props.location.state.lol);
        const product=this.props.location.state.lol;
        
        return(
        <div>
             <div style={sideBar}>
            <p>product detail</p>
           </div>
        <div className='container jumbotron'>

        <div style={{width:'50%', margin:'0 auto'}} className="card mb-4 shadow-sm">
            <img style={styleImage} src={product.src} alt={product.alt}/>
            <div className="card-body">
              <p style={{fontWeight:'bold'}}>{product.name}</p>
              <p>{product.description}</p>
              <p style={{fontWeight:'bold',color:'orange'}}>{product.price}</p>
              <button type="submit" className='btn btn-primary'>
               <Link style={{color:'white'}} to={{pathname:'/',
               }}>
               retour
               </Link>
              </button>
              
              <button style={{float:'right'}} type="submit" className='btn btn-primary'>
              <Link style={{color:'white'}} to={{pathname:`/commande/${product.id}`,state:{product}
              }}>
              Passer votre commande
              </Link>
             </button>
             </div>
              </div>

        </div>
        </div>
        );
    }
}

