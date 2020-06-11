import { Cluster } from "couchbase";

export const ConfigProvider= [
    {
        provide:'CONFIG_DATABASE',
        useFactory: (cluster: Cluster) =>{
            cluster.authenticate('admin', 'admin123');
            const bucket = cluster.openBucket('default');
        },
        inject: ['DATABASE_CONNECTION'],
    },
]