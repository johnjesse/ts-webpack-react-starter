import * as React from 'react';
import * as ReactDom from 'react-dom';
import { App } from './App';

const element = document.getElementById('app-entry')!;

ReactDom.render(<App />, element);