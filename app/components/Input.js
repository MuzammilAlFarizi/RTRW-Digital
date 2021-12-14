import React, {Component} from 'react';
import {
  Animated,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles';
const COLOR_TRANSPARENT = 'rgba(0,0,0,0)';
const COLOR_FONT_PRIMARY_LIGHT = '#bdbdbd';
const COLOR_BORDER_FORM = '#CACCCF';
const COLOR_EVENT_ERROR = '#E00228';

export default class Input extends React.Component {
  state = {
    isFocused: false,
  };

  componentDidUpdate() {}

  render() {
    const {
      image,
      label,
      editable,
      errorMessage,
      customContainer,
      customError,
      customTextInput,
      onPressTextInput,
      onPressPIN,
      keyboardType,
      imgStyle,
      labelImg,
      value,
      placeholder,
      onChangeText,
    } = this.props;

    return (
      <View>
        <Text style={styles.font10}>{label}</Text>
        <View>
          <TextInput
            style={[
              editable ? styles.textInput : styles.textInputInactive,
              {
                borderColor:
                  errorMessage === null ? COLOR_BORDER_FORM : COLOR_EVENT_ERROR,
              },
            
            ]}
            underlineColorAndroid={COLOR_TRANSPARENT}
            {...this.props}
          />
          
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  customContainer: PropTypes.number,
  customError: PropTypes.object,
  customLabel: PropTypes.object,
  customTextInput: PropTypes.object,
  onPressTextInput: PropTypes.func,
  editable: PropTypes.bool,
  errorMessage: PropTypes.string,
  image: PropTypes.number,
  labelImg: PropTypes.number,
  onPressShowPass: PropTypes.func,
  onPressHiddenPass: PropTypes.func,
  keyboardType: PropTypes.string,
  onPressPIN: PropTypes.func,
};

Component.defaultProps = {
  value: '',
  placeholder: '',
  customContainer: null,
  customError: null,
  customLabel: null,
  customTextInput: null,
  editable: true,
  errorMessage: null,
  image: null,
  labelImg: null,
  placeholder: null,
  keyboardType: 'default',
};
