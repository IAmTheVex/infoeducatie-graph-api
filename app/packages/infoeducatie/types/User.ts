import { ObjectType, Field } from "@zuu/owl";

@ObjectType()
export class User {
    @Field({nullable: true})
    public id: number;
    
    @Field({nullable: true})
    public email: string;
    
    @Field({nullable: true})
    public access_token: string;
    
    @Field({nullable: true})
    public name: string;
    
    @Field({nullable: true})
    public registration_step_number: number;
};