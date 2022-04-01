import React from 'react';
import Title from '../../atoms/Title/Title';
import EditBalance from '../../molecules/EditBalance/EitBalance';
import MainMenu from '../../molecules/MainMenu/MainMenu';
import DocumentPanel from '../../organisms/DocumentPanel/DocumentPanel';
import './CVTemplate.scss';


const CVTemplate = () => {
    return(
        <div className="cv-template">
            <MainMenu />
            <div className="mini-menu">
                <Title placeholder="My Document"/>
                <EditBalance />
            </div>
            <DocumentPanel />
        </div>
    )
}

export default CVTemplate;