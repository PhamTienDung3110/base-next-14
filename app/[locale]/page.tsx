import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { Button } from '@mui/material';
import MyForm from '../components/MyForm';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Trang chủ của công ty",
  openGraph: {
    title: "Trang chủ",
    description: "Trang chủ của công ty",
    url: "https://yourwebsite.com",
  },
  keywords: ["Trang chủ", "công ty", "tên công ty"],
};

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <Button variant="contained" color="secondary">
        {t('title')}
      </Button>
      <MyForm />
    </div>
  );
}