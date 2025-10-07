// app.jsx
import { Router } from 'preact-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ColorPallet } from './components/ColorPallet';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <Router>
        <Home path="/" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}

// Home page wrapper component
function Home() {
  return (
    <>
      <ColorPallet />
      <Footer />
    </>
  );
}
