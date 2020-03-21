import { Resolver, Query, Ctx, Authorized } from 'type-graphql';
import { User } from '../../entity/user';
import { Context } from '../../lib/resolver/context';

/**
 * Gets the user's profile
 * Can currently only get accessed
 * by the logged in user
 */
@Resolver()
export class ProfileResolver {
  @Query(returns => User, { nullable: true })
  async profile(@Ctx() { req }: Context): Promise<User | null> {
    if (!req || !req.auth) return null;

    const { userId } = req.auth;

    if (userId) {
      const user = await User.findOne(userId);
      return user || null;
    }

    return null;
  }
}
