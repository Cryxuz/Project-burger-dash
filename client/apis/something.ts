import request from 'superagent'

const rootUrl = '/api/v1'

export function getSomething(): Promise<string[]> {
  return request.get(rootUrl + '/something').then((res) => {
    return res.body.something
  })
}
