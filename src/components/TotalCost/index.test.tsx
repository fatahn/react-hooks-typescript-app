import React from 'react';
import ReactDOM from 'react-dom';
import TotalCost from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TotalCost />, div);
  ReactDOM.unmountComponentAtNode(div);
});
