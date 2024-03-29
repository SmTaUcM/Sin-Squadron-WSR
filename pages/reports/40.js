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

const reportNumber = 40;
const startDate = '2022-05-15';
const endDate = '2022-06-25';
const submissionDate = '2022-06-26';

const citations = [
];
const citationsChange ='+0';

// These don't seem to change anything. Use: citations.js 
const orders = [
];

const competitions = [
{
  id: '3384',
  name: 'Sinfantry Training - Season 2',
  ends: '2022-09-30',
  units: 'members of Sin Squadron',
  notes: 'Every first and third Saturday of the month, Sin Squadron will assemble for PvP and CoOp matches in Star Wars Squadrons, Battlefront, and Star Conflict.',
  highlight: true,
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
  id: '3368',
  name: 'TIE Corps Exercise: Squadron (Re)Mobilization 4',
  ends: '2022-07-15',
  units: 'TIE Corps',
  notes: 'All TIE Corps squadrons are assigned to complete a series of tasks.'
},
];

const combatEvents = [
//{
//  id: '170',
//  name: 'COO\'s Saturday Star Wars Shootouts',
//  ends: '2022-06-05',
//  notes: 'Online PvP every Saturday at 6pm EST (11pm UTC). A member of the Combat Operations Office organize one or more groups. The game played will be determined by the pilots online. Ten games played will earn you an IS-CW.',
//}, 
];

const ACTIVITY = {
  // SkyShadow
  6958: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: 'Sinfantry Training',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: '',
    flightActivity: 'XvT & TIE Single Player, Star Conflict PvE',
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
    communication: '',
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
  
  // X
  56282: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
  // Giada Aurelious
  56247: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Sinfantry Training',
    notes: 'Thanks for the Sinfantry Training games!',
  },
  
  // Ma'tikk Za'bezz
  56307: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP, Battlefront PvE',
    otherActivity: '',
    notes: '',
  },
  
   // Hollow
  56313: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP, Battlefront PvE',
    otherActivity: '',
    notes: 'Welcome to Sin Squadron!',
  },
  
  // Valkrus
  56316: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: 'Welcome to Sin Squadron!',
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
		
		<p>Greetings pilots! Firstly, a super late report from me I’m afraid. Mainly down to job interviews and training going on in real life. I can only apologise and will make a renewed attempt at getting these back out to you on a routine basis. </p>
		<p>Squadron (Re)Mobilization 4 is well under way, and it’s great to see some of you chipping away at the tasks at hand! I thank you for your efforts. </p>
		<p>Sin welcomes its newest pilots, LTs Hollow and Valkrus to its ranks this week. We warmly welcome you and look forward to flying with you soon!  </p>
		<p>We are still looking for a Flight Leader for Flight 4. If you are interested in becoming a FL please get in touch. </p>
		<p>I am also looking for a Squadron Executive Officer, so if becoming a CMDR in training interests you, then please get in touch. </p>
		<p>Find this and plenty more, in the news sections below. </p>

      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>LT Hollow joins us here a Sin Squadron as Sin 4-3! We warmly welcome you to the squad!</li><br></br>
				<li>LT Valkrus joins us here a Sin Squadron as Sin 4-3! We warmly welcome you to the squad!</li><br></br>
				<li>MAJ Wreckage has departed Sin Squadron to the Reserves. We thank him for his hard work and dedication that he has put into Sin Squadron.</li><br></br>
				<li>May’s MSE medals have been made and awarded. Congratulations to all those who earned a medal for May’s activity.</li><br></br>
				<li>Squadron (Re)Mobilization 4 is well under way. We have our work cut out for us. See more at <a href=" https://tc.emperorshammer.org/competitions.php?id=3368">  here</a>.</li><br></br>
        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
		<ul>
				<li>A quick and final reminder for the Imperial University data transition:

					In preparation for the Imperial University (IU) migration that will occur in the near future, members are advised to take the following actions to ensure a successful migration of your record from the old site to the new.

					1. Ensure that the email address on your emperorshammer.org account matches your tc.emperorshammer.org account.  If there is a discrepancy, update your address on the emperorshammer.org site.

					2. Ensure that your name on emperorshammer.org exactly matches your tc.emperorshammer.org name (your character name as displayed on your member record).  If they do not match, please contact me for assistance.

					If you have never taken IU courses or created an account on emperorshammer.org, there are no actions required.</li><br></br>
				<li>Squadron (Re)Mobilization 4 is well under way. We have our work cut out for us. See more at <a href=" https://tc.emperorshammer.org/competitions.php?id=3368">  here</a>.</li><br></br>

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
