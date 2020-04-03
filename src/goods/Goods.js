import React,{Component} from 'react';
import {View,
        StyleSheet,
        Text,
        TextInput,
        Image
} from 'react-native';

const styles = StyleSheet.create({
    box:{
        width:'100%',
        height:70,
        backgroundColor:'white',
        flexDirection:'row',
    },
    next:{
        width:'100%',
        height:1,
        backgroundColor:'#eee',
    },
    txt:{
        fontSize:17,
        color:'black',
        paddingLeft:25
    },
    txt1:{
        color:'red',
        fontSize:17,
        paddingLeft:25
    },
    inp:{
        width:400,
        height:45,
        left:30,
        top:10,
        backgroundColor:'#eee',
    },
    img1:{
        width:45,
        height:45,
        top:10,
    },
    list:{
        flexDirection:'row',
        height:60,
        width:'100%',
        backgroundColor:'white'
    },
    listC:{
        flex:1,
        justifyContent:'center',
    },
    content:{
        width:'100%',
        height:700,
    },
    content1:{
        width:'90%',
        height:210,
        flexDirection:'row',
        marginLeft:20,
        marginTop:12
    },
    cont1:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    },
    cont2:{
        flex:1,
        backgroundColor:'white',
        marginLeft:20
    },
    img2:{
        marginLeft:35,
    },
    img3:{
        marginLeft:35,
    },
    txt2:{
        color:'gray',
        fontSize:14,
        paddingLeft:5,
        paddingTop:13
    },
    txt3:{
        color:'red',
        fontSize:14,
        paddingTop:10,
        paddingLeft:5
    }
})

export default class Table extends Component{
    render(){
        return(
            <View>
                <View style={styles.box}>
                    <TextInput style={styles.inp} placeholder="请输入商品名称" placeholderTextColor="gray"/>
                    <Image source={require("../pic/search.png")} style={styles.img1}/>
                </View>
                <View style={styles.next}></View>
                <View style={styles.list}>
                    <View style={styles.listC}>
                        <Text style={styles.txt1}>综合</Text>
                    </View>
                    <View style={styles.listC}>
                        <Text style={styles.txt}>销量</Text>
                    </View>
                    <View style={styles.listC}>
                        <Text style={styles.txt}>新品</Text>
                    </View>
                    <View style={styles.listC}>
                        <Text style={styles.txt}>价格</Text>
                    </View>
                    <View style={styles.listC}>
                        <Text style={styles.txt}>信用</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.content1}>
                        <View style={styles.cont1}>
                            <Image source={require('../pic/01.png')} style={styles.img2}/>
                            <Text style={styles.txt2}>Qishi/上好佳玉米卷20包膨化休闲食品Qishi/上好佳</Text>
                            <Text style={styles.txt3}>36.00</Text>
                        </View>
                        <View style={styles.cont2}>
                            <Image source={require('../pic/02.png')} style={styles.img3}/>
                            <Text style={styles.txt2}>Qishi/上好佳玉米卷20包膨化休闲食品Qishi/上好佳</Text>
                            <Text style={styles.txt3}>36.00</Text>
                        </View>
                    </View>
                    <View style={styles.content1}>
                        <View style={styles.cont1}>
                            <Image source={require('../pic/01.png')} style={styles.img2}/>
                            <Text style={styles.txt2}>Qishi/上好佳玉米卷20包膨化休闲食品Qishi/上好佳</Text>
                            <Text style={styles.txt3}>36.00</Text>
                        </View>
                        <View style={styles.cont2}>
                            <Image source={require('../pic/02.png')} style={styles.img3}/>
                            <Text style={styles.txt2}>Qishi/上好佳玉米卷20包膨化休闲食品Qishi/上好佳</Text>
                            <Text style={styles.txt3}>36.00</Text>
                        </View>
                    </View>
                    <View style={styles.content1}>
                        <View style={styles.cont1}>
                            <Image source={require('../pic/01.png')} style={styles.img2}/>
                            <Text style={styles.txt2}>Qishi/上好佳玉米卷20包膨化休闲食品Qishi/上好佳</Text>
                            <Text style={styles.txt3}>36.00</Text>
                        </View>
                        <View style={styles.cont2}>
                            <Image source={require('../pic/02.png')} style={styles.img3}/>
                            <Text style={styles.txt2}>Qishi/上好佳玉米卷20包膨化休闲食品Qishi/上好佳</Text>
                            <Text style={styles.txt3}>36.00</Text>
                        </View>
                    </View>
                </View>
            </View>        
        )
    }
}