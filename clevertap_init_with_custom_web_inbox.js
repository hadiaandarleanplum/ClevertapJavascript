var clevertap = {
    event: [], profile: [], account: [], onUserLogin: [], notifications: [], privacy: [],
    region: 'us1', token: 'cc1-232'
};

clevertap.account.push({ "id": "RKR-Z99-876Z" });
clevertap.privacy.push({ optOut: false });
clevertap.privacy.push({ useIP: false });
clevertap.dismissSpamControl = true;
clevertap.spa = true;

function loadCleverTapScript(callback) {
    var wzrk = document.createElement('script');
    wzrk.type = 'text/javascript';
    wzrk.async = true;
    wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/clevertap.min.js';
    wzrk.onload = function () {
        console.log('CleverTap script loaded');
        window.clevertapInitialized = true;
        callback();
    };
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wzrk, s);
}

function initializeCleverTap() {
    console.log('Initializing CleverTap...');
    loadCleverTapScript(function () {
        console.log('CleverTap Initialized');
        clevertap.event.push("Custom Event Trigger", {
            "tn_member_status": "premium",
            "tn_web_inbox_promotion": "true"
        });
        console.log('Custom Event Triggered');
        getInboxCounts();
        loadMessages();
    });
}

window.onload = function () {
    console.log('Page has fully loaded');
    //initializeCleverTap();
};

document.getElementById("initializeButton")?.addEventListener("click", initializeCleverTap);
document.getElementById("loginButton")?.addEventListener("click", onUserLoginCT);
document.getElementById("triggerEvent")?.addEventListener("click", function () {
    clevertap.event.push("Custom Event Trigger", {
      "tn_member_status":"premium",
      "tn_web_inbox_promotion":"true"
    });
    console.log('Custom Event Triggered');
});
document.getElementById("loadCustomInboxMessages")?.addEventListener("click", loadMessages);

function createInboxContainer() {
    let container = document.getElementById('inboxContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'inboxContainer';
        container.style.border = '1px solid #ccc';
        container.style.padding = '10px';
        container.style.margin = '10px 0';
        document.body.appendChild(container);
    }
    return container;
}

function onUserLoginCT() {
    clevertap.onUserLogin.push({
        "Site": {
            "Name": "Hadia Javascript6",
            "identity": 59743819,
            "Email": "",
            "Phone": "",
            "Gender": "F",
            "DOB": new Date(),
            "web property": "test yes",
            "MSG-email": true,
            "MSG-push": true,
            "MSG-sms": true,
            "MSG-whatsapp": true
        }
    });
    console.log('User Logged In');
}

function getInboxCounts() {
    if (typeof clevertap.getInboxMessageCount === "function") {
        console.log("Total Messages: " + clevertap.getInboxMessageCount());
        console.log("Unread Messages: " + clevertap.getInboxMessageUnreadCount());
    } else {
        console.log("Web Inbox is NOT enabled or not yet loaded");
    }
}

function loadMessages() {
    if (typeof clevertap.getAllInboxMessages === "function") {
        const messagesObj = clevertap.getAllInboxMessages();
        console.log("Fetched messages:", messagesObj);
        const messages = Object.values(messagesObj || {});
        displayMessages(messages);
    } else {
        console.log("Web Inbox is NOT enabled or not yet loaded");
    }
}

function displayMessages(messages) {
    if (!Array.isArray(messages)) {
        console.log("Invalid messages format:", messages);
        return;
    }
    const container = createInboxContainer();
    container.innerHTML = '<h3>Inbox Messages</h3>';

    messages.forEach(msg => {
        console.log("Message Object:", msg);
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.style.border = '1px solid #ddd';
        messageElement.style.margin = '5px 0';
        messageElement.style.padding = '5px';

        let title = msg.msg && msg.msg.length > 0 ? msg.msg[0].title : 'No Title';
        let content = msg.msg && msg.msg.length > 0 ? JSON.stringify(msg.msg[0]) : 'No Content Available';

        messageElement.innerHTML = `
            <p><strong>${title}</strong></p>
            <p>${content}</p>
            <button onclick='markAsRead("${msg.id}")'>Mark as Read</button>
            <button onclick='deleteMessage("${msg.id}")'>Delete</button>
            <button onclick='trackNotificationClick(${JSON.stringify(msg)})'>Track Click</button>
        `;
        container.appendChild(messageElement);
    });
}

function markAsRead(messageId) {
    console.log("Marking message as read:", messageId);
    if (typeof clevertap.markReadInboxMessage === "function") {
        clevertap.markReadInboxMessage(messageId);
        console.log("Marked as read successfully:", messageId);
        loadMessages();
    } else {
        console.log("markReadInboxMessage function is not available");
    }
}

function trackNotificationClick(message) {
    console.log("Tracking click for message:", message.wzrk_id);
    clevertap.renderNotificationClicked({
        msgId: message.wzrk_id,
        wzrk_pivot: message.wzrk_pivot || "wzrk_default",
    });
}

document.getElementById('loadMessages')?.addEventListener('click', loadMessages);
