import { EvilIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type IconProps = {
  iconName: React.ComponentProps<typeof EvilIcons>["name"];
  iconValue?: string | number;
};

const IconButton = ({ iconName, iconValue }: IconProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <EvilIcons name={iconName} size={22} color="gray" />
      <Text style={{ fontSize: 12, color: "gray" }}>{iconValue}</Text>
    </View>
  );
};

export default IconButton;
