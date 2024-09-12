import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import TabBarButton from '../Components/TabBarButton';

const tabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBarContainer,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarButton: (props) => (
            <TabBarButton 
              title="My Notes" 
              icon={<MaterialIcons name="notes" size={24} color="black" />} 
              targetScreen="/home" 
              {...props} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarButton: (props) => (
            <TabBarButton 
              title="Profile" 
              icon={<Feather name="user" size={24} color="black" />} 
              targetScreen="/profile" 
              {...props} 
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = {
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#BDE8CA',
    borderRadius: 20,
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
  },
};

export default tabsLayout;
