import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import microConfig from './mikro-orm.config';
const main = async () => {
    const orm = await MikroORM.init(microConfig);
    orm.em.create(Post, { title: 'my first post' });
};
main();
//# sourceMappingURL=index.js.map