import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import IconButton from "../IconButton";
import ProfileImage from "../profileImage";

import { Tweet } from "../../types";

type TweetProps = {
  tweet: Tweet;
};

const SingleTweet = ({ tweet }: TweetProps) => {
  return (
    <Link href={`/tweet/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <ProfileImage imageSrc={tweet.user.image} />
        <View style={styles.mainContainer}>
          <View style={styles.profileNameContainer}>
            <Text style={styles.name}>{tweet.user.username}</Text>
            <Text style={styles.username}> @{tweet.user.name} · 2h</Text>
            <Entypo
              style={{ marginLeft: "auto" }}
              name="dots-three-horizontal"
              size={16}
              color="grey"
            />
          </View>
          <Text style={styles.tweetContent}>{tweet.content}</Text>
          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={styles.postImage} />
          )}
          <View style={styles.tweetFooter}>
            <IconButton
              iconName={"comment"}
              iconValue={tweet.numberOfComments}
            />
            <IconButton
              iconName={"retweet"}
              iconValue={tweet.numberOfRetweets}
            />
            <IconButton iconName={"heart"} iconValue={tweet.numberOfLikes} />
            <IconButton iconName={"chart"} iconValue={tweet.impressions || 0} />
            <IconButton iconName={"share-apple"} />
          </View>
        </View>
      </Pressable>
    </Link>
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
  username: {
    color: "grey",
  },
  profileNameContainer: {
    flexDirection: "row",
  },
  postImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },
  tweetFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default SingleTweet;
