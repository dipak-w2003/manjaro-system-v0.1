import React, { ComponentType, SVGProps } from "react";
import { DesktopIcon } from "./RenderDesktopIcon";
const TbDesktopChange = ({ IconKey }: { IconKey: string }) => {
  return (
    <div>
      <p title={IconKey}>
        <DesktopIcon iconKey={IconKey} />
      </p>
    </div>
  );
};

export default TbDesktopChange;
