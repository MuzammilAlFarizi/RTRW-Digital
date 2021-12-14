import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles';

export default class Component extends React.Component {
  render() {
    const {title, theme, onPress, images} = this.props;

    let buttonStyle = theme === 'minus' ? styles.touchLogin : styles.touchSend;
    let textStyle = theme === 'data' ? styles.font12 : styles.font14l;
    //let iconComponent = icon === 'minus' ? <Entypo name="circle-with-minus" color="#3abbf2" size={20} /> : <Entypo name="circle-with-plus" color="#3abbf2" size={20} />
    return (
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  theme: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  images: PropTypes.string,
  onPress: PropTypes.func,
};

Component.defaultProps = {
  title: '',
  theme: '',
  onPress: () => {},
};
