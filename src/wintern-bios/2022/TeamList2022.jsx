import React from 'react';
import anastasia_avatar from '../../assets/meet-the-team-2022/anastasia-avatar.png';
import ange_avatar from '../../assets/meet-the-team-2022/ange-avatar.png';
import lauren_avatar from '../../assets/meet-the-team-2022/lauren-avatar.png';
import kadiatou_avatar from '../../assets/meet-the-team-2022/kadiatou-avatar-modified.png';
import skyler_avatar from '../../assets/meet-the-team-2022/skyler-avatar.png';
import margaret_avatar from '../../assets/meet-the-team-2022/margaret-avatar-1.png';
import kevin_avatar from '../../assets/meet-the-team-2022/kevin-avatar.png';
import grace_avatar from '../../assets/meet-the-team-2022/grace-avatar.png';
import diana_avatar from '../../assets/meet-the-team-2022/diana-avatar.png';
import belinda_avatar from '../../assets/meet-the-team-2022/belinda-avatar.png';
import katelyn_avatar from '../../assets/meet-the-team-2022/katelyn-avatar.png';
import tyler_avatar from '../../assets/meet-the-team-2022/tyler-avatar.png';
import zack_avatar from '../../assets/meet-the-team-2022/zack-avatar.png';
import julian_avatar from '../../assets/meet-the-team-2022/julian-avatar.png';
import jenny_avatar from '../../assets/meet-the-team-2022/jenny-avatar.png';
import claire_avatar from '../../assets/meet-the-team-2022/claire-avatar.png';
import hannah_avatar from '../../assets/meet-the-team-2022/hannah-avatar.png';
import julie_avatar from '../../assets/meet-the-team-2022/julie-avatar.png';
import yang_avatar from '../../assets/meet-the-team-2022/yang-avatar.png';
import suji_avatar from '../../assets/meet-the-team-2022/suji-avatar.png';
import raghu_avatar from '../../assets/meet-the-team-2022/raghu-avatar.png';
import austin_avatar from '../../assets/meet-the-team-2022/austin-avatar.png';
import ty_avatar from '../../assets/meet-the-team-2022/ty-avatar.png';
import desiree_avatar from '../../assets/meet-the-team-2022/desiree-avatar.png';
import edison_avatar from '../../assets/meet-the-team-2022/edison-avatar.png';
import jacob_avatar from '../../assets/meet-the-team-2022/jacob-avatar.png';
import trupti_avatar from '../../assets/meet-the-team-2022/trupti-avatar.png';
import jake_avatar from '../../assets/meet-the-team-2022/jake-avatar.png';
import {Link} from "react-router-dom";

const TeamList2022 = () => {
  return (
    <div className="teampage2022">  
    <h1>Meet the Sprinterns</h1>
    <p>Welcome to our team page! Click on the “Learn more” buttons below each of our icons to get to know us better.</p>
    <div className='avatar-cards'>
        <div className="avatar-card">
        <img className = "avatar-circle" src={ange_avatar} text-align="center" />
        <h5><b>Ange Louis</b></h5>
        <h5>Engineering Intern</h5>
        <Link to="/ange-louis" class="learn-more-button-yellow" target="_blank"><p>Learn more!</p></Link>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={lauren_avatar} text-align="center" />
        <h5><b>Lauren Avilla</b></h5>
        <h5>Engineering Intern</h5>
        <Link to="/lauren-avilla" class="learn-more-button-lightgreen" target="_blank"><p>Learn more!</p></Link>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={kadiatou_avatar} text-align="center" />
        <h5><b>Kadiatou Diallo</b></h5>
        <h5>Engineering Intern</h5>
        <Link to="/kadiatou-diallo" class="learn-more-button-green" target="_blank"><p>Learn more!</p></Link>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={skyler_avatar} text-align="center" />
        <h5><b>Skyler Basco</b></h5>
        <h5>Engineering Intern</h5>
        <Link to="/skyler-basco" class="learn-more-button-blue" target="_blank"><p>Learn more!</p></Link>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={margaret_avatar} text-align="center" />
        <h5><b>Margaret Diaz</b></h5>
        <h5>Engineering Intern</h5>
        <Link to="/margaret-diaz" class="learn-more-button-purple" target="_blank"><p>Learn more!</p></Link>
        </div>
    </div>
    <h1>Meet the Hosts</h1>
    <p>Say hello to our fun, hardworking Sprinternship hosts who have made this life-changing experience possible at Bitly!</p>
    <div className='avatar-cards'>
        <div className="avatar-card">
        <img className = "avatar-circle" src={kevin_avatar} text-align="center" />
        <h5><b>Kevin Li</b></h5>
        <h5>Frontend Engineer</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={grace_avatar} text-align="center" />
        <h5><b>Grace McGrath</b></h5>
        <h5>Backend Engineer Intern</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={diana_avatar} text-align="center" />
        <h5><b>Diana Bishop</b></h5>
        <h5>Technical Lead</h5>
        </div>
    </div>
    <h1>Meet the Speakers</h1>
    <p>Round of applause to our talented workshop hosts for teaching us valuable skills!</p>
    <div className='avatar-cards'>
        <div className="avatar-card">
        <img className = "avatar-circle" src={belinda_avatar} text-align="center" />
        <h5><b>Belinda Black</b></h5>
        <h5>“Meet Bitly Engineering”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={katelyn_avatar} text-align="center" />
        <h5><b>Katelyn Arenas</b></h5>
        <h5>“API 101”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={tyler_avatar} text-align="center" />
        <h5><b>Tyler Lugger</b></h5>
        <h5>“Python 101”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={zack_avatar} text-align="center" />
        <h5><b>Zack Jones</b></h5>
        <h5>“Product 101”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={julian_avatar} text-align="center" />
        <h5><b>Julian Lasius</b></h5>
        <h5>“Agile 101”</h5>
        </div>
    </div>
    <div className='avatar-cards'>
        <div className="avatar-card">
        <img className = "avatar-circle" src={jenny_avatar} text-align="center" />
        <h5><b>Jenny McKenzie</b></h5>
        <h5>“Product Design 101”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={claire_avatar} text-align="center" />
        <h5><b>Claire Cowger</b></h5>
        <h5>“Sales/CS Session”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={hannah_avatar} text-align="center" />
        <h5><b>Hannah McCaffrey</b></h5>
        <h5>“Sales/CS Session”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={julie_avatar} text-align="center" />
        <h5><b>Julie Zorn</b></h5>
        <h5>“Sales/CS Session”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={yang_avatar} text-align="center" />
        <h5><b>Yang Gu</b></h5>
        <h5>“Sales/CS Session”</h5>
        </div>
    
    </div>
    <div className='avatar-cards'>
    <div className="avatar-card">
        <img className = "avatar-circle" src={anastasia_avatar} text-align="center" />
        <h5><b>Anastasia Garelli</b></h5>
        <h5>“QA 101”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={suji_avatar} text-align="center" />
        <h5><b>Suji Gorle</b></h5>
        <h5>“Bitly 101/Devops”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={raghu_avatar} text-align="center" />
        <h5><b>Raghu Srinivasan</b></h5>
        <h5>“CTO AMA”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={austin_avatar} text-align="center" />
        <h5><b>Austin Whiting</b></h5>
        <h5>“Marketing Session”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={ty_avatar} text-align="center" />
        <h5><b>Ty Ratchford</b></h5>
        <h5>“Technical Interview AMA”</h5>
        </div>
    </div>
    <div className='avatar-cards'>
        <div className="avatar-card">
        <img className = "avatar-circle" src={desiree_avatar} text-align="center" />
        <h5><b>Desiree Johnson</b></h5>
        <h5>“Marketing Session”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={edison_avatar} text-align="center" />
        <h5><b>Edison Giang</b></h5>
        <h5>“Marketing Session”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={jacob_avatar} text-align="center" />
        <h5><b>Jacob Segerman</b></h5>
        <h5>“Marketing Session”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={trupti_avatar} text-align="center" />
        <h5><b>Trupti Desai</b></h5>
        <h5>“Marketing Session”</h5>
        </div>
        <div className="avatar-card">
        <img className = "avatar-circle" src={jake_avatar} text-align="center" />
        <h5><b>Jake Heft</b></h5>
        <h5>“Technical Interview AMA”</h5>
        </div>
        <br/>
    </div>
    </div>
  );
}


export default TeamList2022;