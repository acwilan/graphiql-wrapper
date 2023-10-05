import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyReactComponent from './MyReactComponent';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

ReactDOM.render(
  <FluentProvider theme={teamsLightTheme}>
    <MyReactComponent />
  </FluentProvider>,
  document.getElementById('root')
);
