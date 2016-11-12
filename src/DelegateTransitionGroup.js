import DelegateTransitionGroupChild from './DelegateTransitionGroupChild';
import TransitionGroup from 'react-addons-transition-group';
import { Component, PropTypes, createElement } from 'react';

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
        return createElement(TransitionGroup, { ...this.props, childFactory: this._wrapChild });
    }
}

export default DelegateTransitionGroup;
