import React from "react";
import {View, StyleSheet} from "react-native"

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.coreMiner}></View>
      <View styles={styles.line}></View>
      <View styles={styles.line, {transform: [{rotate: "45deg"}]}}></View>
      <View styles={styles.line, {transform: [{rotate: "90deg"}]}}></View>
      <View styles={styles.line, {transform: [{rotate: "135deg"}]}}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"

  },
  coreMiner: {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    position: 'absolute',
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: "black"
  }
})