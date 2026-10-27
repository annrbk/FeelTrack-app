import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, Dimensions, PanResponder } from "react-native";
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
import { TAB_BAR_HEIGHT } from "../constants/layout";

const { height: screenHeight } = Dimensions.get("screen");

export default function BottomSheet({ duration = 400 }) {
  const { currentTrack } = usePlayer();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFullPlayer, setShowFullPlayer] = useState(false);
  const isExpandedRef = useRef(false);

  const timingConfig = {
    duration,
    easing: Easing.bezier(0.25, 1, 0.5, 1),
  };

  const animatedHeight = useSharedValue(70);
  const animatedBottom = useSharedValue(-150);

  useEffect(() => {
    if (!currentTrack) {
      animatedBottom.value = withTiming(-150, timingConfig);
      setIsExpanded(false);
      isExpandedRef.current = false;
      setShowFullPlayer(false);
    } else {
      if (isExpanded) {
        animatedHeight.value = withTiming(screenHeight, timingConfig);
        animatedBottom.value = withTiming(0, timingConfig);
      } else {
        animatedHeight.value = withTiming(70, timingConfig);
        animatedBottom.value = withTiming(TAB_BAR_HEIGHT, timingConfig);
      }
    }
  }, [currentTrack, isExpanded]);

  const toggleExpand = () => {
    if (isExpandedRef.current) {
      setIsExpanded(false);
      isExpandedRef.current = false;
      setTimeout(() => setShowFullPlayer(false), duration - 80);
    } else {
      setShowFullPlayer(true);
      setIsExpanded(true);
      isExpandedRef.current = true;
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        isExpandedRef.current &&
        gestureState.dy > 8 &&
        Math.abs(gestureState.dy) > Math.abs(gestureState.dx),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 80) {
          toggleExpand();
        }
      },
    }),
  ).current;

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
          onPress={() => {
            setIsExpanded(false);
            isExpandedRef.current = false;
          }}
          activeOpacity={1}
        />
      </Animated.View>
      <Animated.View
        style={[sheetStyles.sheet, sheetStyle]}
        {...panResponder.panHandlers}
      >
        {showFullPlayer ? (
          <AudioPlayer toggleExpand={toggleExpand} />
        ) : (
          <MiniPlayer toggleExpand={toggleExpand} />
        )}
      </Animated.View>
    </>
  );
}
