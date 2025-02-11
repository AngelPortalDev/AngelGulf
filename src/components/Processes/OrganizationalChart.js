import React from 'react'
import OrganizationalChartimage from './../../assets/images/organization-flow-chart.jpg';
import { Helmet } from 'react-helmet';

const OrganizationalChart = () => {
  return (
    <div>
      <Helmet>
            <title>Organizational Chart</title>
            <link rel="canonical" href="https://www.angelgulfjobs.com/organizational-chart"/>
      </Helmet>
      <div className='container mb-4 mt-3 d-flex flex-column'>
        <h2 className='text-center blueuText'>ORGANIZATION CHART</h2>
        <img src={OrganizationalChartimage} alt="organization-flow-chart" className='img-fluid mt-3'/>
      </div>
    </div>
  )
}

export default OrganizationalChart
