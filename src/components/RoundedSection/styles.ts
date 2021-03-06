import styled from "styled-components/native";
import { colors } from "../../config";

const height = 50;

export const Container = styled.View`
  flex: 1;
`;

export const FilterName = styled.View`
  height: ${height}px;
  border-top-left-radius: ${height / 2}px;
  border-top-right-radius: ${height / 2}px;
  background-color: black;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const FilterText = styled.Text`
  font-family: 'RalewayBold';
  font-size: 14px;
  color: #fff;
  margin-left: 8px;
`;

export const List = styled.View`
  flex: 1;
  min-height: 250px;
  background-color: rgb(240,240,240);
`;

export const ContainerLoading = styled.View`
  flex : 1;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const TextIndicator = styled.Text`
  color: ${colors.main};
  margin-top: 20px;
  font-family: 'RalewayBold';
`;