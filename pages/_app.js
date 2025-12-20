import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Get Me There – Train Routes & Travel Guides Across Europe</title>
        <meta
          name="description"
          content="Find the best train routes in Europe with detailed guides, ticket prices, schedules, and tips. Compare options and plan your perfect journey."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Optional: Open Graph for better social sharing */}
        <meta property="og:title" content="Get Me There – European Train Travel Guides" />
        <meta property="og:description" content="Detailed guides to Europe's best train routes – times, costs, scenic tips and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.get-me-there.com/" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
