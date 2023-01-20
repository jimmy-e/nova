import React from 'react';
import { AppState } from '@/types';

const initialAppState: AppState = {
  search: {
    setState: () => {},
    state: undefined,
  },
};

const AppContext = React.createContext<AppState>(initialAppState);

export const AppContextProvider = (props: object): React.ReactElement => {
  const [search, setSearch] = React.useState<string>();

  return (
    <AppContext.Provider
      value={{
        search: {
          setState: setSearch,
          state: search,
        },
      }}
      {...props}
    />
  );
};

export const useAppContext = (): AppState => React.useContext(AppContext);
