import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClassComponentPagination from './Components/ClassComponentPagination';
import FunctionalComponentPagination from './Components/FunctionalComponentPagination';
import Homepage from './Components/Homepage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage/>} />
          <Route path="/class-component-example" element={<ClassComponentPagination/>} />
          <Route path="/functional-component-example" element={<FunctionalComponentPagination/>} />
      </Routes>
  </Router>
);
}

export default App;