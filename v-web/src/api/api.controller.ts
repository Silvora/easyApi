import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { query } from 'express';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Controller('api/:parentUrl/:sonUrl')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post()
  create(@Param() param, @Body() body) {
    return this.apiService.create(param, body);
  }

  // @Get()
  // findAll() {
  //   return this.apiService.findAll();
  // }

  @Get()
  findOne(@Param() param, @Query() query) {
    return this.apiService.find(param, query);
  }

  @Put()
  update(@Param() param, @Query() query, @Body() body) {
    return this.apiService.update(param, query, body);
  }

  @Delete()
  remove(@Param() param, @Query() query) {
    return this.apiService.remove(param, query);
  }
}
