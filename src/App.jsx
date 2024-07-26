import { useState } from 'react'

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import { MantineProvider } from '@mantine/core';
import {Welcome} from "./components/Welcome/Welcome.jsx";
import {ColorSchemeToggle} from "./components/ColorSchemeToggle/ColorSchemeToggle.jsx";


function App() {
    return <MantineProvider>{RealApp()}</MantineProvider>
}

function RealApp() {
    const [count, setCount] = useState(0)
    return (
        <>
            <Welcome />
            <ColorSchemeToggle />
        </>
    )
}

export default App
