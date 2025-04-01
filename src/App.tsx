import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuList from './components/MenuList';
import ItemDetail from './components/ItemDetail';
import { menuData } from './data/menuData';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Our Menu</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<MenuList categories={menuData} />} />
                        <Route path="/item/:id" element={<ItemDetail />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App; 