import { NOTIFICATION_TYPE, Store } from "react-notifications-component";

interface addNotificationProps {
  title?: string;
  message?: string;
  type?: NOTIFICATION_TYPE;
  duration?: number;
}

export const addNotification = ({
  message,
  title,
  type,
  duration = 1500,
}: addNotificationProps) => {
  return Store.addNotification({
    title,
    message,
    type,
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration,
      onScreen: true,
      showIcon: true,
    },
  });
};
