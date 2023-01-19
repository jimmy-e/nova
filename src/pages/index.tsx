import { Inter } from '@next/font/google'
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';
import Transactions from './transactions/Transactions';
import styles from '@/styles/Home.module.css'
import styleOverrides from '@/styles/styleOverrides';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <EuiProvider colorMode="light" modify={styleOverrides}>
      <div className={styles.main}>
        <Transactions />
      </div>
    </EuiProvider>
  )
}
