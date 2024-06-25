import Layout from './components/Layout';
import VideoList from './components/VideoList';
import { VideoPage, idLoader } from './routes/video';
import ErrorPage from './routes/error-page';
import './App.css';
import { useEffect, useReducer } from 'react';
import videoReducer from './context/videoReducer';
import VideoContext from './context/videoContext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const initialState = {
  user_id: 'matt_umland',
  videos: [],
  error: ''
}

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        index: true,
        element: <VideoList />
      },
      {
        path: "video/:videoId",
        element: <VideoPage />,
        loader: idLoader
      }
    ]
  }
])

function App() {
  const [state, dispatch] = useReducer(videoReducer, initialState)

  const getUserVideos = async (user_id) => {
    try {
      const response = await fetch(`http://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=${user_id}`)
      const videoData = await response.json()
      const action = { type: 'UPDATE_VIDEOS', videos: videoData.videos}
      dispatch(action)
    } catch(error) {
      alert(error)
    }
  }

  useEffect(() => {
    getUserVideos(state.user_id)
  }, [])

  return (
    <VideoContext.Provider value={[state, dispatch]}>
      <RouterProvider router={router} />
    </VideoContext.Provider>
  )
}

export default App
