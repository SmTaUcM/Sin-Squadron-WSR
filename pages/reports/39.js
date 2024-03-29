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

const reportNumber = 39;
const startDate = '2022-04-24';
const endDate = '2022-05-15';
const submissionDate = '2022-05-15';

const citations = [
];
const citationsChange ='+/-0';

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
  
 // Wreckage
  55962: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: '',
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
    communication: 'Discord',
    flightActivity: 'Battlefront PvP',
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
    flightActivity: 'Battlefront PvP',
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
    otherActivity: '',
    notes: '',
  },
  
  // Ma'tikk Za'bezz
  56307: {
    communication: 'Discord',
    flightActivity: '',
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
		
		<p>Greetings pilots! Firstly, apologies for the lateness of this report. The cruel ruler that is time has done it’s upmost to keep me on my toes over the last few weeks. However, things seem to be calming down once again. </p>
		<p>Over the past three weeks we have seen Imperial Storm 4 (IS4) draw to a close with the courageous pilots and strategists of the ISDII Warrior victorious! </p>
		<p>Sin welcomes its newest pilot, SL Ma'tikk Za'bezz to its ranks this week. Our first pilot to join our newly formed fourth flight. We warmly welcome you and look forward to flying with you soon!  </p>
		<p>We are still looking for a Flight Leader for Flight 4. If you are interested in becoming a FL please get in touch. </p>
		<p>Sinfantry Training will be kicking off to a belated start today (Sunday 15th) at 8pm BST. If you fancy joining some of your fellow Sin pilots in some online games then please come on down. The event also lines up nicely for anyone wanting to continue on into the COO’s Saturday Star Wars Shootouts. </p>
		<p>Find this and plenty more, in the news sections below. </p>

      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>SL Ma'tikk Za'bezz joins us here a Sin Squadron as Sin 4-2! We warmly welcome you to the squad!</li><br></br>
				<li>April’s MSE recommendations have been made and awarded. Congratulations to all those who earned a medal for April’s activity.</li><br></br>
				<li>Sinfantry Training has returned! Every first and third Saturday of the month, Sin Squadron will assemble for PvP and CoOp matches in Star Wars Squadrons, Battlefront, and Star Conflict. See the competition details <a href="https://tc.emperorshammer.org/competitions.php?id=3384"> here</a>. The first training session will commence today (Sunday 15th at 200 BST).</li><br></br>
        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
		<ul>
				<li>Imperial Storm 4 has come to a close and has seen is ISDII Warrior victorious! Congratulations to all who took part in the event from our skilled and cunning strategists to our dedicated pilots! And a special thank you to VA Marenta who made the event especially inclusive and fun for all to take part in.</li><br></br>
				<li>New Theta Commander Selected: After an amazing run of just over 1 year, 10 months,  GN Pete Mitchell has decided to step back into the cockpit and take up a Flight Member position in Theta  This move will see CM Vapen Vanman take the helm of Theta CMDR; moving from Rho Squadron into the ISDII Warrior leadership.</li><br></br>
				<li>Tempest Squadron wins TIE Corps in Battle Season 4! Congratulations to the pilots of Tempest in winning the latest iteration is TCiB! The Warrior’s own LC Aardvark also grabbed top pilot overall!</li><br></br>

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
