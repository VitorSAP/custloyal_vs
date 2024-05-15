sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'custloyalvs/Redemptions/test/integration/FirstJourney',
		'custloyalvs/Redemptions/test/integration/pages/RedemptionsList',
		'custloyalvs/Redemptions/test/integration/pages/RedemptionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RedemptionsList, RedemptionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('custloyalvs/Redemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRedemptionsList: RedemptionsList,
					onTheRedemptionsObjectPage: RedemptionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);