import React, {useState} from 'react';
import Title from '../../atoms/Title/Title';
import EditBalance from '../../molecules/EditBalance/EitBalance';
import MainMenu from '../../molecules/MainMenu/MainMenu';
import Board from '../Board/Board';
import DocumentPanel from '../../organisms/DocumentPanel/DocumentPanel';
import { MetaData } from '../../../constants/MetaData';
import './CVTemplate.scss';
import { template_type } from '../../../constants/Template';


const CVTemplate = () => {
    const [pages, setPages] = useState(MetaData)
    const [isReOrder, setIsReOrder] = useState(false)
    const [currentTemplateType, setCurrentTemplateType] = useState(template_type.it)
    return(
        <div className="cv-template">
            <MainMenu />
            <Board 
                pages={pages}
                setPages={setPages}
                setIsReOrder={setIsReOrder}
            />
            <div className="mini-menu">
                <Title placeholder="My Document"/>
                <EditBalance />
            </div>
            <DocumentPanel 
                pages={pages}
                setPages={setPages}
                isReOrder={isReOrder}
                setIsReOrder={setIsReOrder}
                currentTemplateType={currentTemplateType}
                setCurrentTemplateType={setCurrentTemplateType}
            />
        </div>
    )
}

export default CVTemplate;