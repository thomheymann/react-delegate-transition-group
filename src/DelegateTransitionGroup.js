import DelegateTransitionGroupChild from './DelegateTransitionGroupChild';
import TransitionGroup from 'react/lib/ReactTransitionGroup';
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
        const { onAppear, onEnter, onLeave, ...rest } = this.props;

        return createElement(TransitionGroup, { ...rest, childFactory: this._wrapChild });
    }
}

export default DelegateTransitionGroup;
