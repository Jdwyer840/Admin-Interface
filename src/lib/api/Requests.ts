import {get, post} from './HttpHelpers';

const GET_CUSTOMER_INFO = '/V1/appSupport/customer';
const API_BASE = '/api';
const GET_BEARER_TOKEN = '/V1/token/';

export const makeUrl = (baseUrl: string, api: string): string => {
    return `${baseUrl}${API_BASE}${api}`;
}

type DjangoTokenResponse = {
    access: string,
    refresh: string
}
//TODO rename if this works
export const getNewBearerToken = (urlPrefix: string, username: string, password: string): Promise<DjangoTokenResponse> => {
    return post<DjangoTokenResponse>({
        url: makeUrl(urlPrefix, GET_BEARER_TOKEN),
        requestBody: {
            "username": username,
            "password": password
        }
    });
}



// export const getUserInfo = (urlPrefix: string, bearer_token: string): Promise<CustomerInfo> => {
//     return get<CustomerInfo>({
//         url: makeUrl(urlPrefix, GET_CUSTOMER_INFO),
//         headers: {
//             "Authorization": `Bearer ${bearer_token}`
//         }
//     });
// }
