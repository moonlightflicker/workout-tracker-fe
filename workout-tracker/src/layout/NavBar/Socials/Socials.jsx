import './Socials.scss';

import twitterLogoOutline from '../../../assets/icons/twitter_icon_outline.svg';
import linkedInLogoOutline from '../../../assets/icons/linkedin_icon_outline.svg';
import gitHubLogoOutline from '../../../assets/icons/github_icon_outline.svg';

function Socials() {
  return (
    <div>
      <div className="socials-line block text-center">
        <img className="socials-icon inline-block mr-1" alt="Twitter icon" src={twitterLogoOutline} />
        <img className="socials-icon inline-block ml-1" alt="LinkedIn icon" src={linkedInLogoOutline} />
      </div>
      <div className="socials-line block text-center">
        <img className="socials-icon inline-block" alt="GitHub icon" src={gitHubLogoOutline} />
      </div>
    </div>
  );
}

export default Socials;
