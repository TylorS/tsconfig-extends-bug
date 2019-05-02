// Lives in `src` directory.
import { describe, it } from "@typed/test";

export const dummyTest = describe("dummy", [
    it("runs tests", ({ ok }) => ok(true))
]);
