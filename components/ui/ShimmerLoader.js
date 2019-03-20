import React, { Component } from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import Loader from 'react-native-easy-content-loader';

const { width, height } = Dimensions.get('screen');


export default class  ShimmerLoader extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 1.5, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 1.5, marginLeft: 15 , marginTop: 40}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 1.5, marginLeft: 15 , marginTop: 40}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 1.5, marginLeft: 15 , marginTop: 40}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 1.5, marginLeft: 15 , marginTop: 40}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 1.5, marginLeft: 15 , marginTop: 40}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 1.5, marginLeft: 15 , marginTop: 40}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 1.5, marginLeft: 15 , marginTop: 40}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
            <Loader loading={true}>
                <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
            </Loader>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
});