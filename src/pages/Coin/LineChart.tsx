import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { useGetChartDataQuery } from '../../services/cryptoApi';
import Loading from '../Loading';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);
interface Props {
    id: string;
}

const options = {

    responsive: true,
    plugins: {
        
    },
}
export function LineChart({ id }: Props) {
    const { data, isFetching } = useGetChartDataQuery(id)
    const coinChartData = data?.prices.map((value: number[]) => ({ x: value[0], y: value[1].toFixed(4) }))

    return (
        <>
            {isFetching ? <Loading /> :
                <Line options={options}
                    data={{
                        labels: coinChartData.map((value: { x: moment.MomentInput; }) => moment(value.x).format('D MMM')),
                        datasets: [{
                            label: id,
                            data: coinChartData.map((val: { y: any; }) => val.y),
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            fill:true
                        }
                        ]
                    }} />
            }
        </>)
}
