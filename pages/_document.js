import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
        <Html lang="en">
            <Head>
                <meta name="description" content="A site for my programming portfolio" />
                <meta charSet='utf-8'/>  
                <meta name="robots" content="noindex, nofollow" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200;300;400;600&display=swap" rel="stylesheet" />  
            </Head>
            <body>
                <Main />
                <NextScript />   
            </body>
            <style global jsx>{`
                body {
                    font-family: 'Yanone Kaffeesatz', sans-serif;
                    font-size: 120%;
                }
            `}</style>
                
        </Html>
        )
    }
}
