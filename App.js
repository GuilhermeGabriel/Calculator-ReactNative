import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Botao extends Component {
  constructor(props) {
    super(props)

    let c = 1;
    if (props.c) {
      c = parseInt(props.c);
    }

    this.styles = StyleSheet.create({
      area: {
        flex: c,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: '#E0E0E0'
      },
      text: {
        fontSize: 18
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.area}>
        <Text style={this.styles.text}></Text>
      </TouchableOpacity>
    );
  }
}

export default class Calculadora extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.linha}>
          <Text></Text>
        </View>

        <View style={styles.linha}>
          <Botao c='3' />
          <Botao />
        </View>

        <View style={styles.linha}>
          <Botao />
          <Botao />
          <Botao />
          <Botao />
        </View>

        <View style={styles.linha}>
          <Botao />
          <Botao />
          <Botao />
          <Botao />
        </View>

        <View style={styles.linha}>
          <Botao />
          <Botao />
          <Botao />
          <Botao />
        </View>

        <View style={styles.linha}>
          <Botao c='2' />
          <Botao />
          <Botao />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  linha: {
    flex: 1,
    flexDirection: 'row'
  }
});
