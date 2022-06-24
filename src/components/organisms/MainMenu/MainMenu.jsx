import React from 'react';
import Button from '../../atoms/Button/Button';
import FontIcon from './../../../dist/font.svg';
import ThemeIcon from './../../../dist/theme.svg';
import TemplateIcon from './../../../dist/template-switch.svg';
import LayoutIcon from './../../../dist/layout.svg';
import SettingsIcon from './../../../dist/settings.svg';
import DownloadIcon from './../../../dist/download.svg';
import AlignLeftIcon from './../../../dist/align-left.svg';
import AlignJustifyIcon from './../../../dist/align-justify.svg';
import TextBoldIcon from './../../../dist/text-bold.svg';
import TextItalicIcon from './../../../dist/text-italic.svg';
import TextUnderlineIcon from './../../../dist/text-underline.svg';
import TextLinkIcon from './../../../dist/text-link.svg';
import { menu } from '../../../constants/Menu';
import './MainMenu.scss'

const MainMenu = (props) => {
    const {
        generatePDF, setMenuItemSelected, setIsShowReviewList, getMenuContent
    } = props;
    return(
        <div className="main-menu">
            <div className="main-menu-tools">
                <Button 
                    icon={FontIcon}
                    text="Font"
                    onClick={() => setMenuItemSelected(menu.font)}
                />
                <Button 
                    icon={ThemeIcon}
                    text="Theme"
                    onClick={() => setMenuItemSelected(menu.theme)}
                />
                <Button 
                    icon={TemplateIcon}
                    text="Template"
                    onClick={() => setMenuItemSelected(menu.template)}
                />
                <Button 
                    icon={LayoutIcon}
                    text="Layout"
                    onClick={() => {
                        setIsShowReviewList(true)
                        setMenuItemSelected(menu.layout)
                    }}
                />
                <Button 
                    icon={SettingsIcon}
                    text="Settings"
                    onClick={() => setMenuItemSelected(menu.settings)}
                />
                <Button 
                    icon={DownloadIcon}
                    text="Download"
                    externalClassName='download'
                    onClick={generatePDF}
                />
            </div>
            <div className='main-menu-panel-container'>
                <div className='main-menu-panel'>
                    {getMenuContent()}
                </div>
            </div>
            <div className="main-menu-content-options">
                <Button 
                    icon={AlignLeftIcon}
                />
                <Button 
                    icon={AlignJustifyIcon}
                />
                <Button 
                    icon={TextBoldIcon}
                />
                <Button 
                    icon={TextItalicIcon}
                />
                <Button 
                    icon={TextUnderlineIcon}
                />
                <Button 
                    icon={TextLinkIcon}
                />
            </div>
        </div>
    )
}

export default MainMenu;