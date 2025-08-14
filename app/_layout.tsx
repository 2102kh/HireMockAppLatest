import { InterviewProvider } from "@/hooks/useInterview";
import { theme } from "@/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";


export default function RootLayout() {
  return (
    <NativeBaseProvider theme={theme}>
      <InterviewProvider>
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </InterviewProvider>
    </NativeBaseProvider>
  );
}
     