import { Configuration } from "@zuu/vet";
import { ApiConfig } from '../../configs/ApiConfig';
import * as fetch from "node-fetch";
import { Current } from './types/Current';
import { News } from "./types/News";
import { Alumni } from "./types/Alumni";
import { Edition } from "./types/Edition";
import { Talk } from './types/Talk';

export class InfoeducatieApi {
    @Configuration("api", false)
    public apiConfig: ApiConfig;
    private auth: string = null;

    public authorize(key: string): InfoeducatieApi {
        this.auth = key;
        return this;
    }

    public deauthorize(): InfoeducatieApi {
        this.auth = null;
        return this;
    }

    public async reach(route: string, headers: { [key: string]: string } = {}): Promise<any> {
        if(this.auth != null) headers['Authorization'] = this.auth;
        let response = await fetch(this.apiConfig.endpoint + route, { headers });
        return await response.json();
    }

    public async getCurrent(): Promise<Current> {
        return await this.reach(this.apiConfig.current);
    }

    public async getTalks(): Promise<Talk[]> {
        return await this.reach(this.apiConfig.talks);
    }

    public async getEditions(): Promise<Edition[]> {
        return await this.reach(this.apiConfig.editions);
    }

    public async getNews(): Promise<News[]> {
        return await this.reach(this.apiConfig.news);
    }

    public async getAlumnis(): Promise<Alumni[]> {
        let result: any[] = await this.reach(this.apiConfig.alumni);
        for(let i = 0; i < result.length; i++) {
            if(result[i].user.job != null && typeof result[i].user.job != 'undefined' && result[i].user.job.trim() == '') result[i].user.job = null;
            result[i].editions = result[i].editions.map(x => x.name);
        }
        return result;
    }
}