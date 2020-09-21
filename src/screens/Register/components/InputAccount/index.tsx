import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons'
import Input from '../../../../components/Input';
import BaseInput from '../BaseInput';

interface IProps {
  onChangeUsername?(value : string): void;
  onChangePassword?(value : string): void;
}

const InputAccount : FC<IProps> = ({ onChangePassword , onChangeUsername }) => {
  return <BaseInput 
    title='Informacion de la Cuenta'
    description='Esta informacion servira para poder ingresar a la aplicacion' 
  >
    <Input 
      icon={<AntDesign size={16} name='user' color='#BBBBBB' />} 
      placeholder='Username...' 
      onChangeText={onChangeUsername}
    />
    <Input 
      icon={<AntDesign size={16} name='lock1' color='#BBBBBB' />} 
      placeholder='Password...' 
      secureTextEntry={true}
      onChangeText={onChangePassword}
    />
  </BaseInput>
}

export default InputAccount;