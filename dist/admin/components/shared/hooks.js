"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAdminUpdateProductMediaMutation = exports.useAdminUpdateOnboardingStateMutation = exports.useAdminProductMedias = exports.useAdminProductMedia = exports.useAdminOnboardingState = exports.useAdminDeleteProductMediaMutation = exports.useAdminCreateProductMediaMutation = exports.useWindowDimensions = void 0;
const react_1 = require("react");
const medusa_react_1 = require("medusa-react");
const { useAdminEntity: useAdminOnboardingState, useAdminUpdateMutation: useAdminUpdateOnboardingStateMutation, } = (0, medusa_react_1.createCustomAdminHooks)("onboarding", "onboarding_state");
exports.useAdminOnboardingState = useAdminOnboardingState;
exports.useAdminUpdateOnboardingStateMutation = useAdminUpdateOnboardingStateMutation;
const { useAdminEntity: useAdminProductMedia, useAdminEntities: useAdminProductMedias, useAdminCreateMutation: useAdminCreateProductMediaMutation, useAdminDeleteMutation: useAdminDeleteProductMediaMutation, useAdminUpdateMutation: useAdminUpdateProductMediaMutation, } = (0, medusa_react_1.createCustomAdminHooks)("product-media", "product_media");
exports.useAdminProductMedia = useAdminProductMedia;
exports.useAdminProductMedias = useAdminProductMedias;
exports.useAdminCreateProductMediaMutation = useAdminCreateProductMediaMutation;
exports.useAdminDeleteProductMediaMutation = useAdminDeleteProductMediaMutation;
exports.useAdminUpdateProductMediaMutation = useAdminUpdateProductMediaMutation;
const useWindowDimensions = () => {
    const [dimensions, setDimensions] = (0, react_1.useState)({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    (0, react_1.useEffect)(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return dimensions;
};
exports.useWindowDimensions = useWindowDimensions;
