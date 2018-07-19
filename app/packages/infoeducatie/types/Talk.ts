import { ObjectType, Field } from "@zuu/owl";
import { TalkUser } from './TalkUser';

@ObjectType()
export class Talk {
    @Field(type => [TalkUser], {nullable: true})
    public users: TalkUser[];
    
    @Field({nullable: true})
    public comments_count: number;
    
    @Field({nullable: true})
    public description: string;
    
    @Field({nullable: true})
    public title: string;
    
    @Field({nullable: true})
    public discourse_url: string;
};