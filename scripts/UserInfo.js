import {name} from './constants.js';
import {job} from './constants.js';

export class UserInfo {
  constructor(userInfo) {
    this._userName = userInfo.user_name;
    this._userAboutSelf = userInfo.about_self;
    name.textContent=this._userName;
    job.textContent=this._userAboutSelf;
  }

  getUserInfo() {
    return {user_name: this._userName, about_self: this._userAboutSelf};
  }

  setUserInfo(userInfo) {
    this._userName = userInfo.user_name;
    this._userAboutSelf = userInfo.about_self;
    name.textContent=this._userName;
    job.textContent=this._userAboutSelf;
  }
}
