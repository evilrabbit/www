import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="light" enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
