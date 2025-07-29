import { Pressable, Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { ReactNode } from "react";


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
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                styles[variant],
                pressed && styles.pressed,
                isLoading && styles.loading
            ]}
            disabled={isLoading}
            onPress={onPress}
        >
            <View style={styles.content}>
                {isLoading ? (
                    <>
                        <ActivityIndicator
                            color={variant === 'primary' || variant === 'danger' ? 'white' : '#0A2463'}
                        />
                        <Text style={[styles.text, styles[`${variant}Text`]]}>Laddar...</Text>
                    </>
                ) : (
                    <>
                        {icon && <View style={styles.icon}>{icon}</View>}
                        <Text style={[styles.text, styles[`${variant}Text`]]}>{children}</Text>
                    </>
                )}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0A2463',
        padding: 14,
        borderRadius: 8,
        width: '90%',
    },
    pressed: {
        opacity: 0.8,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    primary: {
        backgroundColor: '#0A2463',
    },
    secondary: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#072a48ff',
    },
    danger: {
        backgroundColor: '#FF3B30',
    },
    primaryText: {
        color: 'white',
    },
    secondaryText: {
        color: '#FF3B30',
    },
    dangerText: {
        color: 'white',
    },
    loading: {
        opacity: 0.6,
    }
});