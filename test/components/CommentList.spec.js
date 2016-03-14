/**
 * Created by john on 2016/2/25.
 */
import React from 'react';
import CommentList from '../../src/components/CommentList';
import { mount } from 'enzyme';

describe('(Component) CommentList',() => {

    it('calls componentDidMount',() => {
        const props = {
            onMount: () => {},
            isActive: false
        };
        sinon.spy(CommentList.prototype, 'componentDidMount');
        const wrapper = mount(<CommentList {...props} />);
        expect(CommentList.prototype.componentDidMount.calledOnce).to.be.true;
        CommentList.prototype.componentDidMount.restore();
    });
    
    it('call onMount prop once it mounts',() => {
        const props = {
            onMount: sinon.spy()
        };
        mount(<CommentList {...props} />);
        expect(props.onMount.calledOnce).to.be.true;
    });

});