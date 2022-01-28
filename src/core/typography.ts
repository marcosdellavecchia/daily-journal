import styled from 'styled-components';
import { Colors } from './colors';

export const H1 = styled.Text`
  font-size: 32px;
  font-family: 'open-sans-bold'
  color: ${Colors.WHITE};
`;

export const H2 = styled.Text`
  font-size: 28px;
  font-family: 'open-sans-bold'
  color: ${Colors.WHITE};
`;

export const Body1 = styled.Text`
  font-size: 16px;
  font-family: 'open-sans'
  color: ${Colors.WHITE};
`;

export const Body2 = styled.Text`
  font-size: 14px;
  font-family: 'open-sans'
  color: ${Colors.WHITE};
`;

export const BodyBold = styled.Text`
  font-size: 16px;
  font-family: 'open-sans-bold'
  letter-spacing: 0.5px;
  color: ${Colors.WHITE};
`;

export const BodyBoldAccent = styled.Text`
  font-size: 16px;
  font-family: 'open-sans-bold'
  letter-spacing: 0.5px;
  color: ${Colors.ACCENT};
`;
