// Derivation of naming:
// "mfe@products": this comes from container's webpack file's ModuleFederationPlugin.remotes."mfe@products"
// "ProductsIndex": this is an alias defined product's webpack file's ModuleFederationPlugin.exposes["./ProductsIndex"]
import "mfe@products/ProductsIndex";

console.log("CONTAINER");
