import exp from 'constants';
import { TokenPayload } from '../src/auth/auath.interface';
import { GetPostsOptionsFilter } from '../src/post/post.service';

declare global {
  namespace Express {
    export interface Request {
      user: TokenPayload;
      fileMetaData: { width?: number; height?: number; metadata?: {} };
      sort: string;
      filter: GetPostsOptionsFilter;
    }
  }
}