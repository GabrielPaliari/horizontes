import { Injectable } from '@nestjs/common';

@Injectable()
export class WritingLevelService {
  constructor(
    @InjectRepository(Schooling)
    private readonly schoolingRepository: Repository<Schooling>,
  ) {}

  async create(createSchoolingDto: CreateSchoolingDto): Promise<Schooling> {
    const schooling = new Schooling(createSchoolingDto);
    return await this.schoolingRepository.save(schooling);
  }

  async findAll(): Promise<Schooling[]> {
    return await this.schoolingRepository.find();
  }

  async findOne(id: number): Promise<Schooling> {
    return await this.schoolingRepository.findOne(id);
  }

  async update(schooling: Schooling): Promise<UpdateResult> {
    schooling.updated = moment().format('YYYY-MM-DD HH:mm:ss');
    let schoolingToUpdate = await this.findOne(schooling.id);
    schoolingToUpdate = {
      ...schoolingToUpdate,
      ...schooling,
    };
    return await this.schoolingRepository.update(schooling.id, schooling);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.schoolingRepository.delete(id);
  }
}
