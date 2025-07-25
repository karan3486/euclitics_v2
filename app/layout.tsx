import './globals.css';
import './animation-utils.css';
import { Metadata } from 'next';
import { primary, secondary } from '@/fonts';
import { AOSInit } from '@/src/utils/aos';
import { ScrollToTopButton } from '@/src/components/scroll-to-top';
import { cn } from '@/src/utils/shadcn';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/src/components/theme-provider';
import { ModeToggle } from '@/src/components/mode-toggle';
import { NavigationProvider } from '@/src/components/navigation-provider';
import { ProjectDetailsProvider } from '@/src/components/project/project-details-provider';
import dynamic from 'next/dynamic';

// Dynamically import ChatbotProvider with SSR disabled
const ChatbotProvider = dynamic(
  () => import('@/src/components/chatbot/ChatbotProvider'),
  { ssr: false }
);

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Euclitics',
  description: 'Euclitics - IT Solutions and Services company',
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'dark',
        primary.variable,
        secondary.variable,
        'text-base leading-[1.875] text-accent-800 [&.dark]:text-body'
      )}
    >
      <AOSInit />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationProvider>
            <ProjectDetailsProvider>
              <div
                className={cn(
                  'bg-white text-accent-800 dark:bg-accent-900 dark:text-body'
                )}
              >
                <main>{children}</main>
                <ModeToggle />
                <ChatbotProvider>{/* No children needed */}</ChatbotProvider>
              </div>
            </ProjectDetailsProvider>
          </NavigationProvider>
        </ThemeProvider>
        <Toaster
          richColors
          position="top-right"
          closeButton
          visibleToasts={9}
        />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
