import React, { FunctionComponent, useState } from 'react';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

import { Colors } from '../core/colors';
import { PrimaryButton } from '../components/buttons';
import { Spacer } from '../components/spacer';
import { freeTemplate } from '../data/note-templates';

/*
 * Constants
 */

const { width, height } = Dimensions.get('screen');

/*
 * Types
 */

interface CreateNoteProps {
  navigation: any;
}

/*
 * Styled components
 */

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.BLACK};
  align-items: center;
  justify-content: flex-start;
  padding-top: 25px;
`;

const EntryTextContainer = styled.View`
  background-color: ${Colors.DARK_GRAY};
  margin: 8px;
  padding: 10px;
  width: ${width * 0.9}px;
  height: ${height * 0.3}px;
  border-radius: 8px;
`;

const EntryTextField = styled.TextInput`
  color: ${Colors.WHITE};
  font-size: 14px;
  font-family: 'open-sans';
`;

/*
 * Create Note screen
 */

export const CreateNote: FunctionComponent<CreateNoteProps> = ({
  navigation,
}) => {
  const [note, setNote] = useState(`${freeTemplate}`);

  const saveNote = async () => {
    const value = await AsyncStorage.getItem('NOTES');
    const n = value ? JSON.parse(value) : [];
    n.push(note);
    await AsyncStorage.setItem('NOTES', JSON.stringify(n)).then(() =>
      navigation.navigate('Journal'),
    );
    // setNote(`${noteDate} \n \n`);
  };

  return (
    <Container>
      <EntryTextContainer>
        <EntryTextField
          value={note}
          onChangeText={setNote}
          multiline={true}
          autoFocus
          selectionColor={Colors.WHITE}
        />
      </EntryTextContainer>
      <Spacer />
      <PrimaryButton
        label="Add entry"
        accessibilityLabel="Add entry"
        onPress={saveNote}
      />
    </Container>
  );
};
