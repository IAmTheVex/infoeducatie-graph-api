import { Field, ObjectType } from "@zuu/owl";

@ObjectType()
export class News {
    @Field({nullable: true})
    public created_at: string;
    
    @Field({nullable: true})
    public id: number;
    
    @Field({nullable: true})
    public pinned: boolean;
    
    @Field({nullable: true})
    public short: string;
    
    @Field({nullable: true})
    public title: string;
};