import { request } from "@/shared/instances/request";

type TestRes = {
    name: string
    age: number
}

export function getProfile() {
    // mock
    return Promise.resolve({
        name: 'foo',
        age: 18
    })

    // 实际调用，参考这个
    return request.get<TestRes>({ url: '/some/test/api/path/to/profile' })
}
