import Document, { Head, Main, NextScript } from 'next/document'
import { bodyClass } from './_document.style';

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-32x32.png" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        </Head>
        <body className={bodyClass}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
