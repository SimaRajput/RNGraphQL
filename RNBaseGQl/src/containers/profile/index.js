import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Constants from '../../constants';
import * as homeActions from '../../actions/home-actions-types';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.Colors.DASHBOARD_BG_COLOR,
    flex: 1,
  },
  rowStyle: { padding: Constants.BaseStyle.PADDING },
  textStyle: { ...Constants.Fonts.regular },
});

function Profile(props) {
  const { movies } = props;
  useEffect(() => {
    const {
      getMovies
    } = props;
    getMovies();
  }, [])

  return (
    <FlatList
      keyExtractor={(item, index) => `${item.id}`}
      style={styles.container}
      data={movies}
      renderItem={({ item: { title, releaseYear } }) => (
        <View style={styles.rowStyle}>
          <Text style={styles.textStyle}>{title}</Text>
          <Text style={styles.textStyle}>
            {`Release Year: ${releaseYear}`}
          </Text>
        </View>
      )}
    />
  )
}
const mapStateToProps = ({ home: { movies } }) => ({ movies });
export default connect(mapStateToProps, { getMovies: homeActions.getMovies })(Profile);
