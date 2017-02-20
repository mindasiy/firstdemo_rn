/**
 * Created by wangmin on 16/12/1.
 */
'use strict';
import React, { Component } from 'react';
import ItemCell  from './ItemCell';
import { StyleSheet,
    ListView,
    Text,
    Image,
    View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import detail from '../pages/detail';
// 组件样式
const styles = StyleSheet.create({
    loading :{
        marginTop : 10,
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        height : 21,
        textAlign: 'center',
        //resizeMode: Image.resizeMode.contain
    }
});
var Detail = React.createClass({
    render: function () {
        return (
            <ScrollView>
                <Text>详情页</Text>
                <Text>尽管信息很少，但这就是详情页</Text>
            </ScrollView>
        );
    }
});
var API = 'http://ald.taobao.com/recommend.htm?appId=03507&areaId=330100&size=15&page=1&type=1';

module.exports = React.createClass({

    //object在组件被挂载之前调用。状态化的组件应该实现这个方法，返回初始的state数据。
    getInitialState() {
        return {
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
            loaded: false
        };
    },

    //只调用一次，在render之后调用
    componentDidMount() {
        this.fetchData();
    },

    //render 之前调用
    //之所以取nextProps的值而不直接取this.props.cateId 是因为componentWillReceiveProps的更新早于props的更新
    componentWillReceiveProps(nextProps) {
        //猫头先转
        this.setState({
            loaded : false
        })
        //拉取数据
        this.fetchData(nextProps.cateId);
    },


    //拉取数据
    fetchData: function(cateId) {
        var apiUrl = cateId ? API + '&catId=' + cateId : API;
         //console.log(cateId,apiUrl,'api');
        //fetch(apiUrl ,{
        //    method:"get",
        //    mod:"cors",
        //    headers:{
        //        "Content-Type": "application/x-www-form-urlencoded"
        //    },
        //    credentials:'include'
        //}).then(res=> res.blob())
        //    .then(blob => {
        //        var reader = new FileReader();
        //        reader.onload = function(e) {
        //            var text = reader.result;
        //            console.log(text.data);
        //        }
        //        reader.readAsText(blob, 'GBK')
        //    })




        fetch(apiUrl, {
            method: '',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                 //console.log('responseData',responseData);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data),
                    loaded: true
                });
            })
            .done();
    },

    //渲染列表
    renderListView : function(){
        //先展示加载中的菊花
        if(!this.state.loaded){
            return(
                <Text style={styles.loading} > 加载中...</Text>
            //    <Image style={styles.loading} source={require('../images/timer.png')}  />
            );
        };
        return(

            <ListView automaticallyAdjustContentInsets={false} contentInset={{top: -64} }
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
                      />
        );
    },

    handleOpenDetails: function () {
        console.log(this);



        },

    //渲染每一行
    renderRow(item) {
        return (
            <ItemCell   item={item} onPress={() => this.handleOpenDetails()} />

        );
    },

    render() {
        return (

            this.renderListView()
        );
    },




})