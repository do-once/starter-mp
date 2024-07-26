import { getProfile } from "./home.helper"

// package-sub/pages/home/home.ts
Page({
    options: {
        /**
         * 纯数据字段
         * 不被用在wxml上，只是添加到this.data上
         * 可以用来定义一些渲染间接相关的数据
         * 其不参与任何界面渲染过程，有助于提升页面更新性能
         */
        pureDataPattern: /^_/
    },

    /**
     * 页面的初始数据，应只包含渲染相关的数据
     * 渲染间接相关的数据，应该声明为纯数据字段（用_开头）
     * 渲染无关的数据可以直接自定义在this上，若此数据比较大，应该在onLoad中绑定
     */
    data: {
        name: '',
        age: undefined as unknown as number,
        _flag: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },


    async onTap() {
        const profile = await getProfile()

        if (!profile) return

        this.setData({
            name: `${profile.name}_${this.data._flag}`,
            age: profile.age
        })
    },

    onRandomFlag() {
        this.data._flag = !!(Math.random() > 0.5)
    }
})