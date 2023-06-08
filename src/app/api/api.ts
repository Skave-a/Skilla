import { formatDate } from '@/utils/fns';
import { IFetchData } from '@/utils/types';

export async function getCalls() {
  const url = 'https://api.skilla.ru/mango/getList';
  const data = {
    date_start: '2022-04-19',
    date_end: formatDate(new Date()),
    in_out: 0,
  };
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer testtoken',
  };

  try {
    const resp = await fetch(`${url}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });
    const calls: IFetchData = await resp.json();
    return calls.results;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getAudio(id: string, idPartner: string) {
  const url = 'https://api.skilla.ru/mango/getList';
  const data = {
    record: id,
    partnership_id: idPartner,
  };
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer testtoken',
  };

  try {
    const resp = await fetch(`${url}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });
    const call = await resp.json();
    return call;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
