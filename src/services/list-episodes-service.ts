import { PodCastTransferModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { HttpStatus } from "../utils/status-code";



export const serviceListEpisodes = async (): Promise<PodCastTransferModel> => {

    let responseFormat: PodCastTransferModel = {
        statusCode: 0,
        body: []
    }
    
    const data = await repositoryPodcast();

    if(data.length !== 0){
        responseFormat.statusCode = HttpStatus.OK;        
    }else{
        responseFormat.statusCode = HttpStatus.NoContent;
    }

    responseFormat.body = data;

    return responseFormat;
}