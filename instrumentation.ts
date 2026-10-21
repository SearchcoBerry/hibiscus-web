// サーバーが起動したときに1回だけ呼ばれる（Next.js の instrumentation）。
// Edge 用のビルドに process.version が入らないよう、Node.js のときだけ読み込む。
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  const { runtimeVersionLine } = await import("./lib/runtime-version");
  const line = runtimeVersionLine();
  if (line) console.log(line);
}
