import { Dimensions, StyleSheet } from "react-native";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;
const styles: any = StyleSheet.create({
  container: {
    backgroundColor: '#473F3F',
  },
  imageThumbnail:{
    width:w*0.3,
    height:w*0.21,
    resizeMode:'contain',
  },
  itemText:{
    textAlign: "center",
    color: "#FFF",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-10,
  },
  bottomBtn:{
    marginTop:-10,
    width:w*0.55,
    height:w*0.25,
    resizeMode:'contain',
    alignSelf:'center',
  }
});
export default styles;
