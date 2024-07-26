//https://mantine.dev/charts/area-chart/k
import { AreaChart } from '@mantine/charts';

function ChartOne() {
    return (
        <AreaChart
            h={300}
            w={1800}
            strokeWidth = {2}
            data={data}
            dataKey="date"
            series={[
                { name: 'first', color: 'green.3' },
                { name: 'second', color: 'green.1' },
                { name: 'third', color: 'red.1' },
            ]}
            curveType="linear"
        />
    );
}

const data = [
    {
        date: 'Mar 22',
        first: 2890,
        second: 2338,
        third: 2452,
    },
    {
        date: 'Mar 23',
        first: 2756,
        second: 2103,
        third: 2402,
    },
    {
        date: 'Mar 24',
        first: 3322,
        second: 986,
        third: 1821,
    },
    {
        date: 'Mar 25',
        first: 3470,
        second: 2108,
        third: 2809,
    },
    {
        date: 'Mar 26',
        first: 3129,
        second: 1726,
        third: 2290,
    },
];

export default ChartOne;
