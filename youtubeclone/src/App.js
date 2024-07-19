

import './App.css';
import Body from './components/Body';

import Navbar from './components/Navbar'; // Updated import statement

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Watch from './Watch';
import Feed from './components/Feed';

function App() {
  const appBrowser=createBrowserRouter([
    {
      path:"/",
      element:<Body></Body>,
      children:[
        {
          path:"/",
          element:<Feed/>
        },
        {
          path:'/watch',
          element:<Watch/>
        }
      ]
      
    }
  ])
  return (
    <div >
      <Navbar></Navbar>
     <RouterProvider router={appBrowser} />
     
    </div>
  );
}

export default App;
