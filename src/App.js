// Importing the necessary CSS and components
import './App.css';
import Header from './Components/Header';
import Content from './Components/content';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

// Define the main App component
function App() {
  return (
    // Wrapping the entire app with BrowserRouter for client-side routing
    <BrowserRouter>
      <div className="App">
        {/* Navbar component with links */}
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

        {/* Defining routes for rendering different components */}
        <Routes>
          <Route path='/' element={<Content />} exact />  {/* Home page */}
          <Route exact path='/create' element={<Header />} />  {/* Create page */}
          <Route path='/read' element={<Footer />} />  {/* Read page */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Export the App component as the default export
export default App;
