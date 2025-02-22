import { type ReactNode } from 'react';
import Modal from "react-modal";
import {ThemeProvider} from "@/app/providers/ThemeProvider.tsx";
import MainPage from "@/pages/main/mainPage.tsx";


Modal.setAppElement("#root");
const App = (): ReactNode => (
    <ThemeProvider>
        <MainPage />
    </ThemeProvider>

);

export default App;