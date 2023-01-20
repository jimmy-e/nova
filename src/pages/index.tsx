import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';
import Transactions from './transactions/Transactions';
import styles from '@/styles/Home.module.css'
import styleOverrides from '@/styles/styleOverrides';
import Useful from './Useful/Useful';

const App: React.FC =() => (
  <EuiProvider colorMode="light" modify={styleOverrides}>
    <div className={styles.main}>
      <Transactions />
    </div>
  </EuiProvider>
);

export default App;
