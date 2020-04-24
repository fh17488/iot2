const AWS = require('aws-sdk');
const iot = new AWS.Iot();


var region = process.env.REGION;

AWS.config.update({
    region: region
});

exports.handler = async (event) => {

    //query for the sensor confirming it has a reported shadow
    //you must have fleet indexing enabled in IoT Core with REGISTRY_AND_SHADOW indexed

    const sensorId = event.arguments.sensorId || "";
    const enabledState = event.arguments.enabled || "true";

    try {

            var params = { endpointType: 'iot:Data-ATS'};
            var result = await iot.describeEndpoint(params).promise();
            const host = result.endpointAddress;
            var iotdata = new AWS.IotData({endpoint: host});
            console.log(host);
            var shadowDocument = {
              state: {
                  reported: {
                      //name: "",
                      enabled: enabledState
                      /*geo: {
                          latitude: 0,
                          longitude: 0
                      }*/
                  }
              }
          }
            var payload_value = JSON.stringify(shadowDocument);
            var params = {
                payload: payload_value /* Strings will be Base-64 encoded on your behalf */, /* required */
                thingName: sensorId /* required */
            };
            console.log("about to update shadow");
            iotdata.updateThingShadow(params, function(err, data) {
              if (err) {
                   console.log("error");
                    console.log(err, err.stack); // an error occurred  
                    return err.stack;
                }                
              else 
              {    
                console.log("data");
                console.log(data);           // successful response
                return data;
              }
            });
    }
    catch (err) {

        console.log("error: " + err);
        throw new Error("Error retrieving sensor: " + sensorId);
    }
};

