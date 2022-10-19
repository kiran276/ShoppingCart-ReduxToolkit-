import React, {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts, STATUSES } from '../store/productSlice';



const Products = () => {
    const dispatch = useDispatch(); 
    // const [products,setProducts]=useState([]);
    const {data:product,status} = useSelector((state)=>state.product)
    useEffect(()=>{
      dispatch(fetchProducts());
        // const fetchProducts=async()=>{
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);


        //     };
        // fetchProducts();

    },[])

    const handleAdd=(product)=>{
      //we have to store product in redux store from here
      dispatch(add(product));
    }


    if(status ===STATUSES.LOADING){
      return<h2 style={{color:"black"}}>Laoding....</h2>
    }

    if(status ===STATUSES.ERROR){
      return<h2 style={{color:"black"}}>Something went wrong</h2>
    }
    // if(status ===STATUSES.IDLE){
    //   return<h2 style={{color:"black"}}>😊</h2>
    // }



  return (
    <div className='productsWrapper'>
  {
    product.map(product=>(
        <div className='card' key={product.id}>
            <img src={product.image} alt=""/>
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
            <button onClick={()=>handleAdd(product)} className='btn'>Add to Cart</button>
        </div>
        
    ))
  }
    </div>
  )
}

export default Products
