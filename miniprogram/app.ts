/** 入口 */
import { bindEvents } from "./shared/helpers/event";
import { recoverStateAsync } from "./shared/helpers/recover-state";
import { emitter } from "./shared/instances/emitter";

// app.ts
App<MyApp.IAppOption>({
    globalData: {
        module: {}
    },
    onLaunch() {

        /** onLaunch中代码建议异步执行，避免影响首屏渲染 */
        setTimeout(async () => {
            /** 挂载emitter */
            this.globalData.emitter = emitter

            /** 存储设备基础信息 */
            this.globalData.deviceInfo = wx.getDeviceInfo()
            this.globalData.windowInfo = wx.getWindowInfo()

            /** 绑定全局事件 */
            bindEvents(this, emitter)

            /** 异步从storage中恢复状态 */
            recoverStateAsync(this)

            /** app设置完毕 */
            emitter.emit('APP_SETUP_COMPLETE')
        }, 10);

    },
})