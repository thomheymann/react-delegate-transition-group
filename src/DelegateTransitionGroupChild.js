import PropTypes from 'prop-types';
import { Component } from 'react';

class DelegateTransitionGroupChild extends Component {

    static propTypes = {
        children: PropTypes.node,
        onAppear: PropTypes.func,
        onEnter: PropTypes.func,
        onLeave: PropTypes.func
    };

    componentWillAppear(callback) {
        const { onAppear } = this.props;

        if (onAppear) {
            onAppear(this, callback);
        } else {
            callback();
        }
    }

    componentWillEnter(callback) {
        const { onEnter } = this.props;

        if (onEnter) {
            onEnter(this, callback);
        } else {
            callback();
        }
    }

    componentWillLeave(callback) {
        const { onLeave } = this.props;

        if (onLeave) {
            onLeave(this, callback);
        } else {
            callback();
        }
    }

    render() {
        return this.props.children;
    }
}

export default DelegateTransitionGroupChild;
