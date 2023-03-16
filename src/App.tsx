
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import { SigIn } from './pages/SigIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SigIn />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
