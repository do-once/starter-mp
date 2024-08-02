/** 入口 */
import { bindEvents } from './shared/helpers/event'
import { mountEmitter, saveBaseInfo } from './shared/helpers/global-data'
import { recoverStateAsync } from './shared/helpers/recover'
import { emitter } from './shared/instances/emitter'

// app.ts
App<MyApp.IAppOption>({
  globalData: {
    module: {},
  },
  onLaunch() {
    /** onLaunch中代码建议异步执行，避免影响首屏渲染 */
    setTimeout(async () => {
      /** 挂载emitter */
      mountEmitter(this, emitter)

      /** 存储设备基础信息 */
      saveBaseInfo(this)

      /** 绑定全局事件 */
      bindEvents(this, emitter)

      /** 异步从storage中恢复状态 */
      recoverStateAsync(this)

      /** app设置完毕 */
      emitter.emit('APP_SETUP_COMPLETE')
    }, 10)
  },
})
