'use client';
import { BaseService, NewBaseService } from '@/services';
import axios from 'axios';
import { useEffect } from 'react';
import { Apis } from '@/services/Apis';

const Nomenclatures = () => {
  useEffect(() => {
    // const req = BaseService.get(Api.NOMENCLATURES);
    // BaseService.baseFetch(req).then((res) => console.log(res));

    NewBaseService.get(Apis.NOMENCLATURES)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return <div>nomenclatures</div>;
};
export default Nomenclatures;
