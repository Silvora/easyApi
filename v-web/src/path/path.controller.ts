import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PathService } from './path.service';
import { CreatePathDto } from './dto/create-path.dto';
import { UpdatePathDto } from './dto/update-path.dto';

@Controller('path')
export class PathController {
  constructor(private readonly pathService: PathService) {}

  @Post()
  create(@Body() createPathDto: CreatePathDto) {
    return this.pathService.create(createPathDto);
  }
  @Post('/moke')
  createMoke(@Body() createPathDto: CreatePathDto) {
    return this.pathService.createMoke(createPathDto);
  }

  @Get()
  findAll() {
    return this.pathService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pathService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePathDto: UpdatePathDto) {
    return this.pathService.update(+id, updatePathDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pathService.remove(+id);
  }
}
