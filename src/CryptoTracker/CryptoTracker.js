import React, { useState, useEffect } from 'react';
import './CryptoTracker.css';
// import FontAwesomeIcon from 'font-awesome'

// This is a mock function to simulate fetching data from an API.
// Replace this with a real API call in your application.
const fetchBitcoinPrice = async () => {
  return {
    "Day": {
      "btcAmount": "3.529020",
      "usdValue": "19153",
      "percentageChange": "-2.32"
    },
    "Month": {
      "btcAmount": "3.600000",
      "usdValue": "19500",
      "percentageChange": "1.8"
    },
    "Weak": {
      "btcAmount": "3.550000",
      "usdValue": "19300",
      "percentageChange": "0.5"
    },
    "years": {
      "btcAmount": "3.700000",
      "usdValue": "20000",
      "percentageChange": "4.5"
    }
  }
  
};

const CryptoTracker = () => {
    const[change,setchange]=useState(false)
    const[Crypto,setCrypto]=useState('Day')

  const [bitcoinData, setBitcoinData] = useState(
  );

  useEffect(() => {
    const getBitcoinData = async () => {
      const data = await fetchBitcoinPrice();
      switch(Crypto) {
        case 'Day':
          setBitcoinData(data.Day);
          break;
        case 'Weak':
          setBitcoinData(data.Weak);
          break;
          case 'Month':
            setBitcoinData(data.Month);
          break;
          case 'Year':
            setBitcoinData(data.years);
          break;

        default:
        
      }
      
    };

    getBitcoinData();
  }, [Crypto]);

  return (
    <>
    <div className="crypto-tracker">
      <div className="currency-type">
        <div className="currency-icon"><img src='https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=031' width={30}/>  <span style={{color:'black', marginLeft:"10px"}}>bitcoin</span></div> 
        <div className="currency-code" style={{color:'bisque'}}>BTC</div>
      </div>
      <div className="currency-value">
        <span className="btc-amount">{bitcoinData?.btcAmount} BTC</span>
       
      </div>
      <div className='currency-data'>
      <div className="usd-value">${bitcoinData?.usdValue} USD</div>
      <div className={`percentage-change ${bitcoinData?.percentageChange.startsWith('-') ? 'negative' : 'positive'}`}>
        {bitcoinData?.percentageChange}%
      </div>
      </div>
      <span className='icon_crypto'> 
    {  change?<i class="fa-solid fa-chevron-up fa-bounce" onClick={()=>setchange(false)}></i>:
      <i class="fa-solid fa-chevron-down  fa-bounce"  onClick={()=>setchange(true)} ></i> }
      </span>
     
      
    </div>
    {change && <div className='days'> 
    <span className={Crypto==='Day'?'colrday':'colrdays'} onClick={()=>setCrypto('Day')}> Day</span>
    <span className={Crypto==='Weak'?'colrday':'colrdays'} onClick={()=>setCrypto('Weak')}> Weak</span>
    <span className={Crypto==='Month'?'colrday':'colrdays'} onClick={()=>setCrypto('Month')}> Month</span>
    <span className={Crypto==='Year'?'colrday':'colrdays'}onClick={()=>setCrypto('Year')}> Year</span>
 </div>}
 
    </>
  );
};

export default CryptoTracker;
