'use client';
import { BaseService } from '@/services';
import axios from 'axios';
import { useEffect } from 'react';
import { Api } from '@/services/Apis';

const Nomenclatures = () => {
  useEffect(() => {
    const req = BaseService.get(Api.NOMENCLATURES);
    BaseService.baseFetch(req).then((res) => console.log(res));
  }, []);
  return <div>nomenclatures</div>;
};
export default Nomenclatures;
