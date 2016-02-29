/**
 * Created by john on 2016/2/25.
 */
import React, { Component,PropTypes } from 'react';

const propTypes = {
    onMount: PropTypes.func.isRequired,
    isActive: PropTypes.bool
};

class CommentList extends Component {
    componentDidMount(){
        this.props.onMount();
    }

    render(){
        return (
            <ul>
                <li>hello react</li>
            </ul>
        );
    }
}

CommentList.propTypes = propTypes ;

export default CommentList;