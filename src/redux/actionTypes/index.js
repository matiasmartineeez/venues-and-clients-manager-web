import * as loading from "./loading";
import * as clients from "./clients";
import * as venues from "./venues";

const combined = { ...loading, ...venues, ...clients };

export default combined;
