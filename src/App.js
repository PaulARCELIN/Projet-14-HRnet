import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CreateEmployee } from './pages/CreateEmployee';
import { CurrentEmployees } from './pages/CurrentEmployees';
import { Navigate } from 'react-router-dom';
import './App.css'

//App component handle de router

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/current-employees" element={<CurrentEmployees />}></Route>
          <Route path="/create-employee" element={<CreateEmployee />}></Route>
          <Route exact path="/" element={<Navigate to="/create-employee"/>}></Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
