/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    webpack(config, options) {
        config.module.rules.push({
            test: /.md$/,
            type: 'asset/source',
        });

        return config;
    }
};

export default nextConfig;
