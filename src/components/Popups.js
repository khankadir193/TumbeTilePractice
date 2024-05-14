import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import AlertPop from './popup/AlertPop';

const Popups = () => {
    const {
        alert,
        closeAlertPopUp,
        detailPopUp,
        userInfo,
        closeDetailPopUp,
        leaderboard,
        changeLeaderPopUp,
        guide,
        changeGuidePopUp,
    } = useContext(UserContext);
    return (
        <div>
            {
                alert?.show && <AlertPop popup={alert} close={closeAlertPopUp} />
            }
        </div>
    )
}

export default Popups;