import { request } from '../../config/http-request'

const IP_PERTENCENTE_AO_SENHOR_HIRUMITSU = 'http://10.3.0.70:8762'

export const getAccessToken = async (username, password) => {
    return await request({
      url: `${IP_PERTENCENTE_AO_SENHOR_HIRUMITSU}/caronte/auth`,
      method: 'post',
      data: {
        username,
        password,
      },
    })
  }
