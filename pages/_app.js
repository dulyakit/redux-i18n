import React from 'react';
import App from 'next/app';
import wrapper from './redux/store'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps: pageProps }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default wrapper.withRedux(MyApp) 
