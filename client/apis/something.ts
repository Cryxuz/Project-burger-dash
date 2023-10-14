import request from 'superagent'

const rootUrl = '/api/v1'

export function getSomething(): Promise<string[]> {
  return request.get(rootUrl + '/booking').then((res) => {
    return res.body.something
  })
}
