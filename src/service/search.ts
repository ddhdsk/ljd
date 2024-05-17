import http from "./http";
import to from "await-to-js";

// 获取默认搜索关键词
export const getDefaultKey = async () => {
  const [err, res] = await to(http.post<Res.getDefaultKey>("/search/default"));
  if (err) throw new Error("请求失败");
  return res.data.data.realkeyword;
};
/*
export const getDefaultKey = () =>
  http.post<Res.getDefaultKey>("/search/default");
*/

// 搜索指定关键字
interface SearchResultParams {
  keywords: string;
  limit?: number;
  offset?: number;
  type?: string;
}
interface getPlaylistTrackAll {
  id: number;
  limit?: number;
  offset?: number;
}
/*
export const searchResult = (params: SearchResultParams) =>
  http.get<Res.searchResult>("/cloudsearch", { params });
*/
export const searchResult = async (params: SearchResultParams) => {
  const [err, res] = await to(
    http.get<Res.searchResult>("/cloudsearch", { params })
  );
  if (err) throw new Error("请求失败");
  return res.data.result.songs;
};

// 所有榜单
export const getToplist = async () => {
  const [err, res] = await to(http.get<Res.getToplist>("/toplist"));
  if (err) throw new Error("请求失败");
  return res.data.list;
};

// 所有榜单内容摘要
export const getToplistDetail = async () => {
  const [err, res] = await to(
    http.get<Res.getToplistDetail>("/toplist/detail")
  );
  if (err) throw new Error("请求失败");
  return res.data.list;
};

// 获取歌单所有歌曲
export const getPlaylistTrackAll = async (params: getPlaylistTrackAll) => {
  const [err, res] = await to(
    http.get<Res.getPlaylistTrackAll>("/playlist/track/all", { params })
  );
  if (err) throw new Error("请求失败");
  return res.data.songs;
};

// 歌单详情
interface SongListDetailsParams {
  id: number;
  s?: number;
}

export const getSongListDetails = async (params: SongListDetailsParams) => {
  const [err, res] = await to(
    http.get<Res.RootObject>("/playlist/detail", { params })
  );
  if (err) throw new Error("请求失败");
  return res.data.playlist;
};
