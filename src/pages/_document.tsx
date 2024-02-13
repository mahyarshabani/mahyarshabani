import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    const csp = `frame-src 'https://pol.qa.testifi.io/'`;

    return (
        <Html lang="en">
            <Head>
                <meta httpEquiv="Content-Security-Policy" content={csp} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
  )
}
