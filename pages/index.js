import Head from 'next/head'
import Main from './../components/Main/Main'

import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PreLoader from "../components/PreLoader/PreLoader";
import mainBg from './../assets/images/evpatoriya-plyus.jpg'

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
                <meta name="description" content="Ритуальные услуги, организация похорон в Евпатории, Саках, Уютное"/>
                <meta property="og:title" content="Заголовок страницы" />
                <meta property="og:description" content="Описание страницы" />
                <meta property="og:image" content={mainBg} />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                    crossOrigin="true"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
                    rel="stylesheet"
                />
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
