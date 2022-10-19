import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';


const Cart = () => {
  const items = useSelector(state=> state.cart)
  const dispatch = useDispatch();
  const handleRemove= (itemsid)=>{
  dispatch(remove(itemsid))
  }
  return (
    <div>
      <h3>CART</h3>
      <div className='cartWrapper'>{
        items.map(item=>(
          <div key={item.id}className='cartCard'>
            <img src={item.image} alt="hi"/>
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
        ))
      }</div>
    </div>
  )
}

export default Cart
