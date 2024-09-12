import { TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Link } from 'expo-router';  

const TabBarButton = ({ title, icon, targetScreen }) => {
  const scale = useSharedValue(1);
  const [pressed, setPressed] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(1.2);
    setPressed(true)  
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);  
  };

  return (
    <Link href={targetScreen} asChild>
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.buttonStyle}
    >
      {/* Wrapping the Animated.View and icon inside a single View */}
      <View>
        <Animated.View style={animatedStyle}>
          {icon}
        </Animated.View>
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  </Link>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});

export default TabBarButton;
