import { ObjectType, Field } from "@zuu/owl";

@ObjectType()
export class Edition {
    @Field({nullable: true})
    public id: number;
    
    @Field({nullable: true})    
    public year: number;

    @Field({nullable: true})
    public name: string;

    @Field({nullable: true})
    public camp_start_date: string;

    @Field({nullable: true})
    public camp_end_date: string;

    @Field({nullable: true})
    public motto: string;

    @Field({nullable: true})
    public registration_start_date: string;

    @Field({nullable: true})
    public registration_end_date: string;
    
    @Field({nullable: true})
    public travel_data_deadline: string;
    
    @Field({nullable: true})
    public published: boolean;
    
    @Field({nullable: true})
    public created_at: string;
    
    @Field({nullable: true})
    public updated_at: string;
    
    @Field({nullable: true})
    public current: boolean;
    
    @Field({nullable: true})
    public projects_forum_category: string;
    
    @Field({nullable: true})
    public talks_count: number;
    
    @Field({nullable: true})
    public talks_forum_category: string;
    
    @Field({nullable: true})
    public show_results: boolean;
};