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
            <meta property="og:site_name" content="ритуал.евпатория.рф"/>
            <meta property="og:url" content="https://xn--80apkrlg.xn--80adio3aejo4j.xn--p1ai/"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Ритуальная помощь Евпатория"/>
            <meta property="og:description"
                  content="Ритуальные услуги, организация похорон в Евпатории, Саках, Уютное"/>
            <meta property="og:image" content={mainBg}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Ритуальная помощь Евпатория"/>
            <meta name="twitter:description"
                  content="Ритуальные услуги, организация похорон в Евпатории, Саках, Уютное"/>
            <meta name="twitter:image" content={mainBg}/>

            {/* Yandex.Metrika counter */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(99003617, "init", {
                  defer: true,
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
              });
            `,
              }}
            />
            <noscript>
              <div>
                <img src="https://mc.yandex.ru/watch/99003617" style={{ position: 'absolute', left: '-9999px' }} alt="" />
              </div>
            </noscript>
            {/* Yandex.Metrika counter */}

          </Head>
          {loading ? (
            <PreLoader/>
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
