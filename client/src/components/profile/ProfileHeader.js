import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div class="row">
        <div class="col-md-12">
          <div class="card card-body bg-info text-white mb-3">
            <div class="row">
              <div class="col-4 col-md-3 m-auto">
                <img class="rounded-circle" src={profile.user.avatar} alt="" />
              </div>
            </div>
            <div class="text-center">
              <h1 class="display-4 text-center">{profile.user.name}</h1>
              <p class="lead text-center">
                {profile.status}{" "}
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}
              </p>
              {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
              <p>
                {isEmpty(profile.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.website}
                    target="rel=noopener"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.twitter}
                    target="rel=noopener"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.facebook}
                    target="rel=noopener"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.linkedin) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.linkedin}
                    target="rel=noopener"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.youtube}
                    target="rel=noopener"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.instagram}
                    target="rel=noopener"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.pinterest) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.pinterest}
                    target="rel=noopener"
                  >
                    <i className="fab fa-pinterest fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.snapchat) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.snapchat}
                    target="rel=noopener"
                  >
                    <i className="fab fa-snapchat fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
