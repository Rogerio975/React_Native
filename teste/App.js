import React from 'react';
 import { NativeModules, LayoutAnimation, Text, TouchableOpacity,
     StyleSheet, View, } from 'react-native';

 const { UIManager } = NativeModules;

 UIManager.setLayoutAnimationEnabledExperimental &&
     UIManager.setLayoutAnimationEnabledExperimental(true);

 export default class App extends React.Component {
     state = {w: 200, h: 200, };

     _onPress = () => {
     LayoutAnimation.spring();
     this.setState({w: this.state.w - 5, h: this.state.h - 5})
     }

     render() {
     return (
         <View style={styles.container}>
         <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
         <TouchableOpacity onPress={this._onPress}>
             <View style={styles.button}>
             <Text style={styles.buttonText}>Pressione para diminuir o quadrado</Text>
             </View>
         </TouchableOpacity>
         </View>
     );
     }
 }

 const styles = StyleSheet.create({
     container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'red',
     },
     box: {
     width: 200,
     height: 200,
     backgroundColor: '#00FF00',
     },
     button: {
     backgroundColor: '#FFD700',
     paddingHorizontal: 20,
     paddingVertical: 15,
     marginTop: 15,
     },
     buttonText: {
     color: 'black',
     fontWeight: 'bold',
     },
 });