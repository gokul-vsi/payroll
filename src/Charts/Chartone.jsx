import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { useMediaQuery } from "react-responsive";

export const Chartone = () => {
    const isMobile = useMediaQuery({ maxWidth: 640 });   // install react-responsive
  return (
    <div>
         <BarChart
      xAxis={[{ scaleType: 'band', data: ['Graphic design', 'Digital marketing', 'web development'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={isMobile ? 350 : 500}
      height={300}
    />
    </div>
  )
}
