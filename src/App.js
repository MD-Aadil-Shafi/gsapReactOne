
import './App.css';
import Main from './pages/Main';
import {BrowserRouter as Router, Navigate, Route, Routes, HashRouter} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Enquiry from './pages/enquiry/Enquiry';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route exact path="/enquiry" element={<Enquiry/>}></Route>
        <Route path="*" element={<Navigate to='/'/>}></Route>
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
