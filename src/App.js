import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let person ={
    name:"Akash",
    age:25
  }
  const products =[{name:'photoshop',price:'$45'},{name:'cooker',price:'$45'},{name:'service',price:'$45'},{name:'plan',price:'$45'}];
  return (
    <div className="App">
      <header className="App-header">
        
      
      <h1>My heading:{10+10} </h1>
      <h1>Person Name:{person.name+''}  Age:{person.age} </h1>

      <Counter></Counter>  
      <Name> </Name>

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        {
          products.map(pd=><Product product={pd}></Product>)
        }
       

      </header>
      
    </div>
  );
}

function Counter(){
  let [num, setCounter] = useState(10);

  return (
  <div>
    <h1>Counter:{num}</h1>
    <button onClick={()=>setCounter(num+1)}>Increase</button>
    <button onClick={()=>setCounter(num-1)}>Decrease</button>
  </div>)
    
 

}

function Name(){
  const [posts,getTitle]=useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => getTitle(data))
  },[]
  )
  

  return (
    <div>
      {
        posts.map(posts=><li>{posts.title}</li>)
      }
    </div>
  )
}





function Product(props){
  const productStyle = {
    border:'1px solid solid',
    borderRadius:'5px',
    backgroundColor:'gray',
    height:'250px',
    width:'20%',
    
    
  }
 const {name,price} =props.product;
  return (
    <div style={productStyle}> 
    
      <p>{name}</p>  
      <h2>{price}</h2>
      <button> Buy now </button>  
    </div>
    
  )
}






export default App;
