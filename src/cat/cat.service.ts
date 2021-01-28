import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository } from '@scalio-oss/nest-couchbase';
import { Cat } from './cat.entity';
import { v1 as uuid } from 'uuid';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}
  findOne(id: string): Promise<Cat> {
    return this.catsRepository.get(id);
  }
}
