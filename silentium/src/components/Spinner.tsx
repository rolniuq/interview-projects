import React from 'react';
import {ActivityIndicator} from 'react-native';
import {spinnerColor, spinnerSize} from '../constants/Spinner';
import {pageStyles} from '../styles/PageStyle';

type Props = {
  testID: string;
};

const Spinner = (props: Props) => {
  return (
    <ActivityIndicator
      testID={props.testID}
      size={spinnerSize}
      color={spinnerColor}
      style={pageStyles.spinner}
    />
  );
};

export default Spinner;
