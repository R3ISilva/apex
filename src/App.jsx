import { useState } from 'react'

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import {Center, MantineProvider} from '@mantine/core';
import {Welcome} from "./components/Welcome/Welcome.jsx";
import {ColorSchemeToggle} from "./components/ColorSchemeToggle/ColorSchemeToggle.jsx";
import ChartOne from "./components/ChartOne/ChartOne.jsx";


function App() {
    return <MantineProvider>{RealApp()}</MantineProvider>
}

function RealApp() {
    return (
        <>
            <Welcome />
            <ColorSchemeToggle />
            <Center h={500}>
                <ChartOne />
            </Center>
        </>
    )
}

export default App
