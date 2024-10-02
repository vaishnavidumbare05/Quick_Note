import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{ createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './Views/Home/Home';
import Show from './Views/Show/Show';
import Add from './Views/Add/Add';
import {Toaster} from "react-hot-toast"


const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/add",
    element:<Add/>
  },
  {
    path:"/show",
    element:<Show/>
  },
  {
    path:"*",
    element:<h2>404 not found</h2>
  }
])
root.render(
  <div>
<RouterProvider router={router}/>
<Toaster/>
  </div>
  
 
);


