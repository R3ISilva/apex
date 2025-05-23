import { Container, Space, Title } from "@mantine/core";
import { LineChart} from '@mantine/charts';
import { useEffect, useState } from 'react';
import {getSP500Data} from "../../Repository.js";

function SPChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let rawData = await getSP500Data();
            let mappedData = mapData(rawData);
            setData(mappedData);
        };
        fetchData();
    }, []);

    function getYAxisDomain(data) {
        const values = data.map((item) => item.SP);
        const min = Math.min(...values);
        const max = Math.max(...values);
        return [min - 100, max + 100];
    }

    function mapData(rawData) {
        let mappedData = Object.entries(rawData["Time Series (Daily)"]).map(([date, values]) => ({
            date: formatDate(date),
            SP: parseFloat(values["4. close"]),
            Portfolio: parseFloat(values["4. close"]) + Math.random() * 50
        })).reverse();

        return removeEntriesInData(mappedData);
    }


    function removeEntriesInData(data) {
        return data.filter((item, index) => index % 5 === 0);
    }

    function formatDate(dateString) {
        const options = { month: 'short', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    return (
        <>
            <Container>
                <Title order={1} align="center">S&P vs Portfolio</Title>
                <Space h="lg" />
                <LineChart
                    h={200}
                    strokeWidth={2}
                    data={data}
                    withDots={false}
                    dataKey="date"
                    yAxisProps={{ domain: getYAxisDomain(data) }}
                    unit="$"
                    series={[
                        { name: 'SP', color: 'red.3' },
                        { name: 'Portfolio', color: 'green.3' },
                    ]}
                    curveType="natural"
                />
            </Container>
        </>
    );
}

export default SPChart;
