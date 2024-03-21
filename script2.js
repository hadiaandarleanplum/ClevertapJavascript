var clevertap = {event:[], profile:[], account:[], onUserLogin:[], region:'us1', notifications:[], privacy:[]};
 // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({"id": "WRZ-KK5-656Z"});
//clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
//clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
 (function () {
         var wzrk = document.createElement('script');
         wzrk.type = 'text/javascript';
         wzrk.async = true;
         wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/clevertap.min.js';
         var s = document.getElementsByTagName('script')[0];
         s.parentNode.insertBefore(wzrk, s);
  })();
  clevertap.spa = true

// with the exception of one of Identity, Email, or FBID
// each of the following fields is optional

/*clevertap.onUserLogin.push({
 "Site": {
   "Name": "Hadia Javascript",            // String
   "Identity": 59743819,              // String or number
   "Email": "hadiajavascript@gmail.com",         // Email address of the user
   "Phone": "+14155551234",           // Phone (with the country code)
   "Gender": "F",                     // Can be either M or F
   "DOB": new Date(),                 // Date of Birth. Date object
// optional fields. controls whether the user will be sent email, push etc.
   "MSG-email": false,                // Disable email notifications
   "MSG-push": true,                  // Enable push notifications
   "MSG-sms": true,                   // Enable sms notifications
   "MSG-whatsapp": true,              // Enable WhatsApp notifications
 }
})*/

//send event to clevertap on button click
/*function myFunction() {
  clevertap.event.push('Charged');
}*/