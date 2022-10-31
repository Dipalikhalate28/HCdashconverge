import React from 'react'
import '../style/services.css'
import { partnersimage } from '../images/svgexports'
import { clientsimage } from '../images/svgexports'

function Services() {
  return (
    <div className='services'>
        <div className="services-text">
            <div>Services</div>
            <div>A platform connecting partners and clients for improved and efficient collaboration.</div>
        </div>
        <div className="partners">
            <div className='image'>
                {partnersimage}
            </div>
            <div className="partner-features">
                <div style={{fontSize:'30px', fontWeight:'600', color:'#5D2EAB'}}>For Partners</div>
                <div className='feature'>Feature #1</div>
                <div className='feature'>Feature #1</div>
                <div className='feature'>Feature #1</div>
                <div className='cnt-btn'>Let's Connect</div>
            </div>

        </div>
        <div className="clients">
            <div className="client-features">
                <div style={{fontSize:'30px', fontWeight:'600', color:'#5D2EAB'}}>For Clients</div>
                <div className='feature'>Feature #1</div>
                <div className='feature'>Feature #1</div>
                <div className='feature'>Feature #1</div>
                <div className='cnt-btn'>Let's Connect</div>
            </div>
            <div className='image'>
                {clientsimage}
            </div>

        </div>
    </div>
  )
}

export default Services