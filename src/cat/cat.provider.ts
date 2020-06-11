import { Cluster } from "couchbase"

export const CatProvider= [
    {
        provide:'CAT_MODEL',
        useFactory: async (cluster: Cluster) =>{
            const bucket = await cluster.openBucket('default');
            bucket.operationTimeout = 30000;
            return bucket.upsert('airline_10_copy', {id: "carol_310", name:"etihad", cost:"2500"},
            (err,res)=>{
                if (err) throw err;
                bucket.get('airline_10_copy', (err, res)=>{
                    if(err) throw err;
                    console.log(res);
                });
            });
        },
        inject: ['CONFIG_DATABASE'],
    },
]