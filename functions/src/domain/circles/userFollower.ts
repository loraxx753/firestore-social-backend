import { BaseDomain } from '../common'

export class UserTie extends BaseDomain {

  /**
   * User identifier
   *
   * @type {string}
   * @memberof UserFollower
   */
  public userId?: string

    /**
     * Circle creation date time
     *
     * @type {Date}
     * @memberof Circle
     */
  public creationDate?: number

    /**
     * User full name
     *
     * @type {string}
     * @memberof UserFollower
     */
  public fullName: string

    /**
     * Avatar URL address
     *
     * @type {string}
     * @memberof UserFollower
     */
  public avatar: string

    /**
     * If following user approved {true} or not {false}
     *
     * @type {Boolean}
     * @memberof UserFollower
     */
  public approved?: Boolean

}
