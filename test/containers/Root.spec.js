/**
 * Created by john on 2016/2/24.
 */
import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../src/containers/Root';

describe('(Container) Root',()=>{
    it('renders as a <div>',()=>{
        const wrapper = shallow(<Root />);
        expect(wrapper.type()).to.eql('div');
    });

    it('has style with height 100%',()=>{
        const wrapper = shallow(<Root />);
        const expectedStyles = {
            height: '100%',
            background: '#333'
        };
        expect(wrapper.prop('style')).to.eql(expectedStyles);
    });

    it('contains a header wxplaining the app',()=>{
        const wrapper = shallow(<Root />);
        expect(wrapper.find('.welcome-header')).to.have.length(1);
    });
});