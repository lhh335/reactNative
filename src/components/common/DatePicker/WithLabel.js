
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textinput: {
      height: 26,
      width: 50,
      borderWidth: 0.5,
      borderColor: '#0f0f0f',
      padding: 4,
      fontSize: 13,
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 2,
    },
    labelView: {
      marginRight: 10,
      paddingVertical: 2,
    },
    label: {
      fontWeight: '500',
    },
    headingContainer: {
      padding: 4,
      backgroundColor: '#f6f7f8',
    },
    heading: {
      fontWeight: '500',
      fontSize: 14,
    },
  });

class WithLabel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.labelContainer}>
                <View style={styles.labelView}>
                    <Text style={styles.label}>
                        {this.props.label}
                    </Text>
                </View>
                {this.props.children}
            </View>
        )
    }
}
export default WithLabel;