import React, { PropTypes } from 'react';
import {
    DatePickerIOS,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

import Heading from './Heading';
import WithLabel from './WithLabel';

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

class DatePickerExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
            timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
        }
    }

    // static PropTypes = {
    //     date: PropTypes.number,
    //     timeZoneOffsetInHours: PropTypes.number
    // }

    static defaultProps = {
        date: new Date(),
        timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    }
    onDateChange = (date) => {
        this.setState({ date: date });
    }

    onTimezoneChange = (event) => {
        var offset = parseInt(event.nativeEvent.text, 10);
        if (isNaN(offset)) {
            return;
        }
        this.setState({ timeZoneOffsetInHours: offset });
    }
    componentWillMount(){
        console.log(this.state.date,'时间');
    }
    render() {
        return (
            <View>
                <WithLabel label="Value:">
                    <Text>{
                        this.state.date.toLocaleDateString() +
                        ' ' +
                        this.state.date.toLocaleTimeString()
                    }</Text>
                </WithLabel>
                <WithLabel label="Timezone:">
                    <TextInput
                        onChange={this.onTimezoneChange}
                        style={styles.textinput}
                        value={this.state.timeZoneOffsetInHours.toString()}
                    />
                    <Text> hours from UTC</Text>
                </WithLabel>
                <Heading label="Date + time picker" />
                <DatePickerIOS
                    date={this.state.date}
                    mode="datetime"
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}
                />
                {/* <Heading label="Date picker" /> */}
                {/* <DatePickerIOS
                    date={this.state.date}
                    mode="date"
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}
                />
                <Heading label="Time picker, 10-minute interval" />
                <DatePickerIOS
                    date={this.state.date}
                    mode="time"
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}
                    minuteInterval={10}
                /> */}
            </View>
        )
    }
}

export default DatePickerExample;