import React from "react";
import Player from "../../components/Player/Player";
import Description from "../../components/Description/Description";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";

const VideoPlayer = () => {
  return (
    <section class="pt-6 pb-20">
      <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div class="grid grid-cols-3 gap-2 lg:gap-8">
          <div class="col-span-full w-full space-y-8 lg:col-span-2">
            {/* <!-- video player --> */}
            <Player></Player>

            {/* <!-- video description --> */}
            <Description></Description>
          </div>

          {/* <!-- related videos --> */}
          <RelatedVideos></RelatedVideos>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
