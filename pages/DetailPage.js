import React, { Component } from 'react'
import { Text, FlatList, View, StyleSheet, TouchableOpacity , Linking, ScrollView , SafeAreaView} from 'react-native'
import { ListItem, Card, Divider } from 'react-native-elements'
import {Dimensions} from 'react-native';
import Loader from 'react-native-easy-content-loader';


import axios from 'axios';


const { width, height } = Dimensions.get('screen');



export default class DetailPage extends Component {
    static navigationOptions = {
        tabBarVisible: false,
    };
    state = {
        mainComment: {},
        othersComments: [],
        isFetched: true
    }


    componentDidMount() {
        const { navigation } = this.props;
        const permaLink = navigation.getParam('permaLink', 'NO-ID');
        this.getPostComents(permaLink);
    }

    getPostComents(data) {
        axios.get('https://www.reddit.com/' + data + '.json')
            .then(res => {
                const mainComment = res.data[0].data.children[0].data;
                const othersComments = res.data[1].data.children;
                console.log(mainComment);
                console.log(othersComments);
                this.setState({ mainComment: mainComment, othersComments: othersComments, isFetched: false });
            });
        console.log('https://www.reddit.com/' + data + '.json');
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            containerStyle={styles.subtitleView}
            titleStyle={styles.titleView}
            title={item.data.author}
            subtitle={item.data.body}
            
        />

    )

    render() {
        const {isFetched} = this.state;
        if (isFetched){
            return (
                <View>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 2, marginLeft: 15 , marginTop: 40}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 2, marginLeft: 15 , marginTop: 40}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 2, marginLeft: 15 , marginTop: 40}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 2, marginLeft: 15 , marginTop: 40}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 2, marginLeft: 15 , marginTop: 40}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 2, marginLeft: 15 , marginTop: 40}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 3, marginLeft: 15 , marginTop: 10}}/>
                    </Loader>
                    <Loader loading={true}>
                        <View style={{ height: height / 100, width: width / 5, marginLeft: 15 , marginTop: 10}}/>
                    </Loader>

                </View>
            )

        }else {
            return (
                <View>
                    <ScrollView>
                    <Card
                        title={this.state.mainComment.title}
                        containerStyle={styles.containerStyle}
                        >
                        <Text style={styles.subtitleStyle}>
                            Posted by:  {this.state.mainComment.author}
                        </Text>
                        <TouchableOpacity style={styles.subtitleStyle} onPress={() => Linking.openURL('http://' + this.state.mainComment.domain+'.com')}>
                            <Text style={{color: 'blue'}}>
                                Domain: {this.state.mainComment.domain}
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.subtitleStyle}>
                            Subreddit: {this.state.mainComment.subreddit}
                        </Text>

                    </Card>
                        <Divider style={{ backgroundColor: 'gray' }} />
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.othersComments}
                        renderItem={this.renderItem}
                    />
                    </ScrollView>
                </View>
            )
        }
    }

}


const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 20
    },
    titleView: {
        paddingBottom:10,
        fontWeight: 'bold'
    },
    containerStyle:{
        paddingLeft: 0
    },
    subtitleStyle:{
        marginTop: 5
    }
});

