/**
 * Created by wangmin on 16/11/16.
 */
import React from 'react';
import {
    StyleSheet,PixelRatio
} from 'react-native';

const appcss = StyleSheet.create({
    container:{
        marginTop:25,
        marginLeft:5,
        marginRight:5,
        height:84,
        flexDirection:'row',
        borderRadius:5,
        padding:2,
        backgroundColor:'#ff0067'
    },
    item:{
        flex:1,
        height:80
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    flex:{
        flex:1
    },
    font:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    lineLeftRight:{
        borderLeftWidth:2/PixelRatio.get(),
        borderRightWidth:2/PixelRatio.get(),
        borderColor:'#fff'
    },
    lineCenter:{
        borderBottomWidth:2/PixelRatio.get(),
        borderColor:'#fff'
    }
    });

module.exports = appcss;