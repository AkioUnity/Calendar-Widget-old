import { Dimensions, StyleSheet } from "react-native";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;
const styles: any = StyleSheet.create({
  calendar:{
    opacity:0.5,
    backgroundColor: '#343434',
    borderRadius: 35,
    borderWidth: 1,
    height: h-25
  },
  bottomBtn:{
    width:w*0.35*0.7,
    height:w*0.35*0.42,
    resizeMode:'contain',
    flex: 1,
    alignSelf:'center'
  }
});
export default styles;
