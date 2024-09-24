export enum FetchMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const createURL = ({
  domain,
  endpoint,
}: {
  domain: string
  endpoint: string
}) => {
  domain = domain.replace(/\/+$/, '')
  endpoint = endpoint.replace(/^\/+|\/+$/g, '')

  if (!domain) {
    return endpoint
  }

  return domain + '/' + endpoint
}

export const getUrlWithQueryParameters = (
  endpoint: string | null,
  data?: Record<string, any>,
) => {
  const queryParameters = new URLSearchParams(data).toString()

  return `${endpoint}${!!queryParameters ? '&' + queryParameters : ''}`
}

export const fetchTapestry = async <ResponseType = any, InputType = any>({
  method = FetchMethod.GET,
  endpoint,
  data,
}: {
  method?: FetchMethod
  endpoint: string
  data?: InputType
}): Promise<ResponseType> => {
  endpoint = `${endpoint}?apiKey=${process.env.TAPESTRY_API_KEY}`

  if (method === FetchMethod.GET && data) {
    endpoint = getUrlWithQueryParameters(endpoint, data)
  }

  const url = createURL({
    domain: process.env.TAPESTRY_URL!,
    endpoint,
  })

  const body =
    method === FetchMethod.POST || method === FetchMethod.PUT
      ? JSON.stringify(data)
      : undefined

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })

  if (!response.ok) {
    // error handling
    const text = await response.text()
    console.error(`Error fetching ${endpoint}`, text)

    try {
      const data = JSON.parse(text)
      throw data
    } catch {
      throw new Error(text)
    }
  } else {
    try {
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
      return null as ResponseType
    }
  }
}
