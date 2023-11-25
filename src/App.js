import './App.css';
import Header from './components/Header';
import OrderDetails from './components/OrderDetails';
import SubHeader from './components/SubHeader';
import ProductListContainer from './components/ProductsListContainer';


function App() {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <OrderDetails/>
      <ProductListContainer/>
    </div>
  );
}

export default App;