import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

class Botao extends Component {
  constructor(props) {
    super(props)

    let c = 1;
    if (props.c) {
      c = parseInt(props.c);
    }

    let bg = '#e0e0e0'
    if (props.bg) {
      bg = props.bg
    }

    this.styles = StyleSheet.create({
      area: {
        flex: c,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: bg
      },
      text: {
        fontWeight: 'bold',
        fontSize: 28
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
        <Text style={this.styles.text}>{this.props.t}</Text>
      </TouchableOpacity>
    );
  }
}

export default class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = { r: '0' }
    this.btn = this.btn.bind(this);
  }

  btn(b) {
    let s = this.state;

    if (b == 'c') {
      s.r = '0';
    } else if (b == '=') {
      s.r = eval(s.r);
    } else {
      if (s.r == '0') {
        s.r = b
      } else {
        s.r += b
      }
    }

    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container} >
        <StatusBar barStyle='light-content'></StatusBar>

        <View style={styles.linha}>
          <Text style={styles.res}>{this.state.r}</Text>
        </View>

        <View style={styles.linha}>
          <Botao t='c' c='3' bg='#CCCCCC' onPress={() => { this.btn('c') }} />
          <Botao t='/' bg='#fd9526' onPress={() => { this.btn('/') }} />
        </View>

        <View style={styles.linha}>
          <Botao t='7' onPress={() => { this.btn('7') }} />
          <Botao t='8' onPress={() => { this.btn('8') }} />
          <Botao t='9' onPress={() => { this.btn('9') }} />
          <Botao t='*' bg='#fd9526' onPress={() => { this.btn('*') }} />
        </View>

        <View style={styles.linha}>
          <Botao t='4' onPress={() => { this.btn('4') }} />
          <Botao t='5' onPress={() => { this.btn('5') }} />
          <Botao t='6' onPress={() => { this.btn('6') }} />
          <Botao t='-' bg='#fd9526' onPress={() => { this.btn('-') }} />
        </View>
        <View style={styles.linha}>

          <Botao t='1' onPress={() => { this.btn('1') }} />
          <Botao t='2' onPress={() => { this.btn('2') }} />
          <Botao t='3' onPress={() => { this.btn('3') }} />
          <Botao t='+' bg='#fd9526' onPress={() => { this.btn('+') }} />
        </View>

        <View style={styles.linha}>
          <Botao t='0' c='2' onPress={() => { this.btn('0') }} />
          <Botao t='.' onPress={() => { this.btn('.') }} />
          <Botao t='=' bg='#fd9526' onPress={() => { this.btn('=') }} />
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
  },
  res: {
    flex: 1,
    color: 'white',
    backgroundColor: 'black',
    fontSize: 54,
    textAlign: 'right',
    padding: 16
  }
});
