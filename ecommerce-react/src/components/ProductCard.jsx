import React, { PureComponent } from 'react'

//import plugin
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

//import css
import '../css/global.scss'
import '../css/footer.scss'
export default class FooterMain extends PureComponent {
  render() {
    return (
      <div className="product-card">
        <div className="product-card-image">
        </div>
        <p className="product-name"></p>
      </div>
    )
  }
}
