import { Link } from "react-router-dom";
import { useGetCoinsQuery } from "../../services/cryptoApi";
import Loading from "../Loading";
import { millify } from "millify";
import { ArrowDownIcon, ArrowUpIcon, StarIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { addCoin } from "../../services/watchlistSlice";
import { RootState } from "../../app/store";

const Coins = () => {
    const { data, isSuccess } = useGetCoinsQuery({})
    const watchlist = useSelector((state: RootState) => state.watchlist)
    const dispatch = useDispatch()
    return (<div className="flex items-center justify-center min-h-screen ">
        {isSuccess ? <table className="text-center table-auto w-full">
            <thead className="border-b-4 border-slate-600 font-bold">
                <tr className="text-center">
                    <th></th>
                    <th className="text-center">Rank #</th>
                    <th className="text-left">Coin</th>
                    <th className="text-left">Price</th>
                    <th className="text-left">Change</th>
                    <th className="text-right  hidden md:block">Mkt Cap</th>
                </tr>
            </thead>
            <tbody>
                {data.map((coin: any, index: number) => (
                    <tr key={index} className="border-b border-slate-600">
                        <td> <button onClick={() => { dispatch(addCoin(coin?.id)) }} className={`${watchlist.includes(coin?.id)?'text-yellow-500':'text-gray-300'}`}> <StarIcon className="w-6 " /> </button></td>

                        <td className="flex justify-around"> {coin?.market_cap_rank} </td>
                        <td className="p-2 font-bold"><span className="flex"> <img src={coin?.image} className="w-6 h-6" alt={`${coin?.name}`} loading="lazy" /> <Link to={`/coin/${coin?.id}`} > {coin?.name}</Link></span></td>
                        <td className="p-2 text-left">${coin?.current_price}</td>
                        <td className="p-2"> {coin?.price_change_percentage_24h > 0 ? <span className="flex text-green-500"><ArrowUpIcon className="w-6 " />{millify(coin?.price_change_percentage_24h)} %</span> : <span className="flex text-red-500"><ArrowDownIcon className="w-6 " />{millify(coin?.price_change_percentage_24h)} %</span>}</td>
                        <td className="p-2 text-right hidden md:block">{millify(Number(coin?.market_cap))}</td>
                    </tr>
                ))}
            </tbody>
        </table> : < Loading />}
    </div>);
}

export default Coins;