import {createAppContainer} from 'react-navigation';
import CreateContact from '../screens/CreateContact';
import ContactList from '../screens/ContactList';
import {createStackNavigator} from 'react-navigation-stack';
import DetailContact from '../screens/DetailContact';


const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      ContactList: ContactList,
      CreateContact: CreateContact,
      DetailContact: DetailContact,
    },
    {initialRouteName: 'ContactList', headerMode: 'none'},
  ),
);

export default AppNavigator;
