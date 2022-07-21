import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Fernando Tinoco Ramírez" />
        <link rel="dns-prefetch" href="http://res.cloudinary.com"></link>
        <script defer src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"></script>
        <script defer src="https://www.goat1000.com/jquery.tagcanvas.min.js"></script>
      </Head>
      <body>
        <Main />
        
        <NextScript />
      </body>
    </Html>
  )
}