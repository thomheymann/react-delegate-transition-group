# React Delegate Transition Group

Low-level API for custom animations.

Essentially the same as [react-transition-group](https://github.com/reactjs/react-transition-group) except that lifecycle hooks (called when children are added or removed) are handled by the parent component rather than its children.


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
        const parent = findDOMNode(this);
        const child = findDOMNode(component);
        const { height } = child.getBoundingClientRect();
        parent.style.height = `${height}px`;
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

* `onAppear(component, callback)` - Called at the same time as componentDidMount() for components that are initially mounted in a DelegateTransitionGroup. 

    It will block other animations from occurring until callback is called. It is only called on the initial render of a DelegateTransitionGroup

* `onEnter(component, callback)` - Called at the same time as componentDidMount() for components added to an existing DelegateTransitionGroup. 

    It will block other animations from occurring until callback is called. It will not be called on the initial render of a TransitionGroup.

* `onLeave(component, callback)` - Called when the child has been removed from the DelegateTransitionGroup. 

    Though the child has been removed, DelegateTransitionGroup will keep it in the DOM until callback is called.

