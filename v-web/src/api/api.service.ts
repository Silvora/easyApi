import { Injectable } from '@nestjs/common';
import { UpdateApiDto } from './dto/update-api.dto';
/**
 *
 * ! 增 1000
 * ! 删 0100
 * ! 改 0010
 * ! 查 0001
 */

function pathResult(param) {
  let result = [];
  const { parentUrl, sonUrl } = param;
  const url = `/${parentUrl}/${sonUrl}`;
  global.apiData.forEach((item) => {
    if (item.path === url) {
      result = item.json['data'];
    }
  });
  return result;
}

function queryResult(result, query, info = void 0) {
  let res = [];
  if (JSON.stringify(query) != '{}') {
    res = result.filter((item, idx) => {
      for (const [key, value] of Object.entries(query)) {
        console.log(key, value);
        if (item[key] == value) {
          //console.log('first');
          // const obj = { item: item, idx: idx };
          //item['__idx__'] = idx;
          if (info) item['__info__'] = info;
          return item;
        }
      }
    });
  }
  //console.log(res);

  return res.length ? res : result;
}

@Injectable()
export class ApiService {
  create(param, body) {
    const result = pathResult(param);
    let msg = 'Body object error should not be a {}';
    if (JSON.stringify(body) != '{}') {
      msg = 'ok';
      body.length ? result.push(...body) : result.push(body);
    }

    return {
      code: 200,
      msg: msg,
      push: body,
    };
  }

  find(param, query) {
    // console{.log(param, query);
    // let result = [];
    // const { parentUrl, sonUrl } = param;
    // const url = `/${parentUrl}/${sonUrl}`;
    // global.apiData.forEach((item) => {
    //   if (item.path === url) {
    //     result = item.json;
    //   }
    // });

    const result = pathResult(param);
    const res = queryResult(result, query);
    //console.log('????????', res.item, res.idx);
    // if (JSON.stringify(query) != '{}') {
    //   result = result.filter((item) => {
    //     for (const [key, value] of Object.entries(query)) {
    //       console.log(key, value);
    //       if (item[key] == value) {
    //         //console.log('first');
    //         return item;
    //       }
    //     }
    //   });
    // }

    return {
      code: 200,
      data: res,
    };
  }

  update(param, query, body) {
    const result = pathResult(param);
    const res = queryResult(result, query, '0010');
    console.log(body);

    result.forEach((item, idx) => {
      if (item.__info__ == '0010') {
        if (JSON.stringify(body) == '{}') {
          result.splice(idx, 1);
        } else {
          result.splice(idx, 1, body);
        }
      }
    });

    return {
      code: 200,
      msg: 'ok',
      //id: query,
      put: res,
    };
  }

  remove(param, query) {
    const result = pathResult(param);
    const res = queryResult(result, query, '0100');

    result.forEach((item, idx) => {
      if (item.__info__ == '0100') {
        result.splice(idx, 1);
      }
    });

    return {
      code: 200,
      msg: 'ok',
      delete: res,
    };
  }
}
