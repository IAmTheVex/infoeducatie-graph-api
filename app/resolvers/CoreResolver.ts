import { Resolver, Query, Ctx } from "@zuu/owl";
import { Inject } from "@zuu/vet";
import { InfoeducatieApi } from '../packages/infoeducatie/InfoeducatieApi';
import { Current } from "../packages/infoeducatie/types/Current";
import { Edition } from "../packages/infoeducatie/types/Edition";
import { Talk } from '../packages/infoeducatie/types/Talk';
import { News } from "../packages/infoeducatie/types/News";
import { Alumni } from '../packages/infoeducatie/types/Alumni';

@Resolver()
export class CoreResolver {
    @Inject public api: InfoeducatieApi;

    @Query(returns => Current, {nullable: true})
    public async now(
        @Ctx("key") key: string
    ): Promise<Current> {
        return await this.api.authorize(key).getCurrent();
    }

    @Query(returns => [Talk], {nullable: true})
    public async talks(
        @Ctx("key") key: string
    ): Promise<Talk[]> {
        return await this.api.authorize(key).getTalks();
    }

    @Query(returns => [Edition], {nullable: true})
    public async editions(
        @Ctx("key") key: string
    ): Promise<Edition[]> {
        return await this.api.authorize(key).getEditions();
    }

    @Query(returns => [News], {nullable: true})
    public async news(
        @Ctx("key") key: string
    ): Promise<News[]> {
        return await this.api.authorize(key).getNews();
    }

    @Query(returns => [Alumni], {nullable: true})
    public async alumni(
        @Ctx("key") key: string
    ): Promise<Alumni[]> {
        return await this.api.authorize(key).getAlumnis();
    }
}