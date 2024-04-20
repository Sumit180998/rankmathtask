import React, { useState } from 'react'
import './Footer.css'

export default function Footer() {
    const[select, setSelect]=useState('fa-wallet')
  return (
    <footer  className='footer'>
<div className={select==='fa-wallet'?'select':'Nselect'}  onClick={()=>setSelect('fa-wallet')}><i class="fa-solid fa-wallet"></i></div>
<div className={select==='fa-compass'?'select':'Nselect'} onClick={()=>setSelect('fa-compass')}><i class="fa-solid fa-compass"></i></div>
<div className={select==='fa-bell'?'select':'Nselect'}  onClick={()=>setSelect('fa-bell')}><i class="fa-solid fa-bell"></i></div>
<div className={select==='fa-gear'?'select':'Nselect'}  onClick={()=>setSelect('fa-gear')}><i class="fa-solid fa-gear"></i></div>
    </footer>
  )
}
