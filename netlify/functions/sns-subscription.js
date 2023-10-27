// exports.handler = async function(event, context) {
//     try {
//         const data = JSON.parse(event.body);
//         // Process the data

//         return {
//             statusCode: 200,
//             body: JSON.stringify({ message: 'Success' })
//         };
//     } catch (error) {
//         console.error('Error in the function:', error);

//         return {
//             statusCode: 500,
//             body: JSON.stringify({ message: 'Internal Server Error' })
//         };
//     }
// };




const axios = require('axios');

exports.handler = async function(event, context) {

   // console.log("sns message d");
    //console.log( event);
    const { SubscribeURL } = JSON.parse(event.body);
    console.log(SubscribeURL);
    if (SubscribeURL) {
        try {
            // Send an HTTP GET request to the SubscribeURL to confirm the subscription
            const response = await axios.get(SubscribeURL, { timeout: 10000 });

            if (response.status === 200) {
                // Subscription is confirmed
                return {
                    statusCode: 200,
                    body: JSON.stringify({ message: 'Subscription confirmed' })
                };
            } else {
                // Handle non-200 responses as needed
                return {
                    statusCode: 400,
                    body: JSON.stringify({ message: 'Failed to confirm subscription' })
                };
            }
        } catch (error) {
            // Handle request errors
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Error confirming subscription' })
            };
        }
    } else {
        // Handle other SNS notifications here
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Received SNS notification' })
        };
    }
};
