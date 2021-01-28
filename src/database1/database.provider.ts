import * as couchbase from 'couchbase';


​export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => 
      new couchbase.Cluster("couchbase://18.185.74.124"),
}
]

