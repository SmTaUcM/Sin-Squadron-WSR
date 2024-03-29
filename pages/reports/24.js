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

const reportNumber = 24;
const startDate = '2021-12-13';
const endDate = '2021-12-19';
const submissionDate = '2021-12-19';

const citations = [

];
const citationsChange ='+4';

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
  id: '3348',
  name: 'There and Back Again: A COMPOST Tale',
  ends: '2021-12-29',
  units: 'Entire TC',
  notes: 'Fly TIE-TC 244, Lord of the TIEs, and reach for the highest score you can get.',
}, 

{
  id: '3310',
  name: 'Trivia Grand Tour: Season Seven',
  ends: '2021-12-27',
  units: 'Entire TC',
  notes: " ",
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
    flightActivity: 'Star Conflict PvE & PvP',
    otherActivity: 'IOA Duties, Trivia Grand Tour',
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
    communication: '',
    flightActivity: 'Star Conflict PvE',
    otherActivity: '',
    notes: '',
  },

  // Earnim Branet
  11276: {
    communication: 'E-Mail',
    flightActivity: '',
	otherActivity: '',
    notes: '',
  },
  
  // Robert Hogan
  55859: {
    communication: '',
    flightActivity: 'Battlefront II PvP, Star Conflict PvE & PvP',
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
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: '',
    notes: '',
  },
  
 // Wreckage
  55962: {
    communication: '',
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
		
        <p>Greetings Pilots! Well, this is it! The final run up to Christmas! What a year it has been! I hope that everyone is as ready as they can be, and are fully prepared to enjoy a wonderful holiday season. </p>
		<p>We bid farewell to LT Calvin Phrik who has elected to transfer back to his original squadron, Lambda. I’d like to thank him for his hard work and service while serving with Sin Squadron. </p>
		<p>Meanwhile we have had some new exciting announcements from the wider fleet. A new competition: There and Back Again: A COMPOST Tale - Fly TIE-TC 244 (See details below) and the release of X-Wing Alliance Upgrade modification as well as the TIE Fighter Total Conversion which are now available for PvP/PvE credit (Please also see below for installation details and submission requirements). </p>


      </Intro>

      <Orders missions={orders}>

                <center><h3><span style={{ color: "#1F51FF" }}>Squadron News</span></h3></center>
        <ul>
				<li>LT Calvin Phrick has transferred to Lambda Squadron to re-join his former squad mates</li><br></br>
        </ul>
                <center><h3><span style={{ color: "#1F51FF" }}>Fleet News</span></h3></center>
        <ul>
                <li>A new competition has been announced by the TCCOM: There and Back Again: A COMPOST Tale - Fly TIE-TC 244, Lord of the TIEs, and reach for the highest score you can get</li><br></br>
				<li>Thanks to a combined effort between the Combat Operations Office and the Internet Office, we are pleased to announce that the X-Wing Alliance Upgrade modification as well as the TIE Fighter Total Conversion is now available for PvP/PvE credit.
					<br></br><br></br>Information on installation is available in more detail at https://wiki.emperorshammer.org/TFTC_Quick_Installation (thanks to LC Genie and VA Silwar Naiilo)
					<br></br><br></br>The TC has set some minimum requirements that need to be met for LoC and LoS submissions in them. These apply to the original XWA as well which has the same skirmish setup process. The one kill requirement applies as well, these are just additional requirements for XWA, XWAU, and TFTC matches:
					<br></br><br></br>Two screenshots are required for each submission. One screenshot should show us the setup screen from before the match and the second is the scoreboard from the end of the match.
					<br></br><br></br>The built-in skirmish templates are all accepted except one: Inspection Race. That one wouldn't count for the LoC or LoS.
					<br></br><br></br>Set the timer for at least a 5 minute minimum. Higher is fine, if you want.
					<br></br><br></br>For all craft with waves, both on the player and opponent teams, set the waves to maximum (19). The goal here is to keep you actively engaged for the timer's duration.
					<br></br><br></br>For PvE, the point total of the opposing team should be at least equal to the player team and the opposing team needs to include at least one starfighter group. As with the timer, these are meant to establish a minimum amount of effort for a submission. Skirmishes still have plenty of ways to be set up to be easy, but there a lot of ways to make them too easy and that's what we're trying to avoid.
					<br></br><br></br>The requirements above, minus the commentary, will be added to the screenshot submission pages for easy reference.
					</li><br></br>
				<li>The EH Command Staff position of Logistics Officer is open.
					<br></br><br></br>If you are someone who can take the position and make it their own, a self-starter who can perform the duties required and find new stuff that could be added to help archive the EH's history.
					<br></br><br></br>Rank:  The Logistics Officer is a supporting staff officer for the Internet Officer (IO) and must hold the minimum rank of Rear Admiral.  Although organized as a part of the Internet Office, the position of LO is considered a Command Staff position.  The LO may be promoted up to and including the rank of High Admiral.
					<br></br><br></br>The Logistics office position will be joining the COMM in becoming a sub position to the IO as it’s best to have a unified voice for all outward EH technical appearances.
					<br></br><br></br>If you are interested, please apply directly to GA Rapier and cc @FA Turtle Jerrar (IO) and they will consider all applicants.
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
	  
		<p>It’s been great to see some of you getting stuck into the flying this week. Please keep up the fantastic work! </p>
		<p>With the holidays being less than a week away I may slip my next report to after boxing day. I wish you all the happiest of holidays and hope you have a great day. </p>

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
