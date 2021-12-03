/* eslint-disable no-console */
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Receive firebase config as broadcast from app
// Broadast is sent from "WebPushNotificationAccess.ts"
const broadcast = new BroadcastChannel("firebase");
broadcast.onmessage = (event) => {
    if (event.data && event.data.type === "config") {
        console.log(event.data.data);
        const firebaseApp = initializeApp(event.data.data);
        getMessaging(firebaseApp);
    }
};

// Only service worker can receive notificationclick event => forward to cns-native through message
self.addEventListener("notificationclick", function (event: any) {
    console.log("On notification click: ", event.notification.tag);
    const broadcast = new BroadcastChannel("notificationclick");
    broadcast.postMessage({ action: event.action });
});
