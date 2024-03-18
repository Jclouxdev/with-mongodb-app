import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="../public/global.css"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}