import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-octagon/lib/styles/semantic.css'
import * as ChartUtils from 'react-octagon/lib/components/charts/Chart/utils'
import Button from 'react-octagon/lib/components/suir/button/Button'
import CircleChart from 'react-octagon/lib/components/charts/CircleChart/Circle'
import Container from 'react-octagon/lib/components/suir/container/Container'
import Divider from 'react-octagon/lib/components/suir/divider/Divider'
import Dropdown from 'react-octagon/lib/components/suir/dropdown/Dropdown'
import Form from 'react-octagon/lib/components/suir/form/Form'
import Grid from 'react-octagon/lib/components/suir/grid/Grid'
import Header from 'react-octagon/lib/components/suir/header/Header'
import Icon from 'react-octagon/lib/components/suir/icon/Icon'
import Image from 'react-octagon/lib/components/suir/image/Image'
import LargeCard from 'react-octagon/lib/components/LargeCard/LargeCard'
import List from 'react-octagon/lib/components/suir/list/List'
import Message from 'react-octagon/lib/components/suir/message/Message'
import Popup from 'react-octagon/lib/components/suir/popup/Popup'
import Segment from 'react-octagon/lib/components/suir/segment/Segment'
import ThinCard from 'react-octagon/lib/components/ThinCard/ThinCard'
import palette from 'react-octagon/lib/palette'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
