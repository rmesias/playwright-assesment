import { request } from "@playwright/test";

export default function(params?: {username:string; password:string}): { accessToken: string; refreshToken: string; } {

    request.post
        (
            ``,
            { 
                data:{

                },
                    headers:{
                    authorization:
                }

            })
}