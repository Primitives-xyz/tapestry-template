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

  return `${endpoint}${!!queryParameters ? '?' + queryParameters : ''}`
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
  if (method === FetchMethod.GET && data) {
    endpoint = getUrlWithQueryParameters(endpoint, data)
  }

  endpoint = getUrlWithQueryParameters(endpoint, {
    apiKey: process.env.TAPESTRY_API_KEY,
  })

  const response = await fetch(
    createURL({
      domain: process.env.TAPESTRY_URL!,
      endpoint,
    }),
    {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body:
        method === FetchMethod.POST || method === FetchMethod.PUT
          ? JSON.stringify(data)
          : undefined,
    },
  )

  if (!response.ok) {
    // error handling
    const data = await response.json()
    console.error(`Error fetching ${endpoint}`, data)

    throw data
  } else {
    try {
      const data = await response.json()

      return data
    } catch (error) {
      console.log(error)

      return null as ResponseType
    }
  }
}
