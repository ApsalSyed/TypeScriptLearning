import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface DetailAtomProps {
  lable: any;
  desc: any;
  lableStyle?: TextStyle;
  descStyle?: TextStyle;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  disable?: boolean;
}

const DetailAtom: React.FC<DetailAtomProps> = ({
  lable = 'lable',
  desc = 'desc',
  lableStyle,
  containerStyle,
  descStyle,
  onPress,
  disable = true,
}) => {
  return (
    <View style={[style.container, containerStyle]}>
      <Text style={[style.lable, lableStyle]}>{lable}</Text>
      <TouchableOpacity onPress={onPress} disabled={disable}>
        <Text style={[style.desc, descStyle]}>{desc}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailAtom;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    padding: 20,
  },
  lable: {
    color: 'Black',
  },
  desc: {
    color: 'Black',
  },
});
