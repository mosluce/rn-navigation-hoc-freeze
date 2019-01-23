import React from 'react';
import hoist from 'hoist-non-react-statics';

const SomeHoc = (WrappedComponent) => {
  class ComponentSomeHoc extends React.Component {
    shouldComponentUpdate() {
      return false
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return hoist(ComponentSomeHoc, WrappedComponent);
}

export default SomeHoc;