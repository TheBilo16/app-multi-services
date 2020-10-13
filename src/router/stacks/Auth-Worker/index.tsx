import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WorkerWorkList from '../../../screens/WorkerWorkList';
import WorkerProfile from '../../../screens/WorkerProfile';
import WorkerChat from '../../../screens/WorkerChat';
import WorkDetail from '../../../screens/WorkDetail';

const Stack = createStackNavigator();

const AuthWorker = () => {
  return <Stack.Navigator headerMode='none' initialRouteName='home' >
    <Stack.Screen name='home' component={WorkerWorkList} />
    <Stack.Screen name='worker-work-list' component={WorkerWorkList} />
    <Stack.Screen name='profile' component={WorkerProfile} />
    <Stack.Screen name='worker-chat' component={WorkerChat} />
    <Stack.Screen name='worker-work-detail' component={WorkDetail} />
  </Stack.Navigator>
}

export default AuthWorker;