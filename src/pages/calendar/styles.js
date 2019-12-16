import { Dimensions, StyleSheet } from "react-native";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;
const styles: any = StyleSheet.create({
  calendar:{
    opacity:0.5,
    backgroundColor: '#343434',
    borderRadius: 35,
  },
  bottomBtnOutline:{
    width:w*0.3*0.7,
    height:w*0.3*0.42,
    backgroundColor: '#A19494',
    borderRadius: 5,
    borderColor:'#707070',
    borderWidth:2,
    flex:1,
  },
  bottomBtn:{
    width:w*0.2*0.7,
    height:w*0.2*0.42,
    resizeMode:'center',
    flex: 1,
    alignSelf:'center'
  }
});
export default styles;
