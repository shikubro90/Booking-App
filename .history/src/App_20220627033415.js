import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
  
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Hotels from './pages/Hotels/Hotels';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='hotels' element={<List/>}/>
        <Route path='hotels/:id' element={<Hotels/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
