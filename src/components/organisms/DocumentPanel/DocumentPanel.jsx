import React, {useEffect} from 'react';
import AchievementBlock from '../Achievement/Achievement';
import CertificateBlock from '../CertificateBlock/CertificateBlock';
import ConferenceBlock from '../Conference/Conference';
import EducationBlock from '../EducationBlock/EducationBlock';
import HonorAwardBlock from '../HonorAward/HonorAward';
import LanguageBlock from '../LanguageBlock/LanguageBlock';
import OrganizationBlock from '../OrganizationBlock/OrganizationBlock';
import PersonalProjectBlock from '../PersonalProjectBlock/PersonalProjectBlock';
import PublicationBlock from '../Publication/Publication';
import ReferenceBlock from '../ReferenceBlock/ReferenceBlock';
import TeachingBlock from '../TeachingBlock/TeachingBlock';
import TechnicalSkillBlock from '../TechnicalSkill/TechnicalSkill';
import VolunteerkBlock from '../Volunteer/Volunteer';
import WorkBlock from '../WorkBlock/WorkBlock';
import './DocumentPanel.scss';

const DocumentPanel = () => {
    function useOnClickOutside(ref, handler) {
        useEffect(() => {
            const listener = (event) => {
              // Do nothing if clicking ref's element or descendent elements
              if (!ref.current || ref.current.contains(event.target)) {
                handler(true);
                return;
              }
              handler(false);
            };
            //component did mount
            document.addEventListener("mousedown", listener);
            
            //component will unmount
            return () => {
              document.removeEventListener("mousedown", listener);
            };
        }, [ref]);
    }
    return(
        <div className="document">
            <EducationBlock handleOutsideClick={useOnClickOutside}/>
            <WorkBlock handleOutsideClick={useOnClickOutside}/>
            <OrganizationBlock handleOutsideClick={useOnClickOutside}/>
            <CertificateBlock handleOutsideClick={useOnClickOutside}/>
            <PersonalProjectBlock handleOutsideClick={useOnClickOutside}/>
            <ConferenceBlock handleOutsideClick={useOnClickOutside}/>
            <PublicationBlock handleOutsideClick={useOnClickOutside}/>
            <HonorAwardBlock handleOutsideClick={useOnClickOutside}/>
            <AchievementBlock handleOutsideClick={useOnClickOutside}/>
            <VolunteerkBlock handleOutsideClick={useOnClickOutside}/>
            <TeachingBlock handleOutsideClick={useOnClickOutside}/>
            <ReferenceBlock handleOutsideClick={useOnClickOutside}/>
            <LanguageBlock handleOutsideClick={useOnClickOutside}/>
            <TechnicalSkillBlock handleOutsideClick={useOnClickOutside}/>
        </div>
    )
}

export default DocumentPanel;