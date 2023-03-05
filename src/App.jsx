import { useState } from 'react';
import './App.css';
import { Detail } from './components/Detail';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { useProduct } from './hooks/useProduct';



function App() {

  const [ counter, setCounter ] = useState(1)

  const { product } = useProduct();

  return (
    <div className="App container">

      <Header />

      <div className='container-body'>
        
        <div className='product-left'>
          <h4 className='title-store'>Store</h4>
          <hr className='separator' />
          <Products counter={ counter } />
        </div>

        <div className='product-right'>
          <h4 className='title-store'>
            { product.length === 1 ? 'Product' : ''}
          </h4>
          <hr className='separator' />
          <Detail counter={ counter } setCounter={ setCounter } />
        </div>

      </div>

    </div>

  )
}

export default App
