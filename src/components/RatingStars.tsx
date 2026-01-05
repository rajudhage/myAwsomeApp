import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../contants/theme";

interface RatingProps {
  rating: number;   // e.g., 3.5
  max?: number;     // default = 5
  review?: number;
}

const RatingStars = ({ rating, max = 5, review }: RatingProps) => {
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
        color="#f5820d"  // gold color
        style={{ marginRight: 2 }}
      />
    );
  }

  return (
    <View style={styles.starContainer}>
      <Text>{rating}</Text>{stars}
      <Text style={styles.reviews}>
        {`(${review})`}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviews: {
    color: colors.blue
  }
});

export default RatingStars;
