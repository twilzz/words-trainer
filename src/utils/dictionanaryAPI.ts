export interface DictionaryResponse {
  word: string
  phonetic: string
  phonetics: {
    text: string
    audio?: string
    sourceUrl: string
    license: { name: string; url: string }
  }[]
  origin: string
  meanings: [
    {
      partOfSpeech: string
      definitions: {
        definition: string
        example: string
        synonyms: string[]
        antonyms: string[]
      }[]
    },
    {
      partOfSpeech: string
      definitions: {
        definition: string
        example: string
        synonyms: string[]
        antonyms: string[]
      }[]
    },
    {
      partOfSpeech: string
      definitions: {
        definition: string
        example: string
        synonyms: string[]
        antonyms: string[]
      }[]
    }
  ]
}

export class Dictionary {
  private baseUrl: string
  private headers: Record<string, string>

  constructor(baseUrl: string, headers?: Record<string, string>) {
    this.baseUrl = baseUrl
    this.headers = {
      'Content-Type': 'application/json',
      ...headers,
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    const response = await fetch(url, {
      ...options,
      headers: this.headers,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json() as Promise<T>
  }

  public async get(endpoint: string) {
    const data: DictionaryResponse[] = await this.request(endpoint, {
      method: 'GET',
    })
    return await data[0].phonetics.find((variant) => !!variant.audio)?.audio
  }
}
