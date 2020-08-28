import axios from 'axios';
import {GetAllContact, GetContact} from '../API/contact';

jest.mock('axios');

describe('Contact API', () => {
  it('Get all contact successfully', async () => {
    const mockResult = {
      status: 200,
      data: {
        message: 'Get contacts',
        data: [
          {
            id: 'b3abd640-c92b-11e8-b02f-cbfa15db428b',
            firstName: 'Luketest',
            lastName: 'Skywalker',
            age: 20,
            photo: 'N/A',
          },
          {
            firstName: 'Paul1',
            lastName: 'Pogba1',
            age: 27,
            photo: 'wwwww1',
            id: 'a7a5c080-e810-11ea-a188-b559d1c19e43',
          },
          {
            firstName: 'Bilbo',
            lastName: 'Baggins',
            age: 111,
            photo:
              'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
            id: 'dd70f630-e810-11ea-a188-b559d1c19e43',
          },
        ],
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(mockResult));
    const response = await GetAllContact();
    expect(response.status).toEqual(200);
    expect(response.data.message).toEqual('Get contacts');
    expect(response.data.data.length).toEqual(mockResult.data.data.length);
  });

  it('Get contact by Id', async () => {
    const mockResult = {
      status: 200,
      data: {
        message: 'Get Contact by id',
        data: {
          id: 'b3abd640-c92b-11e8-b02f-cbfa15db428b',
          firstName: 'Luketest',
          lastName: 'Skywalker',
          age: 20,
          photo: 'N/A',
        },
      },
    };

    const response = await GetContact('b3abd640-c92b-11e8-b02f-cbfa15db428b');
    axios.get.mockImplementationOnce(() => Promise.resolve(mockResult));
    expect(response.status).toEqual(200);
    expect(response.data.data.length).toEqual(1);
  });
});
