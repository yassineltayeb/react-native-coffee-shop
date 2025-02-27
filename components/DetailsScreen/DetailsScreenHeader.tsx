import { useNavigation } from "@react-navigation/native";
import ButtonIcon from "components/buttons/ButtonIcon";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "theme/these";

interface DetailsScreenHeaderProps {
  isFavorite?: boolean;
  onPressLeft?: any;
  onPressRight?: any;
  hideBackButton: boolean;
  hideFavoriteButton?: boolean;
  title?: string;
}

const DetailsScreenHeader: React.FC<DetailsScreenHeaderProps> = ({
  isFavorite,
  onPressLeft,
  onPressRight,
  hideBackButton,
  hideFavoriteButton,
  title
}) => {
  return (
    <View style={styles.container}>
      <View>
        {!hideBackButton && (
          <ButtonIcon
            name="chevron-back"
            color={COLORS.secondaryLightGreyHex}
            size={FONTSIZE.size_16}
            onPress={onPressLeft}
          />
        )}
      </View>
      <Text style={styles.headerText}>{title}</Text>
      <View>
        {!hideFavoriteButton && (
          <ButtonIcon
            name="heart"
            color={
              isFavorite ? COLORS.primaryRedHex : COLORS.secondaryLightGreyHex
            }
            size={FONTSIZE.size_16}
            onPress={onPressRight}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  
});

export default DetailsScreenHeader;
