const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8081,
	},
	plugins: [
		new ModuleFederationPlugin({
			// This "name" and "filename" will be used in container's webpack file's ModuleFederationPlugin.remotes[key]: <THIS_name>@this_address_with_port/<THIS_filename>
			name: "name_mfe_products",
			filename: "remoteEntry.js",
			exposes: {
				// "./ProductsIndex" is an alias
				"./ProductsIndex": "./src/index",
			},
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
