import * as fromProfile from './profile.actions';

describe('loadProfiles', () => {
  it('should return an action', () => {
    expect(fromProfile.updateProfileName({ name: '' }).type).toBe(
      fromProfile.ProfileAction.UpdateProfileName,
    );
  });
});
