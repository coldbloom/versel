import Head from 'next/head'
import Main from './../components/Main/Main'

import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PreLoader from "../components/PreLoader/PreLoader";

export default function Home() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const handleRouteChange = (url) => {
            setLoading(true)
            console.log('Загрузка')
        }

        const handleRouteChangeComplete = () => {
            setLoading(false)
        }

        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteChangeComplete)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
            router.events.off('routeChangeComplete', handleRouteChangeComplete)
        }
    }, [router.events])

    return (
        <div>
            <Head>
                <title>Ритуальная помощь Евпатория</title>
                <meta name="description" content="Generated by create next app"/>
            </Head>
            {loading ? (
                <PreLoader />
            ) : (
                <>
                    <Header/>

                    <main>
                        <Main/>
                    </main>

                    <Footer/>
                </>
            )}
        </div>
    )
}
