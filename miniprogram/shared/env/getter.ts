/** 根据envVersion获取环境变量配置 */

import * as develop from './env.develop'
import * as release from './env.release'
import * as trial from './env.trial'

type EnvVersion = WechatMiniprogram.AccountInfo['miniProgram']['envVersion']

type EnvMap = Record<EnvVersion, MyApp.IEnv>

interface IGetEnv {
    (): MyApp.IEnv
    _envVersion?: EnvVersion
}

export const getEnv: IGetEnv = () => {
    const envVersion = getEnv._envVersion || (/** 缓存envVersion */getEnv._envVersion = wx.getAccountInfoSync().miniProgram.envVersion)

    return ({ develop, release, trial } as EnvMap)[envVersion]
}