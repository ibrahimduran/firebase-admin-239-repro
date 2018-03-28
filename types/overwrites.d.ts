/// <reference types="express" />
/// <reference types="firebase-admin" />

declare module Express {
  export interface Request {
    foo: string;
    user?: admin.auth.DecodedIdToken;
  }
}
