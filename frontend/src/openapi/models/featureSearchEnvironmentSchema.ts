/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { FeatureStrategySchema } from './featureStrategySchema';
import type { VariantSchema } from './variantSchema';

/**
 * A detailed description of the feature environment
 */
export interface FeatureSearchEnvironmentSchema {
    /** `true` if the feature is enabled for the environment, otherwise `false`. */
    enabled: boolean;
    /** The name of the environment */
    environment?: string;
    /** The name of the feature */
    featureName?: string;
    /** Whether the feature has any enabled strategies defined. */
    hasEnabledStrategies?: boolean;
    /** Whether the feature has any strategies defined. */
    hasStrategies?: boolean;
    /** The date when metrics where last collected for the feature environment */
    lastSeenAt?: string | null;
    /** The name of the environment */
    name: string;
    /** How many times the toggle evaluated to false in last hour bucket */
    no?: number;
    /** The sort order of the feature environment in the feature environments list */
    sortOrder?: number;
    /** A list of activation strategies for the feature environment */
    strategies?: FeatureStrategySchema[];
    /** The type of the environment */
    type?: string;
    /** The number of defined variants */
    variantCount?: number;
    /** A list of variants for the feature environment */
    variants?: VariantSchema[];
    /** How many times the toggle evaluated to true in last hour bucket */
    yes?: number;
}