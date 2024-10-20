const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	basePath: isProd ? "/amber-and-nathan" : "",
	assetPrefix: isProd ? "/amber-and-nathan/" : "",
	reactStrictMode: true,
};

export default nextConfig;
