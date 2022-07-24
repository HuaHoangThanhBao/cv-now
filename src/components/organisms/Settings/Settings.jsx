import React from "react";
import "./Settings.scss";

const Settings = (props) => {
  const {
    isShowAvatarOnTemplate,
    setIsShowAvatarOnTemplate,
    isShowCreationDateOnTemplate,
    setIsShowCreationDateOnTemplate,
    isShowPageNumbersOnTemplate,
    setIsShowPageNumbersOnTemplate,
    isShowIconsOnTemplate,
    setIsShowIconsOnTemplate,
  } = props;
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-list">
          <div className="settings-item">
            <input
              type="checkbox"
              className="settings-checkbox"
              defaultChecked={isShowAvatarOnTemplate}
              onClick={() => setIsShowAvatarOnTemplate(!isShowAvatarOnTemplate)}
            />
            <span className="settings-text">Avatar</span>
          </div>
          <div className="settings-item">
            <input
              type="checkbox"
              className="settings-checkbox"
              defaultChecked={isShowCreationDateOnTemplate}
              onClick={() => setIsShowCreationDateOnTemplate(!isShowCreationDateOnTemplate)}
            />
            <span className="settings-text">Creation Date</span>
          </div>
          <div className="settings-item">
            <input
              type="checkbox"
              className="settings-checkbox"
              defaultChecked={isShowPageNumbersOnTemplate}
              onClick={() => setIsShowPageNumbersOnTemplate(!isShowPageNumbersOnTemplate)}
            />
            <span className="settings-text">Page Numbers</span>
          </div>
          <div className="settings-item">
            <input
              type="checkbox"
              className="settings-checkbox"
              defaultChecked={isShowIconsOnTemplate}
              onClick={() => setIsShowIconsOnTemplate(!isShowIconsOnTemplate)}
            />
            <span className="settings-text">Icons</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
