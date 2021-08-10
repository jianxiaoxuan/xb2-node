import exp from 'constants';
import { TokenPayload } from '../src/auth/auath.interface';

declare global {
  namespace Express {
    export interface Request {
      user: TokenPayload;
      fileMetaData: { width?: number; height?: number; metadata?: {} };
      sort: string;
    }
  }
}