  
import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

interface translateResponse {
  data: {
    images: {
      original: {
        url: string
      }
    }
  }
}

export default class GiphyClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://api.giphy.com/v1/gifs', context, options)
  }

  public async translate (term: string): Promise<translateResponse> {
    return this.http.get('/translate', {
      params: {
        'api_key': 'dp2scGnUcDee5yLRI1qJMTRTAAJey9Tl',
        s: term.toString()
      }
    });
  }
}