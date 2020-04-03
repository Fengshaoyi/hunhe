import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  BackHandler,
  ToastAndroid,
  AsyncStorage,
} from 'react-native';
import {
  Router,
  Overlay,
  Scene,
  Tabs,
  Drawer,
  Lightbox,
  Modal,
  Actions,
} from 'react-native-router-flux';
import {Icon} from '@ant-design/react-native';
// import SplashScreen from 'react-native-splash-screen'
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Userinfor from './src/userinfor/Userinfor';
import Login from './src/common/Login';
import Sign from './src/common/Sign';
import SwiperPage from './src/common/SwiperPage';
import Publish from './src/userinfor/Publish';

console.disableYellowBox = true;

const rootUrl =
  'https://www.fastmock.site/mock/65721c49c01f167ea082d0dc81fb0c41/api';

const App = () => {

  let [isLogin,setLogin] = useState(false);
  let [isInstall,setInstall] = useState(true);
	let now = 0;
	useEffect(()=>{
    AsyncStorage.getItem('isInstall')
    .then(res=>{
      if(res){
        setInstall(false);
      }
    })
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
  },[])

  //判断是否第一次安装
  let afterInstall = ()=>{
    setInstall(false)
  }
  if(isInstall){
    return <View style={{flex:1}}>
		<SwiperPage afterInstall={afterInstall}/>
	</View>
  }

  return (
    <Router
      backAndroidHandler={() => {
        if (Actions.currentScene != 'home') {
          Actions.pop();
          return true;
        } else {
          if (new Date().getTime() - now < 2000) {
            BackHandler.exitApp();
          } else {
            ToastAndroid.show('确定要退出吗', 100);
            now = new Date().getTime();
            return true;
          }
        }
      }}>
      <Overlay>
        <Modal key="modal" hideNavBar>
          <Lightbox key="lightbox">
            <Drawer
              key="drawer"
              contentComponent={() => <Text>drawer</Text>}
              drawerIcon={() => <Icon name="menu" />}
              drawerWidth={400}>
              <Scene key="root">
                <Tabs
                  key="tabbar"
                  hideNavBar
                  activeTintColor="red"
                  inactiveTintColor="blue"
                  tabBarStyle={{backgroundColor: 'white'}}>
                  {/* 首页 */}
                  <Scene
                    key="homePage"
                    title="首页"
                    icon={({focused}) => (
                      <Icon color={focused ? 'red' : 'blue'} name="home" />
                    )}>
                    <Scene key="home" hideNavBar={true} component={Home} />
                  </Scene>
                  {/* 商品分类 */}
                  <Scene
                    key="goodsPage"
                    hideNavBar
                    title="商品分类"
                    icon={({focused}) => (
                      <Icon color={focused ? 'red' : 'blue'} name="file" />
                    )}>
                    <Scene key="goods" component={Goods} />
                  </Scene>
                  {/* 用户中心 */}
                  <Scene
                    key="userPage"
                    hideDrawerButton
                    icon={({focused}) => (
                      <Icon color={focused ? 'red' : 'blue'} name="file" />
                    )}
                    title="用户中心"
                  >
                    <Scene key="user" hideNavBar={true} component={Userinfor} />
                    <Scene key="publish" hideNavBar={true} component={Publish} />
                </Scene>
                
                </Tabs>
              </Scene>
            </Drawer>
          </Lightbox>
          <Scene initial={true} key="login" component={Login} />
          <Scene key="sign" component={Sign} hideNavBar />
        </Modal>
      </Overlay>
    </Router>
  );
};

export default App;
