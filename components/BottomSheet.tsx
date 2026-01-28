import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { usePlayer } from "../PlayerContext";
import MiniPlayer from "./MiniPlayer";
import AudioPlayer from "./AudioPlayer";
import { styles as sheetStyles } from "../styles/BottomSheet.styles";

export default function BottomSheet({ duration = 400 }) {
  const { currentTrack } = usePlayer();
  const [isExpanded, setIsExpanded] = useState(false);

  const height = useSharedValue(0);
  const isVisible = useSharedValue(false);
  const isExpandedAnimated = useSharedValue(false);
  const animatedHeight = useSharedValue(80);

  useEffect(() => {
    if (currentTrack !== null) {
      isVisible.value = true;
    } else {
      isVisible.value = false;
    }
  }, [currentTrack]);

  useEffect(() => {
    isExpandedAnimated.value = isExpanded;
    animatedHeight.value = withTiming(isExpanded ? 800 : 80, { duration });
  }, [isExpanded]);

  const progress = useDerivedValue(() =>
    withTiming(isVisible.value ? 0 : 1, { duration })
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: progress.value * 2 * height.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isExpandedAnimated.value ? 1 : 0, { duration }),
    zIndex: isExpandedAnimated.value
      ? 1
      : withDelay(duration, withTiming(-1, { duration: 0 })),
  }));

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => setIsExpanded(false)}
        ></TouchableOpacity>
      </Animated.View>
      <Animated.View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={[
          sheetStyles.sheet,
          sheetStyle,
          useAnimatedStyle(() => ({ height: animatedHeight.value })),
        ]}
      >
        {isExpanded ? (
          <AudioPlayer toggleExpand={toggleExpand} />
        ) : (
          <MiniPlayer toggleExpand={toggleExpand} />
        )}
      </Animated.View>
    </>
  );
}
