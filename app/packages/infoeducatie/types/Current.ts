import { Edition } from './Edition';
import { User } from './User';
import { ObjectType, Field } from '@zuu/owl';

@ObjectType()
export class Current {
    @Field({nullable: true})
    public is_logged_in: boolean;
    
    @Field({nullable: true})
    public is_registration_open: boolean;
    
    @Field({nullable: true})
    public is_teacher: boolean;
    
    @Field({nullable: true})
    public is_contestant: boolean;
    
    @Field(type =>  Edition, {nullable: true})
    public last_edition_with_results: Edition;
    
    @Field(type =>  Edition, {nullable: true})
    public edition: Edition;
    
    @Field(type =>  User, {nullable: true})
    public user: User;
};