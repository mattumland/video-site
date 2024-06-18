import Layout from './components/Layout'
import VideoList from './components/VideoList'
import './App.css'
import { useEffect, useReducer } from 'react'
import videoReducer from './context/videoReducer'
import VideoContext from './context/videoContext'

const initialState = {
  user_id: 'matt_umland',
  videos: [],
  error: ''
}


function App() {
  const [state, dispatch] = useReducer(videoReducer, initialState)

  const getUserVideos = async (user_id) => {
    try {
      const response = await fetch(`http://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=${user_id}`)
      const videoData = await response.json()
      const action = { type: 'GET_VIDEOS', videos: videoData.videos}
      dispatch(action)
    } catch(error) {
      alert(error)
    }
  }

  useEffect(() => {
    getUserVideos(state.user_id)
  }, [])

  console.log("state", state)

  return (
    <VideoContext.Provider value={[state, dispatch]}>
      <main>
        <Layout>
          <VideoList/>
        </Layout>
      </main>
    </VideoContext.Provider>
  )
}

export default App
