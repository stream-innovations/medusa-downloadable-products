import { EntityManager } from "typeorm";
import { LineItemService, OrderService, ProductVariantService } from "@medusajs/medusa";
import { IEventBusService } from "@medusajs/types";
import ProductMediaService from "../services/product-media";
import DownloadAuthorizationService from "../services/download-authorization";
export default class MySubscriber {
    protected readonly manager_: EntityManager;
    protected readonly productMediaService: ProductMediaService;
    protected readonly lineItemService: LineItemService;
    protected readonly productVariantService: ProductVariantService;
    protected readonly orderService: OrderService;
    protected readonly eventBusService: IEventBusService;
    protected readonly authorizationService: DownloadAuthorizationService;
    constructor({ manager, eventBusService, productMediaService, lineItemService, productVariantService, orderService, downloadAuthorizationService, }: {
        manager: EntityManager;
        eventBusService: IEventBusService;
        productMediaService: ProductMediaService;
        lineItemService: LineItemService;
        productVariantService: ProductVariantService;
        orderService: OrderService;
        downloadAuthorizationService: DownloadAuthorizationService;
    });
    handleOrderPlaced: (data: {
        id: string;
    }) => Promise<any>;
}
