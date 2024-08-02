/** 从storage中恢复状态 */

import { getStorage } from "../utils/storage"

async function recoverKeyboardHeight(instance: WechatMiniprogram.App.Instance<MyApp.IAppOption>) {
    const keyboardH = await getStorage('keyboardHeight')
    if (keyboardH) instance.globalData.keyboardHeight = keyboardH
}

export async function recoverStateAsync(
    instance: WechatMiniprogram.App.Instance<MyApp.IAppOption>
) {
    Promise.allSettled([recoverKeyboardHeight(instance)])
}