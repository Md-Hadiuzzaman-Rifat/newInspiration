import React, { useEffect } from 'react';
import Video from '../Video/Video';
import { useSelector , useDispatch } from 'react-redux';
import { fetchVideos } from '../../features/Videos/VideosSlice';

const Videos = () => {
    const {isError, isLoading, videos}= useSelector(state=>state.videos)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(fetchVideos())
    },[dispatch])

    let content=""

    if(!isLoading){
        content=" Loading..."
    }
    
    if(!isLoading && videos.length >0){
        content=(
            <section className="pt-12">
            <div
                className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
            >
                {
                    videos.map((video)=><Video key={video.id} video={video}></Video>)
                }
            </div>
        </section>
        )
    }

    if(!isLoading && isError){
        content=(
                <div className="col-span-12">some error happened</div> 
        )
    }
    return content
};

export default Videos;