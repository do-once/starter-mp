import { Emitter } from "@/shared/utils/emitter"

/** 扩展全局声明 */
declare global {
    namespace MyApp {

        /** App */
        interface IAppOption {
            globalData: {
                /** 按模块、页面划分 */
                module: {
                    home?: {},
                    login?: {},
                    sub2?: {}
                }
                /** 用户信息 */
                userInfo?: WechatMiniprogram.UserInfo
                /** 设备信息 */
                deviceInfo?: WechatMiniprogram.DeviceInfo
                /** 窗口信息 */
                windowInfo?: WechatMiniprogram.WindowInfo
                /** 全局事件管理器 */
                emitter?: Emitter<EmitterEventTypes>
            }
        }

        /** storage key&val map */
        interface IStorageKeyValMap {
            token: string
        }

        /** onLoad携带的query参数 */
        interface IQuery extends Record<string, string> { }

        /** 通用fn定义 */
        type fn = (...args: any[]) => any

        /** 事件类型枚举 */
        type EmitterEventTypes = 'APP_SETUP_COMPLETE'

        interface IEnv {
            API_BASE_URL: `${'http' | 'https' | '//'}:${string}`
        }

        /** request 接口返回体 */
        interface IRes<D = any> {
            code?: string | number
            data?: D
            message?: string
        }
    }
}

/** 避免ts(2669)「全局范围的扩大仅可直接嵌套在外部模块中或环境模块声明中」错误 */
export { }