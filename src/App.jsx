import '@mantine/notifications/styles.css';

import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import {Notifications} from '@mantine/notifications';
import {LandingPage} from "./components/LandingPage";
import '@mantine/notifications/styles.css';


export default function App() {
    return (
        <MantineProvider>
            <Notifications/>
            <LandingPage/>
            <Notifications/>
        </MantineProvider>
    );
}
