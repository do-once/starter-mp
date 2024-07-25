/** storage */

import { STORAGE_KEY_PREFIX } from '../constants'

export async function getStorage<K extends keyof MyApp.IStorageKeyValMap>(k: K) {

    try {
        const res = await wx.getStorage<MyApp.IStorageKeyValMap[K]>({ key: `${STORAGE_KEY_PREFIX}${k}` })
        return res.data
    } catch (error) {
        return
    }
}

export function setStorage<K extends keyof MyApp.IStorageKeyValMap, V extends MyApp.IStorageKeyValMap[K]>(k: K, v: V) {
    wx.setStorage({ key: `${STORAGE_KEY_PREFIX}${k}`, data: v })
}