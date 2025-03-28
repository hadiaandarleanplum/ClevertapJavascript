var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[], region:'us1', token:'cc1-232' };
clevertap.privacy.push({useIP: true}); //set the flag to true, if the user agrees to share their IP data

 // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({"id": "RKR-Z99-876Z"});
//clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data


 (function () {
         var wzrk = document.createElement('script');
         wzrk.type = 'text/javascript';
         wzrk.async = true;
         wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/clevertap.min.js';
         var s = document.getElementsByTagName('script')[0];
         s.parentNode.insertBefore(wzrk, s);
         console.log("Added CleverTap");
  })();
  clevertap.spa = true

  window.onload = function() {
    // Your JavaScript code here
    console.log('Page has fully loaded');

    clevertap.notificationCallback = function(msg){
        console.log(JSON.stringify(msg));

        clevertap.renderNotificationViewed(msg);
    };
};


// with the exception of one of Identity, Email, or FBID
// each of the following fields is optional

 /*let customNotificationPayload = {
    msgId: "1723482929"// required
    //pivotId?: string; // optional - String value containing an A/B testing campaign's variant name.
 }*/


function onUserLoginCT(){
  clevertap.onUserLogin.push({
 "Site": {
   "Name": "Hadia Javascript7",            // String
   "identity": 597438133,              // String or number
   "Email": "",         // Email address of the user
   "Phone": "",           // Phone (with the country code)
   "Gender": "F",                     // Can be either M or F
   "DOB": new Date(),                 // Date of Birth. Date object
   "web property": "test yes"
// optional fields. controls whether the user will be sent email, push etc.
   "MSG-email": true,                // Disable email notifications
   "MSG-push": true,                  // Enable push notifications
   "MSG-sms": true,                   // Enable sms notifications
   "MSG-whatsapp": true,              // Enable WhatsApp notifications
 }
})
  console.log('I LOGGED IN');
}


function myFunction() {
  clevertap.event.push('webpopup');
}



