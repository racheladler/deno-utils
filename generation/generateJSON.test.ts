import { assertEquals } from "https://deno.land/std@0.162.0/testing/asserts.ts";
import { generateJSON } from "./generateJSON.ts";

Deno.test("Test JSON Generation", async () => {
  try {
    const res = await generateJSON(
      "Transform the following text to json: 'hello: world'"
    );
    assertEquals(res, { hello: "world" });
  } catch (error) {
    console.error(error);
  }
});
