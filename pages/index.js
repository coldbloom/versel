import Head from 'next/head'
import Main from './../components/Main/Main'

import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PreLoader from "../components/PreLoader/PreLoader";
import mainBg from './../assets/images/evpatoriya-plyus.jpg'

import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";

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

                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <meta property="og:title" content="Заголовок страницы" />
                <meta property="og:description" content="Описание страницы" />
                <meta property="og:image" content={mainBg} />

            </Head>
            {loading ? (
                <PreLoader />
            ) : (
                <ScrollIndicator>
                    <Header/>

                    <main>
                        <Main/>
                    </main>

                    <Footer/>
                </ScrollIndicator>
            )}
        </div>
    )
}
