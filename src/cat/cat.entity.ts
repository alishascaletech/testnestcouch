import { Entity } from '@scalio-oss/nest-couchbase';

@Entity('cats')
export class Cat {
    id: string;
    name: string;
}