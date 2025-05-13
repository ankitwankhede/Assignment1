import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  topBtnRow: {
    flexDirection: 'row',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#E0E0E0',
  },
  bottomBtnRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomBtn: {
    borderRadius: 10,
    borderWidth: 0.2,
    marginHorizontal: 20,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabs: {
    paddingVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default Styles;
