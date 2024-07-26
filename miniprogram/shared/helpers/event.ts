/** 全局事件 */

import { Emitter } from "../utils/emitter"
import { setStorage } from "../utils/storage"

export function bindEvents(instance: WechatMiniprogram.App.Instance<MyApp.IAppOption>, emitter: Emitter<MyApp.EmitterEventTypes>) {
    /** 键盘高度更新事件 */
    emitter.on('UPDATE_KEYBOARD_HEIGHT', (h) => {
        instance.globalData.keyboardHeight = h
        setStorage('keyboardHeight', h)
    })
}