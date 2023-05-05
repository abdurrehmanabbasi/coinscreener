import { Link } from "react-router-dom";
import { useGetCoinsQuery } from "../../services/cryptoApi";
import formatNumber from "../../utils/formatNumber";

const Coins = () => {
    const { data,isFetching } = useGetCoinsQuery({})
    console.log(data)
    return (<div>
<table className="w-full text-center">
    <tr>
    <th>#</th>
    <th>Coin</th>
    <th>Price</th>
    <th>Change</th>
    <th>Mkt Cap</th>
    </tr>
    <tbody>
    {
        isFetching ===false?data.map((coin:any,index:number)=>(
            <tr>
                <td>{index+1}</td>
                <td className="flex p-3"> <img src={coin?.image} className="w-6" alt="" /><Link to={`/coin/${coin?.id}`} > {coin?.name}</Link></td>
                <td>{coin?.current_price}</td>
                <td>{coin?.price_change_percentage_24h}</td>
                <td>{formatNumber( coin?.market_cap)}</td>
            </tr>
    )):""
    }
    </tbody>
</table>

    </div>);
}

export default Coins;