
export const FormatData = (dateValue:string):string => {
  const dateString = dateValue;
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: '2-digit' 
  };
  return date?.toLocaleDateString('es-ES', options);
}