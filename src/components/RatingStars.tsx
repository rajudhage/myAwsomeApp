import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface RatingProps {
  rating: number;   // e.g., 3.5
  max?: number;     // default = 5
}

const RatingStars = ({ rating, max = 5 }: RatingProps) => {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    let icon = "star-outline"; // empty

    if (i <= Math.floor(rating)) {
      icon = "star";            // filled
    } else if (i - rating < 1) {
      icon = "star-half-full";  // half-filled
    }

    stars.push(
      <Icon
        key={i}
        name={icon}
        size={22}
        color="#FFD700"  // gold color
        style={{ marginRight: 2 }}
      />
    );
  }

  return <View style={styles.starContainer}>{stars}</View>;
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RatingStars;
