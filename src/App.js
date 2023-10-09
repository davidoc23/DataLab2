import './App.css';
import Header from './Components/Header'
import Content from './Components/content';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        <Routes>
          <Route path='/' element={<Content />} exact />
          <Route exact path='/create' element={<Header />} />
          <Route path='/read' element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

  export default App;