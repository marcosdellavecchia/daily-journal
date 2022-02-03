import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Colors } from '../core/colors';
import PaperPencilIcon from '../../assets/icons/paper-pencil.svg';
import { Body2 } from '../core/typography';

/*
 * Styled components
 */

const Container = styled.View`
  background-color: ${Colors.BLACK};
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  margin-bottom: 30px;
`;

const IconContainer = styled.View`
  margin-bottom: 20px;
`;

const EmptyNoteText = styled.Text`
  font-size: 14px;
  font-family: 'open-sans'
  color: ${Colors.WHITE};
  text-align: center;
`;

export const EmptyNoteMessage: FunctionComponent = () => {
  return (
    <Container>
      <IconContainer>
        <PaperPencilIcon width={125} height={125} fill={Colors.WHITE} />
      </IconContainer>
      <EmptyNoteText>Your journal is still empty.</EmptyNoteText>
      <EmptyNoteText>
        {' '}
        Press the button below to add your frist entry!
      </EmptyNoteText>
    </Container>
  );
};
