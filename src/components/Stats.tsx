import formatNumber from "../utils/formatNumber";
interface Props{
    title:string;
    value:number
}
const Stats = ({title,value}:Props) => {
    return ( 
        <div className="md:w-2/3 w-full  p-3 h-36 mt-10 flex items-center justify-center rounded-md text-2xl bg-gradient-to-r from-sky-400 to-sky-700">
          <span className="">{title} <span className="font-bold font-mono">{formatNumber(value)}</span></span>
        </div>
     );
}
 
export default Stats;