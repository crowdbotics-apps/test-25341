import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile219530Navigator from '../features/UserProfile219530/navigator';
import Maps219511Navigator from '../features/Maps219511/navigator';
import Settings219489Navigator from '../features/Settings219489/navigator';
import Settings219474Navigator from '../features/Settings219474/navigator';
import NotificationList219473Navigator from '../features/NotificationList219473/navigator';
import Maps219472Navigator from '../features/Maps219472/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile219530: { screen: UserProfile219530Navigator },
Maps219511: { screen: Maps219511Navigator },
Settings219489: { screen: Settings219489Navigator },
Settings219474: { screen: Settings219474Navigator },
NotificationList219473: { screen: NotificationList219473Navigator },
Maps219472: { screen: Maps219472Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
