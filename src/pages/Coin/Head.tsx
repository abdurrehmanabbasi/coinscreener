import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
interface Props {
    rank: any;
    name: any;
    symbol: any;
    currentprice: any;
    changepercentage: any;
    low: any;
    high: any;
    mktcap: any;
    vol: any;
    maxsupply: any;
    totalsupply: any;
}
const Head = ({ rank, name, symbol, currentprice, changepercentage, low, high, mktcap, vol, maxsupply, totalsupply }: Props) => {
    return (<div className="flex w-full justify-evenly flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-1/2">
            <div className="flex ">
                <span className="bg-gray-900 p-1 rounded-lg font-thin">{`Rank#${rank}`}</span>
            </div>
            <div className="flex items-baseline gap-x-2">
                <h2 className="text-2xl">{name}</h2>
                <p className="opacity-50">{symbol.toLocaleUpperCase()}</p>
            </div>
            <div className="flex gap-x-2 items-baseline">
                <span className="text-3xl">{currentprice}</span>
                {changepercentage>0? <span className="flex items-baseline text-green-500"><ArrowUpIcon className="w-3" /> {changepercentage}</span>
                :<span className="flex items-baseline text-red-500"><ArrowDownIcon className="w-3" /> {changepercentage}</span>}
            </div>
            <div className="flex items-baseline gap-x-1 w-11/12">
                <span>{low}</span>
                <input type="range" value={ ((currentprice - low) / (high - low)) * 100} className="w-full h-2 bg-gradient-to-r from-red-500 to-green-500 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[10px] [&::-webkit-slider-thumb]:bg-white" />
                <span>{high}</span>

            </div>

        </div>


        <div className="flex flex-col w-full lg:w-1/2">
            <div className="flex justify-between border-b-2 p-1 w-full lg:w-2/3">
                <span className="opacity-75">Market Cap</span>
                <span className="font-bold">{mktcap}</span>
            </div>
            <div className="flex justify-between border-b-2 p-1 w-full lg:w-2/3">
                <span className="opacity-75">Volume 24h</span>
                <span className="font-bold">{vol}</span>
            </div>
            <div className="flex justify-between border-b-2 p-1 w-full lg:w-2/3">
                <span className="opacity-75">Total Supply</span>
                <span className="font-bold">{totalsupply}</span>
            </div>

            <div className="flex justify-between border-b-2 p-1 w-full lg:w-2/3">
                <span className="opacity-75">Max Supply</span>
                <span className="font-bold">{maxsupply}</span>
            </div>
        </div>

    </div>);
}

export default Head;