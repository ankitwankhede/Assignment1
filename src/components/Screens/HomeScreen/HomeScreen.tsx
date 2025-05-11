import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import Meetup from '../../Meetup/Meetup';
import Event from '../../Event/Event';
import CustomTopTabs from '../../CustomTopTabs/CustomTopTabs';

const MyTabs = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <MyTabs.Navigator tabBar={(props) => <CustomTopTabs {...props} />}>
        <MyTabs.Screen name="Meetup" component={Meetup} />
        <MyTabs.Screen name="Event" component={Event} />
      </MyTabs.Navigator>
    </View>
  );
}
