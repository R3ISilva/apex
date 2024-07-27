import {Grid, Skeleton, Container} from '@mantine/core';

const child = <Skeleton height={140} radius="md" animate={false} />;
function GridTest() {
    return (
        <Container my="md">
            <Grid>
                <Grid.Col span={{ base: 12, xs: 12 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12 }}>{child}</Grid.Col>
            </Grid>
        </Container>
    );
}

export default GridTest;
