/** 公用常量 */

/** 项目名 */
export const PROJECT_NAME = 'STARTER_MP'

/** storage key前缀 */
export const STORAGE_KEY_PREFIX = `__${PROJECT_NAME}__`

/** 首页path */
export const PAGE_PATH_HOME = '/package-sub/home/home'

/** login页path */
export const PAGE_PATH_LOGIN = '/package-sub/login/login'

/** http状态码 */
export enum ResStatusCodeEnum {
    /** 正常返回 */
    OK = 200,
    /** 无授权（token过期） */
    UNAUTHORIZED = 401
}

/** 业务状态码 */
export enum BizCodeEnum {
    /** 正常返回 */
    OK = '000000'
}