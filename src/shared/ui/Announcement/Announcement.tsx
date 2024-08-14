import { FC } from "react";
import { IAnnouncement } from "./AnnouncementProps";

import styles from "./Announcement.module.scss";

export const Announcement: FC<IAnnouncement> = ({ children }) => {
  return <div className={styles["announcement"]}>{children}</div>;
};
