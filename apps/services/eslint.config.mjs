import { defineConfig } from "eslint/config";
import next from "eslint-config-next";

// Flat config wrapper around eslint-config-next so `npm run lint` works on ESLint 9.
// NOTE: rule severities resolve as "off" on this repo's dependency set, so lint
// exits 0 without checking files — a known gap, not a pass.
const nextConfig = next;
export default defineConfig([...nextConfig]);
