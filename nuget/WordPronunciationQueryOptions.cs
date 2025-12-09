using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WordPronunciation
{
    /// <summary>
    /// Query options for the Word Pronunciation API
    /// </summary>
    public class WordPronunciationQueryOptions
    {
        /// <summary>
        /// The word to get the pronunciation of
        /// Example: hello
        /// </summary>
        [JsonProperty("word")]
        public string Word { get; set; }
    }
}
