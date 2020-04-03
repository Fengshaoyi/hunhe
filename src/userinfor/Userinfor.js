import React,{Component} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import {View,
        StyleSheet,
        Text,
        TextInput,
        ScrollView,
        Image
} from 'react-native';

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: 180,
        backgroundColor:'#f23030',
    },
    box1: {
        width: '100%',
        height: 80,
    },
    btn:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'white',
        justifyContent: 'center',
        marginLeft:180,
        marginTop:50
    },
    username: {
        color: 'white',
        fontSize: 18,
        justifyContent: 'center',
        marginLeft:205,
        marginTop:10
    },
    wode: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    box2: {
        width: '100%',
        height: 140,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    box3: {
        width: '33%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    font: {
        marginTop: 10,
        color: "#727171",
    },
    huodong:{
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10
    },
    box4:{
        width: '100%',
        height: 140,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginTop:2
    },
    box5: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default class Person extends Component{
    constructor(){
        super();
        let data = [];
        for(var i=0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data,
            imageUrl:''
        }
    }
    takephoto = ()=>{
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            this.setState({imageUrl:{uri:image.path}})
          });
    }
    render(){
        return(
            <ScrollView>
                <View style={{ backgroundColor: "#f5f5f5" }}>
                <View style={styles.box}>
                    <Button 
                        onPress={()=>{this.takephoto()}}
                        style={styles.btn}
                    >
                        <Image 
                            style={styles.btn}
                            source={this.state.imageUrl}
                        />
                    </Button>
                    <Text style={styles.username}>用户名</Text> 
                </View>
                <Image source={require('../assets/201.png')} style={styles.box1}/>
                
                <View style={styles.wode}>
                    <Image source={require('../assets/202.png')}/>
                    <Text style={{ marginLeft: 10, color: '#727171' }}>我的个人中心</Text>
                </View>
                <View style={{ backgroundColor: 'white',marginTop:2}}>
                    <View style={styles.box2}>
                        <View style={styles.box3}>
                            <Image source={require('../assets/203.png')}/>
                            <Text style={styles.font}>账户管理</Text>
                        </View>
                        <View style={styles.box3}>
                            <Image source={require('../assets/204.png')}/>
                            <Text style={styles.font}>收货地址</Text>
                        </View>
                        <View style={styles.box3}>
                            <Image source={require('../assets/205.png')}/>
                            <Text style={styles.font}>我的信息</Text>
                        </View>
                        <View style={styles.box3}>
                            <Image source={require('../assets/206.png')}/>
                            <Text style={styles.font}>我的订单</Text>
                        </View>
                        <View style={styles.box3}>
                            <Image source={require('../assets/207.png')}/>
                            <Text style={styles.font}>我的二维码</Text>
                        </View>
                        <View style={styles.box3}>
                            <Image source={require('../assets/208.png')}/>
                            <Text style={styles.font}>我的积分</Text>
                        </View>
                    </View>
                    <View style={styles.box3}>
                        <Image source={require('../assets/209.png')}/>
                        <Text style={styles.font}>我的收藏</Text>
                    </View>
                </View>
                <View style={styles.huodong}>
                    <Image source={require('../assets/210.png')} style={{ marginLeft: 10 }}/>
                    <Text style={{ marginLeft: 10, color: '#727171' }}>E族活动</Text>
                </View>
                    <View style={styles.box4}>
                        <View style={styles.box3}>
                            <Image source={require('../assets/209.png')}/>
                            <Text style={styles.font}>居家维修保养</Text>
                        </View>
                        <View style={styles.box3}>
                            <Image source={require('../assets/209.png')}/>
                            <Text style={styles.font}>出行接送</Text>
                        </View>
                        <View style={styles.box3}>
                            <Image source={require('../assets/209.png')}/>
                            <Text style={styles.font}>我的受赠人</Text>
                        </View>
                        <View style={styles.box3}>
                            <Image source={require('../assets/209.png')}/>  
                            <Text style={styles.font}>我的住宿优惠</Text>
                        </View>
                        <View style={styles.box3}>
                            <Image source={require('../assets/209.png')}/>
                            <Text style={styles.font}>我的活动</Text>
                        </View>
                        <View style={styles.box3}>
                            <Image source={require('../assets/209.png')}/>
                            <Text style={styles.font} onPress={()=>Actions.publish()}>我的发布</Text>
                        </View>
                    </View>
                    <View style={styles.box5}>
                        <Text>BINNU DHILLON | 退出</Text>
                    </View>
            </View>


            </ScrollView>     
        )
    }
}