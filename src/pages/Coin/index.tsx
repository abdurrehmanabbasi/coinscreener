import { useParams } from "react-router-dom";
import { useGetCoinDetailsQuery } from "../../services/cryptoApi";
import { } from '@heroicons/react/20/solid';
import Head from "./Head";
import Loading from "../Loading";
import { LineChart } from "./LineChart";
import parse from "html-react-parser"
const Coin = () => {
    const { id } = useParams()
    const { data, isSuccess } = useGetCoinDetailsQuery(id)
    console.log(data)
    return (<>
        {isSuccess ? <div className="flex flex-col gap-2 ">
            <Head rank={data?.market_cap_rank} name={data?.name} symbol={data?.symbol} currentprice={data?.market_data.current_price.usd} changepercentage={data?.market_data.price_change_percentage_24h} low={data?.market_data.low_24h.usd} high={data?.market_data.high_24h.usd} mktcap={data?.market_data.market_cap.usd} vol={data?.market_data.total_volume.usd} maxsupply={data?.market_data.max_supply} totalsupply={data?.market_data.total_supply} />
        </div>
            :
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Loading /></div>}

        <div className="flex mt-10">
            <div className="w-1/2 mt-10">
                <p className="font-bold underline">7 Day Market Data Chart</p>
                <LineChart id={id as string} />
            </div>
            <div className="w-1/2">
                <p className="font-bold underline">Description</p>
                {parse('<p class="[&>a]:underline">'+data?.description.en+'</p>' )}
            </div>
        </div>

    </>
    );
}

export default Coin;