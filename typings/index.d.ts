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
            }
        }

        /** storage key&val map */
        interface IStorageKeyValMap {
            token: string
        }

        interface IQuery extends Record<string, string> { }
    }
}

/** 避免ts(2669)「全局范围的扩大仅可直接嵌套在外部模块中或环境模块声明中」错误 */
export { }