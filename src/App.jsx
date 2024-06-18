import Layout from './components/Layout'
import VideoList from './components/VideoList'
import './App.css'
import { useState, useEffect } from 'react'
import { getUserVideos } from './apiCalls'

function App() {

  useEffect(() => {
    getUserVideos('matt_umland')
  }, [])

  return (
    <>
      <Layout>
        <VideoList />
      </Layout>
    </>
  )
}

export default App
