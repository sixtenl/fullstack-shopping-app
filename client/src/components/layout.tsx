import { Footer } from './footer';
import { AccountInterface, Header } from './header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className='flex justify-center'>
        <main className='w-full max-w-[910px] flex justify-center my-10 min-h-[53.2vh]'>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
