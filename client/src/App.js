import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CRUD from './crudPages/crudPage';
import HomePage from './HomePage/HomePage';
import ProductsPage from './ProductsPage/prod_page';
import ProductsDetails from './ProductsPage/prod_details';

function App() {
    return ( 
    <div className = "App"> { 
    <> 
    <Navigation/>      
    </>
    }
        <BrowserRouter>
        <Routes>
        <Route path = '/' element = { <HomePage/> } /> 
        <Route path = '/products' element = { <ProductsPage/> } /> 
        <Route path = '/products/details/:id' element = { <ProductsDetails/> }/>
        <Route path = '/crud' element = { <CRUD/> } /> 
        </Routes>
        </BrowserRouter>

    <Footer/>
        </div>

    );
}

export default App;