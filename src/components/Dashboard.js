import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Dashboard = () => {
  return (
    <section>
        <div className='borbot'>
          <div className='shopmarg'>
            <div className='mainbox2'>
              <a className='navhead' href=''>Home</a>
              <span className='arrdis'><KeyboardArrowRightIcon className='arrdir'/></span>
              <a className='navhead' href=''>DashBoard</a>
            </div>
          </div>
        </div>
        <div className='mainbox'>
          <h6 className='aboutname'>DashBoard</h6>
        </div>
    </section>
  )
}

export default Dashboard