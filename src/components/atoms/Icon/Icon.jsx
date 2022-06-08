import React from "react";
import {ReactComponent as EducationIcon} from '../../../dist/education.svg';
import {ReactComponent as WorkExperienceIcon} from '../../../dist/work-experience.svg';
import {ReactComponent as SoftSkillIcon} from '../../../dist/soft-skill.svg';
import {ReactComponent as SupportCauseIcon} from '../../../dist/support-cause.svg';
import {ReactComponent as InterestIcon} from '../../../dist/interest.svg';
import {ReactComponent as OrganizationIcon} from '../../../dist/organization.svg';
import {ReactComponent as CertificateIcon} from '../../../dist/certificate.svg';
import {ReactComponent as PersonalProjectIcon} from '../../../dist/personal-project.svg';
import {ReactComponent as AchievementIcon} from '../../../dist/achievement.svg';
import {ReactComponent as ConferenceIcon} from '../../../dist/conference.svg';
import {ReactComponent as HonorAwardIcon} from '../../../dist/honor-award.svg';
import {ReactComponent as TeachingExperienceIcon} from '../../../dist/teaching-experience.svg';
import {ReactComponent as VolunteerIcon} from '../../../dist/volunteer.svg';
import {ReactComponent as LanguageIcon} from '../../../dist/language.svg';
import {ReactComponent as PublicationIcon} from '../../../dist/publication.svg';
import {ReactComponent as SkillIcon} from '../../../dist/skill.svg';
import {ReactComponent as ReferenceIcon} from '../../../dist/reference.svg';
import './Icon.scss';

const Icon = (props) => {
  const {iconType} = props;

  const renderIcon = (type) => {
    switch(type){
      case 1:
        return <EducationIcon width={35} height={32}/>
      case 2:
        return <WorkExperienceIcon width={35} height={32}/>
      case 3:
        return <OrganizationIcon width={35} height={32}/>
      case 4:
        return <CertificateIcon width={35} height={32}/>
      case 5:
        return <PersonalProjectIcon width={35} height={32}/>
      case 6:
        return <AchievementIcon width={35} height={32}/>
      case 7:
        return <ConferenceIcon width={35} height={32}/>
      case 8:
        return <HonorAwardIcon width={35} height={32}/>
      case 9:
        return <TeachingExperienceIcon width={35} height={32}/>
      case 10:
        return <VolunteerIcon width={35} height={32}/>
      case 11:
        return <SupportCauseIcon width={35} height={32}/>
      case 12:
        return <LanguageIcon width={35} height={32}/>
      case 13:
        return <PublicationIcon width={35} height={32}/>
      case 14:
        return <SkillIcon width={35} height={32}/>
      case 15:
        return <InterestIcon width={35} height={32}/>
      case 16:
        return <SoftSkillIcon width={35} height={32}/>
      case 17:
        return <ReferenceIcon width={35} height={32}/>
      default:
        return <EducationIcon width={35} height={32}/>
    }
  }

  return (
    <div className='icon'>
        {renderIcon(iconType)}
    </div>
  )
}

export default Icon;