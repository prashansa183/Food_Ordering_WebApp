import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import{RouterProvider}from "react-router-dom" 
import AppRouter from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(<RouterProvider router={AppRouter}/>)



