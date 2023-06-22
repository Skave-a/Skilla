import callIn from '@/assets/icons_table/callIN.svg';
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
  const regex = /[a-zA-Z]/;
  if (regex.test(phoneNumber)) {
    return phoneNumber;
  }
  const countryCode = phoneNumber.slice(0, 1);
  const areaCode = phoneNumber.slice(1, 4);
  const firstPart = phoneNumber.slice(4, 7);
  const secondPart = phoneNumber.slice(7, 8);
  const thirdPart = phoneNumber.slice(9, 11);

  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}-${thirdPart}`;
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

export function getArrowImage(status: number) {
  if (status === 0) {
    return callIn;
  } else if (status === 1) {
    return callMiss;
  }
}
