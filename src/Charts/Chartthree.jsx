import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useMediaQuery } from "react-responsive";

export const Chartthree = () => {
    const isMobile = useMediaQuery({ maxWidth: 640 });   // install react-responsive
  return (
    <div>
         <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Team A' },
            { id: 1, value: 15, label: 'Team B' },
            { id: 2, value: 20, label: 'Team C' },
          ],
        },
      ]}
      width={isMobile ? 350 : 500}
      height={200}
    />
    </div>
  )
}
