import * as couchbase from "couchbase";

export const ConfigProvider= [
    {
        provide:'CONFIG_DATABASE',
        useFactory: () =>{
            const cluster = new couchbase.Cluster();
            return cluster.authenticate('admin', 'admin123');
        },
        inject: ['DATABASE_CONNECTION'],
    },
]