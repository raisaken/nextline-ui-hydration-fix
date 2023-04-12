var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react4 = require("@remix-run/react");

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  Head: () => Head,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react3 = require("@remix-run/react"), import_remix_island = require("remix-island");

// node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify_default = "/build/_assets/ReactToastify-6XXLY7I5.css";

// app/styles/global.css
var global_default = "/build/_assets/global-OYKAAHHD.css";

// app/src/config/local-storage.tsx
var getFromStorage = (key) => {
  if (typeof window < "u") {
    let user = window.localStorage.getItem(key);
    return user !== null ? JSON.parse(user) : "";
  }
}, removeFromStorage = (key) => {
  if (typeof window < "u")
    return window.localStorage.removeItem(key);
};

// app/api/endpoint.tsx
var urls = {
  auth: {
    login: "/login",
    me: "/users/me"
  },
  user: {
    me: "/users/me",
    user_info: "/userinfo/:username",
    id: "/user/:id"
  },
  content: {
    get_content: "/leaf_content",
    filtered_content: "/leaf_contentfiltered",
    get_content_by_id: "/leaf_content/:id",
    comment: "/leaf_content_comment",
    comment_by_id: "/leaf_content_comment"
  },
  line: {
    leaf_line: "/leaf_line",
    leaf_line_id: "/leaf_line/:id"
  }
}, endpoint_default = urls;

// app/utils/session.server.ts
var import_cloudflare = require("@remix-run/cloudflare"), { getSession, commitSession, destroySession } = (0, import_cloudflare.createCookieSessionStorage)({
  cookie: {
    name: "token-session"
  }
});
async function logout(request) {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_cloudflare.redirect)("/", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}

// app/utils/fetcher.tsx
var fetcher = async (request, endpoint, method, body) => {
  let token = (await getSession(request.headers.get("Cookie"))).get("token");
  return await fetch(`https://nextline.dev${endpoint}`, {
    method,
    body,
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`
    }
  });
}, fetcher_default = fetcher;

// app/src/components/layout/app_layout/index.tsx
var import_material4 = require("@mui/material"), React = __toESM(require("react")), import_react = require("@iconify/react");

// app/src/components/layout/app_layout/navbar/index.tsx
var import_material = require("@mui/material"), import_styles = require("@mui/material/styles"), import_jsx_runtime = require("react/jsx-runtime"), MyAppBar = (0, import_styles.styled)(import_material.AppBar)(({ theme: theme2 }) => ({
  width: "100%",
  background: "white",
  height: "5vh",
  boxShadow: "none",
  borderBottom: "1px solid #0000001f",
  transition: theme2.transitions.create(["width", "margin"], {
    easing: theme2.transitions.easing.sharp,
    duration: theme2.transitions.duration.enteringScreen
  })
})), NavBar = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_material.Box,
  {
    sx: {
      flexGrow: 1
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyAppBar, { position: "sticky" })
  }
), navbar_default = NavBar;

// app/src/components/layout/app_layout/sidebar/left-sider.tsx
var import_material2 = require("@mui/material"), import_styles2 = require("@mui/material/styles"), import_jsx_runtime2 = require("react/jsx-runtime"), LeftMenu = (0, import_styles2.styled)(import_material2.Drawer)(({ theme: theme2 }) => ({
  "& .MuiDrawer-paper": {
    whiteSpace: "nowrap",
    width: 50,
    transition: theme2.transitions.create("width", {
      easing: theme2.transitions.easing.sharp,
      duration: theme2.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    height: "100vh",
    backgroundColor: "white"
  }
})), Left = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LeftMenu, { variant: "permanent", open: !0, children }), left_sider_default = Left;

// app/src/components/layout/app_layout/sidebar/right-sider.tsx
var import_material3 = require("@mui/material"), import_styles3 = require("@mui/material/styles"), import_jsx_runtime3 = require("react/jsx-runtime"), RightMenu = (0, import_styles3.styled)(import_material3.Drawer)(({ theme: theme2 }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: 50,
    transition: theme2.transitions.create("width", {
      easing: theme2.transitions.easing.sharp,
      duration: theme2.transitions.duration.enteringScreen
    }),
    float: "right",
    boxSizing: "border-box",
    height: "95vh",
    borderLeft: "1px solid #0000001f",
    backgroundColor: "white"
  }
})), Right = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RightMenu, { variant: "permanent", open: !0, children }), right_sider_default = Right;

// app/src/components/layout/app_layout/index.tsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime4 = require("react/jsx-runtime"), AppLayout = ({ children }) => {
  let data = (0, import_react2.useRouteLoaderData)("root"), user = data == null ? void 0 : data.userObject, match = (0, import_react2.useMatches)(), route = (0, import_react2.useLocation)(), [anchorEl, setAnchorEl] = React.useState(null), open = Boolean(anchorEl), handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  }, handleClose = () => {
    setAnchorEl(null);
  }, menuItems = [
    {
      label: "Profile",
      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react.Icon, { icon: "mdi:person-circle" }),
      route: `/profile/${user == null ? void 0 : user.username}`
    },
    {
      label: "Setting",
      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react.Icon, { icon: "uil:setting" }),
      route: ""
    },
    {
      label: "Logout",
      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react.Icon, { icon: "ic:twotone-logout" }),
      route: "/logout"
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(React.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_material4.Grid, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_material4.Grid, { item: !0, xs: 1, lg: 1, md: 1, sm: 1, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(left_sider_default, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_material4.Box,
      {
        p: 1,
        sx: {
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100vh"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_material4.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "img",
            {
              src: "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/logo.png",
              alt: "Logo",
              width: 30,
              height: 30
            }
          ) }),
          (user == null ? void 0 : user.username) && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_material4.Box, { sx: { display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react.Icon, { icon: "uil:setting", width: "26", height: "26" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_material4.Avatar,
              {
                src: user == null ? void 0 : user.photoUrl,
                alt: user == null ? void 0 : user.username,
                sx: {
                  width: 24,
                  height: 24,
                  mt: 1,
                  cursor: "pointer"
                },
                onClick: (event) => setAnchorEl(event.currentTarget)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_material4.Menu,
              {
                id: "basic-menu",
                anchorEl,
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "right"
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "right"
                },
                open,
                onClose: handleClose,
                MenuListProps: {
                  "aria-labelledby": "basic-button"
                },
                children: menuItems.map((menu, idx) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                  import_material4.MenuItem,
                  {
                    sx: { color: "black", cursor: "pointer" },
                    children: [
                      menu.icon,
                      menu.label === "Logout" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                        import_material4.Button,
                        {
                          type: "submit",
                          sx: {
                            fontWeight: "400",
                            fontSize: "10px",
                            lineHeight: "13px",
                            marginLeft: "5px"
                          },
                          children: "Logout"
                        }
                      ) }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react2.Link, { to: menu.route, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                        import_material4.Button,
                        {
                          sx: {
                            fontWeight: "400",
                            fontSize: "10px",
                            lineHeight: "13px",
                            marginLeft: "5px"
                          },
                          children: menu.label
                        }
                      ) })
                    ]
                  },
                  idx
                ))
              }
            )
          ] })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { width: "calc(100vh-50px)", marginLeft: 50 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(navbar_default, {}),
      ((user == null ? void 0 : user.username) || match[1].pathname !== "/login") && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(right_sider_default, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        import_material4.Box,
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "gray",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_react.Icon,
              {
                icon: "material-symbols:mic-outline-rounded",
                width: "26",
                height: "26",
                style: { marginTop: "10px" }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_react.Icon,
              {
                icon: "material-symbols:volume-up-outline",
                width: "26",
                height: "26",
                style: { marginTop: "10px" }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_react.Icon,
              {
                icon: "material-symbols:graphic-eq",
                width: "26",
                height: "26",
                style: { marginTop: "10px" }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_react.Icon,
              {
                icon: "material-symbols:note-rounded",
                width: "26",
                height: "26",
                style: { marginTop: "10px" }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_material4.Divider, {})
          ]
        }
      ) }),
      children
    ] })
  ] });
}, app_layout_default = AppLayout;

// app/root.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: ReactToastify_default }
  ];
}
var loader = async ({ request }) => {
  let userObject, username;
  return (await getSession(request.headers.get("Cookie"))).get("token") ? (userObject = await (await fetcher_default(request, endpoint_default.auth.me, "GET")).json(), typeof userObject == "object" && userObject !== null && (username = userObject.username)) : removeFromStorage("user"), { userObject, username };
}, Head = (0, import_remix_island.createHead)(() => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Meta, {}),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Links, {})
] }));
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Head, {}),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(app_layout_default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.LiveReload, {})
    ] })
  ] });
}
function CatchBoundary() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { textAlign: "center" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { children: "This is a catch boundary!" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "/", children: "Go back home" }) })
  ] });
}

// app/entry.server.tsx
var import_remix_island2 = require("remix-island"), import_server = require("react-dom/server"), import_jsx_runtime6 = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
async function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let didError = !1, readable = await (0, import_server.renderToReadableStream)(
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react4.RemixServer, { context: remixContext, url: request.url })
  );
  responseHeaders.set("Content-Type", "text/html");
  let stream = new ReadableStream({
    start(controller) {
      let head = (0, import_remix_island2.renderHeadToString)({ request, remixContext, Head });
      controller.enqueue(
        new Uint8Array(
          new TextEncoder().encode(
            `<!DOCTYPE html><html><head>${head}</head><body><div id="root">`
          )
        )
      );
      let reader = readable.getReader();
      function read() {
        reader.read().then(({ done, value }) => {
          if (done) {
            controller.enqueue(
              new Uint8Array(
                new TextEncoder().encode("</div></body></html>")
              )
            ), controller.close();
            return;
          }
          controller.enqueue(value), read();
        }).catch((error) => {
          controller.error(error), readable.cancel();
        });
      }
      read();
    },
    cancel() {
      readable.cancel();
    }
  });
  return new Response(stream, {
    headers: responseHeaders,
    status: didError ? 500 : responseStatusCode
  });
}

// app/routes/contribution/$id.$title.tsx
var id_title_exports = {};
__export(id_title_exports, {
  CatchBoundary: () => CatchBoundary2,
  action: () => action,
  default: () => Contribution,
  links: () => links2,
  loader: () => loader2
});
var import_react_split = __toESM(require("react-split")), import_cloudflare2 = require("@remix-run/cloudflare");

// app/src/components/contribution/contribution-box.tsx
var import_material9 = require("@mui/material");

// app/src/components/contribution/contribution-card.tsx
var import_react13 = require("react"), import_material8 = require("@mui/material"), import_react14 = require("@iconify/react");

// app/src/components/contribution/contribution-line-card.tsx
var import_material6 = require("@mui/material"), import_react7 = require("@iconify/react");

// app/src/components/typography/icon-title.tsx
var import_react5 = __toESM(require("react")), import_material5 = require("@mui/material"), import_react6 = require("@iconify/react");

// app/styles/theme.ts
var import_styles4 = require("@mui/material/styles");
var theme = (0, import_styles4.createTheme)({
  palette: {
    primary: {
      main: "#8a9be6"
    },
    secondary: {
      main: "#F3F6FF"
    },
    warning: {
      main: "#fbad00"
    },
    default: {
      main: "#646464"
    },
    white: {
      main: "#ffffff"
    },
    lightBlue: {
      main: "#e4f1fb"
    },
    gray: {
      main: "#FCFCFC",
      dark: "#959595"
    },
    error: {
      main: "#ff0000"
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff"
    },
    leafTitle: {
      main: "#3C8A8B"
    }
  },
  typography: {
    fontFamily: ['"Source Sans Pro"'].join(",")
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          marginTop: "20px"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "15px"
        }
      },
      variants: [
        {
          props: {
            variant: "circle"
          },
          style: {
            float: "right",
            borderRadius: "50%",
            width: "10px",
            background: "red",
            fontSize: "70px"
          }
        }
      ]
    }
  }
});

// app/src/components/typography/icon-title.tsx
var import_moment = __toESM(require("moment")), import_jsx_runtime7 = require("react/jsx-runtime"), IconTitle = ({ label, icon, color, userColor }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react5.default.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
  import_material5.Box,
  {
    display: "flex",
    alignItems: "center",
    sx: { mr: 1, cursor: "pointer" },
    children: [
      icon && icon,
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_material5.Typography,
        {
          ml: 0.2,
          sx: {
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: "13px",
            color: color || ""
          },
          children: label
        }
      ),
      userColor && userColor
    ]
  }
) });
function Comment({ count }) {
  var _a2, _b2;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    IconTitle,
    {
      label: `${count} comments`,
      color: (_a2 = theme.palette) == null ? void 0 : _a2.primary.main,
      icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_react6.Icon,
        {
          icon: "basil:comment-solid",
          color: (_b2 = theme.palette) == null ? void 0 : _b2.primary.main,
          width: "20",
          height: "20"
        }
      )
    }
  );
}
function Like({ count }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    IconTitle,
    {
      label: `${count} likes`,
      color: "red",
      icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react6.Icon, { icon: "basil:comment-solid", color: "red", width: "20", height: "20" })
    }
  );
}
function Upvote({ count }) {
  var _a2, _b2;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    IconTitle,
    {
      label: `${count} upvotes`,
      color: (_a2 = theme.palette) == null ? void 0 : _a2.primary.main,
      icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_react6.Icon,
        {
          icon: "bxs:upvote",
          width: "20",
          height: "20",
          color: (_b2 = theme.palette) == null ? void 0 : _b2.primary.main
        }
      )
    }
  );
}
function Time({ time }) {
  let now = (0, import_moment.default)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_material5.Box, { className: "display-f-c", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react6.Icon, { icon: "ic:outline-access-time", color: "#959595" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      import_material5.Typography,
      {
        sx: {
          fontWeight: "400",
          fontSize: "10px",
          lineHeight: "13px",
          color: "#959595",
          pl: 1
        },
        children: time ? (0, import_moment.default)(time).from(now) : (0, import_moment.default)("20221031", "YYYYMMDD").from(now)
      }
    )
  ] });
}

// app/src/components/contribution/contribution-line-card.tsx
var import_react8 = require("@remix-run/react"), import_react9 = require("react"), import_moment2 = __toESM(require("moment")), import_jsx_runtime8 = require("react/jsx-runtime");
function ContributionLineCard({ item, EditLine }) {
  var _a2, _b2;
  let navigate = (0, import_react8.useNavigate)(), [anchorEl, setAnchorEl] = (0, import_react9.useState)(null), open = Boolean(anchorEl), handleClose = () => {
    setAnchorEl(null);
  }, handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  }, menuItems = [
    {
      label: "Report",
      onclick: () => {
        setAnchorEl(null);
      },
      icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react7.Icon, { icon: "mdi:flag-variant", style: { paddingRight: 10 } })
    }
  ], timeDiff = (createdAt) => {
    let now = (0, import_moment2.default)();
    var minutes = import_moment2.default.duration(now.diff(createdAt)).asMinutes();
    return minutes;
  }, lineDataWithId = { line: item == null ? void 0 : item.lineData, lineId: item == null ? void 0 : item.id };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: item ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_material6.Box, { display: "flex", children: [
    timeDiff(item.createdAt) < 3 && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_material6.Stack, { pl: 4.5, pt: 1.3, spacing: 0.5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react7.Icon, { icon: "material-symbols:edit", height: "13px", width: "10px", color: "#EDA43B", style: { cursor: "pointer" }, onClick: () => EditLine(lineDataWithId) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material6.Typography, { sx: { fontWeight: 400, fontSize: "7px", lineHeight: "8px", color: "#717171" }, children: "Edit" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      import_material6.Box,
      {
        display: "flex",
        flexDirection: "column",
        pr: 2,
        pb: 1,
        onClick: () => navigate("line/" + item.id),
        sx: { cursor: "pointer", width: "100%", marginLeft: `${timeDiff(item.createdAt) < 3 ? "14px" : "60px"}` },
        className: "contribution_line_card",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_material6.Box, { className: "display-f-sb", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material6.Typography, { className: "contribution_line", children: item == null ? void 0 : item.lineData }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_material6.Box, { sx: { cursor: "pointer" }, display: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                IconTitle,
                {
                  label: (_a2 = item == null ? void 0 : item.creator) == null ? void 0 : _a2.username,
                  userColor: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react7.Icon, { icon: "ic:sharp-square", color: "red" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                import_material6.IconButton,
                {
                  id: "basic-button",
                  "aria-controls": open ? "basic-menu" : void 0,
                  "aria-haspopup": "true",
                  "aria-expanded": open ? "true" : void 0,
                  onClick: handleClick2,
                  className: "morevert",
                  sx: { p: 0, fontSize: "15px" },
                  children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react7.Icon, { icon: "carbon:overflow-menu-vertical", className: "morevert" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                import_material6.Menu,
                {
                  id: "basic-menu",
                  anchorEl,
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                  },
                  open,
                  onClose: handleClose,
                  MenuListProps: {
                    "aria-labelledby": "basic-button"
                  },
                  children: menuItems.map((menu, idx) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_material6.MenuItem, { onClick: menu.onclick, children: [
                    menu.icon,
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                      import_material6.Typography,
                      {
                        sx: {
                          fontWeight: "400",
                          fontSize: "10px",
                          lineHeight: "13px"
                        },
                        children: menu.label
                      }
                    )
                  ] }, idx))
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_material6.Stack, { direction: "row", spacing: 2, mt: 0.5, children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Time, { time: item.createdAt }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              IconTitle,
              {
                label: item.likeCount,
                icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react7.Icon, { icon: "mdi:favourite", color: "red", width: "20", height: "20" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              IconTitle,
              {
                label: item.voteCount,
                icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  import_react7.Icon,
                  {
                    icon: "mdi:arrow-up-bold",
                    color: (_b2 = theme.palette) == null ? void 0 : _b2.primary.main,
                    width: "20",
                    height: "20"
                  }
                )
              }
            )
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_material6.Box,
    {
      display: "flex",
      flexDirection: "column",
      pl: 8,
      pr: 2,
      py: 1,
      sx: { cursor: "pointer" },
      className: "contribution_line_card",
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material6.Typography, { className: "contribution_line", children: "No contents added yet. Contribute to the content" })
    }
  ) });
}

// app/src/components/contribution/contribution-input.tsx
var import_react10 = require("@remix-run/react"), import_material7 = require("@mui/material"), import_system = require("@mui/system"), import_react11 = require("@iconify/react"), import_react12 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
function ContributionInput({ lineNumber, prevLineData }) {
  var _a2, _b2, _c, _d, _e, _f, _g;
  let formRef = (0, import_react12.useRef)(), transition = (0, import_react10.useTransition)(), isAdding = transition.state === "submitting" && transition.submission.formData.get("_action") === "add_line", isUpdating = transition.state === "submitting" && transition.submission.formData.get("_action") === "update_line", [lineData, setLineData] = (0, import_react12.useState)({ line: "", lineId: "" });
  (0, import_react12.useEffect)(() => {
    setLineData(prevLineData);
  }, [prevLineData]), (0, import_react12.useEffect)(() => {
    var _a3;
    (!isAdding || !isUpdating) && ((_a3 = formRef.current) == null || _a3.reset());
  }, [isAdding, isUpdating]);
  let [user, setUser] = (0, import_react12.useState)();
  return (0, import_react12.useEffect)(() => {
    let userData = getFromStorage("user");
    setUser(userData);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_system.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_react10.Form, { method: "post", ref: formRef, replace: !0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_system.Box, { display: "flex", p: 1, alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material7.Avatar, { src: `${user == null ? void 0 : user.photoUrl}`, alt: "", sx: { height: 26, width: 26 } }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_system.Box, { ml: 1, width: "100%", className: "display-f-sb-c", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          import_material7.TextField,
          {
            size: "small",
            placeholder: "Add new line",
            fullWidth: !0,
            name: "lineData",
            value: lineData == null ? void 0 : lineData.line,
            onChange: (e) => setLineData(e.target.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "hidden", value: lineNumber, name: "lineNumber" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "hidden", value: prevLineData.lineId, name: "lineId" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          import_system.Box,
          {
            className: "contribution-send-button",
            style: {
              backgroundColor: `${(_c = (_b2 = (_a2 = theme) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.primary) == null ? void 0 : _c.main}`,
              borderColor: `${(_f = (_e = (_d = theme) == null ? void 0 : _d.palette) == null ? void 0 : _e.primary) == null ? void 0 : _f.main}`
            },
            children: ((_g = prevLineData == null ? void 0 : prevLineData.line) == null ? void 0 : _g.length) > 1 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material7.IconButton, { name: "_action", value: "update_line", size: "small", type: "submit", sx: { color: "white" }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react11.Icon, { icon: "material-symbols:send-outline", color: "white" }) }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material7.IconButton, { name: "_action", value: "add_line", size: "small", type: "submit", sx: { color: "white" }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react11.Icon, { icon: "material-symbols:send-outline", color: "white" }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      import_material7.Button,
      {
        variant: "contained",
        startIcon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react11.Icon, { icon: "material-symbols:edit-note-rounded" }),
        sx: {
          ml: "4em",
          mb: 2
        },
        children: "Ask Author to add new nextline"
      }
    )
  ] }) });
}

// app/src/components/contribution/contribution-card.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function ContributionCard({ lines, index: index2 }) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j;
  let [isExpand, setIsExpand] = (0, import_react13.useState)(!1), [isInputExpand, setIsInputExpand] = (0, import_react13.useState)(!1), [prevLine, setPrevLine] = (0, import_react13.useState)({ line: "", lineId: "" }), handleExpand = () => {
    lines.length > 1 && (isInputExpand || setIsExpand(!isExpand));
  }, handleInputExpand = () => {
    setIsInputExpand(!isInputExpand), isExpand === isInputExpand && setIsExpand(!isInputExpand), setIsExpand(!isExpand);
  }, EditLine = (lineData) => {
    setPrevLine(lineData), !isExpand && !isInputExpand && (setIsInputExpand(!isInputExpand), setIsExpand(!isExpand));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_material8.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.Box, { className: "contribution-card", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      import_material8.Avatar,
      {
        className: "contribution-card-add-button",
        sx: {
          height: "16px",
          width: "15px",
          backgroundColor: theme.palette.primary.main
        },
        children: isInputExpand ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          import_react14.Icon,
          {
            icon: "material-symbols:close-sharp",
            onClick: handleInputExpand
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react14.Icon, { icon: "material-symbols:add", onClick: handleInputExpand })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_material8.Box, { sx: { border: 0.5, borderColor: "#D3D3D3", borderRadius: "8px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        import_material8.Fab,
        {
          "aria-label": "add",
          onClick: handleExpand,
          className: "contribution-card-expand-button ",
          sx: {
            height: "15px",
            width: "35px",
            backgroundColor: `${isExpand ? (_c = (_b2 = (_a2 = theme) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.primary) == null ? void 0 : _c.main : (_e = (_d = theme.palette) == null ? void 0 : _d.white) == null ? void 0 : _e.main}`
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            import_material8.Typography,
            {
              variant: "h6",
              color: isExpand ? (_g = (_f = theme.palette) == null ? void 0 : _f.white) == null ? void 0 : _g.main : (_j = (_i = (_h = theme) == null ? void 0 : _h.palette) == null ? void 0 : _i.primary) == null ? void 0 : _j.main,
              children: index2
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        import_material8.Box,
        {
          style: {
            height: `${isExpand ? "auto" : "45px"}`,
            marginTop: "-25px"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ContributionLineCard, { item: (lines == null ? void 0 : lines.length) > 0 ? lines[0] : "", EditLine })
        }
      ),
      lines == null ? void 0 : lines.map(
        (i, idx) => idx > 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_material8.Collapse, { in: isExpand || isInputExpand, timeout: "auto", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.Divider, { sx: { my: 1, marginLeft: 8 } }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ContributionLineCard, { item: i, EditLine })
        ] }, idx)
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material8.Collapse, { in: isInputExpand, timeout: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ContributionInput, { lineNumber: index2, prevLineData: prevLine }) })
    ] })
  ] });
}

// app/src/components/contribution/contribution-box.tsx
var import_react15 = require("@remix-run/react"), import_jsx_runtime11 = require("react/jsx-runtime");
function ContributionBox() {
  let data = (0, import_react15.useLoaderData)(), maxNoOfLines = data == null ? void 0 : data.maxNoOfLines, { lines } = data, linesArray = lines[0], item = [];
  for (let i = 1; i <= maxNoOfLines; i++)
    item.push(
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material9.Box, { p: 1.5, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ContributionCard, { lines: linesArray[`${i}`], index: i }) }, i)
    );
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_material9.Box,
    {
      style: { marginBottom: "5px", overflowY: "scroll" },
      className: "scrollbar-hidden",
      children: item
    }
  );
}

// app/src/styles/contribution-style.css
var contribution_style_default = "/build/_assets/contribution-style-SJKPUHUC.css";

// app/src/components/contribution/leaf.tsx
var import_react20 = require("@iconify/react"), import_material13 = require("@mui/material"), import_react21 = __toESM(require("react"));

// app/src/mock/comment.json
var comment_default = [
  {
    id: 1,
    like: 21,
    vote: 12,
    comments: [
      {
        id: 1,
        username: "Thomas",
        comment: "Nice Song!!",
        time: "3 hours"
      },
      {
        id: 2,
        username: "Nick ",
        comment: "Wow",
        time: "3 days"
      },
      {
        id: 3,
        username: "Rajesh Hamal",
        comment: "nice",
        time: "1 week"
      }
    ]
  }
];

// app/src/components/comments/user-comment.tsx
var import_react16 = require("@iconify/react"), import_material10 = require("@mui/material"), import_react17 = __toESM(require("react"));
var import_jsx_runtime12 = require("react/jsx-runtime");
var UserComment = ({
  username,
  comment,
  src,
  duration
}) => {
  var _a2, _b2;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react17.default.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_material10.Box, { className: "display-f-sb-c ", mt: 2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_material10.Box, { className: "display-f-c ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material10.Avatar, { alt: username, src, sx: { width: 24, height: 24 } }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_material10.Box, { ml: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          import_material10.Typography,
          {
            sx: {
              fontWeight: "400",
              fontSize: "10px",
              lineHeight: "13px"
            },
            children: username
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          import_material10.Typography,
          {
            sx: {
              fontWeight: "400",
              fontSize: "10px",
              lineHeight: "13px",
              color: (_a2 = theme.palette) == null ? void 0 : _a2.default.main
            },
            children: comment
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_material10.Box, { className: "display-f-c ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Time, { time: duration }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        import_react16.Icon,
        {
          icon: "material-symbols:more-vert",
          color: (_b2 = theme.palette) == null ? void 0 : _b2.default.main
        }
      )
    ] })
  ] }) });
}, user_comment_default = UserComment;

// app/src/components/read_more/read-more.tsx
var import_material11 = require("@mui/material"), import_react18 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime"), ReadMore = ({ lines }) => {
  let [clamped, setClamped] = (0, import_react18.useState)(!0), [showButton, setShowButton] = (0, import_react18.useState)(!0), containerRef = (0, import_react18.useRef)(null), handleClick2 = () => setClamped(!clamped), lineArray = Object.values(lines[0]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "div",
      {
        className: classNames("long-text", clamped && "clamp"),
        ref: containerRef,
        children: lineArray.map((line, index2) => line[0].isSelected === !0 && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_material11.Typography,
          {
            sx: {
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "20px"
            },
            children: line[0].lineData
          },
          index2
        ))
      }
    ),
    showButton && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      import_material11.Typography,
      {
        variant: "caption",
        onClick: handleClick2,
        style: {
          cursor: "pointer",
          color: theme.palette.primary.main,
          alignSelf: "flex-end"
        },
        children: [
          "See ",
          clamped ? "more" : "less"
        ]
      }
    )
  ] });
}, read_more_default = ReadMore;

// app/src/components/modal/ModalBox.tsx
var import_Box = __toESM(require("@mui/material/Box")), import_Modal = __toESM(require("@mui/material/Modal")), import_jsx_runtime14 = require("react/jsx-runtime"), style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "justify",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
}, ModalBox = ({ children, handleClose, open }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
  import_Modal.default,
  {
    open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description",
    children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_Box.default, { sx: style, children })
  }
) }), ModalBox_default = ModalBox;

// app/src/components/expanded-story.tsx
var import_material12 = require("@mui/material"), import_react19 = __toESM(require("react")), import_jsx_runtime15 = require("react/jsx-runtime"), ExpandedStory = ({ creator }) => {
  let { id, name, color, username, photoUrl } = creator;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_react19.default.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      import_material12.Typography,
      {
        sx: {
          fontWeight: "700",
          fontSize: "21px",
          lineHeight: "25px"
        },
        children: name
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_material12.Box, { display: "flex", ml: 1, mt: 1, alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_material12.Avatar, { src: photoUrl, alt: username, sx: { width: 24, height: 24 } }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_material12.Box, { ml: 1, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_material12.Typography,
        {
          sx: {
            fontWeight: "400",
            fontSize: "8px",
            lineHeight: "10px"
          },
          children: "what is ur name"
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_material12.Box, { display: "flex", justifyContent: "space-between", mt: 4, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
      import_material12.Typography,
      {
        color: "primary",
        sx: {
          fontWeight: "400",
          fontSize: "9px",
          lineHeight: "11px"
        },
        children: [
          "Story Behind ",
          name
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
      import_material12.Typography,
      {
        sx: {
          fontWeight: "400",
          fontSize: "10px",
          lineHeight: "16px"
        },
        children: [
          "But I must explain to you how all this mistaken idea ofs, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, ",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "That they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences."
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "img",
      {
        style: { marginTop: "1em" },
        src: "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/mountain.jpg",
        alt: "mountain",
        width: 800,
        height: 200
      }
    )
  ] });
}, expanded_story_default = ExpandedStory;

// app/src/components/contribution/leaf.tsx
var import_react22 = require("@remix-run/react"), import_jsx_runtime16 = require("react/jsx-runtime");
var Leaf = () => {
  var _a2, _b2, _c, _d, _e;
  let content = (0, import_react22.useLoaderData)(), comments2 = content == null ? void 0 : content.comments, lines = content == null ? void 0 : content.lines, { id, name, color, username, photoUrl } = content.creator, { createdAt } = content, [openModal, setOpenModal] = import_react21.default.useState(!1), [expand, setExpand] = import_react21.default.useState(!1), [commentList, setCommentList] = (0, import_react21.useState)(comment_default), [comment, setComment] = (0, import_react21.useState)(""), [isLikedByMe, setIsLikedByMe] = (0, import_react21.useState)(!1), [likeCount, setLikeCount] = (0, import_react21.useState)(commentList[0].like), divRef = (0, import_react21.createRef)(), l = "Sunshine, we do not belong here. We got no flowers to grow, But itfeels so good with you on me, baby Yeah it feels so good when you knowwhen you know  what happened with you please tell me  i can understand you and you have to understand me".length, handleModalClick = () => {
    setOpenModal(!0);
  }, handleModalClose = () => {
    setOpenModal(!1);
  }, handleLike = () => {
    setIsLikedByMe((like) => (setLikeCount((likeCount2) => like ? likeCount2 - 1 : likeCount2 + 1), !like));
  }, onKeyPress = (e) => {
    if (e.key === "Enter") {
      let newCommentList = commentList, newComment = [
        ...commentList[0].comments,
        {
          id: 4,
          username: "Salman Khan",
          time: "<1 min",
          comment
        }
      ];
      newCommentList[0].comments = newComment, setCommentList(newCommentList);
    }
  }, formRef = (0, import_react21.useRef)(), transition = (0, import_react22.useTransition)(), isAdding = transition.state === "submitting" && transition.submission.formData.get("_action") === "post_comment";
  return (0, import_react21.useEffect)(() => {
    var _a3;
    isAdding || (_a3 = formRef.current) == null || _a3.reset();
  }, [isAdding]), /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react21.default.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      import_material13.Box,
      {
        display: "flex",
        flexDirection: "column",
        sx: { p: 1, backgroundColor: "#fcfcfc", height: "calc(100vh - 75px)" },
        justifyContent: "space-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_material13.Box, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_material13.Box, { display: "flex", ml: 1, mt: 1, children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_material13.Avatar, { alt: "Remy Sharp", src: photoUrl }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_material13.Box, { ml: 2, sx: { width: "100%" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_material13.Box, { className: "display-f-sb-c", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    import_material13.Typography,
                    {
                      variant: "h6",
                      sx: { fontSize: "12px", fontWeight: 700, lineHeight: "15px" },
                      children: name
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_material13.Box, { className: "display-f-sb-c", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Time, { time: createdAt }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      import_react20.Icon,
                      {
                        icon: "material-symbols:more-vert",
                        color: (_a2 = theme.palette) == null ? void 0 : _a2.default.main
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                  import_material13.Typography,
                  {
                    sx: {
                      fontWeight: "400",
                      fontSize: "10px",
                      lineHeight: "13px"
                    },
                    children: [
                      "Content Initiated by ",
                      username
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_material13.Box, { pt: 1, pb: 1, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(read_more_default, { lines }) }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_material13.Box, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                import_material13.Chip,
                {
                  size: "small",
                  label: "Story",
                  color: "primary",
                  variant: "outlined",
                  sx: {
                    margin: "3px",
                    color: (_b2 = theme.palette) == null ? void 0 : _b2.primary.main,
                    borderColor: (_c = theme.palette) == null ? void 0 : _c.primary.main
                  },
                  onClick: handleModalClick
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                import_material13.Chip,
                {
                  label: "Contract",
                  color: "primary",
                  size: "small",
                  variant: "outlined",
                  sx: {
                    margin: "3px",
                    color: (_d = theme.palette) == null ? void 0 : _d.primary.main,
                    borderColor: (_e = theme.palette) == null ? void 0 : _e.primary.main
                  }
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_material13.Box, { display: "flex", mt: 2, alignItems: "center", ml: 1, children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Comment, { count: comments2 == null ? void 0 : comments2.length }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Like, { count: comment == null ? void 0 : comment.length })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_material13.Divider, { sx: { marginTop: "16px" } }),
            comments2.map((item, index2) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              user_comment_default,
              {
                username: item.creator.username,
                comment: item.commentData,
                duration: item.createdAt,
                src: item.creator.photoUrl
              },
              index2
            ))
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_material13.Box, { display: "flex", flexDirection: "column", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react22.Form, { method: "post", ref: formRef, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            import_material13.TextField,
            {
              name: "commentData",
              placeholder: "Write a comment",
              size: "small",
              InputProps: {
                endAdornment: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_material13.InputAdornment, { position: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react20.Icon, { icon: "ic:baseline-tag-faces" }),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    import_material13.IconButton,
                    {
                      size: "small",
                      type: "submit",
                      name: "_action",
                      value: "post_comment",
                      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react20.Icon, { icon: "material-symbols:send-outline" })
                    }
                  )
                ] })
              }
            }
          ) }) })
        ]
      }
    ),
    openModal && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ModalBox_default, { open: openModal, handleClose: handleModalClose, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(expanded_story_default, { creator: content.creator }) })
  ] });
}, leaf_default = Leaf;

// app/routes/contribution/$id.$title.tsx
var import_react23 = require("@remix-run/react");
var import_material14 = require("@mui/material"), import_react24 = require("react");

// app/src/config/status.tsx
var import_react_toastify = require("react-toastify");
function Status(statusCode, displayText) {
  return statusCode === 200 ? import_react_toastify.toast.success(`${displayText} successfully`) : statusCode === 400 ? import_react_toastify.toast.error("Bad request") : statusCode === 404 ? import_react_toastify.toast.error("Not found error") : import_react_toastify.toast.error("Internal server error");
}

// app/routes/contribution/$id.$title.tsx
var import_jsx_runtime17 = require("react/jsx-runtime"), loader2 = async ({ request, params }) => {
  let url = new URL(request.url), content = await fetcher_default(
    request,
    endpoint_default.content.get_content_by_id.replace(":id", params.id),
    "GET"
  );
  if (!content)
    throw new Response("User not Found, contribution", { status: 404 });
  return content;
}, CatchBoundary2 = ({ error }) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
  error,
  ", Error on contribution"
] });
async function action({ request, params }) {
  let res, form = await request.formData(), { _action, ...values } = Object.fromEntries(form);
  if (_action === "post_comment") {
    let body = JSON.stringify({
      contentId: params.id,
      ...values
    });
    fetcher_default(request, endpoint_default.content.comment_by_id, "POST", body);
  } else if (_action === "update_line") {
    let lineNumber = form.get("lineNumber"), lineId = form.get("lineId"), line = form.get("lineData"), body = JSON.stringify({
      lineData: line,
      isSelected: !1,
      lineNumber
    }), endpoint = endpoint_default.line.leaf_line_id.replace(":id", lineId);
    res = await fetcher_default(request, endpoint, "PUT", body);
  } else if (_action === "add_line") {
    let line = form.get("lineData"), lineNumber = form.get("lineNumber"), body = JSON.stringify({
      lineData: line,
      lineNumber,
      contentId: params.id,
      isSelected: !1
    });
    res = await fetcher_default(request, endpoint_default.line.leaf_line, "POST", body);
  } else if (_action === "filter_leaf") {
    let searchParams = new URLSearchParams();
    return Object.keys(values).forEach(function(key) {
      searchParams.set(key, values[key]);
    }), (0, import_cloudflare2.redirect)(
      `/contribution/${params.id}/${params.title}?${searchParams}`
    );
  }
  return (res == null ? void 0 : res.status) || null;
}
var links2 = () => [{ rel: "stylesheet", href: contribution_style_default }];
function Contribution() {
  let res = (0, import_react23.useActionData)();
  return (0, import_react24.useEffect)(() => {
    res && Status(res, "Line updated");
  }, [res]), /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    import_react_split.default,
    {
      className: "split",
      sizes: [20, 50, 30],
      minSize: 250,
      style: { height: "90vh" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(leaf_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ContributionBox, {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_material14.Box, { sx: { p: 2, backgroundColor: "#fcfcfc" }, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react23.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react23.Outlet, {}) }) })
      ]
    }
  );
}

// app/routes/contribution/$id.$title/line.$lineId.tsx
var line_lineId_exports = {};
__export(line_lineId_exports, {
  CatchBoundary: () => CatchBoundary3,
  default: () => line_lineId_default,
  loader: () => loader3
});
var import_react25 = require("@iconify/react"), import_material15 = require("@mui/material"), import_react26 = require("react"), import_react_router = require("react-router");
var import_react27 = require("@remix-run/react"), import_jsx_runtime18 = require("react/jsx-runtime"), comments = [
  {
    name: "Shaiba Bali",
    comment: " Nice song...",
    time: "1 day ago"
  },
  {
    name: "John doe",
    comment: " Nice song...",
    time: "1 day ago"
  }
], loader3 = async ({
  request,
  params
}) => {
  let user, leaf2 = await fetcher_default(
    request,
    endpoint_default.line.leaf_line_id.replace(":id", params.lineId),
    "GET"
  );
  if (leaf2)
    user = await fetcher_default(
      request,
      endpoint_default.user.id.replace(":id", leaf2.creatorId),
      "GET"
    );
  else
    throw new Response("User not Found, line.$lineId", { status: 404 });
  return { user, leaf: leaf2 };
}, CatchBoundary3 = ({ error }) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
  error,
  ", Error on id title line $lineId"
] });
function LineDetail() {
  let navigate = (0, import_react_router.useNavigate)(), { user, leaf: leaf2 } = (0, import_react_router.useLoaderData)(), [isLikedByMe, setIsLikedByMe] = (0, import_react26.useState)(!1), [likeCount, setLikeCount] = (0, import_react26.useState)(0), match = (0, import_react27.useMatches)(), handleLike = () => {
    setIsLikedByMe((like) => (setLikeCount((likeCount2) => like ? likeCount2 - 1 : likeCount2 + 1), !like));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_material15.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_material15.Box, { display: "flex", justifyContent: "flex-end", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      import_react25.Icon,
      {
        icon: "mdi:multiply",
        width: "20",
        height: "20",
        onClick: () => {
          navigate(`${match[1].pathname}`);
        },
        style: { cursor: "pointer" }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_material15.Box, { className: "display-f-sb-c", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_material15.Box, { className: "display-f-c", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          import_material15.Avatar,
          {
            alt: "Trevor Henderson",
            sx: { width: 24, height: 24 },
            src: "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/5.jpg"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_material15.Box, { display: "flex", flexDirection: "column", sx: { ml: 1 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            import_material15.Typography,
            {
              sx: {
                fontWeight: "700",
                fontSize: "12px",
                lineHeight: "15px"
              },
              children: user.username
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Time, { time: leaf2.createdAt })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        import_material15.Typography,
        {
          sx: {
            fontWeight: "700",
            fontSize: "30px",
            lineHeight: "36px"
          },
          children: "7"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      import_material15.Typography,
      {
        sx: {
          fontWeight: "400",
          fontSize: "13px",
          lineHeight: "16px",
          mt: 2,
          mb: 4
        },
        children: leaf2.lineData
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_material15.Box, { display: "flex", mt: 2, alignItems: "center", ml: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Comment, { count: 3 }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Like, { count: 3 }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Upvote, { count: 3 })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_material15.Divider, { sx: { marginTop: "16px" } }),
    comments.map((item, index2) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      user_comment_default,
      {
        username: item.name,
        comment: item.comment,
        duration: item.time
      },
      index2
    ))
  ] });
}
var line_lineId_default = LineDetail;

// app/routes/contribution/$id.$title/index.tsx
var id_exports = {};
__export(id_exports, {
  default: () => id_default
});
var import_material16 = require("@mui/material"), import_jsx_runtime19 = require("react/jsx-runtime"), itemfilters = [
  {
    item: {
      label: "Time",
      details: [
        { checked: !1, label: "Last 1 hour" },
        { checked: !1, label: "Today" },
        { checked: !1, label: "Yesterday" },
        { checked: !1, label: "Last Week" },
        { checked: !1, label: "Last Month" }
      ]
    }
  },
  {
    item: {
      label: "User",
      details: [
        { checked: !1, label: "ganesh" },
        { checked: !1, label: "rajesh43" },
        { checked: !1, label: "nick" },
        { checked: !1, label: "smith12" }
      ]
    }
  },
  {
    item: {
      label: "Votescore",
      details: [
        { checked: !1, label: "Maximum Vote", name: "max" },
        { checked: !1, label: "Average Vote", name: "average" },
        { checked: !1, label: "Minimum Vote", name: "min" }
      ]
    }
  }
], buttons = [
  { label: "Filter", type: "submit", name: "_action", value: "filter_leaf" },
  { label: "Reset" }
];
function ContributionFilter() {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    import_material16.Box,
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
      height: "calc(100vh - 80px)",
      sx: { background: "#fcfcfc" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_material16.Box, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            import_material16.Typography,
            {
              sx: {
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "18px"
              },
              children: "Filter By"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_material16.Divider, { sx: { marginTop: "5px" } }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_material16.Box, { mt: 1, children: itemfilters == null ? void 0 : itemfilters.map((itemfilter, index2) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_material16.Box, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              import_material16.Typography,
              {
                sx: {
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "#ACACAC",
                  my: 1
                },
                children: itemfilter.item.label
              }
            ),
            itemfilter.item.details.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
              import_material16.Box,
              {
                display: "flex",
                alignItems: "center",
                sx: {
                  height: "25px"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                    import_material16.Checkbox,
                    {
                      sx: { "& .MuiSvgIcon-root": { fontSize: 16 } },
                      name: item.name
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_material16.Typography, { className: "default_text", children: item.label })
                ]
              },
              idx
            ))
          ] }, index2)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_material16.Box, { display: "flex", justifyContent: "end", children: buttons.map((button, index2) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          import_material16.Button,
          {
            sx: {
              ml: 1
            },
            variant: "outlined",
            type: button.type ? "submit" : "button",
            name: button.name,
            value: button.value,
            children: button.label
          },
          index2
        )) })
      ]
    }
  );
}
var id_default = ContributionFilter;

// app/routes/contribution/$leafId.tsx
var leafId_exports = {};
__export(leafId_exports, {
  default: () => Contribution2,
  links: () => links3
});
var import_react_split2 = __toESM(require("react-split"));

// app/src/components/profile/profile.tsx
var import_material17 = require("@mui/material"), import_react28 = require("@remix-run/react"), import_react29 = require("@iconify/react");

// app/src/mock/profile.ts
var profile = [
  {
    id: "QIODF7D5ROCOVV9X",
    photoURL: "",
    name: "John Smith",
    username: "@johnSmithOfficial",
    position: "Song Writer/ Producer",
    visibility: "public",
    isFollowed: !1,
    followsYou: !1,
    followerCount: [
      {
        title: "Posts",
        count: "20"
      },
      {
        title: "Following",
        count: "2.5K"
      },
      {
        title: "Followers",
        count: "1K"
      }
    ],
    isVerified: !0,
    bio: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    socialMedia: {
      youtubeURL: "",
      facebookURL: "",
      instaURL: "",
      twitterURL: "",
      linkedInURL: ""
    },
    achievementBadges: "",
    tags: [
      {
        id: "QF1ZHJIFPYY1IAX5",
        tag: "hydraulic"
      },
      {
        id: "L8UJBB5YPBE86HCE",
        tag: "col"
      },
      {
        id: "SDNLC8OGDRQV9I57",
        tag: "fitted"
      },
      {
        id: "XY15V9G24AYT1OXD",
        tag: "revision"
      },
      {
        id: "Q9NNQM7ALJP0CBNR",
        tag: "powers"
      },
      {
        id: "VBD4VX4L9UL9PG54",
        tag: "military"
      },
      {
        id: "NVT5IBL6IDY43FX6",
        tag: "grateful"
      }
    ]
  }
], profile_default = profile;

// app/src/components/profile/profile.tsx
var import_jsx_runtime20 = require("react/jsx-runtime"), import_react30 = require("react");
var FollowerCount = ({ count, title }) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_material17.Box, { textAlign: "center", padding: 1.2, children: [
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    import_material17.Typography,
    {
      variant: "body1",
      sx: {
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "19px"
      },
      children: count
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    import_material17.Typography,
    {
      sx: {
        fontWeight: "400",
        fontSize: "10px",
        lineHeight: "13px"
      },
      children: title
    }
  )
] }), handleClick = () => {
  console.info("You clicked the Chip.");
}, handleDelete = () => {
  console.info("You clicked the delete icon.");
}, tags = [
  {
    name: "Tag"
  },
  {
    name: "Tag"
  },
  {
    name: "Tag"
  }
];
function Profile() {
  var _a2, _b2;
  let user = (0, import_react28.useLoaderData)().userObject, data = (0, import_react28.useRouteLoaderData)("root"), isLoggedInUser = (data == null ? void 0 : data.username) === user.username;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_material17.Box, { sx: { p: 2, backgroundColor: "#fcfcfc" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      import_material17.Box,
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        sx: { py: 2 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_material17.Box, { paddingTop: 3, paddingBottom: 0.6, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_material17.Avatar, { src: user == null ? void 0 : user.photoUrl, alt: user == null ? void 0 : user.username }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_material17.Box, { paddingBottom: 1, display: "flex", flexDirection: "column", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
              import_material17.Typography,
              {
                textAlign: "center",
                lineHeight: "1",
                sx: { fontSize: "20px" },
                children: user == null ? void 0 : user.username
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
              import_material17.Typography,
              {
                fontSize: "8px",
                textAlign: "center",
                lineHeight: "1",
                sx: { py: 1 },
                children: user == null ? void 0 : user.email
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_material17.Typography, { fontSize: "8px", lineHeight: "1", component: "span", children: user.position })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            import_material17.Box,
            {
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: 1,
              children: (_b2 = (_a2 = profile_default[0]) == null ? void 0 : _a2.followerCount) == null ? void 0 : _b2.map((followDetail, index2) => {
                var _a3;
                return /* @__PURE__ */ (0, import_react30.createElement)(
                  FollowerCount,
                  {
                    ...followDetail,
                    count: (_a3 = followDetail == null ? void 0 : followDetail.count) == null ? void 0 : _a3.toString(),
                    key: index2
                  }
                );
              })
            }
          ),
          isLoggedInUser ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            import_material17.Button,
            {
              size: "small",
              variant: "contained",
              fullWidth: !0,
              sx: {
                color: theme.palette.primary.main
              },
              children: "Edit Profile"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_material17.Stack, { direction: "row", spacing: 0.5, children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
              import_material17.Button,
              {
                size: "small",
                variant: "contained",
                fullWidth: !0,
                sx: {
                  color: theme.palette.primary.main
                },
                children: "Follow"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
              import_material17.Button,
              {
                size: "small",
                variant: "contained",
                fullWidth: !0,
                sx: {
                  color: theme.palette.primary.main
                },
                children: "Message"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_material17.Divider, { sx: { width: "100%" } }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      import_material17.Box,
      {
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        sx: { py: 2 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            import_material17.Typography,
            {
              variant: "subtitle1",
              lineHeight: "1",
              sx: {
                fontWeight: "700",
                fontSize: "10px",
                lineHeight: "12px"
              },
              children: "About me"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            import_material17.Typography,
            {
              variant: "body2",
              lineHeight: "1",
              sx: {
                py: 1,
                fontWeight: "400",
                fontSize: "10px",
                lineHeight: "12px"
              },
              children: user.bio
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            import_material17.Typography,
            {
              variant: "body2",
              lineHeight: "1",
              sx: {
                py: 1,
                fontWeight: "400",
                fontSize: "10px",
                lineHeight: "12px"
              },
              children: "Languages: Nepali, English , Hindi"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
            import_material17.Box,
            {
              display: "flex",
              justifyContent: "space-between",
              sx: { columnGap: "10px" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react29.Icon, { icon: "mdi:youtube", width: "24", height: "24", color: "#646464" }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react29.Icon, { icon: "mdi:facebook", width: "24", height: "24", color: "#646464" }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react29.Icon, { icon: "mdi:instagram", width: "24", height: "24", color: "#646464" }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react29.Icon, { icon: "mdi:twitter", width: "24", height: "24", color: "#646464" }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react29.Icon, { icon: "mdi:linkedin", width: "24", height: "24", color: "#646464" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_material17.Divider, { sx: { width: "100%" } }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      import_material17.Typography,
      {
        variant: "subtitle1",
        lineHeight: "1",
        sx: {
          my: 1,
          fontWeight: "700",
          fontSize: "10px",
          lineHeight: "12px"
        },
        children: "Tags"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_material17.Box, { children: tags.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      import_material17.Chip,
      {
        label: item.name,
        size: "small",
        sx: {
          mr: 1,
          fontWeight: "400",
          fontSize: "8px",
          lineHeight: "10px"
        },
        onClick: handleClick,
        onDelete: handleDelete
      },
      idx
    )) })
  ] });
}
var profile_default2 = Profile;

// app/routes/contribution/$leafId.tsx
var import_styles5 = require("@mui/material/styles");
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline"));

// app/src/components/contribution/leaf-detail.tsx
var import_material18 = require("@mui/material");
var import_jsx_runtime21 = require("react/jsx-runtime");
function LeafDetail() {
  var _a2, _b2, _c, _d, _e;
  let lyricList = [
    {
      title: "Some where over the rainbow",
      time: "2 days ago",
      like: "2",
      vote: "15",
      username: "Ganesh"
    },
    {
      title: "Way up high",
      time: "1 days ago",
      like: "5",
      vote: "7",
      username: "Thomas",
      child: []
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_material18.Box, { sx: { padding: "20px", height: "100%", width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    import_material18.Box,
    {
      sx: {
        border: 0.5,
        borderColor: "#D3D3D3",
        borderRadius: "8px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_material18.Box, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            import_material18.Fab,
            {
              "aria-label": "add",
              sx: {
                marginTop: "-20px",
                marginLeft: "8px",
                height: "15px",
                width: "35px",
                backgroundColor: `${(_c = (_b2 = (_a2 = theme) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.primary) == null ? void 0 : _c.main}`
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_material18.Typography, { variant: "h6", color: (_e = (_d = theme.palette) == null ? void 0 : _d.white) == null ? void 0 : _e.main, children: "2" })
            }
          ),
          lyricList.map((item, index2) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_material18.Box, { style: { height: "59px" }, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ContributionLineCard, { item }) }, index2))
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ContributionInput, {})
      ]
    }
  ) });
}

// app/routes/contribution/$leafId.tsx
var import_jsx_runtime22 = require("react/jsx-runtime"), links3 = () => [{ rel: "stylesheet", href: contribution_style_default }];
function Contribution2() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_styles5.ThemeProvider, { theme, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_CssBaseline.default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(app_layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_react_split2.default, { className: "split", sizes: [20, 50, 30], minSize: 250, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(profile_default2, {}),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(LeafDetail, {})
    ] }) })
  ] });
}

// app/routes/profile.$user.tsx
var profile_user_exports = {};
__export(profile_user_exports, {
  CatchBoundary: () => CatchBoundary4,
  action: () => action2,
  default: () => profile_user_default,
  links: () => links4,
  loader: () => loader4
});
var import_react_split3 = __toESM(require("react-split"));

// app/src/components/leaf/leafs.tsx
var import_react34 = require("@iconify/react"), import_material21 = require("@mui/material"), import_react35 = require("@remix-run/react"), import_react36 = __toESM(require("react"));

// app/src/components/leaf/leaf.tsx
var import_react31 = __toESM(require("react")), import_material19 = require("@mui/material"), import_react32 = require("@iconify/react"), import_react33 = require("@remix-run/react"), import_randomcolor = __toESM(require("randomcolor")), import_moment3 = __toESM(require("moment")), import_jsx_runtime23 = require("react/jsx-runtime");
function Leaf2(props) {
  var color = (0, import_randomcolor.default)();
  let params = (0, import_react33.useParams)(), { user } = params, navigate = (0, import_react33.useNavigate)(), { id, title, date, tag, activeItem, onSetActiveItem } = props, [anchorEl, setAnchorEl] = import_react31.default.useState(null), open = Boolean(anchorEl), handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  }, handleActiveItem = (id2) => {
    onSetActiveItem(id2);
  }, handleClose = () => {
    setAnchorEl(null);
  }, menuItems = [
    {
      label: "View Details",
      onclick: () => {
        setAnchorEl(null), navigate(
          `/profile/${user}/${id}/${title.toLocaleLowerCase().split(" ").join("-")}/view-details`
        );
      },
      icon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        import_react32.Icon,
        {
          icon: "icon-park-outline:preview-open",
          style: { paddingRight: 10 }
        }
      )
    },
    {
      label: "Bookmark",
      onclick: () => {
      },
      icon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        import_react32.Icon,
        {
          icon: "material-symbols:bookmark-outline-sharp",
          style: { paddingRight: 10 }
        }
      )
    },
    {
      label: "Share",
      onclick: () => {
      },
      icon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        import_react32.Icon,
        {
          icon: "material-symbols:share-outline-sharp",
          style: { paddingRight: 10 }
        }
      )
    },
    {
      label: "Remove",
      onclick: () => {
      },
      icon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        import_react32.Icon,
        {
          icon: "material-symbols:delete-forever-outline",
          style: { paddingRight: 10 }
        }
      )
    }
  ], getColor = (type) => {
    switch (type) {
      case "Classical":
        return "red";
      case "Romantic":
        return "purple";
      case "Country":
        return "blue";
      case "Funk":
        return "red";
      case "HipHop":
        return "red";
      case "Metal":
        return "red";
      case "Retro":
        return "red";
      case "Rock":
        return "red";
      case "Suspence":
        return "red";
      case "Thriller":
        return "orange";
      default:
        return "green";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    import_material19.Box,
    {
      p: 1,
      display: "flex",
      justifyContent: "space-between",
      sx: {
        backgroundColor: `${id === activeItem ? "#fdf6f1" : "white"}`,
        cursor: "pointer",
        marginTop: "10px"
      },
      className: "leafCard",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_material19.Box, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_material19.Box, { display: "flex", alignItems: "center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.Link, { to: id + "/" + title.toLocaleLowerCase().split(" ").join("-"), children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              import_material19.Typography,
              {
                variant: "subtitle2",
                fontWeight: "600",
                paddingRight: 2,
                color: "black",
                onClick: () => handleActiveItem(id),
                children: title == null ? void 0 : title.toUpperCase()
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              import_material19.Button,
              {
                variant: "contained",
                sx: {
                  backgroundColor: getColor(tag),
                  padding: "0px 8px",
                  minWidth: "fit-content",
                  height: "15px",
                  fontSize: "9px"
                },
                children: tag
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            import_material19.Typography,
            {
              lineHeight: "1",
              component: "span",
              sx: {
                fontWeight: "400",
                fontSize: "8px",
                lineHeight: "10px"
              },
              children: (0, import_moment3.default)(date, "YYYYMMDD").fromNow()
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          import_material19.IconButton,
          {
            id: "basic-button",
            "aria-controls": open ? "basic-menu" : void 0,
            "aria-haspopup": "true",
            "aria-expanded": open ? "true" : void 0,
            onClick: handleClick2,
            className: "morevert",
            children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react32.Icon, { icon: "carbon:overflow-menu-vertical", className: "morevert" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          import_material19.Menu,
          {
            id: "basic-menu",
            anchorEl,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            open,
            onClose: handleClose,
            MenuListProps: {
              "aria-labelledby": "basic-button"
            },
            children: menuItems.map((menu, idx) => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_material19.MenuItem, { onClick: menu.onclick, children: [
              menu.icon,
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                import_material19.Typography,
                {
                  sx: {
                    fontWeight: "400",
                    fontSize: "10px",
                    lineHeight: "13px"
                  },
                  children: menu.label
                }
              )
            ] }, idx))
          }
        )
      ]
    }
  );
}
var leaf_default2 = Leaf2;

// app/src/components/leaf/leafs.tsx
var import_react37 = require("@remix-run/react");
var import_lab = require("@mui/lab");

// app/src/mock/filter.ts
var filter_leaf = [
  {
    filterLabel: "Leaf Type",
    name: "leaftype",
    value: "",
    type: "select",
    options: [
      { label: "All", name: "leaftype", value: "", state: !0 },
      { label: "Art", name: "leaftype", value: "Art", state: !1 },
      {
        label: "Song",
        name: "leaftype",
        value: "Song",
        state: !1
      },
      { label: "Story", name: "leaftype", value: "Story", state: !1 }
    ]
  },
  {
    filterLabel: "Genre",
    name: "genre",
    value: "",
    type: "select",
    options: [
      { label: "All", name: "genre", value: "" },
      { label: "Classical", name: "genre", value: "Classical" },
      { label: "Country", name: "genre", value: "Country" },
      { label: "Funk", name: "genre", value: "Funk" },
      { label: "HipHop", name: "genre", value: "HipHop" },
      { label: "Metal", name: "genre", value: "Metal" },
      { label: "Retro", name: "genre", value: "Retro" },
      { label: "Rock", name: "genre", value: "Rock" },
      { label: "Romantic", name: "genre", value: "Romantic" },
      { label: "Suspence", name: "genre", value: "Suspence" },
      { label: "Thriller", name: "genre", value: "Thriller" },
      { label: "Other", name: "genre", value: "Other" }
    ]
  }
];

// app/src/components/filter-field.tsx
var import_material20 = require("@mui/material"), import_jsx_runtime24 = require("react/jsx-runtime"), FilterField = (props) => {
  let { type, name, filterLabel, required, defaultValue } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_material20.Grid, { item: !0, md: 12, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_material20.Grid, { container: !0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_material20.Grid, { item: !0, md: 6, xs: 6, display: "flex", alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_material20.Typography, { children: filterLabel }) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_material20.Grid, { item: !0, md: 6, xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      import_material20.TextField,
      {
        select: !0,
        fullWidth: !0,
        variant: "standard",
        margin: "normal",
        ...props,
        SelectProps: { native: !0 },
        children: props.options.map((option, idx) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("option", { value: option.value, children: option.label }, idx))
      }
    ) })
  ] }) }) : null });
};

// app/src/components/leaf/leafs.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var nodata = "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/no_data.svg", NoContents = () => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_jsx_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("img", { style: image_style, src: nodata, alt: "Logo", width: 50, height: 50 }) }), image_style = {
  height: "100%",
  alignItems: "center",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "70%"
}, leaf_style = {
  fontWeight: "700",
  fontSize: "13px",
  lineHeight: "16px"
}, style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
};
function Leafs() {
  var _a2, _b2, _c, _d, _e;
  let navigate = (0, import_react35.useNavigate)(), data = (0, import_react37.useRouteLoaderData)("root"), [params] = (0, import_react35.useSearchParams)(), searchParams = Object.fromEntries(params.entries()), loggedInUser = data == null ? void 0 : data.username, { leafObject, userObject } = (0, import_react37.useLoaderData)(), isLoggedInUser = loggedInUser === (userObject == null ? void 0 : userObject.username), [value, setValue] = import_react36.default.useState(""), [open, setOpen] = import_react36.default.useState(!1), handleOpen = () => setOpen(!0), handleClose = () => setOpen(!1);
  (0, import_react36.useEffect)(() => {
    setValue(isLoggedInUser ? "Draft" : "Published");
  }, []), (0, import_react36.useEffect)(() => {
    setOpen(!1);
  }, [leafObject]);
  let [activeItem, setActiveItem] = import_react36.default.useState(), onSetActiveItem = (id) => {
    setActiveItem(id);
  }, handleChange = (event, newValue) => {
    setValue(newValue);
  }, handleClick2 = () => {
    data != null && data.userObject ? navigate("selectcontent") : navigate("/login");
  }, handleDelete2 = () => {
    console.info("You clicked the delete icon.");
  }, getleafs = (tab) => {
    var _a3;
    return (_a3 = leafObject == null ? void 0 : leafObject.filter(
      (item) => tab === "Draft" ? item.leafStatus === tab || item.leafStatus === null : item.leafStatus === tab
    )) == null ? void 0 : _a3.map((item) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      leaf_default2,
      {
        id: item.id,
        title: item.contentTitle,
        date: item.updatedAt || item.createdAt,
        tag: item.genre,
        onSetActiveItem,
        activeItem
      },
      item.id
    ));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    import_material21.Box,
    {
      sx: { width: "100%", overflowY: "scroll" },
      className: "scrollbar-hidden",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_lab.TabContext, { value, children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          import_material21.Box,
          {
            sx: {
              borderBottom: 0,
              borderColor: "divider",
              position: "sticky",
              top: 0,
              background: "white",
              zIndex: 2
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
              import_lab.TabList,
              {
                onChange: handleChange,
                variant: "scrollable",
                scrollButtons: "auto",
                "aria-label": "basic tabs example",
                children: [
                  isLoggedInUser && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material21.Tab, { label: "Draft", value: "Draft", style: leaf_style }),
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material21.Tab, { label: "Published", value: "Published", style: leaf_style }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material21.Tab, { label: "Released", value: "Released", style: leaf_style }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material21.Tab, { label: "Contributed", value: "Contributed", style: leaf_style }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material21.Tab, { label: "Bookmarked", value: "Bookmarked", style: leaf_style })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_jsx_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
          import_material21.Box,
          {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            sx: { margin: "1em 1.5em 0 1.5em " },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
                import_material21.Typography,
                {
                  sx: {
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "17px"
                  },
                  children: [
                    value,
                    "(",
                    leafObject.filter(
                      (item) => value === "Draft" ? item.leafStatus === value || item.leafStatus === null : item.leafStatus === value
                    ).length,
                    ")"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_material21.Box, { className: "display-f-sb-c", children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  import_material21.Chip,
                  {
                    label: "Add",
                    size: "small",
                    sx: {
                      mr: 1,
                      color: (_a2 = theme.palette) == null ? void 0 : _a2.white.main,
                      background: (_b2 = theme.palette) == null ? void 0 : _b2.primary.main,
                      ":hover": {
                        bgcolor: (_c = theme.palette) == null ? void 0 : _c.secondary.main,
                        color: theme.palette.white.main
                      }
                    },
                    onClick: handleClick2,
                    onDelete: handleDelete2,
                    deleteIcon: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                      import_react34.Icon,
                      {
                        icon: "material-symbols:add",
                        width: "20",
                        height: "20",
                        color: (_d = theme.palette) == null ? void 0 : _d.primary.main
                      }
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material21.IconButton, { onClick: handleOpen, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  import_react34.Icon,
                  {
                    icon: "material-symbols:filter-list",
                    color: theme.palette.primary.main
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  import_material21.Modal,
                  {
                    open,
                    onClose: handleClose,
                    "aria-labelledby": "modal-modal-title",
                    "aria-describedby": "modal-modal-description",
                    children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react35.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_material21.Box, { sx: style2, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                        import_material21.Typography,
                        {
                          id: "modal-modal-title",
                          variant: "h6",
                          component: "h2",
                          children: "Filter Contents"
                        }
                      ),
                      (_e = filter_leaf) == null ? void 0 : _e.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                        FilterField,
                        {
                          fullWidth: !0,
                          label: item.label,
                          name: item.name,
                          defaultValue: searchParams[`${item.name}`],
                          required: item.required,
                          type: item.type,
                          options: item.options,
                          filterLabel: item.filterLabel
                        },
                        idx
                      )),
                      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
                        import_material21.Button,
                        {
                          fullWidth: !0,
                          variant: "contained",
                          type: "submit",
                          name: "_action",
                          value: "filter_leafs",
                          children: [
                            " ",
                            "Filter"
                          ]
                        }
                      )
                    ] }) })
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lab.TabPanel, { value: "Draft", children: leafObject.filter(
          (item) => item.leafStatus === "Draft" || item.leafStatus === null
        ).length > 0 ? getleafs("Draft") : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(NoContents, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lab.TabPanel, { value: "Published", children: leafObject.filter((item) => item.leafStatus === "Published").length > 0 ? getleafs("Published") : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(NoContents, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lab.TabPanel, { value: "Released", children: leafObject.filter((item) => item.leafStatus === "Released").length > 0 ? getleafs("Released") : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(NoContents, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lab.TabPanel, { value: "Contributed", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(NoContents, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lab.TabPanel, { value: "Bookmarked", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(NoContents, {}) })
      ] })
    }
  );
}
var leafs_default = Leafs;

// app/routes/profile.$user.tsx
var import_react_router2 = require("react-router");

// app/src/styles/profile.css
var profile_default3 = "/build/_assets/profile-3YL2QSCH.css";

// app/routes/profile.$user.tsx
var import_cloudflare3 = require("@remix-run/cloudflare"), import_jsx_runtime26 = require("react/jsx-runtime"), links4 = () => [{ rel: "stylesheet", href: profile_default3 }], action2 = async ({
  request,
  params
}) => {
  let form = await request.formData(), { _action, ...values } = Object.fromEntries(form);
  if (_action === "filter_leafs") {
    let searchParams = new URLSearchParams();
    return Object.keys(values).filter((item) => values[item] !== "").forEach(function(key) {
      searchParams.set(key, values[key]);
    }), (0, import_cloudflare3.redirect)(`/profile/${params.user}?${searchParams}`);
  }
  return null;
}, loader4 = async ({ request, params }) => {
  let username = params.user, url = new URL(request.url), user = await fetcher_default(
    request,
    endpoint_default.user.user_info.replace(":username", username),
    "GET"
  ), userObject = await user.json(), leafs2 = await fetcher_default(
    request,
    endpoint_default.content.filtered_content + `?creator_id=${userObject.id}&${url.searchParams}`,
    "GET"
  ), leafObject = await (leafs2 == null ? void 0 : leafs2.json());
  if (user) {
    if (!leafs2)
      throw new Response("leafs not Found profile.$user", { status: 404 });
  } else
    throw new Response("User not Found profile.$user", { status: 404 });
  return { leafObject, userObject };
}, CatchBoundary4 = ({ error }) => /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
  error,
  ", Error on profile $user"
] });
function profile2() {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_react_split3.default, { className: "split", sizes: [20, 30, 50], minSize: 100, children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(profile_default2, {}),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(leafs_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { style: { backgroundColor: "#fcfcfc" }, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_router2.Outlet, {}) })
  ] });
}
var profile_user_default = profile2;

// app/routes/profile.$user/$type.add-content.tsx
var type_add_content_exports = {};
__export(type_add_content_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action3,
  default: () => type_add_content_default
});
var import_react39 = require("react"), import_material24 = require("@mui/material"), import_react40 = require("@remix-run/react"), import_cloudflare4 = require("@remix-run/cloudflare");

// app/src/components/button/combo-button.tsx
var import_material22 = require("@mui/material"), import_react_router3 = require("react-router");
var import_jsx_runtime27 = require("react/jsx-runtime");
function ComboButton({ name, value }) {
  var _a2, _b2, _c;
  let navigate = (0, import_react_router3.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_material22.Stack, { direction: "row", spacing: 1, children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      import_material22.Button,
      {
        size: "small",
        sx: {
          color: (_a2 = theme.palette) == null ? void 0 : _a2.primary.main,
          borderColor: (_b2 = theme.palette) == null ? void 0 : _b2.primary.main
        },
        variant: "outlined",
        onClick: () => navigate(-1),
        children: "Cancel"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      import_material22.Button,
      {
        name,
        value,
        size: "small",
        sx: { backgroundColor: (_c = theme.palette) == null ? void 0 : _c.primary.main },
        variant: "contained",
        type: "submit",
        children: "Save"
      }
    )
  ] });
}
var combo_button_default = ComboButton;

// app/src/components/draft-editor.tsx
var import_react38 = __toESM(require("react"));
var import_draft_js = require("draft-js"), import_material23 = require("@mui/material");
var import_jsx_runtime28 = require("react/jsx-runtime");
function DraftEditor({ lines, collectLineData }) {
  let [enterCount, setEnterCount] = import_react38.default.useState(0), [editorState, setEditorState] = import_react38.default.useState(
    import_draft_js.EditorState.createEmpty()
  ), handleEditorStateChange = (editorState2) => {
    let raw = (0, import_draft_js.convertToRaw)(editorState2.getCurrentContent());
    collectLineData(raw), setEditorState(editorState2);
  };
  (0, import_react38.useEffect)(() => {
    let initialMarkup = lines ? `<ol>${lines == null ? void 0 : lines.map((line) => `<li>${line[0].lineData}</li>`).join("")}<ol>` : "<ol><li></li></ol>", blocksFromHTML = (0, import_draft_js.convertFromHTML)(initialMarkup), state = import_draft_js.ContentState.createFromBlockArray(
      blocksFromHTML == null ? void 0 : blocksFromHTML.contentBlocks
    );
    setEditorState(import_draft_js.EditorState.createWithContent(state));
  }, []);
  let createEmptyBlock = () => {
    if (enterCount < 5) {
      let newBlock = new import_draft_js.ContentBlock({
        key: (0, import_draft_js.genKey)(),
        type: "ordered-list-item",
        text: ""
      }), selectionState = editorState.getSelection(), newSelectionState = selectionState.merge({
        anchorKey: newBlock.getKey(),
        anchorOffset: 0,
        focusKey: newBlock.getKey(),
        focusOffset: 0
      }), contentState = editorState.getCurrentContent(), newContentState = contentState.merge({
        blockMap: contentState.getBlockMap().set(newBlock.getKey(), newBlock),
        selectionAfter: newSelectionState
      }), newEditorState = import_draft_js.EditorState.push(
        editorState,
        newContentState,
        "split-block"
      );
      setEditorState(newEditorState);
      let currentBlockKey = selectionState.getStartKey(), currentBlockIndex = contentState.getBlockMap().toList().findIndex((block) => block.getKey() === currentBlockKey);
      setEnterCount(currentBlockIndex + 2);
    }
    return "handled";
  }, handleKeyBinding = (e) => e.key === "Backspace" ? (setEnterCount(enterCount - 1), (0, import_draft_js.getDefaultKeyBinding)(e)) : (0, import_draft_js.getDefaultKeyBinding)(e);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_material23.Box, { sx: { border: `1px solid ${theme.palette.primary.main}` }, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    import_draft_js.Editor,
    {
      editorState,
      onChange: handleEditorStateChange,
      handleReturn: () => createEmptyBlock(),
      keyBindingFn: handleKeyBinding
    }
  ) });
}

// app/routes/profile.$user/$type.add-content.tsx
var import_react_toastify2 = require("react-toastify"), import_jsx_runtime29 = require("react/jsx-runtime"), action3 = async ({ request, params }) => {
  var _a2, _b2;
  let lineDatas, form = await request.formData(), contentTitle = form.get("contentTitle"), lineData = form.get("lineData");
  lineData ? lineDatas = (_b2 = (_a2 = JSON.parse(lineData)) == null ? void 0 : _a2.blocks) == null ? void 0 : _b2.map((item, index2) => ({
    lineData: item.text,
    lineNumber: index2 + 1,
    isSelected: !0
  })) : lineDatas = [
    {
      lineData: "",
      lineNumber: 1,
      isSelected: !0
    }
  ];
  let body = JSON.stringify({
    contentTitle,
    contentRating: "G",
    genre: "Romantic",
    storyBehind: "Thunder Thunder",
    audioContentSubtype: "Audio",
    contentStatus: "Draft",
    lines: lineDatas
  }), response = await fetcher_default(
    request,
    endpoint_default.content.get_content,
    "POST",
    body
  );
  return (0, import_cloudflare4.redirect)(`/profile/${params.user}/${response.id}/${contentTitle}`);
};
function Add(error) {
  let user = getFromStorage("user"), id = user == null ? void 0 : user.id, [isEditMode, setIsEditMode] = (0, import_react39.useState)(!1), [lineData, setLineData] = (0, import_react39.useState)(), collectLineData = (lineDatas) => {
    setLineData(lineDatas);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_material24.Box, { display: "flex", flexDirection: "column", sx: { padding: "10px" }, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_react40.Form, { method: "post", style: { height: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      import_material24.Box,
      {
        display: "flex",
        justifyContent: "space-between",
        style: { height: "fit-content" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_material24.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "input",
            {
              type: "text",
              defaultValue: "UNTITLED DOCUMENT",
              name: "contentTitle",
              onFocus: (e) => e.target.select(),
              style: {
                border: "none",
                borderWidth: 0,
                boxShadow: "none",
                fontSize: "18px",
                fontWeight: "700",
                color: "#646464"
              }
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_material24.Stack, { direction: "row", spacing: 1, children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              import_material24.Chip,
              {
                label: isEditMode ? "Editing..." : "Add Content",
                size: "small",
                sx: { height: "24px", fontSize: "11px" },
                onClick: () => setIsEditMode(!0)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              import_material24.Chip,
              {
                size: "small",
                sx: { height: "24px", fontSize: "11px" },
                label: "   Add Details       ",
                onClick: () => import_react_toastify2.toast.warning("Save leaf to add details")
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              import_material24.Chip,
              {
                size: "small",
                label: "Publish",
                sx: { height: "24px", fontSize: "11px" },
                onClick: () => import_react_toastify2.toast.warning("Save leaf to publish leaf")
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_material24.Box, { style: { height: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        "input",
        {
          type: "hidden",
          name: "lineData",
          value: JSON.stringify(lineData)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { type: "hidden", name: "userId", value: id }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
        import_material24.Box,
        {
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          style: { padding: "10px", height: "calc(95vh - 70px)" },
          children: [
            isEditMode ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(DraftEditor, { collectLineData }) : /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_material24.Typography, { variant: "caption", onClick: () => setIsEditMode(!0), children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("em", { children: "Start adding content by clicking 'Add content' button or simply start by clicking here...." }) }),
            isEditMode && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_material24.Box, { display: "flex", justifyContent: "flex-end", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(combo_button_default, { name: "_action", value: "post_details" }) })
          ]
        }
      )
    ] })
  ] }) });
}
var type_add_content_default = Add;
function ErrorBoundary({ error }) {
  return Add(error.message);
}

// app/routes/profile.$user/selectcontent.tsx
var selectcontent_exports = {};
__export(selectcontent_exports, {
  default: () => selectcontent_default
});
var import_material25 = require("@mui/material");

// app/src/components/cards/new-leaf.tsx
var import_react41 = require("@remix-run/react"), import_Box2 = __toESM(require("@mui/material/Box")), import_Card = __toESM(require("@mui/material/Card")), import_CardContent = __toESM(require("@mui/material/CardContent")), import_CardMedia = __toESM(require("@mui/material/CardMedia")), import_Typography = __toESM(require("@mui/material/Typography"));

// app/src/config/slugify.tsx
var Slugify = (title) => title == null ? void 0 : title.trim().toLowerCase().split(" ").join("-"), Unslugify = (slug) => slug == null ? void 0 : slug.trim().split("-").join(" ").toUpperCase();

// app/src/components/cards/new-leaf.tsx
var import_react42 = require("@remix-run/react"), import_jsx_runtime30 = require("react/jsx-runtime");
function NewLeaf(props) {
  let { type, detail, image } = props, param = (0, import_react42.useParams)();
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react41.Link, { to: `/profile/${param.user}/` + Slugify(type) + "/add-content", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
    import_Card.default,
    {
      sx: { display: "flex", cursor: "pointer", backgroundColor: "white" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          import_CardMedia.default,
          {
            component: "img",
            sx: { width: 100 },
            image,
            alt: "Live from space album cover"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_Box2.default, { sx: { display: "flex", flexDirection: "column" }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_CardContent.default, { sx: { flex: "1 0 auto" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_Typography.default, { component: "div", variant: "subtitle1", children: type }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_Typography.default,
            {
              color: "text.secondary",
              component: "div",
              sx: {
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "14px"
              },
              children: detail
            }
          )
        ] }) })
      ]
    }
  ) });
}

// app/routes/profile.$user/selectcontent.tsx
var import_react43 = require("@iconify/react"), import_react_router4 = require("react-router");
var import_jsx_runtime31 = require("react/jsx-runtime"), song = "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/song.svg", poem = "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/story.svg", story = "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/poem.svg", leafs = [
  {
    type: "Song",
    detail: " This category includes song creation, composition, lyrics            contribution",
    image: song
  },
  {
    type: "Story",
    detail: " This category includes song creation, composition, lyrics            contribution",
    image: story
  },
  {
    type: "Art",
    detail: " This category includes song creation, composition, lyrics            contribution",
    image: story
  },
  {
    type: "Poem",
    detail: " This category includes song creation, composition, lyrics            contribution",
    image: poem
  },
  {
    type: "Comic Strips",
    detail: " This category includes song creation, composition, lyrics            contribution",
    image: poem
  },
  {
    type: "Standup Comedy",
    detail: " This category includes song creation, composition, lyrics            contribution",
    image: song
  }
];
function SelectContent() {
  let navigate = (0, import_react_router4.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_material25.Box, { sx: { p: 2 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_material25.Box, { display: "flex", justifyContent: "space-between", sx: { pb: 5 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        import_material25.Typography,
        {
          sx: {
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "24px",
            color: theme.palette.primary.main
          },
          children: "Select Content Category"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        import_react43.Icon,
        {
          icon: "mdi:multiply",
          width: "20",
          height: "20",
          onClick: () => {
            navigate(-1);
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material25.Grid, { container: !0, columnSpacing: 2, rowSpacing: 5, children: leafs.map((item, index2) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material25.Grid, { item: !0, xs: 6, md: 6, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      NewLeaf,
      {
        type: item.type,
        detail: item.detail,
        image: item.image
      }
    ) }, index2)) })
  ] });
}
var selectcontent_default = SelectContent;

// app/routes/profile.$user/$id.$title.tsx
var id_title_exports2 = {};
__export(id_title_exports2, {
  default: () => id_title_default
});
var import_material26 = require("@mui/material"), import_react_router5 = require("react-router"), import_jsx_runtime32 = require("react/jsx-runtime");
function Content() {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    import_material26.Box,
    {
      display: "flex",
      flexDirection: "column",
      sx: { width: "100%", overflowY: "scroll" },
      className: "lines",
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_router5.Outlet, {})
    }
  );
}
var id_title_default = Content;

// app/routes/profile.$user/$id.$title/form-details.tsx
var form_details_exports = {};
__export(form_details_exports, {
  CatchBoundary: () => CatchBoundary5,
  action: () => action4,
  default: () => form_details_default,
  loader: () => loader5
});
var import_material28 = require("@mui/material"), import_react46 = require("@remix-run/react");

// app/src/components/form-field.tsx
var import_react44 = require("@iconify/react"), import_material27 = require("@mui/material"), import_react45 = require("react"), import_react_dropzone = __toESM(require("react-dropzone")), import_jsx_runtime33 = require("react/jsx-runtime"), FormField = (props) => {
  let { type, name, label, required, defaultValue } = props, [file, setFile] = (0, import_react45.useState)();
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_jsx_runtime33.Fragment, { children: type === "text" || type === "tel" || type === "email" || type === "number" || type === "date" ? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material27.Grid, { item: !0, md: 12, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_material27.TextField,
    {
      fullWidth: !0,
      margin: "normal",
      variant: "outlined",
      size: "small",
      ...props
    }
  ) }) : type === "file" ? /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_material27.Grid, { item: !0, md: 12, xs: 12, children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      import_material27.Typography,
      {
        sx: {
          fontSize: "14px",
          color: "#646464"
        },
        children: "Content Cover"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material27.Box, { style: { border: "1px dashed black" }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      import_react_dropzone.default,
      {
        onDrop: (acceptedFiles) => {
          setFile(acceptedFiles.map((file2) => URL.createObjectURL(file2)));
        },
        children: ({ getRootProps, getInputProps }) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { ...getRootProps(), children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { ...getInputProps() }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
            "p",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                padding: "14px",
                fontSize: "12px",
                color: "#646464"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                  import_react44.Icon,
                  {
                    icon: "material-symbols:cloud-upload",
                    width: 30,
                    color: "#838383"
                  }
                ),
                "Click to upload or drag and drop ",
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
                "SVG, PNG, JPG or GIF (max 800X400px)"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            import_material27.Box,
            {
              display: "flex",
              justifyContent: "end",
              sx: { p: 1, cursor: "hover" },
              children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material27.Tooltip, { title: "Content with a cover image get 23x more engagement than ones without.", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react44.Icon, { icon: "ic:outline-info" }) })
            }
          )
        ] }) })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "img",
      {
        src: file,
        alt: "",
        style: {
          objectFit: "contain",
          height: "auto",
          width: "150px"
        }
      }
    )
  ] }) : type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material27.Grid, { item: !0, md: 12, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_material27.TextField,
    {
      select: !0,
      fullWidth: !0,
      margin: "normal",
      variant: "outlined",
      ...props,
      size: "small",
      SelectProps: { native: !0 },
      children: props.options.map((option, idx) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("option", { value: option.value, children: option.label }, idx))
    }
  ) }) : type === "radio" ? /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_material27.FormControl, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material27.FormLabel, { id: "demo-row-radio-buttons-group-label", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
      import_material27.RadioGroup,
      {
        row: !0,
        "aria-labelledby": "demo-row-radio-buttons-group-label",
        name: "row-radio-buttons-group",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            import_material27.FormControlLabel,
            {
              value: "female",
              control: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material27.Radio, {}),
              label: "Female"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material27.FormControlLabel, { value: "male", control: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material27.Radio, {}), label: "Male" }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material27.FormControlLabel, { value: "other", control: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material27.Radio, {}), label: "Other" }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            import_material27.FormControlLabel,
            {
              value: "disabled",
              disabled: !0,
              control: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material27.Radio, {}),
              label: "other"
            }
          )
        ]
      }
    )
  ] }) : type === "tag" ? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_material27.Autocomplete,
    {
      multiple: !0,
      id: "tags-outlined",
      options: props.options,
      getOptionLabel: (option) => option.label,
      filterSelectedOptions: !0,
      renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material27.TextField, { ...params, label: "Tags", size: "small" })
    }
  ) : null });
};

// app/src/mock/fields.ts
var leaf = [
  {
    label: "Content Title",
    name: "contentTitle",
    value: "Content Title",
    type: "text"
  },
  {
    label: "Content SubType",
    name: "leafSubtype",
    value: "",
    type: "select",
    options: [
      { label: "Audio", name: "leafSubtype", value: "Audio", state: !0 },
      {
        label: "Composition",
        name: "leafSubtype",
        value: "Composition",
        state: !1
      },
      { label: "Lyrics", name: "leafSubtype", value: "Lyrics", state: !1 }
    ]
  },
  {
    label: "Content Cover",
    name: "cover",
    value: "",
    type: "file"
  },
  {
    label: "Genre",
    name: "genre",
    value: "",
    type: "select",
    options: [
      { label: "Classical", name: "genre", value: "Classical" },
      { label: "Country", name: "genre", value: "Country" },
      { label: "Funk", name: "genre", value: "Funk" },
      { label: "HipHop", name: "genre", value: "HipHop" },
      { label: "Metal", name: "genre", value: "Metal" },
      { label: "Retro", name: "genre", value: "Retro" },
      { label: "Rock", name: "genre", value: "Rock" },
      { label: "Romantic", name: "genre", value: "Romantic" },
      { label: "Suspence", name: "genre", value: "Suspence" },
      { label: "Thriller", name: "genre", value: "Thriller" },
      { label: "Other", name: "genre", value: "Other" }
    ]
  },
  {
    label: "Content Visiblility",
    name: "contentVisibility",
    type: "select",
    options: [
      { label: "Public", name: "contentVisibility", value: !1 },
      { label: "Private", name: "contentVisibility", value: !0 }
    ]
  },
  {
    label: "Content Rating",
    name: "contentRating",
    value: "G",
    type: "select",
    options: [
      { label: "G Rated", name: "contentRating", value: "G" },
      { label: "PG Rated", name: "contentRating", value: "PG" },
      { label: "PG-13 rated", name: "contentRating", value: "PG-13" },
      { label: "R rated", name: "contentRating", value: "R" }
    ]
  },
  {
    label: "Assign Moderators",
    name: "contentRating",
    value: "G",
    type: "select",
    options: [
      { label: "Ganesh", name: "contentRating", value: "G" },
      { label: "Saken", name: "contentRating", value: "PG" }
    ]
  },
  {
    label: "Max. Number of Lines",
    name: "maxNoOfLines",
    type: "number"
  },
  {
    label: "Tags",
    name: "contentTitle",
    value: "Content Title",
    type: "tag",
    options: [
      { label: "song", name: "contentRating", value: "G" },
      { label: "story", name: "contentRating", value: "PG" }
    ]
  },
  {
    label: "Story",
    name: "storyBehind",
    value: "",
    type: "text"
  }
];

// app/routes/profile.$user/$id.$title/form-details.tsx
var import_cloudflare5 = require("@remix-run/cloudflare"), import_react47 = require("@remix-run/react"), Z = __toESM(require("zod"));

// app/utils/validation.ts
async function validation({
  form,
  schema: schema3
}) {
  let body = Object.fromEntries(form);
  try {
    return { formData: schema3.parse(body), errors: null };
  } catch (e) {
    return {
      formData: body,
      errors: e.issues.reduce((acc, curr) => {
        let key = curr.path[0];
        return acc[key] = curr.message, acc;
      }, {})
    };
  }
}

// app/routes/profile.$user/$id.$title/form-details.tsx
var import_jsx_runtime34 = require("react/jsx-runtime"), schema = Z.object({
  contentTitle: Z.string().nonempty("Content Title is required"),
  genre: Z.string(),
  contentVisibility: Z.string(),
  contentRating: Z.string(),
  maxNoOfLines: Z.string(),
  storyBehind: Z.string(),
  leafSubtype: Z.string()
});
async function loader5({ params, request }) {
  let leaf__detail = await fetcher_default(
    request,
    endpoint_default.content.get_content_by_id.replace(":id", params == null ? void 0 : params.id),
    "GET"
  );
  if (!leaf__detail)
    throw new Response("User not Found, form-detail", { status: 404 });
  return { leaf__detail };
}
var CatchBoundary5 = ({ error }) => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, { children: [
  error,
  ", Error on form detail"
] }), action4 = async ({
  request,
  params
}) => {
  let form = await request.formData(), { formData, errors } = await validation({
    form,
    schema
  });
  if (errors)
    return errors;
  let body = JSON.stringify(formData), res = await fetcher_default(
    request,
    endpoint_default.content.get_content_by_id.replace(":id", params.id),
    "PATCH",
    body
  );
  return (0, import_cloudflare5.redirect)(
    `/profile/${params.user}/${params.id}/${formData == null ? void 0 : formData.contentTitle}`
  );
};
function FormDetails() {
  var _a2;
  let data = (0, import_react46.useActionData)(), { leaf__detail } = (0, import_react46.useLoaderData)(), transition = (0, import_react47.useTransition)();
  return console.log(
    transition.state,
    transition.type,
    transition.submission,
    transition.location
  ), /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react46.Form, { method: "post", style: { padding: "16px" }, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    import_material28.Box,
    {
      sx: {
        width: "100%"
      },
      className: "scrollbar-hidden",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_material28.Box, { display: "flex", justifyContent: "space-between", sx: { pb: 4 }, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          import_material28.Typography,
          {
            sx: {
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              color: theme.palette.primary.main
            },
            children: "Add Content Details"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
          import_material28.Box,
          {
            sx: {
              flexDirection: "column",
              display: "flex",
              justifyContent: "space-between"
            },
            children: [
              (_a2 = leaf) == null ? void 0 : _a2.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
                FormField,
                {
                  fullWidth: !0,
                  label: item.label,
                  name: item.name,
                  required: item.required,
                  defaultValue: leaf__detail[`${item.name}`] || item.value,
                  variant: "outlined",
                  type: item.type,
                  options: item.options,
                  error: data ? !!data[item.name] : null,
                  helperText: data ? data[item.name] : null
                },
                idx
              )),
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_material28.Box, { display: "flex", justifyContent: "flex-end", mb: 4, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(combo_button_default, { name: "_action", value: "update_details" }) })
            ]
          }
        )
      ]
    }
  ) });
}
var form_details_default = FormDetails;

// app/routes/profile.$user/$id.$title/view-details.tsx
var view_details_exports = {};
__export(view_details_exports, {
  default: () => view_details_default,
  loader: () => loader6
});
var import_react48 = require("@iconify/react"), import_material31 = require("@mui/material"), import_react49 = require("@remix-run/react"), import_react50 = require("react");

// app/src/components/button/small-button.tsx
var import_material29 = require("@mui/material"), import_jsx_runtime35 = require("react/jsx-runtime");
function SmallButton({ title, backgroundColor, variant }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    import_material29.Button,
    {
      variant: variant ? "outlined" : "contained",
      sx: {
        backgroundColor,
        padding: "0px 8px",
        minWidth: "fit-content",
        height: "15px",
        fontSize: "9px"
      },
      children: title
    }
  );
}
var small_button_default = SmallButton;

// app/src/components/typography/title.tsx
var import_material30 = require("@mui/material"), import_jsx_runtime36 = require("react/jsx-runtime");
function Title({ title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    import_material30.Typography,
    {
      sx: {
        fontWeight: "700",
        fontSize: "13px",
        lineHeight: "16px",
        color: "#646464"
      },
      children: title
    }
  );
}
function ContentTitle({ title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    import_material30.Typography,
    {
      sx: {
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "24px",
        color: "#3C8A8B"
      },
      children: title
    }
  );
}
function Detail({ detail }) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    import_material30.Typography,
    {
      sx: {
        fontWeight: "400",
        fontSize: "8px",
        lineHeight: "10px",
        color: "#646464"
      },
      children: detail
    }
  );
}

// app/routes/profile.$user/$id.$title/view-details.tsx
var import_jsx_runtime37 = require("react/jsx-runtime"), loader6 = async ({ request, params }) => {
  let res = await fetcher_default(
    request,
    endpoint_default.content.get_content_by_id.replace(":id", params.id),
    "GET"
  );
  if (!res)
    throw new Response("User not Found, id title index", { status: 404 });
  return res;
};
function TabPanel2(props) {
  let { children, value, index: index2, ...other } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "div",
    {
      role: "tabpanel",
      hidden: value !== index2,
      id: `simple-tabpanel-${index2}`,
      "aria-labelledby": `simple-tab-${index2}`,
      ...other,
      children: value === index2 && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_material31.Box, { sx: { p: 3 }, children })
    }
  );
}
function a11yProps(index2) {
  return {
    id: `simple-tab-${index2}`,
    "aria-controls": `simple-tabpanel-${index2}`
  };
}
function AccessPanel({ title, detail, userAvatar, button }) {
  var _a2;
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_material31.Box, { sx: { my: 1.5 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Title, { title }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_material31.Box, { className: "display-f-sb-c", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_material31.Box, { className: "display-f-sb-c", sx: { my: 1 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          import_material31.Avatar,
          {
            alt: "Remy Sharp",
            src: "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/1.jpg",
            sx: { width: 24, height: 24 }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          import_material31.Divider,
          {
            orientation: "vertical",
            variant: "middle",
            flexItem: !0,
            sx: { mx: 1, my: 0, backgroundColor: (_a2 = theme.palette) == null ? void 0 : _a2.primary.main }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
          import_material31.AvatarGroup,
          {
            total: 4,
            sx: {
              "& .MuiAvatar-root": { width: 24, height: 24, fontSize: 15 }
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                import_material31.Avatar,
                {
                  alt: "Remy Sharp",
                  sx: { width: 24, height: 24 },
                  src: "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/1.jpg"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                import_material31.Avatar,
                {
                  alt: "Travis Howard",
                  sx: { width: 24, height: 24 },
                  src: "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/2.jpg"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                import_material31.Avatar,
                {
                  alt: "Agnes Walker",
                  sx: { width: 24, height: 24 },
                  src: "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/4.jpg"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                import_material31.Avatar,
                {
                  alt: "Trevor Henderson",
                  sx: { width: 24, height: 24 },
                  src: "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/5.jpg"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                import_material31.Avatar,
                {
                  alt: "Trevor Henderson",
                  sx: { width: 24, height: 24 },
                  src: "https://pub-08e0dc6ce1af4384909afe775054c682.r2.dev/images/avatar/5.jpg"
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        import_material31.Button,
        {
          variant: "contained",
          sx: { fontSize: "10px", lineHeight: "13px" },
          children: button
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Detail, { detail })
  ] });
}
var NotificationItem = ({ notification }) => {
  var _a2;
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_material31.Box, { display: "flex", alignItems: "center", sx: { py: 1 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      import_material31.Avatar,
      {
        alt: "Trevor Henderson",
        sx: { width: 24, height: 24 },
        src: "/static/images/avatar/5.jpg"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      import_material31.Divider,
      {
        orientation: "vertical",
        variant: "middle",
        flexItem: !0,
        sx: { mx: 1, my: 0, backgroundColor: (_a2 = theme.palette) == null ? void 0 : _a2.primary.main }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_material31.Box, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_material31.Typography, { sx: { fontSize: "10px", lineHeight: "12px" }, children: notification }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_material31.Typography, { sx: { fontSize: "8px", lineHeight: "10px" }, children: "2:22PM" })
    ] })
  ] });
};
function ViewDetails() {
  let data = (0, import_react49.useLoaderData)(), {
    creator,
    storyBehind,
    maxNoOfLines,
    leafStatus,
    leafSubtype,
    createdAt,
    updatedAt
  } = data, navigate = (0, import_react49.useNavigate)(), [value, setValue] = (0, import_react50.useState)(0), handleChange = (event, newValue) => {
    setValue(newValue);
  }, rightComponent = [
    {
      title: "Content Type",
      component: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(small_button_default, { title: leafSubtype || "Song", backgroundColor: "#5FD100" })
    },
    {
      title: "Number of lines",
      component: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Detail, { detail: maxNoOfLines })
    },
    {
      title: "Content Status",
      component: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(small_button_default, { title: leafStatus || "Draft", variant: "outlined" })
    },
    {
      title: "Owner",
      component: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Detail, { detail: creator.username })
    },
    {
      title: "Modified",
      component: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Detail, { detail: updatedAt.slice(0, 10) || createdAt.slice(0, 10) })
    },
    {
      title: "Content Story",
      component: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(small_button_default, { title: storyBehind })
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_material31.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_material31.Box, { className: "display-f-sb-c", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_material31.Box, { display: "flex", alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          import_react48.Icon,
          {
            icon: "ic:round-music-note",
            style: {
              backgroundColor: "#5FD100",
              borderRadius: "50%",
              padding: "3px",
              color: "white",
              marginRight: "5px"
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ContentTitle, { title: "Photograph" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_material31.Box, { onClick: () => navigate(-1), children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react48.Icon, { icon: "akar-icons:cross" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_material31.Box, { sx: { width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_material31.Box, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
        import_material31.Tabs,
        {
          value,
          onChange: handleChange,
          "aria-label": "basic tabs example",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
              import_material31.Tab,
              {
                label: "View Details",
                ...a11yProps(0),
                sx: { fontSize: "14px", fontWeight: 400, lineHeight: "15px" }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
              import_material31.Tab,
              {
                label: "Activity",
                ...a11yProps(1),
                sx: { fontSize: "14px", fontWeight: 400, lineHeight: "18px" }
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(TabPanel2, { value, index: 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          AccessPanel,
          {
            title: "Who has access",
            detail: "Owned by you. Public Content",
            userAvatar: "test",
            button: "Manage Access"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          AccessPanel,
          {
            title: "Content Moderators",
            detail: `You are primary moderator. Samantha, Olaf and Kristoff are other moderators.
            Moderators are responsible to make sure all the rules and regulations are being followed. They have the right to take actions against content collaborators like to ban/remove them from this particular content in case of any misconduct(only if they have valid proof).
            `,
            userAvatar: "test",
            button: "    Manage Moderators            "
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_material31.Divider, { flexItem: !0, sx: { my: 1.5 } }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_material31.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Title, { title: "Content Details" }) }),
        rightComponent.map((item, index2) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_material31.Grid, { container: !0, spacing: 2, children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_material31.Grid, { item: !0, xs: 8, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            import_material31.Typography,
            {
              sx: {
                fontWeight: "500",
                fontSize: "10px",
                lineHeight: "12px",
                my: 1.5
              },
              children: item.title
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_material31.Grid, { item: !0, xs: 4, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_material31.Box, { children: item.component }) })
        ] }, index2))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(TabPanel2, { value, index: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Title, { title: "Today" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(NotificationItem, { notification: "You edited the content in PHOTOGRAPH " }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(NotificationItem, { notification: "You edited the content in PHOTOGRAPH " }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(NotificationItem, { notification: "You edited the content in PHOTOGRAPH " }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(NotificationItem, { notification: "You edited the content in PHOTOGRAPH " }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(NotificationItem, { notification: "You edited the content in PHOTOGRAPH " }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(NotificationItem, { notification: "You edited the content in PHOTOGRAPH " }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(NotificationItem, { notification: "You edited the content in PHOTOGRAPH " }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(NotificationItem, { notification: "You edited the content in PHOTOGRAPH " }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(NotificationItem, { notification: "You edited the content in PHOTOGRAPH " })
      ] })
    ] })
  ] });
}
var view_details_default = ViewDetails;

// app/routes/profile.$user/$id.$title/index.tsx
var id_exports2 = {};
__export(id_exports2, {
  CatchBoundary: () => CatchBoundary6,
  action: () => action5,
  default: () => index,
  loader: () => loader7
});
var import_material32 = require("@mui/material"), import_react52 = require("@remix-run/react");

// app/src/components/grouped-avatar.tsx
var import_Avatar = __toESM(require("@mui/material/Avatar")), import_AvatarGroup = __toESM(require("@mui/material/AvatarGroup")), import_styles6 = require("@mui/material/styles"), import_jsx_runtime38 = require("react/jsx-runtime"), import_react51 = require("react"), SmallAvatar = (0, import_styles6.styled)(import_Avatar.default)(({ theme: theme2 }) => ({
  width: 24,
  height: 24,
  border: `2px solid ${theme2.palette.background.paper}`
})), GroupedAvatar = ({ total, images, style: style5 }) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
  import_AvatarGroup.default,
  {
    total,
    style: style5,
    children: images == null ? void 0 : images.map((image, idx) => /* @__PURE__ */ (0, import_react51.createElement)(SmallAvatar, { ...image, key: idx }))
  }
), grouped_avatar_default = GroupedAvatar;

// app/routes/profile.$user/$id.$title/index.tsx
var import_faker = require("@faker-js/faker"), import_react53 = require("react");
var import_jsx_runtime39 = require("react/jsx-runtime"), style3 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
}, loader7 = async ({ request, params }) => {
  let res = await fetcher_default(
    request,
    endpoint_default.content.get_content_by_id.replace(":id", params.id),
    "GET"
  );
  if (!res)
    throw new Response("User not Found, id title index", { status: 404 });
  return res;
}, action5 = async ({
  request,
  params
}) => {
  let form = await request.formData(), { _action } = Object.fromEntries(form), body;
  return _action === "publish" ? body = JSON.stringify({
    leafStatus: "Published"
  }) : _action === "release" && (body = JSON.stringify({
    leafStatus: "Released"
  })), fetcher_default(
    request,
    endpoint_default.content.get_content_by_id.replace(":id", params.id),
    "PATCH",
    body
  ), null;
}, CatchBoundary6 = ({ error }) => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_jsx_runtime39.Fragment, { children: [
  error,
  ", Error on id title index"
] });
function index() {
  let navigate = (0, import_react52.useNavigate)(), matches = (0, import_react52.useMatches)(), param = (0, import_react52.useParams)(), data = (0, import_react52.useLoaderData)(), [open, setOpen] = (0, import_react53.useState)(!1), userDetail = (0, import_react52.useRouteLoaderData)("root"), loggedInUser = userDetail == null ? void 0 : userDetail.username, isLoggedInUser = loggedInUser === (param == null ? void 0 : param.user), { leafStatus, lines } = data, lineArray = Object.values(lines[0]), chips = [
    {
      label: "Edit",
      route: "edit",
      disabled: leafStatus === "Released" || leafStatus === "Published",
      handleChipClick: function() {
        (leafStatus === null || leafStatus === "Draft") && navigate("edit");
      }
    },
    {
      label: "Edit Details",
      route: "details",
      handleChipClick: function() {
        matches[3].id === "routes/profile.$user/$id.$title/edit" ? setOpen(!0) : navigate("form-details");
      }
    }
  ], handleClose = () => setOpen(!1), getAvatars = (num = 4) => [...Array(num)].map((v) => ({
    src: import_faker.faker.image.avatar(),
    alt: import_faker.faker.name.fullName()
  })), buttons2 = [
    { name: "Save Changes" },
    { name: "Don't Save" },
    { name: "Cancel" }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    import_material32.Box,
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      style: { height: "calc(100vh - 60px)" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_material32.Box, { p: 1, children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_material32.Box, { display: "flex", justifyContent: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_material32.Box, { display: "flex", flexDirection: "column", sx: { pb: 5 }, children: [
              matches[3].id !== "routes/profile.$user/$id.$title/index" ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                "input",
                {
                  type: "text",
                  defaultValue: Unslugify(param.title),
                  name: "contentTitle",
                  onFocus: (e) => e.target.select(),
                  className: "content-title-input"
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_material32.Typography, { className: "content-title", children: Unslugify(param.title) }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                import_material32.Typography,
                {
                  sx: {
                    fontSize: "10px",
                    fontWeight: "400",
                    lineHeight: "13px"
                  },
                  children: "2022-05-05"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_material32.Box, { display: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(grouped_avatar_default, { total: 5, images: getAvatars(20) }),
              isLoggedInUser && /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_material32.Stack, { direction: "row", spacing: 1, sx: { pl: 1 }, children: [
                chips.map((chip, idx) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                  import_material32.Chip,
                  {
                    label: chip.label,
                    size: "small",
                    onClick: (e) => chip.handleChipClick(e),
                    disabled: chip == null ? void 0 : chip.disabled,
                    sx: {
                      cursor: "pointer",
                      fontSize: "10px",
                      fontWeight: "400",
                      lineHeight: "13px"
                    }
                  },
                  idx
                )),
                leafStatus !== "Released" && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react52.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                  import_material32.Button,
                  {
                    variant: "contained",
                    className: "chip-button",
                    type: "submit",
                    name: "_action",
                    value: leafStatus === null || leafStatus === "Draft" ? "publish" : "release",
                    children: leafStatus === null || leafStatus === "Draft" ? "Publish" : "Release"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              import_material32.Modal,
              {
                open,
                onClose: handleClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_material32.Box, { sx: style3, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                    import_material32.Typography,
                    {
                      id: "modal-modal-title",
                      component: "h2",
                      sx: {
                        fontWeight: "700",
                        fontSize: "18px",
                        lineHeight: "22px",
                        mb: 3
                      },
                      children: "Do you want to save the changes to Photograph ?"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_material32.Box, { display: "flex", justifyContent: "end", children: buttons2.map((button, index2) => {
                    var _a2, _b2;
                    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                      import_material32.Button,
                      {
                        className: "outlined__button",
                        sx: {
                          color: (_a2 = theme.palette) == null ? void 0 : _a2.primary.main,
                          borderColor: (_b2 = theme.palette) == null ? void 0 : _b2.primary.main,
                          ml: 1,
                          fontWeight: "700",
                          fontSize: "14px",
                          lineHeight: "17px"
                        },
                        variant: "outlined",
                        onClick: () => setOpen(!1),
                        children: button.name
                      },
                      index2
                    );
                  }) })
                ] })
              }
            )
          ] }),
          lineArray.map(
            (item, index2) => item[0].isSelected === !0 && /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_material32.Stack, { direction: "row", spacing: 1.5, children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                import_material32.Typography,
                {
                  style: {
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "red"
                  },
                  children: index2 + 1
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                import_material32.Typography,
                {
                  style: {
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "18px"
                  },
                  children: item[0].lineData
                }
              )
            ] }, index2)
          )
        ] }),
        data.leafStatus === "Published" && loggedInUser && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_material32.Box, { display: "flex", justifyContent: "flex-end", p: 0.5, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react52.Link, { to: "/contribution/" + param.id + "/" + param.title, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_material32.Button, { size: "small", variant: "contained", children: "Contribute" }) }) })
      ]
    }
  );
}

// app/routes/profile.$user/$id.$title/edit.tsx
var edit_exports = {};
__export(edit_exports, {
  action: () => action6,
  default: () => edit_default,
  loader: () => loader8
});
var import_material33 = require("@mui/material"), import_cloudflare6 = require("@remix-run/cloudflare"), import_react54 = require("@remix-run/react"), import_react55 = require("react");
var import_faker2 = require("@faker-js/faker");
var import_react_toastify3 = require("react-toastify"), import_jsx_runtime40 = require("react/jsx-runtime"), style4 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
}, _a, _b, buttonStyle = {
  color: (_a = theme.palette) == null ? void 0 : _a.primary.main,
  borderColor: (_b = theme.palette) == null ? void 0 : _b.primary.main,
  ml: 1,
  fontWeight: "700",
  fontSize: "14px",
  lineHeight: "17px"
}, loader8 = async ({ request, params }) => await fetcher_default(
  request,
  endpoint_default.content.get_content_by_id.replace(":id", params.id),
  "GET"
), action6 = async ({
  request,
  params
}) => {
  var _a2;
  let form = await request.formData(), { _action } = Object.fromEntries(form);
  if (_action === "post_details") {
    let contentTitle = form.get("contentTitle"), lines = JSON.parse(form.get("lines")), prevLines = JSON.parse(form.get("prevLines")), userId = form.get("userId"), body = JSON.stringify({
      contentTitle
    });
    return fetcher_default(
      request,
      endpoint_default.content.get_content_by_id.replace(":id", params.id),
      "PATCH",
      body
    ), (_a2 = lines == null ? void 0 : lines.blocks) == null || _a2.map((item, index2) => {
      if (index2 < prevLines.length) {
        let body2 = JSON.stringify({
          lineData: item.text,
          creatorId: userId,
          lineNumber: index2 + 1,
          contentId: params.id,
          isSelected: !0
        }), endpoint = endpoint_default.line.leaf_line_id.replace(
          ":id",
          prevLines[index2][0].id
        ), res = fetcher_default(request, endpoint, "PUT", body2);
      } else {
        let body2 = JSON.stringify({
          lineData: item.text,
          creatorId: userId,
          lineNumber: index2 + 1,
          contentId: params.id,
          isSelected: !0
        }), res = fetcher_default(request, endpoint_default.line.leaf_line, "POST", body2);
      }
    }), (0, import_cloudflare6.redirect)(`/profile/${params.user}/${params.id}/${contentTitle}`);
  } else {
    let body = JSON.stringify({
      leafStatus: "Published"
    });
    fetcher_default(
      request,
      endpoint_default.content.get_content_by_id.replace(":id", params.id),
      "PATCH",
      body
    );
  }
  return null;
};
function edit() {
  let navigate = (0, import_react54.useNavigate)(), param = (0, import_react54.useParams)(), userDetail = (0, import_react54.useRouteLoaderData)("root"), isLoggedInUser = (userDetail == null ? void 0 : userDetail.username) === (param == null ? void 0 : param.user), matches = (0, import_react54.useMatches)(), user = getFromStorage("user"), id = user == null ? void 0 : user.id, submit = (0, import_react54.useSubmit)(), data = (0, import_react54.useLoaderData)(), { lines } = data, lineArray = Object.values(lines[0]), [lineData, setLineData] = (0, import_react55.useState)(), [open, setOpen] = (0, import_react55.useState)(!1), handleClose = () => setOpen(!1), collectLineData = (lines2) => {
    setLineData(lines2);
  }, chips = [
    {
      label: "Editing..",
      route: "edit",
      handleChipClick: function() {
        navigate("");
      }
    },
    {
      label: "Edit Details",
      route: "details",
      handleChipClick: function() {
        import_react_toastify3.toast.warning("Save leaf to edit details");
      }
    },
    {
      label: "Publish",
      route: "publish",
      handleChipClick: function(e) {
        import_react_toastify3.toast.warning("Save leaf to Publish");
      }
    }
  ], getAvatars = (num = 4) => [...Array(num)].map((v) => ({
    src: import_faker2.faker.image.avatar(),
    alt: import_faker2.faker.name.fullName()
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react54.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
    import_material33.Box,
    {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      sx: { p: 1 },
      style: { height: "calc(100vh - 75px)" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_material33.Box, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_material33.Box, { display: "flex", justifyContent: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_material33.Box, { display: "flex", flexDirection: "column", sx: { pb: 5 }, children: [
              matches[3].id !== "routes/profile.$user/$id.$title/index" ? /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                "input",
                {
                  type: "text",
                  defaultValue: Unslugify(param.title),
                  name: "contentTitle",
                  onFocus: (e) => e.target.select(),
                  className: "content-title-input"
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_material33.Typography, { className: "content-title", children: Unslugify(param.title) }),
              /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                import_material33.Typography,
                {
                  sx: {
                    fontSize: "10px",
                    fontWeight: "400",
                    lineHeight: "13px"
                  },
                  children: "2022-05-05"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_material33.Box, { display: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(grouped_avatar_default, { total: 5, images: getAvatars(20) }),
              isLoggedInUser && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_material33.Stack, { direction: "row", spacing: 1, sx: { pl: 1 }, children: chips.map((chip, idx) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                import_material33.Chip,
                {
                  label: chip.label,
                  size: "small",
                  onClick: (e) => chip.handleChipClick(e),
                  disabled: chip.label === "Editing..",
                  sx: {
                    cursor: "pointer",
                    fontSize: "10px",
                    fontWeight: "400",
                    lineHeight: "13px"
                  }
                },
                idx
              )) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
              import_material33.Modal,
              {
                open,
                onClose: handleClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_material33.Box, { sx: style4, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                    import_material33.Typography,
                    {
                      id: "modal-modal-title",
                      component: "h2",
                      sx: {
                        fontWeight: "700",
                        fontSize: "18px",
                        lineHeight: "22px",
                        mb: 3
                      },
                      children: "Do you want to save the changes to Photograph ?"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react54.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_material33.Box, { display: "flex", justifyContent: "end", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                      import_material33.Button,
                      {
                        className: "outlined__button",
                        onClick: () => navigate(`${matches[2].pathname}`),
                        sx: buttonStyle,
                        variant: "outlined",
                        children: "Save Changes"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                      import_material33.Button,
                      {
                        className: "outlined__button",
                        sx: buttonStyle,
                        variant: "outlined",
                        onClick: () => navigate(`${matches[2].pathname}`),
                        children: "Don't Save"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                      import_material33.Button,
                      {
                        className: "outlined__button",
                        sx: buttonStyle,
                        variant: "outlined",
                        onClick: () => setOpen(!1),
                        children: "Cancel"
                      }
                    )
                  ] }) })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
            "input",
            {
              type: "hidden",
              defaultValue: JSON.stringify(lineArray),
              value: JSON.stringify(lineData),
              name: "lines"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
            "input",
            {
              type: "hidden",
              value: JSON.stringify(lineArray),
              name: "prevLines"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "userId", value: id }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
            DraftEditor,
            {
              title: param.title,
              lines: lineArray,
              collectLineData
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_material33.Box, { display: "flex", justifyContent: "flex-end", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(combo_button_default, { name: "_action", value: "post_details" }) })
      ]
    }
  ) });
}
var edit_default = edit;

// app/routes/profile.$user/index.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => profile_default4
});
var import_material34 = require("@mui/material"), import_system2 = require("@mui/system"), import_jsx_runtime41 = require("react/jsx-runtime");
function DefaultPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    import_system2.Box,
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      sx: { height: "90vh" },
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        import_material34.Typography,
        {
          sx: {
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "18px",
            color: "#8c8c8c"
          },
          children: "Select a content to get a detailed view"
        }
      )
    }
  );
}
var profile_default4 = DefaultPage;

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action7,
  loader: () => loader9
});
var import_cloudflare7 = require("@remix-run/cloudflare");
var action7 = async ({ request }) => logout(request), loader9 = async () => (0, import_cloudflare7.redirect)("/");

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_material35 = require("@mui/material"), import_react56 = require("@remix-run/react"), import_jsx_runtime42 = require("react/jsx-runtime");
function Index() {
  let navigate = (0, import_react56.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_material35.Button, { variant: "outlined", onClick: () => navigate("/login"), children: "login" });
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action8,
  default: () => Login,
  loader: () => loader10
});
var import_cloudflare8 = require("@remix-run/cloudflare");
var Z2 = __toESM(require("zod")), import_material36 = require("@mui/material"), import_styles7 = require("@mui/material/styles"), import_react57 = require("@remix-run/react");

// app/utils/validate-action.ts
async function validateAction({
  request,
  schema: schema3
}) {
  let formData = await request.formData(), body = Object.fromEntries(formData);
  try {
    return { formData: schema3.parse(body), errors: null };
  } catch (e) {
    return {
      formData: body,
      errors: e.issues.reduce((acc, curr) => {
        let key = curr.path[0];
        return acc[key] = curr.message, acc;
      }, {})
    };
  }
}

// app/routes/login.tsx
var import_react58 = require("react"), import_jsx_runtime43 = require("react/jsx-runtime"), schema2 = Z2.object({
  username: Z2.string().email("Invalid email").nonempty("Email is required"),
  password: Z2.string().nonempty("Password is required")
}), loader10 = async ({ request }) => (await getSession(request.headers.get("Cookie"))).get("token") ? (0, import_cloudflare8.redirect)("/") : null, action8 = async ({ request }) => {
  let { formData, errors } = await validateAction({
    request,
    schema: schema2
  });
  if (errors)
    return { errors };
  let formDatas = new FormData();
  formDatas.append("username", formData.username), formDatas.append("password", formData.password);
  let res = await fetch("https://nextline.dev/auth/jwt/login", {
    method: "POST",
    body: formDatas
  }), data = await res.json(), session = await getSession(request.headers.get("Cookie"));
  session.set("token", data == null ? void 0 : data.access_token);
  let cookie = await commitSession(session), user;
  data.access_token && (user = await fetch("https://nextline.dev/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${data.access_token}`
    }
  }));
  let userData = await (user == null ? void 0 : user.json());
  return userData ? (0, import_cloudflare8.redirect)(`/profile/${userData == null ? void 0 : userData.username}`, {
    headers: {
      "Set-Cookie": cookie
    }
  }) : { responseStatus: res.status, data };
};
function Login() {
  let { responseStatus, errors } = (0, import_react57.useActionData)() ?? {}, theme2 = (0, import_styles7.createTheme)(), displayText = "logged in";
  return (0, import_react58.useEffect)(() => {
    responseStatus && Status(responseStatus, displayText);
  }, [responseStatus]), /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_styles7.ThemeProvider, { theme: theme2, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_material36.Container, { component: "main", maxWidth: "xs", children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_material36.CssBaseline, {}),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
      import_material36.Box,
      {
        sx: {
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_material36.Avatar, { sx: { m: 1, bgcolor: "secondary.main" } }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_material36.Typography, { component: "h1", variant: "h5", children: "Sign in" }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_material36.Box, { sx: { mt: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react57.Form, { method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              import_material36.TextField,
              {
                margin: "normal",
                fullWidth: !0,
                id: "email",
                label: "Email Address",
                name: "username",
                autoComplete: "email",
                autoFocus: !0,
                error: Boolean(!!(errors != null && errors.username)),
                helperText: errors ? errors.username : null
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              import_material36.TextField,
              {
                margin: "normal",
                fullWidth: !0,
                name: "password",
                label: "Password",
                type: "password",
                id: "password",
                autoComplete: "current-password",
                error: Boolean(!!(errors != null && errors.password)),
                helperText: errors ? errors.password : null
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_material36.Typography, { style: { color: "#d32f2f" }, variant: "subtitle2" }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              import_material36.Button,
              {
                type: "submit",
                fullWidth: !0,
                variant: "contained",
                sx: { mt: 3, mb: 2 },
                children: "Sign In"
              }
            )
          ] }) })
        ]
      }
    )
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "5e89fce3", entry: { module: "/build/entry.client-QTO33CQM.js", imports: ["/build/_shared/chunk-XZF2W5BU.js", "/build/_shared/chunk-LRY6CUTM.js", "/build/_shared/chunk-2ASIBU3S.js", "/build/_shared/chunk-ADMCF34Z.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XOLNRBJK.js", imports: ["/build/_shared/chunk-ESC4AXJG.js", "/build/_shared/chunk-7QCHBQN2.js", "/build/_shared/chunk-XFJUDCR4.js", "/build/_shared/chunk-MVWL6LGM.js", "/build/_shared/chunk-TJSH52E2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/contribution/$id.$title": { id: "routes/contribution/$id.$title", parentId: "root", path: "contribution/:id/:title", index: void 0, caseSensitive: void 0, module: "/build/routes/contribution/$id.$title-ZWHQJPHN.js", imports: ["/build/_shared/chunk-44T3NJQK.js", "/build/_shared/chunk-USCWDYGO.js", "/build/_shared/chunk-B4XE4EK6.js", "/build/_shared/chunk-AMAL3YU5.js", "/build/_shared/chunk-H3OELVYX.js", "/build/_shared/chunk-QT3WMYCQ.js", "/build/_shared/chunk-IJQ7OUN2.js", "/build/_shared/chunk-5WYM7UP5.js", "/build/_shared/chunk-NDWFRM5E.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/contribution/$id.$title/index": { id: "routes/contribution/$id.$title/index", parentId: "routes/contribution/$id.$title", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/contribution/$id.$title/index-DHGGQJVD.js", imports: ["/build/_shared/chunk-TJSH52E2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contribution/$id.$title/line.$lineId": { id: "routes/contribution/$id.$title/line.$lineId", parentId: "routes/contribution/$id.$title", path: "line/:lineId", index: void 0, caseSensitive: void 0, module: "/build/routes/contribution/$id.$title/line.$lineId-CRHD5UPY.js", imports: ["/build/_shared/chunk-XFJUDCR4.js", "/build/_shared/chunk-TJSH52E2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/contribution/$leafId": { id: "routes/contribution/$leafId", parentId: "root", path: "contribution/:leafId", index: void 0, caseSensitive: void 0, module: "/build/routes/contribution/$leafId-ICLGBSF2.js", imports: ["/build/_shared/chunk-B4XE4EK6.js", "/build/_shared/chunk-AMAL3YU5.js", "/build/_shared/chunk-T6OGJ7VD.js", "/build/_shared/chunk-H3OELVYX.js", "/build/_shared/chunk-QT3WMYCQ.js", "/build/_shared/chunk-NDWFRM5E.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-VOOMPUIY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-UW6T5RVY.js", imports: ["/build/_shared/chunk-W6JX2XXD.js", "/build/_shared/chunk-44T3NJQK.js", "/build/_shared/chunk-IJQ7OUN2.js", "/build/_shared/chunk-5WYM7UP5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-76YZR4YI.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.$user": { id: "routes/profile.$user", parentId: "root", path: "profile/:user", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user-CRQ4XFMX.js", imports: ["/build/_shared/chunk-T6OGJ7VD.js", "/build/_shared/chunk-H3OELVYX.js", "/build/_shared/chunk-QT3WMYCQ.js", "/build/_shared/chunk-5WYM7UP5.js", "/build/_shared/chunk-NDWFRM5E.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/profile.$user/$id.$title": { id: "routes/profile.$user/$id.$title", parentId: "routes/profile.$user", path: ":id/:title", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user/$id.$title-ECNBLUF7.js", imports: ["/build/_shared/chunk-TJSH52E2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.$user/$id.$title/edit": { id: "routes/profile.$user/$id.$title/edit", parentId: "routes/profile.$user/$id.$title", path: "edit", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user/$id.$title/edit-BQZP2ZTA.js", imports: ["/build/_shared/chunk-A6IV2Q4U.js", "/build/_shared/chunk-HQKFP6WZ.js", "/build/_shared/chunk-L5IOTIL6.js", "/build/_shared/chunk-W7ISSDTS.js", "/build/_shared/chunk-IJQ7OUN2.js", "/build/_shared/chunk-MVWL6LGM.js", "/build/_shared/chunk-5WYM7UP5.js", "/build/_shared/chunk-NDWFRM5E.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.$user/$id.$title/form-details": { id: "routes/profile.$user/$id.$title/form-details", parentId: "routes/profile.$user/$id.$title", path: "form-details", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user/$id.$title/form-details-4MNDQTVS.js", imports: ["/build/_shared/chunk-W6JX2XXD.js", "/build/_shared/chunk-XFJUDCR4.js", "/build/_shared/chunk-W7ISSDTS.js", "/build/_shared/chunk-5WYM7UP5.js", "/build/_shared/chunk-NDWFRM5E.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/profile.$user/$id.$title/index": { id: "routes/profile.$user/$id.$title/index", parentId: "routes/profile.$user/$id.$title", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/profile.$user/$id.$title/index-BJ5YWTSO.js", imports: ["/build/_shared/chunk-A6IV2Q4U.js", "/build/_shared/chunk-HQKFP6WZ.js", "/build/_shared/chunk-NDWFRM5E.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/profile.$user/$id.$title/view-details": { id: "routes/profile.$user/$id.$title/view-details", parentId: "routes/profile.$user/$id.$title", path: "view-details", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user/$id.$title/view-details-QH2MZBGS.js", imports: ["/build/_shared/chunk-XFJUDCR4.js", "/build/_shared/chunk-NDWFRM5E.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.$user/$type.add-content": { id: "routes/profile.$user/$type.add-content", parentId: "routes/profile.$user", path: ":type/add-content", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user/$type.add-content-XI2ROUYW.js", imports: ["/build/_shared/chunk-L5IOTIL6.js", "/build/_shared/chunk-W7ISSDTS.js", "/build/_shared/chunk-IJQ7OUN2.js", "/build/_shared/chunk-MVWL6LGM.js", "/build/_shared/chunk-TJSH52E2.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/profile.$user/index": { id: "routes/profile.$user/index", parentId: "routes/profile.$user", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/profile.$user/index-3BOUNQ65.js", imports: ["/build/_shared/chunk-TJSH52E2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.$user/selectcontent": { id: "routes/profile.$user/selectcontent", parentId: "routes/profile.$user", path: "selectcontent", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.$user/selectcontent-6RAUX6LG.js", imports: ["/build/_shared/chunk-HQKFP6WZ.js", "/build/_shared/chunk-XFJUDCR4.js", "/build/_shared/chunk-TJSH52E2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-5E89FCE3.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contribution/$id.$title": {
    id: "routes/contribution/$id.$title",
    parentId: "root",
    path: "contribution/:id/:title",
    index: void 0,
    caseSensitive: void 0,
    module: id_title_exports
  },
  "routes/contribution/$id.$title/line.$lineId": {
    id: "routes/contribution/$id.$title/line.$lineId",
    parentId: "routes/contribution/$id.$title",
    path: "line/:lineId",
    index: void 0,
    caseSensitive: void 0,
    module: line_lineId_exports
  },
  "routes/contribution/$id.$title/index": {
    id: "routes/contribution/$id.$title/index",
    parentId: "routes/contribution/$id.$title",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/contribution/$leafId": {
    id: "routes/contribution/$leafId",
    parentId: "root",
    path: "contribution/:leafId",
    index: void 0,
    caseSensitive: void 0,
    module: leafId_exports
  },
  "routes/profile.$user": {
    id: "routes/profile.$user",
    parentId: "root",
    path: "profile/:user",
    index: void 0,
    caseSensitive: void 0,
    module: profile_user_exports
  },
  "routes/profile.$user/$type.add-content": {
    id: "routes/profile.$user/$type.add-content",
    parentId: "routes/profile.$user",
    path: ":type/add-content",
    index: void 0,
    caseSensitive: void 0,
    module: type_add_content_exports
  },
  "routes/profile.$user/selectcontent": {
    id: "routes/profile.$user/selectcontent",
    parentId: "routes/profile.$user",
    path: "selectcontent",
    index: void 0,
    caseSensitive: void 0,
    module: selectcontent_exports
  },
  "routes/profile.$user/$id.$title": {
    id: "routes/profile.$user/$id.$title",
    parentId: "routes/profile.$user",
    path: ":id/:title",
    index: void 0,
    caseSensitive: void 0,
    module: id_title_exports2
  },
  "routes/profile.$user/$id.$title/form-details": {
    id: "routes/profile.$user/$id.$title/form-details",
    parentId: "routes/profile.$user/$id.$title",
    path: "form-details",
    index: void 0,
    caseSensitive: void 0,
    module: form_details_exports
  },
  "routes/profile.$user/$id.$title/view-details": {
    id: "routes/profile.$user/$id.$title/view-details",
    parentId: "routes/profile.$user/$id.$title",
    path: "view-details",
    index: void 0,
    caseSensitive: void 0,
    module: view_details_exports
  },
  "routes/profile.$user/$id.$title/index": {
    id: "routes/profile.$user/$id.$title/index",
    parentId: "routes/profile.$user/$id.$title",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: id_exports2
  },
  "routes/profile.$user/$id.$title/edit": {
    id: "routes/profile.$user/$id.$title/edit",
    parentId: "routes/profile.$user/$id.$title",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/profile.$user/index": {
    id: "routes/profile.$user/index",
    parentId: "routes/profile.$user",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
