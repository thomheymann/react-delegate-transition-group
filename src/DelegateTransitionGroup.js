import DelegateTransitionGroupChild from './DelegateTransitionGroupChild';
import PropTypes from 'prop-types';
import { Component, createElement } from 'react';
import { TransitionGroup } from 'react-transition-group';

class DelegateTransitionGroup extends Component {

    static propTypes = {
        onAppear: PropTypes.func,
        onEnter: PropTypes.func,
        onLeave: PropTypes.func
    };

    _wrapChild = (child) => {
        const { onAppear, onEnter, onLeave } = this.props;

        return createElement(DelegateTransitionGroupChild, { onAppear, onEnter, onLeave }, child);
    }

    render() {
        const { onAppear, onEnter, onLeave, ...rest } = this.props;

        return createElement(TransitionGroup, { ...rest, childFactory: this._wrapChild });
    }
}

export default DelegateTransitionGroup;
