import { CSSProperties } from "react";
import { data } from "../../data";

export const PersonImage = ({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) => (
  <div className={className} style={style}>
    <img src={data.person.picture} />
  </div>
);
