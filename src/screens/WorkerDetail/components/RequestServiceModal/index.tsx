import React, { FC } from 'react';
import { MaterialCommunityIcons , MaterialIcons } from '@expo/vector-icons';
import GlobalInput from '../../../../components/GlobalInput';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as RSMS from './styles';

import DarkScreenFromModal from '../../../../components/DarkScreenFromModal';
import GlobalButton from '../../../../components/GlobalButton';
import useRequestServices from '../../hooks/useRequestServices';

interface IProps {
  setClose() : void;
}

//price - description

const RequestServiceModal : FC<IProps> = ({ setClose }) => {
  const { ChangeDescription , SendRequest , isLoading , ChangePrice } = useRequestServices(setClose);

  if(isLoading) return <DarkScreenFromModal>
    <ActivityIndicator color='#fff' size={48} />
  </DarkScreenFromModal>

  return <DarkScreenFromModal>
    <RSMS.Container>
      <RSMS.Title>Solicitar Servicio</RSMS.Title>
      <GlobalInput
        placeholder='Titulo...'
        icon={<MaterialCommunityIcons name="format-title" size={24} color="black" />}
      />
      <GlobalInput 
        icon={<MaterialCommunityIcons name="currency-eur" size={16} color="black" />}
        placeholder='Precio...'
        onChangeText={ChangePrice}
        type='number-pad'
      />
      <GlobalInput
        icon={<MaterialIcons name="description" size={16} color="black" />}
        placeholder='Pequeña Descripción...'
        onChangeText={ChangeDescription}
      />
      <RSMS.ButtonContainer>
        <GlobalButton text='Enviar Solicitud' onPress={SendRequest} />  
      </RSMS.ButtonContainer>
    </RSMS.Container>
    <RSMS.IconContainer>
      <TouchableOpacity onPress={setClose}>
        <FontAwesome name="times" size={32} color="#fff" />
      </TouchableOpacity>
    </RSMS.IconContainer>
  </DarkScreenFromModal>
}

export default RequestServiceModal;