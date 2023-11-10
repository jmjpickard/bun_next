const build = async () =>
  await Bun.build({
    entrypoints: ["./src/index.tsx"],
    outdir: "./build",
  });

await build();

export {};
