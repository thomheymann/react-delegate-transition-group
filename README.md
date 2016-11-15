# React Delegate Transition Group

Low-level API for custom animations.

Essentially the same as [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html#reacttransitiongroup) except that lifecycle hooks (called when children are added or removed) are handled by the container rather than each child component.


## Installation

```
npm install --save react-delegate-transition-group
```


## Usage

```JavaScript
import DelegateTransitionGroup from 'react-delegate-transition-group';
import { createElement } from 'react';
import { findDOMNode } from 'react-dom';

class ExampleAnimation extends Component {

    childWillEnter = (component, callback) => {
        const container = findDOMNode(this);
        const child = findDOMNode(component);
        const { height } = child.getBoundingClientRect();
        container.style.height = `${height}px`;
        setTimeout(callback, 400);
    }

    render() {
        return createElement(DelegateTransitionGroup, { ...this.props, onEnter: this.childWillEnter });
    }
    
}

export default ExampleAnimation;
```

For example implementations see:

* [react-slide-animation](https://github.com/cyberthom/react-slide-animation)
* [react-swap-animation](https://github.com/cyberthom/react-swap-animation)


## Reference

* `onAppear(component, callback)` - Called when components are mounted in a TransitionGroup.

    It will block other animations from occurring until callback is called. It is only called on the initial render of a TransitionGroup.

* `onEnter(component, callback)` -  Called when components are added to an existing TransitionGroup. 

    It will block other animations from occurring until callback is called. It will not be called on the initial render of a TransitionGroup.

* `onLeave(component, callback)` -  Called when the child has been removed from the TransitionGroup. 

    Though the child has been removed, TransitionGroup will keep it in the DOM until callback is called.

