import * as request from "~/Utils/request";

export const searchService = async (q,type='less') => {
    try {
      const res = await request.get("users/search", {
        params: {
          q,
          type
        },
      });
    //   setSearchResult(res.data);
    //   setShowLoading(false);
    return res.data
    } catch (error) {
    //   setShowLoading(false);
    console.log(error)
    }
  };

