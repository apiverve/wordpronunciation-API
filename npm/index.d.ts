declare module '@apiverve/wordpronunciation' {
  export interface wordpronunciationOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface wordpronunciationResponse {
    status: string;
    error: string | null;
    data: WordPronunciationData;
    code?: number;
  }


  interface WordPronunciationData {
      word:           string;
      pronounciation: string;
  }

  export default class wordpronunciationWrapper {
    constructor(options: wordpronunciationOptions);

    execute(callback: (error: any, data: wordpronunciationResponse | null) => void): Promise<wordpronunciationResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordpronunciationResponse | null) => void): Promise<wordpronunciationResponse>;
    execute(query?: Record<string, any>): Promise<wordpronunciationResponse>;
  }
}
