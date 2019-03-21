import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import  axios  from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-ad510.cloudfunctions.net'

class SignInForm extends Component {
    
    state = { phone: '', code: ''};

    handleSubmitCode = async () => {
        try{
            let response = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
                phone: this.state.phone,
                code: this.state.code
                });
        } catch(err){
              console.log(err);
        };
        

     }


    render(){
         console.log(this.state.phone, this.state.code);
        return (
            <View style={{borderWidth: 3, borderRadius: 10, marginTop: 80, paddingBottom: 20, marginLeft: 20, marginRight: 20 }}>
                <Input
                  containerStyle={{ marginTop: 80 }}
                  label="Enter Your Phone"
                  labelStyle={{ fontSize: 30 }}
                  shake={true}
                  value={this.state.phone}
                  onChangeText={phone => this.setState({ phone })}
                 />
                <Input 
                   containerStyle={{ marginTop: 20, marginBottom: 20 }}
                   label="Enter Your Code"
                   labelStyle={{ fontSize: 30 }}
                   shake={true}
                   value={this.state.code}
                   onChangeText={ code => this.setState({ code })}  
                />
                <Button 
                  title='Submit'
                  onPress={this.handleSubmitCode}
                />
            </View>
        );
    }
} 

export default SignInForm;