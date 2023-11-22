import { CSSProperties } from "react";
import ProfilePicture from "../../assets/custom/my_picture_no_bg.png";

export const PersonImage = ({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) => (
  <div className={className} style={style}>
    <img src={ProfilePicture} />
  </div>
);
