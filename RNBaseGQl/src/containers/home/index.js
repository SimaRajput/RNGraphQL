import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import { arrayOf, shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { AuthStyles } from '../../styles';
import { Button } from '../../components';
import Constants from '../../constants';
import * as homeActions from '../../actions/home-actions-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.Colors.DASHBOARD_BG_COLOR,
    flex: 1,
  },
  rowStyle: { padding: Constants.BaseStyle.PADDING },
  textStyle: { ...Constants.Fonts.regular },
});

class Home extends React.Component {
  componentDidMount() {
    const { getMission } = this.props;
    getMission();
  }

  render() {
    const { missions } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          style={styles.container}
          data={missions}
          renderItem={({ item: { mission_name, launch_date_local } }) => (
            <View style={styles.rowStyle}>
              <Text style={styles.textStyle}>{mission_name}</Text>
              <Text style={styles.textStyle}>
                {`Release Year: ${launch_date_local}`}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

Home.propTypes = {
  getMission: func.isRequired,
  missions: arrayOf(
    shape({
      mission_name: string.isRequired,
    }),
  ).isRequired,
};

ReactMixin(Home.prototype, TimerMixin);

const mapStateToProps = ({ home: { missions } }) => ({ missions });

export default connect(mapStateToProps, { getMission: homeActions.getMission })(
  Home,
);
