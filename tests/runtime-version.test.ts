import { test } from "node:test";
import assert from "node:assert/strict";
import { runtimeVersionLine } from "../lib/runtime-version.ts";

// 背景: 2026-10-21 の Node.js セキュリティ更新（修正版 24.22.1）が本番に入ったかを、
// Vercel のログで確かめるため、サーバーの起動時に Node.js の版を1行出す。

test("Node.js で動くときは、版を1行で返す", () => {
  assert.equal(
    runtimeVersionLine({ NEXT_RUNTIME: "nodejs" }),
    `[runtime] node=${process.version}`,
  );
  assert.match(runtimeVersionLine({ NEXT_RUNTIME: "nodejs" }) ?? "", /^\[runtime\] node=v\d+\.\d+\.\d+$/);
});

test("Edge で動くときは、何も返さない", () => {
  assert.equal(runtimeVersionLine({ NEXT_RUNTIME: "edge" }), null);
});

test("NEXT_RUNTIME が無いときは、何も返さない", () => {
  assert.equal(runtimeVersionLine({}), null);
});
