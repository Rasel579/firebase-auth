import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-ad510.cloudfunctions.net'

class SignUpForm extends Component{    
    state = { phone: '' }; //es2017
   
    handleSubmit = async () => { //es2017 that's why we are not using bind(this) on eventHandler
    // async/await feature from es2017
    try {
       await axios.post( `${ROOT_URL}/createUser`, { phone: this.state.phone })
       await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
    }   catch(err){
        console.log(err.response.data);
    }
         
    }

    // handleSubmit = () => { //es2017 that's why we are not using bind(this) on eventHandler
    // // async/await feature from es2017
    //    axios.post( `${ROOT_URL}/createUser`, {
    //        phone: this.state.phone
    //    })
    //      .then(() => {
    //          axios.post(`${ROOT_URL}/requestOneTimePassword`, {
    //              phone: this.state.phone
    //          })
    //      })
         
    // }

    render(){
        console.log(this.state);
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