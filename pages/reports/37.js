/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
import CombatEvents from '../../components/combatEvents';
import Citations from '../../components/citations';
import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
import Link from '../../components/link';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 37;
const startDate = '2022-03-27';
const endDate = '2022-04-09';
const submissionDate = '2022-04-10';

const citations = [
];
const citationsChange ='+0';

// These don't seem to change anything. Use: citations.js 
const orders = [
];

const competitions = [
{
  id: '3363',
  name: 'TIE Corps in Battle Season Four',
  ends: '2022-05-08',
  units: 'Entire TC',
  notes: 'One battle each from TIE, XvT, and XWA will be assigned monthly (10th to the 10th). Pilots will fly the battles and submit their pilot files through the database normally. One battle each from TIE, XvT, and XWA will be assigned monthly. Pilots will fly the battles and submit their pilot files through the database normally. ',
}, 

{
  id: '3359',
  name: 'MP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoCs earned. Squadrons games not eligible.',
}, 

{
  id: '3358',
  name: 'COOP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoSs earned.',
}, 

{
  id: '3360',
  name: 'SP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most single player missions played.',
},

{
  id: '3354',
  name: '2022 Crossword Challenge',
  ends: '2022-04-30',
  units: 'Entire TC',
  notes: 'A crossword puzzle where every month a new crossword puzzle will be created with a specific theme. 1. Make sure to read the Test Details fully. 2. The URL to the crossword is listed in Question 1 on the test. IT IS NOT A HYPERLINK. You have to copy/paste it into your URL bar. 3. Once you hit Begin Test, we can\'t do anything for you if you encounter issues.  Make sure you understand what you need to do and PM me if you have any questions. Your monthly placement will be determined by the order in which 100% complete submissions are received. April\'s crossword can be found at https://tc.emperorshammer.org/timetest.php?testid=a787ff5775',
},

{
  id: '3352',
  name: 'TIE Corps Jigsaw Puzzle Extravaganza 2022',
  ends: '2022-04-30',
  units: 'Entire TC',
  notes: 'Every month a new puzzle will be announced and pilots will compete for the best time with medals up for grabs for the top 6 fastest pilots as well as points accrued. April\'s jigsaw can be found at https://www.jigsawplanet.com/?rc=play&pid=26cd7aebebf7',
},

{
  id: '3368',
  name: 'Legion\'s Challenging Time Trials Season 3',
  ends: '2022-06-01',
  units: 'Entire TC',
  notes: 'The goal of this competition is to kill LegionX in a 1v1 "Dogfight" as quickly as you can in Star Wars Squadrons.',
},
];

const combatEvents = [
{
  id: '170',
  name: 'COO\'s Saturday Star Wars Shootouts',
  ends: '2022-06-05',
  notes: 'Online PvP every Saturday at 6pm EST (11pm UTC). A member of the Combat Operations Office organize one or more groups. The game played will be determined by the pilots online. Ten games played will earn you an IS-CW.',
}, 
];

const ACTIVITY = {
  // SkyShadow
  6958: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: '',
  },
  
  // Ivan Hordiyanko
  56220: {
    communication: 'Discord',
    flightActivity: 'Battlefront 2 PvP',
    otherActivity: '',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: '',
    flightActivity: 'TIE & XvT Single Player',
    otherActivity: '',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'Email',
    flightActivity: '',
	otherActivity: '',
    notes: '',
  },
  
  // Robert Hogan
  55859: {
    communication: 'Discord, Email',
    flightActivity: 'Battlefront 1 & 2 PvP',
    otherActivity: '',
    notes: '',
  },

  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // AnArKey223
  56157: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
   // Valario Valent
  56234: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: '',
  },
  
 // Wreckage
  55962: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // AlexanderK9
  56110: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Giada Aurelious
  56247: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Exar Kit
  5243: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
};

function appendActivityData(activityData, additionalActivityData) {
  return activityData.map((ad) => {
    if (additionalActivityData[ad.PIN]) {
      return { ...ad, ...additionalActivityData[ad.PIN] };
    }

    return ad;
  });
}

export default function Report({ activityData }) {
  if (activityData === null) {
    return 'Loading...';
  }

  const activity = appendActivityData(activityData, ACTIVITY);

  return (
    <>
      <Heading reportNumber={reportNumber} />

      <ReportDates
        startDate={startDate}
        endDate={endDate}
        submissionDate={submissionDate}
      />

      <Intro showUniform>
	  
        <center><h4><span style={{ color: "#1F51FF" }}>Squadron Commander's Speech</span></h4></center>
		
		<p>Greetings pilots! April is upon us, and with that Imperial Storm 4 has begun! One of the big TIE Corps competitions of the year, IS4 pitches the ISDII Hammer, Challenge and Warrior against one another in a pseudo table-top game of strategy where each ship will encounter battles against one another. Keep your eyes peeled on Discord for news announcements and strategy discussions. And as always, be prepared for battle! </p>
		<p>Sin has enjoyed two more promotions for our pilots this week! Congratulations and very well earned.  </p>
		<p>Once again, again, Sin conquered during March on all three of the kill boards and came out on top across all three categories.  </p>
		<p>Find this and plenty more, in the news sections below. </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>In another amazing effort in March, Sin Squadron once again takes all three top spots on the Single Player, Multiplayer and Cooperative kill boards. Keep up the fantastic work I’m proud of you all!</li><br></br>
				<li>MSE Medals have been recommended and awarded for March. Congratulations to all pilots who medalled for last month.</li><br></br>
				<li>We celebrate the very well-deserved promotions of Ivan Hordiyanko to Lieutenant Commander (LCM) and Kane Polybius to Commander (CM). Congratulations to the both of you! Well done indeed!</li><br></br>
        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>

		<ul>
				<li>Imperial Storm 4 has begun! The TIE Corps War Game that pits all three of our Star Destroyers against each other. <br></br><br></br>
				The game kicks off Friday the 8th of April and will run for 30 days, each day being one turn of the game. Each of our team Captains (VA Silwar, VA Marenta and COL Genie) have assembled a fleet in discussions with their ships which will be used to take and hold worlds on a map of the area we currently call home. Whenever opposing teams meet, a battle will ensue and this is where YOU, the pilots of the TIE Corps play a key role. How you fly will determine how well your team does, and who will take the bragging rights when the game ends on May 8th. <br></br><br></br>
				Turn 5 has been completed and publicly there are no changes to the map as of yet. All three teams had forces arrive at worlds at the end of Turn 4 and are in the process of taking these - teams will begin earning points from these conquests on turn six. For now the whereabouts of the might of each team is unknown. Your respective team captains have all the details, so if you’re curious please reach out! Finally drop in on the #imperial-news-network for all your Imperial Storm news on your favourite local discord server!!! With turn six occurring on Sunday. I hope we will have a combat event shortly, as we will have a brief 4 day break over the Easter long weekend.
				</li><br></br>

                <li><b>TIE Corps in Battle Season 4 Assignments for April:</b> 
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=794&type=info">  TIE-TC 199: Shinsen Gumi Saga #1: The School For Scandal </a>
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=1369&type=info"> XvT-TC 134: Engines of War </a>
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=402&type=info"> XWA-IW 3: Rion's Shadow Campaign: Seeds of Corruption </a>
				</li><br></br>
        </ul>

      </Orders>

      <Activity activity={activity} />

      <Competitions competitions={competitions} />
	  
	  <CombatEvents combatEvents={combatEvents} />

      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />

      <Closing>
	  
	  
		<p>My door is always open to all of you. If you need any help, guidance or just direction for some activities then please don’t hesitate to contact me on Discord of by email. If you’re online and gaming, drop in to one of our voice channels for visibility. You never know you might end up flying with some fellow Sinners or other members of the Corps.</p>
		<p>For Sin! </p>
		<p>MAJ SkyShadow </p>

      <i><span style={{ color: "#bb0a1e" }}>"The old ones say we Sinners are descended from the Emperor himself. From the time a Sinner could fly, they were baptized in the fire of combat. 
        Taught never to retreat, never to surrender. Taught that death on the battlefield in service to the Empire was the greatest glory they could achieve."</span></i>
		
      </Closing>

      <Footer />
    </>
  );
}

/* eslint react/forbid-prop-types: 0 */
Report.propTypes = {
  activityData: T.any,
};

Report.defaultProps = {
  activityData: null,
};

export async function getStaticProps() {
  const activityData = await loadActivityData(config.squadronId, startDate, endDate);

  return {
    props: { activityData },
  };
}
