import React from 'react'
import '../style/converge.css'
import { convergeimg } from '../images/svgexports'

function Converge() {
  return (
    <div className='converge'>
      <div style={{ color: '#5D2EAB', fontWeight: '700' }}>
        <div style={{ fontSize: '60px', fontStyle: 'italic' }}>Converge</div>
        <div style={{ fontWeight: '600', fontSize: '30px' }}><span style={{ fontStyle: 'italic' }}>by {'\u00A0'} </span><span style={{ color: '#648FFF' }}> human</span><span style={{ color: '#648FFF', fontWeight: '400' }}>cloud</span></div>
      </div>
      <div className='image'>
        {convergeimg}

      </div>
    </div >
  )
}

export default Converge