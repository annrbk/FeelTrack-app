import React, { useEffect, useState } from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { usePlayer } from "../PlayerContext";
import MiniPlayer from "./MiniPlayer";
import AudioPlayer from "./AudioPlayer";
import { styles as sheetStyles } from "../styles/BottomSheet.styles";

const { height: screenHeight } = Dimensions.get("screen");

export default function BottomSheet({ duration = 400 }) {
  const { currentTrack } = usePlayer();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFullPlayer, setShowFullPlayer] = useState(false);

  const timingConfig = {
    duration,
    easing: Easing.bezier(0.25, 1, 0.5, 1),
  };

  const animatedHeight = useSharedValue(80);
  const animatedBottom = useSharedValue(-150);

  useEffect(() => {
    if (!currentTrack) {
      animatedBottom.value = withTiming(-150, timingConfig);
      setIsExpanded(false);
      setShowFullPlayer(false);
    } else {
      if (isExpanded) {
        animatedHeight.value = withTiming(screenHeight, timingConfig);
        animatedBottom.value = withTiming(0, timingConfig);
      } else {
        animatedHeight.value = withTiming(80, timingConfig);
        animatedBottom.value = withTiming(82, timingConfig);
      }
    }
  }, [currentTrack, isExpanded]);

  const toggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setTimeout(() => setShowFullPlayer(false), duration - 80);
    } else {
      setShowFullPlayer(true);
      setIsExpanded(true);
    }
  };

  const sheetStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
      bottom: animatedBottom.value,
      zIndex: isExpanded ? 10 : 2,
    };
  });

  const backdropStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isExpanded ? 1 : 0, timingConfig),
    };
  });

  if (!currentTrack) return null;

  return (
    <>
      <Animated.View
        style={[sheetStyles.backdrop, backdropStyle]}
        pointerEvents={isExpanded ? "auto" : "none"}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => setIsExpanded(false)}
          activeOpacity={1}
        />
      </Animated.View>
      <Animated.View style={[sheetStyles.sheet, sheetStyle]}>
        {showFullPlayer ? (
          <AudioPlayer toggleExpand={toggleExpand} />
        ) : (
          <MiniPlayer toggleExpand={toggleExpand} />
        )}
      </Animated.View>
    </>
  );
}
