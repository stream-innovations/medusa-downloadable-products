import Widget0, { config as widgetConfig0 } from "./widgets/product-media"
import Page0 from "./routes/productmedia/[id]/page"
import Page1, { config as routeConfig1 } from "./routes/productmedia/page"

const LocalEntry = {
  identifier: "local",
  extensions: [
    { Component: Widget0, config: widgetConfig0 },
    { Component: Page0, config: { path: "/productmedia/:id" } },
    { Component: Page1, config: { ...routeConfig1, path: "/productmedia" } }
  ],
}

export default LocalEntry