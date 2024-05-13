import React, { useState,useEffect } from 'react';
import '../../css/LeaderBoard.css';
// import Image from '../components/Image';
import leaderBoard from '../../Leaderboard/Leaderboard.png';
import hourlySelected from '../../Leaderboard/Hourly-selected.png';
import dailyUnselected from '../../Leaderboard/Daily-unselected.png';
import overAllUnselected from '../../Leaderboard/Overall-unselected.png';
import hourlyUnselected from '../../Leaderboard/Hourly-unselected.png';
import dailySelected from '../../Leaderboard/Daily-selected.png';
import overAllSelected from '../../Leaderboard/Overall-selected.png';
import DailyComp from './DailyComp.js';
import HourlyComp from './HourlyComp.js';
import OverAllComp from './OverAllComp.js';
import dataValue from '../data.js';




const LeaderBoard = () => {
    const [selectedTab, setSelectedTab] = useState('hourly');
    const [data, setData] = useState('hourly');
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.streamkar.net/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=12&pageNum=1&pageSize=20');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const response2 = await response.json();
                console.log("response2222...???", response2.data);
                setData(response2.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // empty dependency array to run only once on component mount


    return (
        <div className='leaderBoard-container'>
            <div className='leaderBoard-img'>
                <img src={leaderBoard} alt="leaderboar-banner" />
            </div>
            <div className="hourly-daily-overall-btn">
                <button onClick={() => handleTabChange('hourly')}>
                    <img src={selectedTab === 'hourly' ? hourlySelected : hourlyUnselected} alt="user-talent" />
                </button>
                <button onClick={() => handleTabChange('daily')}>
                    <img src={selectedTab === 'daily' ? dailySelected : dailyUnselected} alt="user-talent" />
                </button>
                <button onClick={() => handleTabChange('overall')}>
                    <img src={selectedTab === 'overall' ? overAllSelected : overAllUnselected} alt="user-talent" />
                </button>
            </div>

            <div className="hourly-daily-overall-container">
                {selectedTab === 'hourly' && <HourlyComp />}
                {selectedTab === 'daily' && <DailyComp />}
                {selectedTab === 'overall' && <OverAllComp talent={true} estReward="" prev="" data={data.list} />}
            </div>

            <div className='rest-board-container'>
                {/* <Image src={selectedTab === 'overall' ? overAllSelected : overAllUnselected} alt="user-talent" /> */}
            </div>
        </div>
    )
}

export default LeaderBoard;