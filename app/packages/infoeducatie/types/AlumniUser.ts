import { ObjectType, Field } from "@zuu/owl";

@ObjectType()
export class AlumniUser {
    @Field({nullable: true})
    public first_name: string;
    
    @Field({nullable: true})
    public last_name: string;
    
    @Field({nullable: true})
    public job: string;
    
    @Field({nullable: true})
    public email_md5: string;
};