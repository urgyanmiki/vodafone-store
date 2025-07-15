import './App.css';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { Wrapper } from './components/Wrapper';
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Wrapper>
        <Products />
      </Wrapper>
    </CartProvider>
  )
}

export default App
