const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8080,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				"mfe@products":
					"name_mfe_products@http://localhost:8081/remoteEntry.js",
			},
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
