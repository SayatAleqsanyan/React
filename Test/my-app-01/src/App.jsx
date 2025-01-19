import {Routes, Route} from "react-router-dom";
import "./styles/App.css";
import './styles/styles.css'

import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Blog} from "./pages/Blog";
import {Notfound} from "./pages/Notfound";

import { Layout } from "./components/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<Notfound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
