import { ObjectType, Field } from "@zuu/owl";

@ObjectType()
export class TalkUser {
    @Field({nullable: true})
    public email_md5: string;
    
    @Field({nullable: true})
    public job: string;
    
    @Field({nullable: true})
    public name: string;
};