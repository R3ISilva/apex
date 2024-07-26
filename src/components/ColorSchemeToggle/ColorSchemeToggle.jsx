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
                <Button color="gray" onClick={() => setColorScheme('light')}>Light</Button>
                <Button color="gray" onClick={() => setColorScheme('dark')}>Dark</Button>
                <Button color="gray" onClick={() => setColorScheme('auto')}>Auto</Button>
            </Group>
        </>
    );
}
