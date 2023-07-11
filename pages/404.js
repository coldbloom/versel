import React from 'react';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

const Custom404 = () => {
    return (
        <div className='notFoundPage'>
            <Header/>

            <main>
                <NotFoundPage />
            </main>

            <Footer/>
        </div>
    );
};

export default Custom404;