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

const reportNumber = 36;
const startDate = '2022-03-13';
const endDate = '2022-03-26';
const submissionDate = '2022-03-20';

const citations = [
];
const citationsChange ='+0';

// These don't seem to change anything. Use: citations.js 
const orders = [
];

const competitions = [
{
  id: '3361',
  name: 'The Chalquilla Cup II',
  ends: '2022-04-01',
  units: 'TIE Corps',
  notes: 'A MP event for the whole TC where 3-person teams (with up to 3 additional subs) will sign up by January 20 and take part in 3v3 fleet battles in Star Wars Squadrons.',
  highlight: true,
},

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
  id: '3356',
  name: 'The Challenge With Words',
  ends: '2022-03-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly medals for the quickest time to complete a word search. March\'s word search can be found at https://mywordsearch.com/593186/Species2',
},

{
  id: '3354',
  name: '2022 Crossword Challenge',
  ends: '2022-04-30',
  units: 'Entire TC',
  notes: 'A crossword puzzle where every month a new crossword puzzle will be created with a specific theme. 1. Make sure to read the Test Details fully. 2. The URL to the crossword is listed in Question 1 on the test. IT IS NOT A HYPERLINK. You have to copy/paste it into your URL bar. 3. Once you hit Begin Test, we can\'t do anything for you if you encounter issues.  Make sure you understand what you need to do and PM me if you have any questions. Your monthly placement will be determined by the order in which 100% complete submissions are received. March\'s crossword can be found at https://tc.emperorshammer.org/timetest.php?testid=5b2d19ce52',
},

{
  id: '3352',
  name: 'TIE Corps Jigsaw Puzzle Extravaganza 2022',
  ends: '2022-04-30',
  units: 'Entire TC',
  notes: 'Every month a new puzzle will be announced and pilots will compete for the best time with medals up for grabs for the top 6 fastest pilots as well as points accrued. March\'s jigsaw can be found at https://www.jigsawplanet.com/?rc=play&pid=38aa3022e180',
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
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Ivan Hordiyanko
  56220: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: '',
    flightActivity: '',
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
    communication: 'Discord',
    flightActivity: '',
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
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
   // Valario Valent
  56234: {
    communication: 'Discord',
    flightActivity: '',
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
		
		<p>Greetings pilots! This report sees myself complete my first tour of duty as Sin squadron’s commander and wow, what a ride it’s been! To top it all off the last week as seemed to rain nothing but promotions and medals and there are many congratulations to be given! </p>
		<p>This week sees the announcement of our new ISDII Warrior Commodore, VA Marenta. Congratulations on your appointment and the very best of luck in your new role. </p>
		<p>Sin has also seen no less than three promotions for our pilots this week! Very well earned to each and every one of you.  </p>
		<p>Once again Sin is reigning supreme on all three of the kill boards and is looking to finish March in a strong position.  </p>
		<p>Find this and plenty more, in the news sections below. </p>

      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>In another stunning effort this month, Sin Squadron is once again poised to take all three top spots on the Single Player, Multiplayer and Cooperative kill boards. Keep up the fantastic work!</li><br></br>
				<li>MSE Medals have been recommended and awarded for February. Congratulations to all pilots who medalled for last month.</li><br></br>
				<li>Giada Aurelious has wasted no time at all in getting her first rounds of legions in and is promoted to full Lieutenant.</li><br></br>
				<li>Robert Hogan is promoted to Lieutenant Colonel after an amazing year of activity and contribution to the TIE Corps. Very well-deserved Robert!</li><br></br>
				<li>Kazraran is also promoted to Captain and is well underway in another insane month of SP flying. Congratulations!</li><br></br>
				<li>Following the reassignment of HA Mordechi Wolfe, we took some time to seek out a new WarCOM and have selected none other than COL Marenta who will be the Commodore of the ISDII Warrior as Vice Admiral Marenta. Congratulations and good luck in your new role!</li><br></br>

        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>

		<ul>
				<li>CPT Xye has been appointed CMDR of Beta squadron.</li><br></br>
				<li>FA La'an is appointed as Epsilon squadron commander.</li><br></br>
				<li>In the near future, the Internet Office will begin converting some data over from the https://emperorshammer.org/ database to the database that runs the new site.  In preparation for this migration, if you have an account on the https://emperorshammer.org/ site, please ensure that the email address on that profile is updated to match your current TIE Corps email address on your https://tc.emperorshammer.org/ profile.</li><br></br>
				<li>Fleet Admiral Turtle awarded the Medal of Honor for his outstanding work on the new website and for everything he had done since becoming the Internet Officer</li><br></br>
				<li>In recognition of his development efforts in support of Project Minos Relevancy, I am proud to announce that @FA Pickled Yoda (TAC) has been awarded the Imperial Cross by the Fleet Commander!</li><br></br>

                <li><b>TIE Corps in Battle Season 4 Assignments for March:</b> 
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=304&type=info"> TIE-TC 132: Battle of the Bins</a>
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=937&type=info"> XvT-TC 61: Operation Cotton Candy</a>
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=394&type=info"> XWA-IW 2: Rion's Shadow Campaign: Infiltrate Rion</a>
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
