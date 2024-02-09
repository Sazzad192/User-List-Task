import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import LandingPage from './components/Pages/LandingPage/LandingPage';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <LandingPage></LandingPage>
        }
      ]
    }
  ])
  return (
    <div className='h-screen bg-main-bg'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
