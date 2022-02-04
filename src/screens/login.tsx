import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { Colors } from '../core/colors';
import { Body2 } from '../core/typography';
import { PrimaryButton } from '../components/buttons';
import { Spacer } from '../components/spacer';

const auth = getAuth();

/*
 * Styled components
 */

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.BLACK};
  align-items: center;
  justify-content: center;
`;

const HomeImage = styled.Image`
  height: 225px;
  width: 225px;
`;

const InputContainer = styled.View`
  align-items: center;
  background-color: ${Colors.DARK_GRAY};
  border-radius: 30px;
  width: 70%;
  height: 45px;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  padding: 10px;
  color: ${Colors.WHITE};
`;

/*
 * Login screen
 */

export const Login: FunctionComponent = () => {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: '',
  });

  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.',
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error: any) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <Container>
      <HomeImage source={require('../../assets/images/home-logo.webp')} />
      <Spacer />
      <InputContainer>
        <Input
          placeholder="Your email"
          placeholderTextColor={Colors.WHITE}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Your password"
          placeholderTextColor={Colors.WHITE}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
        />
      </InputContainer>
      <TouchableOpacity>
        <Body2>Forgot Password?</Body2>
      </TouchableOpacity>
      <Spacer size="s" />
      <Body2>{!!value.error ? value.error : ' '}</Body2>
      <Spacer size="l" />
      <PrimaryButton
        label="Log in"
        accessibilityLabel="Log in"
        onPress={signIn}
      />
    </Container>
  );
};
