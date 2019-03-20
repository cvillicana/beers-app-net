import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './starRating';

it('Paint Certain number of Stars', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rating ratingObj={7}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});