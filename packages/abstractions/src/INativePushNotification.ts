/**
 * Remote push notification
 */
export interface INativePushNotification {
    /**
     * Content sent as part of the notification
     */
    content: any;
    /**
     * Id of the notification
     */
    id?: string;
    /**
     * Indicator wether the app was in the foreground when receiving the notification
     */
    foreground?: boolean;
    /**
     * Time available for processing the notification (ios)
     */
    limitedProcessingTime?: string;
}
