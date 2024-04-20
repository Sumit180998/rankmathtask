import React from 'react'
import './Buysell.css'

function Buysell() {
  return (
    <div className='buysell'>
        <div>
            <span  style={{width:'50px',height:'50px', borderRadius:'50%', background:"#3C6273",marginBottom:'5px'}} ><i class="fa-solid fa-dollar-sign" style={{textAlign:'center',color:'white', padding:"15px",fontSize:"20px"}}></i></span>
            <span style={{fontWeight:900}}>Buy BTC</span>
        </div>
        <div><span style={{width:'50px',height:'50px', borderRadius:'50%', background:"#E07B9D",marginBottom:'5px'}}><i class="fa-solid fa-dollar-sign" style={{textAlign:'center',color:'white', padding:"15px",fontSize:"20px" }}></i></span>
            <span style={{fontWeight:900}}>Sell BTC</span></div>
    </div>
  )
}

export default Buysell