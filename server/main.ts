// Dependencies
import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";
import { oakCors } from "@tajpouria/cors";

// Controllers
import { addResposta, getRespostes } from "./api/db/controllers/respostesController.ts"

// Utils
import routeStaticFilesFrom from "./util/routeStaticFilesFrom.ts";

// Mock data
import data from "./api/data.json" with { type: "json" };

export const app = new Application();
const router = new Router();

// Recuperar les respostes
router.get<string>("/api/queSon", async (context) => {
  context.response.body = await getRespostes(context);
})

// Afegir respostes a la BBDD
router.post<string>("/api/afegirResposta", async (context) => {
  context.response.body = await addResposta(context)
})

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(routeStaticFilesFrom([
  `${Deno.cwd()}/client/dist`,
  `${Deno.cwd()}/client/public`,
]));

if (import.meta.main) {
  console.log("Server listening on port http://localhost:8000");
  await app.listen({ port: 8000 });
}
