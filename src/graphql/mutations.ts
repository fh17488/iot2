// tslint:disable
// this is an auto generated file. This will be overwritten

export const createSensorValue = /* GraphQL */ `
  mutation CreateSensorValue(
    $input: CreateSensorValueInput!
    $condition: ModelSensorValueConditionInput
  ) {
    createSensorValue(input: $input, condition: $condition) {
      id
      sensorId
      pH
      temperature
      salinity
      disolvedO2
      status
      timestamp
    }
  }
`;
export const updateSensorValue = /* GraphQL */ `
  mutation UpdateSensorValue(
    $input: UpdateSensorValueInput!
    $condition: ModelSensorValueConditionInput
  ) {
    updateSensorValue(input: $input, condition: $condition) {
      id
      sensorId
      pH
      temperature
      salinity
      disolvedO2
      status
      timestamp
    }
  }
`;
export const deleteSensorValue = /* GraphQL */ `
  mutation DeleteSensorValue(
    $input: DeleteSensorValueInput!
    $condition: ModelSensorValueConditionInput
  ) {
    deleteSensorValue(input: $input, condition: $condition) {
      id
      sensorId
      pH
      temperature
      salinity
      disolvedO2
      status
      timestamp
    }
  }
`;
export const updateSensorState = /* GraphQL */ `
  mutation UpdateSensorState($sensorId: String!, $enabled: Boolean!) {
    updateSensorState(sensorId: $sensorId, enabled: $enabled) {      
      sensorId
      name
      enabled
      geo {
        latitude
        longitude
      }
      status
    }
  }
`;