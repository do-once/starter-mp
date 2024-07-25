/** toast */

export function showToast(title: string, icon: WechatMiniprogram.ShowToastOption['icon'] = 'none') {
    wx.showToast({
        title,
        icon,
        duration: 2000
    })
}