
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodCastTransferModel } from "../models/filter-podcast-model";
import { HttpStatus } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodCastTransferModel> => {

    let responseFormat: PodCastTransferModel = {
        statusCode: 0,
        body: []
    } 

    const queryString = podcastName?.split( '?p=' )[1] ||  '';
    const data = await repositoryPodcast(queryString);

    if(data.length !== 0){
        responseFormat.statusCode = HttpStatus.OK;        
    }else{
        responseFormat.statusCode = HttpStatus.NoContent;
    }

    responseFormat.body = data;
    
    return responseFormat;
}