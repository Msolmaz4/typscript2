import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {CountyType} from './type'

const App = () => {

    const [count ,setCounty] = useState<CountyType[]>([])

   const getCountry = async () =>{

    try { //const country = await axios.get<CountyType[]>('https://restcountries.com/v3.1/all')
        const { data} = await axios.get<CountyType[]>('https://restcountries.com/v3.1/all')
         setCounty(data)
        
    } catch (error) {
        console.log('ulkerg elmedi')
        
    }
       
    
   }

   useEffect(()=>{
    getCountry()
   },[])

   console.log(count)

  return (
    <div>App</div>
  )
}

export default App