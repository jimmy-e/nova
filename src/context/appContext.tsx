import React from 'react';
import { AppState } from '@/types';

const initialAppState: AppState = {
  recipient: {
    setState: () => {},
    state: undefined,
  },
  reviewer: {
    setState: () => {},
    state: undefined,
  },
  state: {
    setState: () => {},
    state: undefined,
  },
};

const AppContext = React.createContext<AppState>(initialAppState);

export const AppContextProvider = (props: object): React.ReactElement => {
  const [recipient, setRecipient] = React.useState<string>();
  const [reviewer, setReviewer] = React.useState<string>();
  const [state, setState] = React.useState<string>();

  return (
    <AppContext.Provider
      value={{
        recipient: {
          setState: setRecipient,
          state: recipient,
        },
        reviewer: {
          setState: setReviewer,
          state: reviewer,
        },
        state: {
          setState,
          state,
        },
      }}
      {...props}
    />
  );
};

export const useAppContext = (): AppState => React.useContext(AppContext);
