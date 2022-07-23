import './App.css';
import Sidebar from './Sidebar';
import Topnav from './Topnav'
import Dashboard from './Dashboard';
import { Routes,Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Profile from './Profile';
import Tasks from './Tasks';
import Work from './Work';
import Myprojects from './Myprojects';
import Leaves from './Leaves';
import Bankdetails from './Bankdetails';

function App() {
return (
<Router>
   <div className="App">
      <Topnav />
      <Row>
         <Col sm={3}>
         <Sidebar />
         </Col>
         <Col sm={9}>
         <Routes>
            <Route path='/' element={
            <Dashboard />
            }/>
            <Route path='/Profile' element={
            <Profile />
            }/>
            <Route path='/Tasks' element={
            <Tasks />
            }/>
            <Route path='/Work' element={
            <Work />
            }/>
            <Route path='/Myprojects' element={
            <Myprojects />
            }/>
            <Route path='/Leaves' element={
            <Leaves />
            }/>
            <Route path='/Bankdetails' element={
            <Bankdetails />
            }/>
           
          
         </Routes>
         </Col>
      </Row>
   </div>
</Router>
);
}
export default App;