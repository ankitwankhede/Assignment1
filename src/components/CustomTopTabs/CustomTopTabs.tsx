import {View, Text, TouchableOpacity, Animated} from 'react-native';
import LeftArrowSVG from '../../assets/svg/LeftArrowSVG';
import RightArrowSVG from '../../assets/svg/RightArrowSVG';

const CustomTopTabs = ({state, descriptors, navigation, position}) => {
  return (
    <View style={{flex: 0.3, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderRadius: 5,
            padding: 5,
            backgroundColor: '#E0E0E0',
          }}>
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
                style={{
                  backgroundColor: isFocused ? 'white' : '#E0E0E0',
                  paddingVertical: 5,
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}
                onPress={onPress}
                accessibilityState={isFocused ? {selected: true} : {}}>
                <Animated.Text style={{color: 'black'}}>{label}</Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <LeftArrowSVG />
        </TouchableOpacity>

        <View>
          <Text>Apr 21 - Apr 27</Text>
        </View>

        <TouchableOpacity>
          <RightArrowSVG />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            borderWidth: 0.2,
            marginHorizontal: 20,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          <Text>Offline</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            borderWidth: 0.2,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          <Text>Virtual</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomTopTabs;
