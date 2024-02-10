import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import APIKit from './helpers/APIKit';

import Main from './layouts/Main';
import Landing from './components/Pages/LandingPage/Landing';
import UserList from './components/Pages/Users/UserList';
import Error from './components/Pages/Error/Error';
import UsersDetails from './components/Pages/Users/UserDetails';
import CreateUser from './components/Pages/Users/CreateUser';
import Toast from './components/Common/Toast';

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
          loader: () => APIKit.user.getUserList()
        },
        {
          path:'/user/:id',
          element:<UsersDetails></UsersDetails>,
          loader: ({params}) =>APIKit.user.getUserDetails(params.id)
        },
        {
          path:'/users/create',
          element: <CreateUser></CreateUser>
        }
      ]
    },
    {
      path:'*',
      element:<Error></Error>
  }
  ])
  return (
    <div className='bg-main-bg'>
      <RouterProvider router={router}></RouterProvider>
      <Toast/>
    </div>
  );
}

export default App;
