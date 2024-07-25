/** 扩展全局声明 */
declare global {
    namespace MyApp{
        interface IAppOption {
            globalData: {
                module: {
                    home?: {},
                    login?: {},
                    sub2?: {}
                }
                userInfo?: WechatMiniprogram.UserInfo,
            }
        }
    }
}

/** 避免ts(2669)错误 */
export { }