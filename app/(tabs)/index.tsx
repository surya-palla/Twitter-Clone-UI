import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import tweets from "../../assets/data/tweets";
import SingleTweet from "../../components/Tweets/singleTweet";

export default function TabOneScreen() {
  return (
    <View style={styles.homePage}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <SingleTweet tweet={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
  },
});
