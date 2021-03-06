import React from 'react';
import { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';


const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
