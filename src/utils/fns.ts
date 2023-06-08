import callIn from '@/assets/icons_table/callIN.svg';
import callOut from '@/assets/icons_table/callOut.svg';
import callMiss from '@/assets/icons_table/callMiss.svg';

export function getTimeFromDateTime(dateTimeStr: string): string {
  const dateTime = new Date(dateTimeStr);
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  return dateTime.toLocaleTimeString('en-US', options);
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
  }
  return phoneNumber;
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

export function getArrowImage(status: string): string {
  if (status === 'Дозвонился') {
    return callIn;
  } else if (status === 'Не дозвонился') {
    return callMiss;
  }
  return callOut;
}
