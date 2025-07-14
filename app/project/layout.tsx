import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Euclitics | Project',
  description: 'Euclitics - IT Solutions and Services company',
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
