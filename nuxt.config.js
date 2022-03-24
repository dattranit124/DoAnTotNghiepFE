export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Cửa hàng quần áo Thúy Hằng",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "/assets/fontawesome-free-5.15.4-web/css/all.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/css/style.css",
      },
    ],
    script: [
      { src: "/assets/js/bootstrap.bundle.min.js" },
    ],
  },
  axios: {
    baseURL: process.env.API_URL || "https://localhost:44316/api/v1"
  },
  auth: {
    localStorage: false,
    // cookie: false,
    redirect: {
      login: "/login",
      logout: '/login',
      callback: '/login',
      home: "/admin"
    },
    strategies: {
      local: {
        // scheme: 'refresh',
        token: {
          property: "access_token",
          global: true,
          require: true,
          type: "Bearer",
          maxAge: 64000
        },
        user: {
          property: false
          // autoFetch: true
        },
        endpoints: {
          // tokenRequired: true,
          //--1. Đăng nhập
          login: {
            url: "/Account/auth",
            method: "post"
          },
          //--2. Lấy thông tin nếu đăng nhập thành công
          user: {
            url: "/Customer/me",
            method: "get",
            // propertyName: null
            // property: false
          },
          //--3. Đăng xuất
          logout: {
            url: "/users/logout",
            method: "post"
          }
        },
        // router: {
        //   middleware: "router"
        // },
      }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    "vue2-editor/nuxt"

  ],
  //--Cấu hình toast mặc định
  toast: {
    position: "top-right",
    duration: 5000,
    register: [
      // Register custom toasts
      {
        name: "my-error",
        message: "Oops...Something went wrong",
        options: {
          type: "error"
        }
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
   server: {
    port: "8080"
  }
};
