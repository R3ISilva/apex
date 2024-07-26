import {Button, Group, Text, useMantineColorScheme} from '@mantine/core';

export function ColorSchemeToggle() {
    const { setColorScheme } = useMantineColorScheme();

    return (
        <>
            <br/>
            <Text ta={"center"}>
                Change color scheme:
            </Text>

            <Group justify="center" mt="xl">
                <Button onClick={() => setColorScheme('light')}>Light</Button>
                <Button onClick={() => setColorScheme('dark')}>Dark</Button>
                <Button onClick={() => setColorScheme('auto')}>Auto</Button>
            </Group>
        </>
    );
}
