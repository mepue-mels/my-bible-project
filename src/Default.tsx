import App from './App';
import About from './About';
import { Route, Routes } from 'react-router-dom';
import Register from './Register';

function Default() {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default Default;
