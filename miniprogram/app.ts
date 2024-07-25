/** 入口 */
import { emitter } from "./shared/instances/emitter";

// app.ts
App<MyApp.IAppOption>({
    globalData: {
        module: {}
    },
    onLaunch() {

        /** onLaunch中代码建议异步执行，避免影响首屏渲染 */
        setTimeout(() => {
            /** 存储基础设备信息 */
            this.globalData.deviceInfo = wx.getDeviceInfo()
            this.globalData.windowInfo = wx.getWindowInfo()

            /** 挂载emitter */
            this.globalData.emitter = emitter

            /** app设置完毕 */
            emitter.emit('APP_SETUP_COMPLETE')
        }, 10);

    },
})