import { request } from '../../config/http-request'

export const saveUser = async (userInfo) => {
    return await request({
      url: 'https://api.myjson.com/bins/nligy',
      method: 'put',
      data: {
        ...userInfo
      }
    })
  }