import React from 'react';

const APIinfo = ({bioToShow, color='red'}) => {
    const { useState } = React;

    const [showStateEx, setShowStateEx] = useState(false);

    const randomNum = Math.random();

    return (
        <>
        <header>
            <div class="bars">
                <ul>
                <li class="cor-1"></li>
                <li class="cor-2"></li>
                <li class="cor-3"></li>
                <li class="cor-4"></li>
                <li class="cor-5"></li>
                </ul>
            </div>
            <div class="header-title">
                Term / FAQ / Info Page
            </div>
        </header>
        <section class="content-block">
            <h1>Lorem ipsum dolor sit amet</h1>
            <h2>Lorem ipsum?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>

        <section class="content-block">
            <h1>Lorem ipsum dolor sit amet</h1>
            <h2>Lorem ipsum?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorcontent-blockem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>

        <section class="content-block">
            <h1>Lorem ipsum dolor sit amet</h1>
            <h2>Lorem ipsum?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
        </>
    );
}

export default APIinfo;