import React from 'react'
import { Chartone } from '../Charts/Chartone'
import { Charttwo } from '../Charts/Charttwo'
import { Chartthree } from '../Charts/Chartthree'


export const Home = () => {
  return (
    <div>
      <div class="h-screen p-4 sm:ml-64">
      <div className="flex flex-col items-center md:flex-row md:justify-around">
        <div className="md:w-1/2">
              <Chartone/>
        </div>
        <div className="md:w-1/2">
         <Charttwo/>
        </div>
      </div>
      <div className="container mx-auto p-4 mt-5">
        <div className="flex justify-center items-center">
          <Chartthree/>
        </div>
      </div>
</div>
      
    </div>
  )
}
