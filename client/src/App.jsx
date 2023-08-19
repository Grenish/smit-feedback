import React from 'react'
import { Sidebar, Faculty, Profile, Newsfeed } from './components'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Newsfeed/>}/>
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </>
  )
}

export default App
