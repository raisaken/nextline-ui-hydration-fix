////API => baseurl/user
const profile = [
      {
        "id": "QIODF7D5ROCOVV9X",
        "photoURL": "",
        "name": "John Smith",
        "username": "@johnSmithOfficial",
        "position": "Song Writer/ Producer",
        //FIXME: Select between isprivate:false or visibility:public/private for visibility
        "visibility": "public",
        "isFollowed": false,
        "followsYou": false,
        //TODO: Finalize the count format
        // "postCount": 20,
        // "followersCount": "20M",
        // "followingCount": "20M",
        "followerCount": [
          {
            "title": "Posts",
            "count": "20"
          },
          {
            "title": "Following",
            "count": "2.5K"
          },
          {
            "title": "Followers",
            "count": "1K"
          }
        ],
        "isVerified": true,
        "bio": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
        "socialMedia": {
          "youtubeURL": "",
          "facebookURL": "",
          "instaURL": "",
          "twitterURL": "",
          "linkedInURL": ""
        },
        // TODO: Finalize how the achievement / badges can be earned
        "achievementBadges": "",
        "tags": [
          {
            "id": "QF1ZHJIFPYY1IAX5",
            "tag": "hydraulic"
          },
          {
            "id": "L8UJBB5YPBE86HCE",
            "tag": "col"
          },
          {
            "id": "SDNLC8OGDRQV9I57",
            "tag": "fitted"
          },
          {
            "id": "XY15V9G24AYT1OXD",
            "tag": "revision"
          },
          {
            "id": "Q9NNQM7ALJP0CBNR",
            "tag": "powers"
          },
          {
            "id": "VBD4VX4L9UL9PG54",
            "tag": "military"
          },
          {
            "id": "NVT5IBL6IDY43FX6",
            "tag": "grateful"
          }
        ]
      }
    ]

export default profile