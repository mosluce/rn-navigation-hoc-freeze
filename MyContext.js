import React from 'react';
import hoist from 'hoist-non-react-statics';

const MyContext = React.createContext();

export class MyProvider extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    console.log('[x]', 'addCount')
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <MyContext.Provider value={{
        ...this.state,
        addCount: this.addCount,
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export const withMyContext = (WrappedComponent) => {
  class WithMyContext extends React.Component {
    render() {
      return (
        <MyContext.Consumer>
          {context => {
            const props = {
              ...this.props,
              ...context,
            };

            return (
              <WrappedComponent {...props} />
            )
          }}
        </MyContext.Consumer>
      )
    }
  }

  return hoist(WithMyContext, WrappedComponent);
}