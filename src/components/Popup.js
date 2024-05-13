// Popup.js
import React,{useState} from 'react';
import '../css/Popup.css';
// import Image from './Image';
import closeBtn from '../Guide/close-button.png';
import guideBanner from '../Guide/Guide-banner.png';
import character from '../Guide/charcter-right.gif';
import eventGifts from '../Guide/event-gifts.png';
import treasureBox from '../Guide/treasure-box.png';
import warrior from '../Guide/warrior.png';
import display1 from '../Guide/display-1.png';
import gameWorld from '../Guide/game-world.png';
import partyBrust from '../Guide/party-brust.png';
import display2 from '../Guide/display-2.png';
import eventDetails from '../Guide/event-detail-bg.png';
import leaderboardBanner from '../Leaderboard/leaderboard-banner.png';
import Userselected from '../Leaderboard/Userselected-main.png';
import UserUnselected from '../Leaderboard/Userunselected-main.png';
import Talentselected from '../Leaderboard/Talentselected-main.png';
import Talentunselected from '../Leaderboard/Talentunselected-main.png';
// import UserContent from './UserContent';
import TalentContent from './TalentContent';
import RewardComponent from './RewardComponent';
import LeaderBoard from './LeaderBoardComp/LeaderBoard.js';
// import { closeBtn, guideBanner, character, eventGifts, treasureBox, warrior, display1, gameWorld, partyBrust, display2, eventDetails } from '../images/Guide';


const Popup = ({ onClose, popupProps }) => {

  const [selectedTab, setSelectedTab] = useState('user');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };



  return (
    <div className="popup">
      {/* guide popup design */}
      {popupProps === "Guide" && <div>
        <button className='guideCloseBtn' onClick={onClose}>
          <img src={closeBtn} alt="close button" />
        </button>
        <div className="guide-character">
          <img src={guideBanner} alt="guideBanner" />
          <img src={character} alt="characterRight" />
        </div>
        <div className="popup-content">
          <div className="guide">
            <div className="event-gifts">
              <img src={eventGifts} alt="event-gifts" />
            </div>
            <div className="display">
              <div className="first-display">
                <div className="treasure-warrior">
                  <img src={treasureBox} alt="treasureBox" />
                  <img src={warrior} alt="warrior" />
                </div>
                <img src={display1} alt="display1" />
              </div>
              <div className="second-display">
                <div className="game-party">
                  <img src={gameWorld} alt="game-world" />
                  <img src={partyBrust} alt="partyBrust" />
                </div>
                <img src={display2} alt="display2" />
              </div>
            </div>
          </div>
          <div className="event-details">
            <img src={eventDetails} alt="event-details" />
          </div>
        </div>
      </div>}
      {
        popupProps === "leaderBoard" && (
          <div>
            <button className='closeBtn' onClick={onClose}>
              <img src={closeBtn} alt="close button" />
            </button>
            <div className="leaderboard-banner">
              <img src={leaderboardBanner} alt="guideBanner" />
            </div>
            <div className="leaderboard-content">
              <div className="user-talent-btn">
                <button onClick={() => handleTabChange('user')}>
                  <img src={selectedTab === 'user' ? Userselected : UserUnselected} alt="user-talent" />
                </button>
                <button onClick={() => handleTabChange('talent')}>
                  <img src={selectedTab === 'talent' ? Talentselected : Talentunselected} alt="user-talent" />
                </button>
              </div>
              <div className="content-container">
                {/* {selectedTab === 'user' && <UserContent />} */}
                {selectedTab === 'user' && <RewardComponent />}
                {selectedTab === 'talent' && <TalentContent />}
              </div>
              <LeaderBoard />
            </div>
          </div>)
      }

    </div>
  );
};

export default Popup;
