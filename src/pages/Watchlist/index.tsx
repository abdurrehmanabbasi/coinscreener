import { useGetSelectedCoinsQuery } from "../../services/cryptoApi";
import Loading from "../Loading";
import millify from "millify";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { removeCoin } from "../../services/watchlistSlice";
const Watchlist = () => {
    //Example Watchlist
    const watchlist = useSelector((state:RootState) => state.watchlist)
    console.log(watchlist)
    const dispatch=useDispatch()
    const { data, isSuccess } = useGetSelectedCoinsQuery(watchlist)
    console.log(data)
    return (<div className="flex ">
        {
        watchlist.length>0?
        isSuccess === true ? <table className="text-center table-auto w-full">
            <thead className="border-b-4 border-slate-600 font-bold">
                <tr className="text-center">
                    <th>Rank #</th>
                    <th className="text-left">Coin</th>
                    <th className="text-right">Price</th>
                    <th className="text-right">Change</th>
                    <th className="text-right  hidden md:block">Mkt Cap</th>
                </tr>
            </thead>
            <tbody>
                {data.map((coin: any, index: number) => (
                    <tr key={index} className="border-b border-slate-600">
                        <td>{coin?.market_cap_rank} <button onClick={()=>dispatch(removeCoin(coin?.id))}>Remove</button> </td>
                        <td className="p-2 font-bold"><span className="flex"> <img src={coin?.image} className="w-6" alt="" /><Link to={`/coin/${coin?.id}`} > {coin?.name}</Link></span></td>
                        <td className="p-2 text-right">${coin?.current_price}</td>
                        <td className="p-2 text-right">{coin?.price_change_percentage_24h > 0 ? <span className="text-green-500 "><ArrowUpIcon className="w-6 inline-block" />{coin?.price_change_percentage_24h + '%'}</span> : <span className="text-red-500 "><ArrowDownIcon className="w-6 inline-block" />{coin?.price_change_percentage_24h + '%'}</span>}</td>
                        <td className="p-2 text-right hidden md:block">{millify(Number(coin?.market_cap))}</td>
                    </tr>
                ))}
            </tbody>
        </table> : < Loading />:'Please add Coins'} 
    </div>);
}

export default Watchlist;