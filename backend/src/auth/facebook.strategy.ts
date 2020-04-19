import { Injectable } from '@nestjs/common';
import * as FacebookTokenStrategy from 'passport-facebook-token';
import { use } from 'passport';
import { access } from 'fs';

@Injectable()
export class FacebookStrategy {
  constructor() {
    this.init();
  }
  init() {
    use(
      new FacebookTokenStrategy(
        {
          clientID: "811660742213874",
          clientSecret: "4804b0c52901870afc1b929d42878837",
        },
        async (
          accessToken: string,
          refreshToken: string,
          profile: any,
          done: any,
        ) => {
          const user = {
            accessToken, refreshToken ,profile
          };
          return done(null, user);
        },
      ),
    );
  }
}
