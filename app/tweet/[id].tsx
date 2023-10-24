import SingleTweet from "../../components/Tweets/singleTweet";
import tweets from "../../assets/data/tweets";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function () {
  const { id } = useLocalSearchParams<{ id: string }>();
  const clickedTweet = tweets.find((t) => t.id === id);
  if (!clickedTweet) {
    return <Text>Tweet with id: {id} Not found</Text>;
  }
  return <SingleTweet tweet={clickedTweet} />;
}
