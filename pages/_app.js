import Layout from "../components/Layout";
import ThemeProvider from "../contexts/ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { title } = Component().props;
  console.log(pageProps);
  return (
    <ThemeProvider>
      <Layout title={title}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
