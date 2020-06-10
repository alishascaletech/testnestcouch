import { Cluster, CouchbaseError } from 'couchbase';

​

const cluster = new Cluster("couchbase://18.185.74.124");

cluster.authenticate('admin', 'admin123');

const bucket = cluster.openBucket('default');

bucket.operationTimeout = 30000;

export const getObject: any | CouchbaseError = async (key: string | Buffer) => {

    return new Promise((resolve, reject) => {

        bucket.get(key, (error, result) => {

          if(error) {
            reject(error);
            return;
          }
          resolve(result);

        });

    });

};

export const upsertObject = async (key: string | Buffer, data: any) => {

    return new Promise((resolve, reject) => {
  
      bucket.upsert(key, data, (error, result) => {
  
        if(error) {
          reject(error);
          return;
        }
        resolve(result);
  
      });
  
    });
  
  };

  export const deleteObject = async (key: string | Buffer) => {

    return new Promise((resolve, reject) => {
  
      bucket.remove(key, (error, result) => {
  
        if(error) {
          reject(error);
          return;
        }
        resolve(result);
  
      });
  
    });
  
  };
   
  export default bucket;