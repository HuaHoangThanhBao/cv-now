import React from "react";
import "./Board.scss";
import DragNDrop from "../../molecules/DragNDrop/DragNDrop";

const Board = (props) => {
  const {
    pages,
    setPages,
    noNeedList,
    setNoNeedList,
    handleTransformToOneColumn,
    setIsDragChange,
    resetCurrentBlockSelected,
    resetCurrentBulletContentDetailSelected,
  } = props;

  return (
    <div className="board">
      <DragNDrop
        data={pages}
        setPages={setPages}
        noNeedList={noNeedList}
        setNoNeedList={setNoNeedList}
        handleTransformToOneColumn={handleTransformToOneColumn}
        setIsDragChange={setIsDragChange}
        resetCurrentBlockSelected={resetCurrentBlockSelected}
        resetCurrentBulletContentDetailSelected={
          resetCurrentBulletContentDetailSelected
        }
      />
    </div>
  );
};

export default Board;
