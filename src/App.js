import { Container, Row } from 'react-bootstrap';
import './App.css';
import CreateBook from './Components/CreateBook';
import ViewBook from './Components/ViewBook';
import Home from './Container/Home';
import { Route, Routes } from 'react-router-dom';
import EditBook from './Components/EditBook';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/editBook' element={<EditBook />}></Route>
      </Routes>

    </>
  );
}

export default App;
