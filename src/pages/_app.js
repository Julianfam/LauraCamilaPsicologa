import MainLayout from '@layout/MainLayout';
import '@styles/tailwind.css';
import { ProviderAuth } from 'hooks/useAuth';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
export default function App({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
