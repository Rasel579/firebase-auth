import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

class SignUpForm extends Component{    
    state = { phone : '' }; //es2017
   
    handleSubmit = () => { //es2017 that's why we are not using bind(this) on eventHandler
       
    }

    render(){
      return (
          <View style={{ marginTop: 100, marginLeft: 20, marginRight: 20 }}>
              <View style={{ marginBottom: 20 }}>
                 <Input shake={true} label="Enter Your Phone" labelStyle={{ fontSize: 30 }}
                 value={this.state.phone}
                 onChangeText={phone => this.setState({ phone })}
                  />
              </View>
              <Button 
                title='Submit' 
                onPress={this.handleSubmit}
              />
          </View>
      );
    }
}

export default SignUpForm;