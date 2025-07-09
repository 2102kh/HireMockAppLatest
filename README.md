# Welcome to your Expo app 👋
# 📱 HireMockApp – Expo App med AI-baserade mockintervjuer

Detta är en **offline-first mobilapp** byggd med [Expo SDK 53](https://docs.expo.dev/versions/latest/). 
## Appen hjälper jobbsökare att träna på intervjuer genom att simulera mockintervjuer med AI-feedback på röst, kroppsspråk och svar.


This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```
   ## Kör appen i emulator eller telefon:
   npx expo run:android
   ## Alternativt – starta med tunnel:
   npx expo start --dev-client

📁 Projektstruktur
   app/
├── (tabs)/              # Tab-navigering: Hem, Intervju, Historik, Profil
│   ├── _layout.tsx      # Tabs-definition
│   ├── index.tsx        # Hemskärm
│   ├── interview.tsx
│   ├── history.tsx
│   └── profile.tsx
├── _layout.tsx          # Root stack layout (om det behövs)
components/              # UI-komponenter
constants/               # Globala färger, text etc.



In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
