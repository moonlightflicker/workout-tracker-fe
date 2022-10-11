import './Socials.scss';

import twitterLogoOutline from '../../../assets/icons/twitter_icon_outline.svg';
import linkedInLogoOutline from '../../../assets/icons/linkedin_icon_outline.svg';
import gitHubLogoOutline from '../../../assets/icons/github_icon_outline.svg';

function Socials() {
  return (
    <div className="socials-container flex flex-row">
      <div className="socials-col flex flex-col">
        <div className="flex flex-row justify-center socials-row-margin-bottom">
          <img className="socials-icon inline-block mr-1" alt="Twitter icon" src={twitterLogoOutline} />
          <img className="socials-icon inline-block ml-1" alt="LinkedIn icon" src={linkedInLogoOutline} />
        </div>
        <div className="flex flex-row justify-center">
          <img className="socials-icon inline-block" alt="GitHub icon" src={gitHubLogoOutline} />
        </div>
      </div>
      <div className="signature-col socials-col flex flex-col">
        <div className="signature-row flex flex-row socials-row-margin-bottom overflow-hidden">
          <span className="text-lg font-bold whitespace-nowrap">Train hard!</span>
        </div>
        <div className="signature-row flex flex-row overflow-hidden">
          <span className="text-xs whitespace-nowrap">By César Cachulo</span>
        </div>
      </div>
    </div>
  );
}

export default Socials;
