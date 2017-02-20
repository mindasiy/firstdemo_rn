/**
 * Created by wangmin on 16/11/17.
 */

import React, { Component } from 'react';
import { ScrollView,View,Text } from 'react-native';
import Icon from '../node_modules/react-native-vector-icons/FontAwesome';
import ItemList from '../src/components/ItemList';
import Tabs from '../src/components/Tabs';
import Cat from'../src/components/Cat';
import Promotion from'../src/components/Promotion';
import Swiperslide from '../src/components/Swiper';

module.exports =  React.createClass({
    //object在组件被挂载之前调用。
    getInitialState() {
        return {
            cateId : 0
        };
    },
    //更新分类ID
    handleUpdateList(cateId) {
        this.setState({
            cateId : cateId
        })
    },
    //渲染头部
    renderHeader() {
        return (
            <View style={{height : 25,backgroundColor : '#2964dd'}} />
        );
    },
    render() {
        var cateId = this.state.cateId;
        return (
            <View style={{flex : 1}}>
                <ScrollView  stickyHeaderIndices={[4]} >
                    <Swiperslide />
                    <Cat />
                    <Promotion />
                    <View style={{height : 4, backgroundColor : '#F2F2F2'}} />
                    <Tabs updateCateItem={this.handleUpdateList} />
                    <ItemList cateId={cateId} />

                </ScrollView>
            </View>
        );
    }
});

