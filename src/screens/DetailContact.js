import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomHeader from '../components/customHeader';
import CustomTextInput from '../components/customTextField';
import {Button, Snackbar} from 'react-native-paper';
import {connect} from 'react-redux';
import {getContactAPI, editContactAPI} from '../redux/action/contactAction';

class DetailContact extends Component {
  routeId = this.props.navigation.getParam('id');

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
      isDisable: false,
      showDialog: false,
      message: '',
    };
  }

  componentDidMount() {
    this._handleGetContact();
  }

  _handleBackButton = () => {
    this.props.navigation.goBack();
  };

  _handleGetContact = () => {
    this.props
      .getContact(this.routeId)
      .then((response) => {
        this.setState({
          firstName: response.data.data.firstName,
          lastName: response.data.data.lastName,
          age: response.data.data.age.toString(),
          photo: response.data.data.photo,
          isDisable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  _handleEditContact = () => {
    const param = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      photo: this.state.photo,
      id: this.routeId,
    };
    this.props
      .editContact(param)
      .then((response) => {
        this.setState({message: response.data.message});
        this._showSnackbar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  _enableTextInput = () => {
    this.setState({
      isDisable: false,
    });
  };

  _disableTextInput = () => {
    this.setState({
      isDisable: true,
    });
  };

  _handleChangeText = (value) => {
    this.setState(value);
  };

  _showSnackbar = () => {
    this.setState({
      showDialog: true,
    });
  };

  _dismissSnackbar = () => {
    this.setState({
      showDialog: false,
    });
  };

  render() {
    return (
      <>
        <CustomHeader
          title="Detail Contact"
          onBackPress={this._handleBackButton}
          shouldBack={true}
        />
        <CustomTextInput
          label="photo"
          value={this.state.photo}
          isDisable={this.state.isDisable}
          id="photo"
          onInputChange={this._handleChangeText}
        />
        <CustomTextInput
          label="First name"
          value={this.state.firstName}
          isDisable={this.state.isDisable}
          id="firstName"
          onInputChange={this._handleChangeText}
        />
        <CustomTextInput
          label="Last name"
          value={this.state.lastName}
          isDisable={this.state.isDisable}
          id="lastName"
          onInputChange={this._handleChangeText}
        />
        <CustomTextInput
          label="Age"
          keyboardType="numeric"
          value={this.state.age}
          isDisable={this.state.isDisable}
          id="age"
          onInputChange={this._handleChangeText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.innerButtonContainer}>
            {this.state.isDisable ? (
              <Button
                mode="contained"
                icon="pencil"
                onPress={this._enableTextInput}>
                Edit
              </Button>
            ) : (
              <Button
                mode="contained"
                icon="check"
                onPress={() => this._handleEditContact()}
                loading={this.props.isLoading}>
                Save
              </Button>
            )}
          </View>
          <View style={styles.innerButtonContainer}>
            <Button
              mode="contained"
              icon="cancel"
              onPress={this._disableTextInput}>
              Cancel
            </Button>
          </View>
        </View>
        <Snackbar
          visible={this.state.showDialog}
          onDismiss={this._dismissSnackbar}
          action={{
            label: 'OK',
            onPress: () => {
              this.props.navigation.navigate('ContactList');
            },
          }}>
          {this.state.message}
        </Snackbar>
        <View style={styles.container} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  innerButtonContainer: {
    flex: 1,
    marginHorizontal: '10%',
  },
});

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  getContact: (id) => dispatch(getContactAPI(id)),
  editContact: (data) => dispatch(editContactAPI(data)),
});

export default connect(reduxState, reduxDispatch)(DetailContact);
