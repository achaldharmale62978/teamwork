
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Layout/Home';
import Navbar from './Component/Layout/Navbar/Navbar';

// import Navbar from './component/layout/Navbar';
import Login from './Component/Login/Login';
import Sidebar from './Component/Sidebar/Sidebar';
import EnqueryForm from './Component/Remodule/EnqueryForm';
import EnqueryList from './Component/Remodule/EnqueryList';
import Reupdate from './Component/Remodule/Reupdate';
import Redelete from './Component/Remodule/Redelete';
import Oepage from './Component/Oemodule/Oepage';
import Oeenquerylist from './Component/Oemodule/Oeenquerylist';


import CibilReg from './Component/Remodule/cibilmodule/CibilReg';
import CibilDelete from './Component/Remodule/cibilmodule/CibilDelete';
import CibilStatus from './Component/Remodule/cibilmodule/CibilStatus';
import Registration from './Component/Remodule/cibilmodule/Registration';

import Cmpage  from './Component/Cmmodule/Cmpage';
import Cmlist from './Component/Cmmodule/Cmlist';
import Cmdelete from './Component/Cmmodule/Cmdelete';
import Cmupdate from './Component/Cmmodule/Cmupdate';

import Cmlogout from './Component/Cmmodule/Cmlogout';
import ReLogout from './Component/Remodule/ReLogout';
import OeLogout from './Component/Oemodule/OeLogout'


function App() {
  return (
    <div className="App">
      <>
       
        <BrowserRouter>
        <Navbar />
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
            <Route path='/registration' element={<Registration/>}></Route>
            <Route path='/cibilreg' element={<CibilReg/>}></Route>

            {/* oe module */}
            <Route path='/oeenquerylist' element={<Oeenquerylist />}></Route>
            <Route path='/oelogout' element={<OeLogout />}></Route>
            <Route path='/oepage' element={<Oepage />}></Route>

            {/* cm module */}
            <Route path='/cmlist' element={<Cmlist />}></Route>
            <Route path='/cmlogout' element={<Cmlogout />}></Route>
            <Route path='/cmpage' element={<Cmpage/>}></Route>
            <Route path='/cmupdate' element={<Cmupdate/>}></Route>
            <Route path='/cmdelete' element={<Cmdelete/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
