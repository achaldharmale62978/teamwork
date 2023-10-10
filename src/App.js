
import './App.css';
import Navbar from './Component/Layout/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Home from './Component/Layout/Home'

function App() {
  return (
    <div className="App">
     <h3>App.js
      <Navbar/>
      <BrowserRouter>
        <Routes>
          {/* layout */}
          <Route path='home' element={<Home/>}></Route>

          {/* remodule */}
        <Route></Route>

        </Routes>
      </BrowserRouter>
     </h3>
    </div>
  );
}

export default App;
