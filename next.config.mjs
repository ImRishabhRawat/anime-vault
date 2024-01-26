/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// domains: ["shikimori.one", "other-domain.com"],
		remotePatterns: [
			{ protocol: "https", hostname: "shikimori.one", pathname: "**" },
			{ protocol: "https", hostname: "other-domain.com", pathname: "**" },
		],
	},
};

export default nextConfig;
