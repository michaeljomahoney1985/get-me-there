import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                  var script = document.createElement("script");
                  script.async = 1;
                  script.src = 'https://emrldtp.com/NDgyMjY4.js?t=482268';
                  document.head.appendChild(script);
              })();
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
