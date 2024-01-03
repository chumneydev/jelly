import { reef, jelly, jellyComponents, jellyPages } from "@defaults/frameworkUrls";
import conditionallyPrepareFiles from "~utils/framework-preperation/conditionallyPrepareFiles";
import handleDataAttributes from "~utils/framework-preperation/handleDataAttributes";
import isInDevelopment from "~utils/framework-preperation/isInDevelopment";

console.log("isInDevelopment", isInDevelopment());

// Load Reef and Jelly
conditionallyPrepareFiles(isInDevelopment(), reef);
conditionallyPrepareFiles(false, jelly);
handleDataAttributes("jelly-page", jellyPages);
handleDataAttributes("jelly-components", jellyComponents);
