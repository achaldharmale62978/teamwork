
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Layout/Home';
import Navbar from './Component/Layout/Navbar/Navbar';

// import Navbar from './component/layout/Navbar';
import Login from './component/pages/Login';
import Sidebar from './component/pages/Sidebar';
import EnqueryForm from './component/Recontent/EnqueryForm';
import EnqueryList from './component/Recontent/EnqueryList';
import Reupdate from './component/Recontent/Reupdate';
import Redelete from './component/Recontent/Redelete';
// import ReLogout from './Component/Remodule/ReLogout';
import Oepage from './Component/Oemodule/Oepage';
import Oeenquerylist from './component/OeModule/Oeenquerylist';


import CibilReg from './component/OeModule/CibilReg';
// import CibilDelete from './Component/Remodule/cibil/CibilDelete';
import CibilStatus from './component/Recontent/CibilStatus';
import Cmpage from './component/Cmmodule/Cmpage';
import Cmlist from './component/Cmmodule/Cmlist';
import Registration from './component/Recontent/Registration';
import Cmdelete from './component/Cmmodule/Cmdelete';
import Cmupdate from './component/Cmmodule/Cmupdate';

import Cmlogout from './component/Cmmodule/Cmlogout';
import ReLogout from './Component/Remodule/ReLogout';
import OeLogout from './component/Oemodule/OeLogout';


function App() {
  return (
    <div className="App">
      <h3>
        <Navbar />
        <BrowserRouter>
          <Routes>
            {/* layout */}
            <Route path='/home' element={<Home />}></Route>

            {/* login */}
            <Route path='/login' element={<Login />}></Route>

            {/* sidebar */}
            <Route path='/sidebar' element={<Sidebar />}></Route>


            {/* re module */}
            <Route path='/enqueryform' element={<EnqueryForm />}></Route>
            <Route path='/enquerylist' element={<EnqueryList />}></Route>
            <Route path='/relogout' element={<ReLogout />}></Route>
            <Route path='/reupdate' element={<Reupdate />}></Route>
            <Route path='/redelete' element={<Redelete />}></Route>
            <Route path='/relogout' element={<ReLogout />}></Route>

            {/* cibil */}
            <Route path='/cibilstatus' element={<CibilStatus />}></Route>
            <Route path='/cibildelete' element={<CibilDelete />}></Route>

            {/* oe module */}
            <Route path='/oeenquerylist' element={<Oeenquerylist />}></Route>
            <Route path='/oelogout' element={<OeLogout />}></Route>
            <Route path='/oepage' element={<Oepage />}></Route>

            {/* cm module */}
            <Route path='/cmlist' element={<Cmlist />}></Route>
            <Route path='/cmlogout' element={<Cmlogout />}></Route>

          </Routes>
        </BrowserRouter>
      </h3>
    </div>
  );
}

export default App;
