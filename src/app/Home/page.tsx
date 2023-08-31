import useTranslation from 'next-translate/useTranslation';

export default function AnotherHome() {
  const { t, lang } = useTranslation();

  return <main className="flex min-h-screen flex-col items-center justify-between p-24">{t('common:GREETING')}</main>;
}
