import { formatDate } from '@/utils/fns';
import { IFetchData } from '@/utils/types';

const token = 'testtoken';
const urlSkilla = 'https://api.skilla.ru/mango';

export async function getCalls(in_out: number) {
  const inOut = in_out > 1 ? '' : in_out;

  const url = `${urlSkilla}/getList?in_out=${inOut}`;
  const data = {
    date_start: '2022-04-19',
    date_end: formatDate(new Date()),
    in_out: in_out,
  };
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
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
  const url = `${urlSkilla}/getRecord`;
  const data = {
    record: id,
    partnership_id: idPartner,
  };
  const headers = {
    'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
    'Content-Transfer-Encoding': 'binary',
    'Content-Disposition': 'filename="record.mp3"',
    Authorization: `Bearer ${token}`,
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

export async function getEmployees() {
  const url = `${urlSkilla}/partnership/getPersonsList`;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  try {
    const resp = await fetch(`${url}`, {
      method: 'POST',
      headers: headers,
    });
    const call = await resp.json();
    return call;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getCallRecordAudio(recordId: string, partnershipId: string) {
  const url = `${urlSkilla}/getRecord?record=${recordId}&partnership_id=${partnershipId}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
    'Content-Transfer-Encoding': 'binary',
    'Content-Disposition': 'filename="record.mp3"',
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to get call record: ${response.status}`);
  }

  const data = await response.blob();
  const audioUrl = URL.createObjectURL(data);

  const audio = new Audio(audioUrl);

  return audio;
}
