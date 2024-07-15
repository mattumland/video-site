import './App.css';
import Layout from './components/Layout';
import VideoList from './components/VideoList';
import { VideoPage } from './routes/video';
import ErrorPage from './routes/error-page';
import videoReducer from './context/videoReducer';
import VideoContext from './context/videoContext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useReducer } from 'react';

const initialState = {
  user_id: 'matt_umland',
}

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        element: <VideoList />
      },
      {
        path: "video/:videoId",
        element: <VideoPage />
      }
    ]
  }
])

function App() {
  const [state, dispatch] = useReducer(videoReducer, initialState)

  return (
    <VideoContext.Provider value={[state, dispatch]}>
      <RouterProvider router={router} />
    </VideoContext.Provider>
  )
}

export default App
