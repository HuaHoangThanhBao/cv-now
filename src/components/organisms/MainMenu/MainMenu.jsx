import React, { useRef } from 'react';
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
import { menu } from '../../../constants/Menu';
import './MainMenu.scss'
import { useEffect } from 'react';

const MainMenu = (props) => {
    const {
        generatePDF, menuItemSelected, setMenuItemSelected, getMenuContent, useOnClickOutside, 
        isMenuActive, setIsMenuActive
    } = props;

    const menuPanelRef = useRef()

    useOnClickOutside(menuPanelRef, setIsMenuActive)

    useEffect(() => {
        if(!isMenuActive){
            setMenuItemSelected('')
        }
    }, [isMenuActive, setMenuItemSelected])

    useEffect(() => {
        if(menuItemSelected){
            setIsMenuActive(true)
        }
    }, [menuItemSelected, setIsMenuActive])

    return(
        <div className="main-menu">
            <div className="main-menu-tools">
                <Button 
                    icon={FontIcon}
                    text="Font"
                    onClick={() => setMenuItemSelected(menu.fonts)}
                />
                <Button 
                    icon={ThemeIcon}
                    text="Theme"
                    onClick={() => setMenuItemSelected(menu.themes)}
                />
                <Button 
                    icon={TemplateIcon}
                    text="Template"
                    onClick={() => setMenuItemSelected(menu.templates)}
                />
                <Button 
                    icon={LayoutIcon}
                    text="Layout"
                    onClick={() => setMenuItemSelected(menu.layouts)}
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
                <div className='main-menu-wrapper'>
                    <div className='main-menu-panel'>
                        {menuItemSelected && (
                            <div className={menuItemSelected} ref={menuPanelRef}>
                                {getMenuContent()}
                            </div>
                        )}
                    </div>
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
            </div>
        </div>
    )
}

export default MainMenu;