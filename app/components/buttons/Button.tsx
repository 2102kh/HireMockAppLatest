import { Pressable,  Text, View, ActivityIndicator } from "react-native"
import { ReactNode } from "react";
import { useTheme } from 'native-base';

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    icon?: ReactNode;
    isLoading?: boolean;
    onPress?: () => void;
};

export default function Button({
    children,
    variant = 'primary',
    icon,
    isLoading,
    onPress
}: ButtonProps) {
  const theme = useTheme();

    const getBackgroundColor = () => {
    switch (variant) {
      case "primary":
        return theme.colors.primary[400];
      case "secondary":
        return "transparent";
      case "danger":
        return theme.colors.secondary[600];
      default:
        return theme.colors.primary[400];
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case "primary":
      case "danger":
        return "white";
      case "secondary":
        return theme.colors.primary[700];
      default:
        return "white";
    }
  };

   return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: getBackgroundColor(),
          padding: theme.space[3.5],
          borderRadius: theme.radii.md,
          borderWidth: variant === "secondary" ? 2 : 0,
          borderColor: variant === "secondary" ? theme.colors.primary[400] : "transparent",
          opacity: pressed ? 0.8 : 1,
          width: '90%',
          maxWidth:400,
        },
        isLoading && { opacity: 0.6 },
      ]}
      disabled={isLoading}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        {isLoading ? (
          <>
            <ActivityIndicator color={getTextColor()} />
            <Text style={{ color: getTextColor(), fontSize: theme.fontSizes.lg, fontWeight: '500' }}>
              Laddar...
            </Text>
          </>
        ) : (
          <>
            {icon && <View>{icon}</View>}
            <Text style={{ color: getTextColor(), fontSize: theme.fontSizes.lg, fontWeight: '700' }}>
              {children}
            </Text>
          </>
        )}
      </View>
    </Pressable>
  );
}
