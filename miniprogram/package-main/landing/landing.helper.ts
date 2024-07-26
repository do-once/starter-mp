import { PAGE_PATH_HOME, PAGE_PATH_LOGIN } from "@/shared/constants"
import { getStorage } from "@/shared/utils/storage"

export async function redirect(query: MyApp.IQuery) {
    const token = await getStorage('token')
    const url = token ? getRedirectToUrl(query) : PAGE_PATH_LOGIN
    console.log(`Landing page redirect to ${url}`)

    wx.redirectTo({ url })
}

export function getRedirectToUrl(query: MyApp.IQuery) {
    return query.redirectTo ? decodeURIComponent(query.redirectTo) : PAGE_PATH_HOME
}