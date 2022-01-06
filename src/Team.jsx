import React, { useState } from 'react';
import './styles/main.scss';
import TeamLandingPage2022 from './wintern-bios/2022/TeamLandingPage2022.jsx';
import TeamLandingPage2021 from './wintern-bios/2021/TeamLandingPage2021.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Team() {

    const [year, setYear] = useState(null);

    return (
        <>
        <Header />
        <div className="main">
    
            <div className="sidebar">
                <a onClick={() => setYear(2022)}>2022</a>
                <div></div>
                <a onClick={() => setYear(2021)}>2021</a>
            </div>

            <div className="center">
                {year === 2022 && <TeamLandingPage2022 />}
                {year === 2021 && <TeamLandingPage2021 />}
            </div>

            <Footer />
        </div>
    </>
  );
        
 }

export default Team;
