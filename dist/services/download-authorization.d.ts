import { JwtPayload } from "jsonwebtoken";
declare class DownloadAuthorizationService {
    validateToken(token: string): JwtPayload;
    createToken(orderId: string, lineItemId: string, mediaId: string): any;
}
export default DownloadAuthorizationService;
