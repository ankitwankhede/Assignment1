import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topRowFirstCol: {
    alignContent: 'center',
    flexDirection: 'row',
    marginVertical: 7,
    gap: 10,
  },
  topRowSecondCol: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 30,
  },
  bottomRowFlatlistItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderColor: '#DDDBDA',
    borderWidth: 0.7,
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 7,
  },
  bottomRowFlatlistItemSlot: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#F6D9A1',
  },
});
export default Styles;
