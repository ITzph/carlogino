import * as fromProfile from './profile.actions';
import { Profile } from '../models/profile';

describe('loadProfiles', () => {
  it('should return an action', () => {
    expect(fromProfile.setProfile({ profile: Profile.defaultInstance() }).type).toBe(
      fromProfile.ProfileAction.SetProfile,
    );
  });
});
