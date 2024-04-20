import React from 'react';
import './App.css'; // This is where you'll import your CSS
import Header from './header/Header';
import CryptoTracker from './CryptoTracker/CryptoTracker';
import Footer from './Footer/Footer';
import Buysell from './Buysell/Buysell';
import Chart from './chart/Chart';


function App() {
  // This would be replaced with your actual data fetching logic
  const [bitcoinData, setBitcoinData] = React.useState({
    btcAmount: 3.529020,
    usdValue: 19153,
    changePercentage: 2.32,
    lower: 548.985,
    higher: 858.857
  });

  // Normally, you would fetch current Bitcoin data from an API
  // useEffect(() => {
  //   fetchBitcoinData().then(data => setBitcoinData(data));
  // }, []);

  return (
    <div className="app">
      <div className='bitcoin'>
      <header className="app-header" >
        <Header/>
      </header>
      <CryptoTracker/>
      <div className="chart">
       <Chart/>
      </div>
      <Buysell/>
      <Footer/>
      
    </div>
    </div>
  );
}

export default App;

