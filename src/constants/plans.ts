import { PRICING_DATA, PricingTier } from './pricing';

// Create a flat map of all plans indexed by their ID
export const PLANS: Record<string, PricingTier & { currency: string }> = {};

PRICING_DATA.forEach(category => {
    category.tiers.forEach(tier => {
        if (tier.id) {
            PLANS[tier.id] = {
                ...tier,
                currency: 'USD' // Default currency as per requirements
            };
        }
    });
});

export const getPlanById = (id: string) => {
    return PLANS[id];
};
