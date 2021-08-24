export const initialState = {
    mainPosts: [
      {
        id: 1,
        User: {
          id: 1,
          nickname: "잉어",
        },
        content: "첫 번째 게시글 #해시태그 #익스프레스",
        Images: [
          {
            src: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/22QT/image/p-RX98d_34y9ElK_Qfwz8OfHhxM.jpg",
          },
          {
            src: "https://post-phinf.pstatic.net/MjAxODAyMDJfMjUz/MDAxNTE3NTYwMjc5Njg4.BDc_krXHzkEoR4TQxJ5Zgjj4TA4W4wi8QNCWTMAZ-sEg.syYdGInF8h9UkpPfdeIbuN823GwLfyrskxG7TPiq5k0g.JPEG/26157263_177363809532061_5905326087763656704_n.jpg?type=w1200",
          },
          {
            src: "https://pds.joins.com/news/component/htmlphoto_mmdata/201704/15/151bc895-2347-47af-89b5-04205422efa1.jpg",
          },
        ],
        Comments: [
          {
            User: {
              nickname: "siba",
            },
            content: "도지 가즈아",
          },
          {
            User: {
              nickname: "dozi",
            },
            content: "화성 갈끄니까",
          },
        ],
      },
    ],
    imagePaths: [],
    postAdded: false,
  };
  
  const dummyPost = {
    id: 2,
    content: "더미데이터",
    User: {
      id: 1,
      nickname: "잉어",
    },
    Images: [],
    Comments: [],
  };
  
  const ADD_POST = "ADD_POST";
  
  export const addPost = {
    type: ADD_POST,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST:
        return {
          ...state,
          mainPosts: [dummyPost, ...state.mainPosts],
          postAdded: true,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  