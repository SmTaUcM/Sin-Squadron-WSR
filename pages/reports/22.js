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

const reportNumber = 22;
const startDate = '2021-11-29';
const endDate = '2021-12-05';
const submissionDate = '2021-12-05';

const citations = [

];
const citationsChange ='-4';

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
  id: '3310',
  name: 'Trivia Grand Tour: Season Seven',
  ends: '2021-12-27',
  units: 'Entire TC',
}, 

{
  id: '3235',
  name: 'COO\'s Star Wars Challenge Episode VII - 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Accumulate the most LoCs or LoSs in Squadrons.',
}, 

{
  id: '3275',
  name: 'MP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoCs earned. Squadrons games not eligible.',
}, 

{
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most LoSs earned.',
}, 

{
  id: '3240',
  name: 'SP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn monthly and yearly medals for the most single player missions played.',
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
    communication: 'Discord, E-Mail',
    flightActivity: 'Star Conflict PvE, Battlefront II PvP',
    otherActivity: 'IOA Duties, Trivia Grand Tour, Crossword Challenge, Attended CMDR+ meeting, Sinfantry Training',
    notes: '',
  },
  
  // Leone123
  56159: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: '',
    flightActivity: '',
    otherActivity: 'Trivia Grand Tour',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: '',
    flightActivity: '',
	otherActivity: '',
    notes: 'Please check in so that we know that you\'re OK',
  },
  
  // Robert Hogan
  55859: {
    communication: 'Discord, E-Mail',
    flightActivity: '',
    otherActivity: 'Appointed Sin SQXO, Newsletter Graphics and Fiction Submission, Trivia Grand Tour',
    notes: 'Congratulations on becoming Executive Officer!',
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
    notes: 'Welcome to Sin Squadron!',
  },
  
 // Wreckage
  55962: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Appointed Sin Sqn Flight 3 Leader, Ran Sinfantry Training',
    notes: 'Congratulations on becoming Flight Leader!',
  },

  // AlexanderK9
  56110: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
    // Calvin Phrick
  55839: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Updated INPR, Crossword Challenge',
    notes: 'Welcome to Sin Squadron!',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'Battlefront II PvP',
    otherActivity: 'Sinfantry Training',
    notes: 'Thank you for attending Sinfantry Training.',
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
		
        <p>Greetings Pilots! Well, that’s my first week complete as your Squadron Commander complete, and wow, has it gone quick! </p>
		<p>The TC has been a hive of activity this week with a flurry of new and returning members joining the fleet. And amongst them I have great pleasure in welcoming SL AnArKey and LT Calvin Phrick to Sin Squadron. </p>
		<p>This week has also seen our own MAJ Wreckage take over the Flight Leader (FL) role for Flight 3 and MAJ Robert Hogan take on the duties of Squadron Executive Officer (XO). Congratulations to you both. I wish you both the best of luck in your new roles. </p>
		<p>November’s MSE rounds are due and I have made my recommendations to the COM and TCCS. So, watch those inboxes over the next few weeks for merit medals. </p>
		<p>On the note of medals, the long-lost cargo shuttle containing Sin’s Medals of Communication arrived from the void the other day carrying no less than 42 awards for Sin personnel. Congratulations to all who received one (or five :P). </p>
		<p>Sin’s monthly Sinfantry Training ran on Saturday night. Thanks to all who showed up for a great night of gaming. </p>
		<p>The COO has announced a brand-new Combat Event: COO's Saturday Star Wars Shootouts, which also commenced Saturday, please check it in the Combat Events section of this report. </p>

      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>A huge welcome to SL AnArKey and LT Calvin Phrick to Sin Squadron.</li><br></br>
				<li>MAJ Wreckage has transferred to Sin Sqn Flight III as it's Flight Leader.</li><br></br>
				<li>MAJ Robert Hogan has become Sin Squadron's Squadron Executive Officer (XO).</li><br></br>
				<li>November's MSE recommendations have been submitted.</li><br></br>
				<li>Sin Squadron is now up to date with their Medals of Communication.</li><br></br>
				<li>The next round of Sinfantry Training will be Saturday Jan 8th at 2100 UTC. Join us for some multiplayer fun and frolics. NOTE - This has been moved ahead by one week to deconflict with New Year's day.</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
                <li>The seventh edition of the Trivia Grand Tour competition, run by the TCCOM, is underway.</li><br></br>
				<li>The COO has announced a brand-new Combat Event: COO's Saturday Star Wars Shootouts.</li><br></br>
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
	  
		<p>It’s been a thoroughly enjoyable first week of CMDRing for Sin! </p>
		<p>It’s great to see he hum of activity across the fleet this week and to welcome so many new and returning pilots join our ranks. </p>
		<p>I honestly can’t believe that December and the holiday season are upon us already, with RtF well and truly behind us now please don’t forget to keep up the great communication and activity that our squadron is renowned for. </p>
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
