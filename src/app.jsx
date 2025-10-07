// app.jsx
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ColorPallet } from './components/ColorPallet';

export function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <ColorPallet />
      <Footer />
    </div>
  );
}
