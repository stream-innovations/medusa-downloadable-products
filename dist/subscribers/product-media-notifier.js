"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const product_media_variant_1 = require("../models/product-media-variant");
class MySubscriber {
    constructor({ manager, eventBusService, productMediaService, lineItemService, productVariantService, orderService, downloadAuthorizationService, }) {
        this.handleOrderPlaced = async (data) => {
            const items = await this.lineItemService.list({ order_id: data.id });
            const rawMedia = await Promise.all(items.map(async (item) => {
                const media = await this.productMediaService.list({
                    variant_id: item.variant_id,
                    attachment_type: product_media_variant_1.ProductMediaVariantType.MAIN,
                }, { take: 1 });
                if (media.length > 0) {
                    return {
                        lineItemId: item.id,
                        media: media[0],
                    };
                }
                return null;
            }));
            const media = rawMedia.filter((m) => m !== null);
            if (media.length > 0) {
                const order = await this.orderService.retrieve(data.id);
                await Promise.all(media.map(async (m) => {
                    // create a unique token for the product media download
                    const token = this.authorizationService.createToken(order.id, m.lineItemId, m.media.id);
                    // Uncomment this if you wanna grab the token in the console
                    // console.log(token);
                    // A subscriber should listen to this event and send the
                    // media to the customer
                    return this.eventBusService.emit("product-media.send-media", {
                        mediaId: m.media.id,
                        order_id: order.id,
                        display_id: order.display_id,
                        email: order.email,
                        token,
                    });
                }));
            }
        };
        this.manager_ = manager;
        this.productMediaService = productMediaService;
        this.lineItemService = lineItemService;
        this.productVariantService = productVariantService;
        this.orderService = orderService;
        this.eventBusService = eventBusService;
        this.authorizationService = downloadAuthorizationService;
        eventBusService.subscribe(medusa_1.OrderService.Events.PLACED, this.handleOrderPlaced);
    }
}
exports.default = MySubscriber;
