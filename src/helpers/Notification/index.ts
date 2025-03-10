import { notification } from "antd";

type PositionType = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'bottom';
type NotificationType = 'info' | 'error' | 'warning' | 'success';

type NotificationProps = {
    message: string,
    type: NotificationType,
    placement: PositionType,
    description?: string,
    duration: number
}

export const notify = ({ message, description, duration = 4.5, placement = 'topRight', type = 'info' }: NotificationProps) => {   
    const openNotification = (props: NotificationProps) => {
        const notificationType: NotificationType = props.type;
        notification[notificationType]({
            ...props
        })
    }

    openNotification({
        duration,
        message,
        placement,
        type,
        description
    })
}