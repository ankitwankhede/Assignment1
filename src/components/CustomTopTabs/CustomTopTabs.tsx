import {View, Text, TouchableOpacity, Animated} from 'react-native';
import Styles from './CustomTopTabsStyle';
import CalenderSelector from '../CalenderSelector/CalenderSelector';

const CustomTopTabs = ({state, descriptors, navigation, position}) => {
  return (
    <View style={{flex: 0.3, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={Styles.topBtnRow}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };
            return (
              <TouchableOpacity
                key={index}
                style={[
                  {
                    backgroundColor: isFocused ? 'white' : '#E0E0E0',
                  },
                  Styles.tabs,
                ]}
                onPress={onPress}
                accessibilityState={isFocused ? {selected: true} : {}}>
                <Animated.Text style={{color: 'black'}}>{label}</Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <CalenderSelector />
      <View style={Styles.bottomBtnRow}>
        <TouchableOpacity style={Styles.bottomBtn}>
          <Text>Offline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.bottomBtn}>
          <Text>Virtual</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomTopTabs;
