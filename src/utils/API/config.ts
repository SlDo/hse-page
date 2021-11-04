interface IConfig {
    baseURL?: string | undefined;
    authToken?: string;
    fallbackURL?: string;
}

export const config: IConfig = {
  authToken: '',
};

export const setBaseURL = (baseURL: string): void => {
  config.baseURL = baseURL;
};

export const setFallbackURL = (fallbackURL: string): void => {
  config.fallbackURL = fallbackURL;
};

export const setAuthToken = (token: string | null): void => {
  if (token) config.authToken = token;
};
