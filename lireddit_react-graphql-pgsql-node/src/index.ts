import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from './mikro-orm.config'

const main = async () => {
    const orm = await MikroORM.init(microConfig);

    orm.em.create(Post, {title: 'my first post'})
    
};


main();