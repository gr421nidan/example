import {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ThemeProvider} from "@/app/providers/ThemeProvider.tsx";
import MainPage from "@/pages/main/mainPage.tsx";

const client = new QueryClient({
    defaultOptions: {
        mutations: {
            retry: false,
            networkMode: "always",
        },
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            networkMode: "always",
        },
    },
});

const App = (): ReactNode => {
    return (
        <ThemeProvider>
            <QueryClientProvider client={client}>
                <ReactQueryDevtools initialIsOpen={false}/>
                <MainPage/>
            </QueryClientProvider>
        </ThemeProvider>


    );
};

export default App;
