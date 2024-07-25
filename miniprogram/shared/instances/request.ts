/** Request实例 */

import { getEnv } from "../env/getter";
import { Request } from "../utils/request";

export const request = Request.create({ baseURL: getEnv().API_BASE_URL ?? '' })