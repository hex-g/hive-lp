import { request } from '../../config/http-request'

const REQUEST_ADDRESS = 'http://10.3.0.70:8762'

export const getAccessToken = async (username, password) => {
    return await request({
      url: `${REQUEST_ADDRESS}/caronte/auth`,
      method: 'post',
      data: {
        username,
        password,
      },
    })
  }
