import {ipcRenderer} from 'electron';

window.addEventListener("DOMContentLoaded", () =>{});


const OldNotification = Notification;

var newNotification = function (title:any, options:any) {
    // Send this to main thread.
    // Catch it in your main 'app' instance with `ipc.on`.
    // Then send it back to the view, if you want, with `event.returnValue` or `event.sender.send()`.
    ipcRenderer.send('notification-shim', {
        title: title + 'eee',
        options
    });
    console.log('notification',title,options);

    // Send the native Notification.
    // You can't catch it, that's why we're doing all of this. :)
    return new OldNotification(title, options);
} as any;

window.Notification = newNotification;

export {}