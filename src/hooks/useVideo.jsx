import { SettingsInputSvideoSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const useVideo = () => {
  const [videoDetail, setVideoDetail] = useState({});
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0]));

      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => 
    //   console.log(data,"data")
      setVideos(data.items)
    )
  }, [id]);
  return { videoDetail, videos };
};

export default useVideo;
