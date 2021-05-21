import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
  Platform, Image, Alert
} from "react-native";
import Constants from '../../constants';
//Delete all TodoLists
import { deleteAllTodoLists } from '../../databases/allSchemas';
//sort 
import { SORT_ASCENDING, SORT_DESCENDING } from './sortStates';
const HeaderComponent = props => {
  const { title, showAddTodoList, hasAddButton,
    hasSortButton, sort, sortState, hasDeleteAllButton
  } = props;
  var sortIcon = sortState === SORT_ASCENDING ?
    Constants.Images.ascSort : Constants.Images.desSort;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {title}
      </Text>
      {hasDeleteAllButton && <TouchableOpacity style={styles.addButton} onPress={
        () => {
          Alert.alert(
            'Delete all',
            'Are you sure you want to delete all todoLists ?',
            [
              {
                text: 'No', onPress: () => { },//Do nothing
                style: 'cancel'
              },
              {
                text: 'Yes', onPress: () => {
                  deleteAllTodoLists().then().catch(error => {
                    alert(`Delete all TodoLists failed. Error = ${error}`);
                  });
                }
              },
            ],
            { cancelable: true }
          );
        }
      }>
        <Image style={styles.deleteButtonImage} source={Constants.Images.delete} />
      </TouchableOpacity>}
      {hasSortButton && <TouchableOpacity style={styles.addButton} onPress={sort}>
        <Image style={styles.sortButtonImage} source={sortIcon} />
      </TouchableOpacity>}
      {hasAddButton && <TouchableOpacity style={styles.addButton} onPress={showAddTodoList}>
        <Image style={styles.addButtonImage} source={Constants.Images.add} />
      </TouchableOpacity>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgb(224, 93, 144)',
    height: 100
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'absolute',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 50
  },
  addButton: {
    zIndex: 2,
    marginRight: 10,
    marginTop: 30,
  },
  addButtonImage: {
    width: 42,
    height: 42,
    tintColor: 'white'
  },
  deleteButtonImage: {
    width: 26,
    height: 26,
    tintColor: 'white'
  },
  sortButtonImage: {
    width: 26,
    height: 26,
    tintColor: 'white'
  }
});
export default HeaderComponent;