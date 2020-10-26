import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Hooks
import useRouterUserInit from '../../hooks/useRouterUserInit';

//Screens
import WorkerDetail from '../../../screens/WorkerDetail';
import WorkerChat from '../../../screens/WorkerChat';
import SearchFilter from '../../../screens/SearchFilter';
import SearchMap from '../../../screens/SearchMap';
import Home from '../../../screens/Home';
import Contact from '../../../screens/Contact';
import Search from '../../../screens/Search';
import UserProfile from '../../../screens/Profile';

const Stack = createStackNavigator();

const AuthUser = () => {
  const init = useRouterUserInit();

  return <Stack.Navigator headerMode='none' initialRouteName='home' >
    <Stack.Screen name='home' component={Home} />
    <Stack.Screen name='profile' component={UserProfile} />
    <Stack.Screen name='contact' component={Contact} />
    <Stack.Screen name='search' component={Search} />
    <Stack.Screen name='worker-detail' component={WorkerDetail} />
    <Stack.Screen name='worker-chat' component={WorkerChat} />
    <Stack.Screen name='search-filter' component={SearchFilter} />
    <Stack.Screen name='search-map' component={SearchMap} />  
  </Stack.Navigator>       
}

export default AuthUser; 