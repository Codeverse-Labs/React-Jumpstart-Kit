import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExamplePage from './pages/ExamplePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Example of how to define a router path */}
        {/* <Route path="/example" element={<ExamplePage/>}/>  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
