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

const reportNumber = 27;
const startDate = '2022-01-03';
const endDate = '2022-01-09';
const submissionDate = '2022-01-10';

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
];

const ACTIVITY = {
  // SkyShadow
  6958: {
    communication: 'Discord, E-Mail',
    flightActivity: 'Star Conflict PvP & PvE, Battlefront 2 PvP, Squadrons PvP',
    otherActivity: 'IOA Duties',
    notes: '',
  },
  
  // Leone123
  56159: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
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
    flightActivity: 'Star Conflict PvE',
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
    otherActivity: 'x2 Fiction submissions',
    notes: 'Nice work on the fiction!',
  },
  
  // AnArKey223
  56157: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: '',
  },
  
 // Wreckage
  55962: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: '',
  },

  // AlexanderK9
  56110: {
    communication: '',
    flightActivity: 'Star Conflict PvP & PvE',
    otherActivity: '',
    notes: '',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'Battlefront 2 PvP, Star Conflict PvE',
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
		
		<p>Greetings pilots! This week it's been raining stars! Iron Stars to be exact, and Platinum ones to! The first week of 2022 saw Sin Squadron take home two of the three Ace of the TIE Corps titles. A massive congratulations to all who took part. And a very well done to MAJ Robert Hogan and MAJ Wreckage! Sin Squadron also placed very strongly in December in MP and COOP; I couldn’t be prouder of you all. </p>
		<p>With the new year now in full swing, I’m pleased to announce the start of TIE Corps in Battle Season 4 for those Single Player pilots out there, as well as the start of The Chalquilla Cup II (Beer League), where team sign-ups have commenced, ready for the competition to start in February. Please find more details below. </p>
		<p>January’s Sinfantry Training also took place on Saturday with a good turnout then then ran into the Saturday Star Wars Shootouts. Thank you to all who attended. </p>
		<p>Finally, Decembers MSE run has now been completed. Congratulations to all who earned a medal for December’s activities. </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>Multiplayer & CO-OP Ace of the TIE Corps 2021 titles have been awarded to MAJ Robert Hogan and myself. MAJ Wreckage also placed 2nd in Multiplayer and 4th in CO-OP. A huge congrats to all who have flown in these competitions over the last year. It's been brilliant to see such a great turn out from Sin Squadron.</li><br></br>
				
				<li>Between MP & CO-OP in December, Sin Squadron took one quarter of all the places. Congrats to MAJ Robert Hogan and GN Exar Kit</li><br></br>
				
				<li>MSE medals have been recommended and now awarded! Congratulations to all those who medalled for the month of December.</li><br></br>
				
				<li>Sinfantry training took place on Saturday, thanks to all who turned up and for those who sent apologies. It was a fun night where we managed to play some Star Conflict, Squadrons and Battlefront II. My training was sadly cut short for me with a grumpy graphics card and some TTT3 bug hunting.</li><br></br>
        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
                <li><b>The Chalquilla Cup II (Beer League) has been announced:</b>
					<br></br><br></br>
					A 3v3 Fleet Battles "beer league" for the whole TC will take place starting February 1st.
					<br></br><br></br>
					3-person teams (with up to 3 additional subs) from each squadron will sign up by January 20 and take part in 3v3 fleet battles in Star Wars Squadrons. Each team will be made of a single squadron along with Admiralty, reserves, and teamless pilots as wildcards. All teams will fight each other in two matches.
					<br></br><br></br>
					Team signup: <a href="https://forms.gle/GdzQjxXHJB5VUCaV8">Here</a>
					<br></br><br></br>
					Full rules: <a href="https://docs.google.com/document/d/1FwdV_nVRBAuM7FKp3YQst5aIQQ3R7_aATbfUrmwHbSE/edit?usp=sharing">Here</a>
					<br></br><br></br>
					See #chalquilla-cup for discussion.
					<br></br><br></br>
					Firebird won the CC last year! This year... will it be us?
					<br></br><br></br>
					I'm looking for a volunteer to act as team captain for this event, anyone interested please get in touch.
				</li><br></br>
				
				<li><b>TIE Corps in Battle Season 4 has been announced!</b> 
					<br></br><br></br>
					TCiB is a competiton for SP pilots who aim to get the highest score possible in TIE, XvT and/or XWA. For more details, please see the Competitions section.
					<br></br><br></br>
					<b>Assignments for January:</b>
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
	  
		<p>A big thank you to you all for the activity this week! </p>
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
