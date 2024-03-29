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

const reportNumber = 31;
const startDate = '2022-01-30';
const endDate = '2022-02-05';
const submissionDate = '2022-02-06';

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
  notes: 'One battle each from TIE, XvT, and XWA will be assigned monthly (8th to the 8th). Pilots will fly the battles and submit their pilot files through the database normally. ne battle each from TIE, XvT, and XWA will be assigned monthly. Pilots will fly the battles and submit their pilot files through the database normally. ',
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
    communication: 'Discord, E-Mail',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'IOA Duties, Jigsaw Puzzle Extravaganza, Crossword Challenge, Sinfantry Training',
    notes: '',
  },
  
  // Ivan Hordiyanko
  56220: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Welcome to the squadron! I hope SWS arrives soon!',
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
    communication: 'E-Mail',
    flightActivity: '',
	otherActivity: '',
    notes: 'Hope you’re feeling better!',
  },
  
  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP & PvE',
    otherActivity: '',
    notes: '',
  },

  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '1x Fiction submission',
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
    flightActivity: 'Squadrons PvP & PvE',
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
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Sinfantry Training',
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
		
		<p>Greetings pilots! Well, it’s been a crazy week for news this week! First and foremost, we welcome our newest Sinner: SL Ivan Hordiyanko! Welcome to the squad Ivan! </p>
		<p>This week has seen members of Sin Squadron compete in Legion’s Challenging Time Trials, produce fiction, compete in Sinfantry training, be interviewed in LegionX’s Airlock PodCast, as well as various other competitions and flying. Well done to everyone! </p>
		<p>The fleet welcomes in CPT Shang Khan as Beta Squadron’s new Squadron Commander, freeing up an available XO post in Kappa Squadron and the monthly competitions have been refreshed ready for February. </p>
		<p>Find this and plenty more, in the news sections below. </p>

      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>It’s with great pleasure this week that I get to welcome our newest pilot, SL Ivan Hordiyanko! Who Joins Sin as Sin 1-2. Ivan has recently purchased Star Wars Squadrons and it eagerly awaiting its arrival and to get stuck in with some flying. Welcome to the squadron Ivan! We shall watch your career with great interest!</li><br></br>
				<li>LCM Kane "Tusks" Polybius currently sits in 5th place in Legion's Challenging Time Trials Season with a time of 31:45.51. Awesome work!</li><br></br>
				<li>Sintoxicated, our Chalquilla Cup 2 team, stands ready and eager to compete in our upcoming first round with The Funky Chickens (Firebird Squadron).</li><br></br>
				<li>MSE (Monthly Squadron Evaluation) season us upon us once again, I’ve made my recommendations so keep an eye out on your inboxes for incoming shinneys! </li><br></br>
				<li>Sinfantry Training ran its final session last night and has now come to a close. The final results for the competition are: <br></br><br></br>
					+ 1st Place - TIED - GN Exar Kit & CPT SkyShadow who both win an IS-SW. <br></br>
					+ Runner up – MAJ Wreckage who bags a IS-BW. <br></br><br></br>
					For attending at least 3 of the 5 trainings the following pilots have also won an IS-CW: <br></br><br></br>
					+ GN Exar Kit<br></br>
					+ CPT SkyShadow<br></br><br></br>
					Congratulations to all and thank you for participating. Medals will be in the post shortly!<br></br><br></br>
					Stay tuned for Season 2 of Sinfantry Training which I intend to announce soon!
					</li><br></br>
        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
				<li>Episode 5 of CPT LegionX’s Airlock PodCast was aired, with none other than myself as this week’s guest. <br></br>
					You can watch the recording of the PodCast <a href="https://www.twitch.tv/videos/1287233732"> here</a>. 
					</li><br></br>
				<li>We have a new Beta Squadron Commander! I’m pleased to announce that CPT Shang Khan, formerly XO of Kappa Squadron will be stepping across to take the post. Congratulations!</li><br></br>
				<li>An available XO position has been announced this week in Kappa Squadron onboard the ISDII Warrior: <br></br><br></br>
					Duties of Kappa XO: <br></br><br></br>
					Maintain frequent contact with Flight Members by email or discord DM. <br></br>
					Solicit and compile weekly activity reports from Flight Members. <br></br>
					Provide weekly written activity reports to Kappa KMDR. <br></br>
					Set a positive example of personal activity by consistently earning Legions or single-play awards and frequently entering flight and non-flight comps. Being active in more than one gaming platform is a bonus. <br></br>
					Be active in discord by frequently offering constructive content and discussion. <br></br>
					Lead, motivate and encourage Kappa Squadron to greatness. <br></br><br></br>
					Any active pilot of LT rank or higher is qualified and welcome to apply. If interested, please respond to LC Aardvark privately by email aardvark.tiecorps@gmail.com or discord DM. Deadline for applications is Feb 10. An interview by Discord DM or voice chat will be conducted and the most qualified candidate will be inducted into Kappa Squadron and promoted to Squadron XO.
					</li><br></br>
				<li>Legion's Challenging Time Trials Season 3 has BEGUN!!! <br></br><br></br>
					This it it folks, the biggest one you have been waiting for! Season 3 of the Time Trials has started and the coveted IS-PW is finally on the line! <br></br><br></br>
					We had some crazy times posted last season and I hope to see those numbers go even lower this season as EVERYONE, even our Admirals, can battle it out to be the fastest pilot in the TIE Corps! <br></br><br></br>
					IS-PW for First place<br></br>
					IS-GW for Second<br></br>
					IS-SW for Third<br></br>
					IS-BW for Fourth<br></br><br></br>
					IS-CW will be earned if you reach a time of 2 minutes and 30 seconds or lower and didn't place top 4!
					</li><br></br>
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
