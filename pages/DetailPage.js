import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

import axios from 'axios';

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
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            title={item.data.author}
            subtitle={item.data.body}
        />
    )

    render() {
        return (
            <view>
                <ShimmerPlaceHolder autoRun={true} visible={this.state.isFetched}>
                    <Text>
                        Wow, awesome here.
                </Text>
                </ShimmerPlaceHolder>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.othersComments}
                    renderItem={this.renderItem}
                />
            </view>
        )
    }
}
