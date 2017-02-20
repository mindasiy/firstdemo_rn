/**
 * Created by wangmin on 16/12/1.
 */
import React, { Component } from 'react';
import {StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
} from 'react-native';

// 组件样式
var styles = StyleSheet.create({
    container: {
        flex : 1,
        padding : 10,
        flexDirection: 'row',
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 1,
        backgroundColor: '#ffffff',
    },
    //左侧商品图
    goodImg : {
        width : 110,
        height : 110,
        marginRight: 15
    },
    //右侧商品信息
    goodInfo : {
        flex : 1,
        flexDirection : 'column'
    },
    goodTit : {
        fontSize : 16,
        height : 40,
        fontWeight : '700',
        color : '#000000',
        textAlign: 'left',
        marginTop: 10,
        marginRight: 10,
    },
    // 价格
    goodRow : {
        flexDirection : 'row',
        alignItems: 'center',
        marginTop : 5,
        marginBottom : 10
    },
    nPrice : {
        fontSize : 18,
        fontWeight : '700',
        marginRight : 10,
        color : '#c40001'
    },
    yen :{
        fontSize : 13
    },
    oPrice : {
        fontSize : 12,
        color : '#b0b0b0'
    },
    // 购买及按钮
    goodExtra : {
        flexDirection :'row',
        alignItems: 'center',
        justifyContent : 'space-between'
    },
    goodSold : {
        color : '#b0b0b0'
    },
    goodBtnWarp : {


        // position : 'absolute',
        // right : 10,
        // top : -7,

        // height : 35,
        borderWidth : 1,
        padding : 5,
        borderColor : '#3164ce',
        borderRadius : 3
    },
    goodBtn : {
        color : '#3164ce'
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
module.exports = React.createClass({
    onPress(e){

    },
    render() {
        var item = this.props.item;

        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.container} key={item._pos_}>

                    <Image style={styles.goodImg} source={{uri : 'http:' + item.img}} />

                    <View style={styles.goodInfo}>

                        <Text style={styles.goodTit} numberOfLines={2}>{item.txt}</Text>

                        <View style={styles.goodRow}>
                            <Text style={styles.nPrice}><Text style={styles.yen}>&yen;</Text> {item.orderprice || item.price}</Text>
                            <Text style={styles.oPrice}>&yen;{item.originalprice}</Text>
                        </View>
                        <View style={styles.goodExtra}>
                            <Text style={styles.goodSold}>{item.realMonthSellNum || 0}人已购买</Text>
                            <View style={styles.goodBtnWarp}>
                                <Text style={styles.goodBtn}>立即购买</Text>
                            </View>

                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }

});
