import { useEffect } from 'react'
import './App.scss'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfig } from './features/home/homeSlice'
import Home from './pages/home/Home'

function App() {
  const {url} = useSelector(state => state.home)
  const dispatch = useDispatch()
  useEffect(() => {
   
      fetchDataFromApi("/movie/popular").then(res => {console.log(res)
      dispatch(getApiConfig(res))}
      )
      
  },[])
  return(
    <div>
      {
        url?.total_pages
      }
      <Home/>
    </div>
  )
}

export default App
