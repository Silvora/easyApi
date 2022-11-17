import { Injectable } from '@nestjs/common';
import { CreatePathDto } from './dto/create-path.dto';
import { UpdatePathDto } from './dto/update-path.dto';
//import apiData from 'src/global';

const Mock = require('mockjs');

@Injectable()
export class PathService {
  create(createPathDto: CreatePathDto) {
    const { id, parentUrl, sonUrl } = createPathDto;
    const pathName = `/${parentUrl}/${sonUrl}`;
    const obj = {
      id: id,
      path: pathName,
      headers: {},
      moke: {},
      json: {},
    };
    global.apiData.push(obj);
    //console.log(global.apiData);
    return {
      code: 200,
      url: pathName,
      ...createPathDto,
    };
  }
  createMoke(createPathDto: CreatePathDto) {
    const { jsonData, id } = createPathDto;
    // console.log(Mock.mock(jsonData));
    const json = Mock.mock(jsonData);
    global.apiData.forEach((item) => {
      if (item.id == id) {
        item.moke = jsonData;
        item.json = json;
        // console.log(item);
      }
    });

    return {
      code: 200,
      id: id,
    };
  }

  findAll() {
    return `This action returns all path`;
  }

  findOne(id: number) {
    return `This action returns a #${id} path`;
  }

  update(id: number, updatePathDto: UpdatePathDto) {
    return `This action updates a #${id} path`;
  }

  remove(id: number) {
    return `This action removes a #${id} path`;
  }
}
