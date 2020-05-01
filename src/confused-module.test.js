import { justFnButNamedContainer } from "./confused-module";

test("justFnButNamedContainer not stubbed", () => {
  expect(justFnButNamedContainer(3)).toBe(6);
});
