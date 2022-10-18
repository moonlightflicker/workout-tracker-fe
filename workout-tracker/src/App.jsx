import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
