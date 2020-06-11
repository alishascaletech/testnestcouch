import { Bucket } from "couchbase";

export const CatProvider= [
    {
        provide:'CAT_MODEL',
        useFactory: (bucket: Bucket) =>
            bucket.insert('key1', { name: 'ursu', username: 'plasma' }, (error, result) => {
                if (error) throw error;
                console.log(result.value);
            }),
        inject: ['CONFIG_DATABASE'],
    },
]