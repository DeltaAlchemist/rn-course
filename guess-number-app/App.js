import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { StartGameScreen } from './screens/StartGameScreen';
import { useState } from 'react';
import { GameScreen } from './screens/GameScreen';
import Colors from './constants/colors';
import { GameOverScreen } from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.root}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.root}
          imageStyle={styles.backgroundImage}
        >
          {/* SafeAreaView used to make sure content is not hidden by notches */}
          <SafeAreaView style={styles.root}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.18,
  },
});
