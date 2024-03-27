import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import "./index.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Listed from './pages/Listed'
import ToReade from './pages/ToReade'
import BookDetails from './pages/BookDetails'
import  { Toaster } from 'react-hot-toast';
import ReadBooks from './components/ReadBooks'
import WishLIst from './components/WishLIst'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '',
        element: <Home></Home>,
        loader:()=>fetch('../booklist.json')
      },
      {
        path: '/listed-books',
        element: <Listed></Listed>,
        children:[
          {
            path:'',
            element: <ReadBooks></ReadBooks>
          },
          {
            path:'wishList',
            element: <WishLIst></WishLIst>
          }
        ]
      },
      {
        path: '/pages-to-read',
        element: <ToReade></ToReade>
      },
      {
        path: '/book-details/:id',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch(`../booklist.json`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
)
