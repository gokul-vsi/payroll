import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { useMediaQuery } from "react-responsive";


export const Charttwo = () => {
    const isMobile = useMediaQuery({ maxWidth: 640 });   // install react-responsive
  return (
    <div>
        <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={isMobile ? 350 : 500}    //   customize the mobile with our own width and height
      height={300}
    />
    </div>
  )
}
