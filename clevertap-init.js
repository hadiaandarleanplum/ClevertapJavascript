var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[], region:'us1', token:'cc1-232' };
        clevertap.account.push({ "id": "RKR-Z99-876Z" });
        clevertap.privacy.push({ optOut: false });
        clevertap.privacy.push({ useIP: false });
        clevertap.dismissSpamControl = true;
        // Function to load CleverTap script
        function loadCleverTapScript() {
            (function () {
                var wzrk = document.createElement('script');
                wzrk.type = 'text/javascript';
                wzrk.async = true;
                wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/clevertap.min.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(wzrk, s);
            })();
        }

        // Function to check localStorage and initialize CleverTap
        function initializeCleverTap() {
            //var username = localStorage.getItem('username');
            //if (username) {
                // Initialize CleverTap script
                loadCleverTapScript();
                window.clevertapInitialized = true;

                //programaticlly push custom event trigger
                clevertap.event.push('Custom Event Trigger');
            //}
        }

        // Check localStorage and initialize CleverTap on page load
        //window.onload = function () {
            //initializeCleverTap();
        //};

        //initialize Clevertap
        document.getElementById("initializeButton").addEventListener("click", function () {
            initializeCleverTap();
            console.log('Clevertap Initialized');
        });

        //onUserLogin
        document.getElementById("loginButton").addEventListener("click", function () {
            //initializeCleverTap();
            onUserLoginCT();
        });

        //trigger custom event
        document.getElementById("triggerEvent").addEventListener("click", function () {
            clevertap.event.push('Custom Event Trigger');
            console.log('Custom Event Trigger');
        });


        function onUserLoginCT(){
        // Initialize CleverTap script
            //loadCleverTapScript();
            //window.clevertapInitialized = true;

          clevertap.onUserLogin.push({
         "Site": {
           "Name": "Hadia Javascript6",            // String
           "identity": 59743819,              // String or number
           "Email": "",         // Email address of the user
           "Phone": "",           // Phone (with the country code)
           "Gender": "F",                     // Can be either M or F
           "DOB": new Date(),                 // Date of Birth. Date object
           "web property": "test yes",
        // optional fields. controls whether the user will be sent email, push etc.
           "MSG-email": true,                // Disable email notifications
           "MSG-push": true,                  // Enable push notifications
           "MSG-sms": true,                   // Enable sms notifications
           "MSG-whatsapp": true,              // Enable WhatsApp notifications
         }
        })
          console.log('I LOGGED IN');
        }


        // Function to clear localStorage on logout
        function logout() {
            localStorage.removeItem('username');
        }