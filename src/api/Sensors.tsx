import { API, graphqlOperation } from 'aws-amplify';
import { getSensor, listSensors } from '../graphql/queries';
import { updateSensorState } from '../graphql/mutations';
import { GetSensorQuery, ListSensorsQuery, UpdateSensorStateMutation } from '../API';

interface IGeo {
    latitude: number,
    longitude: number
}

export interface ISensor {
    sensorId: string,
    name: string,
    geo: IGeo,
    enabled: boolean,
    status: number
}

export const GetSensorStatusColor = (status : number) => {
    
    let r = "";

    if (status === 1) {
        r = "green"
    } else if (status === 2) {
        r = "yellow"
    } else if (status === 3) {
        r = "red"
    } else {
      r = "white"
    }

    return r;
}

export const GetSensor = async (sensorId: string): Promise<ISensor | null> => {

    try {

        const response = (await API.graphql(graphqlOperation(getSensor, {sensorId: sensorId}))) as {
            data: GetSensorQuery;
          };

        if (response.data.getSensor){
            
            const r = response.data.getSensor as ISensor;
            
            return r;
        }
        else {

            return null;
        }

    } catch (error) {
        throw error;
    }
}

export const GetSensors = async (): Promise<Array<ISensor>> => {

    try {

        const response = (await API.graphql(graphqlOperation(listSensors))) as {
            data: ListSensorsQuery;
          };

        if (response.data && response.data.listSensors) {
            
            const r = response.data.listSensors as Array<ISensor>;
            
            return r;
        }
        else {

            return Array<ISensor>();
        }

    } catch (error) {
        throw error;
    }
}

export const UpdateSensor = async (sensorId: string, enabled: boolean): Promise<ISensor | null> => {

    try {

        const response = (await API.graphql(graphqlOperation(updateSensorState, {sensorId: sensorId, enabled: enabled}))) as {
            data: UpdateSensorStateMutation;
          };

        if (response.data.updateSensorState){
            
            const r = response.data.updateSensorState as ISensor;
            
            return r;
        }
        else {

            return null;
        }

    } catch (error) {
        throw error;
    }
}