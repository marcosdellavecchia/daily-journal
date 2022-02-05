import React, { FunctionComponent, useState } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { Colors } from '../core/colors';
import { Body2 } from '../core/typography';
import { PrimaryButton } from '../components/buttons';
import { Spacer } from '../components/spacer';

const auth = getAuth();

/*
 * Styled components
 */

const KeyboardAvoidingContainer = styled.KeyboardAvoidingView`
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
  width: 100%;
  text-align: center;
  color: ${Colors.WHITE};
`;

const PrivacyDisclaimerContainer = styled.TouchableOpacity`
  width: 70%;
`;

/*
 * Types
 */

interface RegisterScreenProps {
  navigation: any;
}

/*
 * Register screen
 */

export const Register: FunctionComponent<RegisterScreenProps> = ({
  navigation,
}) => {
  const [value, setValue] = useState({
    email: '',
    password: '',
    error: '',
  });

  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.',
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Login');
    } catch (error: any) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingContainer
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
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
        <PrivacyDisclaimerContainer>
          <Body2
            style={{
              textAlign: 'center',
            }}
          >
            By pressing "Create Account" you accept our privacy policy.
          </Body2>
        </PrivacyDisclaimerContainer>
        <Spacer size="s" />
        <Body2>{!!value.error ? value.error : ' '}</Body2>
        <Spacer />
        <PrimaryButton
          label="Create Account"
          accessibilityLabel="Create Account"
          onPress={signUp}
        />
      </KeyboardAvoidingContainer>
    </TouchableWithoutFeedback>
  );
};
