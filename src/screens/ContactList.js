import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FAB, Snackbar, ActivityIndicator, Colors} from 'react-native-paper';
import {
  StyleSheet,
  FlatList,
  Alert,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import CustomHeader from '../components/customHeader';
import {
  getAllContactAPI,
  deleteContactAPI,
} from '../redux/action/contactAction';
import ContactCard from '../components/contactCard';

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: [],
      message: '',
      showDialog: false,
      refreshing: false,
    };
  }

  _handleContactList = () => {
    this.props
      .getContactList()
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            contactList: res.data.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  _handleDeleteContact = (id) => {
    this.props
      .deleteContact(id)
      .then((res) => {
        this._setMessage(res.message.data.message);
        this._showSnackbar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  _onRefresh = () => {
    this.setState({refreshing: true});
    if (this.state.contactList.length !== 0) {
      this.props
        .getContactList()
        .then((res) => {
          this.setState({contactList: res.data.data});
        })
        .catch((error) => {
          return error;
        });
      this._setRefreshing(false);
    } else {
      ToastAndroid.show('No more data available', ToastAndroid.LONG);
      this._setRefreshing(false);
    }
  };

  _goToDetail = (id) => {
    this.props.navigation.navigate('DetailContact', {id});
  };

  _showModal = (id) => {
    return Alert.alert(
      'Warning',
      'Are you sure want to delete?',
      [
        {text: 'OK', onPress: () => this._handleDeleteContact(id)},
        {text: 'Cancel', onPress: () => {}},
      ],
      {cancelable: false},
    );
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

  _setMessage = (value) => {
    this.setState({
      message: value,
    });
  };

  _setRefreshing = (value) => {
    this.setState({
      refreshing: value,
    });
  };

  componentDidMount() {
    this._handleContactList();
  }

  render() {
    return (
      <>
        <CustomHeader title="Contact List" />
        {this.props.isLoading ? (
          <ActivityIndicator
            animating={this.props.isLoading}
            color={Colors.red900}
          />
        ) : (
          <></>)
        }
        <FlatList
          data={this.state.contactList}
          renderItem={({item}) => (
            <>
              <ContactCard
                item={item}
                editPress={() => this._goToDetail(item.id)}
                deletePress={() => this._showModal(item.id)}
              />
            </>
          )}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        />
        <Snackbar
          visible={this.state.showDialog}
          onDismiss={this._dismissSnackbar}
          action={{
            label: 'OK',
            onPress: () => {},
          }}>
          {this.state.message}
        </Snackbar>
        <FAB
          icon="plus"
          onPress={() => this.props.navigation.navigate('CreateContact')}
          style={styles.fab}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 30,
    bottom: 30,
  },
});
const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  getContactList: () => dispatch(getAllContactAPI()),
  deleteContact: (id) => dispatch(deleteContactAPI(id)),
});

export default connect(reduxState, reduxDispatch)(ContactList);
