import React from "react";
import EducationIcon from '../../../dist/education.png';
import WorkExperienceIcon from '../../../dist/work-experience.png';
import SoftSkillIcon from '../../../dist/soft-skill.png';
import SupportCauseIcon from '../../../dist/support-cause.png';
import InterestIcon from '../../../dist/interest.png';
import OrganizationIcon from '../../../dist/organization.png';
import CertificateIcon from '../../../dist/certificate.png';
import PersonalProjectIcon from '../../../dist/personal-project.png';
import AchievementIcon from '../../../dist/achievement.png';
import ConferenceIcon from '../../../dist/conference.png';
import HonorAwardIcon from '../../../dist/honor-award.png';
import TeachingExperienceIcon from '../../../dist/teaching-experience.png';
import VolunteerIcon from '../../../dist/volunteer.png';
import LanguageIcon from '../../../dist/language.png';
import PublicationIcon from '../../../dist/publication.png';
import SkillIcon from '../../../dist/skill.png';
import ReferenceIcon from '../../../dist/reference.png';
import './Icon.scss';

const Icon = (props) => {
  const {iconType} = props;

  const renderIcon = (type) => {
    switch(type){
      case 1:
        return <img src={EducationIcon} alt=''/>
      case 2:
        return <img src={WorkExperienceIcon} alt=''/>
      case 3:
        return <img src={OrganizationIcon} alt=''/>
      case 4:
        return <img src={CertificateIcon} alt=''/>
      case 5:
        return <img src={PersonalProjectIcon} alt=''/>
      case 6:
        return <img src={AchievementIcon} alt=''/>
      case 7:
        return <img src={ConferenceIcon} alt=''/>
      case 8:
        return <img src={HonorAwardIcon} alt=''/>
      case 9:
        return <img src={TeachingExperienceIcon} alt=''/>
      case 10:
        return <img src={VolunteerIcon} alt=''/>
      case 11:
        return <img src={SupportCauseIcon} alt=''/>
      case 12:
        return <img src={LanguageIcon} alt=''/>
      case 13:
        return <img src={PublicationIcon} alt=''/>
      case 14:
        return <img src={SkillIcon} alt=''/>
      case 15:
        return <img src={InterestIcon} alt=''/>
      case 16:
        return <img src={SoftSkillIcon} alt=''/>
      case 17:
        return <img src={ReferenceIcon} alt=''/>
      default:
        return <img src={EducationIcon} alt=''/>
    }
  }

  return (
    <div className='icon'>
        {renderIcon(iconType)}
    </div>
  )
}

export default Icon;