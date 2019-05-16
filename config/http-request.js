import axios from 'axios'

const HTTP_STATUS = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
}

export const request = ({
  url, ...options
}) => axios({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': options.auth
  },
  ...options,
  url: `${url}`,
})

const configInterceptorResponse = () => {
  axios.interceptors.response.use(
    response => response
    , error => {
      console.log(error)
      return Promise.reject(error)
    },
  )
}

const configInterceptorRequest = () => {
  axios.interceptors.request.use(config => {
    //config.headers['Request-Id'] = uuid('request-id', uuid.DNS)
    return config
  })
  return axios
}

export const requestConfig = () => {
  configInterceptorRequest()
  configInterceptorResponse()
}