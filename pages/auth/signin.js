  import React from 'react';
  import Head from 'next/head'
  import { getProviders, signIn as signIntoProvider, } from 'next-auth/react';
  import Header from '../../components/Header';


export default function signIn({ providers }) {
  return (
    <>
    <Head>
        <title>Sign In</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" />
      </Head>
    <Header />

    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-12 px-14 text-center">

      <img className="w-80" src="https://links.papareact.com/ocw" alt="" />

      <div className="mt-40">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => signIntoProvider(provider.id, { callbackUrl: '/' })}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
    </div>

    
      
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
