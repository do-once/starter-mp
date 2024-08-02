/** 接口请求 */

import { BizCodeEnum, PAGE_PATH_LOGIN, ResStatusCodeEnum } from '../constants'
import { getStorageSync, removeStorageSync } from './storage'
import { showToast } from './toast'

type CreateOptions = {
  baseURL?: string
}

interface IPromiseWithRequestTask<D> extends Promise<D> {
  requestTask?: WechatMiniprogram.RequestTask
}

const isStartsWithHttp = (url: string) =>
  /** http/https */ url.indexOf('http') === 0 ||
  /** 相对协议 */ url.indexOf('//') === 0

const toLoginPage = () => {
  removeStorageSync('token')

  wx.redirectTo({ url: PAGE_PATH_LOGIN })
}

export class Request {
  constructor(private readonly _baseURL: string) {}

  static create(opts?: CreateOptions) {
    return new Request(opts?.baseURL ?? '')
  }

  private _fetch<D>(
    requestOption: Omit<WechatMiniprogram.RequestOption, 'success' | 'fail'>
  ) {
    let requestTask: WechatMiniprogram.RequestTask | undefined

    let p = new Promise((resolve, reject) => {
      requestTask = wx.request<MyApp.IRes<D>>({
        ...requestOption,
        url: isStartsWithHttp(requestOption.url)
          ? requestOption.url
          : `${this._baseURL}${requestOption.url}`,
        header: {
          ...requestOption.header,
          token: getStorageSync('token'),
        },
        success: res => {
          /** 处理http状态码 */
          switch (res.statusCode) {
            case ResStatusCodeEnum.OK:
              /** 业务结构体 */
              const bizResp = res.data
              /** 业务正常返回 */
              if (bizResp.code === BizCodeEnum.OK) {
                resolve(bizResp.data)
              } else {
                /** 非OK，展示接口返回的错误信息 */
                showToast(bizResp.message ?? `请求异常：${bizResp.code}`)
                reject(bizResp)
              }
              break

            case ResStatusCodeEnum.UNAUTHORIZED:
              /** 跳登录页 */
              toLoginPage()
              break

            default:
              /** 其余http状态码 */
              console.log(`wx.request尚未处理的http状态码：${res.statusCode}`)
              reject(res)
              break
          }
        },
        fail: err => {
          /** 请求内部错误 */
          showToast(`${err.errno}：${err.errMsg}`)
          reject(err)
        },
      })
      if (!requestTask) reject()
    }) as IPromiseWithRequestTask<D | undefined>

    p.requestTask = requestTask

    return p
  }

  get<D>(requestOption: Omit<WechatMiniprogram.RequestOption, 'method'>) {
    return this._fetch<D>({ ...requestOption, method: 'GET' })
  }

  post<D>(requestOption: Omit<WechatMiniprogram.RequestOption, 'method'>) {
    return this._fetch<D>({ ...requestOption, method: 'POST' })
  }

  put<D>(requestOption: Omit<WechatMiniprogram.RequestOption, 'method'>) {
    return this._fetch<D>({ ...requestOption, method: 'PUT' })
  }

  delete<D>(requestOption: Omit<WechatMiniprogram.RequestOption, 'method'>) {
    return this._fetch<D>({ ...requestOption, method: 'DELETE' })
  }
}
