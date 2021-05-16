/**
 * a simple example for denly framework
 */

import { Denly } from "./src/mod.ts";

const app = new Denly({
    hostname: "127.0.0.1",
    port: 808,
    options: {
        debug: true
    }
});

app.route.get("/", () => {
    return "Hello Denly!";
});

app.run();
