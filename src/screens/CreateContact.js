import React, {Component} from 'react';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {saveContactAPI} from '../redux/action/contactAction';
import {View, StyleSheet} from 'react-native';
import CustomTextInput from '../components/customTextField';
import CustomImage from '../components/customImage';
import CustomHeader from '../components/customHeader';

class CreateContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      photo: 'N/A',
    };
  }

  _handleSaveContact = () => {
    this.props.saveContact({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      photo: this.state.photo,
    });
    this._clearText();
    this.props.navigation.navigate('ContactList');
  };

  _handleChangeText = (value) => {
    this.setState(value);
  };

  _handleBackButton = () => {
    this.props.navigation.goBack();
  };

  _clearText = () => {
    this.setState({
      firstName: '',
      lastName: '',
      age: '',
    });
  };

  render() {
    return (
      <>
        <CustomHeader
          title="Create Contact"
          shouldBack={true}
          onBackPress={this._handleBackButton}
        />
        <View style={styles.imageContainer}>
          <CustomImage source={require('../assets/user.png')} />
        </View>
        <CustomTextInput
          label="First Name"
          value={this.state.firstName}
          id="firstName"
          onInputChange={this._handleChangeText}
        />
        <CustomTextInput
          label="Last Name"
          value={this.state.lastName}
          id="lastName"
          onInputChange={this._handleChangeText}
        />
        <CustomTextInput
          label="Age"
          keyboardType="numeric"
          value={this.state.age}
          id="age"
          onInputChange={this._handleChangeText}
        />
        <View style={styles.button}>
          <Button
            onPress={this._handleSaveContact}
            icon="check"
            mode="contained"
            color="#3498db"
            dark
            loading={this.props.isLoading}>
            Save
          </Button>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: '10%',
  },
});

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  saveContact: (data) => dispatch(saveContactAPI(data)),
});

export default connect(reduxState, reduxDispatch)(CreateContact);
