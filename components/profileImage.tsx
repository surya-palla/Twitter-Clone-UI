import { Image, StyleSheet } from "react-native";

type profileImageProps = {
  imageSrc?: string;
};

const ProfileImage = ({ imageSrc }: profileImageProps) => {
  return <Image style={styles.profileImage} source={{ uri: imageSrc }} />;
};
const styles = StyleSheet.create({
  profileImage: {
    marginLeft: 1,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default ProfileImage;
