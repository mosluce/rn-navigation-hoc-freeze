import React from 'react';
import {
  View,
  Button,
} from "react-native";
import {
  createDrawerNavigator,
  withNavigation,
} from 'react-navigation';
import C from './C';
import D from './D';
import SomeHoc from './SomeHoc'
import { compose } from 'recompose';

const B = createDrawerNavigator({
  C,
  D,
});

class ComB extends React.PureComponent {
  static router = B.router;

  render() {
    console.log('[x]', this.props.navigation);

    return <B navigation={this.props.navigation} />
  }
}

export default compose(
  SomeHoc,
)(ComB);

// export default ComB;