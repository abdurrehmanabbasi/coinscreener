import cimg from "../../assets/cimg.png"
import { useGetGlobalQuery } from "../../services/cryptoApi"
import formatNumber from "../../utils/formatNumber"
import Stats from "./Stats"

const Home = () => {
    const { data } = useGetGlobalQuery({})
    const globalStats: any = data?.data
    console.log(formatNumber(data?.data.total_market_cap.usd))
    return (
    <div className={`w-full lg:justify-between lg:flex `}>
        <div className="lg:w-1/2 w-full flex flex-col items-center">
            <Stats title="Total Coins : " value={globalStats?.active_cryptocurrencies} />
            <Stats title="Total Exchanges: " value={globalStats?.markets} />
            <Stats title="Total Market Cap: " value={globalStats?.total_market_cap.usd} />

        </div>

        <div className="flex justify-center items-center w-full lg:w-1/2 ">
            <img src={cimg} alt="" className=" w-full " />
        </div>
    </div>);
}

export default Home;