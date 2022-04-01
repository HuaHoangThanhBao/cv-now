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
import TagBlock from '../TagBlock/TagBlock';
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
    const onInputFieldChange = (event, setValue, setIsHide) => {
        const val = event.target.value;
        if(val !== ''){
            setIsHide(false);
            setValue(event.target.value);
        }
        else{
            setIsHide(true);
            setValue('');
        }
    }
    const createNewContent = (atIndex, contentList, setContentList) => {
        console.log('Going to create component at index: '+ atIndex)
        contentList.splice(atIndex + 1, 0, contentList.length)
        setContentList([...contentList])
    }
    return(
        <div className="document">
            <EducationBlock handleOutsideClick={useOnClickOutside} onInputFieldChange={onInputFieldChange} createNewContent={createNewContent}/>
            <WorkBlock handleOutsideClick={useOnClickOutside} onInputFieldChange={onInputFieldChange} createNewContent={createNewContent}/>
            <OrganizationBlock handleOutsideClick={useOnClickOutside} onInputFieldChange={onInputFieldChange} createNewContent={createNewContent}/>
            <CertificateBlock handleOutsideClick={useOnClickOutside} onInputFieldChange={onInputFieldChange} createNewContent={createNewContent}/>
            <PersonalProjectBlock handleOutsideClick={useOnClickOutside} onInputFieldChange={onInputFieldChange} createNewContent={createNewContent}/>
            <ConferenceBlock handleOutsideClick={useOnClickOutside}/>
            <PublicationBlock handleOutsideClick={useOnClickOutside}/>
            <HonorAwardBlock handleOutsideClick={useOnClickOutside}/>
            <AchievementBlock handleOutsideClick={useOnClickOutside}/>
            <VolunteerkBlock handleOutsideClick={useOnClickOutside}/>
            <TeachingBlock handleOutsideClick={useOnClickOutside}/>
            <ReferenceBlock handleOutsideClick={useOnClickOutside}/>
            <LanguageBlock handleOutsideClick={useOnClickOutside}/>
            <TechnicalSkillBlock handleOutsideClick={useOnClickOutside}/>
            <TagBlock handleOutsideClick={useOnClickOutside}/>
        </div>
    )
}

export default DocumentPanel;