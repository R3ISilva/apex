import {Grid, Skeleton, Container} from '@mantine/core';
import ChartOne from "../SPChart/SPChart.jsx";

const child = <Skeleton height={140} radius="md" animate={false} />;
const chartOne = <ChartOne></ChartOne>

function GridTest() {
    return (
        <Container my="md">
            <Grid>
                <Grid.Col span={{ base: 12, xs: 12 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12 }}>{chartOne}</Grid.Col>
            </Grid>
        </Container>
    );
}

export default GridTest;
