import {CONTACT_ACTION_TYPE} from '../type/actionType';

const {
  SaveContact,
  GetAllContact,
  DeleteContact,
  EditContact,
  GetContact,
} = require('../../API/contact');

const saveContactAPI = (data) => (dispatch) => {
  dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: true});
  return SaveContact({
    firstName: data.firstName,
    lastName: data.lastName,
    age: data.age,
    photo: data.photo,
  })
    .then((response) => {
      dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: false});
    })
    .catch(function (error) {
      dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: false});
      console.log('error API', error);
      return error;
    });
};

const getAllContactAPI = () => (dispatch) => {
  dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: true});
  return GetAllContact()
    .then((response) => {
      dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: false});
      return response;
    })
    .catch((error) => {
      console.log('get all contact error', error);
      dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: false});
      return error;
    });
};

const deleteContactAPI = (id) => (dispatch) => {
  dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: true});
  return DeleteContact(id)
    .then((response) => {
      dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: false});
      return response;
    })
    .catch((error) => {
      dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: false});
      return error;
    });
};

const editContactAPI = (data) => (dispatch) => {
  dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: true});
  return EditContact(data)
    .then((response) => {
      dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: false});
      return response;
    })
    .catch((error) => {
      dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: false});
      return error;
    });
};

const getContactAPI = (id) => (dispatch) => {
  dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: true});
  return GetContact(id)
    .then((response) => {
      dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: false});
      return response;
    })
    .catch((error) => {
      dispatch({type: CONTACT_ACTION_TYPE.SET_LOADING, value: false});
      return error;
    });
};

export {
  saveContactAPI,
  getAllContactAPI,
  deleteContactAPI,
  editContactAPI,
  getContactAPI,
};
