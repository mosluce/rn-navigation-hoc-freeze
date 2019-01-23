import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";
import { withNavigation } from 'react-navigation';
import { compose } from 'recompose';
import { withMyContext } from './MyContext';

const CC = ({ navigation, count, addCount }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{count}</Text>
    <Button
      title="ADD"
      onPress={() => addCount()}
    />
  </View>
)

const DrawerButton = withNavigation(({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <View>
      <Text>OPEN</Text>
    </View>
  </TouchableOpacity>
))

CC.navigationOptions = ({
  headerLeft: <DrawerButton />
})

export default compose(
  withMyContext,
)(CC);