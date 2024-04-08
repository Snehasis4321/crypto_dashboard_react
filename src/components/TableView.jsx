import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';



const TableView = ({data}) => {
  return (
    //   <div className='container bg-slate-800 text-white font-semibold'>

    //   </div>
    // sample table in html
    <table className="table-auto w-full">
     <TableHeader/>
      <tbody>
        { data?.map((item,index) => {
          return (
            <TableRow
              key={index}
              index={index+1}
              name={item?.name}
              image={item?.image}
              shortcode={item?.symbol}
              price={item?.current_price}
              change24h={item?.price_change_percentage_24h}
              marketCap={item?.market_cap} 
              maxPrice={item?.ath}
              totalVol={item?.total_volume}
            />
          )
        })

        }
       {/* <TableRow index={1} name={"Bitcoin"} image={"https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"} shortcode={"BTC"} price={"$1,000,000"} change1h={"+0.5%"} change24h={"+0.5%"} change7d={"+0.5%"} marketCap={"$1,000,000"}/> */}
  

      </tbody>
    </table>
  )
}

export const TableHeader = () => {
return(
  <thead>
  <tr>
    <th className="px-4 py-2 h-14">No.</th>
    <th className="px-4 py-2 h-14">Coin</th>
    <th className="px-4 py-2 h-14">Price</th>
    <th className="px-4 py-2 h-14">Max Price</th>
    <th className="px-4 py-2 h-14">24h</th>
    <th className="px-4 py-2 h-14">Market Cap</th>
    <th className="px-4 py-2 h-14">Total Volume</th>
  </tr>
</thead>
)

}

export const TableRow = ({index,name,shortcode,image,price,change24h,maxPrice,marketCap,totalVol}) => {
return(
  <tr>
  <td className="border px-4 py-2  h-14">{index}.</td>
  <td className="border px-4  py-2  h-14">
    <div className='flex justify-center items-center gap-2 px-2'>
      <img src={image} alt={name} className='w-8 space-x-2' />
       <p className=' font-semibold'>{name}</p> 
       <p className=' text-gray-600 font-semibold text-sm'>{shortcode?.toUpperCase()}</p>


    </div>
  </td>
  <td className="border px-4 py-2 h-14">${price}</td>

  <td className="border px-4 py-2 h-14">${maxPrice}

   

  </td>
  <td className="border px-4 py-2 h-14">

    <div className=' flex justify-center items-center gap-2'>
      {
        change24h > 0 ? <FontAwesomeIcon icon={faSortUp} className='text-green-500' /> : <FontAwesomeIcon icon={faSortDown} className='text-red-500' />
      }

     {
      change24h > 0 ? <p className='text-green-600'>{Math.floor(change24h*100)/100}%</p>: <p className='text-red-500'>{Math.floor(Math.abs(change24h)*100)/100}%</p>

     }

 
    </div>
  </td>
  <td className="border px-4 py-2 h-14">${marketCap}</td>
  <td className="border px-4 py-2 h-14">${totalVol}</td>
</tr>
)
}

export default TableView