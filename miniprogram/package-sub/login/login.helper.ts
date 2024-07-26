import { setStorage } from "@/shared/utils/storage"

export function login() {
    return new Promise((resolve) => {
        wx.login({
            success(res) {
                if (res.code) {
                    console.log('[app] login res code：', res.code)
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                    const token = 'mock_token'
                    setStorage('token', token)

                    resolve(true)
                } else {
                    wx.showToast({
                        title: "登录失败",
                        icon: "error",
                        duration: 2000
                    })
                    resolve(false)
                }
            }
        })
    })

}