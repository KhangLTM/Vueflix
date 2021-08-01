import axios from "axios";

export const Trailer = titleTrailer => {
  let youtubeAPI ='AIzaSyDSqiFREUxx2-C4zJ5YzMq9mQYlleL4Aog'
  return axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtubeAPI}&q=${titleTrailer}&type=video&maxResults=1`
  });
};