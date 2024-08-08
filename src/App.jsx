import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import {MantineProvider, Space} from '@mantine/core';
import {Welcome} from "./components/Welcome/Welcome.jsx";
import {ColorSchemeToggle} from "./components/ColorSchemeToggle/ColorSchemeToggle.jsx";
import SPChart from "./components/SPChart/SPChart.jsx";
import {AvailableCurrency} from "./components/AvailableCurrency/AvailableCurrency.jsx";


function App() {
    return <MantineProvider>{RealApp()}</MantineProvider>
}

function RealApp() {
    return (
        <>
            <Welcome/>
            <Space h="xl"/>
            <AvailableCurrency/>
            <SPChart></SPChart>
            <ColorSchemeToggle />
        </>
    )
}

export default App
