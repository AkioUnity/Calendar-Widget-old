import { Dimensions,StyleSheet } from "react-native";
const h=Dimensions.get('window').height;
const w=Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  backgroundImage: {
    width:w,
    height:h-24,
    resizeMode: 'stretch', // or 'stretch'
  },
  title:{
    fontSize:28,
    fontWeight: 'bold',
    color:'#000',
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowRadius: 10,
    textShadowOffset: { width: 1, height: 1 },
  }
});
export default styles;
