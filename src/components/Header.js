/**
 * Created by wangmin on 16/11/17.
 */
import React, { Component } from 'react';
import { StyleSheet, Text,Image, View,TextInput,PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="search" size={15} color="#fff"/>);
var Header=React.createClass({
    render:function(){
        return(
            <View style={[headercss.flex,headercss.header,headercss.flexDirection]}>
                <View style={headercss.flex}>
                    <TextInput style={headercss.input} returnKeyType="search"/>
                </View>
                <View style={headercss.btn}>
                    {myIcon}
                </View>
            </View>
        )
    }
});
var headercss=StyleSheet.create({
    header:{
        marginTop:25
    },
    flex:{
        flex:1,
    },
    flexDirection:{
        flexDirection:'row'
    },
    topStatus:{
        marginTop:25
    },
    input:{
        height:45,
        borderWidth:1,
        marginLeft:5,
        paddingLeft:5,
        borderColor:'#ccc',
        borderRadius:4
    },
    btn:{
        width:55,
        marginLeft:-5,
        marginRight:5,
        backgroundColor:'#ccc',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:4,
        borderBottomRightRadius:4
    },
    search:{
        color:'#fff',
        fontSize:25,
        fontWeight:'bold'
    }
});
module.exports=Header;
