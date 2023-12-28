import React from 'react';
import Header from './Header.js'
import ProductList from './ProductList.js'



export default function MainPage(props) {
  return (
    <React.Fragment>
        <div className="bg-gray-100">
            <Header />
            <div className="container mx-auto p-4">
                <ProductList />
            </div>
        </div>
    </React.Fragment>
        
  )
}
