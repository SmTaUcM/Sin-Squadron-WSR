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

const reportNumber = 29;
const startDate = '2022-01-16';
const endDate = '2022-01-22';
const submissionDate = '2022-01-23';

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
  id: '3353',
  name: 'Legion\'s Challenging Time Trials Season 2',
  ends: '2022-01-30',
  units: 'Entire TC',
  notes: 'The goal of this competition is to kill CPT LegionX in a 1v1 "Dogfight" as quickly as you can in Star Wars Squadrons.',
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

{
  id: '172',
  name: 'Week of War V: Squadrons January 2021 (BattleStats)',
  ends: '2022-01-30',
  notes: 'Clubs will play each other in 1v1 through 5v5 dogfights in Star Wars Squadrons. All pilots are encouraged to play, whether casual or competitive!',
} 
];

const ACTIVITY = {
  // SkyShadow
  6958: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP, Star Conflict PvP & PvE',
    otherActivity: 'IOA Duties',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: '',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: '',
    flightActivity: 'Star Conflict PvE',
	otherActivity: '',
    notes: '',
  },
  
  // Robert Hogan
  55859: {
    communication: 'E-Mail, Discord',
    flightActivity: 'Squadrons PvP, Battlefront PvP',
    otherActivity: '',
    notes: '',
  },

  // Kane Polybius
  56085: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'x5 Fictions written',
    notes: 'Amazing work with your fictions!',
  },
  
  // AnArKey223
  56157: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: 'Congrats on the Commendation of Bravery!',
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
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: 'Thanks for the BFII and SC session on Saturday!',
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
		
		<p>Greetings pilots! Well, who can believe that we’re starting the last week of January already! The time seems to be flying by! The squadron has seen activity from almost every member this week which has been amazing to see. Keep up the great work. </p>
		<p>Our Chalquilla Cup II (Beer League) team has been finalised, under the name “Sintoxicated” and I look forward to training and competing with all of you. </p>
		<p>Sadly, our roster is down one pilot this week as we bid farewell to LT Leone123 who departs Sin to the Reserves. </p>
		<p>There is currently a huge range of competitions to get involved with, please see the competitions section below for some of the ways you can get involved and participate with fleet activities. </p>

      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>Sin Squadron has entered a Chalquilla Cup II team under the name of “Sintoxicated”. The team consists of Myself, MAJ Robert Hogan, MAJ Wreckage, SA Kamjin Maverick Lap'lamiz and LCM Keblaomega. Shortly I’ll be looking to get a team Discord channel put together and looking to focus on some training.</li><br></br>
				<li>Our own LCM Kane Polybius has created no less than five new fictions this week with more in the making. He has started a new episodic series about himself and Sin squadron titled: Black TIE Down. Please take a moment to enjoy them <a href="https://tc.emperorshammer.org/record.php?pin=56085&type=fiction">here</a>.</li><br></br>
				<li>Finally, I am sad to report that we lose LT Leone123 to the Reserves this week. I would like to thank him for all of his activity and contributions, and look forward to seeing him again soon.</li><br></br>
        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
				<li>A new Combat Event: <a href=" https://tc.emperorshammer.org/combat.php?id=172"> Week of War V: Squadrons January 2021 (BattleStats)</a> has been announced which invites clubs to play each other in 1v1 through 5v5 dogfights in Star Wars Squadrons. All pilots are encouraged to play, whether casual or competitive!</li><br></br>
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
	  
		<p>Thanks to all for the great levels of activity this week. Please keep it coming! </p>
		
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
