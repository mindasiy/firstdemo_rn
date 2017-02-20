import React, { Component } from 'react';
import { AppRegistry, StyleSheet,TabBarIOS,ScrollView, NavigatorIOS,Text,Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import appcss from './public/style';
import Header from './src/components/Header';
import Home from './views/home';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'index',
            notifCount: 0,
            presses: 0,
        };
    }

    render() {
        return (
            <View style={{flex:1}}>
                <TabBarIOS
                    style={{flex:1,alignItems:"flex-end"}}
                    tintColor="#000"
                    barTintColor="#fff">
                    <TabBarIOS.Item
                        title="首页"
                        icon={require('./src/images/salegray.png') }
                        selected={this.state.selectedTab === 'index'}
                        onPress={() => {
                        this.setState({
                          selectedTab: 'index',
                        });
                      }}
                    >

                        <NavigatorIOS
                            style={{flex : 1,backgroundColor: '#000000'}}
                            tintColor='#cccccc'
                            barTintColor='#cccccc'
                            initialRoute={{
                              title: '商城首页',
                              component: Home,
                              passProps:{},
                            }}

                        />
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title='分类'
                        icon={require('./src/images/timer.png')}
                        selected={this.state.selectedTab === '历史'}
                        badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                        onPress={() => {
                        this.setState({
                          selectedTab: '历史',
                          notifCount: this.state.notifCount + 1,
                        });
                      }}
                    >
                        <View>
                            <Text>111</Text>

                        </View>

                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="downloads"
                        selected={this.state.selectedTab === '下载'}
                        onPress={() => {
                        this.setState({
                          selectedTab: '下载',
                          presses: this.state.presses + 1
                        });
                        }}
                    >
                        <View>
                            <Text>22</Text>

                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title='分类'
                        icon={require('./src/images/megray.png')}
                        selected={this.state.selectedTab === 'center'}
                        onPress={() => {
                        this.setState({
                          selectedTab: 'center',
                          presses: this.state.presses + 1
                        });
                        }}
                    >
                        <View>
                            <Text>我</Text>

                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});
AppRegistry.registerComponent('AwesomeProject', () => App);