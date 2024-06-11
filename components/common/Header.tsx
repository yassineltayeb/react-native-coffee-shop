import ButtonIcon from "components/buttons/ButtonIcon";
import { StyleSheet, View } from "react-native";
import { COLORS, FONTSIZE, SPACING } from "theme/these";
import ProfilePic from "./ProfilePic";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.container}>
      <ButtonIcon
        name="grid"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <ProfilePic path="../../assets/images/app/avatar.png" size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
});

export default Header;
