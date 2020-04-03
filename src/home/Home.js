import React,{Component} from 'react';
import {View,
        StyleSheet,
        Text,
        TextInput,
        Image,
        Button,
        ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
//关闭全部黄色警告
console.disableYellowBox = true; 

const styles = StyleSheet.create({
    box:{
        width:'100%',
        height:65,
        backgroundColor:'red',
        flexDirection:'row',
    },

    inp:{
        width:400,
        height:45,
        backgroundColor:'#fbb8b8',
        fontSize:20,
        borderRadius:20,
        left:30,
        top:10,

    },
    lunbo:{
        width:'100%',
        height:210,
        // marginTop:-5
    },
    list:{
        height:520,
        width:'100%',
        backgroundColor:'#f5f5f5'
    },
    listC:{
        height:120,
        marginTop:10,
        backgroundColor:'white',
        flexDirection:'row'
    },
    img:{
        marginLeft:35,
        marginTop:10
    },
    img3:{
        marginLeft:35,
    },
    txt:{
        fontSize:20,
        fontWeight:'normal',
        paddingTop:50,
        paddingLeft:35
    },
    box2:{
        width:'100%',
        height:180,
        backgroundColor:'#f5f5f5'
    },
    butt:{
        width:400,
        height:55,
        backgroundColor:'#f23030',
        borderRadius:5,
        marginLeft:35,
        marginTop:40
    },
    txt1:{
        color:'white',
        justifyContent:'center',
        fontSize:20,
        textAlign:'center',
        paddingTop:12
    },
    txt2:{
        color:'gray',
        textAlign:'center',
        marginTop:50
    },
    iconStyle:{
        fontFamily:'iconfont',
        fontSize:30
    }

})

export default class Home extends Component{
    render(){
        return(
            <ScrollView>
            <View>
                <View style={styles.box}>
                    <TextInput style={styles.inp} placeholder="请输入您要搜索的关键字" placeholderTextColor="white"/>
                    <Icon name='shoppingcart' style={{paddingLeft:40,top:20}} color={'white'} size={28} />
                </View>
                <Image  source={require('../pic/lunbo.png')} style={styles.lunbo}/>
                <View style={styles.list}>
                    <View style={styles.listC}>
                        <Image  source={require('../pic/101.png')} style={styles.img}/>
                        <Text style={styles.txt}>居家维修保养</Text>
                    </View>
                    <View style={styles.listC}>
                        <Image  source={require('../pic/102.png')} style={styles.img}/>
                        <Text style={styles.txt}>住宿优惠</Text>
                    </View>
                    <View style={styles.listC}>
                        <Image  source={require('../pic/103.png')} style={styles.img}/>
                        <Text style={styles.txt}>出行接送</Text>
                    </View>
                    <View style={styles.listC}>
                        <Image  source={require('../pic/104.png')} style={styles.img}/>
                        <Text style={styles.txt}>E族活动</Text>
                    </View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.butt}>
                        <Text style={styles.txt1}>发布需求</Text>
                    </View>
                    <Text style={styles.txt2}>@E族之家 版权所有</Text>
                </View>
            </View>    
            </ScrollView>    
        )
    }
}