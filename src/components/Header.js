import React,{useState} from 'react'
import '../css/Header.css'
import guideButton from '../Guide/Guide-button.png';
import leaderBoardButton from '../Leaderboard/leaderboard-button.png';
import myJumps from '../Header/myJumps.png';
import Popup from './Popup';


const Header = () => {
    const [popupContent, setPopupContent] = useState();
    const [showPopup, setShowPopup] = useState();

    const togglePopup = (event) => {
        console.log("event...poput...", event);
        if (event === "Guide") {
            setPopupContent("Guide");
        } else {
            setPopupContent("leaderBoard");
        }
        setShowPopup(!showPopup);
    }

    return (
        <div>
            <div className="topElement-container">
                <div className="guide-button">
                    <button onClick={() => { togglePopup("Guide") }}>
                        <img src={guideButton} alt="myJumps" />
                    </button>
                </div>
                <span>Jumps:xxx</span>
                <img src={myJumps} alt="myJumps" />
                <div className="leaderboardButton">
                    <button onClick={() => { togglePopup("leaderBoard") }}>
                        <img src={leaderBoardButton} alt="myJumps" />
                    </button>
                </div>
            </div>      
            {showPopup && <Popup onClose={togglePopup} popupProps={popupContent} />}
        </div>
    )
}

export default Header