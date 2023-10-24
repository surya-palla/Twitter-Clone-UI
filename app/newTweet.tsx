import { useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";

import ProfileImage from "../components/profileImage";
import { Link, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const user = {
  id: "123456789",
  name: "Jeff B",
  username: "bezos",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg",
};

export default function NewTweet() {
  const [text, setText] = useState<string>();
  const router = useRouter();

  const onTweetPress = () => {
    console.warn("Posting the tweet", text);
    setText("");
    router.back();
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href={"../"} style={{ fontSize: 18 }}>
            Cancel
          </Link>
          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <ProfileImage imageSrc={user.image} />
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="What's happening around you?"
            multiline
            numberOfLines={5}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1C9BF0",
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
