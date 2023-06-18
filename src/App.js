import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer'
import Body from './components/Body';
import Details from './components/Details';
import Result from './components/Result';
import Bookmark from './components/Bookmark';
import { Provider } from 'react-redux';
import store from './utils/store'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: '/',
        element:<Body />
      },
      
      {
        path: "/details",
        element:<Details />
      },
      {
        path: "/result",
        element:<Result />
      },
      {
        path: "/bookmark",
        element:<Bookmark />
      }
    ]
  }
])
function App() {
 
  return (
    <Provider store={store}>
    <div className="App">
     <RouterProvider router={appRouter} />
     
      </div>
      </Provider>
  );
}

export default App;
