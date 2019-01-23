import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import B from './B';
import C from './C';

const navigator = createSwitchNavigator({
  B,
  C,
})

export default createAppContainer(navigator);