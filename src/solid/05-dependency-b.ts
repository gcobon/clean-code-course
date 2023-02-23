import { LocalDataBaseService, JsonDataBaseService } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private jsonProvaider: JsonDataBaseService) {}

    async getPosts() {
        // const jsonDB = new JsonDataBaseService();
        this.posts = await this.jsonProvaider.getPost();

        return this.posts;
    }
}