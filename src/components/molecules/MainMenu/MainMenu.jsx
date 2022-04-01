import React from 'react';
import Button from '../../atoms/Button/Button';
import FontIcon from './../../../dist/font.svg';
import ThemeIcon from './../../../dist/theme.svg';
import LayoutIcon from './../../../dist/layout.svg';
import SettingsIcon from './../../../dist/settings.svg';
import UndoIcon from './../../../dist/undo.svg';
import RedoIcon from './../../../dist/redo.svg';
import DownloadIcon from './../../../dist/download.svg';
import AlignLeftIcon from './../../../dist/align-left.svg';
import AlignJustifyIcon from './../../../dist/align-justify.svg';
import TextBoldIcon from './../../../dist/text-bold.svg';
import TextItalicIcon from './../../../dist/text-italic.svg';
import TextUnderlineIcon from './../../../dist/text-underline.svg';
import TextLinkIcon from './../../../dist/text-link.svg';
import './MainMenu.scss'

const MainMenu = () => {
    return(
        <div className="main-menu">
            <div className="main-menu-tools">
                <Button 
                    icon={FontIcon}
                    text="Font"
                />
                <Button 
                    icon={ThemeIcon}
                    text="Theme"
                />
                <Button 
                    icon={LayoutIcon}
                    text="Layout"
                />
                <Button 
                    icon={SettingsIcon}
                    text="Settings"
                />
                <Button 
                    icon={UndoIcon}
                />
                <Button 
                    icon={RedoIcon}
                />
                <Button 
                    icon={DownloadIcon}
                    text="Download"
                />
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