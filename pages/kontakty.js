import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";

const Kontacts = () => {
    return (
        <ScrollIndicator>
            <Header />

            <div className='px-4'>
                <h1 className='text-2xl font-bold pt-2 text-center'>Контакты</h1>
            </div>

            <Footer />
        </ScrollIndicator>
    )
}

export default Kontacts
