import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'projetotrab',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      AndroidWindowSplashScreenAnimatedIcon: '[resources/android/icon/drawable-hdpi-icon.png]'
    }
  }
};

export default config;
