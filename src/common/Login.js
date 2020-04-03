import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, ToastAndroid, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
        // myFetch.get('/topics',{limit:4,user:'sss'})
        //     .then(res=>console.log(res))
        this.setState({isloading:true})
        if(this.state.username && this.state.pwd ){
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
            // 根据返回状态进行判断，正确时跳转首页
            // if(res){

            // }
            if(res.data.status == '2'){
                ToastAndroid.show('网络连接错误', 800)
            }else if(this.state.pwd.length < 6){
                ToastAndroid.show('密码至少六位字符，请重新核对密码', 800)
            }else{
                ToastAndroid.show('正在登录 loading.....', 1500)
                AsyncStorage.setItem('user', JSON.stringify(res.data))
                .then(() => {
                      console.log('success');
                      setTimeout(function(){
                          Actions.homePage();
                      },1000)
                })
            }
          });
        }else if(!this.state.username){
            ToastAndroid.show('用户名不能为空', 1500)
        }else if(!this.state.pwd){
            ToastAndroid.show('密码不能为空', 1500)
        }
    }
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
            <TouchableOpacity 
                style={{
                    width: '60%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius:20,
                    borderWidth:1,
                    backgroundColor:'rgb(245,245,245)',
                    borderColor:'red'
                }}
                onPress={this.login}>
                <Text style={{color:'red', fontSize:16}}>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                width: '60%',
                height: 40,
                backgroundColor: '#ccc',
                marginTop: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius:20,
                borderWidth:1,
                backgroundColor:'rgb(245,245,245)',
                borderColor:'red'
              }}
                onPress={()=>Actions.sign()}
                >
                <Text style={{color:'red', fontSize:16}}>注册</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}