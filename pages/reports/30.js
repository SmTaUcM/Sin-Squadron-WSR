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

const reportNumber = 30;
const startDate = '2022-01-23';
const endDate = '2022-01-29';
const submissionDate = '2022-01-30';

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
  id: '3321',
  name: 'Sinfantry Training',
  ends: '2022-02-05',
  units: 'Sin Squadron',
  notes: 'Every first Saturday of the month, Sin Squadron will assemble for PvP matches in Star Wars Squadrons, Battlefront, and Star Conflict.',
  highlight: true,
}, 

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
  notes: 'One battle each from TIE, XvT, and XWA will be assigned monthly. Pilots will fly the battles and submit their pilot files through the database normally. ne battle each from TIE, XvT, and XWA will be assigned monthly. Pilots will fly the battles and submit their pilot files through the database normally. ',
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
  notes: 'Pilots earn monthly medals for the quickest time to complete a word search. January\'s word search can be found at https://mywordsearch.com/573741/Weapon-Makers-3',
},

{
  id: '3354',
  name: '2022 Crossword Challenge',
  ends: '2022-04-30',
  units: 'Entire TC',
  notes: 'A crossword puzzle where every month a new crossword puzzle will be created with a specific theme. Complete the crossword puzzle and email a screenshot to Solohan50@gmail.com. Your monthly placement will be determined by the order in which 100% complete submissions are received. January\'s crossword can be found at https://puzzel.org/en/crossword/play?p=-Mrzpwe9MJY1xe7LhjqS',
},

{
  id: '3352',
  name: 'TIE Corps Jigsaw Puzzle Extravaganza 2022',
  ends: '2022-04-30',
  units: 'Entire TC',
  notes: 'Every month a new puzzle will be announced and pilots will compete for the best time with medals up for grabs for the top 6 fastest pilots as well as points accrued. January\'s jigsaw can be found at https://www.jigsawplanet.com/?rc=play&pid=015b1c32c737',
}
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
    flightActivity: 'Chalquilla Cup 2 Practice 1, Squadrons PvP, Battlefront PvP, Star Conflict PvE',
    otherActivity: 'IOA Duties, CMDR+ Meeting',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
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
    flightActivity: 'Chalquilla Cup 2 Practice 1',
    otherActivity: '',
    notes: 'Thanks for attending practice!',
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
  
 // Wreckage
  55962: {
    communication: 'Discord',
    flightActivity: 'Chalquilla Cup 2 Practice 1, Single Player, Squadrons PvP, Star Conflict PvE',
    otherActivity: '',
    notes: 'Thanks for attending practice!',
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
    flightActivity: 'Battlefront PvP, Star Conflict PvE',
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
		
		<p>Greetings pilots! As January draws to a close, pilots have been gearing up for the start of the Chalquilla Cup, our own Chalquilla Cup II team, Sintoxicated, has been busy preparing our starfighters and getting some last-minute practice in. We’ll be hoping to compete in Round 1 within the next week. </p>
		<p>Congratulations go to CM Kazraran and GN Exar Kit this week for your well-earned Imperial Achievement Ribbons (IARs)! Thank you for the superb activity! </p>
		<p>Our own LCM Kane Polybius has completed no less than six new chapters to his ongoing Black TIE Down fiction series. Please take some time to enjoy them on the #runons Discord channel. </p>
		<p>There is currently a huge range of competitions to get involved with, please see the competitions section below for some of the ways you can get involved and participate with fleet activities. </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>Practice session 1 for Sintoxicated, our Chalquilla Cup 2 team, went ahead last night and was a great success. Thanks to MAJ Wreckage, MAJ Robert Hogan, SA Kamjin Maverick Lap'lamiz for attending and apologies to LCM KEBLAOMEGA for narrowly missing you. The team saw some excellent progression over the course of the session and has primed us for our upcoming first round with The Funky Chickens (Firebird Squadron).</li><br></br>
				<li>MSE (Monthly Squadron Evaluation) season us upon us once again, I’ll be completing evaluations within the next couple of days. So now is the perfect time to get those last-minute activities in! </li><br></br>
				<li>Next week will mark the final week of our Sinfantry Training competition which will be held on Saturday the 5th of Feb at 9pm UTC.</li><br></br>
        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
				<li>Episode 4 of CPT LegionX’s Airlock PodCast was aired. You can watch the recording of the PodCast <a href="https://www.twitch.tv/videos/1278217460"> here</a>. <br></br>Sin Squadron has been invited to this week’s PodCast, if you’re interested in attending the live stream, please contact me.</li><br></br>
                <li><b>TIE Corps in Battle Season 4 Assignments for January:</b> 
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=471&type=info"> TIE-TC 165: The Hunt for Zsinj </a>
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=920&type=info"> XvT-TC 59: Cosmetic Wars!</a>
					<br></br><br></br>
					+ <a href="https://tc.emperorshammer.org/download.php?id=347&type=info"> XWA-TC 4: Privateer</a>
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
