import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";

export default {
    entities: [Post],
    dbName: "lireddit",
    type: "postgresql",
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0]; // "as const" makes ts happy and when we go inside the object
// with bob = the above and go to bob.dbName we'll see type lireddit
// as Parameters and the typeof MikroORM give autocomplete inside the export