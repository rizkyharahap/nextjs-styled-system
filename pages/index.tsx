import Box from '@/components/atoms/box';
import Button from '@/components/atoms/button';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useState } from 'react';

const Home: NextPage = () => {
  const [counter, setCounter] = useState<number>(0);

  const addCounterData = useCallback(() => {
    setCounter((prevProps) => prevProps + 1);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {counter}

        <Box>
          <Button onClick={addCounterData}>Counter</Button>
        </Box>
      </main>
    </div>
  );
};

export default Home;
