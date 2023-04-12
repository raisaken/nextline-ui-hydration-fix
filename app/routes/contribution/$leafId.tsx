import Split from 'react-split';
import Profile from '~/src/components/profile/profile';
import AppLayout from '~/src/components/layout/app_layout';
// import Content from '~/src/components/leaf/content';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import LeafDetail from '~/src/components/contribution/leaf-detail';
import style from '~/src/styles/contribution-style.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: style }];
};

export default function Contribution() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout>
        <Split className="split" sizes={[20, 50, 30]} minSize={250}>
          <Profile />
          <LeafDetail />
        </Split>
      </AppLayout>
    </ThemeProvider>
  );
}
