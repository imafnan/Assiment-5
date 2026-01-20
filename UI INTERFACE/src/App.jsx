import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddContact from './pages/AddContact';
import ContactDetails from './pages/ContactDetails';
import UpdateContact from './pages/UpdateContact';
const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcontact" element={<AddContact />} />
        <Route path="/updateContact/:id" element={<UpdateContact />} />
        <Route path="/ContactDetails/:id" element={<ContactDetails />} />
      </Routes>
    </Router>

  );
};

export default App;
