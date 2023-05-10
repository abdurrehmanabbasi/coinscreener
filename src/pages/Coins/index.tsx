import { Link } from "react-router-dom";
import { useGetCoinsQuery } from "../../services/cryptoApi";
import Loading from "../Loading";
import millify from "millify";
import { ArrowDownIcon, ArrowUpIcon, StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addCoin } from "../../services/watchlistSlice";

const Coins = () => {
    const { data, isFetching } = useGetCoinsQuery({})
    const dispatch = useDispatch()
    return (<div className="flex items-center justify-center min-h-screen ">
        {isFetching === false ? <table className="text-center table-auto w-full">
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
                        <td><button onClick={() => {dispatch(addCoin(coin?.id)) }}> <StarIcon className="w-6 " /> </button> {coin?.market_cap_rank}</td>
                        <td className="p-2 font-bold"><span className="flex"> <img src={coin?.image} className="w-6 h-6" alt="" /><Link to={`/coin/${coin?.id}`} > {coin?.name}</Link></span></td>
                        <td className="p-2 text-right">${coin?.current_price}</td>
                        <td className="p-2 text-right">{coin?.price_change_percentage_24h > 0 ? <span className="text-green-500 "><ArrowUpIcon className="w-6 inline-block" />{coin?.price_change_percentage_24h + '%'}</span> : <span className="text-red-500 "><ArrowDownIcon className="w-6 inline-block" />{coin?.price_change_percentage_24h + '%'}</span>}</td>
                        <td className="p-2 text-right hidden md:block">{millify(Number(coin?.market_cap))}</td>
                    </tr>
                ))}
            </tbody>
        </table> : < Loading />}
    </div>);
}

export default Coins;