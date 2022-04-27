import React, {useState} from 'react';
import Title from '../../atoms/Title/Title';
import EditBalance from '../../molecules/EditBalance/EitBalance';
import MainMenu from '../../molecules/MainMenu/MainMenu';
import Board from '../Board/Board';
import DocumentPanel from '../../organisms/DocumentPanel/DocumentPanel';
import { MetaData } from '../../../constants/MetaData';
import './CVTemplate.scss';


const CVTemplate = () => {
    const [pages, setPages] = useState(MetaData)
    const [isReOrder, setIsReOrder] = useState(false)
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
            />
        </div>
    )
}

export default CVTemplate;