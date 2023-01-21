import React from 'react';
import { AppState, PageSize } from '@/types';

const initialAppState: AppState = {
  pageSize: {
    setState: () => {},
    state: 10,
  },
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
  const [pageSize, setPageSize] = React.useState<PageSize>(10);
  const [recipient, setRecipient] = React.useState<string>();
  const [reviewer, setReviewer] = React.useState<string>();
  const [state, setState] = React.useState<string>();

  return (
    <AppContext.Provider
      value={{
        pageSize: {
          setState: setPageSize,
          state: pageSize,
        },
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
