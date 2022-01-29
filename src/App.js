import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import InventoryAdd from './Pages/Inventory/Add';
import InventoryEdit from './Pages/Inventory/Edit';
import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="inventory/add" element={<InventoryAdd />} />
          <Route path="inventory/edit/:id" element={<InventoryEdit />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
