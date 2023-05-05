import { useParams } from "react-router-dom";
import { useGetCoinDetailsQuery } from "../services/cryptoApi";

const Coin = () => {
    const {id}=useParams()
    const {data}=useGetCoinDetailsQuery(id)
    console.log(data)
    return ( <>{id}</> );
}
 
export default Coin;