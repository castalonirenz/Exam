import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "../views/HomeScreen";



const StackNav = createStackNavigator({
    Home:{
        screen: HomeScreen
    }
},{
    defaultNavigationOptions:{
        header: null
    }
})

export const HomeNavContainer = createAppContainer(StackNav)

