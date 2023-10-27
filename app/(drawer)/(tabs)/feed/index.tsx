import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import tweets from "../../../../assets/data/tweets";
import SingleTweet from "../../../../components/Tweets/singleTweet";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.homePage}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <SingleTweet tweet={item} />}
      />

      <Link href={"/newTweet"} style={styles.floatingButton}>
        <Entypo name="plus" size={24} color="white" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",
    borderRadius: 50,
    padding: 15,
    position: "absolute",
    right: 20,
    bottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
