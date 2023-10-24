import { Image, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

import { Tweet } from "../../types";

type TweetProps = {
  tweet: Tweet;
};

const SingleTweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={{ uri: tweet.user.image }} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.tweetContent}>{tweet.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  profileImage: {
    marginLeft: 1,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "600",
  },
  tweetContent: {
    lineHeight: 20,
    marginTop: 5,
  },
});

export default SingleTweet;
