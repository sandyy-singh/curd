
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Create />}></Route>
        <Route path="/Read" element={<Read />}></Route>
        <Route path="/Update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
    </div>

  );
}



export default App;
