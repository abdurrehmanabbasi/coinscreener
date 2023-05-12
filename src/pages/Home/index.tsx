import cimg from "../../assets/cimg.png"
import { useGetGlobalQuery } from "../../services/cryptoApi"
import Stats from "./Stats"

const Home = () => {
    const { data } = useGetGlobalQuery({})
    const globalStats: any = data?.data
    return (
    <div className={`w-full lg:justify-between lg:flex `}>
        <div className="lg:w-1/2 w-full flex flex-col items-center">
            <Stats title="Total Coins : " value={globalStats?.active_cryptocurrencies} />
            <Stats title="Total Exchanges: " value={globalStats?.markets} />
            <Stats title="Total Market Cap: " value={globalStats?.total_market_cap.usd} />
        </div>

        <div className="flex justify-center items-center w-full lg:w-1/2 ">
            <img src={cimg} alt="" className=" w-full max-w-7xl" loading="lazy" />
        </div>
    </div>);
}

export default Home;