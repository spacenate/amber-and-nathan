// @ts-check
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

export default function config(phase) {
	const isDev = phase === PHASE_DEVELOPMENT_SERVER;
	/**
	 * @type {import('next').NextConfig}
	 */
	const nextConfig = {
		output: "export",
		// basePath: isDev ? undefined : "/amber-and-nathan",
		// assetPrefix: isDev ? undefined : "/amber-and-nathan",
		reactStrictMode: true,
		images: { unoptimized: true },
	};
	return nextConfig;
}
