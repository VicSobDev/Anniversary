import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/login';
import Home from './views/home';
import Register from './views/register';

function App() {
  return (
    <Router>
        <Routes>
          {/* Use the `element` prop to pass components */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
  );
}

export default App;
