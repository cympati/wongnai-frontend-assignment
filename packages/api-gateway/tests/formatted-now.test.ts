import { formattedNow } from "../services/common.service";
// const { formattedNow } = require("../services/common.service")
test("should first", () => {
  expect(formattedNow(new Date("2011-10-05T14:48:00.000Z"))).toBe("21:48");
});
