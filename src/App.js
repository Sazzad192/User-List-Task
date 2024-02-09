import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Landing from './components/Pages/LandingPage/Landing';
import UserList from './components/Pages/UserList/UserList';
import Error from './components/Pages/Error/Erron';
import APIKit from './helpers/APIKit';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Landing></Landing>
        },
        {
          path:'/users/list',
          element: <UserList></UserList>,
          loader: () => APIKit.user.getUserList
        },
      ]
    },
    {
      path:'*',
      element:<Error></Error>
  }
  ])
  return (
    <div className='min-h-screen bg-main-bg'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
