import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Layout from "./components/layout/Layout";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Book from './components/Book';
import AuthProvider from "./context/AuthContext"
import PatientProvider from "./context/PatientContext"
import AppointmentProvider from "./context/AppointmentContext"
function App() {


  return (
    <BrowserRouter>
    <AuthProvider>
    <PatientProvider>
    <AppointmentProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="book" element={<Book />} />
          <Route path="account/login" element={<Login />} />
          <Route path="account/dashboard" element={<Dashboard />} />
          <Route path="contactus" element={<Contact />} />
        </Route>
      </Routes>
      </AppointmentProvider>
    </PatientProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
