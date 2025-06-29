import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createBrowserRouter } from 'react-router'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux';

import store from './store/store.js';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import  Protected from './components/AuthLayout.jsx'
import Allpost from './pages/AllPost.jsx';
import AddPost from './pages/AddPost.jsx';
import Editpost from './pages/Editpost.jsx';
import Post from './pages/Post.jsx';
const router = createBrowserRouter([
  {
    path :'/',
    element :<App/>,
    children :[
      {
        path :'/',
        element:<Home/>
      },
      {
        path :'/login',
        element : (
          <Protected authentication = {false}>
            <Login/>
          </Protected>          
        )
      },
      {
        path :'/signup',
        element : (
          <Protected authentication = {false}>
            <Signup/>
          </Protected>          
        )
      },
      {
        path :'/all-posts',
        element : (
          <Protected authentication> //default converted to ttrue
            <Allpost/>
          </Protected>          
        )
      },
      {
        path :'/add-post',
        element : (
          <Protected authentication> //default converted to ttrue
            <AddPost/>
          </Protected>          
        )
      },
      {
        path :'/all-posts',
        element : (
          <Protected authentication> //default converted to ttrue
            <Allpost/>
          </Protected>          
        )
      },
      {
        path :'/edit-post/:slug',
        element : (
          <Protected authentication> 
            <Editpost/>
          </Protected>          
        )
      },
      {
        path :'/posts/:slug',
        element : (
          <Protected authentication> 
            <Post/>
          </Protected>          
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <RouterProvider router = {router}/>
    </Provider>
    
  </StrictMode>,
)
