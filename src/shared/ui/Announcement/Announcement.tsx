import { FC } from "react";
import { IAnnouncement } from "./AnnouncementProps";

import styles from "./Announcement.module.scss";

const Announcement: FC<IAnnouncement> = ({ children }) => {
  return <div className={styles["announcement"]}>{children}</div>;
};

export default Announcement;
