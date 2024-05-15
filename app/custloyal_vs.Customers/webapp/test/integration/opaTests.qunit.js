sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'custloyalvs/Customers/test/integration/FirstJourney',
		'custloyalvs/Customers/test/integration/pages/CustomersList',
		'custloyalvs/Customers/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('custloyalvs/Customers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);