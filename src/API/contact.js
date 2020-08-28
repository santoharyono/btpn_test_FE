import axios from 'axios';
import {APIConstant} from './constants';

const url = APIConstant.BASE_URL + '/contact';
const GetAllContact = async () => {
  try {
    const response = await axios.get(url);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response,
      message: error.response,
    };
  }
};

const GetContact = async (id) => {
  const urlWithParam = url + `/${id}`;
  try {
    const response = await axios.get(urlWithParam);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response,
      message: error.response,
    };
  }
};

const SaveContact = async ({firstName, lastName, age, photo}) => {
  const body = {
    firstName,
    lastName,
    age,
    photo,
  };
  try {
    const response = await axios.post(url, body);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response,
      message: error.response,
    };
  }
};

const DeleteContact = async (id) => {
  const urlWithParam = url + `/${id}`;
  try {
    const response = await axios.delete(urlWithParam);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response,
      message: error.response,
    };
  }
};

const EditContact = async ({id, firstName, lastName, age, photo}) => {
  const urlWithParam = url + `/${id}`;
  const body = {
    firstName,
    lastName,
    age,
    photo,
  };
  try {
    const response = await axios.put(urlWithParam, body);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response,
      message: error.response,
    };
  }
};

export {GetAllContact, GetContact, SaveContact, DeleteContact, EditContact};
