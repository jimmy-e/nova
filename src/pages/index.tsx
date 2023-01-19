import { Inter } from '@next/font/google'
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import Transactions from './transactions/Transactions';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <EuiProvider colorMode="light">
        <EuiFlexGroup alignItems="center" justifyContent="center">
          <EuiFlexItem>
            <Transactions />
          </EuiFlexItem>
        </EuiFlexGroup>
    </EuiProvider>
  )
}
