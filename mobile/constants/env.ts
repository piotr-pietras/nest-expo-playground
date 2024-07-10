export const env = {
  ENVIRONMENT: process.env?.EXPO_PUBLIC_HOST_ENVIRONMENT || "development",
  HOST_URL: process.env?.EXPO_PUBLIC_HOST_URL || "localhost",
  HOST_PORT: process.env?.EXPO_PUBLIC_HOST_PORT || 3000,
};
