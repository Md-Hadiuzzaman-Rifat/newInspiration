import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTags } from "../../features/tags/TagSlice";
import Tag from "../Tag/Tag";

const Tags = () => {
  const selector = useSelector((state) => state.tags);
  const { isLoading, isError, tags } = selector;
  const dispatch = useDispatch();
  console.log(selector);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  let content = "";

  if (!isLoading) {
    content = " Loading...";
  }

  if (!isLoading && tags.length > 0) {
    content = (
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          {tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
      </section>
    );
  }

  if (!isLoading && isError) {
    content = <div className="col-span-12">some error happened</div>;
  }
  return content;
};

export default Tags;
