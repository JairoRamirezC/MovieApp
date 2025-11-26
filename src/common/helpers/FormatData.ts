
export const FormatData = (dateValue:string):string => {
  if (isNaN(Date.parse(dateValue))) {
    return '';
  }

  const [year, month, day] = dateValue.split('-');
  if (!year || !month || !day) {
    return '';
  }
  
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: '2-digit' 
  };
  return date?.toLocaleDateString('es-ES', options);
}