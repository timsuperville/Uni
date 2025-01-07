const axios = require("axios");
const apiKey = process.env.CCLI_API_KEY;

const baseUrl = "https://api.ccli.com/ss/v2";

const CreateRequestOptions = (m, h, b) => {
   return {
      method: m,
      headers: h,
      body: b,
   };
};

const getSongDetails = async (songId, data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/songs/${songId}`, requestOptions);
   return response.json();
}

const getSongLyrics = async (songId, data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/songs/${songId}/lyrics`, requestOptions);
   return response.json();
}

const getSongLyricsPreview = async (songId, data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/songs/${songId}/lyrics/preview`, requestOptions);
   return response.json();
}

const getSongChordSheetPdf = async (songId, data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/songs/${songId}/chordsheet/pdf`, requestOptions);
   return response.json();
}

const getSongChordPro = async (songId, data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/songs/${songId}/chordsheet/chordpro`, requestOptions);
   return response.json();
}

const getSongSearchResults = async (query, data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/songs/search?q=${query}`, requestOptions);
   return response.json();
}

const getVersion = async (data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/version`, requestOptions);
   return response.json();
}

const getRights = async (data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/rights`, requestOptions);
   return response.json();
}

const getLists = async (data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/lists`, requestOptions);
   return response.json();
}

const getPopularSongsList = async (data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/lists/popular`, requestOptions);
   return response.json();
}

const getTop100SongsList = async (data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/lists/top100`, requestOptions);
   return response.json();
}

getReportingVersion = async (data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/reporting/version`, requestOptions);
   return response.json();
}

reportSongUsage = async (data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/reporting/songusage`, requestOptions);
   return response.json();
}

reportRecordingUsage = async (data) => {
   const { method, body, orgSubsKey } = data;
   const myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${apiKey}`);
   myHeaders.append("Ocp-Apim-Subscription-Key", `${orgSubsKey}`);

   const requestOptions = CreateRequestOptions(method, myHeaders, body);

  const response = await fetch(`${baseUrl}/reporting/recordingusage`, requestOptions);
   return response.json();
}

module.exports = {
   getSongDetails,
   getSongLyrics,
   getSongLyricsPreview,
   getSongChordSheetPdf,
   getSongChordPro,
   getSongSearchResults,
   getVersion,
   getRights,
   getLists,
   getPopularSongsList,
   getTop100SongsList,
   getReportingVersion,
   reportSongUsage,
   reportRecordingUsage,
};