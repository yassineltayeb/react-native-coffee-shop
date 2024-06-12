import ButtonIcon from "components/buttons/ButtonIcon";
import { StyleSheet, View, Text } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "theme/these";
import ProfilePic from "./ProfilePic";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <ButtonIcon
        name="grid"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.headerText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default Header;
