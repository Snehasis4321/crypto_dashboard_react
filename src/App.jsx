import { useEffect, useState } from 'react'
import './App.css'
import SearchBox from './components/SearchBox'
import TableView from './components/TableView'
import result from './result.json'
function App() {
  const [cryptoData, setCryptoData] = useState([])
  const [searchRes, setSearchRes] = useState([])
  const [searchStr,setSearchStr] = useState("")
  const [nosearchRes,setNosearchRes] = useState(false)
  const callCoinGeckoApi = () => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      })
      .then(response =>
        response.json()
      )
      .then(data => {
        console.log(data);
        setCryptoData(data);

      }).catch(error => {
        console.log("there was an error in fecthing api");
        console.log(error);
      })

  }


  const searchCrypto=(searchStr) => {
    if(searchStr===""){return []}
const res=    cryptoData.filter(item => {
      if(item.name.toLowerCase().includes(searchStr.toLowerCase())){
        return item;
      }
    })
    console.log("here is the result of the search")
    console.log(res)
    // setSearchRes(res)
    if(res.length===0){
      setNosearchRes(true)
    }
    return res
  }

  useEffect(() => {
    // call the api
    callCoinGeckoApi()
    // use the local data 
    // setCryptoData(result)
  }, [])

  useEffect(() => {
    setNosearchRes(false)
    setSearchRes(searchCrypto(searchStr));
  }, [searchStr]);

  return (
    <>
      <div className='p-4'>
        <h1 className='text-4xl font-bold'>Crypto Tracking Dashboard</h1>
        <p className='text-2xl py-3'>Track your favorite crypto coins</p>
      </div>

      <SearchBox searchStr={searchStr} setSearchStr={setSearchStr}/>
      {nosearchRes ? <p className='text-3xl font-bold py-4'>No results found</p> : null}
      {searchRes.length > 0 ? <h1 className='text-3xl font-bold py-4'>Search Results</h1> : null}
      {searchRes.length > 0 ? <TableView data={searchRes? searchRes : []} key={"searched_crypto_data"}/> : null}
    {searchRes?.length>0? null : <TableView data={cryptoData} key={"crypto_data"}/>} 
    </>

  )
}

export default App
