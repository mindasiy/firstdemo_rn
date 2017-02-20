/**
 * Created by wangmin on 16/11/17.
 */
import React, { Component } from 'react';
import { PixelRatio } from 'react-native';
var Dimensions=require('Dimensions');
var Util={
    pixel:1/PixelRatio.get(),
    size:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('widow').height
    },
    //post请求
    post:function(url,data,callback){
     var fetchOptions={
        method:'POST',
         headers:{
             'Accept':'application/json',
             'Content-Type':'application/json'
         },
         body:JSON.stringify(data)
     };
        fetch(url,fetchOptions).then((response)=>response.text()).then((responseText)=>{
            callback(JSON.parse(responseText));
        });
    },
    key:'hwhhhwhshwhshwhhsw'
};
module.exports=Util;
