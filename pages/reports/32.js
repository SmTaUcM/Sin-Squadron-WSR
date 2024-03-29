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

const reportNumber = 32;
const startDate = '2022-02-06';
const endDate = '2022-02-12';
const submissionDate = '2022-02-13';

const citations = [
  'XvT-TC 14',
  'XvT-TC 70',
  'XWA-TC 1',
  'XWA-TC 2', 
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
  notes: 'One battle each from TIE, XvT, and XWA will be assigned monthly (10th to the 10th). Pilots will fly the battles and submit their pilot files through the database normally. ne battle each from TIE, XvT, and XWA will be assigned monthly. Pilots will fly the battles and submit their pilot files through the database normally. ',
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
  notes: 'Pilots earn monthly medals for the quickest time to complete a word search. February\'s word search can be found at https://mywordsearch.com/582783/Species',
},

{
  id: '3354',
  name: '2022 Crossword Challenge',
  ends: '2022-04-30',
  units: 'Entire TC',
  notes: 'A crossword puzzle where every month a new crossword puzzle will be created with a specific theme. Complete the crossword puzzle and email a screenshot to Solohan50@gmail.com. Your monthly placement will be determined by the order in which 100% complete submissions are received. January\'s crossword can be found at https://puzzel.org/en/crossword/play?p=-MsWxbWw6lMUnGdYv1LW',
},

{
  id: '3352',
  name: 'TIE Corps Jigsaw Puzzle Extravaganza 2022',
  ends: '2022-04-30',
  units: 'Entire TC',
  notes: 'Every month a new puzzle will be announced and pilots will compete for the best time with medals up for grabs for the top 6 fastest pilots as well as points accrued. January\'s jigsaw can be found at https://www.jigsawplanet.com/?rc=play&pid=0cda5dd6c235',
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
    otherActivity: 'Challenge with Words Season 2',
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
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: '',
    flightActivity: '',
	otherActivity: '',
    notes: '',
  },
  
  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Well done on winning Warrior Trivia!',
  },

  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '2x Fiction',
    notes: '',
  },
  
  // AnArKey223
  56157: {
    communication: '',
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
		
		<p>Greetings pilots! Another week has flown past and once again the fleet has been busy! </p>
		<p>This week we congratulate LT Ivan Hordiyanko on his promotion to Lieutenant and have seen our Chalquilla Cup team compete in two rounds. We’ve also seen it raining MSE medals! Fantastic work to each and every one of you! </p>
		<p>The fleet welcomes RA Jaxx Nassin as Logistics Officer for the Emperor’s Hammer command staff and… We have a shiny new website and database to explore and enjoy! </p>
		<p>Find this and plenty more, in this week's Sin Squadron weekly report... </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>LT Ivan Hordiyanko has wasted no time at all in getting stuck into the Sin Squadron way of life. He’s updated his INPR, completed TCCORE and has managed to get his first Legions under his belt. It’s with great pleasure that I can announce Ivan’s promotion to full Lieutenant! Congratulations!</li><br></br>
				<li>Sintoxicated, our Chalquilla Cup 2 team, competed in two rounds of the tournament on Saturday against The Kansas City Cheeks and Infernder. Sadly, our Fleet Battles generated no wins for our team, but a great time was had by all! I would like to thank everyone on all three teams for a brilliant night of gaming!</li><br></br>
				<li>January’s MSE (Monthly Squadron Evaluation) Merit Medals have been awarded. Congratulations to all who earned a medal for last month’s activities. I’m extremely proud to see so many of you earn a medal this month! Keep up the fantastic work! </li><br></br>
				<li>MAJ Robert Hogan has won 1st place in the ISD Warrior Trivia for Season 1 competition! Congrats and great work on the set of questions that you provided!</li><br></br>
        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
				<li>We have a new member of the Emperor’s Hammer Command Staff! Please congratulate RA Jaxx Nassin on his promotion to Rear Admiral and his appointment to Logistics Officer!</li><br></br>
				<li>The brand-new TIE Corps website and database went live Sunday morning. This represents a huge effort by many of our members to overhaul our website and to bring in some much sought-after improvements! Go ahead and check it out! A huge thanks goes to the Internet Office and it’s staff for some amazing work!</li><br></br>
				<li>TIE Corps in Battle assignments for February have gone live:</li><br></br>

                <li><b>TIE Corps in Battle Season 4 Assignments for February:</b> 
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=19&type=info"> TIE-TC 19: The Tethys Honeymoon</a>
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=253&type=info"> XvT-TC 3: Preparing for Battle</a>
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=341&type=info"> XWA-IW 1: Abyssi Ianua - Gates to Hell</a>
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
		<p>CPT SkyShadow </p>

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
