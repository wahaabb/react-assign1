import React from 'react';
import Header from "Components/Header";
import Cards from "Components/Cards/Cards";
import Footer from "Components/Footer";
export default function Home() {
    return (
        <>
            <Header></Header>
            <main>
                <Cards></Cards>
            </main>
            <Footer></Footer>
        </>
    )
}
