import RenderHourly from '../lib/components/RenderHourly'
import RenderHourCard from '../lib/components/RenderHourCard'
import React from 'react'
import { shallow, mount } from 'enzyme'
import StubData from './StubData'
import cleanHourlyData from '../lib/cleanHourlyData'

describe('RenderHourCard', () => {
  it('should display the specific hour on the card', () => {
    const hourData = cleanHourlyData(StubData);
    const wrapper = shallow(< RenderHourCard hourWeather = {hourData} />);
    const firstHour = wrapper.node.props.children[0].props.children[0].props.children;

    expect(firstHour).toEqual('11:00 AM')
  });

  it('should display the projected temperature by hour on the card', () => {
    const hourData = cleanHourlyData(StubData);
    const wrapper = shallow(< RenderHourCard hourWeather = {hourData} />);
    const firstHourTemp = wrapper.node.props.children[0].props.children[2].props.children;

    expect(firstHourTemp[0]).toEqual('65')
  });
});
