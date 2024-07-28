//https://mantine.dev/charts/area-chart/k
import {LineChart} from '@mantine/charts';
import {Container, Space, Title} from "@mantine/core";
import {getSP500Data} from "../../Repository.js";

function SPChart() {
    return (
        <>
            <Container>
                <Title order={1} align="center">S&P</Title>
                <Space h="lg"/>
                <LineChart
                    h= {200}
                    w= {900}
                    strokeWidth = {4}
                    data={realData()}
                    dataKey="date"
                    yAxisProps={{ domain: getYAxisDomain(data) }}
                    unit="$"
                    series={[
                        { name: 'SP', color: 'green.3' },
                    ]}
                    curveType="natural"
                />
            </Container>
        </>
    );
}

function getYAxisDomain(data) {
    const values = data.map((item) => item.SP);
    const min = Math.min(...values);
    const max = Math.max(...values);
    return [min - 100, max + 100];
}

const realData = async () => {
    //get sp data
    let rawData = await getSP500Data();
    console.log(rawData);
    return mapData(rawData);
}

function mapData(rawData) {
    console.log(rawData)
    return rawData.map(data => ({
        date: new Date(data.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
        SP: data.close,
    }));
}
const data = [
    {
        date: 'Mar 22',
        SP: 2890,
    },
    {
        date: 'Mar 23',
        SP: 2756,
    },
    {
        date: 'Mar 24',
        SP: 3322,
    },
    {
        date: 'Mar 25',
        SP: 3470,
    },
    {
        date: 'Mar 26',
        SP: 3129,
    },
];

export default SPChart;
