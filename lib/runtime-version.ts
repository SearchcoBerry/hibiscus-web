// 本番で動いている Node.js の版を Vercel のログで確かめるための1行。
// Edge では process.version が無いので、Node.js で動くときだけ返す。
export function runtimeVersionLine(
  env: Record<string, string | undefined> = process.env,
): string | null {
  if (env.NEXT_RUNTIME !== "nodejs") return null;
  return `[runtime] node=${process.version}`;
}
