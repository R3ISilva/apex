import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import {MantineProvider} from '@mantine/core';
import {Welcome} from "./components/Welcome/Welcome.jsx";
import {ColorSchemeToggle} from "./components/ColorSchemeToggle/ColorSchemeToggle.jsx";
import GridTest from "./components/GridTest/GridTest.jsx";


function App() {
    return <MantineProvider>{RealApp()}</MantineProvider>
}

function RealApp() {
    return (
        <>
            <Welcome />
            <GridTest />
            <ColorSchemeToggle />
        </>
    )
}

export default App
