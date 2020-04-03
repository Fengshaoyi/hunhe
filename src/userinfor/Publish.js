import React, { Component } from 'react'
import {
    View, 
    Text, 
    AsyncStorage,
    ScrollView,
    StyleSheet,
    StatusBar,
    ToastAndroid
} from 'react-native';
import Button from 'react-native-button';
const styles = StyleSheet.create({
    box:{
        width: '100%',
        height: 50,
        backgroundColor:'white',
        marginBottom:1,
        flexDirection: 'row',
    },
    text1:{
        marginTop: 20,
        color: "#727171",
        fontSize:15,
        marginLeft:5,
        width:230
    },
    btn:{
        width:120,
        height:35,
        borderRadius:20,
        backgroundColor:'#f23030',
        color:'white',
        fontSize:15,
        paddingTop:5,
        marginLeft:40,
        marginTop:30
    },
    btn1:{
        width:120,
        height:35,
        borderRadius:20,
        backgroundColor:'#f23030',
        color:'white',
        fontSize:15,
        paddingTop:5,
        marginLeft:60,
        marginTop:30
    },
    box1:{
        flexDirection: 'row',
        backgroundColor:'white',
        height:100
    },
    text2:{
        fontSize:15,
        paddingTop:8,
        paddingLeft:60,
        marginTop:30
    }
})

export default class Publish extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            nowPage: 1,
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page=' + '&limit=12')
            .then(res=>res.json())
            .then(res=>{
                this.setState({data: res.data});
            })
    }
    nextone = ()=>{
        if(this.state.nowPage >= this.state.data.length/12){
            ToastAndroid.show("已经为最后一页",1000);
        }else{
            this.setState({
                nowPage:this.state.nowPage+1
            })
        }
        
    }
    lastone = ()=>{
        if(!(this.state.nowPage-1)){
            ToastAndroid.show("已经为第一页",1000);
        }else{
            this.setState({
                nowPage:this.state.nowPage-1
            })
        }
        
    }
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <ScrollView>
                    {
                        this.state.data.map((item)=>( 
                            <View style={styles.box}>
                                <Text style={styles.text1}>{item.title ? (item.title.length > 15 ? item.title.substr(0, 15) + "..." : item.title) : ""}</Text>
                                <Text style={styles.text1}>{item.create_at}</Text>
                            </View>
                        ))
                    }
                <View style={styles.box1}>
                    <Button style={styles.btn} onPress={()=>{this.lastone()}}>上一页</Button>
                    <Text style={styles.text2}>第{this.state.nowPage}页</Text>
                    <Button style={styles.btn1} onPress={()=>{this.nextone()}}>下一页</Button>
                </View>
                </ScrollView>
            </View>
        )
    }
}