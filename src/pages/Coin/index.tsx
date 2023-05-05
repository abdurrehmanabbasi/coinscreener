import { useParams } from "react-router-dom";
import { useGetCoinDetailsQuery } from "../../services/cryptoApi";
import { } from '@heroicons/react/20/solid';
import Head from "./Head";

const Coin = () => {
    const { id } = useParams()
    const { data, isSuccess } = useGetCoinDetailsQuery(id)
    console.log(data)
    return (<div className="flex flex-col gap-2">
        {isSuccess ?
            <Head rank={data?.market_cap_rank} name={data?.name} symbol={data?.symbol} currentprice={data?.market_data.current_price.usd} changepercentage={data?.market_data.price_change_percentage_24h} low={data?.market_data.low_24h.usd} high={data?.market_data.high_24h.usd} mktcap={data?.market_data.market_cap.usd} vol={0} maxsupply={0} totalsupply={0} />
            : ""}
    </div>);
}

export default Coin;