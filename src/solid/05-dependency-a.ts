import { PostService } from './05-dependency-b';
import { ApiWebService, JsonDataBaseService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {


    // const provider = new LocalDataBaseService();
    // const provider = new JsonDataBaseService();
    const provider = new ApiWebService();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();