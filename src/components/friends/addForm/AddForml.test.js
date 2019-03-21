import React from 'react';
import { shallow } from 'enzyme';
import AddForm from './addForm/AddForm'

describe('Modal', () => {
  it('renders nothing when closed', () => {
    expect(shallow(
      <AddForm onClose={jest.fn()}/>
    )).toMatchSnapshot();
  });

  it('renders when open', () => {
    expect(shallow(
      <AddForm show={true} onClose={jest.fn()}/>
    )).toMatchSnapshot();
  });

  it('calls onClose when button is clicked', () => {
    const onClose = jest.fn();
    const wrapper = shallow(
      <AddForm show={true} onClose={onClose}/>
    );

    wrapper.find('button').simulate('click');
    expect(onClose).toBeCalled();
  });
});
