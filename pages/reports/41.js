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

const reportNumber = 41;
const startDate = '2022-06-26';
const endDate = '2022-07-30';
const submissionDate = '2022-07-31';

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
  id: '3423',
  name: 'Galaga Nostalgia',
  ends: '2022-08-26',
  units: 'members of Sin Squadron',
  notes: 'You have a month to go to https://www.free80sarcade.com/galaga.php and play the arcade classic Galaga. Submit screenshots in email to talonjade47@gmail.com with your highest score.',
  highlight: true,
}, 

{
  id: '3427',
  name: 'The Sinners are Puzzled',
  ends: '2022-10-02',
  units: 'members of Sin Squadron',
  notes: 'A Star Wars related puzzle will be released each Saturday. The pilots of Sin Squadron will have a week to complete each puzzle in the fastest time possible.',
  highlight: true,
}, 

{
  id: '3413',
  name: 'Warrior\'s Ace Pilot',
  ends: '2022-12-31',
  units: 'ISDII Warrior Pilots',
  notes: 'Pilots of the ISDII Warrior, we\'re looking for the Warrior\'s Ace Pilot in the form of who can achieve the highest score in a Star Wars Squadrons Dogfight.',
}, 

{
  id: '3388',
  name: 'Signal Scramble Infection',
  ends: '2022-08-27',
  units: 'ISDII Warrior Pilots',
  notes: 'The messages are simply random 3, 4, and 5 letter combinations repeated for approximately 2 standard weeks before the letter combinations change again. In an effort to help figure out what the messages mean, Marenta has tasked the Warrior to make up phrases for the letter combinations and polling the fleet to determine which is the most likely.',
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
];

const combatEvents = [
{
  id: '191',
  name: '3PO League Season 5',
  ends: '2022-10-02',
  notes: '3 Players Only League (3PO League) brings the much loved Cadet Cup 3v3 format into a space where everyone can enjoy!',
}, 

{
  id: '190',
  name: 'SPL - Squadrons Premier League Season 5',
  ends: '2022-09-04',
  notes: 'The Squadrons Premier League is a weekly league for 5v5 Dogfighting in Star Wars: Squadrons',
}, 
{
  id: '188',
  name: 'TRAndomania',
  ends: '2022-08-08',
  notes: 'TRA has set up TRAndomania, which is a Battlestats event. Details are listed here: https://www.battlestats.com/events/rules.php?5441',
}, 
];

const ACTIVITY = {
  // ------- Flight 1 -------
  // SkyShadow
  6958: {
    communication: 'Discord, Email',
    flightActivity: 'Star Conflict PvP & PvE',
    otherActivity: 'TTT3 v1.0.2 coding, IU Beta testing',
    notes: '',
  },
  
  // Hollow
  56313: {
    communication: 'Discord',
    flightActivity: 'Battlefront PvP & PvE',
    otherActivity: '',
    notes: '',
  },
  
  // Kazraran
  56002: {
    communication: 'Discord',
    flightActivity: '',
    otherActivity: 'Multiplayer 2 passed, Crazy Tactics that Work passed, Lightsaber Construction passed',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'Email',
    flightActivity: 'Star Conflict PvE',
	otherActivity: '',
    notes: '',
  },
  
 // ------- Flight 2 -------
 // Talon Jade
  8512: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: 'Welcome to Sin squadron!',
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
    communication: 'Discord, Email',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },
  
   // Valario Valent
  56234: {
    communication: 'Discord, Email',
    flightActivity: 'Battlefront PvE',
    otherActivity: '',
    notes: '',
  },
  
  // ------- Flight 3 -------
  // Robert Hogan
  55859: {
    communication: 'Discord',
    flightActivity: 'Battlefront PvP',
    otherActivity: 'Airborne Training Course passed',
    notes: '',
  },
  
  // Ma'tikk Za'bezz
  56307: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: '',
  },
  
  // Valkrus
  56316: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: '',
  },
  
  // Exar Kit
  5243: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: 'Thanks for joining in on Sinfantry training!',
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
		
		<p>Greetings pilots! Wow! July has been a crazy month and it feels like there is a boat load to report on this month. </p>
		<p> Squadron (Re)Mobilization 4 drew to a close on the 15th and proved to be one of the most challenging yet with only two squadrons achieving all 8 tasks. Congratulations go to Lambda and Tempest squadrons and a well done to all you for your efforts during the competition. </p>
		<p>Sin, along with the other Warrior squadrons have reduced back to 12 pilot squadrons after trialling 16. This has seen a plethora of movement over the month. We’ve said farewell to some old comrades but have also had the opportunity to welcome new friends.  </p>
		<p>With ReMob4 done and dusted there’s a whole new host of competitions for our pilots to get involved with including several Sin and Warrior specific ones. </p>
		<p>Find this and plenty more, in the news sections below. </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>Crickey, where do I start here?! Let’s start with movement, promotions, and transfers:
				Due to our reduction back to a 12-pilot squadron July has seen probably some of the biggest movements in its history:
				</li><br></br>
				<li>We bid farewell to LCM Ivan Hordiyanko, who has transferred to the reserves. Thank you for all your hard work as Flight 3 Leader.</li><br></br>
				<li>LC Robert Hogan has stepped down as SQXO and has now become Flight 3 Leader. I would personally like to thank you for all the hard work and effort that you put in during the time you served as XO. Thank you.</li><br></br>
				<li>We welcomed LC Talon Jade to our ranks who joined us as Flight 4 Leader. He has now been promoted to SQXO and resided in the XO and Flight 2 Leader spot. Congratulations! I look forward to working with you as Sin’s second in command!</li><br></br>
				<li>We bid farewell to LT X, who has transferred to the reserves.</li><br></br>
				<li>We bid farewell to LT Giada Aurelious, who has transferred to the reserves.</li><br></br>
				<li>LTs Valkrus & Ma'tikk Za'bezz have transferred to Flight 3 with the closure of Flight 4 to round off our movements this month.</li><br></br>
				<li>We welcomed SL Billy Lee who was with us but a short time before shipping out to open the Warrior’s newest squadron, Sigma.</li><br></br>
				<li>LT Hollow has traded in his LT bars for LCM ones! Congratulations and has transferred to Flight 1.</li><br></br>
				<li>LC Robert Hogan has been appointed a Training Officer Assistant (TOA)! Congrats!</li><br></br>
				<li>To round off our squadron news, LC Talon Jade is running a Galaga Nostalgia competition. See for details <a href=" https://tc.emperorshammer.org/competitions.php?id=3423 "> here</a>. Please take a moment to have a look at this and get a submission in!</li><br></br>
				<li>I am also running a timed Jigsaw competition. See for details <a href="https://tc.emperorshammer.org/competitions.php?id=3427"> here</a>. Standby for the release of this week’s puzzle at the end of today!</li><br></br>

        </ul>
		
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
		<ul>
				<li>MAJ Wreckage has returned to active service and will be serving as CMDR or the newly opened Sigma Squadron! Congratulations.</li><br></br>
				<li>CM Sylas "Professor" Pitt has been appointed the new Training Officer (TO) and promoted to the rank of RA. Congratulations!</li><br></br>

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
