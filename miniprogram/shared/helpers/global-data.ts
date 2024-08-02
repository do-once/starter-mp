/** 全局data维护 */

import type { Emitter } from '../utils/emitter'

type AppInstance = WechatMiniprogram.App.Instance<MyApp.IAppOption>

/**
 * 保存基础信息
 * @param instance app实例
 */
export function saveBaseInfo(instance: AppInstance) {
  /** 设备信息 */
  instance.globalData.deviceInfo = wx.getDeviceInfo()
  instance.globalData.windowInfo = wx.getWindowInfo()
}

/**
 * 挂载emitter实例
 * @param instance app实例
 * @param emitter emitter实例
 */
export function mountEmitter(
  instance: AppInstance,
  emitter: Emitter<MyApp.EmitterEventTypes>
) {
  instance.globalData.emitter = emitter
}
