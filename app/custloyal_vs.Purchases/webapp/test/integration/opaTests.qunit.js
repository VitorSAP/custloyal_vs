sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'custloyalvs/Purchases/test/integration/FirstJourney',
		'custloyalvs/Purchases/test/integration/pages/PurchasesList',
		'custloyalvs/Purchases/test/integration/pages/PurchasesObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchasesList, PurchasesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('custloyalvs/Purchases') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchasesList: PurchasesList,
					onThePurchasesObjectPage: PurchasesObjectPage
                }
            },
            opaJourney.run
        );
    }
);