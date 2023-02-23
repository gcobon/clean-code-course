import { HttpService } from './02-open-close-c';

export class TodoService {
  constructor(private http: HttpService) {}

  async getTodoItems() {
    const { data } = await this.http.get(
      'https://jsonplaceholder.typicode.com/todos/'
    );
    return data;
  }
}

export class PostService {
  constructor(private http: HttpService) {}

  async getPosts() {
    const { data } = await this.http.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return data;
  }
}

export class PhotosService {
  constructor(private http: HttpService) {}

  async getPhotos() {
    const { data } = await this.http.get(
      'https://jsonplaceholder.typicode.com/photos'
    );
    return data;
  }
}
