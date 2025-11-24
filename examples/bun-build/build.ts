import UnpluginTypia from '@kennethwkz/unplugin-typia/bun';

await Bun.build({
	entrypoints: ["./index.ts"],
	outdir: "./out",
	plugins: [
    UnpluginTypia({ cache: false })
	]
});
