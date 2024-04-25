import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shipment from './pages/dashboard/shipment';
import './App.css';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Shipment />} />
        {/* <Route path='' element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
