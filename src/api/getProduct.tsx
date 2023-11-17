import { dbService } from "../mybase";


 export const getProduct = async(name : string) => {
    let response;
    const data = await dbService.collection('shopping').where('name', '==', name).get();
    data.forEach( doc => {
        response = doc.data();
    });

    return response;
};