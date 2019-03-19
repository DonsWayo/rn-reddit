import React, { Component } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';

import { ListItem } from 'react-native-elements'


export default class NewScreen extends Component {
    static navigationOptions = {
        title: 'Reddit',
    };

    state = {
        entries: []
    }


    componentDidMount() {
        axios.get('https://www.reddit.com/new.json?limit=30')
            .then(res => {
                const ent = res.data.data.children;
                console.log(ent);
                this.setState({ entries: ent });
            });
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            title={item.data.subreddit_name_prefixed}
            subtitle={item.data.title}
            leftAvatar={{ source: { uri: item.data.thumbnail } }}
        />
    )

    render() {
        return (
            <SafeAreaView>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.entries}
                    renderItem={this.renderItem}
                />
            </SafeAreaView>
        )
    }
}

