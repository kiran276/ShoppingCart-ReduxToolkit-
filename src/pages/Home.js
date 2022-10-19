import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <h2 className='heading'> Welcome to the Redux Toolkit Store</h2>
      <section>
      <span>PRODUCTS</span>
        <Products/>
      </section>
    </div>
  )
}

export default Home
