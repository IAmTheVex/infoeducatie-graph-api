import { ObjectType, Field } from '@zuu/owl';
import { AlumniUser } from './AlumniUser';

@ObjectType()
export class Alumni {
    @Field({nullable: true})
    public description: string;
    
    @Field(type => [String], {nullable: true})
    public editions: string[];
 
    @Field(type => AlumniUser, {nullable: true})
    public user: AlumniUser;
};